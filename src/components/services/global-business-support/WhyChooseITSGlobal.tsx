"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  BarChart3,
  Building2,
  CalendarDays,
  Check,
  ClipboardList,
  Factory,
  FileText,
  Globe2,
  Headset,
  MapPin,
  Quote,
  Settings2,
  UserPlus,
  Users,
  Warehouse,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { GlobalSectionEyebrow } from "@/components/services/global-business-support/GlobalSectionHeader";
import {
  GBS_ACCENT,
  GBS_BODY,
  GBS_BORDER,
  GBS_HEADING,
  GBS_LIGHT_BG,
} from "@/components/services/global-business-support/globalBusinessTheme";

type SubFeature = {
  label: string;
  icon: LucideIcon;
};

type ActionRow = {
  step: string;
  title: string;
  description: string;
  image: string;
  fallback: string;
  imageAlt: string;
  subFeatures: SubFeature[];
  supportAreas: readonly string[];
};

const actionRows: ActionRow[] = [
  {
    step: "01",
    title: "Workforce Deployment",
    description:
      "Recruitment, onboarding, and workforce management for manufacturing, warehouse, and administrative operations.",
    image: "/images/its-refurbish.png",
    fallback: "/images/its-hhp.png",
    imageAlt: "ITS team supporting manufacturing workforce operations",
    subFeatures: [
      { label: "Recruitment", icon: UserPlus },
      { label: "Onboarding", icon: Users },
      { label: "Workforce Planning", icon: CalendarDays },
    ],
    supportAreas: [
      "Line operator staffing",
      "Supervisor placement",
      "Attendance management",
      "Shift coordination",
      "Workforce reporting",
    ],
  },
  {
    step: "02",
    title: "Facility Launch Support",
    description:
      "Support for production lines, warehouse operations, and operational readiness during U.S. facility startup.",
    image: "/images/who-warehouse.jpeg",
    fallback: "/images/who-team.jpeg",
    imageAlt: "Warehouse and logistics facility operations",
    subFeatures: [
      { label: "Production Lines", icon: Factory },
      { label: "Warehouse Ops", icon: Warehouse },
      { label: "Operational Readiness", icon: Settings2 },
    ],
    supportAreas: [
      "Facility launch coordination",
      "Equipment staging support",
      "Safety readiness checks",
      "Operational workflow setup",
      "Vendor coordination",
    ],
  },
  {
    step: "03",
    title: "Operational Management",
    description:
      "Ongoing management and administrative support so you can focus on growing your business.",
    image: "/images/its-hhp.png",
    fallback: "/images/global-business-support/korean-business-meeting.jpg",
    imageAlt: "ITS operations team managing daily U.S. business support",
    subFeatures: [
      { label: "Daily Operations", icon: Headset },
      { label: "Vendor Coordination", icon: FileText },
      { label: "Reporting & Compliance", icon: BarChart3 },
    ],
    supportAreas: [
      "HR & payroll support",
      "Compliance & administration",
      "Customer & vendor support",
      "Office management",
    ],
  },
];

const typicalSupportAreas: { label: string; icon: LucideIcon }[] = [
  { label: "Manufacturing", icon: Factory },
  { label: "Warehouse & Logistics", icon: Warehouse },
  { label: "Office Operations", icon: Building2 },
  { label: "Technical Support", icon: Wrench },
  { label: "Administration", icon: ClipboardList },
  { label: "Expansion Projects", icon: Globe2 },
];

const entranceEase = [0.22, 1, 0.36, 1] as const;

function RowImage({
  src,
  fallback,
  alt,
}: {
  src: string;
  fallback: string;
  alt: string;
}) {
  const [imageSrc, setImageSrc] = useState(src);

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#F3F4F6] lg:aspect-auto lg:min-h-[200px] lg:h-full">
      <Image
        src={imageSrc}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 280px"
        onError={() => setImageSrc(fallback)}
      />
    </div>
  );
}

