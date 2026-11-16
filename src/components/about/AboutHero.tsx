import Image from "next/image";

import { Eyebrow } from "@/components/site/primitives";
import { aboutHero } from "@/content/about";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-its-navy">
      {/* Real ITS photo on the right; it sits faintly behind the copy on phones. */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[60%]">
        <Image
          src={aboutHero.image}
          alt={aboutHero.imageAlt}
          fill
          priority
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover opacity-25 lg:opacity-100"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(90deg,#14243D_0%,rgba(20,36,61,0.9)_26%,rgba(20,36,61,0.5)_62%,rgba(20,36,61,0.32)_100%)]"
        />
      </div>

      <div className="layout-container relative z-10 pb-14 pt-32 md:pb-20 md:pt-40">
        <div className="max-w-[620px]">
          <Eyebrow rule onDark>
            {aboutHero.label}
          </Eyebrow>
          <h1 className="mt-5 text-[clamp(2.1rem,4.2vw,3.4rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-white">
            {aboutHero.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-[520px] text-[17px] leading-[1.7] text-[#D3DAE3]">
            {aboutHero.copy}
          </p>
        </div>
      </div>
    </section>
  );
}
