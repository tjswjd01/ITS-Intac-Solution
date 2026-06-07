"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { MoveRight } from "lucide-react";

import { GBS_ACCENT } from "@/components/services/global-business-support/globalBusinessTheme";

export default function GlobalBusinessCTA() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="global-business-cta"
      className="border-t border-[#E5E7EB] py-16 md:py-20 lg:py-24"
      style={{ backgroundColor: GBS_ACCENT }}
    >
      <div className="mx-auto w-full min-w-0 max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex max-w-[720px] flex-col items-center text-center"
        >
          <h2 className="text-[clamp(1.75rem,3.5vw,2.65rem)] font-medium leading-[1.08] tracking-[-0.04em] text-white">
            Ready to Expand in the U.S.?
          </h2>

          <p className="mt-5 text-[15px] leading-[1.8] text-white/75 md:text-base">
            Partner with ITS for workforce setup, operational support, and
            local business coordination.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-7 py-3 text-[15px] font-medium text-[#3A5560] shadow-[0_12px_32px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-px hover:bg-[#F8FAFC] hover:text-[#2F4750]"
          >
            Schedule a Consultation
            <MoveRight className="h-4 w-4" aria-hidden />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
