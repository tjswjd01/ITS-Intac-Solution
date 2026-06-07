"use client";

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

export default function LandingTrustedCompanies() {
  return (
    <section
      aria-label="Trusted companies"
      className="border-b border-[#EEF1F4] bg-[#FAF9F6] px-3 pb-8 pt-24 md:px-5 md:pb-10 md:pt-28"
    >
      <div className="layout-container">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="shrink-0 pl-3 pt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8B93A1] md:w-[176px] md:pl-2">
            <span className="block">Trusted by</span>
            <span className="mt-1 block">Leading</span>
            <span className="mt-1 block">Companies</span>
          </div>

          <div className="relative min-w-0 flex-1 overflow-hidden">
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
