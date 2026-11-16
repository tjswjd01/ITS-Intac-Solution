import { Boxes, Cog, Coins, IdCard, Laptop, Users, type LucideIcon } from "lucide-react";

import { Eyebrow } from "@/components/site/primitives";
import { specializations } from "@/content/directHire";

const icons: Record<(typeof specializations.items)[number]["key"], LucideIcon> = {
  executive: Users,
  hr: IdCard,
  finance: Coins,
  it: Laptop,
  engineering: Cog,
  "supply-chain": Boxes,
};

/** Statement heading on the left, a ruled and numbered index on the right. */
export default function DirectHireSpecializations() {
  return (
    <section
      id="specializations"
      aria-labelledby="specializations-heading"
      className="scroll-mt-24 bg-its-offwhite py-20 md:py-28"
    >
      <div className="layout-container grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Eyebrow rule>{specializations.label}</Eyebrow>
          <h2
            id="specializations-heading"
            className="mt-5 max-w-[480px] text-[clamp(2rem,3.6vw,3rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-its-navy"
          >
            {specializations.title}
          </h2>
          <p className="mt-5 max-w-[440px] text-[17px] leading-[1.7] text-its-slate-ink">{specializations.copy}</p>
        </div>

        <ol className="grid border-t border-[#C5CCD4] sm:grid-cols-2">
          {specializations.items.map((item, index) => {
            const Icon = icons[item.key];
            return (
              <li
                key={item.key}
                className="flex items-center gap-5 border-b border-[#C5CCD4] py-6 sm:py-8 sm:odd:pr-8 sm:even:pl-8"
              >
                <span className="w-7 shrink-0 text-[13px] font-semibold tabular-nums text-its-slate-ink" aria-hidden>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-[19px] font-semibold leading-[1.25] tracking-[-0.02em] text-its-navy md:text-[21px]">
                  {item.label}
                </span>
                <Icon className="h-6 w-6 shrink-0 text-its-soft-slate" strokeWidth={1.4} aria-hidden />
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
