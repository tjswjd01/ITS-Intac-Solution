"use client";

import { useMemo, useState } from "react";

import ImageSurface from "../ui/ImageSurface";

const values = [
  {
    title: "Growth Mindset",
    description:
      "We encourage learning, embrace change, and support professional growth every step of the way.",
  },
  {
    title: "Team Collaboration",
    description:
      "We believe strong outcomes come from trust, communication, and working together across teams.",
  },
  {
    title: "Operational Excellence",
    description:
      "We are committed to reliability, efficiency, and delivering exceptional results.",
  },
];

const jobs = [
  {
    id: 1,
    department: "Operations",
    title: "Operations Coordinator",
    type: "Full-time",
    location: "Texas",
  },
  {
    id: 2,
    department: "Operations",
    title: "Operations Analyst",
    type: "Full-time",
    location: "Texas",
  },
  {
    id: 3,
    department: "Logistics",
    title: "Logistics Supervisor",
    type: "Full-time",
    location: "Texas",
  },
  {
    id: 4,
    department: "Quality Assurance",
    title: "Quality Inspection Associate",
    type: "Full-time",
    location: "Texas",
  },
  {
    id: 5,
    department: "Information Technology",
    title: "Automation Support Specialist",
    type: "Full-time",
    location: "Texas",
  },
];

const departments = [
  "All",
  "Operations",
  "Logistics",
  "Quality Assurance",
  "Information Technology",
];

export default function CareersHero() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.department.toLowerCase().includes(search.toLowerCase());

      const matchesDepartment =
        department === "All" || job.department === department;

      return matchesSearch && matchesDepartment;
    });
  }, [search, department]);

  return (
    <section className="section-shell overflow-hidden bg-[#FAFAF8] pt-28 sm:pt-32 md:pt-40">
      <div className="layout-container">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Careers at ITS</p>
            <h1 className="section-title mt-5 max-w-none lg:max-w-[11ch]">
              Build systems. Support teams. Grow with purpose.
            </h1>
            <p className="section-copy mt-6 max-w-[580px]">
              At ITS, we combine people, technology, and operational rigor to
              deliver real outcomes. We value collaboration, accountability, and
              calm execution.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-[#6B7280]">
              <span className="rounded-full border border-[#E5E7EB] bg-white px-4 py-2">
                People first
              </span>
              <span className="rounded-full border border-[#E5E7EB] bg-white px-4 py-2">
                Grow together
              </span>
              <span className="rounded-full border border-[#E5E7EB] bg-white px-4 py-2">
                Make an impact
              </span>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-[1.15fr_0.85fr]">
            <ImageSurface
              src="/images/placeholder-photo.svg"
              alt="ITS team collaboration"
              className="premium-card min-h-[280px] rounded-[32px] sm:min-h-[420px]"
              overlayClassName="bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(2,31,69,0.24))]"
            />

            <div className="grid gap-5">
              <div className="featured-card p-6 text-white">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/72">
                  Culture
                </p>
                <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">
                  Teams that care about precision and follow-through.
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/72">
                  We hire people who want to improve systems, support teammates,
                  and help clients run complex operations well.
                </p>
              </div>

              <ImageSurface
                src="/images/placeholder-photo.svg"
                alt="ITS operations environment"
                className="premium-card min-h-[190px] rounded-[28px]"
              />
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {values.map((item) => (
            <div key={item.title} className="premium-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4F7FB] text-sm font-semibold text-[#062A56]">
                {item.title.slice(0, 2).toUpperCase()}
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-[#0B0F14]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#6B7280]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="premium-card mt-14 overflow-hidden p-6 md:p-8 lg:p-10">
          <div className="mb-10 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="eyebrow">Open Positions</p>
              <h2 className="mt-4 text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#0B0F14] md:text-5xl">
                Join our mission.
              </h2>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Search by job title or keyword..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="premium-input"
              />

              <div className="flex flex-wrap gap-3">
                {departments.map((item) => (
                  <button
                    key={item}
                    onClick={() => setDepartment(item)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                      department === item
                        ? "border-[#0B3D91] bg-[#062A56] text-white"
                        : "border-[#E5E7EB] bg-white text-[#062A56]"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.16fr_0.84fr]">
            <div className="overflow-hidden rounded-[28px] border border-[#E5E7EB] bg-white">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job, index) => (
                  <div
                    key={job.id}
                    className={`flex flex-col gap-3 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6 ${
                      index !== filteredJobs.length - 1 ? "border-b border-[#E5E7EB]" : ""
                    }`}
                  >
                    <div>
                      <h3 className="text-xl font-semibold text-[#0B0F14]">
                        {job.title}
                      </h3>
                      <p className="mt-2 text-sm text-[#6B7280]">
                        {job.department} · {job.type} · {job.location}
                      </p>
                    </div>
                    <span className="text-xl text-[#062A56]">→</span>
                  </div>
                ))
              ) : (
                <div className="p-8 text-sm text-[#6B7280]">No positions found.</div>
              )}
            </div>

            <div className="rounded-[28px] border border-[#E5E7EB] bg-[#F8FAFC] p-6">
              <h3 className="text-2xl font-semibold text-[#0B0F14]">
                Submit Your Resume
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#6B7280]">
                Can&apos;t find the right role? Send us your information and
                we&apos;ll keep you in mind for future opportunities.
              </p>

              <form
                className="mt-7 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("This form is UI only. Email/backend connection is needed next.");
                }}
              >
                <input type="text" placeholder="Full Name" className="premium-input" />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="premium-input"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="premium-input"
                />
                <select className="premium-input text-[#6B7280]">
                  <option>Position Interested In</option>
                  {jobs.map((job) => (
                    <option key={job.id}>{job.title}</option>
                  ))}
                </select>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="w-full rounded-2xl border border-dashed border-[#CBD5E1] bg-white px-4 py-4 text-sm text-[#6B7280]"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="premium-textarea"
                />
                <button type="submit" className="btn-primary w-full justify-center">
                  Submit Resume
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
