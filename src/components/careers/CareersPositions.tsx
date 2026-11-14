"use client";

import Link from "next/link";
import { ArrowRight, Briefcase, MapPin, Search } from "lucide-react";
import { useMemo, useState } from "react";

import { Eyebrow } from "@/components/site/primitives";

import { applyHref, positions } from "./careersContent";

const unique = (values: string[]) => Array.from(new Set(values)).sort();

const fieldClassName =
  "h-12 w-full rounded-full border border-[#C9CFD8] bg-white px-5 text-[15px] text-its-navy outline-none transition-colors focus-visible:border-its-navy focus-visible:ring-2 focus-visible:ring-its-navy/20";

export default function CareersPositions() {
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");

  const departments = useMemo(() => unique(positions.map((p) => p.department)), []);
  const locations = useMemo(() => unique(positions.map((p) => p.location)), []);
  const types = useMemo(() => unique(positions.map((p) => p.type)), []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return positions.filter(
      (p) =>
        (!department || p.department === department) &&
        (!location || p.location === location) &&
        (!type || p.type === type) &&
        (!q ||
          `${p.title} ${p.department} ${p.location}`.toLowerCase().includes(q)),
    );
  }, [query, department, location, type]);

  const filtered = Boolean(query || department || location || type);

  const clear = () => {
    setQuery("");
    setDepartment("");
    setLocation("");
    setType("");
  };

  return (
    <section
      id="open-positions"
      aria-labelledby="positions-heading"
      className="scroll-mt-24 bg-its-offwhite py-16 md:py-24"
    >
      <div className="layout-container">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,1fr)] lg:gap-12">
          <div>
            <Eyebrow>Open Positions</Eyebrow>
            <h2
              id="positions-heading"
              className="mt-4 text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-its-navy"
            >
              Find Your Next <span className="text-its-slate">Opportunity.</span>
            </h2>
          </div>

          <form
            role="search"
            aria-label="Filter open positions"
            onSubmit={(event) => event.preventDefault()}
            className="grid gap-3 sm:grid-cols-3"
          >
            <div className="relative sm:col-span-3">
              <Search
                className="pointer-events-none absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-its-slate"
                aria-hidden
              />
              <label htmlFor="position-search" className="sr-only">
                Search by role, keyword, or location
              </label>
              <input
                id="position-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by role, keyword, or location"
                className={`${fieldClassName} pl-12`}
              />
            </div>

            <div>
              <label htmlFor="position-department" className="sr-only">
                Department
              </label>
              <select
                id="position-department"
                value={department}
                onChange={(event) => setDepartment(event.target.value)}
                className={fieldClassName}
              >
                <option value="">All Departments</option>
                {departments.map((value) => (
                  <option key={value}>{value}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="position-location" className="sr-only">
                Location
              </label>
              <select
                id="position-location"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                className={fieldClassName}
              >
                <option value="">All Locations</option>
                {locations.map((value) => (
                  <option key={value}>{value}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="position-type" className="sr-only">
                Employment type
              </label>
              <select
                id="position-type"
                value={type}
                onChange={(event) => setType(event.target.value)}
                className={fieldClassName}
              >
                <option value="">All Employment Types</option>
                {types.map((value) => (
                  <option key={value}>{value}</option>
                ))}
              </select>
            </div>
          </form>
        </div>

        <p className="mt-10 text-[14px] text-its-slate-ink" aria-live="polite">
          {results.length} {results.length === 1 ? "position" : "positions"}
          {filtered ? " match your search" : " open"}
          {filtered ? (
            <button
              type="button"
              onClick={clear}
              className="ml-3 font-semibold text-its-navy underline decoration-its-mint decoration-2 underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-its-navy"
            >
              Clear filters
            </button>
          ) : null}
        </p>

        {results.length === 0 ? (
          <div className="mt-4 rounded-[24px] border border-its-line bg-white p-8 text-[16px] leading-[1.7] text-its-slate-ink">
            No open positions match that search. Clear the filters, or submit
            your resume below and we will contact you when a matching role
            opens.
          </div>
        ) : (
          <ul className="mt-4 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {results.map((job) => (
              <li key={job.id}>
                <article className="flex h-full flex-col rounded-[20px] border border-its-line bg-white p-6">
                  <p className="self-start rounded-full bg-its-dusty-soft px-3 py-1 text-[12.5px] font-semibold text-its-navy">
                    {job.department}
                  </p>
                  <h3 className="mt-4 text-[19px] font-semibold leading-[1.25] tracking-[-0.02em] text-its-navy">
                    {job.title}
                  </h3>
                  <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[14px] text-its-slate-ink">
                    <div className="flex items-center gap-2">
                      <dt className="sr-only">Location</dt>
                      <MapPin className="h-4 w-4 text-its-slate" aria-hidden />
                      <dd>{job.location}</dd>
                    </div>
                    <div className="flex items-center gap-2">
                      <dt className="sr-only">Employment type</dt>
                      <Briefcase className="h-4 w-4 text-its-slate" aria-hidden />
                      <dd>{job.type}</dd>
                    </div>
                  </dl>
                  <Link
                    href={applyHref}
                    aria-label={`Apply for ${job.title}`}
                    className="mt-6 inline-flex min-h-11 items-center gap-2 self-end rounded-full bg-its-navy px-5 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-[#1D3252] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-its-navy"
                  >
                    Apply
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
