import type { Metadata } from "next";
import Header from "../components/Header";

import LandingHero from "../components/landing/LandingHero";
import LandingTrustedCompanies from "../components/landing/LandingTrustedCompanies";
import LandingWhoWeAre from "../components/landing/LandingWhoWeAre";
import LandingWhatWeDo from "../components/landing/LandingWhatWeDo";
import LandingWhyChoose from "../components/landing/LandingWhyChoose";
import LandingOperationNetwork from "../components/landing/LandingOperationNetwork";

export const metadata: Metadata = {
  description:
    "INTAC Solution runs device refurbishment, QA testing, packaging and workforce operations — 10M+ devices and 1.5M tests a year for Samsung and U.S. carriers.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main className="page-shell">
      <Header />
      <LandingHero />
      <LandingTrustedCompanies />
      <LandingWhoWeAre />
      <LandingWhatWeDo />
      <LandingWhyChoose />
      <LandingOperationNetwork />
    </main>
  );
}