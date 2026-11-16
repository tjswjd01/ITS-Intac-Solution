// Tests for the Contact form rules. Run with: npm test
// Uses Node's built-in test runner; Node 24 loads the .ts file directly.
import assert from "node:assert/strict";
import { test } from "node:test";

import {
  CONTACT_MAILBOXES,
  INQUIRY_TYPES,
  LIMITS,
  composeEmail,
  createRateLimiter,
  isSameOrigin,
  recipientFor,
  spamReason,
  validateSubmission,
} from "./submission.ts";

const valid = {
  name: "Jordan Lee",
  email: "jordan.lee@example.com",
  company: "Example Logistics",
  phone: "+1 (555) 010-0000",
  inquiryType: "direct-hire",
  message: "We need two bilingual operations managers in Texas.",
};

// --- Routing ---------------------------------------------------------------

test("business inquiry types go to contact@", () => {
  for (const code of [
    "direct-hire",
    "staffing-workforce",
    "managed-operations",
    "automation",
    "us-market-entry",
    "partnership",
    "general-business",
  ]) {
    assert.equal(recipientFor(code), "contact@intacsolution.com", code);
  }
});

test("recruiting inquiry types go to recruiting@", () => {
  for (const code of ["careers", "candidate"]) {
    assert.equal(recipientFor(code), "recruiting@intacsolution.com", code);
  }
});

test("every listed type routes to one of the two mailboxes", () => {
  const allowed = Object.values(CONTACT_MAILBOXES);
  assert.equal(allowed.length, 2);
  for (const type of INQUIRY_TYPES) {
    assert.ok(allowed.includes(recipientFor(type.code)), type.code);
  }
  assert.equal(new Set(INQUIRY_TYPES.map((type) => type.code)).size, INQUIRY_TYPES.length);
});

test("unknown or malformed types have no recipient", () => {
  for (const code of ["", "sales", "Direct Hire", "DIRECT-HIRE", "constructor", "__proto__", null, undefined, 7, {}, ["careers"]]) {
    assert.equal(recipientFor(code), null, String(code));
  }
});

// --- Validation ------------------------------------------------------------

test("a complete submission passes and is trimmed", () => {
  const result = validateSubmission({ ...valid, name: "  Jordan   Lee ", email: " jordan.lee@example.com " });
  assert.equal(result.ok, true);
  assert.deepEqual(result.data, valid);
});

test("company and phone are optional", () => {
  const result = validateSubmission({ ...valid, company: "", phone: undefined });
  assert.equal(result.ok, true);
  assert.equal(result.data.company, "");
  assert.equal(result.data.phone, "");
});

test("missing required fields are each reported", () => {
  const result = validateSubmission({});
  assert.equal(result.ok, false);
  assert.deepEqual(Object.keys(result.errors).sort(), ["email", "inquiryType", "message", "name"]);
});

test("input that is not an object is rejected, not thrown on", () => {
  for (const input of [null, undefined, "text", 5, [], [valid]]) {
    assert.equal(validateSubmission(input).ok, false);
  }
});

test("invalid email addresses are rejected", () => {
  for (const email of [
    "jordan",
    "jordan@",
    "@example.com",
    "jordan@example",
    "jordan lee@example.com",
    "jordan@example.com, other@example.com",
    "Jordan <jordan@example.com>",
    `${"a".repeat(250)}@example.com`,
  ]) {
    const result = validateSubmission({ ...valid, email });
    assert.equal(result.ok, false, email);
    assert.ok(result.errors.email, email);
  }
});

test("an inquiry type that is not on the list is rejected", () => {
  for (const inquiryType of ["", "sales", "recruiting@intacsolution.com", 3, null]) {
    const result = validateSubmission({ ...valid, inquiryType });
    assert.equal(result.ok, false);
    assert.ok(result.errors.inquiryType);
  }
});

test("phone numbers must look like phone numbers", () => {
  for (const phone of ["12345", "call me", "555-0100 <script>", "1".repeat(41)]) {
    assert.ok(validateSubmission({ ...valid, phone }).errors?.phone, phone);
  }
  for (const phone of ["469-922-5472", "(469) 922 5472 ext. 12", "+82 10 1234 5678", "4699225472x9"]) {
    assert.equal(validateSubmission({ ...valid, phone }).ok, true, phone);
  }
});

test("length limits are enforced", () => {
  assert.ok(validateSubmission({ ...valid, name: "J" }).errors?.name);
  assert.ok(validateSubmission({ ...valid, name: "J".repeat(LIMITS.nameMax + 1) }).errors?.name);
  assert.ok(validateSubmission({ ...valid, company: "C".repeat(LIMITS.companyMax + 1) }).errors?.company);
  assert.ok(validateSubmission({ ...valid, message: "Too short" }).errors?.message);
  assert.ok(validateSubmission({ ...valid, message: "m".repeat(LIMITS.messageMax + 1) }).errors?.message);
  assert.equal(validateSubmission({ ...valid, message: "m".repeat(LIMITS.messageMax) }).ok, true);
});

test("fields of the wrong type are treated as empty", () => {
  const result = validateSubmission({ ...valid, name: { toString: () => "Jordan Lee" }, message: ["hello there, world"] });
  assert.equal(result.ok, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.message);
});

test("line breaks cannot be smuggled into one-line fields", () => {
  const result = validateSubmission({
    ...valid,
    name: "Jordan Lee\r\nBcc: someone@example.com",
    company: "Example\nTo: other@example.com",
  });
  assert.equal(result.ok, true);
  assert.equal(result.data.name, "Jordan Lee Bcc: someone@example.com");
  assert.equal(result.data.company, "Example To: other@example.com");
  assert.doesNotMatch(result.data.name + result.data.company, /[\r\n]/);
});

