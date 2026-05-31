"use client";

import { motion } from "framer-motion";
import { Activity, CheckCircle2, Clock, Layers3 } from "lucide-react";

const kpis = [
  {
    label: "Processing Accuracy",
    value: "99%+",
    icon: CheckCircle2,
  },
  {
    label: "Turnaround Support",
    value: "Fast Cycle",
    icon: Clock,
  },
  {
    label: "Workflow Coverage",
    value: "End-to-End",
    icon: Layers3,
  },
  {
    label: "Quality Checkpoints",
    value: "Multi-Step",
    icon: Activity,
  },
] as const;

function SparkleBackground() {
  return (
    <div
      className="mobile-refurb-sparkle pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="mobile-refurb-sparkle__layer mobile-refurb-sparkle__layer--one" />
      <div className="mobile-refurb-sparkle__layer mobile-refurb-sparkle__layer--two" />
    </div>
  );
}

export default function MobileRefurbishmentHero() {
  return (
    <section className="relative overflow-hidden bg-[#050816] pt-28 pb-12 md:pt-36 md:pb-14 lg:pb-16">
      <SparkleBackground />

      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(37,99,235,0.11),transparent_42%),radial-gradient(circle_at_14%_72%,rgba(14,165,233,0.06),transparent_40%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.025] via-transparent to-transparent"
        aria-hidden
      />

      <div className="layout-container relative z-10">
        <div className="max-w-[920px]">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-blue-200/75"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-300/70" aria-hidden />
            Mobile Refurbishment
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="mt-4 max-w-[780px] text-[clamp(32px,3.75vw,57px)] font-medium leading-[1.04] tracking-[-0.045em] text-white"
          >
            Mobile refurbishment support built for{" "}
            <span className="bg-gradient-to-r from-[#bfdbfe] via-[#60a5fa] to-[#a5f3fc] bg-clip-text text-transparent">
              measurable operational performance.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16 }}
            className="mt-5 max-w-[640px] text-base leading-7 text-slate-400 md:text-[17px] md:leading-[1.75]"
          >
            ITS supports mobile device refurbishment workflows through intake,
            testing support, grading, cleaning, packaging, and process
            coordination.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24 }}
          className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-11 lg:grid-cols-4"
        >
          {kpis.map((kpi) => {
            const Icon = kpi.icon;

            return (
              <article
                key={kpi.label}
                className="rounded-2xl border border-white/10 bg-white/[0.05] p-3.5 shadow-[0_4px_24px_rgba(0,0,0,0.12)] backdrop-blur-md transition-colors duration-300 hover:border-white/[0.14] hover:bg-white/[0.07]"
              >
                <div className="mb-2.5 flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-blue-200/90">
                  <Icon className="h-4 w-4" aria-hidden />
                </div>

                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-200/65">
                  {kpi.label}
                </p>

                <p className="mt-1 text-lg font-medium tracking-[-0.03em] text-white">
                  {kpi.value}
                </p>
              </article>
            );
          })}
        </motion.div>
      </div>

      <style jsx>{`
        .mobile-refurb-sparkle__layer {
          position: absolute;
          inset: -10%;
          will-change: transform, opacity;
        }

        .mobile-refurb-sparkle__layer--one {
          opacity: 0.14;
          background-image:
            radial-gradient(
              circle,
              rgba(147, 197, 253, 0.38) 0.45px,
              transparent 0.95px
            ),
            radial-gradient(
              circle,
              rgba(191, 219, 254, 0.22) 0.6px,
              transparent 1.1px
            );
          background-size: 168px 168px, 248px 248px;
          background-position: 0 0, 84px 112px;
          animation: mobile-refurb-sparkle-drift 36s ease-in-out infinite;
        }

        .mobile-refurb-sparkle__layer--two {
          opacity: 0.1;
          background-image:
            radial-gradient(
              circle,
              rgba(125, 211, 252, 0.28) 0.4px,
              transparent 0.9px
            ),
            radial-gradient(
              circle,
              rgba(96, 165, 250, 0.18) 0.55px,
              transparent 1px
            );
          background-size: 212px 212px, 300px 300px;
          background-position: 52px 36px, 148px 188px;
          animation: mobile-refurb-sparkle-drift-alt 44s ease-in-out infinite;
        }

        @keyframes mobile-refurb-sparkle-drift {
          0%,
          100% {
            opacity: 0.1;
            transform: translate3d(0, 0, 0);
          }
          50% {
            opacity: 0.18;
            transform: translate3d(6px, -4px, 0);
          }
        }

        @keyframes mobile-refurb-sparkle-drift-alt {
          0%,
          100% {
            opacity: 0.08;
            transform: translate3d(0, 0, 0);
          }
          50% {
            opacity: 0.15;
            transform: translate3d(-5px, 6px, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .mobile-refurb-sparkle__layer--one,
          .mobile-refurb-sparkle__layer--two {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
