import type { Metadata } from "next";

import Header from "@/components/Header";
import AutomationCapabilities from "@/components/services/automation-solutions/AutomationCapabilities";
import AutomationEquipment from "@/components/services/automation-solutions/AutomationEquipment";
import AutomationFeaturedAmr from "@/components/services/automation-solutions/AutomationFeaturedAmr";
import AutomationHeroV2 from "@/components/services/automation-solutions/AutomationHeroV2";
import AutomationApplicationAreas from "@/components/services/automation-solutions/WhereAutomationCanBeApplied";
import { automationClosing } from "@/components/services/automation-solutions/automationContent";
import { CtaBanner } from "@/components/site/primitives";

export const metadata: Metadata = {
  title: "Automation & Robotics",
  description:
    "ITS develops and customizes automation equipment for mobile-device refurbishment processes and supports AMR robots used for material movement within its facility.",
  alternates: { canonical: "/services/automation-solutions" },
};

export default function AutomationSolutionsPage() {
  return (
    <main className="page-shell bg-its-offwhite">
      <Header />

      <AutomationHeroV2 />

      <AutomationCapabilities />

      <AutomationEquipment />

      <AutomationFeaturedAmr />

      <AutomationApplicationAreas />

      <div className="bg-its-offwhite pt-16 md:pt-20">
        <CtaBanner
          title={automationClosing.title}
          copy={automationClosing.copy}
          label={automationClosing.label}
        />
      </div>
    </main>
  );
}
