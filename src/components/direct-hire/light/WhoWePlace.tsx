import { ArrowRight, Briefcase, Cpu, HardHat, type LucideIcon } from "lucide-react";

import Reveal from "@/components/site/Reveal";
import { Eyebrow } from "@/components/site/primitives";
import { placement, specializations } from "@/content/directHire";

const tierIcons: Record<(typeof placement.tiers)[number]["key"], LucideIcon> = {
  core: Briefcase,
  specialized: Cpu,
  scalable: HardHat,
};

/** Bento row: a navy "Core" card, two light tier cards, then a wide chip card
 *  with the functions ITS recruits for. */
export default function WhoWePlace() {
  return (
    <section id="specializations" aria-labelledby="placement-heading" className="bg-white py-16 md:py-24">
      <div className="layout-container">
        <div className="max-w-[640px]">
          <Eyebrow rule>{placement.label}</Eyebrow>
          <h2
            id="placement-heading"
            className="mt-5 text-[clamp(1.9rem,3.4vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.035em] text-its-navy"
          >
            {placement.title}
          </h2>
          <p className="mt-4 text-[17px] leading-[1.7] text-its-slate-ink">{placement.copy}</p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {placement.tiers.map((tier, index) => {
            const Icon = tierIcons[tier.key];
            const featured = "featured" in tier && tier.featured;
            return (
              <Reveal key={tier.key} delay={index * 0.05} className="h-full">
                <article
                  className={`flex h-full flex-col rounded-[24px] p-7 ${
                    featured ? "bg-its-navy text-white" : "border border-its-line bg-its-offwhite"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[11.5px] font-semibold uppercase tracking-[0.14em] ${
                        featured ? "text-[#AFC0E6]" : "text-its-periwinkle-ink"
                      }`}
                    >
                      {tier.tag}
                    </span>
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-[10px] ${
                        featured ? "bg-white/10 text-white" : "bg-white text-its-periwinkle-ink"
                      }`}
                    >
                      <Icon className="h-4 w-4" strokeWidth={1.7} aria-hidden />
                    </span>
                  </div>
                  <h3 className={`mt-6 text-[22px] font-semibold tracking-[-0.02em] ${featured ? "text-white" : "text-its-navy"}`}>
                    {tier.title}
                  </h3>
                  <ul className={`mt-4 space-y-2 text-[15px] leading-[1.55] ${featured ? "text-[#CBD3E6]" : "text-its-slate-ink"}`}>
                    {tier.roles.map((role) => (
                      <li key={role} className="flex gap-2.5">
                        <span className={`mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full ${featured ? "bg-[#AFC0E6]" : "bg-its-periwinkle"}`} />
                        {role}
                      </li>
                    ))}
                  </ul>
                  <p
                    className={`mt-auto pt-7 text-[13px] font-medium ${featured ? "text-[#AFC0E6]" : "text-its-slate-ink"}`}
                  >
                    Model <span className={featured ? "text-white" : "text-its-navy"}>{tier.model}</span>
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-4 flex flex-col gap-5 rounded-[24px] border border-its-line bg-white px-7 py-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-[15px] font-semibold text-its-navy">{placement.specializationsTitle}</p>
          <ul className="flex flex-wrap gap-2">
            {specializations.items.map((item) => (
              <li
                key={item.key}
                className="rounded-full border border-its-line bg-its-offwhite px-3.5 py-1.5 text-[13.5px] font-medium text-its-navy"
              >
                {item.label}
              </li>
            ))}
          </ul>
          <a
            href="#process"
            className="inline-flex shrink-0 items-center gap-1.5 text-[14.5px] font-semibold text-its-periwinkle-ink hover:underline"
          >
            See how we recruit
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
