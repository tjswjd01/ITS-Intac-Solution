import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { Eyebrow, SectionTitle, lightButtonClassName } from "@/components/site/primitives";

import { nemo } from "./homeContent";

/** Abstract dashboard made of shapes only. It carries no figures, names or
 *  records, so it cannot be mistaken for live data. */
function SampleDashboard() {
  const bars = [46, 62, 54, 78, 70, 88, 64];
  const rows = [72, 58, 84, 40];

  return (
    <figure className="rounded-[22px] border border-white/10 bg-[#1B2E4B] p-4 sm:p-5">
      <div aria-hidden className="rounded-[16px] bg-[#F7F6F3] p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-its-navy text-[12px] font-semibold text-white">
              N
            </span>
            <span className="text-[13px] font-semibold text-its-navy">NEMO</span>
          </div>
          <span className="rounded-full border border-its-line bg-white px-2.5 py-1 text-[11px] font-medium text-its-slate-ink">
            Sample view
          </span>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2.5">
          {["Attendance", "On shift", "Open issues"].map((label, index) => (
            <div key={label} className="rounded-xl border border-its-line bg-white p-3">
              <div className="text-[11px] font-medium text-its-slate-ink">{label}</div>
              <div className="mt-2.5 h-2 rounded-full bg-its-dusty-soft">
                <div
                  className={index === 2 ? "h-2 rounded-full bg-its-coral" : "h-2 rounded-full bg-its-mint"}
                  style={{ width: `${[86, 68, 18][index]}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-2.5 grid gap-2.5 sm:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-xl border border-its-line bg-white p-3">
            <div className="text-[11px] font-medium text-its-slate-ink">Weekly trend</div>
            <div className="mt-3 flex h-[84px] items-end gap-2">
              {bars.map((height, index) => (
                <div
                  key={index}
                  className="flex-1 rounded-t-md bg-its-dusty"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-its-line bg-white p-3">
            <div className="text-[11px] font-medium text-its-slate-ink">Site status</div>
            <div className="mt-3 space-y-2.5">
              {rows.map((width, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-its-mint" />
                  <span className="h-2 rounded-full bg-its-dusty-soft" style={{ width: `${width}%` }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-[12.5px] text-[#B4C0CE]">
        {nemo.sampleLabel}. Not live data.
      </figcaption>
    </figure>
  );
}

export default function HomeNemo() {
  return (
    <section aria-labelledby="nemo-heading" className="bg-white py-16 md:py-20">
      <div className="layout-container">
        <div className="grid items-center gap-10 rounded-[32px] bg-its-navy px-6 py-10 sm:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14 lg:px-14 lg:py-14">
          <div>
            <Eyebrow onDark>{nemo.eyebrow}</Eyebrow>
            <SectionTitle onDark className="mt-4 max-w-[480px]">
              <span id="nemo-heading">{nemo.title}</span>
            </SectionTitle>
            <p className="mt-5 max-w-[520px] text-[16px] leading-[1.7] text-[#C8D1DC]">
              {nemo.copy}
            </p>

            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {nemo.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-[14.5px] leading-[1.5] text-white">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#B9CDC9]" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>

            <p className="mt-6 max-w-[520px] text-[13.5px] leading-[1.6] text-[#A9B6C6]">
              {nemo.note}
            </p>

            <Link href={nemo.link.href} className={`${lightButtonClassName} mt-7`}>
              {nemo.link.label}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <SampleDashboard />
        </div>
      </div>
    </section>
  );
}
