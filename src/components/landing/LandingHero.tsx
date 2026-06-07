"use client";

import {
  premiumPrimaryCtaClassName,
  premiumSecondaryCtaClassName,
} from "../ui/premiumCtaStyles";

const stats = [
  { value: "10M+", label: "Devices Processed" },
  { value: "1.5M+", label: "Device Tests Annually" },
  { value: "350K+", label: "Refurbished Devices" },
  { value: "700+", label: "Skilled Professionals" },
  { value: "99.5%", label: "Quality Accuracy" },
];

export default function LandingHero() {
  return (
    <section className="relative overflow-visible border-b border-[#EEF1F4] pb-20 md:pb-14 lg:pb-12">
      {/* Full-bleed background */}
      <div className="absolute inset-0 min-h-[560px] md:min-h-[640px] lg:min-h-[720px]">
        <img
          src="/images/its-hero-bg.png"
          alt=""
          className="h-full w-full object-cover object-center"
          aria-hidden
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(252,252,251,0.92)_0%,rgba(252,252,251,0.78)_42%,rgba(252,252,251,0.55)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(252,252,251,0.98)_0%,rgba(252,252,251,0.88)_34%,rgba(252,252,251,0.42)_58%,rgba(252,252,251,0.08)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,42,86,0.04),transparent_42%)]" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 layout-container pb-28 pt-28 md:pb-32 md:pt-32 lg:pb-36 lg:pt-36">
        <div className="max-w-[640px]">
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8B93A1]">
            <span>About ITS</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4D8DE]" />
          </div>

          <h1 className="mt-5 max-w-none text-[clamp(2rem,8vw,3.58rem)] font-[500] leading-[1.05] tracking-[-0.042em] text-[#0B0F14]">
            <span className="block lg:whitespace-nowrap">
              Operational Workforce
            </span>
            <span className="block lg:whitespace-nowrap">
              Solutions Built on
            </span>
            <span className="block text-[#7F8691]">Experience.</span>
          </h1>

          <p className="mt-7 max-w-[520px] text-[16px] leading-[1.9] text-[#3F4652]">
            ITS provides operational workforce solutions and device lifecycle
            support across refurbishment, quality assurance, logistics,
            technical operations, and workforce management.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="/services"
              className={`${premiumPrimaryCtaClassName} shadow-none hover:shadow-none`}
            >
              Our Services
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="/contact"
              className={`${premiumSecondaryCtaClassName} shadow-none hover:shadow-none`}
            >
              Get In Touch
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* KPI card — centered, overlapping hero bottom */}
      <div className="absolute bottom-0 left-1/2 z-20 w-full max-w-[1120px] -translate-x-1/2 translate-y-1/2 px-5 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[22px] border border-[#E3E8EF] bg-white shadow-[0_18px_38px_rgba(15,23,42,0.1)]">
          <div className="grid grid-cols-2 divide-x divide-y divide-[#EEF1F4] md:grid-cols-5 md:divide-y-0">
            {stats.map((item, index) => (
              <div
                key={item.label}
                className={`px-3 py-4 text-center sm:px-4 md:px-4 md:py-5 ${
                  index === stats.length - 1 ? "col-span-2 md:col-span-1" : ""
                }`}
              >
                <div className="text-[1.48rem] font-[500] leading-none tracking-[-0.035em] text-[#05080D] md:text-[1.62rem]">
                  {item.value}
                </div>
                <div className="mt-1.5 text-[10.5px] font-medium leading-4 text-[#5F6672]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
