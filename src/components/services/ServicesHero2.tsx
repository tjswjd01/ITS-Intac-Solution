"use client";

import Link from "next/link";
import { useState } from "react";

type AccordionItemData = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

const accordionItems: AccordionItemData[] = [
  {
    id: 1,
    title: "Mobile Refurbishment",
    description:
      "Repair, testing, grading, and restoration programs for mobile devices.",
    imageUrl: "/images/services/mobile-refurbishment.jpg",
  },
  {
    id: 2,
    title: "Quality Assurance",
    description:
      "Inspection and verification workflows designed to maintain consistent quality.",
    imageUrl: "/images/services/quality-inspection.jpg",
  },
  {
    id: 3,
    title: "Mail-in Service",
    description:
      "End-to-end customer repair support from intake to return delivery.",
    imageUrl: "/images/services/mobile-refurbishment.jpg",
  },
  {
    id: 4,
    title: "Workforce Management",
    description:
      "Operational staffing coordination for scalable business execution.",
    imageUrl: "/images/services/staffing.jpg",
  },
  {
    id: 5,
    title: "ATM Technical Support",
    description:
      "Field and depot support for ATM installation, maintenance, and service needs.",
    imageUrl: "/images/services/atm-support.jpg",
  },
  {
    id: 6,
    title: "Automation Solutions",
    description:
      "Workflow optimization and automation support for operational efficiency.",
    imageUrl: "/images/services/automation.jpg",
  },
  {
    id: 7,
    title: "Global Business Support",
    description:
      "Bilingual operational setup and support for Korean companies entering the U.S.",
    imageUrl: "/images/services/packaging-logistics.jpg",
  },
];

const FALLBACK_IMAGE = "/images/placeholder-photo.svg";
const DEFAULT_ACTIVE_INDEX = 0;

type AccordionItemProps = {
  item: AccordionItemData;
  isActive: boolean;
  onMouseEnter: () => void;
};

function AccordionItem({ item, isActive, onMouseEnter }: AccordionItemProps) {
  return (
    <div
      className={`relative h-[320px] shrink-0 cursor-pointer overflow-hidden rounded-2xl bg-black transition-all duration-700 ease-in-out sm:h-[400px] md:h-[460px] ${
        isActive ? "w-[280px] md:w-[380px]" : "w-16"
      }`}
      onMouseEnter={onMouseEnter}
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 h-full w-full object-cover brightness-75 saturate-50"
        onError={(event) => {
          const target = event.currentTarget;
          if (target.src.endsWith(FALLBACK_IMAGE)) return;
          target.onerror = null;
          target.src = FALLBACK_IMAGE;
        }}
      />

      <div className="absolute inset-0 bg-black/70" aria-hidden />

      {isActive ? (
        <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70">
            Featured Service
          </p>
          <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-white md:text-2xl">
            {item.title}
          </h3>
          <p className="mt-2 max-w-[300px] text-[13px] leading-[1.55] text-white/75 md:text-sm md:leading-6">
            {item.description}
          </p>
        </div>
      ) : (
        <span className="absolute bottom-24 left-1/2 w-auto -translate-x-1/2 rotate-90 whitespace-nowrap text-left text-base font-semibold text-white transition-all duration-300 ease-in-out md:text-lg">
          {item.title}
        </span>
      )}
    </div>
  );
}

export default function ServicesHero2() {
  const [activeIndex, setActiveIndex] = useState(DEFAULT_ACTIVE_INDEX);

  return (
    <section className="section-shell pt-32 md:pt-40">
      <div className="layout-container">
        <div className="premium-card overflow-hidden rounded-[32px] bg-white px-6 py-10 md:px-8 md:py-12 lg:px-10">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
            <div className="w-full text-center lg:w-[42%] lg:text-left">
              <p className="eyebrow justify-center lg:justify-start">
                <span className="h-2 w-2 rounded-full bg-[#0B3D91]" aria-hidden />
                Our Services
              </p>

              <h1 className="section-title mx-auto mt-5 max-w-[16ch] lg:mx-0">
                Operational services built for real-world execution.
              </h1>

              <p className="section-copy mx-auto mt-6 max-w-lg lg:mx-0">
                ITS supports operational workflows across refurbishment, quality
                assurance, workforce management, ATM technical support,
                automation, and global business support.
              </p>

              <div className="mt-8">
                <Link href="/contact" className="btn-primary">
                  Get In Touch
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-[58%]">
              <div className="flex flex-row items-center justify-start gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:justify-center md:gap-4 md:pb-0 [&::-webkit-scrollbar]:hidden">
                {accordionItems.map((item, index) => (
                  <AccordionItem
                    key={item.id}
                    item={item}
                    isActive={index === activeIndex}
                    onMouseEnter={() => setActiveIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
