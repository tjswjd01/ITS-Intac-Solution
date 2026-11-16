import Image from "next/image";

import Reveal from "@/components/site/Reveal";
import { Eyebrow, StatementBand } from "@/components/site/primitives";

import { automationEquipment } from "./automationContent";

/** Front-view gallery of the equipment ITS designed and built for its own
 *  refurbishment line. Photos and names come from automationContent.ts. */
export default function AutomationEquipment() {
  return (
    <section aria-labelledby="equipment-heading" className="bg-its-offwhite py-16 md:py-20">
      <div className="layout-container">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-16">
          <div>
            <Eyebrow index={2}>{automationEquipment.label}</Eyebrow>
            <h2
              id="equipment-heading"
              className="mt-4 max-w-[560px] text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-its-navy"
            >
              {automationEquipment.title}
            </h2>
          </div>
          <p className="max-w-[520px] text-[16px] leading-[1.7] text-its-slate-ink lg:border-l lg:border-its-line lg:pl-8">
            {automationEquipment.intro}
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {automationEquipment.items.map((item, index) => (
            <li key={item.key}>
              <Reveal delay={index * 0.05} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-[18px] border border-its-line bg-white">
                  <div className="relative aspect-[4/3] border-b border-its-line bg-white">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-contain p-5"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-its-navy px-2.5 py-1 text-[11px] font-semibold tabular-nums text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-its-slate">
                      {item.role}
                    </p>
                    <h3 className="mt-2 text-[18px] font-semibold leading-[1.25] tracking-[-0.02em] text-its-navy">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-[14.5px] leading-[1.65] text-its-slate-ink">
                      {item.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <p className="mt-5 text-[13px] text-its-slate">{automationEquipment.note}</p>

        <StatementBand className="mt-8" highlight={automationEquipment.statement[1]}>
          {automationEquipment.statement[0]}
        </StatementBand>
      </div>
    </section>
  );
}
