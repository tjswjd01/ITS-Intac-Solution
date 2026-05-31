"use client";

import { motion } from "framer-motion";
import { ArrowRight, MoveRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

export default function WorkforceCTA() {
  return (
    <section id="workforce-cta" className="border-t border-black/[0.06] bg-white">
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
              Workforce Solutions
            </p>

            <h2 className="section-title mx-auto mt-5 max-w-[760px]">
              Ready for workforce operations that are{" "}
              <Highlight>accountable and scalable?</Highlight>
            </h2>

            <p className="section-copy mx-auto mt-6 max-w-2xl">
              Tell us about your operational environment, coverage needs, and
              workforce management challenges. ITS can help structure a program
              built for coordination, visibility, and long-term operational
              consistency.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href="/contact"
                className="h-12 gap-2 rounded-full bg-[#062A56] px-7 text-[15px] text-white hover:bg-[#021f45]"
              >
                Request Workforce Support
                <MoveRight className="h-4 w-4" aria-hidden />
              </Button>
              <Button
                href="/services"
                variant="outline"
                className="h-12 gap-2 rounded-full border-[#D6DCE5] bg-white px-7 text-[15px] text-[#062A56] hover:bg-[#F8FAFC] hover:text-[#062A56]"
              >
                Explore Our Services
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          </motion.div>
        </div>
      </HeroHighlight>
    </section>
  );
}
