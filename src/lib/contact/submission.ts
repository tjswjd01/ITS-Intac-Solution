/**
 * Contact form rules: the inquiry types, the mailbox each one goes to, and
 * the checks every submission must pass before an email is sent.
 *
 * This file is pure (no imports, no network, no environment access) so the
 * form and the server share one set of rules and `npm test` can run it
 * directly. The server never trusts the browser: it re-runs every check here
 * and picks the recipient itself from the inquiry type code.
 */

/** The only two mailboxes the form can deliver to. */
export const CONTACT_MAILBOXES = {
  business: "contact@intacsolution.com",
  recruiting: "recruiting@intacsolution.com",
} as const;

export type ContactTeam = keyof typeof CONTACT_MAILBOXES;

export const TEAM_LABELS: Record<ContactTeam, string> = {
  business: "Business and services",
  recruiting: "Careers and recruiting",
};

/**
 * Every inquiry type the form offers. To add one, add a line here; the
 * `team` decides the mailbox. Codes are what the browser sends, labels are
 * what people read.
 */
export const INQUIRY_TYPES = [
  { code: "direct-hire", label: "Direct Hire", team: "business" },
  { code: "staffing-workforce", label: "Staffing & Workforce", team: "business" },
  { code: "managed-operations", label: "Managed Operations", team: "business" },
  { code: "automation", label: "Automation & Robotics", team: "business" },
  { code: "us-market-entry", label: "U.S. Market Entry", team: "business" },
  { code: "partnership", label: "Partnership", team: "business" },
  { code: "general-business", label: "General business or service question", team: "business" },
  { code: "careers", label: "Careers and job opportunities", team: "recruiting" },
  { code: "candidate", label: "Candidate or application question", team: "recruiting" },
] as const satisfies readonly { code: string; label: string; team: ContactTeam }[];

export type InquiryType = (typeof INQUIRY_TYPES)[number];
export type InquiryCode = InquiryType["code"];

export function findInquiryType(code: unknown): InquiryType | null {
  if (typeof code !== "string") return null;
  return INQUIRY_TYPES.find((type) => type.code === code) ?? null;
}

/** The mailbox for an inquiry type, or null when the code is not on the list. */
export function recipientFor(code: unknown): string | null {
  const type = findInquiryType(code);
  return type ? CONTACT_MAILBOXES[type.team] : null;
}

export const LIMITS = {
  nameMin: 2,
  nameMax: 100,
  emailMax: 254,
  companyMax: 120,
  phoneMax: 40,
  phoneMinDigits: 7,
  messageMin: 10,
  messageMax: 5000,
  /** A person needs at least this long to fill the form in. */
  minFillMs: 3000,
  /** Largest request body the server reads. */
  maxBodyBytes: 20_000,
} as const;

export type FieldName = "name" | "email" | "company" | "phone" | "inquiryType" | "message";

export type FieldErrors = Partial<Record<FieldName, string>>;

export type Submission = {
  name: string;
  email: string;
  company: string;
  phone: string;
  inquiryType: InquiryCode;
  message: string;
};

export type ValidationResult =
  | { ok: true; data: Submission }
  | { ok: false; errors: FieldErrors };

const EMAIL_PATTERN = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)+$/;
const PHONE_PATTERN = /^[0-9+().\-\s]+(?:(?:x|ext\.?)\s*[0-9]{1,6})?$/i;

/** One-line text: control characters (including line breaks) become spaces. */
function singleLine(value: unknown): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/[\u0000-\u001F\u007F-\u009F\u2028\u2029]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Multi-line text: keeps line breaks and tabs, drops other control characters. */
function multiLine(value: unknown): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/\r\n?/g, "\n")
    .replace(/[\u0000-\u0008\u000B-\u001F\u007F-\u009F]/g, "")
    .replace(/\n{4,}/g, "\n\n\n")
    .trim();
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/**
 * Checks and cleans one submission. Unknown fields are ignored, so nothing
 * the browser sends (a recipient address, for example) can reach the email.
 */
