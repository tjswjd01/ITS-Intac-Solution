import Image from "next/image";
import { Building2, Cog, Cpu, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { accentAt } from "@/components/site/accents";
import { Eyebrow, IconTile, SectionTitle, StatementBand } from "@/components/site/primitives";

import { statements, whyIts } from "./homeContent";

const icons: Record<(typeof whyIts.points)[number]["key"], LucideIcon> = {
  engineering: Cog,
  workforce: Users,
  enterprise: Building2,
  technology: Cpu,
};

export default function HomeWhyIts() {
  return (
    <section aria-labelledby="why-its-heading" className="bg-its-cool py-14 md:py-20">
      <div className="layout-container">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-its-dusty-soft lg:aspect-[5/4]">
            <Image
              src={whyIts.image}
              alt={whyIts.imageAlt}
              fill
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <Eyebrow index={2}>{whyIts.eyebrow}</Eyebrow>
            <SectionTitle className="mt-3 text-[clamp(1.6rem,2.6vw,2.2rem)]">
              <span id="why-its-heading">{whyIts.title}</span>
            </SectionTitle>
            <p className="mt-3 max-w-[620px] text-[16px] leading-[1.65] text-its-slate-ink">
              {whyIts.copy}
            </p>

            <ul className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {whyIts.points.map((point, index) => {
                const Icon = icons[point.key];
                return (
                  <li key={point.key} className="flex items-start gap-4">
                    <IconTile icon={Icon} accent={accentAt(index)} size="lg" />
                    <div>
                      <h3 className="text-[16.5px] font-semibold tracking-[-0.01em] text-its-navy">
                        {point.title}
                      </h3>
                      <p className="mt-1 text-[14.5px] leading-[1.6] text-its-slate-ink">
                        {point.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <StatementBand className="mt-12" highlight={statements.whyIts.highlight}>
          {statements.whyIts.text}
        </StatementBand>
      </div>
    </section>
  );
}
