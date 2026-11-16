import { Building2, Users, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { accentAt } from "@/components/site/accents";
import { IconTile } from "@/components/site/primitives";

import { proof } from "./homeContent";

const icons: Record<(typeof proof.items)[number]["key"], LucideIcon> = {
  engineering: Wrench,
  workforce: Users,
  enterprise: Building2,
};

/** Separate light cards, not a dark KPI banner. */
export default function HomeProofStrip() {
  return (
    <section aria-label="ITS at a glance" className="bg-white pb-14 md:pb-20">
      <div className="layout-container">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[1.15fr_1fr_1fr_1fr]">
          <div className="flex items-center rounded-2xl bg-its-navy px-6 py-5">
            <p className="border-l-2 border-its-coral pl-4 text-[1.3rem] font-semibold leading-[1.2] tracking-[-0.025em] text-white">
              {proof.lead}
            </p>
          </div>
          {proof.items.map((item, index) => {
            const Icon = icons[item.key];
            return (
              <div
                key={item.key}
                className="flex items-center gap-4 rounded-2xl border border-its-line bg-white px-6 py-5"
              >
                <IconTile icon={Icon} accent={accentAt(index)} size="lg" />
                <p>
                  <span className="block text-[1.25rem] font-semibold leading-[1.2] tracking-[-0.025em] text-its-navy">
                    {item.title}
                  </span>
                  <span className="mt-0.5 block text-[14px] text-its-slate-ink">{item.label}</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
