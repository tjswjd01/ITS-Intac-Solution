import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { lightButtonClassName } from "@/components/site/primitives";
import { aboutCta } from "@/content/about";
import { cn } from "@/lib/utils";

const outlineOnDarkClassName =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-[15px] font-medium text-white transition-colors duration-200 hover:border-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

/** Compact navy closing section. Kept short on purpose. */
export default function AboutCta() {
  return (
    <section aria-labelledby="about-cta-heading" className="bg-its-navy py-14 md:py-16">
      <div className="layout-container">
        <div className="mx-auto flex max-w-[680px] flex-col items-center text-center">
          <h2
            id="about-cta-heading"
            className="text-[clamp(1.6rem,2.6vw,2.2rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-white"
          >
            {aboutCta.title}
          </h2>
          <p className="mt-4 max-w-[520px] text-[16.5px] leading-[1.65] text-[#C8D1DC]">{aboutCta.copy}</p>

          <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
            <Link href={aboutCta.primary.href} className={cn(lightButtonClassName, "min-w-[210px]")}>
              {aboutCta.primary.label}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link href={aboutCta.secondary.href} className={cn(outlineOnDarkClassName, "min-w-[170px]")}>
              {aboutCta.secondary.label}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
