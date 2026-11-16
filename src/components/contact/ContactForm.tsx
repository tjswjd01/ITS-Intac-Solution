"use client";

import { ArrowRight, ChevronDown, CircleAlert, CircleCheck, Lock } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";

import { navyButtonClassName, outlineButtonClassName } from "@/components/site/primitives";
import { contactForm } from "@/content/contact";
import {
  CONTACT_MAILBOXES,
  findInquiryType,
  INQUIRY_TYPES,
  LIMITS,
  TEAM_LABELS,
  validateSubmission,
  type ContactResponse,
  type ContactTeam,
  type FieldErrors,
  type FieldName,
} from "@/lib/contact/submission";
import { cn } from "@/lib/utils";

import { contactAccents } from "./contactAccents";

type Values = Record<FieldName, string>;

const emptyValues: Values = {
  name: "",
  email: "",
  company: "",
  phone: "",
  inquiryType: "",
  message: "",
};

const fieldOrder: FieldName[] = ["name", "email", "company", "phone", "inquiryType", "message"];

const teams = Object.keys(TEAM_LABELS) as ContactTeam[];

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "sent"; team: ContactTeam; replyTo: string }
  | { state: "failed"; reason: "general" | "rate_limited" };

const controlClassName =
  "block w-full rounded-[12px] border border-[#C9CFD8] bg-white px-4 text-[15px] text-its-navy outline-none transition-colors duration-200 placeholder:text-its-slate focus:border-its-navy focus:ring-2 focus:ring-its-navy/15 aria-[invalid=true]:border-[#A93B2B]";

const fieldId = (name: FieldName) => `contact-${name}`;

function MailLink({ team }: { team: ContactTeam }) {
  const address = CONTACT_MAILBOXES[team];
  return (
    <a
      href={`mailto:${address}`}
      className="font-semibold underline underline-offset-2 [overflow-wrap:anywhere]"
    >
      {address}
    </a>
  );
}

function Field({
  name,
  label,
  required = false,
  error,
  hint,
  className,
  children,
}: {
  name: FieldName;
  label: string;
  required?: boolean;
  error?: string;
  hint?: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={fieldId(name)} className="mb-2 block text-[14px] font-semibold text-its-navy">
        {label}
        {required ? (
          <span aria-hidden className="text-its-coral">
            {" "}
            *
          </span>
        ) : null}
      </label>
      {children}
      {error ? (
        <p id={`${fieldId(name)}-error`} className="mt-1.5 text-[13.5px] leading-[1.5] text-[#A93B2B]">
          {error}
        </p>
      ) : hint ? (
        <p className="mt-1.5 text-[13.5px] leading-[1.5] text-its-slate-ink">{hint}</p>
      ) : null}
    </div>
  );
}

