import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Eyebrow, SectionTitle, navyButtonClassName } from "@/components/site/primitives";

import { automationFeatured, automationMedia } from "./automationContent";

export default function AutomationFeaturedAmr() {
  return (
    <section aria-labelledby="amr-heading" className="bg-white py-16 md:py-24">
      <div className="layout-container">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-14">
          <div className="overflow-hidden rounded-[20px] border border-its-line bg-its-navy">
            {/* Native controls so visitors can play, pause and go full screen.
                Nothing autoplays; the poster shows until play is pressed. */}
            <video
              controls
              playsInline
              muted
              loop
              preload="none"
              poster={automationMedia.amr.poster}
              aria-label={automationMedia.amr.alt}
              className="block aspect-video h-auto w-full object-cover"
            >
              <source src={automationMedia.amr.video} type="video/mp4" />
            </video>
          </div>

          <div>
            <Eyebrow>{automationFeatured.label}</Eyebrow>
            <SectionTitle className="mt-4">
              <span id="amr-heading">{automationFeatured.heading}</span>
            </SectionTitle>
            <p className="mt-5 text-[16.5px] leading-[1.7] text-its-slate-ink">
              {automationFeatured.body}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2" aria-label="AMR options to ask about">
              {automationFeatured.options.map((option) => (
                <li
                  key={option}
                  className="rounded-full border border-[#C9CFD8] bg-white px-4 py-2 text-[14px] font-medium text-its-navy"
                >
                  {option}
                </li>
              ))}
            </ul>

            <Link href={automationFeatured.cta.href} className={`${navyButtonClassName} mt-8`}>
              {automationFeatured.cta.label}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
