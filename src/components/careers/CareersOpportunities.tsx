import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

const openPositions = [
  {
    id: 1,
    position: "QA Inspector",
    location: "Dallas, TX",
    department: "Quality Assurance",
    type: "Full Time",
    posted: "May 24, 2025",
  },
  {
    id: 2,
    position: "Warehouse Associate",
    location: "Carrollton, TX",
    department: "Operations",
    type: "Full Time",
    posted: "May 24, 2025",
  },
  {
    id: 3,
    position: "Administrative Assistant",
    location: "Plano, TX",
    department: "Administration",
    type: "Full Time",
    posted: "May 22, 2025",
  },
  {
    id: 4,
    position: "ATM Technician",
    location: "Texas (Multiple)",
    department: "Technical Support",
    type: "Full Time",
    posted: "May 20, 2025",
  },
  {
    id: 5,
    position: "Field Service Specialist",
    location: "Texas (Multiple)",
    department: "Field Operations",
    type: "Full Time",
    posted: "May 18, 2025",
  },
];

const tableColumns = [
  "Position",
  "Location",
  "Department",
  "Type",
  "Posted",
] as const;

export default function CareersOpportunities() {
  return (
    <section
      id="open-positions"
      className="section-shell border-t border-[#E5E7EB]/80 bg-[#FAFAF8]"
    >
      <div className="layout-container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Current Opportunities</p>
            <h2 className="section-title mt-5 max-w-[640px]">
              Find your next opportunity at ITS.
            </h2>
          </div>

          <Link
            href="#open-positions"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#062A56] transition hover:text-[#0B3D91]"
          >
            View All Positions
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="mt-10 hidden overflow-hidden rounded-[24px] border border-[#DCE7F7] bg-white shadow-[0_16px_48px_rgba(6,42,86,0.07)] md:block">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr className="bg-[#062A56]">
                  {tableColumns.map((column) => (
                    <th
                      key={column}
                      scope="col"
                      className="px-5 py-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-white first:pl-6 last:pr-6"
                    >
                      {column}
                    </th>
                  ))}
                  <th scope="col" className="w-12 px-4 py-4">
                    <span className="sr-only">View position</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {openPositions.map((job, index) => (
                  <tr
                    key={job.id}
                    className={cn(
                      "transition hover:bg-[#F8FAFC]",
                      index !== openPositions.length - 1 &&
                        "border-b border-[#E5E7EB]",
                    )}
                  >
                    <td className="px-6 py-5 text-[15px] font-semibold text-[#0B0F14]">
                      {job.position}
                    </td>
                    <td className="px-5 py-5 text-sm text-[#64748B]">
                      {job.location}
                    </td>
                    <td className="px-5 py-5 text-sm text-[#64748B]">
                      {job.department}
                    </td>
                    <td className="px-5 py-5 text-sm text-[#64748B]">
                      {job.type}
                    </td>
                    <td className="px-5 py-5 text-sm text-[#64748B]">
                      {job.posted}
                    </td>
                    <td className="px-4 py-5 text-right">
                      <span className="inline-flex text-[#062A56]">
                        <ArrowRight className="h-5 w-5" aria-hidden />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-10 space-y-4 md:hidden">
          {openPositions.map((job) => (
            <article
              key={job.id}
              className="rounded-[20px] border border-[#DCE7F7] bg-white p-5 shadow-[0_12px_32px_rgba(6,42,86,0.06)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-[17px] font-semibold text-[#0B0F14]">
                    {job.position}
                  </h3>
                  <p className="mt-2 text-sm text-[#64748B]">{job.location}</p>
                </div>
                <ArrowRight
                  className="mt-1 h-5 w-5 shrink-0 text-[#062A56]"
                  aria-hidden
                />
              </div>

              <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#94A3B8]">
                    Department
                  </dt>
                  <dd className="mt-1 text-[#475569]">{job.department}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#94A3B8]">
                    Type
                  </dt>
                  <dd className="mt-1 text-[#475569]">{job.type}</dd>
                </div>
                <div className="col-span-2">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#94A3B8]">
                    Posted
                  </dt>
                  <dd className="mt-1 text-[#475569]">{job.posted}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
