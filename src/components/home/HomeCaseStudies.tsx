import Image from "next/image";

import { Eyebrow, SectionTitle } from "@/components/site/primitives";
import Reveal from "@/components/site/Reveal";

import { caseStudies } from "./homeContent";

export default function HomeCaseStudies() {
  return (
    <section aria-labelledby="track-record-heading" className="bg-its-offwhite py-16 md:py-24">
      <div className="layout-container">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-12">
          <div>
            <Eyebrow>{caseStudies.eyebrow}</Eyebrow>
            <SectionTitle className="mt-4">
              <span id="track-record-heading">{caseStudies.title}</span>
            </SectionTitle>
          </div>
          <p className="max-w-[420px] text-[16px] leading-[1.7] text-its-slate-ink">
            {caseStudies.copy}
          </p>
        </div>

        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {caseStudies.items.map((item, index) => (
            <li key={item.title}>
              <Reveal delay={index * 0.05} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-[24px] border border-its-line bg-white">
                  <div className="relative aspect-[16/10] bg-its-dusty-soft">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-its-slate">
                      {item.tag}
                    </p>
                    <h3 className="mt-3 text-[18px] font-semibold leading-[1.25] tracking-[-0.02em] text-its-navy">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[14.5px] leading-[1.65] text-its-slate-ink">
                      {item.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
