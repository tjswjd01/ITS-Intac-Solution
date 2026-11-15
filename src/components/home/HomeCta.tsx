import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { lightButtonClassName } from "@/components/site/primitives";

import { closing } from "./homeContent";

/** Slim closing strip. Kept short on purpose. */
export default function HomeCta() {
  return (
    <section className="bg-its-cool pb-14 md:pb-16">
      <div className="layout-container">
        <div className="flex flex-col gap-5 rounded-[20px] bg-its-navy px-7 py-6 sm:px-10 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-8">
            <h2 className="text-[clamp(1.3rem,2vw,1.6rem)] font-semibold leading-[1.2] tracking-[-0.025em] text-white">
              {closing.title}
            </h2>
            <p className="max-w-[320px] text-[15px] leading-[1.55] text-[#C8D1DC] md:border-l md:border-white/25 md:pl-8">
              {closing.copy}
            </p>
          </div>
          <Link href={closing.cta.href} className={`${lightButtonClassName} min-h-11 shrink-0 self-start px-5 py-2.5 md:self-auto`}>
            {closing.cta.label}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
