"use client";

import Globe from "../ui/Globe";

export default function LandingOperationNetwork() {
  return (
    <section className="section-shell bg-[#FAFAF8] pt-0">
      <div className="layout-container">
        <div className="grid items-center gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12">
          <div>
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0A3A86]">
              <span className="h-2 w-2 rounded-full bg-[#0A3A86]" />
              Nationwide Service Coverage
            </p>

            <h2 className="section-title mt-5 max-w-none lg:max-w-[11ch]">
              Based in Dallas. Built to support teams across the U.S.
            </h2>

            <p className="section-copy mt-6 max-w-[560px]">
              ITS provides workforce, refurbishment, testing, logistics, and
              technical support programs for clients operating across multiple
              markets and facilities.
            </p>

            <a href="/contact" className="btn-primary mt-8">
              Contact Our Team
            </a>
          </div>

          <div className="relative flex min-h-[280px] items-center justify-center sm:min-h-[340px] lg:min-h-[460px]">
            <div className="pointer-events-none absolute aspect-square w-full max-w-[580px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.98)_0%,rgba(250,250,248,0.55)_48%,transparent_74%)]" />
            <Globe className="relative z-10 mx-auto aspect-square w-full max-w-[min(100%,580px)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
