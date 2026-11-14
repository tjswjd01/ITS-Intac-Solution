import { Bot, Cog, Search, Workflow, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import Reveal from "@/components/site/Reveal";

import { automationCapabilities } from "./automationContent";

const icons: Record<(typeof automationCapabilities.cards)[number]["key"], LucideIcon> = {
  custom: Cog,
  inspection: Search,
  process: Workflow,
  amr: Bot,
  support: Wrench,
};

export default function AutomationCapabilities() {
  return (
    <section aria-labelledby="capabilities-heading" className="bg-[#0C1A2E] py-16 md:py-20">
      <div className="layout-container">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-16">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#B9CDC9]">
              {automationCapabilities.label}
            </p>
            <h2
              id="capabilities-heading"
              className="mt-4 max-w-[560px] text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-white"
            >
              {automationCapabilities.title}
            </h2>
          </div>
          <p className="max-w-[520px] text-[16px] leading-[1.7] text-[#C8D1DC] lg:border-l lg:border-white/15 lg:pl-8">
            {automationCapabilities.intro}
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {automationCapabilities.cards.map((card, index) => {
            const Icon = icons[card.key];
            return (
              <li key={card.key}>
                <Reveal delay={index * 0.04} className="h-full">
                  <div className="flex h-full flex-col rounded-[18px] border border-white/10 bg-[#122238] p-6">
                    <Icon className="h-7 w-7 text-[#A5B5C5]" strokeWidth={1.5} aria-hidden />
                    <h3 className="mt-5 text-[17px] font-semibold leading-[1.25] tracking-[-0.02em] text-white">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-[14.5px] leading-[1.65] text-[#B4C0CE]">
                      {card.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
