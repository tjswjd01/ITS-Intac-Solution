import Header from "@/components/Header";
import AutomationCTA from "@/components/services/automation-solutions/AutomationCTA";
import AutomationCoreTechnologies from "@/components/services/automation-solutions/AutomationCoreTechnologies";
import AutomationIndustryUseCases from "@/components/services/automation-solutions/AutomationIndustryUseCases";
import AutomationPerformanceImpact from "@/components/services/automation-solutions/AutomationPerformanceImpact";
import AutomationOverview from "@/components/services/automation-solutions/AutomationOverview";
import AutomationSolutionsHero from "@/components/services/automation-solutions/AutomationSolutionsHero";
import AutomationApplicationAreas from "@/components/services/automation-solutions/WhereAutomationCanBeApplied";

export default function AutomationSolutionsPage() {
  return (
    <main className="page-shell">
      <Header variant="dark" ctaVariant="pro" />

      <AutomationSolutionsHero />

      <AutomationOverview />

      <AutomationCoreTechnologies />

      <AutomationApplicationAreas />

      <AutomationIndustryUseCases />

      <AutomationPerformanceImpact />

      <AutomationCTA />
    </main>
  );
}
