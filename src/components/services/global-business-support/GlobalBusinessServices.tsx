"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Building2,
  ClipboardList,
  Factory,
  Warehouse,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import GlobalSectionHeader from "@/components/services/global-business-support/GlobalSectionHeader";
import {
  GBS_ACCENT,
  GBS_BODY,
  GBS_BORDER,
  GBS_HEADING,
} from "@/components/services/global-business-support/globalBusinessTheme";

type SupportCard = {
  title: string;
  description: string;
  image: string;
  fallback: string;
  icon: LucideIcon;
};

const supportCards: SupportCard[] = [
  {
    title: "Manufacturing & Production",
    description:
      "Production workforce deployment, line operators, supervisors, and quality support for U.S. facility launch and scale-up.",
    image: "/images/its-refurbish.png",
    fallback: "/images/its-hhp.png",
    icon: Factory,
  },
  {
    title: "Warehouse & Logistics",
    description:
      "Warehouse staffing, inventory operations, shipping and receiving, and fulfillment coordination across distribution networks.",
    image: "/images/who-warehouse.jpeg",
    fallback: "/images/who-team.jpeg",
    icon: Warehouse,
  },
  {
    title: "Office & Operational Coordination",
    description:
      "On-site operational coordination, bilingual communication, and structured support between Korean headquarters and U.S. teams.",
    image: "/images/global-business-support/korean-business-meeting.jpg",
    fallback: "/images/who-team.jpeg",
    icon: Building2,
  },
  {
    title: "Administrative Support",
    description:
      "HR coordination, payroll administration, executive assistance, and planning support for companies entering the U.S. market.",
    image: "/images/who-team.jpeg",
    fallback: "/images/its-hhp.png",
    icon: ClipboardList,
  },
];

const entranceEase = [0.22, 1, 0.36, 1] as const;

function SupportCardItem({
  card,
  index,
}: {
  card: SupportCard;
  index: number;
}) {
  const [imageSrc, setImageSrc] = useState(card.image);
  const Icon = card.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: entranceEase,
      }}
      className="group overflow-hidden rounded-3xl border bg-white shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)]"
      style={{ borderColor: GBS_BORDER }}
    >
      <div className="relative h-[200px] overflow-hidden rounded-t-3xl bg-[#F3F4F6]">
        <Image
          src={imageSrc}
          alt={card.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          onError={() => setImageSrc(card.fallback)}
        />
      </div>

      <div className="relative px-6 pb-7 pt-11">
        <div
          className="absolute -top-6 left-6 flex h-12 w-12 items-center justify-center rounded-full border bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
          style={{ borderColor: GBS_BORDER }}
        >
          <Icon
            className="h-5 w-5"
            style={{ color: GBS_ACCENT }}
            strokeWidth={1.75}
            aria-hidden
          />
        </div>

        <h3
          className="text-[17px] font-semibold tracking-[-0.03em]"
          style={{ color: GBS_HEADING }}
        >
          {card.title}
        </h3>

        <p
          className="mt-3 text-[15px] leading-[1.7]"
          style={{ color: GBS_BODY }}
        >
          {card.description}
        </p>
      </div>
    </motion.article>
  );
}

export default function GlobalBusinessServices() {
  return (
    <section
      id="what-we-support"
      className="border-t border-[#E5E7EB] bg-white py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto w-full min-w-0 max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <GlobalSectionHeader
          eyebrow="What We Support"
          title="End-to-End Support for U.S. Expansion"
          description="ITS supports Korean companies entering and operating in the United States through workforce deployment, operational coordination, administrative support, and facility readiness."
          descriptionClassName="max-w-[700px]"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {supportCards.map((card, index) => (
            <SupportCardItem key={card.title} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
