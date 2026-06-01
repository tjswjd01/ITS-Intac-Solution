"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Check,
  Factory,
  Globe2,
  Warehouse,
} from "lucide-react";

const bulletPoints = [
  "Deep understanding of Korean business culture",
  "Experience supporting U.S. workforce operations",
  "Knowledge of Texas employment practices",
  "Local operational management capabilities",
  "Bilingual Korean-English communication",
  "Flexible workforce scaling solutions",
  "Fast deployment and operational support",
  "Single point of contact for U.S. operations",
] as const;

function SupportFlowDiagram() {
  const operations = [
    { label: "Manufacturing", icon: Factory },
    { label: "Warehouse", icon: Warehouse },
    { label: "Office", icon: Building2 },
  ] as const;

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-black/[0.08] bg-white p-6 shadow-[0_24px_64px_rgba(15,23,42,0.08)] md:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(10,58,134,0.08),transparent_42%)]" />

      <div className="relative flex flex-col items-center">
        <div className="flex w-full max-w-[280px] flex-col items-center rounded-2xl border border-black/[0.06] bg-[#FAFBFC] px-5 py-4 text-center">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF3FA] text-[#0A3A86]">
            <Globe2 className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#64748B]">
            Korea HQ
          </p>
          <p className="mt-1 text-[15px] font-semibold tracking-[-0.02em] text-[#0B0F14]">
            Korean Headquarters
          </p>
        </div>

        <div className="my-4 flex h-10 flex-col items-center" aria-hidden>
          <div className="h-full w-px bg-gradient-to-b from-[#CBD5E1] via-[#0A3A86]/40 to-[#0A3A86]" />
          <div className="h-0 w-0 border-x-[5px] border-t-[7px] border-x-transparent border-t-[#0A3A86]" />
        </div>

        <div className="w-full max-w-[280px] rounded-2xl border border-[#0A3A86]/20 bg-[#0A3A86] px-5 py-4 text-center shadow-[0_12px_32px_rgba(10,58,134,0.24)]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
            Local Partner
          </p>
          <p className="mt-1 text-[16px] font-semibold tracking-[-0.02em] text-white">
            ITS Dallas Team
          </p>
          <p className="mt-1 text-[12px] text-white/65">
            U.S. operational coordination hub
          </p>
        </div>

        <div className="relative mt-6 grid w-full grid-cols-3 gap-3">
          <div
            className="pointer-events-none absolute left-[16.67%] right-[16.67%] top-0 h-px bg-[#CBD5E1]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-[16.67%] top-0 h-4 w-px bg-[#CBD5E1]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-[#CBD5E1]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute right-[16.67%] top-0 h-4 w-px bg-[#CBD5E1]"
            aria-hidden
          />

          {operations.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="flex flex-col items-center rounded-2xl border border-black/[0.06] bg-[#FAFBFC] px-3 pb-4 pt-5 text-center"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#0A3A86] shadow-sm">
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                </div>
                <p className="mt-2.5 text-[11px] font-semibold leading-snug tracking-[-0.01em] text-[#0B0F14]">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function WhyChooseITSGlobal() {
  return (
    <section
      id="why-choose-its-global"
      className="section-shell border-t border-black/[0.06] bg-[#FAFAF8]"
    >
      <div className="layout-container">
        <div className="grid w-full min-w-0 items-center gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1fr)] lg:gap-16 xl:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45 }}
            className="order-2 w-full min-w-0 lg:order-1"
          >
            <SupportFlowDiagram />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="order-1 w-full min-w-0 lg:order-2"
          >
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0A3A86]">
              <span className="h-2 w-2 rounded-full bg-[#0A3A86]" aria-hidden />
              Why ITS
            </p>

            <h2 className="section-title mt-5 max-w-[640px]">
              Local Expertise. Korean Business Understanding.
            </h2>

            <ul className="mt-8 space-y-3.5" role="list">
              {bulletPoints.map((point, index) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: 8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EEF3FA] text-[#0A3A86]">
                    <Check className="h-3 w-3" strokeWidth={2.5} aria-hidden />
                  </span>
                  <span className="text-[15px] leading-[1.65] text-[#475569] md:text-[16px]">
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
