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

const logos = [
  "GoodRx",
  "Betterment",
  "Vanta",
  "Opendoor",
  "POSHMARK",
  "Quora",
  "NVIDIA",
  "ramp",
  "deel.",
  "Notion",
];

export default function LandingHero() {
  return (
    <section className="relative overflow-hidden border-b border-[#EEF1F4] bg-[#FCFCFB] pb-6 pt-28 md:pb-8 md:pt-32 lg:pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,42,86,0.035),transparent_40%)]" />

      <div className="layout-container relative">
        <div className="grid min-w-0 items-center gap-8 lg:grid-cols-[0.74fr_1.26fr] lg:gap-4">
          <div className="relative z-10 w-full min-w-0 max-w-[640px] pb-2 lg:pb-16">
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

          <div className="relative w-full min-w-0 lg:-mr-10">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#EEF1F4] sm:aspect-[16/10] lg:absolute lg:inset-0 lg:aspect-auto lg:min-h-[560px] lg:rounded-none lg:border-0">
              <img
                src="/images/its-hero-bg.png"
                alt="ITS headquarters building"
                className="h-full w-full object-cover object-center"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#FCFCFB] to-transparent lg:hidden" />
              <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[54%] bg-[linear-gradient(90deg,#FCFCFB_0%,rgba(252,252,251,0.98)_18%,rgba(252,252,251,0.88)_38%,rgba(252,252,251,0.44)_62%,rgba(252,252,251,0)_100%)] lg:block" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.24),transparent_40%)]" />
            </div>
          </div>
        </div>

        <div className="relative z-20 mt-6 lg:-mt-16">
          <div className="w-full md:w-[92%] lg:ml-auto lg:mr-[10%] lg:w-[64%]">
            <div className="relative overflow-hidden rounded-[22px] border border-[#E3E8EF] bg-white shadow-[0_18px_38px_rgba(15,23,42,0.1)]">
              <div className="grid divide-y divide-[#EEF1F4] md:grid-cols-5 md:divide-x md:divide-y-0">
                {stats.map((item, index) => (
                  <div
                    key={item.label}
                    className={`px-4 py-3.5 text-center md:px-4 md:py-4 ${
                      index === stats.length - 1
                        ? "col-span-2 md:col-span-1"
                        : ""
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
        </div>

        <div className="mt-12 w-full min-w-0 bg-[#FAF9F6] px-3 py-6 md:px-5 md:py-7 lg:-mr-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="shrink-0 pl-3 pt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8B93A1] md:w-[176px] md:pl-6 md:pt-3">
              <span className="block">TRUSTED BY</span>
              <span className="mt-1 block">LEADING</span>
              <span className="mt-1 block">COMPANIES</span>
            </div>

            <div className="relative flex-1 overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-[linear-gradient(90deg,#FAF9F6,rgba(250,249,246,0))]" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-[linear-gradient(270deg,#FAF9F6,rgba(250,249,246,0))]" />

              <div className="hero-logo-track flex w-max items-center gap-8 md:gap-10">
                {[...logos, ...logos].map((logo, index) => (
                  <span
                    key={`${logo}-${index}`}
                    className="whitespace-nowrap text-[0.98rem] font-semibold tracking-[-0.02em] text-[#68707D] opacity-65"
                  >
                    {logo}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-logo-track {
          animation: hero-logo-marquee 28s linear infinite;
        }

        @keyframes hero-logo-marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}