test("an email with a line break is rejected", () => {
  const result = validateSubmission({ ...valid, email: "jordan@example.com\r\nBcc: other@example.com" });
  assert.equal(result.ok, false);
  assert.ok(result.errors.email);
});

test("messages keep their line breaks but lose control characters", () => {
  const result = validateSubmission({ ...valid, message: "Line one\r\nLine two\u0000\u0007\n\n\n\n\n\nLine three" });
  assert.equal(result.ok, true);
  assert.equal(result.data.message, "Line one\nLine two\n\n\nLine three");
});

test("extra fields from the browser are dropped", () => {
  const result = validateSubmission({ ...valid, to: "attacker@example.com", recipient: "x@example.com", subject: "Hi" });
  assert.equal(result.ok, true);
  assert.deepEqual(Object.keys(result.data).sort(), ["company", "email", "inquiryType", "message", "name", "phone"]);
});

// --- Spam checks -----------------------------------------------------------

test("a normal submission passes the spam checks", () => {
  assert.equal(spamReason({ ...valid, companyWebsite: "", elapsedMs: 45_000 }), null);
});

test("a filled trap field is refused", () => {
  assert.equal(spamReason({ ...valid, companyWebsite: "https://spam.example", elapsedMs: 45_000 }), "trap");
});

test("a form submitted too quickly, or without a time, is refused", () => {
  assert.equal(spamReason({ ...valid, companyWebsite: "", elapsedMs: 400 }), "too-fast");
  assert.equal(spamReason({ ...valid, companyWebsite: "" }), "too-fast");
  assert.equal(spamReason({ ...valid, elapsedMs: "45000" }), "too-fast");
  assert.equal(spamReason({ ...valid, elapsedMs: Number.NaN }), "too-fast");
  assert.equal(spamReason(null), "too-fast");
});

// --- Same-site check -------------------------------------------------------

test("requests from the same site are allowed", () => {
  assert.equal(isSameOrigin("https://www.intacsolution.com", "www.intacsolution.com"), true);
  assert.equal(isSameOrigin("http://127.0.0.1:3000", "127.0.0.1:3000", "same-origin"), true);
  assert.equal(isSameOrigin("https://WWW.intacsolution.com", "www.intacsolution.com"), true);
});

test("requests from elsewhere, or without an origin, are refused", () => {
  assert.equal(isSameOrigin("https://evil.example", "www.intacsolution.com"), false);
  assert.equal(isSameOrigin("https://www.intacsolution.com.evil.example", "www.intacsolution.com"), false);
  assert.equal(isSameOrigin(null, "www.intacsolution.com"), false);
  assert.equal(isSameOrigin("https://www.intacsolution.com", null), false);
  assert.equal(isSameOrigin("not a url", "www.intacsolution.com"), false);
  assert.equal(isSameOrigin("null", "www.intacsolution.com"), false);
  assert.equal(isSameOrigin("https://www.intacsolution.com", "www.intacsolution.com", "cross-site"), false);
});

// --- Email -----------------------------------------------------------------

test("the email goes to the mailbox for its type and replies go to the sender", () => {
  const data = validateSubmission(valid).data;
  const email = composeEmail(data, new Date("2026-11-15T18:00:00Z"));
  assert.equal(email.to, "contact@intacsolution.com");
  assert.deepEqual(email.replyTo, { name: "Jordan Lee", address: "jordan.lee@example.com" });
  assert.equal(email.subject, "Website inquiry: Direct Hire - Jordan Lee");
  assert.match(email.text, /Inquiry type: Direct Hire/);
  assert.match(email.text, /We need two bilingual operations managers in Texas\./);
  assert.match(email.text, /Received 2026-11-15T18:00:00\.000Z/);

  const careers = composeEmail({ ...data, inquiryType: "careers" }, new Date());
  assert.equal(careers.to, "recruiting@intacsolution.com");
});

test("the subject stays on one line and has a length cap", () => {
  const data = validateSubmission({ ...valid, name: `Jordan\r\nBcc: x@example.com ${"n".repeat(90)}`.slice(0, 100) }).data;
  const email = composeEmail(data, new Date());
  assert.doesNotMatch(email.subject, /[\r\n]/);
  assert.ok(email.subject.length <= 160);
});

test("optional fields left blank are marked as not provided", () => {
  const data = validateSubmission({ ...valid, company: "", phone: "" }).data;
  const email = composeEmail(data, new Date());
  assert.match(email.text, /Company: Not provided/);
  assert.match(email.text, /Phone:   Not provided/);
});

test("composing refuses an inquiry type that is not on the list", () => {
  assert.throws(() => composeEmail({ ...valid, inquiryType: "sales" }, new Date()));
});

// --- Rate limit ------------------------------------------------------------

test("the limiter allows the limit, then refuses until the window passes", () => {
  const allow = createRateLimiter({ limit: 3, windowMs: 1000 });
  assert.deepEqual([allow("a", 0), allow("a", 10), allow("a", 20), allow("a", 30)], [true, true, true, false]);
  assert.equal(allow("b", 30), true, "other visitors are unaffected");
  assert.equal(allow("a", 999), false);
  assert.equal(allow("a", 1005), true, "oldest attempt has expired");
});

test("the limiter does not grow without bound", () => {
  const allow = createRateLimiter({ limit: 1, windowMs: 1000, maxKeys: 3 });
  for (const key of ["a", "b", "c", "d", "e"]) assert.equal(allow(key, 0), true);
  assert.equal(allow("e", 1), false, "recent visitors are still remembered");
  assert.equal(allow("a", 1), true, "the oldest were dropped to cap memory");
});
