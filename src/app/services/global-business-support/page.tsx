import type { Metadata } from "next";

import Header from "@/components/Header";
import GlobalBusinessCTA from "@/components/services/global-business-support/GlobalBusinessCTA";
import GlobalBusinessIntro from "@/components/services/global-business-support/GlobalBusinessIntro";
import GlobalBusinessProcess from "@/components/services/global-business-support/GlobalBusinessProcess";
import GlobalBusinessServices from "@/components/services/global-business-support/GlobalBusinessServices";
import GlobalBusinessSupportHero from "@/components/services/global-business-support/GlobalBusinessSupportHero";
import GlobalBusinessTrustSection from "@/components/services/global-business-support/GlobalBusinessTrustSection";
import WhyChooseITSGlobal from "@/components/services/global-business-support/WhyChooseITSGlobal";

export const metadata: Metadata = {
  title: "Global Business Support | ITS Intac Solution",
  description:
    "U.S. market entry and operational support partner for Korean companies. Workforce deployment, facility setup, manufacturing launch, warehouse operations, and bilingual coordination from Dallas, Texas.",
};

export default function GlobalBusinessSupportPage() {
  return (
    <main className="page-shell bg-white">
      <Header />

      <GlobalBusinessSupportHero />
      <GlobalBusinessIntro />
      <GlobalBusinessServices />
      <WhyChooseITSGlobal />
      <GlobalBusinessProcess />
      <GlobalBusinessTrustSection />
      <GlobalBusinessCTA />
    </main>
  );
}
