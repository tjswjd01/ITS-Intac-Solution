import Link from "next/link";
import { ArrowRight, Bot, Globe, Layers, Settings, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import Reveal from "@/components/site/Reveal";

import { solutions, type SolutionKey } from "./homeContent";

const icons: Record<SolutionKey, LucideIcon> = {
  "direct-hire": Users,
  staffing: Layers,
  "managed-operations": Settings,
  automation: Bot,
  "market-entry": Globe,
};

export default function HomeSolutions() {
  return (
    <section id="solutions" aria-labelledby="solutions-heading" className="bg-its-offwhite pb-10 md:pb-12">
      <div className="layout-container">
        <h2 id="solutions-heading" className="sr-only">
          Our five solutions
        </h2>

        <Reveal>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0 lg:divide-x lg:divide-its-line lg:rounded-[28px] lg:border lg:border-its-line lg:bg-white">
            {solutions.map((item) => {
              const Icon = icons[item.key];
              return (
                <li key={item.key} className="flex">
                  <Link
                    href={item.href}
                    className="group flex w-full flex-col rounded-[24px] border border-its-line bg-white p-6 transition-colors duration-200 hover:bg-[#FBFBF9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-its-navy lg:rounded-none lg:border-0 lg:bg-transparent lg:px-6 lg:py-8 lg:first:rounded-l-[28px] lg:last:rounded-r-[28px]"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-its-dusty-soft text-[#6E8196]">
                      <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden />
                    </span>
                    <span className="mt-5 text-[17px] font-semibold leading-[1.25] tracking-[-0.02em] text-its-navy">
                      {item.title}
                    </span>
                    <span className="mt-2 text-[14.5px] leading-[1.6] text-its-slate-ink">
                      {item.description}
                    </span>
                    <span className="mt-auto flex items-center gap-1.5 pt-5 text-[13.5px] font-semibold text-its-navy">
                      Learn more
                      <ArrowRight
                        className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
                        aria-hidden
                      />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
