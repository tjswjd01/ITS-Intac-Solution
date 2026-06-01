"use client";

import { FeatureCarousel, type CarouselStep } from "@/components/ui/animated-feature-carousel";

import OperationsSectionHeader from "../operations/OperationsSectionHeader";

const processSteps: readonly CarouselStep[] = [
  {
    id: "1",
    name: "01",
    title: "Assessment",
    description:
      "Understand operational goals, staffing requirements, and facility needs.",
  },
  {
    id: "2",
    name: "02",
    title: "Planning",
    description:
      "Develop workforce and operational support strategies tailored to the project.",
  },
  {
    id: "3",
    name: "03",
    title: "Deployment",
    description:
      "Recruit, place, and coordinate workforce and operational resources.",
  },
  {
    id: "4",
    name: "04",
    title: "Ongoing Support",
    description:
      "Provide continuous workforce management, reporting, and operational assistance.",
  },
];

export default function GlobalBusinessProcess() {
  return (
    <section
      id="global-business-process"
      className="section-shell border-t border-black/[0.06] bg-[#FAFAF8]"
    >
      <div className="layout-container">
        <OperationsSectionHeader
          eyebrow="Our Process"
          title="A structured path from assessment to ongoing U.S. operations."
          description="ITS follows a clear, collaborative process to help Korean companies move from initial planning through workforce deployment and long-term operational support."
          descriptionClassName="max-w-3xl"
          eyebrowTone="black"
        />

        <div className="mt-12 md:mt-14">
          <FeatureCarousel steps={processSteps} />
        </div>
      </div>
    </section>
  );
}
