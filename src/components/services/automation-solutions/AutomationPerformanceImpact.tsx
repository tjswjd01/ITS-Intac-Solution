"use client";

import {
  animate,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import OperationsSectionHeader from "../operations/OperationsSectionHeader";

const stats = [
  {
    id: "01",
    kind: "percent" as const,
    value: 30,
    label: "Workflow efficiency improvement",
    description: "Potential throughput gains in targeted workflows",
  },
  {
    id: "02",
    kind: "percent" as const,
    value: 25,
    label: "Reduction in defect-related rework",
    description: "Potential reduction in repeat handling cycles",
  },
  {
    id: "03",
    kind: "percent" as const,
    value: 20,
    label: "Operational handling cost reduction",
    description: "Potential savings from reduced manual touchpoints",
  },
  {
    id: "04",
    kind: "highlight" as const,
    display: "Real-time",
    label: "Operational visibility and reporting",
    description: "Live workflow and equipment status awareness",
  },
] as const;

const statCellBorders = [
  "sm:pr-8 sm:pb-8",
  "sm:border-l sm:border-black/[0.08] sm:pl-8 sm:pb-8",
  "sm:border-t sm:border-black/[0.08] sm:pt-8 sm:pr-8",
  "sm:border-l sm:border-t sm:border-black/[0.08] sm:pl-8 sm:pt-8",
] as const;

function useCountUp(
  target: number,
  isInView: boolean,
  prefersReducedMotion: boolean | null,
  duration = 1.75,
) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!isInView || hasRun.current) return;

    if (prefersReducedMotion) {
      setCount(target);
      hasRun.current = true;
      return;
    }

    hasRun.current = true;
    const controls = animate(0, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setCount(Math.round(latest)),
    });

    return () => controls.stop();
  }, [duration, isInView, prefersReducedMotion, target]);

  return count;
}

function PercentStat({
  value,
  label,
  description,
  delay,
  className,
}: {
  value: number;
  label: string;
  description: string;
  delay: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.35 });
  const prefersReducedMotion = useReducedMotion();
  const count = useCountUp(value, isInView, prefersReducedMotion);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn("py-2 sm:py-0", className)}
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9CA3AF]">
        Up to
      </p>
      <p className="mt-1 flex items-baseline gap-0.5 text-[clamp(36px,4vw,52px)] font-semibold leading-none tracking-[-0.04em] text-[#111111] tabular-nums">
        <span>{count}</span>
        <span className="text-[clamp(28px,3.2vw,44px)]">%</span>
      </p>
      <p className="mt-4 text-[15px] font-semibold leading-snug text-[#111111]">{label}</p>
      <p className="mt-2 text-[13px] leading-relaxed text-[#667085]">{description}</p>
    </motion.div>
  );
}

function HighlightStat({
  display,
  label,
  description,
  delay,
  className,
}: {
  display: string;
  label: string;
  description: string;
  delay: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.35 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn("py-2 sm:py-0", className)}
    >
      <p
        className={cn(
          "text-[clamp(32px,3.6vw,48px)] font-semibold leading-none tracking-[-0.04em]",
          isInView ? "realtime-shiny-text" : "text-[#0A3A86]",
        )}
      >
        {display}
      </p>
      <p className="mt-4 text-[15px] font-semibold leading-snug text-[#111111]">{label}</p>
      <p className="mt-2 text-[13px] leading-relaxed text-[#667085]">{description}</p>
    </motion.div>
  );
}

function StatGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-0 sm:gap-y-0">
      {stats.map((stat, index) =>
        stat.kind === "percent" ? (
          <PercentStat
            key={stat.id}
            value={stat.value}
            label={stat.label}
            description={stat.description}
            delay={index * 0.08}
            className={statCellBorders[index]}
          />
        ) : (
          <HighlightStat
            key={stat.id}
            display={stat.display}
            label={stat.label}
            description={stat.description}
            delay={index * 0.08}
            className={statCellBorders[index]}
          />
        ),
      )}
    </div>
  );
}

export default function AutomationPerformanceImpact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      ref={sectionRef}
      id="performance-impact"
      className="section-shell border-t border-black/[0.06] bg-white"
    >
      <div className="layout-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14 xl:gap-16"
        >
          <div className="lg:max-w-[480px]">
            <OperationsSectionHeader
              eyebrow="Performance Impact"
              title="Automation designed to improve efficiency, quality, and cost control."
              description="When automation is applied to the right operational bottlenecks, teams can improve consistency, reduce repetitive work, and gain clearer visibility into performance."
              descriptionClassName="max-w-[42rem]"
            />
            <p className="mt-4 max-w-[42rem] text-[12px] leading-relaxed text-[#9CA3AF]">
              Figures represent potential improvement ranges, not guaranteed outcomes.
              Results vary by workflow, volume, and implementation scope.
            </p>
          </div>

          <div className="flex flex-col justify-center border-t border-black/[0.08] pt-10 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <StatGrid />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
