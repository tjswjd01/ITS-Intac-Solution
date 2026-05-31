import Header from "@/components/Header";
import AutomationCTA from "@/components/services/automation-solutions/AutomationCTA";
import AutomationCoreTechnologies from "@/components/services/automation-solutions/AutomationCoreTechnologies";
import AutomationOverview from "@/components/services/automation-solutions/AutomationOverview";
import AutomationSolutionsHero from "@/components/services/automation-solutions/AutomationSolutionsHero";
import IndustryOperationUseCases from "@/components/services/automation-solutions/IndustryOperationUseCases";
import WhereAutomationCanBeApplied from "@/components/services/automation-solutions/WhereAutomationCanBeApplied";

export default function AutomationSolutionsPage() {
  return (
    <main className="page-shell">
      <Header variant="dark" ctaVariant="pro" />

      <AutomationSolutionsHero />

      <AutomationOverview />

      <AutomationCoreTechnologies />

      <WhereAutomationCanBeApplied />

      <IndustryOperationUseCases />

      <AutomationCTA />
    </main>
  );
}