export default function ContactForm({ deliveryReady }: { deliveryReady: boolean }) {
  const [values, setValues] = useState<Values>(emptyValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [trap, setTrap] = useState("");
  const openedAt = useRef<number | null>(null);
  const sentHeading = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    openedAt.current = Date.now();
  }, []);

  useEffect(() => {
    if (status.state === "sent") sentHeading.current?.focus();
  }, [status.state]);

  const selectedTeam: ContactTeam = findInquiryType(values.inquiryType)?.team ?? "business";
  const sending = status.state === "sending";

  function update(name: FieldName, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
    if (errors[name]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[name];
        return next;
      });
    }
  }

  function showErrors(next: FieldErrors) {
    setErrors(next);
    const first = fieldOrder.find((name) => next[name]);
    if (first) requestAnimationFrame(() => document.getElementById(fieldId(first))?.focus());
  }

  function fieldProps(name: FieldName) {
    return {
      id: fieldId(name),
      name,
      value: values[name],
      "aria-invalid": errors[name] ? true : undefined,
      "aria-describedby": errors[name] ? `${fieldId(name)}-error` : undefined,
    };
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending || !deliveryReady) return;

    const check = validateSubmission(values);
    if (!check.ok) {
      showErrors(check.errors);
      return;
    }

    setErrors({});
    setStatus({ state: "sending" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...check.data,
          companyWebsite: trap,
          elapsedMs: Date.now() - (openedAt.current ?? Date.now()),
        }),
      });
      const body = (await response.json().catch(() => null)) as ContactResponse | null;

      if (response.ok && body?.ok) {
        setStatus({ state: "sent", team: selectedTeam, replyTo: check.data.email });
        return;
      }

      if (body && !body.ok && body.code === "invalid" && body.errors) {
        setStatus({ state: "idle" });
        showErrors(body.errors);
        return;
      }

      setStatus({
        state: "failed",
        reason: body && !body.ok && body.code === "rate_limited" ? "rate_limited" : "general",
      });
    } catch {
      setStatus({ state: "failed", reason: "general" });
    }
  }

  function startOver() {
    setValues(emptyValues);
    setErrors({});
    setStatus({ state: "idle" });
    openedAt.current = Date.now();
  }

  if (status.state === "sent") {
    return (
      <div className="flex h-full flex-col rounded-[24px] border border-its-line bg-white p-6 sm:p-8 lg:p-10">
        <div role="status" className="my-auto max-w-[520px] py-6">
          <span
            className="flex h-14 w-14 items-center justify-center rounded-full"
            style={{ backgroundColor: contactAccents.green.bg, color: contactAccents.green.fg }}
          >
            <CircleCheck className="h-6 w-6" strokeWidth={1.6} aria-hidden />
          </span>
          <h2
            ref={sentHeading}
            tabIndex={-1}
            className="mt-6 text-[clamp(1.5rem,2.4vw,2rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-its-navy outline-none"
          >
            Your message was sent
          </h2>
          <p className="mt-4 text-[16px] leading-[1.7] text-its-slate-ink">
            It was delivered to <MailLink team={status.team} />. Our team will reply by email to{" "}
            <span className="font-semibold text-its-navy [overflow-wrap:anywhere]">{status.replyTo}</span>.
          </p>
          <button type="button" onClick={startOver} className={cn(outlineButtonClassName, "mt-8")}>
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full rounded-[24px] border border-its-line bg-white p-6 sm:p-8 lg:p-10">
      <h2 className="text-[clamp(1.5rem,2.4vw,2rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-its-navy">
        {contactForm.title}
      </h2>
      <p className="mt-3 text-[16px] leading-[1.7] text-its-slate-ink">{contactForm.copy}</p>

      {!deliveryReady ? (
        <div className="mt-6 flex gap-3 rounded-[14px] border border-[#EAD9B4] bg-[#FAF1DF] p-4 text-[14.5px] leading-[1.6] text-[#5E4310]">
          <CircleAlert className="mt-0.5 h-5 w-5 shrink-0" strokeWidth={1.6} aria-hidden />
          <p>
            This form is not connected to email yet, so it cannot send. For now, please email{" "}
            <MailLink team="business" /> for business and service inquiries, or{" "}
            <MailLink team="recruiting" /> for careers.
          </p>
        </div>
      ) : null}

      <form
        noValidate
        method="post"
        action="/api/contact"
        onSubmit={onSubmit}
        className="mt-8 grid gap-5 sm:grid-cols-2"
      >
        <Field name="name" label="Full Name" required error={errors.name}>
          <input
            {...fieldProps("name")}
            type="text"
            required
            autoComplete="name"
            maxLength={LIMITS.nameMax}
            placeholder="Enter your full name"
            onChange={(event) => update("name", event.target.value)}
            className={cn(controlClassName, "h-12")}
          />
        </Field>

        <Field name="email" label="Email" required error={errors.email}>
          <input
            {...fieldProps("email")}
            type="email"
            required
            autoComplete="email"
            maxLength={LIMITS.emailMax}
            placeholder="Enter your email"
            onChange={(event) => update("email", event.target.value)}
            className={cn(controlClassName, "h-12")}
          />
        </Field>

        <Field name="company" label="Company" error={errors.company}>
          <input
            {...fieldProps("company")}
            type="text"
            autoComplete="organization"
            maxLength={LIMITS.companyMax}
            placeholder="Enter your company name"
            onChange={(event) => update("company", event.target.value)}
            className={cn(controlClassName, "h-12")}
          />
        </Field>

        <Field name="phone" label="Phone" error={errors.phone}>
          <input
            {...fieldProps("phone")}
            type="tel"
            autoComplete="tel"
            maxLength={LIMITS.phoneMax}
            placeholder="Enter your phone number"
            onChange={(event) => update("phone", event.target.value)}
            className={cn(controlClassName, "h-12")}
          />
        </Field>

        <Field
          name="inquiryType"
          label="Inquiry Type"
          required
          error={errors.inquiryType}
          hint={
            values.inquiryType ? (
              <>
                This inquiry goes to{" "}
                <span className="font-semibold text-its-navy">{CONTACT_MAILBOXES[selectedTeam]}</span>.
              </>
            ) : undefined
          }
          className="sm:col-span-2"
        >
          <div className="relative">
            <select
              {...fieldProps("inquiryType")}
              required
              onChange={(event) => update("inquiryType", event.target.value)}
              className={cn(
                controlClassName,
                "h-12 appearance-none pr-11",
                values.inquiryType === "" && "text-its-slate",
              )}
            >
              <option value="">Select an option</option>
              {teams.map((team) => (
                <optgroup key={team} label={TEAM_LABELS[team]}>
                  {INQUIRY_TYPES.filter((type) => type.team === team).map((type) => (
                    <option key={type.code} value={type.code}>
                      {type.label}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-its-navy"
              aria-hidden
            />
          </div>
        </Field>

        <Field name="message" label="Message" required error={errors.message} className="sm:col-span-2">
          <textarea
            {...fieldProps("message")}
            required
            rows={5}
            maxLength={LIMITS.messageMax}
            placeholder="Tell us about your needs, project, or opportunity."
            onChange={(event) => update("message", event.target.value)}
            className={cn(controlClassName, "min-h-[140px] resize-y py-3 leading-[1.6]")}
          />
        </Field>

        {/* Hidden from people; only automated scripts fill this in. */}
        <div aria-hidden className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
          <label htmlFor="contact-company-website">Leave this field empty</label>
          <input
            id="contact-company-website"
            name="companyWebsite"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={trap}
            onChange={(event) => setTrap(event.target.value)}
          />
        </div>

        {status.state === "failed" ? (
          <div
            role="alert"
            className="flex gap-3 rounded-[14px] border border-[#EBC9C2] bg-[#FBECE8] p-4 text-[14.5px] leading-[1.6] text-[#7A2A1E] sm:col-span-2"
          >
            <CircleAlert className="mt-0.5 h-5 w-5 shrink-0" strokeWidth={1.6} aria-hidden />
            <p>
              {status.reason === "rate_limited"
                ? "Too many messages were sent from your connection, so this one was not sent. Please wait a few minutes and try again, or email "
                : "Your message was not sent. Please try again, or email "}
              <MailLink team={selectedTeam} /> directly.
            </p>
          </div>
        ) : null}

        <div className="flex flex-col gap-4 pt-1 sm:col-span-2 sm:flex-row sm:items-center sm:gap-6">
          <button
            type="submit"
            disabled={sending || !deliveryReady}
            className={cn(
              navyButtonClassName,
              "min-w-[190px] shrink-0 disabled:cursor-not-allowed disabled:bg-[#6B7686] disabled:hover:bg-[#6B7686]",
            )}
          >
            {sending ? "Sending…" : contactForm.submit}
            {sending ? null : <ArrowRight className="h-4 w-4" aria-hidden />}
          </button>
          <p className="flex items-start gap-2.5 text-[13.5px] leading-[1.55] text-its-slate-ink">
            <Lock className="mt-0.5 h-4 w-4 shrink-0 text-its-navy" strokeWidth={1.6} aria-hidden />
            <span className="max-w-[300px]">{contactForm.privacy}</span>
          </p>
        </div>
      </form>
    </div>
  );
}
