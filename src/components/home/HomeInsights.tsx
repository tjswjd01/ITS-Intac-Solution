import Link from "next/link";

import { ArrowLink, Eyebrow, SectionTitle } from "@/components/site/primitives";

import { insights } from "./homeContent";

/** Renders nothing until published articles are added to homeContent.ts. */
export default function HomeInsights() {
  if (insights.length === 0) return null;

  return (
    <section aria-labelledby="insights-heading" className="bg-white py-16 md:py-20">
      <div className="layout-container">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>Insights</Eyebrow>
            <SectionTitle className="mt-4">
              <span id="insights-heading">Latest From ITS.</span>
            </SectionTitle>
          </div>
          <ArrowLink href="/insights">All Insights</ArrowLink>
        </div>
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {insights.slice(0, 3).map((item) => (
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
                <span className="mt-auto pt-5 text-[13.5px] text-its-slate-ink">{item.date}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
