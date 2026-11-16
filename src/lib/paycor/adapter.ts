/**
 * Paycor ATOM feed -> ITS `Job` list. Pure functions only: no network, no
 * Next.js, no runtime imports, so the tests can run this file directly.
 *
 * Steps: parseFeed (XML -> raw entries), exclusionReason (is the job open?),
 * normalizeEntry (raw entry -> Job), buildJobs (all of the above).
 */
import type { Job, JobCategoryCode, JobPay } from "../../content/jobs";

export type AdapterRules = {
  idPattern: RegExp;
  closedDepartments: string[];
  closedTitlePattern: RegExp;
  hiddenJobIds: string[];
  departmentCategory: Record<string, JobCategoryCode>;
  titleCategoryRules: { pattern: RegExp; category: JobCategoryCode }[];
  categoryLabels: Record<JobCategoryCode, string>;
  maxHourlyRate: number;
  minAnnualSalary: number;
  jobUrl: (id: string) => string;
};

/** One feed entry with only the fields the site uses. Other upstream fields
 *  (channel apply endpoints, priority and so on) are dropped here. */
export type FeedEntry = {
  id: string;
  title: string;
  department: string;
  city: string;
  state: string;
  /** Null when the feed gives no usable number. */
  openings: number | null;
  salary: string;
  published: string;
  updated: string;
  /** Description HTML exactly as Paycor sent it. Not yet safe to render. */
  summaryHtml: string;
};

export class FeedParseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "FeedParseError";
  }
}

/* ------------------------------------------------------------------ */
/* XML                                                                 */
/* ------------------------------------------------------------------ */

const XML_NAMED: Record<string, string> = { lt: "<", gt: ">", amp: "&", quot: '"', apos: "'" };

function decodeEntities(text: string): string {
  return text.replace(/&(#[xX][0-9a-fA-F]+|#\d+|lt|gt|amp|quot|apos);/g, (_whole, ref: string) => {
    if (ref[0] !== "#") return XML_NAMED[ref];
    const hex = ref[1] === "x" || ref[1] === "X";
    const code = parseInt(ref.slice(hex ? 2 : 1), hex ? 16 : 10);
    return Number.isFinite(code) && code > 0 && code <= 0x10ffff ? String.fromCodePoint(code) : "";
  });
}

/** Decodes XML text content once. CDATA sections are taken as written. */
function decodeXmlText(raw: string): string {
  const cdata = /<!\[CDATA\[([\s\S]*?)\]\]>/g;
  let out = "";
  let last = 0;
  let match: RegExpExecArray | null;
  while ((match = cdata.exec(raw))) {
    out += decodeEntities(raw.slice(last, match.index)) + match[1];
    last = cdata.lastIndex;
  }
  return out + decodeEntities(raw.slice(last));
}

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** Own-property check, so names like "constructor" never match a lookup table. */
const has = (table: object, key: string) => Object.prototype.hasOwnProperty.call(table, key);

/** Text of the first <name> element, or null when the element is absent. */
function tagText(xml: string, name: string): string | null {
  const n = escapeRegExp(name);
  const match = new RegExp(`<${n}(?:\\s[^>]*?)?(?:/>|>([\\s\\S]*?)</${n}\\s*>)`).exec(xml);
  if (!match) return null;
  return decodeXmlText(match[1] ?? "").trim();
}

function attribute(xml: string, tag: string, name: string): string | null {
  const match = new RegExp(
    `<${escapeRegExp(tag)}\\s[^>]*?\\b${escapeRegExp(name)}\\s*=\\s*(?:"([^"]*)"|'([^']*)')`,
  ).exec(xml);
  if (!match) return null;
  return decodeEntities(match[1] ?? match[2] ?? "").trim();
}

/**
 * Reads the feed XML into raw entries. Throws FeedParseError when the text is
 * not a complete ATOM feed (an error page, a cut-off response and so on).
 * A complete feed with no entries returns an empty list.
 */
