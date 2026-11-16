import { Languages, Layers, UserCheck, type LucideIcon } from "lucide-react";

import { Eyebrow } from "@/components/site/primitives";
import { whyIts } from "@/content/directHire";

const supportingIcons: Record<(typeof whyIts.supporting)[number]["key"], LucideIcon> = {
  bilingual: Languages,
  industries: Layers,
  personal: UserCheck,
};

/** The owner's four R words as a 2x2 of quiet cards, with the three
 *  supporting points in a divided row. */
export default function WhyItsLight() {
  return (
    <section aria-labelledby="why-heading" className="bg-its-offwhite py-16 md:py-24">
      <div className="layout-container">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Eyebrow rule index={4}>{whyIts.label}</Eyebrow>
            <h2
              id="why-heading"
              className="mt-5 max-w-[420px] text-[clamp(1.9rem,3.4vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.035em] text-its-navy"
            >
              {whyIts.title}
            </h2>
            <p className="mt-4 max-w-[380px] text-[17px] leading-[1.7] text-its-slate-ink">{whyIts.copy}</p>
          </div>

          <ol className="grid gap-4 sm:grid-cols-2">
            {whyIts.principles.map((item, index) => (
              <li key={item.word} className="rounded-[20px] border border-its-line bg-white p-6">
                <span className="text-[12px] font-semibold tabular-nums text-its-slate">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-[28px] font-semibold leading-none tracking-[-0.04em] text-its-navy">
                  <span className="text-its-coral-ink">{item.word.slice(0, 1)}</span>
                  {item.word.slice(1)}
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.65] text-its-slate-ink">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <ul className="mt-12 grid divide-y divide-its-line border-y border-its-line md:grid-cols-3 md:divide-x md:divide-y-0">
          {whyIts.supporting.map((item) => {
            const Icon = supportingIcons[item.key];
            return (
              <li key={item.key} className="flex items-start gap-4 py-6 md:px-8 md:py-7 md:first:pl-0 md:last:pr-0">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-white text-its-coral-ink shadow-[0_0_0_1px_#E3E5E8]">
                  <Icon className="h-4 w-4" strokeWidth={1.7} aria-hidden />
                </span>
                <div>
                  <h3 className="text-[16px] font-semibold tracking-[-0.01em] text-its-navy">{item.title}</h3>
                  <p className="mt-1 text-[14px] leading-[1.6] text-its-slate-ink">{item.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
