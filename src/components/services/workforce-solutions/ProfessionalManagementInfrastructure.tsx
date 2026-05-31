"use client";

import { motion } from "framer-motion";
import {
  Calculator,
  ClipboardList,
  FileText,
  GitBranch,
  Settings2,
  UserCog,
} from "lucide-react";

import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

type InfrastructureItem = {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  pattern: Array<[number, number]>;
};

const infrastructureItems: InfrastructureItem[] = [
  {
    title: "Certified HR Oversight",
    description:
      "SHRM-CP certified HR professionals support recruitment, onboarding, policy alignment, and workforce administration.",
    icon: UserCog,
    pattern: [
      [7, 1],
      [8, 3],
      [9, 2],
      [10, 4],
      [7, 5],
    ],
  },
  {
    title: "CPA-Backed Administration",
    description:
      "In-house CPA oversight adds financial visibility and administrative control to workforce programs.",
    icon: Calculator,
    pattern: [
      [7, 2],
      [9, 1],
      [8, 4],
      [10, 3],
      [7, 5],
    ],
  },
  {
    title: "Payroll Coordination",
    description:
      "Structured payroll support for multi-shift teams, temporary labor, and operational workforce programs.",
    icon: ClipboardList,
    pattern: [
      [8, 1],
      [7, 3],
      [9, 4],
      [10, 2],
      [8, 5],
    ],
  },
  {
    title: "Compliance Documentation",
    description:
      "Documentation and reporting support designed to help workforce programs stay organized and audit-ready.",
    icon: FileText,
    pattern: [
      [8, 2],
      [7, 4],
      [9, 3],
      [10, 1],
      [8, 5],
    ],
  },
  {
    title: "Administrative Control",
    description:
      "Internal processes for attendance records, worker status, assignment tracking, and issue follow-up.",
    icon: Settings2,
    pattern: [
      [7, 2],
      [8, 4],
      [9, 1],
      [10, 3],
      [8, 5],
    ],
  },
  {
    title: "Reporting Structure",
    description:
      "Clear reporting channels that connect field activity, workforce administration, and client communication.",
    icon: GitBranch,
    pattern: [
      [7, 1],
      [9, 2],
      [8, 4],
      [10, 3],
      [7, 5],
    ],
  },
];

function ManagementFeatureCard({
  item,
  className,
}: {
  item: InfrastructureItem;
  className?: string;
}) {
  const Icon = item.icon;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-black/[0.08] bg-white p-6",
        className,
      )}
    >
      <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F14]/[0.04] to-[#0B0F14]/[0.01] opacity-100 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
          <GridPattern
            width={20}
            height={20}
            x={-12}
            y={4}
            squares={item.pattern}
            className="absolute inset-0 h-full w-full fill-[#0B0F14]/[0.05] stroke-[#0B0F14]/[0.12] mix-blend-overlay"
          />
        </div>
      </div>

      <Icon
        className="relative z-10 h-6 w-6 text-[#0A3A86]"
        strokeWidth={1.5}
        aria-hidden
      />

      <h3 className="relative z-10 mt-8 text-[15px] font-semibold tracking-[-0.02em] text-[#0B0F14] md:text-base">
        {item.title}
      </h3>

      <p className="relative z-10 mt-2 text-[13px] font-normal leading-[1.65] text-[#64748B] md:text-sm">
        {item.description}
      </p>
    </div>
  );
}

export default function ProfessionalManagementInfrastructure() {
  return (
    <section
      id="management-infrastructure"
      className="relative overflow-hidden border-t border-black/[0.06] bg-white py-16 md:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <GridPattern
          width={40}
          height={40}
          className="fill-gray-400/[0.06] stroke-gray-400/[0.1]"
        />
      </div>

      <div className="layout-container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#111111]">
            <span className="h-2 w-2 rounded-full bg-[#111111]" aria-hidden />
            Professional Management Infrastructure
          </p>

          <h2 className="section-title mx-auto mt-5 max-w-[760px]">
            The management structure behind reliable workforce operations.
          </h2>

          <p className="section-copy mx-auto mt-6 max-w-2xl">
            ITS supports workforce programs with professional HR oversight,
            financial administration, payroll coordination, compliance
            documentation, and reporting systems that help keep operations
            organized and accountable.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:mt-14 lg:grid-cols-3 lg:gap-5">
          {infrastructureItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <ManagementFeatureCard item={item} className="h-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
