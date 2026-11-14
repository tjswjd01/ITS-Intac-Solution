import { Building2, ClipboardCheck, Gauge, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { ArrowLink, Eyebrow, SectionTitle } from "@/components/site/primitives";
import Reveal from "@/components/site/Reveal";

import { whyIts } from "./homeContent";

const icons: Record<(typeof whyIts.points)[number]["key"], LucideIcon> = {
  engineering: Wrench,
  workforce: ClipboardCheck,
  quality: Gauge,
  enterprise: Building2,
};

export default function HomeWhyIts() {
  return (
    <section aria-labelledby="why-its-heading" className="bg-white py-16 md:py-24">
      <div className="layout-container">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div className="max-w-[460px]">
            <Eyebrow>{whyIts.eyebrow}</Eyebrow>
            <SectionTitle className="mt-4">
              <span id="why-its-heading">{whyIts.title}</span>
            </SectionTitle>
            <p className="mt-5 text-[16.5px] leading-[1.7] text-its-slate-ink">
              {whyIts.copy}
            </p>
            <ArrowLink href={whyIts.link.href} className="mt-7">
              {whyIts.link.label}
            </ArrowLink>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {whyIts.points.map((point, index) => {
              const Icon = icons[point.key];
              return (
                <li key={point.key}>
                  <Reveal delay={index * 0.05} className="h-full">
                    <div className="flex h-full flex-col rounded-[24px] border border-its-line bg-its-offwhite p-6 lg:p-7">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#6E8196]">
                        <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden />
                      </span>
                      <h3 className="mt-5 text-[17px] font-semibold leading-[1.25] tracking-[-0.02em] text-its-navy">
                        {point.title}
                      </h3>
                      <p className="mt-2 text-[14.5px] leading-[1.65] text-its-slate-ink">
                        {point.description}
                      </p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
