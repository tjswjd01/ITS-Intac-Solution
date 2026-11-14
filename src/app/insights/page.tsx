import type { Metadata } from "next";

import Header from "@/components/Header";
import InsightsBoard from "@/components/insights/InsightsBoard";
import NewsletterBanner from "@/components/insights/NewsletterBanner";
import { Eyebrow } from "@/components/site/primitives";
import { articles } from "@/content/insights";

const hasPublished = articles.some((article) => !article.sample);

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical perspectives on HR, the job market, careers, and operations from ITS.",
  alternates: { canonical: "/insights" },
  // Kept out of search results until real articles are published.
  robots: hasPublished ? undefined : { index: false, follow: true },
};

export default function InsightsPage() {
  return (
    <main className="page-shell bg-white">
      <Header />

      <section className="bg-its-offwhite pb-12 pt-28 md:pb-16 md:pt-36">
        <div className="layout-container">
          <div className="max-w-[860px]">
            <Eyebrow rule>ITS Insights</Eyebrow>
            <h1 className="mt-5 text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-its-navy">
              Insights for Better Hiring, Stronger Workforces, and Smarter
              Operations.
            </h1>
            <p className="mt-5 max-w-[600px] text-[17px] leading-[1.7] text-its-slate-ink">
              Practical perspectives on HR, the job market, careers, and
              operations from ITS.
            </p>
          </div>
        </div>
      </section>

      <InsightsBoard />
      <NewsletterBanner />
    </main>
  );
}
