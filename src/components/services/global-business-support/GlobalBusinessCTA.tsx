"use client";

import { motion } from "framer-motion";
import { ArrowRight, MoveRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

export default function GlobalBusinessCTA() {
  return (
    <section
      id="global-business-cta"
      className="border-t border-black/[0.06] bg-white"
    >
      <HeroHighlight containerClassName="h-[22rem] md:h-[24rem]">
        <div className="layout-container px-5 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
          >
            <p className="flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0A3A86]">
              <span className="h-2 w-2 rounded-full bg-[#0A3A86]" aria-hidden />
              Global Business Support
            </p>

            <h2 className="section-title mx-auto mt-5 max-w-[760px]">
              Ready to Expand into the{" "}
              <Highlight>U.S. Market?</Highlight>
            </h2>

            <p className="section-copy mx-auto mt-6 max-w-2xl">
              Let ITS help you build, staff, and operate with confidence.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href="/contact"
                className="h-12 gap-2 rounded-full bg-[#062A56] px-7 text-[15px] text-white hover:bg-[#021f45]"
              >
                Schedule a Consultation
                <MoveRight className="h-4 w-4" aria-hidden />
              </Button>
              <Button
                href="/contact"
                variant="outline"
                className="h-12 gap-2 rounded-full border-[#D6DCE5] bg-white px-7 text-[15px] text-[#062A56] hover:bg-[#F8FAFC] hover:text-[#062A56]"
              >
                Contact Our Team
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          </motion.div>
        </div>
      </HeroHighlight>
    </section>
  );
}
