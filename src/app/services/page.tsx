import type { Metadata } from "next";
import Header from "../../components/Header";
import ServicesHero2 from "@/components/services/ServicesHero2";
import HoverServicesSlider from "@/components/services/HoverServicesSlider";
import ServicesOverviewCards from "@/components/services/ServicesOverviewCards";
import FieldOperationsGallery from "@/components/services/FieldOperationsGallery";
import NemoTeaser from "@/components/services/NemoTeaser";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata: Metadata = {
  title: "Device & Workforce Operational Services",
  description:
    "Device lifecycle operations, managed workforce solutions, workflow automation and U.S. business infrastructure support — the full INTAC Solution service range.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main className="page-shell">
      <Header />
      <ServicesHero2 />
      <ServicesOverviewCards />
      <HoverServicesSlider />
      <FieldOperationsGallery />
      <NemoTeaser />
      <ServicesCTA />
    </main>
  );
}
