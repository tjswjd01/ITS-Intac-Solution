import { ArrowDown, ArrowRight, CircleCheck, FileText, UsersRound, type LucideIcon } from "lucide-react";

import { textLinkClassName } from "@/components/site/primitives";
import { contactLinkedIn, contactSteps } from "@/content/contact";

import { contactAccents, type ContactAccent } from "./contactAccents";

const visuals: Record<(typeof contactSteps)[number]["id"], { icon: LucideIcon; accent: ContactAccent }> = {
  send: { icon: FileText, accent: "blue" },
  route: { icon: UsersRound, accent: "amber" },
  respond: { icon: CircleCheck, accent: "green" },
};

/** LinkedIn's mark. lucide-react no longer ships brand icons. */
function LinkedInMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function ContactProcess() {
  return (
    <div className="flex h-full flex-col rounded-[24px] border border-its-line bg-white p-6 sm:p-8">
      <h2 className="text-[clamp(1.5rem,2.4vw,2rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-its-navy">
        How It Works
      </h2>

      <ol className="mt-7">
        {contactSteps.map((step, index) => {
          const { icon: Icon, accent } = visuals[step.id];
          const tint = contactAccents[accent];

          return (
            <li key={step.id}>
              {index > 0 ? (
                <div aria-hidden className="flex w-14 justify-center py-2.5">
                  <ArrowDown className="h-5 w-5 text-its-slate" strokeWidth={1.6} />
                </div>
              ) : null}
              <div className="flex items-center gap-4">
                <span
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: tint.bg, color: tint.fg }}
                >
                  <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden />
                </span>
                <div>
                  <h3 className="text-[17px] font-semibold leading-[1.25] text-its-navy">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="mt-1 text-[14.5px] leading-[1.6] text-its-slate-ink">{step.text}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="mt-8 border-t border-its-line pt-8">
        <div className="flex gap-4 rounded-[18px] bg-its-offwhite p-5">
          <LinkedInMark className="mt-0.5 h-9 w-9 shrink-0 text-its-navy" />
          <div>
            <h3 className="text-[17px] font-semibold leading-[1.25] text-its-navy">
              {contactLinkedIn.title}
            </h3>
            <p className="mt-1.5 text-[14.5px] leading-[1.6] text-its-slate-ink">
              {contactLinkedIn.copy}
            </p>
            <a
              href={contactLinkedIn.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${textLinkClassName} mt-3`}
            >
              {contactLinkedIn.label}
              <ArrowRight className="h-4 w-4" aria-hidden />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
