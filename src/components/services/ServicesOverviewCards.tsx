"use client";

import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Cog,
  Languages,
  Package,
  ShieldCheck,
  Smartphone,
  UserPlus,
  Users,
  Workflow,
} from "lucide-react";
import { useState } from "react";

type SubService = {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
};

type CategoryCard = {
  number: string;
  title: string;
  description: string;
  href: string;
  exploreLabel: string;
  image: string;
  subServices: SubService[];
};

// Five solutions, in the same order and scope as the Home page.
// Staffing covers warehouse and logistics labor; automation means equipment
// applied in the mobile-device refurbishment process and AMR robots used in
// that facility, never general warehouse automation.
const categoryCards: CategoryCard[] = [
  {
    number: "01",
    title: "Direct Hire",
    description:
      "Executive, professional, technical and bilingual talent acquisition. Your company employs the hire.",
    href: "/services/direct-hire",
    exploreLabel: "Explore Direct Hire",
    image: "/images/global-business-support/korean-business-meeting.jpg",
    subServices: [
      {
        title: "Executive & Professional Search",
        description:
          "Leaders, managers, finance, supply chain and HR professionals.",
        icon: UserPlus,
        href: "/services/direct-hire",
      },
      {
        title: "Engineering & Technical Recruiting",
        description:
          "Equipment and field service engineers, technicians and specialists.",
        icon: Cog,
        href: "/services/direct-hire",
      },
      {
        title: "Korean–English Bilingual Talent",
        description:
          "Professionals who work across Korean headquarters and U.S. teams.",
        icon: Languages,
        href: "/services/direct-hire",
      },
    ],
  },
  {
    number: "02",
    title: "Staffing & Workforce",
    description:
      "Flexible staffing for logistics, warehouse, manufacturing and professional roles, with HR, payroll and attendance management.",
    href: "/services/workforce-solutions",
    exploreLabel: "Explore Staffing & Workforce",
    image: "/images/who-warehouse.jpeg",
    subServices: [
      {
        title: "Warehouse & Logistics Workforce",
        description:
          "Forklift operators, warehouse associates, shipping/receiving and inventory personnel.",
        icon: Package,
        href: "/services/workforce-solutions",
      },
      {
        title: "Manufacturing & Technical Workforce",
        description:
          "Production workers, technicians, testing and quality inspection staff.",
        icon: ShieldCheck,
        href: "/services/workforce-solutions",
      },
      {
        title: "Workforce Administration",
        description:
          "Recruitment, onboarding, payroll, benefits, attendance and workforce support.",
        icon: Users,
        href: "/services/workforce-solutions",
      },
    ],
  },
  {
    number: "03",
    title: "Managed Operations",
    description:
      "Engineering-led management of people, processes, quality and KPIs within a defined, contracted scope.",
    href: "/services/operations",
    exploreLabel: "Explore Managed Operations",
    image: "/images/its-hhp.png",
    subServices: [
      {
        title: "Site & Process Management",
        description:
          "Production and process oversight led by technical managers.",
        icon: Workflow,
        href: "/services/operations",
      },
      {
        title: "Quality & KPI Control",
        description:
          "Quality, productivity and cost tracked against agreed KPIs.",
        icon: ShieldCheck,
        href: "/services/operations",
      },
      {
        title: "Mobile Device Refurbishment",
        description:
          "Repair, testing, grading and packaging operations as a working example.",
        icon: Smartphone,
        href: "/services/operations",
      },
    ],
  },
  {
    number: "04",
    title: "Automation & Robotics",
    description:
      "Customized automation for mobile-device refurbishment processes, and AMR robots used in our facility.",
    href: "/services/automation-solutions",
    exploreLabel: "Explore Automation & Robotics",
    image: "/images/its-2025.png",
    subServices: [
      {
        title: "Custom Equipment",
        description:
          "Purpose-built and customized equipment for specific refurbishment tasks.",
        icon: Cog,
        href: "/services/automation-solutions",
      },
      {
        title: "Inspection & QA",
        description:
          "Systems and devices supporting repeatable checks and quality verification.",
        icon: ShieldCheck,
        href: "/services/automation-solutions",
      },
      {
        title: "AMR Robots",
        description:
          "Material movement within our refurbishment facility, with rental, sales and repair inquiries.",
        icon: Package,
        href: "/services/automation-solutions",
      },
    ],
  },
  {
    number: "05",
    title: "U.S. Market Entry",
    description:
      "Workforce planning, facility and production-line support and U.S. operational setup for Korean and global companies.",
    href: "/services/global-business-support",
    exploreLabel: "Explore U.S. Market Entry",
    image: "/images/its-2022.png",
    subServices: [
      {
        title: "Workforce Strategy & Hiring",
        description:
          "Executive, professional and operational hiring plans for a U.S. launch.",
        icon: Building2,
        href: "/services/global-business-support",
      },
      {
        title: "Line & Facility Setup Support",
        description:
          "Process and production-line planning and operational readiness.",
        icon: Workflow,
        href: "/services/global-business-support",
      },
      {
        title: "Ongoing Operational Support",
        description:
          "Bilingual coordination for daily operations after launch.",
        icon: Languages,
        href: "/services/global-business-support",
      },
    ],
  },
];

