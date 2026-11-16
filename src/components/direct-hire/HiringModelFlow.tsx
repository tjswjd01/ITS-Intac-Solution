import { ArrowDown, ArrowRight } from "lucide-react";

import { ArrowLink, Eyebrow } from "@/components/site/primitives";
import { hiringModel, type HiringOutcome } from "@/content/directHire";

const chipClassName =
  "relative z-10 inline-flex items-center gap-1.5 rounded-full border border-[#C5CCD4] bg-white px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-its-navy";

/** "Yes" runs sideways to the answer on desktop and downwards on phones. */
function YesConnector() {
  return (
    <div className="relative flex h-14 items-center justify-center lg:h-auto" aria-hidden>
      <span className="absolute inset-y-0 left-1/2 w-px bg-[#C5CCD4] lg:inset-x-0 lg:inset-y-auto lg:left-0 lg:top-1/2 lg:h-px lg:w-auto" />
      <span className={chipClassName}>
        <span className="lg:hidden">If yes</span>
        <span className="hidden lg:inline">Yes</span>
        <ArrowRight className="hidden h-3.5 w-3.5 lg:block" />
        <ArrowDown className="h-3.5 w-3.5 lg:hidden" />
      </span>
    </div>
  );
}

/** "No" always runs downwards to the next question. */
function NoConnector() {
  return (
    <div className="relative flex h-16 items-center justify-center lg:col-start-1" aria-hidden>
      <span className="absolute inset-y-0 left-1/2 w-px bg-[#C5CCD4]" />
      <span className={chipClassName}>
        <span className="lg:hidden">If no</span>
        <span className="hidden lg:inline">No</span>
        <ArrowDown className="h-3.5 w-3.5" />
      </span>
    </div>
  );
}

function Outcome({ outcome }: { outcome: HiringOutcome }) {
  if (outcome.current) {
    return (
      <div className="rounded-[20px] bg-its-navy px-6 py-6 shadow-[0_18px_40px_rgba(20,36,61,0.24)] sm:px-7">
        <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-white">
          <span className="h-1.5 w-1.5 rounded-full bg-its-coral" aria-hidden />
          This page
        </p>
        <h3 className="mt-3 text-[21px] font-semibold tracking-[-0.02em] text-white">{outcome.title}</h3>
        <p className="mt-2 text-[15px] leading-[1.6] text-[#CBD3DD]">{outcome.description}</p>
      </div>
    );
  }

  return (
    <div className="rounded-[20px] border border-[#D5DAE0] bg-white px-6 py-6 sm:px-7">
      <h3 className="text-[21px] font-semibold tracking-[-0.02em] text-its-navy">{outcome.title}</h3>
      <p className="mt-2 text-[15px] leading-[1.6] text-its-slate-ink">{outcome.description}</p>
      {outcome.href && outcome.linkLabel ? (
        <ArrowLink href={outcome.href} className="mt-4 text-[14px]">
          {outcome.linkLabel}
        </ArrowLink>
      ) : null}
    </div>
  );
}

/** Decision flowchart: each question leads to a model on "yes", or on to the next question. */
export default function HiringModelFlow() {
  return (
    <section aria-labelledby="hiring-model-heading" className="bg-its-warm py-20 md:py-28">
      <div className="layout-container">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.7fr)] lg:items-end lg:gap-16">
          <div>
            <Eyebrow rule>{hiringModel.label}</Eyebrow>
            <h2
              id="hiring-model-heading"
              className="mt-5 max-w-[620px] text-[clamp(2rem,3.6vw,3rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-its-navy"
            >
              {hiringModel.title}
            </h2>
          </div>
          <p className="max-w-[440px] text-[17px] leading-[1.7] text-its-slate-ink lg:justify-self-end">
            {hiringModel.copy}
          </p>
        </div>

        <div className="mt-12 rounded-[28px] bg-white p-5 shadow-[0_24px_60px_rgba(20,36,61,0.08)] sm:p-8 lg:p-10">
          <ol>
            {hiringModel.steps.map((step, index) => (
              <li
                key={step.outcome.key}
                className="grid lg:grid-cols-[minmax(0,1fr)_112px_minmax(0,1.05fr)] lg:items-center"
              >
                {index > 0 ? (
                  <>
                    <p className="sr-only">If no:</p>
                    <NoConnector />
                    <span className="hidden lg:col-span-2 lg:block" aria-hidden />
                  </>
                ) : null}

                <div className="rounded-[20px] border border-[#D5DAE0] bg-its-offwhite px-6 py-6 sm:px-7">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-its-slate-ink">
                    Question {index + 1}
                  </p>
                  <p className="mt-2 text-[18px] font-semibold leading-[1.35] tracking-[-0.015em] text-its-navy">
                    {step.question}
                  </p>
                </div>
                <YesConnector />
                <p className="sr-only">If yes:</p>
                <Outcome outcome={step.outcome} />
              </li>
            ))}
          </ol>

          <div className="mt-8 flex flex-col gap-3 border-t border-its-line pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[15.5px] leading-[1.6] text-its-slate-ink">{hiringModel.fallback.text}</p>
            <ArrowLink href={hiringModel.fallback.href} className="shrink-0">
              {hiringModel.fallback.label}
            </ArrowLink>
          </div>
        </div>
      </div>
    </section>
  );
}
