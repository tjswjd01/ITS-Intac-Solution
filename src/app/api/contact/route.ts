/**
 * POST /api/contact: receives the Contact form and emails it to the right
 * ITS mailbox. The recipient is chosen here from the inquiry type; nothing
 * the browser sends can change where the message goes.
 *
 * The reply is `{ ok: true }` only after the mail server has accepted the
 * message. Every other outcome is `{ ok: false, code }` so the page can tell
 * the visitor the truth.
 */
import { deliver, DeliveryNotConfiguredError, isDeliveryConfigured } from "@/lib/contact/delivery";
import {
  composeEmail,
  createRateLimiter,
  isSameOrigin,
  LIMITS,
  spamReason,
  validateSubmission,
  type ContactResponse,
} from "@/lib/contact/submission";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** At most 5 submissions per visitor address every 10 minutes. */
const allowRequest = createRateLimiter({ limit: 5, windowMs: 10 * 60 * 1000 });

function reply(body: ContactResponse, status: number) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

function clientAddress(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

export async function POST(request: Request) {
  const headers = request.headers;

  const host = headers.get("x-forwarded-host") ?? headers.get("host");
  if (!isSameOrigin(headers.get("origin"), host, headers.get("sec-fetch-site"))) {
    return reply({ ok: false, code: "forbidden" }, 403);
  }

  if (!(headers.get("content-type") ?? "").toLowerCase().startsWith("application/json")) {
    return reply({ ok: false, code: "unsupported" }, 415);
  }

  if (Number(headers.get("content-length") ?? 0) > LIMITS.maxBodyBytes) {
    return reply({ ok: false, code: "too_large" }, 413);
  }

  if (!allowRequest(clientAddress(request), Date.now())) {
    return reply({ ok: false, code: "rate_limited" }, 429);
  }

  let payload: unknown;
  try {
    const body = await request.text();
    if (body.length > LIMITS.maxBodyBytes) return reply({ ok: false, code: "too_large" }, 413);
    payload = JSON.parse(body);
  } catch {
    return reply({ ok: false, code: "invalid" }, 400);
  }

  const spam = spamReason(payload);
  if (spam) {
    console.warn(`[contact] refused: ${spam}`);
    return reply({ ok: false, code: "rejected" }, 400);
  }

  const result = validateSubmission(payload);
  if (!result.ok) return reply({ ok: false, code: "invalid", errors: result.errors }, 400);

  if (!isDeliveryConfigured()) {
    console.warn("[contact] not sent: SMTP settings are missing");
    return reply({ ok: false, code: "not_configured" }, 503);
  }

  const email = composeEmail(result.data, new Date());

  try {
    await deliver(email);
  } catch (error) {
    if (error instanceof DeliveryNotConfiguredError) {
      return reply({ ok: false, code: "not_configured" }, 503);
    }
    // Log the failure type only, never the visitor's details.
    const detail =
      error instanceof Error ? ((error as Error & { code?: string }).code ?? error.name) : "unknown";
    console.error(`[contact] delivery to ${email.to} failed: ${detail}`);
    return reply({ ok: false, code: "send_failed" }, 502);
  }

  console.info(`[contact] delivered ${result.data.inquiryType} inquiry to ${email.to}`);
  return reply({ ok: true }, 200);
}
