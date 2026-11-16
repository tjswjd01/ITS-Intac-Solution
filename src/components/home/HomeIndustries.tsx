import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Eyebrow, SectionTitle } from "@/components/site/primitives";

import { industries } from "./homeContent";

export default function HomeIndustries() {
  return (
    <section aria-labelledby="industries-heading" className="bg-white py-14 md:py-20">
      <div className="layout-container">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:gap-12">
          <div>
            <Eyebrow index={3}>{industries.eyebrow}</Eyebrow>
            <SectionTitle className="mt-3 text-[clamp(1.6rem,2.6vw,2.2rem)]">
              <span id="industries-heading">{industries.title}</span>
            </SectionTitle>
            <p className="mt-3 text-[16px] leading-[1.65] text-its-slate-ink">
              {industries.copy}
            </p>
          </div>

          <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {industries.items.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-its-line bg-white transition-colors hover:border-[#C9CFD8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-its-navy"
                >
                  <span className="relative block aspect-[16/10] bg-its-dusty-soft">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1024px) 18vw, 50vw"
                      className="object-cover"
                    />
                  </span>
                  <span className="flex flex-1 items-center justify-between gap-3 px-4 py-4">
                    <span className="text-[14.5px] font-semibold leading-[1.35] text-its-navy">
                      {item.label}
                    </span>
                    <ArrowRight
                      className="h-4 w-4 shrink-0 text-its-navy transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
                      aria-hidden
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
