import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bot, Cpu, Factory, Truck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import Header from "@/components/Header";
import {
  CtaBanner,
  PageHero,
  navyButtonClassName,
} from "@/components/site/primitives";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "ITS supports electronics and IT, logistics and supply chain, manufacturing and refurbishment, and automation and engineering operations across the United States.",
  alternates: { canonical: "/industries" },
};

// TODO(owner): review industry descriptions before publishing.
// Scope rules from the brief: warehouse and forklift staffing is a labor
// service, not automation. Automation means equipment applied in the device
// refurbishment process and the logistics robots operating in that facility.
const industries: {
  id: string;
  icon: LucideIcon;
  name: string;
  description: string;
  support: string[];
  solutions: { label: string; href: string }[];
}[] = [
  {
    id: "electronics",
    icon: Cpu,
    name: "Electronics / IT",
    description:
      "Device repair, refurbishment, testing and quality inspection programs, and the engineering and IT professionals behind them.",
    support: [
      "Repair and refurbishment line operations",
      "Testing and quality inspection",
      "Engineering and IT recruiting",
    ],
    solutions: [
      { label: "Managed Operations", href: "/services/operations" },
      { label: "Direct Hire", href: "/services/direct-hire" },
    ],
  },
  {
    id: "logistics",
    icon: Truck,
    name: "Logistics / Supply Chain",
    description:
      "Warehouse and logistics staffing with workforce management, plus supply chain and analyst recruiting.",
    support: [
      "Forklift operators and warehouse associates",
      "Shipping, receiving, inventory and material handling staff",
      "Supply chain and analyst recruiting",
    ],
    solutions: [
      { label: "Staffing & Workforce", href: "/services/workforce-solutions" },
      { label: "Direct Hire", href: "/services/direct-hire" },
    ],
  },
  {
    id: "manufacturing",
    icon: Factory,
    name: "Manufacturing / Refurbishment",
    description:
      "Manufacturing and production workers, line planning support, and engineering-led process and quality management.",
    support: [
      "Manufacturing and production workforce",
      "Process and production-line planning support",
      "Process, quality and KPI management",
    ],
    solutions: [
      { label: "Managed Operations", href: "/services/operations" },
      { label: "Staffing & Workforce", href: "/services/workforce-solutions" },
      { label: "U.S. Market Entry", href: "/services/global-business-support" },
    ],
  },
  {
    id: "automation",
    icon: Bot,
    name: "Automation / Engineering",
    description:
      "Customized equipment and automation applied in the mobile device refurbishment process, logistics robots operating in our refurbishment facility, and engineering talent.",
    support: [
      "Refurbishment-process equipment for inspection, testing and grading",
      "Logistics robots in refurbishment facility operations",
      "Engineering and field service recruiting",
    ],
    solutions: [
      { label: "Automation & Robotics", href: "/services/automation-solutions" },
      { label: "Direct Hire", href: "/services/direct-hire" },
    ],
  },
];

export default function IndustriesPage() {
  return (
    <main className="page-shell bg-its-offwhite">
      <Header />

      <PageHero
        eyebrow="Industries"
        title="Supporting Key Industries Across the U.S."
        copy="ITS works where people, process and technology meet on the operations floor. These are the industries we support today."
      >
        <Link href="/contact" className={navyButtonClassName}>
          Talk to Our Team
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </PageHero>

      <section aria-label="Industries" className="bg-white py-16 md:py-24">
        <div className="layout-container">
          <ul className="grid gap-5 md:grid-cols-2">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <li
                  key={industry.id}
                  id={industry.id}
                  className="flex scroll-mt-28 flex-col rounded-[28px] border border-its-line bg-its-offwhite p-7 lg:p-9"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#6E8196]">
                    <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden />
                  </span>
                  <h2 className="mt-6 text-[1.4rem] font-semibold leading-[1.2] tracking-[-0.025em] text-its-navy">
                    {industry.name}
                  </h2>
                  <p className="mt-3 text-[15.5px] leading-[1.7] text-its-slate-ink">
                    {industry.description}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-its-line pt-5">
                    {industry.support.map((line) => (
                      <li
                        key={line}
                        className="flex items-start gap-2.5 text-[14.5px] leading-[1.55] text-its-navy"
                      >
                        <span aria-hidden className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-its-mint" />
                        {line}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap gap-2 pt-7">
                    {industry.solutions.map((solution) => (
                      <Link
                        key={solution.href}
                        href={solution.href}
                        className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-[#C9CFD8] bg-white px-4 py-2 text-[13.5px] font-medium text-its-navy transition-colors hover:border-its-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-its-navy"
                      >
                        {solution.label}
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                      </Link>
                    ))}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <div className="bg-its-offwhite pt-16 md:pt-20">
        <CtaBanner
          title="Don’t See Your Industry?"
          copy="Tell us about your operation and we will let you know how ITS can help."
        />
      </div>
    </main>
  );
}