export function validateSubmission(input: unknown): ValidationResult {
  const raw = isRecord(input) ? input : {};
  const errors: FieldErrors = {};

  const name = singleLine(raw.name);
  if (name.length < LIMITS.nameMin) errors.name = "Enter your full name.";
  else if (name.length > LIMITS.nameMax) errors.name = `Use ${LIMITS.nameMax} characters or fewer.`;

  const email = singleLine(raw.email);
  if (!email) errors.email = "Enter your email address.";
  else if (email.length > LIMITS.emailMax || !EMAIL_PATTERN.test(email)) {
    errors.email = "Enter a valid email address, like name@company.com.";
  }

  const company = singleLine(raw.company);
  if (company.length > LIMITS.companyMax) {
    errors.company = `Use ${LIMITS.companyMax} characters or fewer.`;
  }

  const phone = singleLine(raw.phone);
  if (phone) {
    const digits = phone.replace(/\D/g, "").length;
    if (phone.length > LIMITS.phoneMax || digits < LIMITS.phoneMinDigits || !PHONE_PATTERN.test(phone)) {
      errors.phone = "Enter a valid phone number, or leave this blank.";
    }
  }

  const type = findInquiryType(raw.inquiryType);
  if (!type) errors.inquiryType = "Choose an inquiry type.";

  const message = multiLine(raw.message);
  if (message.length < LIMITS.messageMin) errors.message = "Tell us a little more about your inquiry.";
  else if (message.length > LIMITS.messageMax) {
    errors.message = `Use ${LIMITS.messageMax.toLocaleString("en-US")} characters or fewer.`;
  }

  if (!type || Object.keys(errors).length > 0) return { ok: false, errors };

  return { ok: true, data: { name, email, company, phone, inquiryType: type.code, message } };
}

export type SpamReason = "trap" | "too-fast";

/**
 * Cheap bot checks that need no outside service.
 * - `companyWebsite` is a field people never see; only scripts fill it in.
 * - `elapsedMs` is how long the form was open; scripts submit instantly.
 */
export function spamReason(input: unknown): SpamReason | null {
  const raw = isRecord(input) ? input : {};

  if (typeof raw.companyWebsite === "string" && raw.companyWebsite.trim() !== "") return "trap";

  const elapsed = raw.elapsedMs;
  if (typeof elapsed !== "number" || !Number.isFinite(elapsed) || elapsed < LIMITS.minFillMs) {
    return "too-fast";
  }

  return null;
}

/**
 * True when a request came from a page on the same site. Browsers always send
 * Origin on a scripted POST, so a missing or foreign Origin is refused.
 */
export function isSameOrigin(
  origin: string | null,
  host: string | null,
  fetchSite: string | null = null,
): boolean {
  if (fetchSite && fetchSite !== "same-origin") return false;
  if (!origin || !host) return false;
  try {
    return new URL(origin).host.toLowerCase() === host.toLowerCase();
  } catch {
    return false;
  }
}

export type OutgoingEmail = {
  to: string;
  replyTo: { name: string; address: string };
  subject: string;
  text: string;
};

/**
 * Builds the plain-text email for a checked submission. The recipient comes
 * from the inquiry type only. Plain text keeps anything typed into the form
 * from being read as markup by the mail client.
 */
export function composeEmail(data: Submission, receivedAt: Date): OutgoingEmail {
  const type = findInquiryType(data.inquiryType);
  if (!type) throw new Error("Unknown inquiry type");

  const to = CONTACT_MAILBOXES[type.team];
  const subject = `Website inquiry: ${type.label} - ${data.name}`.slice(0, 160);

  const text = [
    "New inquiry from the Contact page on intacsolution.com",
    "",
    `Inquiry type: ${type.label}`,
    `Sent to:      ${to}`,
    "",
    `Name:    ${data.name}`,
    `Email:   ${data.email}`,
    `Company: ${data.company || "Not provided"}`,
    `Phone:   ${data.phone || "Not provided"}`,
    "",
    "Message:",
    data.message,
    "",
    "--",
    `Received ${receivedAt.toISOString()} (UTC).`,
    "Reply to this email to answer the sender directly.",
  ].join("\n");

  return { to, replyTo: { name: data.name, address: data.email }, subject, text };
}

/**
 * Sliding-window limiter kept in memory. On serverless hosting each server
 * instance keeps its own count, so this slows a flood down rather than
 * guaranteeing a hard cap.
 */
export function createRateLimiter(options: { limit: number; windowMs: number; maxKeys?: number }) {
  const { limit, windowMs, maxKeys = 5000 } = options;
  const hits = new Map<string, number[]>();

  return function allow(key: string, now: number): boolean {
    const recent = (hits.get(key) ?? []).filter((time) => now - time < windowMs);

    if (recent.length >= limit) {
      hits.set(key, recent);
      return false;
    }

    // Re-inserting keeps the map ordered from least to most recently seen,
    // so trimming from the front drops the visitors idle the longest.
    recent.push(now);
    hits.delete(key);
    hits.set(key, recent);

    for (const oldest of hits.keys()) {
      if (hits.size <= maxKeys) break;
      hits.delete(oldest);
    }

    return true;
  };
}

/** What POST /api/contact answers. `ok: true` means the mail server accepted the message. */
export type ContactResponse =
  | { ok: true }
  | {
      ok: false;
      code:
        | "invalid"
        | "rejected"
        | "rate_limited"
        | "forbidden"
        | "unsupported"
        | "too_large"
        | "not_configured"
        | "send_failed";
      errors?: FieldErrors;
    };
