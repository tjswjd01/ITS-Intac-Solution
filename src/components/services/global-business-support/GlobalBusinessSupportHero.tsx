"use client";

import Link from "next/link";
import { MoveRight } from "lucide-react";

import ConnectionGlobe from "@/components/ui/ConnectionGlobe";
import { premiumPrimaryCtaClassName } from "@/components/ui/premiumCtaStyles";

export default function GlobalBusinessSupportHero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-black/[0.06] bg-white pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24"
    >
      <div className="layout-container">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 xl:gap-16">
          <div className="max-w-xl">
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0A3A86]">
              <span className="h-2 w-2 rounded-full bg-[#0A3A86]" aria-hidden />
              Global Business Support
            </p>

            <h1 className="mt-6 text-[clamp(2rem,4.2vw,3.25rem)] font-medium leading-[1.1] tracking-[-0.04em] text-[#0B0F14]">
              Helping businesses expand between Korea and the United States.
            </h1>

            <p className="mt-6 max-w-[520px] text-base leading-[1.8] text-[#64748B] md:text-[17px]">
              ITS supports cross-border business growth through sourcing,
              manufacturing partnerships, compliance coordination, logistics
              support, and operational execution.
            </p>

            <div className="mt-8 md:mt-10">
              <Link href="/contact" className={premiumPrimaryCtaClassName}>
                Schedule a Consultation
                <MoveRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>

          <div className="relative flex min-h-[340px] items-center justify-center sm:min-h-[400px] lg:min-h-[480px]">
            <div
              className="pointer-events-none absolute aspect-square w-full max-w-[520px] rounded-full bg-[radial-gradient(circle,rgba(10,58,134,0.05)_0%,rgba(255,255,255,0.4)_42%,transparent_72%)]"
              aria-hidden
            />
            <div className="relative z-10 aspect-square w-full max-w-[520px]">
              <ConnectionGlobe className="size-full" autoRotateSpeed={0.0012} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
