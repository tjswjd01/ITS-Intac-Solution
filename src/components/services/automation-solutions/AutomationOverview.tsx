"use client";

import { FeatureCarousel, type CarouselStep } from "@/components/ui/animated-feature-carousel";

import OperationsSectionHeader from "../operations/OperationsSectionHeader";

const automationOverviewSteps: readonly CarouselStep[] = [
  {
    id: "1",
    name: "01",
    title: "Machine Vision Inspection",
    description:
      "Camera-based inspection systems designed to support visual verification, defect detection, alignment checks, labeling confirmation, and pass/fail decision workflows.",
  },
  {
    id: "2",
    name: "02",
    title: "Robotic Handling & Motion",
    description:
      "Robotic arms, conveyors, fixtures, and material transfer systems that help reduce repetitive manual handling and improve process consistency.",
  },
  {
    id: "3",
    name: "03",
    title: "Control Systems & Sensors",
    description:
      "PLC logic, sensors, safety signals, and equipment controls that coordinate automated movement, inspection timing, and system responses.",
  },
  {
    id: "4",
    name: "04",
    title: "Data Monitoring & Reporting",
    description:
      "Operational dashboards that capture equipment activity, inspection outcomes, workflow status, and production data for better visibility.",
  },
];

export default function AutomationOverview() {
  return (
    <section
      id="automation-overview"
      className="section-shell border-t border-black/[0.06] bg-white"
    >
      <div className="layout-container">
        <OperationsSectionHeader
          eyebrow="Automation Overview"
          title="Automation systems designed for real operational environments."
          description="ITS develops practical automation solutions that combine equipment handling, inspection technology, control systems, and operational data to support more consistent and scalable workflows."
          descriptionClassName="max-w-3xl sm:max-w-4xl lg:max-w-[900px]"
          eyebrowTone="black"
          titleMetallicShine
        />

        <div className="mt-12 md:mt-14">
          <FeatureCarousel steps={automationOverviewSteps} />
        </div>
      </div>
    </section>
  );
}
