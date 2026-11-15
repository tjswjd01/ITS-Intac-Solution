import { ArrowRight, Briefcase, Compass, Factory, type LucideIcon } from "lucide-react";

import { insightsPage } from "@/content/insights";

const icons: Record<(typeof insightsPage.pillars)[number]["key"], LucideIcon> = {
  hiring: Briefcase,
  operations: Factory,
  careers: Compass,
};

/** Three editorial pillars. The middle one is raised as a white card, the
 *  outer two sit flat on the page, like the reference layout. */
export default function InsightsPillars() {
  return (
    <section aria-label="What we write about" className="bg-white pb-6 pt-16 md:pb-10 md:pt-20">
      <div className="layout-container">
        <ul className="grid gap-6 md:grid-cols-3 md:items-stretch">
          {insightsPage.pillars.map((item, index) => {
            const Icon = icons[item.key];
            const raised = index === 1;
            return (
              <li
                key={item.key}
                className={`flex flex-col px-2 py-6 md:px-8 md:py-9 ${
                  raised ? "rounded-[24px] bg-white shadow-[0_22px_54px_rgba(20,36,61,0.09)] ring-1 ring-its-line" : ""
                }`}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-its-dusty-soft text-[#5B7590]">
                  <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden />
                </span>
                <h2 className="mt-5 text-[19px] font-semibold tracking-[-0.02em] text-its-navy">{item.title}</h2>
                <p className="mt-2 text-[14.5px] leading-[1.65] text-its-slate-ink">{item.text}</p>
                <a
                  href="#articles"
                  className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[14px] font-semibold text-its-navy hover:underline"
                >
                  Browse
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
