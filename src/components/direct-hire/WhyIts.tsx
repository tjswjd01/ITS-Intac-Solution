import { Languages, Layers, UserCheck, type LucideIcon } from "lucide-react";

import { Eyebrow } from "@/components/site/primitives";
import { whyIts } from "@/content/directHire";

const supportingIcons: Record<(typeof whyIts.supporting)[number]["key"], LucideIcon> = {
  bilingual: Languages,
  industries: Layers,
  personal: UserCheck,
};

/** The four R words set as large statement type, not as a grid of boxes. */
export default function WhyIts() {
  return (
    <section aria-labelledby="why-heading" className="bg-white py-20 md:py-28">
      <div className="layout-container">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Eyebrow rule>{whyIts.label}</Eyebrow>
            <h2
              id="why-heading"
              className="mt-5 max-w-[420px] text-[clamp(2rem,3.6vw,3rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-its-navy"
            >
              {whyIts.title}
            </h2>
            <p className="mt-5 max-w-[380px] text-[17px] leading-[1.7] text-its-slate-ink">{whyIts.copy}</p>
          </div>

          <ol className="border-b border-[#C5CCD4]">
            {whyIts.principles.map((item, index) => (
              <li
                key={item.word}
                className="grid gap-x-8 gap-y-3 border-t border-[#C5CCD4] py-7 sm:grid-cols-[2.25rem_minmax(0,0.9fr)_minmax(0,1.1fr)] sm:items-baseline md:py-9"
              >
                <span className="text-[13px] font-semibold tabular-nums text-its-slate-ink" aria-hidden>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[clamp(2.3rem,4.4vw,3.5rem)] font-semibold leading-none tracking-[-0.045em] text-its-navy">
                  <span className="text-[#C8614F]">{item.word.slice(0, 1)}</span>
                  {item.word.slice(1)}
                </h3>
                <p className="max-w-[440px] text-[16.5px] leading-[1.65] text-its-slate-ink">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <ul className="mt-14 grid gap-x-10 gap-y-7 rounded-[24px] bg-its-offwhite p-7 sm:grid-cols-3 sm:p-9">
          {whyIts.supporting.map((item) => {
            const Icon = supportingIcons[item.key];
            return (
              <li key={item.key} className="flex items-start gap-4">
                <Icon className="mt-0.5 h-6 w-6 shrink-0 text-[#7C8A99]" strokeWidth={1.5} aria-hidden />
                <div>
                  <h3 className="text-[16.5px] font-semibold tracking-[-0.01em] text-its-navy">{item.title}</h3>
                  <p className="mt-1 text-[14.5px] leading-[1.6] text-its-slate-ink">{item.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
