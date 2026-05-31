"use client";

import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Cog,
  Languages,
  Mail,
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

const categoryCards: CategoryCard[] = [
  {
    number: "01",
    title: "Operations",
    description:
      "End-to-end device lifecycle management from intake to return delivery.",
    href: "/services/operations",
    exploreLabel: "Explore Operations",
    image: "/images/services/mobile-refurbishment.jpg",
    subServices: [
      {
        title: "Mobile Refurbishment",
        description:
          "Repair, testing, grading, and restoration of mobile devices.",
        icon: Smartphone,
        href: "/services/operations",
      },
      {
        title: "Quality Assurance",
        description:
          "Inspection and verification workflows for consistent quality.",
        icon: ShieldCheck,
        href: "/services/operations",
      },
      {
        title: "Mail-in Service",
        description:
          "End-to-end customer repair support from intake to return.",
        icon: Mail,
        href: "/services/operations",
      },
      {
        title: "Packaging & Operational Support",
        description:
          "Secure packaging, kitting, and operational execution support.",
        icon: Package,
        href: "/services/operations",
      },
    ],
  },
  {
    number: "02",
    title: "Workforce Solutions",
    description:
      "Scalable workforce programs designed to support warehouse, refurbishment, quality assurance, and operational environments.",
    href: "/services/workforce-solutions",
    exploreLabel: "Explore Workforce Solutions",
    image: "/images/services/staffing.jpg",
    subServices: [
      {
        title: "Warehouse Workforce",
        description:
          "Warehouse operations staffing, material handling, inventory support, and logistics workforce programs.",
        icon: Package,
        href: "/services/workforce-solutions",
      },
      {
        title: "RB & QA Workforce",
        description:
          "Refurbishment, testing, inspection, and quality assurance workforce support for operational environments.",
        icon: ShieldCheck,
        href: "/services/workforce-solutions",
      },
      {
        title: "Workforce Coordination",
        description:
          "Recruitment, onboarding, scheduling, attendance tracking, and workforce management support.",
        icon: UserPlus,
        href: "/services/workforce-solutions",
      },
    ],
  },
  {
    number: "03",
    title: "Automation Solutions",
    description:
      "Automation technologies and process improvement solutions designed to increase operational efficiency and scalability.",
    href: "/services/automation-solutions",
    exploreLabel: "Explore Automation Solutions",
    image: "/images/services/automation.jpg",
    subServices: [
      {
        title: "Customized Automation Systems",
        description:
          "Custom-designed automation equipment and workflow solutions tailored to client operational requirements.",
        icon: Cog,
        href: "/services/automation-solutions",
      },
      {
        title: "Robotics & Smart Operations",
        description:
          "AMR robotics, material movement automation, and smart operational technologies designed to improve productivity and efficiency.",
        icon: Package,
        href: "/services/automation-solutions",
      },
      {
        title: "Process Optimization",
        description:
          "Workflow analysis, process improvement, and operational optimization programs focused on scalability, efficiency, and execution quality.",
        icon: Workflow,
        href: "/services/automation-solutions",
      },
    ],
  },
  {
    number: "04",
    title: "Global Business Support",
    description:
      "End-to-end support for Korean companies entering and establishing their business in the U.S.",
    href: "/services/global-business-support",
    exploreLabel: "Explore Global Business Support",
    image: "/images/services/packaging-logistics.jpg",
    subServices: [
      {
        title: "U.S. Business Setup",
        description:
          "Entity setup, compliance, facility and line setup, and operational infrastructure support.",
        icon: Building2,
        href: "/services/global-business-support",
      },
      {
        title: "Workforce Setup & Management",
        description:
          "Recruitment, onboarding, HR administration, and ongoing workforce management.",
        icon: Users,
        href: "/services/global-business-support",
      },
      {
        title: "Ongoing Operational Support",
        description:
          "Bilingual support for daily operations and continuous business success.",
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
            Four Core Service Categories. End-to-End Support.
          </h2>

          <p className="section-copy mx-auto mt-6 max-w-2xl">
            ITS provides structured operational support across device lifecycle
            management, workforce coordination, automation, and global business
            expansion.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-[1180px] gap-5 lg:grid-cols-2">
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
