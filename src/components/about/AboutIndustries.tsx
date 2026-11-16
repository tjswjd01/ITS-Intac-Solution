import Image from "next/image";
import { Cpu, Factory, Smartphone, Truck, type LucideIcon } from "lucide-react";

import { ArrowLink, Eyebrow } from "@/components/site/primitives";
import Reveal from "@/components/site/Reveal";
import { aboutIndustries } from "@/content/about";

const icons: Record<(typeof aboutIndustries.items)[number]["key"], LucideIcon> = {
  "consumer-electronics": Smartphone,
  manufacturing: Factory,
  logistics: Truck,
  technology: Cpu,
};

/** Markets ITS supports. Kept separate from the five solutions on purpose. */
export default function AboutIndustries() {
  return (
    <section aria-labelledby="about-industries-heading" className="bg-its-cool py-16 md:py-20">
      <div className="layout-container">
        <div className="mx-auto max-w-[640px] text-center">
          <Eyebrow index={3} className="justify-center">
            Industries
          </Eyebrow>
          <h2
            id="about-industries-heading"
            className="mt-4 text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-its-navy"
          >
            {aboutIndustries.title}
          </h2>
          <p className="mt-4 text-[16.5px] leading-[1.7] text-its-slate-ink">{aboutIndustries.copy}</p>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {aboutIndustries.items.map((item, index) => {
            const Icon = icons[item.key];

            return (
              <li key={item.key}>
                <Reveal delay={index * 0.06}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] bg-its-navy sm:aspect-[3/2]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1024px) 24vw, 50vw"
                      className="object-cover"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,36,61,0.45)_0%,rgba(20,36,61,0.86)_100%)]"
                    />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-2 px-3 pb-4 text-center text-white sm:pb-5">
                      <Icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.4} aria-hidden />
                      <h3 className="text-[14.5px] font-semibold leading-[1.3] sm:text-[16px]">
                        {item.label}
                      </h3>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 flex justify-center">
          <ArrowLink href={aboutIndustries.link.href}>{aboutIndustries.link.label}</ArrowLink>
        </div>
      </div>
    </section>
  );
}
