import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { Eyebrow, lightButtonClassName } from "@/components/site/primitives";

import { nemo } from "./homeContent";

/** Abstract dashboard made of shapes only. It carries no figures, names or
 *  records, so it cannot be mistaken for live data. */
function SampleDashboard() {
  const bars = [46, 62, 54, 78, 70, 88, 64];

  return (
    <figure className="mx-auto w-full max-w-[380px]">
      <div aria-hidden className="rounded-[16px] bg-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-its-navy text-[11px] font-semibold text-white">
              N
            </span>
            <span className="text-[12.5px] font-semibold text-its-navy">NEMO</span>
          </div>
          <span className="rounded-full border border-its-line px-2 py-0.5 text-[10.5px] font-medium text-its-slate-ink">
            Sample view
          </span>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[86, 68, 18].map((width, index) => (
            <div key={index} className="rounded-lg border border-its-line p-2.5">
              <div className="h-1.5 w-2/3 rounded-full bg-[#C9D2DC]" />
              <div className="mt-2.5 h-1.5 rounded-full bg-its-dusty-soft">
                <div
                  className={index === 2 ? "h-1.5 rounded-full bg-its-coral" : "h-1.5 rounded-full bg-its-mint"}
                  style={{ width: `${width}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-2 flex h-[64px] items-end gap-1.5 rounded-lg border border-its-line p-2.5">
          {bars.map((height, index) => (
            <div key={index} className="flex-1 rounded-t bg-its-dusty" style={{ height: `${height}%` }} />
          ))}
        </div>
      </div>
      <figcaption className="mt-2 text-center text-[12px] text-[#B4C0CE]">
        {nemo.sampleLabel}. Not live data.
      </figcaption>
    </figure>
  );
}

export default function HomeNemo() {
  return (
    <section aria-labelledby="nemo-heading" className="bg-white pb-14 md:pb-20">
      <div className="layout-container">
        <div className="grid items-center gap-8 rounded-[24px] bg-its-navy px-6 py-8 sm:px-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)_auto] lg:gap-10 lg:px-12 lg:py-9">
          <div>
            <Eyebrow onDark>{nemo.eyebrow}</Eyebrow>
            <h2
              id="nemo-heading"
              className="mt-3 max-w-[420px] text-[clamp(1.5rem,2.4vw,2rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-white"
            >
              {nemo.title}
            </h2>
            <p className="mt-3 max-w-[440px] text-[15.5px] leading-[1.65] text-[#C8D1DC]">
              {nemo.copy}
            </p>
            <p className="mt-3 max-w-[440px] text-[13px] leading-[1.55] text-[#A9B6C6]">
              {nemo.note}
            </p>
            <Link href={nemo.link.href} className={`${lightButtonClassName} mt-5 min-h-11 px-5 py-2.5 text-[14.5px]`}>
              {nemo.link.label}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <SampleDashboard />

          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {nemo.points.map((point) => (
              <li key={point} className="flex items-center gap-2.5 text-[15px] text-white">
                <Check className="h-4 w-4 shrink-0 text-[#B9CDC9]" aria-hidden />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
