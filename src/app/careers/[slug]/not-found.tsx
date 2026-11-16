import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Header from "@/components/Header";
import { Eyebrow, navyButtonClassName } from "@/components/site/primitives";

/** Shown for a job that has closed, been removed from Paycor, or never existed. */
export default function JobNotFound() {
  return (
    <main className="page-shell bg-its-offwhite">
      <Header />
      <section className="pb-20 pt-28 md:pb-28 md:pt-36">
        <div className="layout-container">
          <div className="max-w-[640px]">
            <Eyebrow>Careers at ITS</Eyebrow>
            <h1 className="mt-4 text-[clamp(1.9rem,3.6vw,2.6rem)] font-semibold leading-[1.1] tracking-[-0.035em] text-its-navy">
              This position is no longer available
            </h1>
            <p className="mt-4 text-[16.5px] leading-[1.7] text-its-slate-ink">
              The role may have been filled or closed. You can browse the
              positions that are open now.
            </p>
            <Link href="/careers#open-positions" className={`${navyButtonClassName} mt-8`}>
              View Open Positions
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
