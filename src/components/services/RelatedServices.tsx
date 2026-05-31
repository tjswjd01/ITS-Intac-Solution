"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FALLBACK_IMAGE = "/images/placeholder-photo.svg";

const relatedServices = [
  {
    id: "workforce-management",
    title: "Workforce Management",
    description:
      "Flexible workforce solutions supported by NEMO workforce visibility and operational coordination.",
    url: "/services/workforce-solutions",
    image: "/images/services/staffing.jpg",
  },
  {
    id: "automation-solutions",
    title: "Automation Solutions",
    description:
      "Automation programs designed to improve efficiency, consistency, and operational scalability.",
    url: "/services/automation-solutions",
    image: "/images/services/automation.jpg",
  },
  {
    id: "global-business-support",
    title: "Global Business Support",
    description:
      "Supporting international partners with sourcing, operations, and business expansion initiatives.",
    url: "/services/global-business-support",
    image: "/images/services/packaging-logistics.jpg",
  },
] as const;

function RelatedServiceCard({
  title,
  description,
  url,
  image,
}: (typeof relatedServices)[number]) {
  return (
    <Link
      href={url}
      className="group relative block h-[380px] overflow-hidden rounded-3xl border border-black/[0.06] bg-white shadow-[0_16px_48px_rgba(15,23,42,0.08)]"
    >
      <div className="relative h-full w-full overflow-hidden transition-all duration-500 group-hover:h-1/2">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
          onError={(event) => {
            event.currentTarget.src = FALLBACK_IMAGE;
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14]/75 via-[#0B0F14]/20 to-transparent transition-opacity duration-500 group-hover:opacity-80" />

        <div className="absolute bottom-0 left-0 w-full p-6 transition-opacity duration-500 group-hover:opacity-0">
          <h3 className="text-[22px] font-semibold leading-[1.15] tracking-[-0.03em] text-white">
            {title}
          </h3>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 flex h-0 w-full flex-col justify-center bg-white/95 px-6 backdrop-blur-sm transition-all duration-500 group-hover:h-1/2 group-hover:opacity-100 opacity-0">
        <h3 className="text-[20px] font-semibold leading-[1.15] tracking-[-0.03em] text-[#0B0F14]">
          {title}
        </h3>
        <p className="mt-3 text-[14px] leading-[1.65] text-[#64748B]">
          {description}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-[#0A3A86] transition-transform duration-300 group-hover:gap-3">
          Learn More
          <ArrowRight className="h-4 w-4" aria-hidden />
        </span>
      </div>
    </Link>
  );
}

export default function RelatedServices() {
  return (
    <section className="section-shell border-t border-black/[0.08] bg-white">
      <div className="layout-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0A3A86]">
            <span className="h-2 w-2 rounded-full bg-[#0A3A86]" aria-hidden />
            Explore More Services
          </p>

          <h2 className="section-title mx-auto mt-5 max-w-[760px]">
            Additional Solutions Designed to Support Your Operations
          </h2>

          <p className="section-copy mx-auto mt-6 max-w-2xl">
            Discover additional ITS services that help clients improve workforce
            management, automation readiness, and global operational support.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {relatedServices.map((service) => (
            <RelatedServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
