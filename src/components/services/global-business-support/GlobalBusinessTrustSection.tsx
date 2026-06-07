"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  ClipboardList,
  Smartphone,
  User,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import {
  GBS_BODY,
  GBS_BORDER,
} from "@/components/services/global-business-support/globalBusinessTheme";

const NAVY = "#0F172A";
const ICON_SLATE = "#334155";
const ICON_BG = "#F3F4F6";
const TIMELINE_LINE = "#E5E7EB";

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "1,000+", label: "Workers Deployed" },
  { value: "10+", label: "States Supported" },
] as const;

const partners = [
  { name: "Samsung", label: "SAMSUNG" },
  { name: "LG", label: "LG" },
  { name: "Hyundai Motor Group", label: "HYUNDAI" },
  { name: "POSCO", label: "POSCO" },
  { name: "Doosan", label: "DOOSAN" },
] as const;

const timelineItems: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Workforce Deployment",
    description:
      "Recruiting and managing workforce for manufacturing and logistics operations.",
    icon: User,
  },
  {
    title: "Operational Planning",
    description:
      "Workforce strategy, facility support, and implementation planning.",
    icon: ClipboardList,
  },
  {
    title: "Ongoing Workforce Management",
    description:
      "Reporting, compliance support, and workforce administration.",
    icon: BarChart3,
  },
  {
    title: "Technical Service Support",
    description:
      "Mobile refurbishment, electronics operations, and ATM technical support.",
    icon: Smartphone,
  },
];

const entranceEase = [0.22, 1, 0.36, 1] as const;

function TimelineItem({
  item,
  index,
  isLast,
}: {
  item: (typeof timelineItems)[number];
  index: number;
  isLast: boolean;
}) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: 0.1 + index * 0.1,
        ease: entranceEase,
      }}
      className="relative flex gap-5 py-6 first:pt-0 last:pb-0"
    >
      <div className="relative z-10 shrink-0">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-full transition-transform duration-300 hover:scale-105"
          style={{ backgroundColor: ICON_BG }}
        >
          <Icon
            className="h-5 w-5"
            style={{ color: ICON_SLATE }}
            strokeWidth={1.75}
            aria-hidden
          />
        </div>

        {!isLast ? (
          <div
            className="absolute left-1/2 top-full mt-3 h-1.5 w-1.5 -translate-x-1/2 rounded-full"
            style={{ backgroundColor: TIMELINE_LINE }}
            aria-hidden
          />
        ) : null}
      </div>

      <div className="min-w-0 pt-0.5">
        <h3
          className="text-[16px] font-semibold tracking-[-0.02em] md:text-[17px]"
          style={{ color: NAVY }}
        >
          {item.title}
        </h3>
        <p
          className="mt-1.5 text-[14px] leading-[1.65] md:text-[15px]"
          style={{ color: GBS_BODY }}
        >
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function GlobalBusinessTrustSection() {
  return (
    <section
      id="trust-section"
      className="border-t bg-white py-16 md:py-20 lg:py-24"
      style={{ borderColor: GBS_BORDER }}
    >
      <div className="mx-auto w-full min-w-0 max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[56%_44%] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: entranceEase }}
            className="min-w-0"
          >
            <p
              className="text-[11px] font-bold uppercase tracking-[0.16em]"
              style={{ color: GBS_BODY }}
            >
              <span aria-hidden>• </span>
              Why Companies Choose ITS
            </p>

            <h2 className="mt-5 text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.08] tracking-[-0.03em]">
              <span style={{ color: NAVY }}>Trusted by </span>
              <span style={{ color: GBS_BODY }}>U.S. Operations Teams</span>
            </h2>

            <p
              className="mt-5 max-w-[500px] text-[16px] leading-[1.75] md:text-[18px]"
              style={{ color: GBS_BODY }}
            >
              ITS supports Korean companies with workforce deployment,
              operational setup, technical services, and long-term workforce
              management across the United States.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p
                    className="text-[clamp(1.75rem,3vw,3rem)] font-bold leading-none tracking-[-0.03em]"
                    style={{ color: NAVY }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="mt-2 text-[13px] tracking-[0.05em] sm:text-[14px]"
                    style={{ color: GBS_BODY }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex h-14 w-14 items-center justify-center rounded-full px-1 text-center"
                  style={{ backgroundColor: ICON_BG }}
                  title={partner.name}
                >
                  <span
                    className="text-[8px] font-bold leading-tight tracking-[0.04em] sm:text-[9px]"
                    style={{ color: ICON_SLATE }}
                  >
                    {partner.label}
                  </span>
                </div>
              ))}
            </div>

            <p
              className="mt-4 text-[14px]"
              style={{ color: GBS_BODY }}
            >
              and more partners across the U.S.
            </p>
          </motion.div>

          <div className="relative min-w-0 lg:pl-2">
            <div
              className="pointer-events-none absolute bottom-6 left-6 top-6 w-px"
              style={{ backgroundColor: TIMELINE_LINE }}
              aria-hidden
            />

            <div className="relative">
              {timelineItems.map((item, index) => (
                <TimelineItem
                  key={item.title}
                  item={item}
                  index={index}
                  isLast={index === timelineItems.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
