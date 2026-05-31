"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type KeyAdvantage = {
  title: string;
  icon: LucideIcon;
};

type ServiceIntroSectionProps = {
  eyebrow: string;
  heading: string;
  description: string;
  capabilityPills: readonly string[];
  keyAdvantages: readonly KeyAdvantage[];
  background?: "white" | "gray";
  withTopDivider?: boolean;
};

export default function ServiceIntroSection({
  eyebrow,
  heading,
  description,
  capabilityPills,
  keyAdvantages,
  background = "gray",
  withTopDivider = false,
}: ServiceIntroSectionProps) {
  const bgClass = background === "gray" ? "bg-[#FAFAF8]" : "bg-white";

  return (
    <section
      className={`section-shell ${bgClass} ${
        withTopDivider ? "border-t border-black/[0.1]" : ""
      }`}
    >
      <div className="layout-container">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16">
          <div className="relative mx-auto w-full max-w-[340px] lg:mx-0">
            <div className="overflow-hidden rounded-[20px] border border-black/[0.08] bg-white shadow-[0_10px_32px_rgba(15,23,42,0.06)]">
              <div className="relative border-b border-black/[0.08] bg-[#FAFCFF] px-4 py-3">
                <div
                  className="absolute inset-y-0 left-0 w-1 bg-[#0A3A86]"
                  aria-hidden
                />
                <p className="pl-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0A3A86]">
                  Key Advantages
                </p>
              </div>

              <div className="relative h-[400px] overflow-hidden">
                <div
                  className="pointer-events-none absolute bottom-6 left-[22px] top-6 z-0 w-px bg-gradient-to-b from-transparent via-[#0A3A86]/25 to-transparent"
                  aria-hidden
                />

                <div
                  className="pointer-events-none absolute inset-x-3 top-1/2 z-[15] h-[72px] -translate-y-1/2 rounded-xl bg-[#0A3A86]/[0.05] ring-1 ring-[#0A3A86]/10"
                  aria-hidden
                />

                <motion.div
                  className="absolute left-0 top-0 z-10 flex w-full flex-col"
                  animate={{ y: ["0%", "-50%"] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  }}
                >
                  {[...keyAdvantages, ...keyAdvantages].map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={`${item.title}-${index}`}
                        className="flex items-center gap-3 px-4 py-3"
                      >
                        <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#0A3A86]/25 bg-[#EEF3FA] text-[#0A3A86] shadow-[0_0_0_3px_#ffffff]">
                          <Icon className="h-4 w-4" strokeWidth={2} aria-hidden />
                        </div>

                        <h3 className="min-w-0 text-[13px] font-semibold tracking-[-0.02em] text-[#0A3A86]">
                          {item.title}
                        </h3>
                      </div>
                    );
                  })}
                </motion.div>

                <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-14 bg-gradient-to-b from-white via-white/90 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-14 bg-gradient-to-t from-white via-white/90 to-transparent" />
              </div>
            </div>
          </div>

          <div>
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0A3A86]">
              <span className="h-2 w-2 rounded-full bg-[#0A3A86]" aria-hidden />
              {eyebrow}
            </p>

            <h2 className="mt-5 max-w-[720px] text-[clamp(32px,3.2vw,52px)] font-medium leading-[1.05] tracking-[-0.04em] text-[#0B0F14]">
              {heading}
            </h2>

            <p className="mt-6 max-w-[680px] text-[17px] leading-[1.75] text-[#475569]">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {capabilityPills.map((pill) => (
                <span
                  key={pill}
                  className="inline-flex h-10 items-center rounded-full bg-[#0A3A86] px-4 text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-[#083066] md:text-[14px]"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
