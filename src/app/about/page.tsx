import type { Metadata } from "next";
import Header from "../../components/Header";

import AboutIntro from "../../components/about/AboutIntro";
import HistorySection from "../../components/about/HistorySection";
import IndustriesAndPartnersSection from "../../components/about/IndustriesAndPartnersSection";
import FeaturedSectionStats from "../../components/about/FeaturedSectionStats";
import AboutClosingPartners from "../../components/about/AboutClosingPartners";

export const metadata: Metadata = {
  title: "About Our Operations & Facilities",
  description:
    "INTAC Solution operates five U.S. facilities across Texas and Washington, supporting Samsung and major wireless carriers with device and workforce operations.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="page-shell bg-[#FAFAF8]">
      <Header />

      <AboutIntro />

      <HistorySection />

      <IndustriesAndPartnersSection />

      <FeaturedSectionStats />

      <AboutClosingPartners />


    </main>
  );
}