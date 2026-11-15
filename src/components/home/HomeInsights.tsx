import ArticleCard from "@/components/insights/ArticleCard";
import { ArrowLink, Eyebrow, SectionTitle } from "@/components/site/primitives";
import { articles } from "@/content/insights";

import { insightsPreview } from "./homeContent";

/** Latest three Insights articles. Reads the same data as /insights, so
 *  sample articles carry their "Sample" label here too. Renders nothing when
 *  there are no articles. */
export default function HomeInsights() {
  const latest = articles.slice(0, 3);
  if (latest.length === 0) return null;

  return (
    <section aria-labelledby="insights-heading" className="bg-its-cool py-14 md:py-20">
      <div className="layout-container">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:gap-12">
          <div>
            <Eyebrow>{insightsPreview.eyebrow}</Eyebrow>
            <SectionTitle className="mt-3 text-[clamp(1.6rem,2.6vw,2.2rem)]">
              <span id="insights-heading">{insightsPreview.title}</span>
            </SectionTitle>
            <p className="mt-3 text-[16px] leading-[1.65] text-its-slate-ink">
              {insightsPreview.copy}
            </p>
            <ArrowLink href={insightsPreview.link.href} className="mt-5">
              {insightsPreview.link.label}
            </ArrowLink>
          </div>
          <ul className="grid gap-4 md:grid-cols-3">
            {latest.map((article) => (
              <li key={article.slug}>
                <ArticleCard article={article} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
