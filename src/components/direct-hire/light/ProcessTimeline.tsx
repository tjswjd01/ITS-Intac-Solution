import Reveal from "@/components/site/Reveal";
import { Eyebrow } from "@/components/site/primitives";
import { processV3 } from "@/content/directHire";

/** Six steps on a thin rail. Step 03 (technical screening) is the one
 *  highlighted card, matching the deck's emphasis. */
export default function ProcessTimeline() {
  return (
    <section id="process" aria-labelledby="process-heading" className="scroll-mt-24 bg-its-offwhite py-16 md:py-24">
      <div className="layout-container">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-16">
          <div>
            <Eyebrow rule>{processV3.label}</Eyebrow>
            <h2
              id="process-heading"
              className="mt-5 max-w-[560px] text-[clamp(1.9rem,3.4vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.035em] text-its-navy"
            >
              {processV3.title}
            </h2>
          </div>
          <p className="max-w-[520px] text-[17px] leading-[1.7] text-its-slate-ink lg:border-l lg:border-its-line lg:pl-8">
            {processV3.copy}
          </p>
        </div>

        <ol className="relative mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          <span aria-hidden className="absolute left-0 right-0 top-[22px] hidden h-px bg-[#CDD5E0] xl:block" />
          {processV3.steps.map((step, index) => {
            const highlight = "highlight" in step && step.highlight;
            return (
              <li key={step.title} className="relative">
                <Reveal delay={index * 0.04} className="h-full">
                  <div className="flex h-full flex-col">
                    <span
                      className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-full text-[13px] font-semibold tabular-nums ring-4 ring-its-offwhite ${
                        highlight ? "bg-its-periwinkle text-white" : "bg-white text-its-navy shadow-[0_0_0_1px_#CDD5E0]"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div
                      className={`mt-4 flex flex-1 flex-col rounded-[20px] border p-5 ${
                        highlight ? "border-its-periwinkle bg-white shadow-[0_14px_34px_rgba(90,116,201,0.14)]" : "border-its-line bg-white"
                      }`}
                    >
                      <p className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${highlight ? "text-its-periwinkle-ink" : "text-its-slate"}`}>
                        {step.sub}
                      </p>
                      <h3 className="mt-1.5 text-[16px] font-semibold leading-[1.3] tracking-[-0.01em] text-its-navy">
                        {step.title}
                      </h3>
                      <ul className="mt-3 space-y-1.5 text-[13.5px] leading-[1.5] text-its-slate-ink">
                        {step.points.map((pt) => (
                          <li key={pt}>{pt}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>

        <p className="mt-12 text-center text-[clamp(1.4rem,2.4vw,1.9rem)] font-semibold tracking-[-0.03em] text-its-navy">
          {processV3.statement[0]}{" "}
          <span className="text-its-periwinkle-ink">{processV3.statement[1]}</span>
        </p>
      </div>
    </section>
  );
}
