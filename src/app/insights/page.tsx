import type { Metadata } from "next";

import Header from "@/components/Header";
import InsightsBoard from "@/components/insights/InsightsBoard";
import InsightsFeatured from "@/components/insights/InsightsFeatured";
import InsightsHero from "@/components/insights/InsightsHero";
import InsightsPillars from "@/components/insights/InsightsPillars";
import NewsletterBanner from "@/components/insights/NewsletterBanner";
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

      <InsightsHero />
      <InsightsPillars />
      <InsightsFeatured />
      <InsightsBoard />
      <NewsletterBanner />
    </main>
  );
}
