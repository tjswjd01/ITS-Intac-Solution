"use client";

import {
  animate,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const stats = [
  {
    id: "positions",
    kind: "count" as const,
    value: 100,
    suffix: "+",
    label: "Positions Filled",
  },
  {
    id: "industry",
    kind: "text" as const,
    display: "Multi-Industry",
    label: "Workforce Support",
  },
  {
    id: "bilingual",
    kind: "text" as const,
    display: "Bilingual",
    label: "Korean-English Coordination",
  },
  {
    id: "texas",
    kind: "text" as const,
    display: "Texas-Based",
    label: "Local Operations Team",
  },
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

function CountStat({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
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
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="text-center"
    >
      <p className="text-[clamp(36px,4vw,52px)] font-semibold leading-none tracking-[-0.04em] text-white tabular-nums">
        {count}
        {suffix}
      </p>
      <p className="mt-3 text-[14px] font-medium leading-snug text-white/65 md:text-[15px]">
        {label}
      </p>
    </motion.div>
  );
}

function TextStat({
  display,
  label,
  delay,
}: {
  display: string;
  label: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.35 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="text-center"
    >
      <p className="text-[clamp(24px,2.8vw,36px)] font-semibold leading-none tracking-[-0.04em] text-white">
        {display}
      </p>
      <p className="mt-3 text-[14px] font-medium leading-snug text-white/65 md:text-[15px]">
        {label}
      </p>
    </motion.div>
  );
}

export default function GlobalBusinessHighlight() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      ref={sectionRef}
      id="global-business-highlight"
      className="section-shell border-t border-white/[0.06] bg-[#111827] text-white"
    >
      <div className="layout-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55">
            <span className="h-2 w-2 rounded-full bg-[#60A5FA]" aria-hidden />
            U.S. Market Entry Partner
          </p>

          <h2 className="mt-5 text-balance text-[clamp(30px,3.2vw,48px)] font-semibold leading-[1.08] tracking-[-0.04em] text-white">
            Built for Korean Companies Expanding to the United States
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-[1.85] text-white/60 md:text-[17px]">
            Whether you are establishing a manufacturing facility, launching a
            warehouse operation, opening a regional office, or expanding your U.S.
            footprint, ITS provides the local workforce expertise and operational
            support needed to accelerate your success.
          </p>
        </motion.div>

        <div
          className={cn(
            "mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-8 md:mt-14 lg:grid-cols-4 lg:gap-6",
          )}
        >
          {stats.map((stat, index) =>
            stat.kind === "count" ? (
              <CountStat
                key={stat.id}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                delay={index * 0.08}
              />
            ) : (
              <TextStat
                key={stat.id}
                display={stat.display}
                label={stat.label}
                delay={index * 0.08}
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
}
