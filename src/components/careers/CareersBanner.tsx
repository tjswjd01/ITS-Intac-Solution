"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const entranceEase = [0.22, 1, 0.36, 1] as const;

function CareersBannerBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundColor: "#EEF4FF",
        backgroundImage:
          "radial-gradient(circle, #DCE7F5 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
      aria-hidden
    />
  );
}

function HighlighterEmphasis({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block whitespace-nowrap px-1.5">
      <svg
        className="pointer-events-none absolute -left-1.5 -right-1.5 top-[0.4em] h-[0.58em] w-[calc(100%+12px)]"
        viewBox="0 0 320 28"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M3 12 C48 8, 112 10, 317 11 C319 11, 320 13, 318 20 C210 24, 72 23, 5 21 C2 20, 1 15, 3 12 Z"
          fill="rgba(220, 231, 245, 0.6)"
        />
      </svg>
      <span className="relative">{children}</span>
    </span>
  );
}

export default function CareersBanner() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="careers-cta"
      aria-labelledby="careers-banner-heading"
      className="relative w-full overflow-hidden"
    >
      <CareersBannerBackground />

      <div className="relative z-10 mx-auto flex max-w-[1280px] flex-col items-center px-5 py-14 text-center sm:px-6 md:py-[72px] lg:px-8 lg:py-24">
        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: entranceEase }}
          className="inline-flex items-center text-[11px] font-bold uppercase tracking-[0.18em] text-[#173F7A]"
        >
          <span
            className="mr-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#173F7A]"
            aria-hidden
          />
          Careers at ITS
        </motion.p>

        <motion.h2
          id="careers-banner-heading"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: 0.08, ease: entranceEase }}
          className="mt-5 max-w-[760px] text-center text-[30px] font-bold leading-[1.15] tracking-[-0.03em] text-[#0F172A] md:text-[36px] lg:text-[42px]"
        >
          <span className="block">Grow with a team built for</span>
          <span className="mt-1 block">
            <HighlighterEmphasis>real operations.</HighlighterEmphasis>
          </span>
        </motion.h2>

        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: 0.16, ease: entranceEase }}
          className="mt-5 max-w-[620px] text-[16px] leading-[1.7] text-[#64748B]"
        >
          Join ITS and be part of a workplace focused on teamwork,
          accountability, and long-term growth.
        </motion.p>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: 0.24, ease: entranceEase }}
          className="mt-8"
        >
          <Link
            href="#open-positions"
            className="inline-flex items-center rounded-full bg-[#173F7A] px-7 py-3.5 text-[15px] font-semibold text-white transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#0F2F5F]"
          >
            View Open Positions
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
