import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bot, Globe, Layers, Settings, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { accentAt, accents } from "@/components/site/accents";
import { Eyebrow, SectionTitle, StatementBand, outlineButtonClassName } from "@/components/site/primitives";
import Reveal from "@/components/site/Reveal";

import { solutions, solutionsIntro, type SolutionKey, statements } from "./homeContent";

const icons: Record<SolutionKey, LucideIcon> = {
  "direct-hire": Users,
  staffing: Layers,
  "managed-operations": Settings,
  automation: Bot,
  "market-entry": Globe,
};

export default function HomeSolutions() {
  return (
    <section id="solutions" aria-labelledby="solutions-heading" className="bg-white py-14 md:py-20">
      <div className="layout-container">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[680px]">
            <Eyebrow index={1}>{solutionsIntro.eyebrow}</Eyebrow>
            <SectionTitle className="mt-3 text-[clamp(1.6rem,2.6vw,2.2rem)]">
              <span id="solutions-heading">{solutionsIntro.title}</span>
            </SectionTitle>
            <p className="mt-3 text-[16px] leading-[1.65] text-its-slate-ink">
              {solutionsIntro.copy}
            </p>
          </div>
          <Link href={solutionsIntro.link.href} className={`${outlineButtonClassName} shrink-0 self-start md:self-auto`}>
            {solutionsIntro.link.label}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <ul className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {solutions.map((item, index) => {
            const Icon = icons[item.key];
            return (
              <li key={item.key} className="flex">
                <Reveal delay={index * 0.04} className="flex w-full">
                  <Link
                    href={item.href}
                    className="group flex w-full flex-col overflow-hidden rounded-[20px] border border-its-line bg-white transition-[border-color,box-shadow] duration-200 hover:border-[#C9CFD8] hover:shadow-[0_14px_34px_rgba(20,36,61,0.07)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-its-navy"
                  >
                    <span className="relative block aspect-[16/10] bg-its-dusty-soft">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </span>
                    <span className="relative flex flex-1 flex-col px-5 pb-5 pt-8">
                      <span
                        className="absolute -top-5 left-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white shadow-[0_6px_16px_rgba(20,36,61,0.08)]"
                        style={{ backgroundColor: accents[accentAt(index)].bg, color: accents[accentAt(index)].fg }}
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden />
                      </span>
                      <span className="text-[17px] font-semibold leading-[1.25] tracking-[-0.02em] text-its-navy">
                        {item.title}
                      </span>
                      <span className="mt-2 text-[14px] leading-[1.6] text-its-slate-ink">
                        {item.description}
                      </span>
                      <span className="mt-auto flex justify-end pt-4">
                        <ArrowRight
                          className="h-4 w-4 text-its-navy transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
                          aria-hidden
                        />
                      </span>
                    </span>
                  </Link>
                </Reveal>
              </li>
            );
          })}
        </ul>

        <StatementBand className="mt-8" highlight={statements.solutions.highlight}>
          {statements.solutions.text}
        </StatementBand>
      </div>
    </section>
  );
}
