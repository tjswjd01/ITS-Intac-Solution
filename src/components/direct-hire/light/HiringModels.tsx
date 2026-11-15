import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Eyebrow } from "@/components/site/primitives";
import { modelsV3 } from "@/content/directHire";

/** Three-column comparison. Direct Hire (this page) is the outlined column.
 *  Rendered as a definition grid so it reads well on phones, one model after
 *  another, instead of a wide table. */
export default function HiringModels() {
  return (
    <section aria-labelledby="models-heading" className="bg-white py-16 md:py-24">
      <div className="layout-container">
        <div className="max-w-[680px]">
          <Eyebrow rule>{modelsV3.label}</Eyebrow>
          <h2
            id="models-heading"
            className="mt-5 text-[clamp(1.9rem,3.4vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.035em] text-its-navy"
          >
            {modelsV3.title}
          </h2>
          <p className="mt-4 text-[17px] leading-[1.7] text-its-slate-ink">{modelsV3.copy}</p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {modelsV3.columns.map((col) => {
            const current = "current" in col && col.current;
            return (
              <article
                key={col.key}
                className={`flex flex-col rounded-[24px] border bg-its-offwhite p-7 ${
                  current ? "border-its-periwinkle shadow-[0_18px_44px_rgba(90,116,201,0.12)]" : "border-its-line"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-[21px] font-semibold tracking-[-0.02em] text-its-navy">{col.title}</h3>
                    <p className="mt-1 text-[13.5px] text-its-slate-ink">{col.subtitle}</p>
                  </div>
                  {current ? (
                    <span className="rounded-full bg-its-periwinkle-soft px-2.5 py-1 text-[11.5px] font-semibold text-its-periwinkle-ink">
                      This page
                    </span>
                  ) : null}
                </div>

                <dl className="mt-6 space-y-5">
                  {modelsV3.rowLabels.map((label, i) => (
                    <div key={label} className="border-t border-its-line pt-4">
                      <dt className="text-[11.5px] font-semibold uppercase tracking-[0.12em] text-its-slate">{label}</dt>
                      <dd className={`mt-1.5 text-[14.5px] leading-[1.6] ${i === 0 ? "font-semibold text-its-navy" : "text-its-slate-ink"}`}>
                        {col.cells[i]}
                      </dd>
                    </div>
                  ))}
                </dl>

                {"href" in col && col.href ? (
                  <Link
                    href={col.href}
                    className="mt-auto inline-flex items-center gap-1.5 pt-7 text-[14.5px] font-semibold text-its-periwinkle-ink hover:underline"
                  >
                    About {col.title}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                ) : (
                  <span className="mt-auto pt-7" />
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
