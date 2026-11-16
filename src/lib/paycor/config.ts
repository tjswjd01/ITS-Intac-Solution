/**
 * Paycor Recruiting settings. This is the one file to edit when the rules for
 * which jobs show, or how they are grouped, need to change.
 *
 * No relative runtime imports here, so the tests can load this file directly.
 */
import type { JobCategoryCode } from "../../content/jobs";

export const PAYCOR_CLIENT_ID = "8a7883d08c7f5f9a018c838a97c90174";

const CAREER_BASE = "https://recruitingbypaycor.com/career";

/** ATOM feed of every job published on the ITS Paycor career page. */
export const PAYCOR_FEED_URL = `${CAREER_BASE}/CareerAtomFeed.action?clientId=${PAYCOR_CLIENT_ID}`;

/** Paycor's own hosted job list, used as the fallback link during an outage. */
export const PAYCOR_CAREER_HOME_URL = `${CAREER_BASE}/CareerHome.action?clientId=${PAYCOR_CLIENT_ID}`;

/** How long a fetched feed is reused before the server asks Paycor again. */
export const FEED_REVALIDATE_SECONDS = 30 * 60;

export const FEED_TIMEOUT_MS = 10_000;

/** Paycor job ids are 32 lowercase hex characters. Anything else is rejected,
 *  so an id is always safe to use in a route and in the apply link. */
export const PAYCOR_ID_PATTERN = /^[0-9a-f]{32}$/;

/**
 * The candidate-facing page for one job, where the applicant reads the
 * posting and applies. This is the exact link Paycor's career page gives for
 * each job (checked against all 53 feed entries on 2026-11-15).
 */
export const paycorJobUrl = (id: string) =>
  `${CAREER_BASE}/JobIntroduction.action?clientId=${PAYCOR_CLIENT_ID}&id=${id}&source=&lang=en`;

/**
 * Which jobs are open.
 *
 * The feed has no status field: it lists every job published in Paycor, and
 * ITS marks a filled job by moving it to a department named "CLOSED" or by
 * adding "[CLOSED]" to its title. A job shows on the site only when it is
 * published and carries none of these marks.
 */
export const CLOSED_DEPARTMENTS = ["closed"];

/** Matches "[CLOSED] Title", "(Closed) Title", "Title [closed]", "CLOSED - Title"
 *  and "CLOSED: Title". A real title such as "Closed-Loop Controls Engineer"
 *  does not match. */
export const CLOSED_TITLE_PATTERN = /[[(]\s*closed\s*[\])]|^\s*closed\s*[:\-–—|]\s/i;

/**
 * Paycor job ids (the 32-character id, not the "294-17820" job number) to hide
 * even though Paycor still lists them as open. Add an id here to take a job
 * off the site straight away; the lasting fix is to close it in Paycor.
 */
export const HIDDEN_JOB_IDS: string[] = [];

/**
 * Paycor department -> ITS category. Keys are lowercase.
 * A department that is missing here falls through to TITLE_CATEGORY_RULES.
 */
export const DEPARTMENT_CATEGORY: Record<string, JobCategoryCode> = {
  engineering: "engineering",
  "software engineering": "it-software",
  "it/technology": "it-software",
  "accounting & finance": "finance-accounting",
  "human resource": "hr-administration",
  "executive & administrative": "hr-administration",
  "logistics management": "logistics-warehouse",
  "supply chain management": "logistics-warehouse",
  "service operation": "manufacturing-operations",
};

/**
 * Used only when the department is not in DEPARTMENT_CATEGORY (for example
 * "Direct Hire", which is a hiring type, not a job function). First match
 * wins. A job that matches nothing is still listed; it shows its Paycor
 * department as its label and sits outside the six category buttons.
 */
export const TITLE_CATEGORY_RULES: { pattern: RegExp; category: JobCategoryCode }[] = [
  { pattern: /\b(software|developer|tester|it support|systems? admin)|\bqa\b/i, category: "it-software" },
  { pattern: /\b(engineer|technician)/i, category: "engineering" },
  { pattern: /\b(accountant|accounting|finance|financial|payroll)/i, category: "finance-accounting" },
  { pattern: /\b(hr|human resources?|recruiter|recruiting|administrative|admin assistant)\b/i, category: "hr-administration" },
  { pattern: /\b(logistics|warehouse|supply chain|procurement|forklift|inventory|materials?)\b/i, category: "logistics-warehouse" },
  { pattern: /\b(operations?|production|manufacturing|refurbishment|assembly)\b/i, category: "manufacturing-operations" },
];

/** Pay sanity limits. A figure outside these is treated as a wrong unit
 *  label in Paycor and the pay line is left off rather than shown wrong. */
export const MAX_HOURLY_RATE = 500;
export const MIN_ANNUAL_SALARY = 10_000;

/** Everything above, bundled for the adapter. */
export const PAYCOR_RULES = {
  idPattern: PAYCOR_ID_PATTERN,
  closedDepartments: CLOSED_DEPARTMENTS,
  closedTitlePattern: CLOSED_TITLE_PATTERN,
  hiddenJobIds: HIDDEN_JOB_IDS,
  departmentCategory: DEPARTMENT_CATEGORY,
  titleCategoryRules: TITLE_CATEGORY_RULES,
  maxHourlyRate: MAX_HOURLY_RATE,
  minAnnualSalary: MIN_ANNUAL_SALARY,
  jobUrl: paycorJobUrl,
};