export function parseFeed(xml: string): FeedEntry[] {
  if (!/<feed[\s>]/.test(xml) || !/<\/feed\s*>/.test(xml)) {
    throw new FeedParseError("Response is not a complete ATOM feed");
  }

  const blocks = [...xml.matchAll(/<entry(?:\s[^>]*)?>([\s\S]*?)<\/entry\s*>/g)].map((m) => m[1]);
  const opened = (xml.match(/<entry[\s>]/g) ?? []).length;
  if (opened !== blocks.length) {
    throw new FeedParseError(`Feed has ${opened} entry tags but ${blocks.length} complete entries`);
  }

  return blocks.map((block) => {
    const openingsText = tagText(block, "newton:openings");
    const openings = openingsText && /^\d+$/.test(openingsText) ? Number(openingsText) : null;
    return {
      id: tagText(block, "id") ?? "",
      title: (tagText(block, "title") ?? "").replace(/\s+/g, " "),
      department: (tagText(block, "newton:department") ?? attribute(block, "category", "term") ?? "").replace(/\s+/g, " "),
      city: tagText(block, "newton:location") ?? "",
      state: tagText(block, "newton:state") ?? "",
      openings,
      salary: tagText(block, "newton:salary") ?? "",
      published: tagText(block, "published") ?? "",
      updated: tagText(block, "updated") ?? "",
      summaryHtml: tagText(block, "summary") ?? "",
    };
  });
}

/* ------------------------------------------------------------------ */
/* HTML sanitizer                                                      */
/* ------------------------------------------------------------------ */

/** Source tag -> tag written to the page. Anything not listed is removed and
 *  its text kept. No attribute is ever written, so no link, style, class or
 *  event handler from the feed can reach the page. */
const ALLOWED_TAGS: Record<string, string> = {
  p: "p",
  div: "div",
  ul: "ul",
  ol: "ol",
  li: "li",
  b: "strong",
  strong: "strong",
  i: "em",
  em: "em",
  u: "u",
  blockquote: "blockquote",
  // The page has its own h1 and h2, so description headings start at h3.
  h1: "h3",
  h2: "h3",
  h3: "h3",
  h4: "h4",
  h5: "h4",
  h6: "h4",
};

const VOID_TAGS: Record<string, string> = { br: "<br>", hr: "<hr>" };

const BLOCK_TAGS = new Set(["p", "div", "ul", "ol", "h3", "h4", "blockquote"]);

/** Removed together with everything inside them. */
const DROPPED_WITH_CONTENT = new Set([
  "script",
  "style",
  "iframe",
  "object",
  "embed",
  "applet",
  "noscript",
  "noembed",
  "noframes",
  "template",
  "svg",
  "math",
  "textarea",
  "select",
  "title",
  "head",
  "xmp",
  "plaintext",
  "audio",
  "video",
  "canvas",
]);

const TAG_PATTERN = /<(\/?)([a-zA-Z][a-zA-Z0-9:-]*)((?:"[^"]*"|'[^']*'|[^'">])*)>/y;

