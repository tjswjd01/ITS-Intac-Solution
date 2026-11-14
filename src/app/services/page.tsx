import type { Metadata } from "next";
import Header from "../../components/Header";
import ServicesHero2 from "@/components/services/ServicesHero2";
import ServicesOverviewCards from "@/components/services/ServicesOverviewCards";
import FieldOperationsGallery from "@/components/services/FieldOperationsGallery";
import HomeNemo from "@/components/home/HomeNemo";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata: Metadata = {
  title: "Workforce & Operations Solutions",
  description:
    "Direct hire, staffing and workforce management, managed operations, refurbishment-process automation and U.S. market entry support — the five ITS solutions.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main className="page-shell">
      <Header />
      <ServicesHero2 />
      <ServicesOverviewCards />
      <FieldOperationsGallery />
      <HomeNemo />
      <ServicesCTA />
    </main>
  );
}
