import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Eyebrow, navyButtonClassName } from "@/components/site/primitives";
import { articles, insightCategories, insightsPage } from "@/content/insights";

/** Inset photo banner with the title on a light panel at the left, and a
 *  small navy pill hanging off the bottom-right edge. */
export default function InsightsHero() {
  const { hero } = insightsPage;
  const published = articles.filter((a) => !a.sample).length;
  return (
    <section className="bg-white pt-24 md:pt-28">
      <div className="layout-container">
        <div className="relative">
          <div className="relative min-h-[520px] overflow-hidden rounded-[28px] bg-its-navy md:min-h-[560px]">
            <Image
              src={hero.image}
              alt={hero.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(245,246,248,0.97)_0%,rgba(245,246,248,0.94)_70%,rgba(245,246,248,0.55)_100%)] md:bg-[linear-gradient(90deg,rgba(245,246,248,0.96)_0%,rgba(245,246,248,0.9)_38%,rgba(245,246,248,0.35)_62%,rgba(245,246,248,0)_85%)]"
            />
            <div className="relative flex min-h-[520px] items-center px-7 py-14 sm:px-12 md:min-h-[560px] lg:px-16">
              <div className="max-w-[560px]">
                <Eyebrow rule>{hero.label}</Eyebrow>
                <h1 className="mt-5 text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-its-navy">
                  {hero.title}
                </h1>
                <p className="mt-5 max-w-[480px] text-[17px] leading-[1.7] text-its-slate-ink">{hero.copy}</p>
                <a href={hero.cta.href} className={`${navyButtonClassName} mt-8`}>
                  {hero.cta.label}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </div>
          </div>

          <p className="absolute -bottom-5 right-6 inline-flex items-center gap-2 rounded-full bg-its-navy px-5 py-3 text-[13.5px] font-medium text-white shadow-[0_14px_34px_rgba(20,36,61,0.18)] sm:right-10">
            {insightCategories.length} topics
            <span aria-hidden className="h-1 w-1 rounded-full bg-white/50" />
            {published > 0 ? `${published} articles` : "Articles coming soon"}
          </p>
        </div>
      </div>
    </section>
  );
}
