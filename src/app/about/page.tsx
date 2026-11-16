import type { Metadata } from "next";

import AboutCoreStrengths from "@/components/about/AboutCoreStrengths";
import AboutCta from "@/components/about/AboutCta";
import AboutHero from "@/components/about/AboutHero";
import AboutIndustries from "@/components/about/AboutIndustries";
import AboutProof from "@/components/about/AboutProof";
import HistorySection from "@/components/about/HistorySection";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "About ITS: Workforce & Operations Partner",
  description:
    "Since 2015, ITS has combined workforce solutions, engineering expertise, and operational management to help businesses build, manage, and scale their U.S. operations.",
  alternates: { canonical: "/about" },
};

// Section surfaces alternate: navy hero, white, light gray strip, white,
// cool gray, navy closing. The footer comes from the root layout.
export default function AboutPage() {
  return (
    <main className="page-shell">
      <Header variant="dark" />
      <AboutHero />
      <AboutCoreStrengths />
      <AboutProof />
      <HistorySection />
      <AboutIndustries />
      <AboutCta />
    </main>
  );
}
