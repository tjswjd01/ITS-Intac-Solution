import type { Metadata } from "next";

import Header from "../../components/Header";
import CareersBoard from "../../components/careers/CareersBoard";
import { CareersStories } from "../../components/careers/CareersExtras";
import { CareerAdvicePreview, CareersResume } from "../../components/careers/CareersSupport";

export const metadata: Metadata = {
  title: "Careers at ITS",
  description:
    "Explore professional, technical, operational and logistics opportunities supported by ITS, or submit your resume.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <main className="page-shell bg-its-offwhite">
      <Header />
      <CareersBoard />
      <CareersResume />
      {/* Hidden until approved stories are added to careersContent.ts. */}
      <CareersStories />
      <CareerAdvicePreview />
    </main>
  );
}
