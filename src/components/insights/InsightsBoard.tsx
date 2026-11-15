"use client";

import { ArrowRight, Briefcase, Compass, Factory, Users, type LucideIcon } from "lucide-react";
import { useRef, useState } from "react";

import { Eyebrow } from "@/components/site/primitives";
import {
  SHOW_SAMPLE_NOTICE,
  articles,
  insightCategories,
  insightCategoryLabel,
  insightsPage,
  type InsightCategoryCode,
} from "@/content/insights";

import ArticleCard from "./ArticleCard";

const PAGE_SIZE = 6;

const topicIcons: Record<InsightCategoryCode, LucideIcon> = {
  "hr-workforce": Users,
  "job-market-hiring": Briefcase,
  "operations-industry": Factory,
  "career-advice": Compass,
};

const tabs: { code: InsightCategoryCode | "all"; label: string }[] = [
  { code: "all", label: "All Insights" },
  ...insightCategories,
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-its-navy";

/** Topic picker (off-white band) and the filtered article grid. Both share
 *  one `active` category, so a topic card and a filter pill never disagree. */
export default function InsightsBoard() {
  const [active, setActive] = useState<InsightCategoryCode | "all">("all");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const gridRef = useRef<HTMLElement>(null);

  const featured = articles.find((a) => a.featured);
  const filtered = (active === "all" ? articles : articles.filter((a) => a.category === active)).filter(
    (a) => a !== featured,
  );
  const shown = filtered.slice(0, visible);

  const choose = (code: InsightCategoryCode | "all", scroll = false) => {
    setActive(code);
    setVisible(PAGE_SIZE);
    if (scroll) gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Topics */}
      <section aria-labelledby="topics-heading" className="bg-its-offwhite py-16 md:py-24">
        <div className="layout-container">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <div>
              <Eyebrow rule>{insightsPage.topics.label}</Eyebrow>
              <h2
                id="topics-heading"
                className="mt-5 max-w-[420px] text-[clamp(1.8rem,3.2vw,2.6rem)] font-semibold leading-[1.1] tracking-[-0.035em] text-its-navy"
              >
                {insightsPage.topics.title}
              </h2>
              <p className="mt-4 max-w-[400px] text-[16.5px] leading-[1.7] text-its-slate-ink">
                {insightsPage.topics.copy}
              </p>
            </div>

            <ul className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {insightCategories.map((topic) => {
                const Icon = topicIcons[topic.code];
                const selected = active === topic.code;
                const count = articles.filter((a) => a.category === topic.code).length;
                return (
                  <li key={topic.code}>
                    <button
                      type="button"
                      aria-pressed={selected}
                      onClick={() => choose(selected ? "all" : topic.code, true)}
                      className={`group flex w-full items-start gap-4 rounded-2xl p-3 text-left transition-colors ${focusRing} ${
                        selected ? "bg-white ring-1 ring-its-navy" : "hover:bg-white"
                      }`}
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-white text-[#5B7590] ring-1 ring-its-line">
                        <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[17px] font-semibold tracking-[-0.01em] text-its-navy">
                          {topic.label}
                        </span>
                        <span className="mt-1 block text-[14px] leading-[1.6] text-its-slate-ink">
                          {insightsPage.topics.descriptions[topic.code]}
                        </span>
                        <span className="mt-2 inline-flex items-center gap-1 text-[13px] font-semibold text-its-mint-ink">
                          {count} {count === 1 ? "article" : "articles"}
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" aria-hidden />
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section ref={gridRef} id="articles" aria-label="Articles" className="scroll-mt-24 bg-white py-16 md:py-24">
        <div className="layout-container">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <h2 className="text-[clamp(1.6rem,2.6vw,2.2rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-its-navy">
              {active === "all" ? "Latest Articles" : insightCategoryLabel(active)}
            </h2>
            <div
              role="group"
              aria-label="Filter articles by category"
              className="-mx-5 flex gap-2 overflow-x-auto px-5 md:mx-0 md:flex-wrap md:px-0"
            >
              {tabs.map((tab) => {
                const selected = active === tab.code;
                return (
                  <button
                    key={tab.code}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => choose(tab.code)}
                    className={`inline-flex min-h-10 shrink-0 items-center rounded-full border px-4 text-[14px] font-medium transition-colors ${focusRing} ${
                      selected
                        ? "border-its-navy bg-its-navy text-white"
                        : "border-[#C9CFD8] bg-white text-its-navy hover:border-its-navy"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {SHOW_SAMPLE_NOTICE ? (
            <p className="mt-6 rounded-xl border border-dashed border-[#C9CFD8] bg-its-offwhite px-4 py-3 text-[14px] leading-[1.55] text-its-slate-ink">
              <strong className="font-semibold text-its-navy">Design template.</strong>{" "}
              The articles below are samples for layout review. Published
              articles will replace them.
            </p>
          ) : null}

          {filtered.length === 0 ? (
            <div className="mt-8 rounded-2xl border border-its-line bg-its-offwhite px-6 py-12 text-center">
              <p className="text-[17px] font-semibold text-its-navy">No articles in this category yet.</p>
              <p className="mt-2 text-[15px] text-its-slate-ink">
                New articles are on the way. Choose another category in the meantime.
              </p>
            </div>
          ) : (
            <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {shown.map((article) => (
                <li key={article.slug}>
                  <ArticleCard article={article} />
                </li>
              ))}
            </ul>
          )}

          {filtered.length > visible ? (
            <div className="mt-10 text-center">
              <button
                type="button"
                onClick={() => setVisible((count) => count + PAGE_SIZE)}
                className={`inline-flex min-h-12 items-center rounded-full border border-[#C9CFD8] bg-white px-6 text-[15px] font-medium text-its-navy transition-colors hover:border-its-navy ${focusRing}`}
              >
                Load more articles
              </button>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
