import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { lightButtonClassName } from "@/components/site/primitives";
import { cta } from "@/content/directHire";

import { outlineOnDarkClassName } from "./DirectHireHero";
import PartnershipGraphic from "./PartnershipGraphic";

/** A contained navy card on a gray band, not another full-width dark banner. */
export default function DirectHireCta() {
  return (
    <section aria-labelledby="direct-hire-cta-heading" className="bg-its-warm py-14 md:py-20">
      <div className="layout-container">
        <div className="relative isolate overflow-hidden rounded-[28px] bg-its-navy px-7 py-12 sm:px-12 lg:px-16 lg:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-[-35%] -z-10 w-[120%] opacity-50 [mask-image:linear-gradient(90deg,transparent_15%,black_70%)] lg:right-[-8%] lg:w-[62%] lg:opacity-90"
          >
            <PartnershipGraphic className="h-full w-full" accent={false} />
          </div>

          <div className="max-w-[600px]">
            <h2
              id="direct-hire-cta-heading"
              className="text-[clamp(1.8rem,3.2vw,2.6rem)] font-semibold leading-[1.1] tracking-[-0.035em] text-white"
            >
              {cta.title}
            </h2>
            <p className="mt-4 max-w-[440px] text-[17px] leading-[1.65] text-[#CBD3DD]">{cta.copy}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={cta.primary.href} className={lightButtonClassName}>
                {cta.primary.label}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href={cta.secondary.href} className={outlineOnDarkClassName}>
                {cta.secondary.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
