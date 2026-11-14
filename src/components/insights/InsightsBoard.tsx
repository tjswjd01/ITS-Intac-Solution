"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

import {
  SHOW_SAMPLE_NOTICE,
  articles,
  insightCategories,
  insightCategoryLabel,
  type InsightCategoryCode,
} from "@/content/insights";

import ArticleCard, { ArticleCover, ArticleMeta } from "./ArticleCard";

const PAGE_SIZE = 6;

const tabs: { code: InsightCategoryCode | "all"; label: string }[] = [
  { code: "all", label: "All Insights" },
  ...insightCategories,
];

export default function InsightsBoard() {
  const [active, setActive] = useState<InsightCategoryCode | "all">("all");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = active === "all" ? articles : articles.filter((a) => a.category === active);
  const featured = active === "all" ? articles.find((a) => a.featured) : undefined;
  const list = filtered.filter((a) => a !== featured);
  const shown = list.slice(0, visible);

  return (
    <section aria-label="Articles" className="bg-white pb-16 pt-8 md:pb-24 md:pt-10">
      <div className="layout-container">
        <div
          role="group"
          aria-label="Filter articles by category"
          className="-mx-5 flex gap-2 overflow-x-auto border-b border-its-line px-5 pb-4 sm:mx-0 sm:flex-wrap sm:px-0"
        >
          {tabs.map((tab) => {
            const selected = active === tab.code;
            return (
              <button
                key={tab.code}
                type="button"
                aria-pressed={selected}
                onClick={() => {
                  setActive(tab.code);
                  setVisible(PAGE_SIZE);
                }}
                className={`inline-flex min-h-11 shrink-0 items-center rounded-full px-4 text-[14.5px] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-its-navy ${
                  selected
                    ? "bg-its-navy text-white"
                    : "text-its-navy hover:bg-[#E8EBED]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {SHOW_SAMPLE_NOTICE ? (
          <p className="mt-6 rounded-xl border border-dashed border-[#C9CFD8] bg-its-offwhite px-4 py-3 text-[14px] leading-[1.55] text-its-slate-ink">
            <strong className="font-semibold text-its-navy">Design template.</strong>{" "}
            The articles below are samples for layout review. Published
            articles will replace them.
          </p>
        ) : null}

        {featured ? (
          <article className="group relative mt-8 grid overflow-hidden rounded-[24px] border border-its-line bg-its-offwhite md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <ArticleCover article={featured} className="aspect-[16/9] md:aspect-auto md:min-h-[300px]" />
            <div className="flex flex-col justify-center p-7 lg:p-10">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-its-mint-ink">
                Featured · {insightCategoryLabel(featured.category)}
              </p>
              <h2 className="mt-3 text-[clamp(1.5rem,2.4vw,2rem)] font-semibold leading-[1.2] tracking-[-0.03em] text-its-navy">
                <Link
                  href={`/insights/${featured.slug}`}
                  className="after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:rounded-[24px] focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-its-navy"
                >
                  {featured.title}
                </Link>
              </h2>
              <p className="mt-3 text-[16px] leading-[1.65] text-its-slate-ink">{featured.excerpt}</p>
              <div className="mt-6 flex items-center justify-between">
                <ArticleMeta article={featured} />
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-its-coral">
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </div>
            </div>
          </article>
        ) : null}

        {filtered.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-its-line bg-its-offwhite px-6 py-12 text-center">
            <p className="text-[17px] font-semibold text-its-navy">
              No articles in this category yet.
            </p>
            <p className="mt-2 text-[15px] text-its-slate-ink">
              New articles are on the way. Choose another category in the
              meantime.
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

        {list.length > visible ? (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setVisible((count) => count + PAGE_SIZE)}
              className="inline-flex min-h-12 items-center rounded-full border border-[#C9CFD8] bg-white px-6 text-[15px] font-medium text-its-navy transition-colors hover:border-its-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-its-navy"
            >
              Load more articles
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
