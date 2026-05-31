"use client";

import Link from "next/link";
import LogoCloud from "./LogoCloud";
import { premiumPrimaryCtaClassName } from "../ui/premiumCtaStyles";

const partnerLogos = [
  { src: "/images/logos/client-1.svg", alt: "Partner logo" },
  { src: "/images/logos/client-2.svg", alt: "Partner logo" },
  { src: "/images/logos/client-3.svg", alt: "Partner logo" },
  { src: "/images/logos/client-1.png", alt: "Partner logo" },
  { src: "/images/logos/client-2.png", alt: "Partner logo" },
  { src: "/images/logos/client-3.png", alt: "Partner logo" },
];

export default function AboutClosingPartners() {
  return (
    <section className="section-shell bg-[#FAFAF8] pt-12 md:pt-16 lg:pt-20">
      <div className="layout-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
            <span
              className="h-2 w-2 rounded-full bg-[#235CFF]"
              aria-hidden
            />
            TRUSTED PARTNERS
          </p>

          <h2 className="mt-6 text-[clamp(1.85rem,3vw,2.65rem)] font-medium leading-[1.12] tracking-[-0.04em] text-black">
            Built to support the teams behind every operation.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.85] text-neutral-500 md:text-[17px]">
            From workforce coordination to technical execution, ITS helps
            enterprise teams operate with greater visibility, consistency, and
            confidence.
          </p>
        </div>

        <div className="mt-12 md:mt-14">
          <LogoCloud
            logos={partnerLogos}
            logoClassName="h-6 w-auto opacity-60 grayscale transition duration-300 hover:opacity-100 md:h-7"
          />
        </div>

        <div className="mt-12 flex justify-center md:mt-14">
          <Link href="/contact" className={premiumPrimaryCtaClassName}>
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
