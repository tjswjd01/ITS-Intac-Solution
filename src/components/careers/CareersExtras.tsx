import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

import {
  Eyebrow,
  SectionTitle,
  lightButtonClassName,
} from "@/components/site/primitives";

import { careerStories, careersClosing, resumeBanner } from "./careersContent";

export function CareersResumeBanner() {
  return (
    <section aria-labelledby="resume-heading" className="bg-its-offwhite pb-16 md:pb-20">
      <div className="layout-container">
        <div className="flex flex-col gap-6 rounded-[24px] bg-its-navy px-7 py-8 sm:px-10 md:flex-row md:items-center md:gap-8 lg:px-12">
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#B9CDC9]">
            <FileText className="h-7 w-7" strokeWidth={1.5} aria-hidden />
          </span>
          <div className="flex-1">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#B9CDC9]">
              {resumeBanner.label}
            </p>
            <h2
              id="resume-heading"
              className="mt-2 text-[1.6rem] font-semibold leading-[1.2] tracking-[-0.03em] text-white"
            >
              {resumeBanner.title}
            </h2>
            <p className="mt-2 max-w-[560px] text-[15.5px] leading-[1.65] text-[#C8D1DC]">
              {resumeBanner.copy}
            </p>
          </div>
          <Link href={resumeBanner.cta.href} className={`${lightButtonClassName} shrink-0 self-start md:self-auto`}>
            {resumeBanner.cta.label}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}

/** Renders nothing until approved stories are added to careersContent.ts. */
export function CareersStories() {
  if (careerStories.length === 0) return null;

  return (
    <section aria-labelledby="stories-heading" className="bg-white py-16 md:py-24">
      <div className="layout-container">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,1fr)] lg:gap-12">
          <div>
            <Eyebrow>Career Stories</Eyebrow>
            <SectionTitle className="mt-4">
              <span id="stories-heading">Real People. Real Career Growth.</span>
            </SectionTitle>
          </div>
          <ul className="grid gap-5">
            {careerStories.map((story) => (
              <li key={story.quote} className="rounded-[24px] border border-its-line bg-its-offwhite p-7 lg:p-9">
                <blockquote className="text-[18px] leading-[1.65] text-its-navy">
                  “{story.quote}”
                </blockquote>
                <p className="mt-5 text-[15px] font-semibold text-its-navy">{story.role}</p>
                <p className="text-[14px] text-its-slate-ink">{story.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function CareersClosing() {
  return (
    <section className="bg-its-offwhite pb-16 pt-16 md:pb-20 md:pt-20">
      <div className="layout-container">
        <div className="flex flex-col gap-6 rounded-[28px] bg-its-navy px-7 py-9 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-14 lg:py-10">
          <div className="max-w-[600px]">
            <h2 className="text-[clamp(1.5rem,2.4vw,2rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-white">
              {careersClosing.title}
            </h2>
            <p className="mt-3 text-[16px] leading-[1.6] text-[#C8D1DC]">
              {careersClosing.copy}
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a href={careersClosing.primary.href} className={lightButtonClassName}>
              {careersClosing.primary.label}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <Link
              href={careersClosing.secondary.href}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/40 px-6 py-3 text-[15px] font-medium text-white transition-colors hover:border-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {careersClosing.secondary.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
