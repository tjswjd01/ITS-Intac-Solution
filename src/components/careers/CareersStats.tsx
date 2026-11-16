import { Briefcase, LayoutGrid, MapPin, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import type { JobStats } from "@/content/jobs";

import { accents, type AccentName } from "./careerAccents";

type Item = { label: string; value: string; hint: string; icon: LucideIcon; accent: AccentName };

/** Compact recruiting overview. Every number comes from getJobStats(), so it
 *  always matches the job cards below. A value that the data cannot support
 *  is shown as a dash, never as an invented number. When the job source is
 *  unreachable (`available` false) every value is a dash, not a zero. */
export default function CareersStats({ stats, available }: { stats: JobStats; available: boolean }) {
  const show = (value: number, hint: string) =>
    available ? { value: String(value), hint } : { value: "—", hint: "Not available right now" };

  const items: Item[] = [
    { label: "Open Jobs", ...show(stats.openJobs, "Currently listed"), icon: Briefcase, accent: "dusty" },
    { label: "Job Categories", ...show(stats.activeCategories, "With open roles"), icon: LayoutGrid, accent: "teal" },
    { label: "Locations", ...show(stats.locations, "Cities with open roles"), icon: MapPin, accent: "slate" },
    {
      label: "New This Week",
      ...(stats.newThisWeek === null
        ? { value: "—", hint: available ? "Posting dates not available" : "Not available right now" }
        : show(stats.newThisWeek, "Posted in the last 7 days")),
      icon: Sparkles,
      accent: "coral",
    },
  ];

  return (
    <section aria-labelledby="careers-stats-heading" className="bg-its-offwhite pb-14 md:pb-20">
      <div className="layout-container">
        <div className="rounded-[24px] border border-its-line bg-white px-5 py-5 shadow-[0_10px_30px_rgba(20,36,61,0.04)] sm:px-7 sm:py-6">
          <h2
            id="careers-stats-heading"
            className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-its-slate"
          >
            Recruiting Overview
          </h2>

          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-5 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-its-line">
            {items.map((item) => {
              const tone = accents[item.accent];
              return (
                <li key={item.label} className="flex items-start gap-3.5 lg:px-6 lg:first:pl-0 lg:last:pr-0">
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px]"
                    style={{ backgroundColor: tone.bg, color: tone.fg }}
                  >
                    <item.icon className="h-4 w-4" strokeWidth={1.7} aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[26px] font-semibold leading-none tracking-[-0.03em] text-its-navy tabular-nums">
                      {item.value}
                    </p>
                    <p className="mt-1.5 text-[13.5px] font-medium text-its-navy">{item.label}</p>
                    <p className="mt-0.5 hidden text-[12.5px] text-its-slate-ink sm:block">{item.hint}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
