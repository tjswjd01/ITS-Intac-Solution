"use client";

import { motion } from "framer-motion";

import AutomationHeroScene from "@/components/services/automation-solutions/AutomationHeroScene";

export default function AutomationSolutionsHero() {
  return (
    <section
      id="hero"
      className="relative overflow-x-hidden bg-black pt-28 pb-16 md:pt-36 md:pb-20 lg:min-h-[calc(100vh-80px)] lg:pb-24"
    >
      <div className="layout-container relative z-10">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[45%_55%] lg:items-stretch lg:gap-8 xl:gap-10">
          <div className="flex w-full flex-col justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="max-w-[520px] text-[clamp(36px,4.2vw,64px)] font-semibold leading-[1.08] tracking-[-0.04em]"
            >
              <span className="bg-gradient-to-b from-white via-white to-neutral-500 bg-clip-text text-transparent">
                Automation programs built for scalable operational efficiency.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="mt-6 max-w-[480px] text-[15px] leading-[1.75] text-neutral-400 md:text-base md:leading-8"
            >
              ITS supports automation consulting, workflow design, robotics
              integration, and implementation programs that help operations teams
              improve productivity, consistency, and long-term scalability.
            </motion.p>
          </div>

          <div className="relative flex w-full min-h-[420px] flex-col lg:min-h-[min(78vh,760px)]">
            <div
              className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_58%_42%,rgba(11,103,255,0.1),transparent_68%)]"
              aria-hidden
            />
            <AutomationHeroScene />
          </div>
        </div>
      </div>
    </section>
  );
}
