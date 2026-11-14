import type { Metadata } from "next";

import Header from "../../components/Header";
import CareersCultureValues from "../../components/careers/CareersCultureValues";
import {
  CareersClosing,
  CareersResumeBanner,
  CareersStories,
} from "../../components/careers/CareersExtras";
import CareersHeroV2 from "../../components/careers/CareersHeroV2";
import CareersPositions from "../../components/careers/CareersPositions";
import HomeInsights from "../../components/home/HomeInsights";

export const metadata: Metadata = {
  title: "Careers at ITS",
  description:
    "Build your career in operations, technology and global business. See open positions at ITS in Texas or submit your resume.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <main className="page-shell bg-its-offwhite">
      <Header />
      <CareersHeroV2 />
      <CareersPositions />
      <CareersResumeBanner />
      {/* Stories and Insights stay hidden until approved content is added. */}
      <CareersStories />
      <CareersCultureValues />
      <HomeInsights />
      <CareersClosing />
    </main>
  );
}
