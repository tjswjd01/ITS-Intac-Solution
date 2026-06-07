import Header from "../../components/Header";

import AboutIntro from "../../components/about/AboutIntro";
import HistorySection from "../../components/about/HistorySection";
import IndustriesAndPartnersSection from "../../components/about/IndustriesAndPartnersSection";
import FeaturedSectionStats from "../../components/about/FeaturedSectionStats";
import AboutClosingPartners from "../../components/about/AboutClosingPartners";

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