import Link from "next/link";
import { ArrowRight, Cog, Globe, UserCheck, type LucideIcon } from "lucide-react";

import { Eyebrow } from "@/components/site/primitives";
import { heroV3, strengthsV3 } from "@/content/directHire";

import ShortlistIllustration from "./ShortlistIllustration";

export const periwinkleButtonClassName =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-its-periwinkle px-6 py-3 text-[15px] font-medium text-white transition-colors duration-200 hover:bg-its-periwinkle-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-its-periwinkle";

export const quietLinkClassName =
  "inline-flex min-h-12 items-center gap-2 px-2 text-[15px] font-semibold text-its-navy underline decoration-its-periwinkle decoration-2 underline-offset-[6px] transition-colors hover:text-its-periwinkle-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-its-navy";

const icons: Record<(typeof strengthsV3)[number]["key"], LucideIcon> = {
  engineering: Cog,
  verified: UserCheck,
  bilingual: Globe,
};

/** Light hero: headline left, shortlist illustration right, three strengths
 *  in a quiet divided row underneath. */
export default function DirectHireHeroLight() {
  return (
    <section className="bg-its-offwhite pb-14 pt-28 md:pb-20 md:pt-36">
      <div className="layout-container">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-16">
          <div>
            <Eyebrow rule>{heroV3.label}</Eyebrow>
            <h1 className="mt-6 text-[clamp(2.5rem,5.2vw,4.25rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-its-navy">
              <span className="block">{heroV3.headline[0]}</span>
              <span className="block text-its-slate">{heroV3.headline[1]}</span>
            </h1>
            <p className="mt-7 max-w-[520px] text-[17.5px] leading-[1.7] text-its-slate-ink">{heroV3.copy}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href={heroV3.primary.href} className={periwinkleButtonClassName}>
                {heroV3.primary.label}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <a href={heroV3.secondary.href} className={quietLinkClassName}>
                {heroV3.secondary.label}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>
          <ShortlistIllustration />
        </div>

        <ul
          aria-label="What sets our recruiting apart"
          className="mt-16 grid divide-y divide-its-line border-y border-its-line md:grid-cols-3 md:divide-x md:divide-y-0"
        >
          {strengthsV3.map((item) => {
            const Icon = icons[item.key];
            return (
              <li key={item.key} className="flex items-start gap-4 py-6 md:px-8 md:py-7 md:first:pl-0 md:last:pr-0">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-its-periwinkle-soft text-its-periwinkle-ink">
                  <Icon className="h-4 w-4" strokeWidth={1.7} aria-hidden />
                </span>
                <div>
                  <h2 className="text-[16.5px] font-semibold tracking-[-0.01em] text-its-navy">{item.title}</h2>
                  <p className="mt-1.5 text-[14.5px] leading-[1.6] text-its-slate-ink">{item.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
