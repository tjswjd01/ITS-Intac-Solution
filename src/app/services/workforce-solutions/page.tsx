import type { Metadata } from "next";

import Header from "@/components/Header";
import CompaniesWeSupport from "@/components/services/workforce-solutions/CompaniesWeSupport";
import IndustrySupportAreas from "@/components/services/workforce-solutions/IndustrySupportAreas";
import IssuePreventionVisibility from "@/components/services/workforce-solutions/IssuePreventionVisibility";
import ProfessionalManagementInfrastructure from "@/components/services/workforce-solutions/ProfessionalManagementInfrastructure";
import WorkforceAdvantage from "@/components/services/workforce-solutions/WorkforceAdvantage";
import WorkforceCTA from "@/components/services/workforce-solutions/WorkforceCTA";
import WorkforceSolutionsHero from "@/components/services/workforce-solutions/WorkforceSolutionsHero";

export const metadata: Metadata = {
  title: "Workforce Solutions | ITS Intac Solution",
  description:
    "Scalable workforce programs for warehouse, refurbishment, quality assurance, and operational environments. Beyond staffing — managed workforce operations.",
};

export default function WorkforceSolutionsPage() {
  return (
    <main className="page-shell bg-white">
      <Header />

      <WorkforceSolutionsHero />

      <WorkforceAdvantage />

      <ProfessionalManagementInfrastructure />

      <IssuePreventionVisibility />

      <IndustrySupportAreas />

      <CompaniesWeSupport />

      <WorkforceCTA />
    </main>
  );
}
