import type { Metadata } from "next";

import Header from "@/components/Header";
import GlobalBusinessCTA from "@/components/services/global-business-support/GlobalBusinessCTA";
import GlobalBusinessHighlight from "@/components/services/global-business-support/GlobalBusinessHighlight";
import GlobalBusinessIntro from "@/components/services/global-business-support/GlobalBusinessIntro";
import GlobalBusinessProcess from "@/components/services/global-business-support/GlobalBusinessProcess";
import GlobalBusinessScenarios from "@/components/services/global-business-support/GlobalBusinessScenarios";
import GlobalBusinessServices from "@/components/services/global-business-support/GlobalBusinessServices";
import GlobalBusinessSupportHero from "@/components/services/global-business-support/GlobalBusinessSupportHero";
import SupportAreasGrid from "@/components/services/global-business-support/SupportAreasGrid";
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
      <SupportAreasGrid />
      <GlobalBusinessProcess />
      <GlobalBusinessScenarios />
      <GlobalBusinessHighlight />
      <GlobalBusinessCTA />
    </main>
  );
}
