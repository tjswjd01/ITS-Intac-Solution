"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import GlobalSectionHeader from "@/components/services/global-business-support/GlobalSectionHeader";

const supportAreas = [
  {
    title: "Manufacturing",
    description:
      "Production workforce planning, line operators, supervisors, and quality support for facility launch and scale-up.",
    image: "/images/its-refurbish.png",
  },
  {
    title: "Warehouse & Logistics",
    description:
      "Warehouse staffing, inventory support, shipping and receiving, packaging operations, and fulfillment coordination.",
    image: "/images/who-warehouse.jpeg",
  },
  {
    title: "Administrative Operations",
    description:
      "Office managers, HR coordinators, payroll administrators, and bilingual administrative support teams.",
    image: "/images/who-team.jpeg",
  },
  {
    title: "Consumer Products",
    description:
      "Operational support for product handling, inspection, packaging, distribution, and customer-facing operations.",
    image: "/images/its-qa.png",
  },
  {
    title: "Technical Support",
    description:
      "Field-ready technical personnel, equipment support teams, and operational coordination for service environments.",
    image: "/images/its-automation.jpeg",
  },
  {
    title: "Expansion Projects",
    description:
      "Facility startup support, workforce planning, site launch coordination, vendor alignment, and operational stabilization.",
    image: "/images/its-hhp.png",
  },
] as const;

export default function SupportAreasGrid() {
  return (
    <section
      id="support-areas"
      className="border-t border-[#E5E7EB] bg-[#FAFAFA] py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto w-full min-w-0 max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <GlobalSectionHeader
          eyebrow="Support Areas"
          title="End-to-end support for U.S. expansion."
          description="From manufacturing floors and warehouse operations to administrative teams and new facility launches, ITS supports the full scope of U.S. market entry and ongoing operations."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {supportAreas.map((area, index) => (
            <motion.article
              key={area.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white shadow-[0_4px_20px_rgba(15,23,42,0.04)]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F3F4F6]">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 400px"
                />
              </div>

              <div className="p-6 md:p-7">
                <h3 className="text-[17px] font-semibold tracking-[-0.03em] text-[#111827]">
                  {area.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.8] text-[#6B7280]">
                  {area.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
