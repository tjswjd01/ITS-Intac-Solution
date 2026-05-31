"use client";

import LogoCloud from "@/components/about/LogoCloud";

const partnerLogos = [
  { src: "/images/logos/client-1.svg", alt: "Partner logo" },
  { src: "/images/logos/client-2.svg", alt: "Partner logo" },
  { src: "/images/logos/client-3.svg", alt: "Partner logo" },
  { src: "/images/logos/client-1.png", alt: "Partner logo" },
  { src: "/images/logos/client-2.png", alt: "Partner logo" },
  { src: "/images/logos/client-3.png", alt: "Partner logo" },
];

export default function CompaniesWeSupport() {
  return (
    <section
      id="companies-we-support"
      className="section-shell border-t border-black/[0.06] bg-[#FAFAF8]"
    >
      <div className="layout-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#111111]">
            <span className="h-2 w-2 rounded-full bg-[#111111]" aria-hidden />
            Companies We Support
          </p>

          <h2 className="section-title mx-auto mt-5 max-w-[760px]">
            Trusted by teams operating in complex, high-volume environments.
          </h2>

          <p className="section-copy mx-auto mt-6 max-w-2xl">
            ITS supports enterprise and operational teams across refurbishment,
            warehouse, QA, logistics, and technical service environments that
            require structured workforce management — not just temporary coverage.
          </p>
        </div>

        <div className="mt-12 md:mt-14">
          <LogoCloud
            logos={partnerLogos}
            logoClassName="h-6 w-auto opacity-60 grayscale transition duration-300 hover:opacity-100 md:h-7"
          />
        </div>
      </div>
    </section>
  );
}
