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
    <section aria-labelledby="capabilities-heading" className="bg-white py-16 md:py-20">
      <div className="layout-container">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-16">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-its-mint-ink">
              {automationCapabilities.label}
            </p>
            <h2
              id="capabilities-heading"
              className="mt-4 max-w-[560px] text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-its-navy"
            >
              {automationCapabilities.title}
            </h2>
          </div>
          <p className="max-w-[520px] text-[16px] leading-[1.7] text-its-slate-ink lg:border-l lg:border-its-line lg:pl-8">
            {automationCapabilities.intro}
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {automationCapabilities.cards.map((card, index) => {
            const Icon = icons[card.key];
            return (
              <li key={card.key}>
                <Reveal delay={index * 0.04} className="h-full">
                  <div className="flex h-full flex-col rounded-[18px] border border-its-line bg-its-offwhite p-6 transition-colors hover:border-[#C9CFD8]">
                    <span className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-its-dusty-soft text-[#5B7590]">
                      <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden />
                    </span>
                    <h3 className="mt-5 text-[17px] font-semibold leading-[1.25] tracking-[-0.02em] text-its-navy">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-[14.5px] leading-[1.65] text-its-slate-ink">
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
