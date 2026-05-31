"use client";

import Image from "next/image";
import { ArrowRight, Briefcase, Globe2, Settings, Users } from "lucide-react";

const services = [
  {
    title: "Operations",
    description:
      "End-to-end operational services including refurbishment, inspection, packaging, ATM support, and technical service workflows.",
    image: "/images/its-hhp.png",
    icon: Settings,
  },
  {
    title: "Workforce Solutions",
    description:
      "Operational workforce support for technical operations, warehouse environments, QA processes, logistics coordination, and office administration.",
    image: "/images/who-team.jpeg",
    icon: Users,
  },
  {
    title: "Automation Solutions",
    description:
      "Workflow optimization and semi-automation systems designed to improve efficiency, visibility, and operational consistency.",
    image: "/images/its-automation.jpeg",
    icon: Briefcase,
  },
  {
    title: "Global Business Support",
    description:
      "U.S. workforce setup and operational support for global companies expanding into the American market.",
    image: "/images/who-warehouse.jpeg",
    icon: Globe2,
  },
];

export default function IndustriesAndPartnersSection() {
  return (
    <section className="section-shell bg-[#FAFAF8]">
      <div className="layout-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
            <span className="h-2 w-2 rounded-full bg-[#235CFF]" />
            INDUSTRIES WE SERVE
          </p>

          <h2 className="mt-6 text-[clamp(1.85rem,3vw,2.65rem)] font-medium leading-[1.12] tracking-[-0.04em] text-black">
            We provide <span className="text-neutral-400">solutions</span>{" "}
            across key industries.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.85] text-neutral-500 md:text-[17px]">
            Our integrated services and operational support help businesses
            scale, adapt, and stay ahead in a constantly evolving world.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group overflow-hidden rounded-[22px] border border-black/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative h-[210px] w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>

                <div className="relative flex min-h-[270px] flex-col items-center px-7 pb-8 pt-10 text-center">
                  <div className="absolute -top-8 flex h-16 w-16 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm">
                    <Icon className="h-6 w-6 text-[#235CFF]" strokeWidth={1.8} />
                  </div>

                  <h3 className="text-[18px] font-semibold tracking-[-0.03em] text-black">
                    {service.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-neutral-500">
                    {service.description}
                  </p>
                </div>

                <div className="h-[3px] w-full bg-[#235CFF]" />
              </article>
            );
          })}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="/services"
            className="inline-flex min-w-[180px] items-center justify-center gap-2 rounded-full border border-black bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            View Our Services
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}