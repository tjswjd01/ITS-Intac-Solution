"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Factory,
  Globe2,
  MapPin,
  Users,
  Warehouse,
} from "lucide-react";

const bodyParagraphs = [
  "Expanding into the United States requires more than hiring employees.",
  "Companies entering the U.S. market often face challenges related to workforce regulations, facility setup, operational management, local compliance, and communication barriers.",
  "ITS serves as a local operational partner, helping Korean businesses navigate these challenges with practical support and on-the-ground expertise.",
  "Whether you are opening a manufacturing facility, launching a distribution center, building a service operation, or establishing a local office, our team provides the workforce, operational guidance, and management support needed to accelerate your success.",
] as const;

function ConnectionVisual() {
  const sites = [
    { label: "Factory", icon: Factory },
    { label: "Warehouse", icon: Warehouse },
    { label: "Office", icon: Building2 },
    { label: "Ops Team", icon: Users },
  ] as const;

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-black/[0.08] bg-[linear-gradient(180deg,#FAFCFF_0%,#EEF4FF_55%,#F8FAFC_100%)] p-6 shadow-[0_24px_64px_rgba(15,23,42,0.08)] md:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(10,58,134,0.12),transparent_38%),radial-gradient(circle_at_82%_28%,rgba(59,130,246,0.1),transparent_34%)]" />

      <div className="relative">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#0A3A86]/15 bg-white shadow-[0_8px_24px_rgba(10,58,134,0.12)]">
              <Globe2 className="h-6 w-6 text-[#0A3A86]" strokeWidth={1.75} />
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0A3A86]">
              Korea
            </span>
          </div>

          <div className="relative min-w-0 flex-1 px-2">
            <div
              className="h-px w-full bg-gradient-to-r from-[#0A3A86]/40 via-[#60A5FA] to-[#0A3A86]/40"
              aria-hidden
            />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0A3A86]/20 bg-white px-3 py-1.5 shadow-sm">
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0A3A86]">
                Connected
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#0A3A86]/15 bg-white shadow-[0_8px_24px_rgba(10,58,134,0.12)]">
              <MapPin className="h-6 w-6 text-[#0A3A86]" strokeWidth={1.75} />
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0A3A86]">
              United States
            </span>
          </div>
        </div>

        <div className="mx-auto mt-8 flex w-fit flex-col items-center">
          <div className="h-8 w-px bg-gradient-to-b from-[#60A5FA] to-[#0A3A86]/30" aria-hidden />
          <div className="rounded-2xl border border-[#0A3A86]/20 bg-[#0A3A86] px-5 py-3 text-center shadow-[0_12px_32px_rgba(10,58,134,0.28)]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
              ITS Hub
            </p>
            <p className="mt-0.5 text-[15px] font-semibold tracking-[-0.02em] text-white">
              Dallas, TX
            </p>
          </div>
        </div>

        <div className="relative mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {sites.map((site) => {
            const Icon = site.icon;

            return (
              <div
                key={site.label}
                className="flex flex-col items-center rounded-2xl border border-black/[0.06] bg-white/90 px-3 py-4 text-center shadow-[0_8px_24px_rgba(15,23,42,0.05)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF3FA] text-[#0A3A86]">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <p className="mt-2.5 text-[12px] font-semibold tracking-[-0.02em] text-[#0B0F14]">
                  {site.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function GlobalBusinessIntro() {
  return (
    <section
      id="global-business-intro"
      className="section-shell border-t border-black/[0.06] bg-[#FAFAF8]"
    >
      <div className="layout-container">
        <div className="grid w-full min-w-0 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:gap-16 xl:gap-20">
          <motion.div
            className="w-full min-w-0"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45 }}
          >
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0A3A86]">
              <span className="h-2 w-2 rounded-full bg-[#0A3A86]" aria-hidden />
              Global Business Support
            </p>

            <h2 className="mt-5 max-w-[720px] text-[clamp(1.75rem,5.5vw,52px)] font-medium leading-[1.05] tracking-[-0.04em] text-[#0B0F14]">
              Supporting Korean Companies Beyond Staffing
            </h2>

            <div className="mt-6 space-y-4">
              {bodyParagraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="max-w-[680px] text-[17px] leading-[1.75] text-[#475569]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="w-full min-w-0"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            <ConnectionVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
