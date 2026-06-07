"use client";

import { motion } from "framer-motion";

import GlobalSectionHeader from "@/components/services/global-business-support/GlobalSectionHeader";
import {
  GBS_BODY,
  GBS_BORDER,
  GBS_HEADING,
} from "@/components/services/global-business-support/globalBusinessTheme";

const TIMELINE_NAVY = "#0F172A";
const TIMELINE_LINE = "#CBD5E1";

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Assess operational goals, workforce requirements, facility needs, and expansion priorities.",
  },
  {
    step: "02",
    title: "Planning",
    description:
      "Develop customized workforce, operational, and implementation strategies aligned with project objectives.",
  },
  {
    step: "03",
    title: "Deployment",
    description:
      "Recruit, place, and coordinate workforce and operational resources across U.S. facilities.",
  },
  {
    step: "04",
    title: "Ongoing Support",
    description:
      "Provide workforce management, reporting, compliance assistance, and operational support as business scales.",
  },
] as const;

const entranceEase = [0.22, 1, 0.36, 1] as const;

function TimelineStep({
  step,
  index,
}: {
  step: (typeof processSteps)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: entranceEase,
      }}
      className="group relative flex w-full min-w-0 flex-col items-center text-center max-md:flex-row max-md:items-start max-md:gap-5 max-md:pb-10 max-md:text-left last:max-md:pb-0"
    >
      <div
        className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-[15px] font-semibold text-white transition-transform duration-300 group-hover:scale-105"
        style={{ backgroundColor: TIMELINE_NAVY }}
      >
        {index + 1}
      </div>

      <div className="mt-5 min-w-0 max-md:mt-1 max-md:flex-1">
        <p
          className="text-[11px] font-bold uppercase tracking-[0.18em]"
          style={{ color: GBS_BODY }}
        >
          Step {step.step}
        </p>

        <h3
          className="mt-2 text-[17px] font-semibold tracking-[-0.03em] transition-colors duration-300 group-hover:text-[#0F172A] md:text-[18px]"
          style={{ color: GBS_HEADING }}
        >
          {step.title}
        </h3>

        <p
          className="mx-auto mt-3 max-w-[240px] text-[14px] leading-[1.75] max-md:mx-0 max-md:max-w-none md:text-[15px]"
          style={{ color: GBS_BODY }}
        >
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function GlobalBusinessProcess() {
  return (
    <section
      id="global-business-process"
      className="border-t bg-white py-16 md:py-20 lg:py-24"
      style={{ borderColor: GBS_BORDER }}
    >
      <div className="mx-auto w-full min-w-0 max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: entranceEase }}
        >
          <GlobalSectionHeader
            align="center"
            eyebrow="Our Process"
            title="A structured path from discovery to ongoing U.S. operations."
            description="ITS follows a clear, collaborative process to help Korean companies move from initial planning through workforce deployment and long-term operational support."
            className="mx-auto"
            descriptionClassName="max-w-[700px]"
          />
        </motion.div>

        <div className="relative mt-14 lg:mt-16">
          {/* Desktop horizontal connector */}
          <div
            className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-6 hidden h-px lg:block"
            style={{ backgroundColor: TIMELINE_LINE }}
            aria-hidden
          />

          {/* Mobile vertical connector */}
          <div
            className="pointer-events-none absolute bottom-6 left-6 top-6 w-px md:hidden"
            style={{ backgroundColor: TIMELINE_LINE }}
            aria-hidden
          />

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-14 lg:grid-cols-4 lg:gap-8">
            {processSteps.map((step, index) => (
              <TimelineStep key={step.step} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
