"use client";

import { motion } from "framer-motion";

import OperationsSectionHeader from "../operations/OperationsSectionHeader";

const supportAreas = [
  {
    title: "Manufacturing Operations",
    items: [
      "Production workforce staffing",
      "Line operators",
      "Supervisors",
      "Quality inspectors",
      "Production support personnel",
    ],
  },
  {
    title: "Warehouse & Logistics",
    items: [
      "Warehouse staffing",
      "Inventory support",
      "Shipping and receiving",
      "Packaging operations",
      "Fulfillment support",
    ],
  },
  {
    title: "Administrative Operations",
    items: [
      "Office managers",
      "HR coordinators",
      "Payroll administrators",
      "Administrative assistants",
      "Customer support representatives",
    ],
  },
  {
    title: "Expansion Projects",
    items: [
      "Facility startup support",
      "Workforce planning",
      "Site launch coordination",
      "Vendor coordination",
      "Operational stabilization",
    ],
  },
] as const;

export default function SupportAreasGrid() {
  return (
    <section
      id="support-areas"
      className="section-shell border-t border-black/[0.06] bg-white"
    >
      <div className="layout-container">
        <OperationsSectionHeader
          eyebrow="Support Areas"
          title="End-to-End Support for U.S. Expansion"
          description="From manufacturing floors and warehouse operations to administrative teams and new facility launches, ITS supports the full scope of U.S. market entry and ongoing operations."
          descriptionClassName="max-w-3xl"
          eyebrowTone="black"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:mt-14 xl:grid-cols-4">
          {supportAreas.map((area, index) => (
            <motion.article
              key={area.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="premium-card flex h-full flex-col p-6 md:p-7"
            >
              <h3 className="text-[17px] font-semibold tracking-[-0.03em] text-[#0B0F14]">
                {area.title}
              </h3>

              <ul className="mt-5 space-y-2.5" role="list">
                {area.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-[14px] leading-[1.65] text-[#64748B]"
                  >
                    <span
                      className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#0A3A86]"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
