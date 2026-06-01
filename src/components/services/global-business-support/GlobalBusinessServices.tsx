"use client";

import { motion } from "framer-motion";
import {
  Building2,
  ClipboardList,
  Settings2,
  UsersRound,
} from "lucide-react";

import OperationsSectionHeader from "../operations/OperationsSectionHeader";

const services = [
  {
    title: "Workforce Deployment",
    description:
      "Recruitment, staffing, onboarding, workforce planning, and workforce management for manufacturing, warehouse, logistics, technical, and administrative operations.",
    icon: UsersRound,
  },
  {
    title: "Facility & Line Setup Support",
    description:
      "Support for production line establishment, workforce allocation planning, facility launch preparation, workflow design, and operational readiness.",
    icon: Settings2,
  },
  {
    title: "Office & Administrative Support",
    description:
      "Administrative staffing, HR coordination, payroll support, bilingual office personnel, customer service teams, and executive support functions.",
    icon: Building2,
  },
  {
    title: "Operational Management",
    description:
      "Local operational coordination, workforce supervision, vendor communication, reporting support, and day-to-day operational assistance.",
    icon: ClipboardList,
  },
] as const;

export default function GlobalBusinessServices() {
  return (
    <section
      id="global-business-services"
      className="section-shell border-t border-black/[0.06] bg-white"
    >
      <div className="layout-container">
        <OperationsSectionHeader
          eyebrow="Support Services"
          title="Operational partnership across workforce, facilities, and daily execution."
          description="ITS provides structured support for Korean companies entering the U.S. market — combining workforce deployment with facility readiness, administrative coordination, and local operational management."
          descriptionClassName="max-w-3xl"
          eyebrowTone="black"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:mt-14">
          {services.map((item, index) => {
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
