import { Eyebrow } from "@/components/site/primitives";
import { process } from "@/content/directHire";

/**
 * Eight stages grouped under the four phases, so the page reads as four
 * columns of two rather than a wall of eight. The one dark section mid-page.
 */
export default function ProcessStages() {
  return (
    <section aria-labelledby="process-heading" className="bg-its-charcoal py-20 md:py-28">
      <div className="layout-container">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.7fr)] lg:items-end lg:gap-16">
          <div>
            <Eyebrow rule onDark>
              {process.label}
            </Eyebrow>
            <h2
              id="process-heading"
              className="mt-5 max-w-[640px] text-[clamp(2rem,3.6vw,3rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-white"
            >
              {process.title}
            </h2>
          </div>
          <p className="max-w-[440px] text-[17px] leading-[1.7] text-[#C3CCD6] lg:justify-self-end">{process.copy}</p>
        </div>

        {/* Each phase spans three shared rows (label, stage, stage) so the
            stages line up across columns whatever the text length. */}
        <ol className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-8 lg:grid-cols-4">
          {process.phases.map((phase, phaseIndex) => (
            <li
              key={phase.title}
              className="relative border-t border-white/25 pt-6 sm:row-span-3 sm:grid sm:grid-rows-subgrid sm:max-lg:[&:nth-child(n+3)]:mt-8"
            >
              <span aria-hidden className="absolute -top-[5px] left-0 h-[9px] w-[9px] rounded-full bg-its-soft-slate" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-its-soft-slate">
                <span className="sr-only">Phase {phaseIndex + 1}: </span>
                {phase.title}
              </p>

              {phase.stages.map((stage, stageIndex) => {
                const number = phaseIndex * 2 + stageIndex + 1;
                return (
                  <div key={stage.title} className="mt-8 sm:mt-0">
                    <span
                      aria-hidden
                      className="block text-[44px] font-semibold leading-none tracking-[-0.04em] tabular-nums text-[#7A8693]"
                    >
                      {String(number).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 text-[19px] font-semibold tracking-[-0.02em] text-white">
                      <span className="sr-only">Stage {number}: </span>
                      {stage.title}
                    </h3>
                    <p className="mt-2 max-w-[280px] text-[15px] leading-[1.6] text-[#B9C2CC]">{stage.text}</p>
                  </div>
                );
              })}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