/** Keeps well-formed character references, escapes everything else. */
function escapeText(text: string): string {
  return text
    .replace(/&(?!(?:#\d{1,7}|#[xX][0-9a-fA-F]{1,6}|[a-zA-Z][a-zA-Z0-9]{1,31});)/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\u00a0|&nbsp;|&#160;|&#[xX][aA]0;/g, " ");
}

/**
 * Turns untrusted description HTML into a small, safe subset. The output is
 * rebuilt tag by tag from an allowlist rather than cleaned in place: it can
 * only contain the tags in ALLOWED_TAGS and VOID_TAGS, with no attributes,
 * plus escaped text. Tags are always balanced, so the result cannot close or
 * break the elements around it when it is rendered on the server.
 */
export function sanitizeHtml(input: string): string {
  let out = "";
  const stack: string[] = [];
  const length = input.length;
  let i = 0;

  const closeDownTo = (index: number) => {
    while (stack.length > index) out += `</${stack.pop()}>`;
  };

  while (i < length) {
    const lt = input.indexOf("<", i);
    if (lt === -1) {
      out += escapeText(input.slice(i));
      break;
    }
    if (lt > i) out += escapeText(input.slice(i, lt));

    if (input.startsWith("<!--", lt)) {
      const end = input.indexOf("-->", lt + 4);
      i = end === -1 ? length : end + 3;
      continue;
    }
    if (input[lt + 1] === "!" || input[lt + 1] === "?") {
      const end = input.indexOf(">", lt);
      i = end === -1 ? length : end + 1;
      continue;
    }

    TAG_PATTERN.lastIndex = lt;
    const match = TAG_PATTERN.exec(input);
    if (!match) {
      // A stray "<" that does not start a complete tag is shown as text.
      out += "&lt;";
      i = lt + 1;
      continue;
    }
    i = TAG_PATTERN.lastIndex;

    const closing = match[1] === "/";
    const name = match[2].toLowerCase();

    if (DROPPED_WITH_CONTENT.has(name)) {
      if (!closing) {
        const end = new RegExp(`</${name}\\s*>`, "ig");
        end.lastIndex = i;
        i = end.exec(input) ? end.lastIndex : length;
      }
      continue;
    }

    if (has(VOID_TAGS, name)) {
      if (!closing) out += VOID_TAGS[name];
      continue;
    }

    const mapped = has(ALLOWED_TAGS, name) ? ALLOWED_TAGS[name] : null;
    if (!mapped) {
      // Unknown tag: drop the tag, keep its text. Table cells and rows get a
      // separator so their text does not run together.
      if (closing && (name === "td" || name === "th")) out += " ";
      if (closing && name === "tr") out += "<br>";
      continue;
    }

    if (closing) {
      const index = stack.lastIndexOf(mapped);
      if (index !== -1) closeDownTo(index);
      continue;
    }

    // Close what a browser would close implicitly, so nesting stays valid.
    if (BLOCK_TAGS.has(mapped) || mapped === "li") {
      const openP = stack.lastIndexOf("p");
      if (openP !== -1) closeDownTo(openP);
    }
    if (mapped === "li") {
      const openLi = stack.lastIndexOf("li");
      const openList = Math.max(stack.lastIndexOf("ul"), stack.lastIndexOf("ol"));
      if (openLi > openList) closeDownTo(openLi);
    }
    out += `<${mapped}>`;
    stack.push(mapped);
  }
  closeDownTo(0);

  // Tidy the rebuilt markup: spacer breaks and empty wrappers add blank gaps.
  const blocks = "li|p|div|h3|h4|blockquote";
  out = out
    .replace(/\s+/g, " ")
    .replace(new RegExp(`(?: ?<br> ?)+(?=</(?:${blocks})>)`, "g"), "")
    .replace(new RegExp(`(<(?:${blocks})>)(?: ?<br> ?)+`, "g"), "$1")
    .replace(/(?: ?<br> ?){3,}/g, "<br><br>");
  const empty = /<(p|div|strong|em|u|h3|h4|li|ul|ol|blockquote)> ?<\/\1>/g;
  for (let pass = 0; pass < 6; pass += 1) {
    const next = out.replace(empty, "");
    if (next === out) break;
    out = next;
  }
  return out.trim();
}

/* ------------------------------------------------------------------ */
/* Normalization                                                       */
/* ------------------------------------------------------------------ */

/**
 * Reads Paycor's pay text. Returns null unless the text has a dollar amount,
 * a clear unit, and amounts that are believable for that unit. This is what
 * stops "$55,000 - $75,000 per hour" from being shown as an hourly rate.
 */
export function parsePay(
  text: string,
  limits: Pick<AdapterRules, "maxHourlyRate" | "minAnnualSalary">,
): JobPay | null {
  const clean = text.replace(/\s+/g, " ").trim();
  if (!clean) return null;

  let unit: JobPay["unit"];
  if (/\b(?:per|an|a)\s+(?:hour|hr)\b|\/\s*(?:hour|hr)\b|\bhourly\b/i.test(clean)) unit = "hour";
  else if (/\b(?:per|a)\s+(?:year|yr|annum)\b|\/\s*(?:year|yr)\b|\b(?:annually|annual|yearly)\b/i.test(clean)) unit = "year";
  else return null;

  const amounts = [...clean.matchAll(/\$\s?(\d[\d,]*(?:\.\d+)?)\s?(k\b)?/gi)].map(
    (m) => Number(m[1].replace(/,/g, "")) * (m[2] ? 1000 : 1),
  );
  if (amounts.length === 0 || amounts.some((n) => !Number.isFinite(n) || n <= 0)) return null;

  const believable =
    unit === "hour"
      ? amounts.every((n) => n <= limits.maxHourlyRate)
      : amounts.every((n) => n >= limits.minAnnualSalary);
  return believable ? { text: clean, unit } : null;
}

export function mapCategory(
  department: string,
  title: string,
  rules: Pick<AdapterRules, "departmentCategory" | "titleCategoryRules">,
): JobCategoryCode | null {
  const key = department.trim().toLowerCase();
  if (has(rules.departmentCategory, key)) return rules.departmentCategory[key];
  for (const rule of rules.titleCategoryRules) {
    if (rule.pattern.test(title)) return rule.category;
  }
  return null;
}

export type ExclusionReason =
  | "invalid"
  | "hidden"
  | "no-department"
  | "closed-department"
  | "closed-title"
  | "no-openings"
  | "duplicate";

/**
 * Why an entry must not be shown as an open job, or null when it may be.
 *
 * Being in the feed is not enough. The feed has no status field, so a job is
 * treated as open only when it is published and carries none of ITS's closed
 * marks. An entry with no department cannot be checked against those marks
 * and is held back.
 */
export function exclusionReason(entry: FeedEntry, rules: AdapterRules): ExclusionReason | null {
  if (!rules.idPattern.test(entry.id) || !entry.title.trim()) return "invalid";
  if (rules.hiddenJobIds.includes(entry.id)) return "hidden";
  const department = entry.department.trim().toLowerCase();
  if (!department) return "no-department";
  if (rules.closedDepartments.includes(department)) return "closed-department";
  if (rules.closedTitlePattern.test(entry.title)) return "closed-title";
  if (entry.openings === 0) return "no-openings";
  return null;
}

const toIso = (value: string): string | null => {
  const time = Date.parse(value);
  return Number.isNaN(time) ? null : new Date(time).toISOString();
};

export function normalizeEntry(entry: FeedEntry, rules: AdapterRules): Job {
  const category = mapCategory(entry.department, entry.title, rules);
  return {
    id: entry.id,
    slug: entry.id,
    title: entry.title.trim(),
    category,
    categoryDisplay: category ? rules.categoryLabels[category] : entry.department.trim(),
    location: [entry.city.trim(), entry.state.trim()].filter(Boolean).join(", "),
    employmentType: null,
    pay: parsePay(entry.salary, rules),
    postedAt: toIso(entry.published),
    updatedAt: toIso(entry.updated),
    descriptionHtml: sanitizeHtml(entry.summaryHtml),
    applyUrl: rules.jobUrl(entry.id),
  };
}

export type BuildResult = {
  /** Open jobs, newest posting first. */
  jobs: Job[];
  /** Entries in the feed, open or not. */
  totalEntries: number;
  excluded: Partial<Record<ExclusionReason, number>>;
};

export function buildJobs(xml: string, rules: AdapterRules): BuildResult {
  const entries = parseFeed(xml);
  const excluded: Partial<Record<ExclusionReason, number>> = {};
  const seen = new Set<string>();
  const jobs: Job[] = [];

  for (const entry of entries) {
    let reason = exclusionReason(entry, rules);
    if (!reason && seen.has(entry.id)) reason = "duplicate";
    if (reason) {
      excluded[reason] = (excluded[reason] ?? 0) + 1;
      continue;
    }
    seen.add(entry.id);
    jobs.push(normalizeEntry(entry, rules));
  }

  // Newest posting first; jobs with no posting date go last. Array.sort is
  // stable, so ties keep the feed's own order.
  jobs.sort((a, b) => (b.postedAt ?? "").localeCompare(a.postedAt ?? ""));

  return { jobs, totalEntries: entries.length, excluded };
}
