"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { GridPattern } from "@/components/ui/grid-pattern";

const animatedWords = [
  "managed",
  "coordinated",
  "accountable",
  "efficient",
  "scalable",
] as const;

export default function WorkforceSolutionsHero() {
  const [wordIndex, setWordIndex] = useState(0);
  const words = useMemo(() => animatedWords, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setWordIndex((current) =>
        current === words.length - 1 ? 0 : current + 1,
      );
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [wordIndex, words]);

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-black/[0.06] bg-white pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <GridPattern
          width={40}
          height={40}
          className="fill-gray-400/[0.08] stroke-gray-400/[0.12]"
        />
      </div>

      <div className="layout-container relative z-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center text-center lg:max-w-6xl">
          <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0A3A86]">
            <span className="h-2 w-2 rounded-full bg-[#0A3A86]" aria-hidden />
            Beyond staffing. Managed workforce operations.
          </p>

          <h1 className="mt-6 w-full">
            <span className="block text-[clamp(1.75rem,3.6vw,2.75rem)] font-medium leading-[1.15] tracking-[-0.04em] text-[#0B0F14] lg:whitespace-nowrap">
              Scalable workforce solutions for modern operational industries.
            </span>

            <span
              className="relative mx-auto mt-5 flex h-[1.1em] w-full max-w-xl items-center justify-center overflow-hidden text-[clamp(2.75rem,6.5vw,4.75rem)] font-bold leading-none tracking-[-0.04em] text-[#021f45] md:mt-6"
              aria-live="polite"
            >
              {words.map((word, index) => (
                <motion.span
                  key={word}
                  className="absolute whitespace-nowrap"
                  initial={{ opacity: 0, y: "-100%" }}
                  transition={{ type: "spring", stiffness: 50 }}
                  animate={
                    wordIndex === index
                      ? { y: 0, opacity: 1 }
                      : {
                          y: wordIndex > index ? -150 : 150,
                          opacity: 0,
                        }
                  }
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-base leading-[1.7] text-[#6B7280] md:mt-10 md:max-w-[52rem] md:text-[17px] md:leading-[1.75] lg:max-w-[58rem]">
            ITS provides workforce solutions that go beyond basic staffing,
            combining HR oversight, operational coordination, attendance
            visibility, payroll support, and field management into one
            structured workforce operation.
          </p>

          <div className="mt-8 flex justify-center md:mt-10">
            <Button
              href="/contact"
              className="h-12 gap-2 rounded-full bg-[#062A56] px-7 text-[15px] text-white hover:bg-[#021f45]"
            >
              Request Workforce Support
              <MoveRight className="h-4 w-4" aria-hidden />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
