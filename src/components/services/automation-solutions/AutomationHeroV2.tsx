"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import AutomationHeroScene from "@/components/services/automation-solutions/AutomationHeroScene";

import { automationHero } from "./automationContent";

const focusOnDark =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export default function AutomationHeroV2() {
  const reduce = useReducedMotion();
  const enter = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay },
        };

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-black pb-14 pt-28 sm:pt-32 md:pb-16 lg:pb-20 lg:pt-36"
    >
      <div className="layout-container relative z-10">
        <div className="flex w-full min-w-0 flex-col gap-10 lg:grid lg:grid-cols-[46%_54%] lg:items-center lg:gap-8">
          <div className="flex w-full min-w-0 flex-col justify-center">
            <motion.p
              {...enter(0)}
              className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#B9CDC9]"
            >
              <span>{automationHero.label}</span>
              <span aria-hidden className="h-px w-14 bg-[#B9CDC9]/60" />
            </motion.p>

            <motion.h1
              {...enter(0.05)}
              className="mt-6 max-w-[560px] text-[clamp(2.1rem,4.2vw,3.5rem)] font-semibold leading-[1.07] tracking-[-0.035em] text-white"
            >
              <span className="block">{automationHero.headline}</span>
              <span className="block text-[#A5B5C5]">{automationHero.accent}</span>
            </motion.h1>

            <motion.p
              {...enter(0.12)}
              className="mt-6 max-w-[520px] text-[16.5px] leading-[1.7] text-[#C8D1DC]"
            >
              {automationHero.intro}
            </motion.p>

            <motion.div {...enter(0.18)} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href={automationHero.primary.href}
                className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-[15px] font-medium text-[#14243D] transition-colors duration-200 hover:bg-its-offwhite ${focusOnDark}`}
              >
                {automationHero.primary.label}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <a
                href={automationHero.secondary.href}
                className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-[15px] font-medium text-white transition-colors duration-200 hover:border-white/70 ${focusOnDark}`}
              >
                {automationHero.secondary.label}
              </a>
            </motion.div>
          </div>

          {/* Existing animated inspection scene, kept from the previous hero. */}
          <div className="relative flex w-full min-w-0 flex-col overflow-hidden rounded-[24px]">
            <div className="relative flex min-h-[260px] w-full flex-col sm:min-h-[340px] lg:min-h-[min(64vh,600px)]">
              <AutomationHeroScene />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
