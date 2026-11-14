"use client";

import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Coins,
  Cog,
  Factory,
  Laptop,
  MapPin,
  Package,
  Search,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useMemo, useRef, useState } from "react";

import { Eyebrow, navyButtonClassName } from "@/components/site/primitives";
import {
  SHOW_SAMPLE_NOTICE,
  categoryLabel,
  jobCategories,
  jobs,
  quickFilters,
  type JobCategoryCode,
} from "@/content/jobs";

import CareersIllustration from "./CareersIllustration";

const categoryIcons: Record<JobCategoryCode, LucideIcon> = {
  engineering: Cog,
  "it-software": Laptop,
  "finance-accounting": Coins,
  "hr-administration": Users,
  "logistics-warehouse": Package,
  "manufacturing-operations": Factory,
};

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-its-navy";

const locations = Array.from(new Set(jobs.map((job) => job.location))).sort();

/** Hero search, category browser and job cards. All three read the same
 *  `jobs` data, so a search, a category and the cards can never disagree. */
export default function CareersBoard() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState<JobCategoryCode | "">("");
  const resultsRef = useRef<HTMLElement>(null);

  const results = useMemo(() => {
    const q = keyword.trim().toLowerCase();
    return jobs.filter(
      (job) =>
        (!category || job.category === category) &&
        (!location || job.location === location) &&
        (!q ||
          `${job.title} ${job.summary} ${job.location} ${categoryLabel(job.category)}`
            .toLowerCase()
            .includes(q)),
    );
  }, [keyword, location, category]);

  const isFiltered = Boolean(keyword || location || category);

  const showResults = () =>
    resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  const clear = () => {
    setKeyword("");
    setLocation("");
    setCategory("");
  };

  return (
    <>
      {/* Hero and search */}
      <section className="bg-its-offwhite pb-12 pt-28 md:pb-16 md:pt-36">
        <div className="layout-container">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-12">
            <div>
              <Eyebrow rule>Careers at ITS</Eyebrow>
              <h1 className="mt-5 text-[clamp(2.3rem,4.8vw,3.75rem)] font-semibold leading-[1.04] tracking-[-0.035em] text-its-navy">
                Find Your Next Opportunity
              </h1>
              <p className="mt-5 max-w-[540px] text-[17px] leading-[1.7] text-its-slate-ink">
                Explore professional, technical, operational, and logistics
                opportunities supported by ITS.
              </p>

              <form
                role="search"
                aria-label="Search jobs"
                className="mt-8 flex flex-col gap-2 rounded-[28px] border border-its-line bg-white p-2 shadow-[0_10px_30px_rgba(20,36,61,0.05)] sm:flex-row sm:items-center sm:rounded-full"
                onSubmit={(event) => {
                  event.preventDefault();
                  showResults();
                }}
              >
                <label className="flex min-w-0 flex-1 items-center gap-2.5 px-4">
                  <Search className="h-[18px] w-[18px] shrink-0 text-its-slate" aria-hidden />
                  <span className="sr-only">Job title or keywords</span>
                  <input
                    type="search"
                    value={keyword}
                    onChange={(event) => setKeyword(event.target.value)}
                    placeholder="Job Title, Keywords"
                    className="h-11 w-full min-w-0 bg-transparent text-[15px] text-its-navy outline-none placeholder:text-its-slate"
                  />
                </label>
                <label className="flex items-center gap-2.5 border-t border-its-line px-4 sm:w-[200px] sm:border-l sm:border-t-0">
                  <MapPin className="h-[18px] w-[18px] shrink-0 text-its-slate" aria-hidden />
                  <span className="sr-only">Location</span>
                  <select
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                    className="h-11 w-full min-w-0 bg-transparent text-[15px] text-its-navy outline-none"
                  >
                    <option value="">All Locations</option>
                    {locations.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>
                <button type="submit" className={`${navyButtonClassName} min-h-11 shrink-0 px-5`}>
                  Search Jobs
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </button>
              </form>

              <div className="mt-5 flex flex-wrap items-center gap-2">
                <span className="mr-1 text-[13.5px] font-semibold text-its-navy">
                  Quick filters:
                </span>
                {quickFilters.map((term) => {
                  const active = keyword.toLowerCase() === term.toLowerCase();
                  return (
                    <button
                      key={term}
                      type="button"
                      aria-pressed={active}
                      onClick={() => {
                        setKeyword(active ? "" : term);
                        showResults();
                      }}
                      className={`inline-flex min-h-9 items-center rounded-full border px-3.5 text-[13.5px] transition-colors ${focusRing} ${
                        active
                          ? "border-its-navy bg-its-navy text-white"
                          : "border-[#C9CFD8] bg-white text-its-navy hover:border-its-navy"
                      }`}
                    >
                      {term}
                    </button>
                  );
                })}
              </div>
            </div>

            <CareersIllustration />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section aria-labelledby="categories-heading" className="bg-white py-14 md:py-20">
        <div className="layout-container">
          <div className="text-center">
            <h2
              id="categories-heading"
              className="text-[clamp(1.6rem,2.6vw,2.2rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-its-navy"
            >
              Browse Jobs by Category
            </h2>
            <p className="mt-3 text-[16px] text-its-slate-ink">
              Explore opportunities across our key business areas.
            </p>
          </div>

          <ul className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {jobCategories.map((item) => {
              const Icon = categoryIcons[item.code];
              const active = category === item.code;
              return (
                <li key={item.code}>
                  <button
                    type="button"
                    aria-pressed={active}
                    onClick={() => {
                      setCategory(active ? "" : item.code);
                      showResults();
                    }}
                    className={`group flex w-full items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-colors ${focusRing} ${
                      active
                        ? "border-its-navy bg-its-offwhite"
                        : "border-its-line bg-white hover:border-[#C9CFD8] hover:bg-its-offwhite"
                    }`}
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-its-dusty-soft text-[#6E8196]">
                      <Icon className="h-[18px] w-[18px]" strokeWidth={1.6} aria-hidden />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[16px] font-semibold tracking-[-0.01em] text-its-navy">
                        {item.label}
                      </span>
                      <span className="mt-0.5 block text-[13.5px] leading-[1.5] text-its-slate-ink">
                        {item.description}
                      </span>
                    </span>
                    <ArrowRight
                      className="h-4 w-4 shrink-0 text-its-slate transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none"
                      aria-hidden
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Positions */}
      <section
        ref={resultsRef}
        id="open-positions"
        aria-labelledby="positions-heading"
        className="scroll-mt-24 bg-its-offwhite py-14 md:py-20"
      >
        <div className="layout-container">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2
                id="positions-heading"
                className="text-[clamp(1.6rem,2.6vw,2.2rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-its-navy"
              >
                Latest Open Positions
              </h2>
              <p aria-live="polite" className="mt-2 text-[15px] text-its-slate-ink">
                {results.length} {results.length === 1 ? "position" : "positions"}
                {isFiltered ? " match your search" : ""}
                {category ? ` in ${categoryLabel(category)}` : ""}
              </p>
            </div>
            {isFiltered ? (
              <button
                type="button"
                onClick={clear}
                className={`self-start text-[14.5px] font-semibold text-its-navy underline decoration-its-mint decoration-2 underline-offset-[6px] sm:self-auto ${focusRing}`}
              >
                Clear search
              </button>
            ) : null}
          </div>

          {SHOW_SAMPLE_NOTICE ? (
            <p className="mt-5 rounded-xl border border-dashed border-[#C9CFD8] bg-white px-4 py-3 text-[14px] leading-[1.55] text-its-slate-ink">
              <strong className="font-semibold text-its-navy">Design template.</strong>{" "}
              The listings below are samples for layout review, not real
              openings. Live positions will replace them once the job source is
              connected.
            </p>
          ) : null}

          {results.length === 0 ? (
            <div className="mt-6 rounded-2xl border border-its-line bg-white px-6 py-10 text-center">
              <p className="text-[17px] font-semibold text-its-navy">
                No open positions match your search.
              </p>
              <p className="mt-2 text-[15px] text-its-slate-ink">
                Try a different keyword or category, or submit your resume below
                and we will keep you in mind.
              </p>
            </div>
          ) : (
            <ul className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {results.map((job) => (
                <li key={job.id}>
                  <article className="flex h-full flex-col rounded-2xl border border-its-line bg-white p-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-its-dusty-soft px-3 py-1 text-[12.5px] font-medium text-its-navy">
                        {categoryLabel(job.category)}
                      </span>
                      {job.sample ? (
                        <span className="rounded-full border border-dashed border-[#B4BDC8] px-2.5 py-1 text-[12px] font-medium text-its-slate-ink">
                          Sample
                        </span>
                      ) : null}
                    </div>
                    <h3 className="mt-4 text-[19px] font-semibold leading-[1.25] tracking-[-0.02em] text-its-navy">
                      <Link href={`/careers/${job.slug}`} className={`hover:underline ${focusRing}`}>
                        {job.title}
                      </Link>
                    </h3>
                    <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[14px] text-its-slate-ink">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-4 w-4" aria-hidden />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Briefcase className="h-4 w-4" aria-hidden />
                        {job.employmentType}
                      </span>
                    </p>
                    <p className="mt-3 text-[14.5px] leading-[1.6] text-its-slate-ink">
                      {job.summary}
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-5">
                      <Link
                        href={`/careers/${job.slug}`}
                        className={`inline-flex min-h-11 items-center gap-1.5 text-[15px] font-semibold text-its-navy ${focusRing}`}
                      >
                        View Details
                        <ArrowRight className="h-4 w-4 text-its-coral" aria-hidden />
                      </Link>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
