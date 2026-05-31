"use client";

import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { ShinyButton } from "@/components/ui/ShinyButton";

export default function ServicesCTA() {
  return (
    <section className="bg-white">
      <HeroHighlight containerClassName="h-[21.6rem] md:h-[22.8rem]">
        <div className="layout-container px-5 text-center">
          <p className="flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0A3A86]">
            <span className="h-2 w-2 rounded-full bg-[#0A3A86]" aria-hidden />
            Let&apos;s Connect
          </p>

          <h2 className="section-title mx-auto mt-5 max-w-[760px]">
            Built to support{" "}
            <Highlight>operations at scale.</Highlight>
          </h2>

          <p className="section-copy mx-auto mt-6 max-w-2xl">
            From workforce coordination to refurbishment, warehouse operations, and
            operational visibility, ITS helps teams operate with more structure
            and efficiency.
          </p>

          <div className="mt-8 flex justify-center">
            <ShinyButton href="/contact">Get In Touch</ShinyButton>
          </div>
        </div>
      </HeroHighlight>
    </section>
  );
}
