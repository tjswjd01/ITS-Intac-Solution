import { CalendarCheck, ClipboardList, Languages, ListChecks, ScanSearch, Target, type LucideIcon } from "lucide-react";

import { Eyebrow } from "@/components/site/primitives";
import { supportServices } from "@/content/directHire";
import { cn } from "@/lib/utils";

import PartnershipGraphic from "./PartnershipGraphic";

type ServiceKey =
  | (typeof supportServices.items)[number]["key"]
  | (typeof supportServices.wide)[number]["key"];

const icons: Record<ServiceKey, LucideIcon> = {
  planning: ClipboardList,
  sourcing: Target,
  screening: ScanSearch,
  presentation: ListChecks,
  bilingual: Languages,
  coordination: CalendarCheck,
};

/** Mixed-size tiles: one dark statement tile, four small tiles, two wide ones. */
export default function SupportServices() {
  return (
    <section aria-labelledby="support-services-heading" className="bg-its-offwhite py-20 md:py-28">
      <div className="layout-container">
        <div className="max-w-[620px]">
          <Eyebrow rule>{supportServices.label}</Eyebrow>
          <h2
            id="support-services-heading"
            className="mt-5 text-[clamp(2rem,3.6vw,3rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-its-navy"
          >
            {supportServices.title}
          </h2>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <li className="relative isolate flex min-h-[320px] flex-col justify-end overflow-hidden rounded-[26px] bg-its-charcoal p-8 sm:col-span-2 lg:row-span-2 lg:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-[30%] -top-[25%] -z-10 h-[125%] w-[125%] opacity-60 [mask-image:linear-gradient(200deg,black_20%,transparent_70%)]"
            >
              <PartnershipGraphic className="h-full w-full" accent={false} />
            </div>
            <p className="max-w-[440px] text-[clamp(1.6rem,2.6vw,2.2rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-white">
              {supportServices.statement.title}
            </p>
            <p className="mt-4 max-w-[460px] text-[16px] leading-[1.65] text-[#C3CCD6]">
              {supportServices.statement.text}
            </p>
          </li>

          {supportServices.items.map((item) => {
            const Icon = icons[item.key];
            return (
              <li key={item.key} className="flex flex-col rounded-[22px] border border-[#DDE1E6] bg-white p-6">
                <Icon className="h-6 w-6 text-[#7C8A99]" strokeWidth={1.5} aria-hidden />
                <h3 className="mt-8 text-[18px] font-semibold leading-[1.25] tracking-[-0.02em] text-its-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-[1.6] text-its-slate-ink">{item.text}</p>
              </li>
            );
          })}

          {supportServices.wide.map((item, index) => {
            const Icon = icons[item.key];
            return (
              <li
                key={item.key}
                className={cn(
                  "flex items-start gap-5 rounded-[22px] p-6 sm:col-span-2 sm:p-7",
                  index === 0 ? "bg-its-warm" : "border border-[#DDE1E6] bg-white",
                )}
              >
                <span
                  className={cn(
                    "flex h-12 w-12 shrink-0 items-center justify-center rounded-full",
                    index === 0 ? "bg-white text-[#5F6E7E]" : "bg-its-offwhite text-[#7C8A99]",
                  )}
                >
                  <Icon className="h-[22px] w-[22px]" strokeWidth={1.5} aria-hidden />
                </span>
                <div>
                  <h3 className="text-[19px] font-semibold leading-[1.25] tracking-[-0.02em] text-its-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.6] text-its-slate-ink">{item.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
