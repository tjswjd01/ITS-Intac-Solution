import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Header from "@/components/Header";
import { insights } from "@/components/home/homeContent";
import {
  CtaBanner,
  Eyebrow,
  PageHero,
  SectionTitle,
  navyButtonClassName,
} from "@/components/site/primitives";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical notes from ITS on hiring, workforce management, operations and entering the U.S. market.",
  alternates: { canonical: "/insights" },
  // Kept out of search results until the first articles are published.
  robots: insights.length === 0 ? { index: false, follow: true } : undefined,
};

const topics = [
  {
    title: "Workforce & HR",
    description: "Managing people, attendance and compliance on site.",
  },
  {
    title: "Hiring",
    description: "Finding and screening professional and technical talent.",
  },
  {
    title: "Operations",
    description: "Running sites to quality, productivity and cost targets.",
  },
  {
    title: "U.S. Market Entry",
    description: "Planning a workforce and operation in the United States.",
  },
  {
    title: "Career Advice",
    description: "Guidance for candidates, including bilingual professionals.",
  },
];

export default function InsightsPage() {
  return (
    <main className="page-shell bg-its-offwhite">
      <Header />

      <PageHero
        eyebrow="Insights"
        title="Workforce and Operations Insights."
        copy="Practical notes from ITS on hiring, workforce management, operations and entering the U.S. market."
      />

      <section aria-labelledby="articles-heading" className="bg-white py-16 md:py-24">
        <div className="layout-container">
          <Eyebrow>Articles</Eyebrow>
          <SectionTitle className="mt-4">
            <span id="articles-heading">
              {insights.length === 0 ? "First Articles Are on the Way." : "Latest Articles."}
            </span>
          </SectionTitle>

          {insights.length === 0 ? (
            <div className="mt-8 flex flex-col gap-6 rounded-[28px] border border-its-line bg-its-offwhite p-7 md:flex-row md:items-center md:justify-between lg:p-9">
              <p className="max-w-[560px] text-[16px] leading-[1.7] text-its-slate-ink">
                We are preparing our first articles. If you have a question
                about hiring, workforce or operations in the U.S., our team is
                glad to answer it directly.
              </p>
              <Link href="/contact" className={`${navyButtonClassName} shrink-0 self-start md:self-auto`}>
                Ask Our Team
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          ) : (
            <ul className="mt-10 grid gap-5 md:grid-cols-3">
              {insights.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex h-full flex-col rounded-[24px] border border-its-line bg-its-offwhite p-7 transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-its-navy"
                  >
                    <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-its-mint-ink">
                      {item.category}
                    </span>
                    <span className="mt-3 text-[18px] font-semibold leading-[1.3] tracking-[-0.02em] text-its-navy">
                      {item.title}
                    </span>
                    <span className="mt-auto pt-5 text-[13.5px] text-its-slate-ink">
                      {item.date}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section aria-labelledby="topics-heading" className="bg-its-offwhite py-16 md:py-24">
        <div className="layout-container">
          <Eyebrow>Topics</Eyebrow>
          <SectionTitle className="mt-4">
            <span id="topics-heading">What We Will Cover.</span>
          </SectionTitle>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {topics.map((topic) => (
              <li
                key={topic.title}
                className="rounded-[24px] border border-its-line bg-white p-6"
              >
                <h3 className="text-[16.5px] font-semibold leading-[1.25] tracking-[-0.02em] text-its-navy">
                  {topic.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-[1.65] text-its-slate-ink">
                  {topic.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner
        title="Have a Question for ITS?"
        copy="Reach out about your workforce, operations, or U.S. market entry needs."
      />
    </main>
  );
}
