import Header from "@/components/Header";
import AutomationCTA from "@/components/services/automation-solutions/AutomationCTA";
import AutomationOverview from "@/components/services/automation-solutions/AutomationOverview";
import AutomationSolutionsHero from "@/components/services/automation-solutions/AutomationSolutionsHero";
import AutomationCoreTechnologies from "@/components/services/automation-solutions/AutomationCoreTechnologies";
import IndustryOperationUseCases from "@/components/services/automation-solutions/IndustryOperationUseCases";
import WhereAutomationCanBeApplied from "@/components/services/automation-solutions/WhereAutomationCanBeApplied";

export default function AutomationSolutionsPage() {
  return (
    <main className="page-shell">
      <Header variant="dark" ctaVariant="pro" />

      {/* 1. Hero */}
      <AutomationSolutionsHero />

      {/* 2. Automation Overview */}
      <AutomationOverview />

      {/* 3. Core Technologies */}
      <AutomationCoreTechnologies />

      {/* 4. Application Areas */}
      <WhereAutomationCanBeApplied />

      {/* 5. Industry Use Cases */}
      <IndustryOperationUseCases />

      {/* 6. Contact / Consultation CTA */}
      <AutomationCTA />
    </main>
  );
}
