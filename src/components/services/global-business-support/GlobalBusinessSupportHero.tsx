"use client";

import Link from "next/link";
import { MoveRight } from "lucide-react";

import ConnectionGlobe from "@/components/ui/ConnectionGlobe";
import { premiumPrimaryCtaClassName } from "@/components/ui/premiumCtaStyles";
import { cn } from "@/lib/utils";

export default function GlobalBusinessSupportHero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-black/[0.06] bg-white pt-28 pb-14 sm:pt-32 sm:pb-16 md:pb-20 lg:pt-36 lg:pb-24"
    >
      <div className="layout-container w-full min-w-0">
        <div className="grid w-full min-w-0 items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12 xl:gap-16">
          <div className="w-full min-w-0 max-w-xl">
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0A3A86]">
              <span className="h-2 w-2 rounded-full bg-[#0A3A86]" aria-hidden />
              Global Business Support
            </p>

            <h1 className="mt-6 text-[clamp(2rem,4.2vw,3.25rem)] font-medium leading-[1.12] tracking-[-0.04em] text-[#0B0F14]">
              Bridging{" "}
              <span className="text-[#0A3A86]">Korea</span> and the{" "}
              <span className="text-[#0A3A86]">United States</span>.
            </h1>

            <p className="mt-6 max-w-[520px] text-base leading-[1.8] text-[#64748B] md:text-[17px]">
              ITS supports cross-border growth through sourcing, manufacturing
              partnerships, compliance coordination, logistics, and operational
              execution.
            </p>

            <div className="mt-8 md:mt-10">
              <Link href="/contact" className={cn(premiumPrimaryCtaClassName, "w-full justify-center sm:w-auto")}>
                Schedule a Consultation
                <MoveRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>

          <div className="relative flex w-full min-w-0 items-center justify-center">
            <div className="relative z-10 aspect-square w-full max-w-[min(100%,520px)]">
              <ConnectionGlobe className="size-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
