import type { Metadata } from "next";

import Header from "../components/Header";
import HomeCta from "../components/home/HomeCta";
import HomeHero from "../components/home/HomeHero";
import HomeIndustries from "../components/home/HomeIndustries";
import HomeInsights from "../components/home/HomeInsights";
import HomeNemo from "../components/home/HomeNemo";
import HomeProofStrip from "../components/home/HomeProofStrip";
import HomeSolutions from "../components/home/HomeSolutions";
import HomeWhyIts from "../components/home/HomeWhyIts";

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
    <main className="page-shell bg-white">
      <Header />
      <HomeHero />
      <HomeSolutions />
      <HomeProofStrip />
      <HomeWhyIts />
      <HomeIndustries />
      <HomeNemo />
      <HomeInsights />
      <HomeCta />
    </main>
  );
}
