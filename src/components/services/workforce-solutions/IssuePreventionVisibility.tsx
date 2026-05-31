"use client";

import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type NemoShowcaseFeature = {
  id: string;
  title: string;
  description: string;
  /** Replace with screenshot path when assets are ready, e.g. "/images/nemo/team-coordination.png" */
  image: string | null;
  imageAlt: string;
};

const nemoShowcaseFeatures: NemoShowcaseFeature[] = [
  {
    id: "team-coordination",
    title: "Team Coordination",
    description:
      "Real-time communication between field teams, supervisors, and management.",
    image: null,
    imageAlt: "NEMO team coordination screenshot",
  },
  {
    id: "attendance-visibility",
    title: "Attendance Visibility",
    description:
      "Real-time workforce visibility across shifts, locations, and operational teams.",
    image: null,
    imageAlt: "NEMO attendance visibility screenshot",
  },
  {
    id: "issue-management",
    title: "Issue Management",
    description:
      "Structured issue reporting and resolution tracking with clear accountability.",
    image: null,
    imageAlt: "NEMO issue management screenshot",
  },
  {
    id: "operational-communication",
    title: "Operational Communication",
    description:
      "Announcements, updates, and workforce notifications delivered through one platform.",
    image: null,
    imageAlt: "NEMO operational communication screenshot",
  },
];

function NemoFeatureCell({
  feature,
  className,
}: {
  feature: NemoShowcaseFeature;
  className?: string;
}) {
  return (
    <article className={cn("flex flex-col p-5 md:p-6 lg:p-7", className)}>
      <div>
        <h3 className="text-[15px] font-semibold tracking-[-0.03em] text-[#0B0F14] md:text-base">
          {feature.title}
        </h3>
        <p className="mt-2 text-[13px] leading-[1.65] text-[#64748B]">
          {feature.description}
        </p>
      </div>

      <div className="relative mt-6 aspect-[16/11] w-full overflow-hidden bg-[#F4F6F8] md:mt-7">
        {feature.image ? (
          <img
            src={feature.image}
            alt={feature.imageAlt}
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 bg-[linear-gradient(180deg,#FAFBFC_0%,#EEF2F6_100%)] text-[#94A3B8]">
            <ImageIcon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
            <span className="text-[11px] font-medium tracking-[0.04em] uppercase">
              Screenshot placeholder
            </span>
          </div>
        )}
      </div>
    </article>
  );
}

export default function IssuePreventionVisibility() {
  return (
    <section
      id="issue-prevention"
      className="section-shell border-t border-black/[0.06] bg-white"
    >
      <div className="layout-container">
        <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-start lg:gap-12 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45 }}
            className="lg:sticky lg:top-28"
          >
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#111111]">
              <span className="h-2 w-2 rounded-full bg-[#111111]" aria-hidden />
              Issue Prevention & Workforce Visibility
            </p>

            <h2 className="section-title mt-5 max-w-[520px]">
              Professional workforce management powered by people and
              technology.
            </h2>

            <p className="section-copy mt-6 max-w-[480px]">
              ITS combines experienced workforce professionals, operational
              oversight, and the NEMO platform to create a more accountable,
              visible, and coordinated workforce operation.
            </p>

            <div className="mt-8 rounded-2xl border border-[#0A3A86]/12 bg-[#F6F9FF] px-5 py-5 md:mt-10">
              <p className="text-[15px] font-semibold tracking-[-0.02em] text-[#062A56] md:text-base">
                More than staffing.
                <br />
                Fully managed workforce operations.
              </p>
              <p className="mt-3 text-[14px] leading-[1.75] text-[#475569]">
                ITS combines professional workforce oversight, structured
                processes, and the NEMO platform to create workforce programs
                with greater accountability, visibility, communication, and
                operational control.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2">
              <span className="rounded-full border border-[#0A3A86]/15 bg-[#EEF4FF] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0A3A86]">
                NEMO Platform
              </span>
              <span className="text-[13px] text-[#64748B]">
                People + process + platform
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {nemoShowcaseFeatures.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: 0.06 + index * 0.05 }}
                  className={cn(
                    "border-[#E5E7EB]",
                    index < nemoShowcaseFeatures.length - 1 && "max-sm:border-b",
                    index % 2 === 0 && "sm:border-r",
                    index < 2 && "sm:border-b",
                  )}
                >
                  <NemoFeatureCell feature={feature} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
