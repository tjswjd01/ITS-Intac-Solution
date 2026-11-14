import { Bot, Cpu, Factory, Truck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { ArrowLink, Eyebrow, SectionTitle } from "@/components/site/primitives";

import { industries } from "./homeContent";

const icons: Record<(typeof industries.items)[number]["key"], LucideIcon> = {
  electronics: Cpu,
  logistics: Truck,
  manufacturing: Factory,
  automation: Bot,
};

export default function HomeIndustries() {
  return (
    <section aria-labelledby="industries-heading" className="border-y border-its-line bg-[#EEF1F2] py-12 md:py-14">
      <div className="layout-container">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div>
            <Eyebrow>{industries.eyebrow}</Eyebrow>
            <SectionTitle className="mt-4 max-w-[420px] text-[clamp(1.5rem,2.4vw,2rem)]">
              <span id="industries-heading">{industries.title}</span>
            </SectionTitle>
            <ArrowLink href={industries.link.href} className="mt-6">
              {industries.link.label}
            </ArrowLink>
          </div>

          <ul className="grid grid-cols-2 gap-y-8 md:grid-cols-4 md:divide-x md:divide-[#D5DADF]">
            {industries.items.map((item) => {
              const Icon = icons[item.key];
              return (
                <li key={item.key} className="flex flex-col items-center px-3 text-center">
                  <Icon className="h-8 w-8 text-[#6E8196]" strokeWidth={1.4} aria-hidden />
                  <span className="mt-3 max-w-[150px] text-[14.5px] font-medium leading-[1.4] text-its-navy">
                    {item.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