const FALLBACK_IMAGE = "/images/placeholder-photo.svg";

function CategoryCardImage({ src, alt }: { src: string; alt: string }) {
  const [imageSrc, setImageSrc] = useState(src);

  return (
    <Image
      src={imageSrc}
      alt={alt}
      fill
      sizes="120px"
      className="object-cover"
      onError={() => {
        if (imageSrc !== FALLBACK_IMAGE) {
          setImageSrc(FALLBACK_IMAGE);
        }
      }}
    />
  );
}

function CategoryOverviewCard({ card }: { card: CategoryCard }) {
  return (
    <article className="flex min-h-[340px] overflow-hidden rounded-[20px] border border-black/10 bg-white shadow-[0_8px_32px_rgba(15,23,42,0.05)]">
      <div className="flex min-w-0 flex-1 flex-col p-5 md:p-6">
        <div className="flex items-start gap-3">
          <span className="text-[28px] font-semibold leading-none tracking-[-0.04em] text-[#0A3A86] md:text-[30px]">
            {card.number}
          </span>
          <div>
            <h3 className="text-[21px] font-semibold tracking-[-0.03em] text-[#0B0F14] md:text-[22px]">
              {card.title}
            </h3>
            <p className="mt-1.5 text-[13px] leading-[1.6] text-neutral-500">
              {card.description}
            </p>
          </div>
        </div>

        <div className="mt-4 divide-y divide-black/[0.06] border-t border-black/[0.06]">
          {card.subServices.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="flex items-start gap-2.5 py-2.5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EEF3FA]">
                  <Icon
                    className="h-3.5 w-3.5 text-[#0A3A86]"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </span>

                <p className="min-w-0 text-[13px] leading-[1.45] text-neutral-500">
                  <span className="font-semibold text-[#0B0F14]">
                    {service.title}
                  </span>
                  {" — "}
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <Link
          href={card.href}
          className="mt-4 inline-flex items-center gap-1 text-[13px] font-medium text-[#0A3A86] transition hover:text-[#062A56]"
        >
          {card.exploreLabel}
          <span aria-hidden>→</span>
        </Link>
      </div>

      <div className="relative hidden w-[22%] shrink-0 border-l border-black/[0.05] md:block">
        <CategoryCardImage src={card.image} alt={card.title} />
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-5 bg-gradient-to-r from-white to-transparent"
          aria-hidden
        />
      </div>
    </article>
  );
}

export default function ServicesOverviewCards() {
  return (
    <section className="section-shell bg-[#FAFAF8]">
      <div className="layout-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0A3A86]">
            <span className="h-2 w-2 rounded-full bg-[#0A3A86]" aria-hidden />
            Service Overview
          </p>

          <h2 className="section-title mx-auto mt-5 max-w-[760px]">
            Five solutions, from a single hire to a fully managed operation.
          </h2>

          <p className="section-copy mx-auto mt-6 max-w-2xl">
            Direct hire, staffing and workforce management, managed
            operations, automation and U.S. market entry support, delivered by
            one partner.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-[1180px] gap-5 lg:grid-cols-2 lg:[&>*:last-child:nth-child(odd)]:col-span-2">
          {categoryCards.map((card) => (
            <CategoryOverviewCard key={card.number} card={card} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="#service-capabilities" className="btn-secondary">
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
