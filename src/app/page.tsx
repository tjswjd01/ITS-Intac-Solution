import type { Metadata } from "next";

import Header from "../components/Header";
import HomeCaseStudies from "../components/home/HomeCaseStudies";
import HomeHero from "../components/home/HomeHero";
import HomeIndustries from "../components/home/HomeIndustries";
import HomeInsights from "../components/home/HomeInsights";
import HomeNemo from "../components/home/HomeNemo";
import HomeProofStrip from "../components/home/HomeProofStrip";
import HomeSolutions from "../components/home/HomeSolutions";
import HomeTestimonials from "../components/home/HomeTestimonials";
import HomeWhyIts from "../components/home/HomeWhyIts";
import { closing } from "../components/home/homeContent";
import { CtaBanner } from "../components/site/primitives";

const title = "Workforce, Operations & Automation Solutions | INTAC Solution";
const description =
  "ITS provides direct hire, workforce staffing and management, engineering-led operations, specialized process automation and U.S. market entry support in the United States.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "INTAC Solution",
    locale: "en_US",
    url: "https://www.intacsolution.com",
    title,
    description,
  },
};

export default function Home() {
  return (
    <main className="page-shell bg-its-offwhite">
      <Header />
      <HomeHero />
      <HomeSolutions />
      <HomeProofStrip />
      <HomeWhyIts />
      <HomeIndustries />
      <HomeNemo />
      <HomeCaseStudies />
      <HomeTestimonials />
      <HomeInsights />
      <CtaBanner title={closing.title} copy={closing.copy} />
    </main>
  );
}
