import Link from "next/link";
import { ArrowRight, Globe, Layers, Search, type LucideIcon } from "lucide-react";

import { Eyebrow, lightButtonClassName } from "@/components/site/primitives";
import { hero, strengths } from "@/content/directHire";

import PartnershipGraphic from "./PartnershipGraphic";

const strengthIcons: Record<(typeof strengths)[number]["key"], LucideIcon> = {
  search: Search,
  bilingual: Globe,
  market: Layers,
};

export const outlineOnDarkClassName =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-[15px] font-medium text-white transition-colors duration-200 hover:border-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

/** Full-width dark hero. The three strengths sit on its bottom edge. */
export default function DirectHireHero() {
  return (
    <section className="relative isolate overflow-hidden bg-its-navy">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(110%_85%_at_76%_36%,#263F64_0%,#14243D_46%,#0D1828_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-[-88%] w-[150%] opacity-60 [mask-image:linear-gradient(90deg,transparent_8%,black_55%)] sm:right-[-20%] sm:w-[105%] lg:right-[-6%] lg:w-[72%] lg:opacity-100 lg:[mask-image:linear-gradient(90deg,transparent_4%,black_52%)]"
      >
        <PartnershipGraphic className="h-full w-full" />
      </div>

      <div className="layout-container relative z-10 pb-16 pt-36 md:pb-24 md:pt-48">
        <div>
          <Eyebrow rule onDark>
            {hero.label}
          </Eyebrow>
          <h1 className="mt-6 text-[clamp(2.5rem,5.6vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-white">
            <span className="block">{hero.headline[0]}</span>
            <span className="block text-[#B7C2CF]">{hero.headline[1]}</span>
          </h1>
          <p className="mt-7 max-w-[500px] text-[18px] leading-[1.65] text-[#CBD3DD]">{hero.copy}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href={hero.primary.href} className={lightButtonClassName}>
              {hero.primary.label}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <a href={hero.secondary.href} className={outlineOnDarkClassName}>
              {hero.secondary.label}
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/[0.14] bg-[#0D1828]/50">
        <div className="layout-container">
          <ul
            aria-label="What sets our recruiting apart"
            className="grid divide-y divide-white/[0.12] md:grid-cols-3 md:divide-x md:divide-y-0"
          >
            {strengths.map((item) => {
              const Icon = strengthIcons[item.key];
              return (
                <li key={item.key} className="flex items-start gap-4 py-6 md:px-8 md:py-8 md:first:pl-0 md:last:pr-0">
                  <Icon className="mt-0.5 h-6 w-6 shrink-0 text-its-soft-slate" strokeWidth={1.5} aria-hidden />
                  <div>
                    <h2 className="text-[17px] font-semibold tracking-[-0.01em] text-white">{item.title}</h2>
                    <p className="mt-1.5 text-[14.5px] leading-[1.6] text-[#B4BFCB]">{item.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
