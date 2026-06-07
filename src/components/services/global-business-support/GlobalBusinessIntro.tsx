"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  Building2,
  Factory,
  Globe2,
  Warehouse,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { GlobalSectionEyebrow } from "@/components/services/global-business-support/GlobalSectionHeader";
import {
  GBS_ACCENT,
  GBS_BODY,
  GBS_BORDER,
  GBS_DIAGRAM_LABEL,
  GBS_HEADING,
} from "@/components/services/global-business-support/globalBusinessTheme";

const connectorClass = "border-[rgba(58,85,96,0.28)]";

const IMAGE_SRC = "/images/global-business-support/korean-business-meeting.jpg";
const IMAGE_FALLBACK = "/images/who-team.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const entranceEase = [0.22, 1, 0.36, 1] as const;

function EndpointCard({
  icon: Icon,
  label,
  iconLabel,
}: {
  icon: LucideIcon;
  label: string;
  iconLabel?: string;
}) {
  return (
    <div
      className="flex min-w-[96px] flex-col items-center rounded-xl border bg-white px-3 py-3 shadow-[0_4px_16px_rgba(15,23,42,0.04)] sm:min-w-[108px] sm:px-4"
      style={{ borderColor: GBS_BORDER }}
    >
      <div
        className="flex h-9 w-9 items-center justify-center rounded-full border bg-white"
        style={{ borderColor: GBS_BORDER }}
      >
        {iconLabel ? (
          <span
            className="text-[10px] font-bold"
            style={{ color: GBS_ACCENT }}
          >
            {iconLabel}
          </span>
        ) : (
          <Icon
            className="h-4 w-4"
            style={{ color: GBS_ACCENT }}
            strokeWidth={1.75}
            aria-hidden
          />
        )}
      </div>
      <p
        className="mt-2 text-[10px] font-bold uppercase tracking-[0.16em]"
        style={{ color: GBS_DIAGRAM_LABEL }}
      >
        {label}
      </p>
    </div>
  );
}

function SiteCard({
  icon: Icon,
  label,
}: {
  icon: LucideIcon;
  label: string;
}) {
  return (
    <div
      className="flex flex-col items-center rounded-xl border bg-white px-3 py-3 shadow-[0_4px_16px_rgba(15,23,42,0.04)]"
      style={{ borderColor: GBS_BORDER }}
    >
      <Icon
        className="h-4 w-4"
        style={{ color: GBS_ACCENT }}
        strokeWidth={1.75}
        aria-hidden
      />
      <p
        className="mt-2 text-[10px] font-bold uppercase tracking-[0.14em]"
        style={{ color: GBS_DIAGRAM_LABEL }}
      >
        {label}
      </p>
    </div>
  );
}

function OperationalHubDiagram() {
  const sites = [
    { icon: Factory, label: "Factory" },
    { icon: Warehouse, label: "Warehouse" },
    { icon: Building2, label: "Office" },
  ] as const;

  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      <div className="flex items-center justify-between gap-2 sm:gap-3">
        <EndpointCard icon={Globe2} label="Korea HQ" />

        <div className="relative min-w-0 flex-1">
          <div
            className={`h-px w-full border-t border-dashed ${connectorClass}`}
            aria-hidden
          />
          <ArrowRight
            className="absolute -right-1 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#3A5560]/60"
            aria-hidden
          />
        </div>

        <EndpointCard icon={Globe2} label="United States" iconLabel="US" />
      </div>

      <div className="flex justify-center">
        <div
          className={`h-8 w-px border-l border-dashed ${connectorClass}`}
          aria-hidden
        />
      </div>

      <div
        className="mx-auto w-fit rounded-xl bg-[#3A5560] px-6 py-3.5 text-center shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
      >
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white">
          ITS Dallas Team
        </p>
        <p className="mt-1 text-[12px] font-medium text-white/85">
          U.S. Operational Hub
        </p>
      </div>

      <div className="relative mx-auto h-10 w-[78%] max-w-[320px]">
        <div
          className={`absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 border-l border-dashed ${connectorClass}`}
          aria-hidden
        />
        <div
          className={`absolute left-0 right-0 top-4 border-t border-dashed ${connectorClass}`}
          aria-hidden
        />
        <div
          className={`absolute left-0 top-4 h-4 w-px border-l border-dashed ${connectorClass}`}
          aria-hidden
        />
        <div
          className={`absolute left-1/2 top-4 h-4 w-px -translate-x-1/2 border-l border-dashed ${connectorClass}`}
          aria-hidden
        />
        <div
          className={`absolute right-0 top-4 h-4 w-px border-l border-dashed ${connectorClass}`}
          aria-hidden
        />
      </div>

      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {sites.map((site) => (
          <SiteCard key={site.label} icon={site.icon} label={site.label} />
        ))}
      </div>
    </div>
  );
}

export default function GlobalBusinessIntro() {
  const [imageSrc, setImageSrc] = useState(IMAGE_SRC);

  return (
    <section
      id="global-business-intro"
      className="border-t border-black/[0.06] bg-white py-16 md:py-20 lg:py-[120px]"
    >
      <div className="mx-auto w-full min-w-0 max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <div className="grid w-full min-w-0 grid-cols-1 gap-10 lg:grid-cols-[0.95fr_0.8fr_1fr] lg:items-center lg:gap-12">
          <motion.div
            className="flex w-full min-w-0 items-center justify-center lg:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={{ duration: 0.55, ease: entranceEase }}
          >
            <div className="relative aspect-square w-full max-w-[420px] overflow-hidden rounded-3xl shadow-[0_18px_48px_rgba(15,23,42,0.08)]">
              <Image
                src={imageSrc}
                alt="Business meeting with Korean and U.S. operational partners"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) min(100vw, 420px), 420px"
                onError={() => setImageSrc(IMAGE_FALLBACK)}
              />
            </div>
          </motion.div>

          <motion.div
            className="flex w-full min-w-0 flex-col justify-center lg:max-w-[380px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={{
              duration: 0.55,
              delay: 0.08,
              ease: entranceEase,
            }}
          >
            <GlobalSectionEyebrow className="justify-center lg:justify-start">
              Supporting Korean Companies
            </GlobalSectionEyebrow>

            <h2
              className="mt-5 text-[clamp(1.75rem,4vw,2.65rem)] font-medium leading-[1.08] tracking-[-0.04em]"
              style={{ color: GBS_HEADING }}
            >
              Beyond Staffing
            </h2>

            <div className="mt-6 space-y-4">
              <p
                className="text-[15px] leading-[1.8] md:text-base"
                style={{ color: GBS_BODY }}
              >
                Expanding into the United States requires more than hiring
                employees.
              </p>
              <p
                className="text-[15px] leading-[1.8] md:text-base"
                style={{ color: GBS_BODY }}
              >
                ITS acts as a local operational partner helping Korean companies
                establish, manage, and scale their U.S. operations with practical
                support and on-the-ground expertise.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex w-full min-w-0 items-center justify-center lg:justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={{
              duration: 0.55,
              delay: 0.16,
              ease: entranceEase,
            }}
          >
            <OperationalHubDiagram />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
