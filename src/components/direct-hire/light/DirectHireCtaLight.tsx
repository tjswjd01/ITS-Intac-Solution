import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { Eyebrow, outlineButtonClassName } from "@/components/site/primitives";
import { ctaV3 } from "@/content/directHire";

import { periwinkleButtonClassName } from "./DirectHireHeroLight";

/** Closing "Let's talk" card: white on white band, periwinkle button,
 *  three plain points instead of a form (the site has no form backend yet). */
export default function DirectHireCtaLight() {
  return (
    <section aria-labelledby="direct-hire-cta-heading" className="bg-white py-16 md:py-24">
      <div className="layout-container">
        <div className="grid gap-10 rounded-[28px] border border-its-line bg-its-offwhite px-7 py-10 sm:px-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:px-14 lg:py-14">
          <div>
            <Eyebrow rule>{ctaV3.label}</Eyebrow>
            <h2
              id="direct-hire-cta-heading"
              className="mt-5 max-w-[520px] text-[clamp(1.8rem,3.2vw,2.6rem)] font-semibold leading-[1.1] tracking-[-0.035em] text-its-navy"
            >
              {ctaV3.title}
            </h2>
            <p className="mt-4 max-w-[480px] text-[16.5px] leading-[1.7] text-its-slate-ink">{ctaV3.copy}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={ctaV3.primary.href} className={periwinkleButtonClassName}>
                {ctaV3.primary.label}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href={ctaV3.secondary.href} className={outlineButtonClassName}>
                {ctaV3.secondary.label}
              </Link>
            </div>
          </div>
          <ul className="space-y-3">
            {ctaV3.points.map((pt) => (
              <li key={pt} className="flex items-center gap-3 rounded-2xl border border-its-line bg-white px-5 py-4 text-[15px] font-medium text-its-navy">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-its-periwinkle-soft text-its-periwinkle-ink">
                  <Check className="h-3.5 w-3.5" strokeWidth={2.4} aria-hidden />
                </span>
                {pt}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
