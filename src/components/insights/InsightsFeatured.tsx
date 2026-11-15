import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Eyebrow, navyButtonClassName } from "@/components/site/primitives";
import { articles, insightCategoryLabel, insightsPage } from "@/content/insights";

import { ArticleCover, ArticleMeta } from "./ArticleCard";

/** Split feature: cover on the left, story on the right. Hidden when no
 *  article is flagged `featured`. */
export default function InsightsFeatured() {
  const featured = articles.find((a) => a.featured);
  if (!featured) return null;
  return (
    <section aria-labelledby="featured-heading" className="bg-white py-14 md:py-20">
      <div className="layout-container">
        <article className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <ArticleCover article={featured} className="aspect-[4/3] rounded-[24px] lg:aspect-[5/4]" />
          <div>
            <Eyebrow rule>
              {insightsPage.featured.label} · {insightCategoryLabel(featured.category)}
            </Eyebrow>
            <h2
              id="featured-heading"
              className="mt-5 max-w-[560px] text-[clamp(1.7rem,3vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-its-navy"
            >
              {featured.title}
            </h2>
            <p className="mt-5 max-w-[520px] text-[17px] leading-[1.7] text-its-slate-ink">{featured.excerpt}</p>
            <div className="mt-4">
              <ArticleMeta article={featured} />
            </div>
            <Link href={`/insights/${featured.slug}`} className={`${navyButtonClassName} mt-8`}>
              {insightsPage.featured.cta}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
