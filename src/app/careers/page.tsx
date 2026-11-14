import type { Metadata } from "next";
import Header from "../../components/Header";
import CareersHero from "../../components/careers/CareersHero";
import CareersCultureValues from "../../components/careers/CareersCultureValues";
import CareersOpportunities from "../../components/careers/CareersOpportunities";
import CareersBanner from "../../components/careers/CareersBanner";

export const metadata: Metadata = {
  title: "Careers in Texas & Washington",
  description:
    "Join INTAC Solution. Operations, quality, engineering and warehouse roles at our facilities in Plano, Coppell and Irving, Texas, and Bellevue, Washington.",
  alternates: { canonical: "/careers" },
};

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
