import { Building2, CalendarDays, UsersRound, Wrench, type LucideIcon } from "lucide-react";

import Reveal from "@/components/site/Reveal";
import { accentAt, accents } from "@/components/site/accents";
import { aboutProof } from "@/content/about";
import { cn } from "@/lib/utils";

const icons: Record<(typeof aboutProof)[number]["key"], LucideIcon> = {
  since: CalendarDays,
  engineering: Wrench,
  workforce: UsersRound,
  enterprise: Building2,
};

/** Divider lines for one column on phones, two on tablets, four on desktop. */
const dividers = [
  "",
  "border-t sm:border-l sm:border-t-0",
  "border-t lg:border-l lg:border-t-0",
  "border-t sm:border-l lg:border-t-0",
];

/** Compact proof strip. Statements only, no figures, until numbers are approved. */
export default function AboutProof() {
  return (
    <section aria-label="ITS at a glance" className="bg-its-navy py-4 sm:py-8 md:py-10">
      <div className="layout-container">
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4">
          {aboutProof.map((item, index) => {
            const Icon = icons[item.key];

            return (
              <li key={item.key} className={cn("border-white/15", dividers[index])}>
                <Reveal delay={index * 0.08} className="flex items-center gap-4 py-5 sm:px-6 lg:justify-center">
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px]"
                    style={{ backgroundColor: accents[accentAt(index)].bg, color: accents[accentAt(index)].fg }}
                  >
                    <Icon className="h-[22px] w-[22px]" strokeWidth={1.6} aria-hidden />
                  </span>
                  <p>
                    <span className="block text-[1.3rem] font-semibold leading-[1.2] tracking-[-0.025em] text-white">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-[14px] leading-[1.4] text-[#C8D1DC]">
                      {item.label}
                    </span>
                  </p>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
