import Header from "../../components/Header";
import CareersHero from "../../components/careers/CareersHero";
import CareersCultureValues from "../../components/careers/CareersCultureValues";
import CareersOpportunities from "../../components/careers/CareersOpportunities";
import CareersBanner from "../../components/careers/CareersBanner";

export default function CareersPage() {
  return (
    <main className="page-shell bg-[#FAFAF8]">
      <Header />
      <CareersHero />
      <CareersCultureValues />
      <CareersOpportunities />
      <CareersBanner />
    </main>
  );
}
