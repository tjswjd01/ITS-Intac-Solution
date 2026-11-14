import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { careersHero } from "./careersContent";

const focusOnDark =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export default function CareersHeroV2() {
  return (
    <section className="relative overflow-hidden bg-[#081321]">
      {/* photo fills the right side on desktop and sits behind the copy on mobile */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[58%]">
        <Image
          src={careersHero.image}
          alt={careersHero.imageAlt}
          fill
          priority
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="object-cover opacity-35 lg:opacity-100"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(90deg,#081321_0%,rgba(8,19,33,0.82)_28%,rgba(8,19,33,0.25)_70%,rgba(8,19,33,0.15)_100%)]"
        />
      </div>

      <div className="layout-container relative z-10 pb-16 pt-32 md:pb-20 md:pt-40 lg:pb-24">
        <div className="max-w-[600px]">
          <p className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#B9CDC9]">
            <span>{careersHero.label}</span>
            <span aria-hidden className="h-px w-14 bg-[#B9CDC9]/60" />
          </p>

          <h1 className="mt-6 text-[clamp(2.1rem,4.2vw,3.5rem)] font-semibold leading-[1.07] tracking-[-0.035em] text-white">
            {careersHero.headline.map((line) => (
              <span key={line} className="sm:block">
                {line}{" "}
              </span>
            ))}
            <span className="sm:block">
              {careersHero.headlineLast}{" "}
              <span className="text-[#A5B5C5]">{careersHero.headlineAccent}</span>
            </span>
          </h1>

          <p className="mt-6 max-w-[500px] text-[16.5px] leading-[1.7] text-[#D3DAE3]">
            {careersHero.copy}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={careersHero.primary.href}
              className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-[15px] font-medium text-[#14243D] transition-colors duration-200 hover:bg-[#F7F6F3] ${focusOnDark}`}
            >
              {careersHero.primary.label}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <Link
              href={careersHero.secondary.href}
              className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-[15px] font-medium text-white transition-colors duration-200 hover:border-white/80 ${focusOnDark}`}
            >
              {careersHero.secondary.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