function ActiveSupportPanel({ areas }: { areas: readonly string[] }) {
  return (
    <div
      className="h-full rounded-xl border p-5"
      style={{ borderColor: GBS_BORDER, backgroundColor: GBS_LIGHT_BG }}
    >
      <h4
        className="text-[14px] font-semibold tracking-[-0.02em]"
        style={{ color: GBS_HEADING }}
      >
        Active Support Areas
      </h4>

      <ul className="mt-4 space-y-2.5" role="list">
        {areas.map((area) => (
          <li key={area} className="flex items-start gap-2.5">
            <Check
              className="mt-0.5 h-4 w-4 shrink-0"
              style={{ color: GBS_ACCENT }}
              strokeWidth={2.5}
              aria-hidden
            />
            <span
              className="text-[14px] leading-[1.55]"
              style={{ color: GBS_BODY }}
            >
              {area}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ActionRowCard({ row, index }: { row: ActionRow; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: entranceEase }}
      className="grid grid-cols-1 gap-5 rounded-2xl border bg-white p-5 lg:grid-cols-[0.7fr_1.4fr_0.8fr] lg:items-stretch lg:gap-6"
      style={{ borderColor: GBS_BORDER }}
    >
      <RowImage src={row.image} fallback={row.fallback} alt={row.imageAlt} />

      <div className="flex min-w-0 flex-col justify-center">
        <div>
          <span
            className="text-[13px] font-bold tabular-nums tracking-[0.08em]"
            style={{ color: GBS_ACCENT }}
          >
            {row.step}
          </span>
          <div
            className="mt-2 h-px w-10"
            style={{ backgroundColor: GBS_ACCENT }}
          />
        </div>

        <h3
          className="mt-4 text-[clamp(1.125rem,1.8vw,1.375rem)] font-semibold tracking-[-0.03em]"
          style={{ color: GBS_HEADING }}
        >
          {row.title}
        </h3>

        <p
          className="mt-2.5 text-[15px] leading-[1.7]"
          style={{ color: GBS_BODY }}
        >
          {row.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-6 sm:gap-8">
          {row.subFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <div key={feature.label} className="flex min-w-[72px] flex-col items-center text-center">
                <Icon
                  className="h-5 w-5"
                  style={{ color: GBS_ACCENT }}
                  strokeWidth={1.75}
                  aria-hidden
                />
                <p
                  className="mt-2 text-[12px] font-medium leading-snug"
                  style={{ color: GBS_HEADING }}
                >
                  {feature.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <ActiveSupportPanel areas={row.supportAreas} />
    </motion.article>
  );
}

export default function WhyChooseITSGlobal() {
  return (
    <section
      id="why-choose-its-global"
      className="border-t bg-white py-16 lg:py-20"
      style={{ borderColor: GBS_BORDER }}
    >
      <div className="mx-auto w-full min-w-0 max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: entranceEase }}
          className="max-w-[720px]"
        >
          <GlobalSectionEyebrow>Why ITS</GlobalSectionEyebrow>

          <h2
            className="mt-5 text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium leading-[1.08] tracking-[-0.04em]"
            style={{ color: GBS_HEADING }}
          >
            Operational Support in Action
          </h2>

          <p
            className="mt-5 max-w-[680px] text-[15px] leading-[1.8] md:text-base"
            style={{ color: GBS_BODY }}
          >
            See how ITS supports Korean companies throughout every stage of U.S.
            market entry and daily operations.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-col gap-4 lg:mt-12">
          {actionRows.map((row, index) => (
            <ActionRowCard key={row.step} row={row} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: entranceEase }}
          className="mt-12 grid grid-cols-1 gap-10 border-t pt-12 lg:mt-14 lg:grid-cols-[1fr_minmax(0,360px)] lg:gap-16 lg:pt-14"
          style={{ borderColor: GBS_BORDER }}
        >
          <div>
            <h3
              className="text-[14px] font-bold uppercase tracking-[0.16em]"
              style={{ color: GBS_ACCENT }}
            >
              Typical Support Areas
            </h3>

            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-6 lg:gap-6">
              {typicalSupportAreas.map((area) => {
                const Icon = area.icon;

                return (
                  <div
                    key={area.label}
                    className="flex flex-col items-center text-center"
                  >
                    <Icon
                      className="h-5 w-5"
                      style={{ color: GBS_ACCENT }}
                      strokeWidth={1.75}
                      aria-hidden
                    />
                    <p
                      className="mt-3 text-[12px] font-medium leading-snug sm:text-[13px]"
                      style={{ color: GBS_HEADING }}
                    >
                      {area.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className="relative lg:border-l lg:pl-10"
            style={{ borderColor: GBS_BORDER }}
          >
            <Quote
              className="h-9 w-9"
              style={{ color: GBS_ACCENT }}
              aria-hidden
            />

            <blockquote className="mt-4">
              <p
                className="text-[15px] leading-[1.75] md:text-base"
                style={{ color: GBS_BODY }}
              >
                ITS serves as a trusted local operational partner for Korean
                companies entering the U.S. market.
              </p>
              <footer
                className="mt-4 text-[13px]"
                style={{ color: GBS_BODY }}
              >
                — Korean Manufacturing Client
              </footer>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
