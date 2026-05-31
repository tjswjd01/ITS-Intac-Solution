import {
  ClipboardCheck,
  Package,
  Radio,
  Route,
  Truck,
  Wrench,
} from "lucide-react";

import OperationsSectionHeader from "../operations/OperationsSectionHeader";

const applicationAreas = [
  {
    title: "Receiving & Intake",
    description:
      "Automate intake routing, scanning, and initial workflow assignment.",
    icon: Truck,
  },
  {
    title: "Testing & Validation",
    description:
      "Deploy automated functional, RF, and quality validation checkpoints.",
    icon: Radio,
  },
  {
    title: "Repair & Assembly",
    description:
      "Support repeatable assembly, fastening, and repair station workflows.",
    icon: Wrench,
  },
  {
    title: "Material Movement",
    description:
      "Reduce manual transport with AMR and staging automation between zones.",
    icon: Route,
  },
  {
    title: "Quality Assurance",
    description:
      "Integrate automated inspection and sampling into QA programs.",
    icon: ClipboardCheck,
  },
  {
    title: "Packaging & Outbound",
    description:
      "Streamline kitting, labeling, packing, and outbound preparation steps.",
    icon: Package,
  },
] as const;

export default function WhereAutomationCanBeApplied() {
  return (
    <section id="application-areas" className="section-shell border-t border-black/[0.06] bg-white">
      <div className="layout-container">
        <OperationsSectionHeader
          eyebrow="Application Areas"
          title="Automation opportunities across the operational workflow."
          description="From intake and testing to repair, movement, QA, and outbound preparation, ITS helps identify where automation can reduce manual load and improve consistency."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {applicationAreas.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-[20px] border border-black/[0.08] bg-[#FAFAF8] p-5 shadow-[0_8px_28px_rgba(15,23,42,0.04)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF3FA] text-[#0A3A86]">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>

                <h3 className="mt-4 text-[16px] font-semibold tracking-[-0.02em] text-[#0B0F14]">
                  {item.title}
                </h3>

                <p className="mt-2 text-[13px] leading-[1.65] text-[#64748B]">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
