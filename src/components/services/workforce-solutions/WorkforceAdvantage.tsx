"use client";

import { motion } from "framer-motion";
import {
  Eye,
  Gauge,
  ShieldCheck,
  Timer,
  UsersRound,
  Zap,
} from "lucide-react";

import OperationsSectionHeader from "../operations/OperationsSectionHeader";

const advantages = [
  {
    title: "Issue Prevention",
    description:
      "Proactive oversight helps identify attendance gaps, scheduling risks, and operational friction before they disrupt daily execution.",
    icon: ShieldCheck,
  },
  {
    title: "Attendance Visibility",
    description:
      "Real-time visibility into shift coverage, attendance patterns, and workforce activity across operational programs.",
    icon: Eye,
  },
  {
    title: "Workforce Accountability",
    description:
      "Clear ownership across scheduling, field coordination, and daily workforce execution so teams stay aligned to program goals.",
    icon: UsersRound,
  },
  {
    title: "Faster Response",
    description:
      "Structured coordination enables quicker adjustments to coverage needs, operational changes, and field-level requests.",
    icon: Timer,
  },
  {
    title: "Operational Consistency",
    description:
      "Standardized processes and coordinated supervision help teams maintain reliable execution across shifts and locations.",
    icon: Gauge,
  },
  {
    title: "Administrative Efficiency",
    description:
      "Reduced administrative burden for client teams through coordinated workforce management, reporting, and follow-through.",
    icon: Zap,
  },
] as const;

export default function WorkforceAdvantage() {
  return (
    <section
      id="workforce-advantage"
      className="section-shell border-t border-black/[0.06] bg-[#FAFAF8]"
    >
      <div className="layout-container">
        <OperationsSectionHeader
          eyebrow="Workforce Advantage"
          title="Operational advantages that go beyond staffing coverage."
          description="ITS workforce programs are designed to help teams operate with greater visibility, accountability, and consistency — delivering outcomes that basic staffing alone cannot provide."
          descriptionClassName="max-w-3xl"
          eyebrowTone="black"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
          {advantages.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="premium-card premium-hover flex h-full flex-col p-6 md:p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#E5E7EB] bg-white">
                  <Icon className="h-5 w-5 text-[#0A3A86]" strokeWidth={1.75} />
                </div>

                <h3 className="mt-5 text-[17px] font-semibold tracking-[-0.03em] text-[#0B0F14]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[14px] leading-[1.7] text-[#64748B]">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
