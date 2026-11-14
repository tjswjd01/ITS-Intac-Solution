import { BarChart3, Building2, Users } from "lucide-react";

import { proof } from "./homeContent";

const icons = [Users, Building2, BarChart3];

export default function HomeProofStrip() {
  return (
    <section aria-label="ITS at a glance" className="bg-its-offwhite pb-16 md:pb-20">
      <div className="layout-container">
        <dl className="grid divide-y divide-its-line rounded-[24px] border border-its-line bg-[#F1F3F3] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {proof.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={item.label}
                className="flex items-center gap-4 px-6 py-5 sm:justify-center sm:px-5 lg:py-6"
              >
                <Icon className="h-7 w-7 shrink-0 text-its-mint-ink" strokeWidth={1.5} aria-hidden />
                <div className="flex flex-col-reverse">
                  <dt className="text-[14px] leading-[1.4] text-its-slate-ink">{item.label}</dt>
                  <dd className="text-[1.45rem] font-semibold leading-[1.15] tracking-[-0.03em] text-its-navy">
                    {item.value}
                  </dd>
                </div>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
