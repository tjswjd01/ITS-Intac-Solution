import { ArrowLink, Eyebrow } from "@/components/site/primitives";
import { comparison, type ComparisonCell } from "@/content/directHire";
import { cn } from "@/lib/utils";

/** One answer: who is responsible, then a short note. */
function Answer({ cell, onDark }: { cell: ComparisonCell; onDark: boolean }) {
  return (
    <>
      <span
        className={cn(
          "block text-[17px] font-semibold tracking-[-0.01em]",
          onDark ? "text-white" : "text-its-navy",
        )}
      >
        {cell.who}
      </span>
      <span className={cn("mt-1 block text-[14.5px] leading-[1.55]", onDark ? "text-[#C3CCD6]" : "text-its-slate-ink")}>
        {cell.note}
      </span>
    </>
  );
}

/** Phones: one card per model, each listing the same five responsibilities. */
function ModelCard({ model }: { model: "directHire" | "staffing" }) {
  const onDark = model === "directHire";
  const head = comparison[model];

  return (
    <div
      className={cn(
        "rounded-[22px] px-6 py-7",
        onDark ? "bg-its-navy shadow-[0_18px_40px_rgba(20,36,61,0.22)]" : "border border-[#D5DAE0] bg-white",
      )}
    >
      <h3 className={cn("text-[22px] font-semibold tracking-[-0.02em]", onDark ? "text-white" : "text-its-navy")}>
        {head.title}
      </h3>
      <p className={cn("mt-1 text-[15px]", onDark ? "text-[#C3CCD6]" : "text-its-slate-ink")}>{head.summary}</p>
      <dl className="mt-5">
        {comparison.rows.map((row) => (
          <div key={row.key} className={cn("border-t py-4", onDark ? "border-white/15" : "border-its-line")}>
            <dt
              className={cn(
                "text-[12px] font-semibold uppercase tracking-[0.12em]",
                onDark ? "text-its-soft-slate" : "text-its-slate-ink",
              )}
            >
              {row.label}
            </dt>
            <dd className="mt-1.5">
              <Answer cell={row[model]} onDark={onDark} />
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/** Who recruits, hires, onboards, pays and directs the work under each model. */
export default function HiringComparison() {
  const lastRow = comparison.rows.length + 1;

  return (
    <section aria-labelledby="compare-heading" className="bg-white py-20 md:py-28">
      <div className="layout-container">
        <div className="max-w-[620px]">
          <Eyebrow rule>{comparison.label}</Eyebrow>
          <h2
            id="compare-heading"
            className="mt-5 text-[clamp(2rem,3.6vw,3rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-its-navy"
          >
            {comparison.title}
          </h2>
          <p className="mt-5 text-[17px] leading-[1.7] text-its-slate-ink">{comparison.copy}</p>
        </div>

        {/* Tablet and desktop: a matrix with the Direct Hire column raised in navy. */}
        <div
          role="table"
          aria-labelledby="compare-heading"
          className="mt-14 hidden grid-cols-[minmax(0,0.8fr)_minmax(0,1.15fr)_minmax(0,1.15fr)] md:grid"
        >
          <div
            aria-hidden
            className="pointer-events-none -my-4 rounded-[26px] bg-its-navy shadow-[0_26px_60px_rgba(20,36,61,0.24)]"
            style={{ gridColumn: 2, gridRow: `1 / ${lastRow + 1}` }}
          />

          <div role="row" className="contents">
            <div role="columnheader" className="self-end pb-6 pr-6" style={{ gridColumn: 1, gridRow: 1 }}>
              <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-its-slate-ink">
                Who is responsible
              </span>
            </div>
            <div role="columnheader" className="relative px-8 pb-6 pt-3" style={{ gridColumn: 2, gridRow: 1 }}>
              <span className="block text-[24px] font-semibold tracking-[-0.025em] text-white">
                {comparison.directHire.title}
              </span>
              <span className="mt-1 block text-[15px] text-[#C3CCD6]">{comparison.directHire.summary}</span>
            </div>
            <div role="columnheader" className="px-8 pb-6 pt-3" style={{ gridColumn: 3, gridRow: 1 }}>
              <span className="block text-[24px] font-semibold tracking-[-0.025em] text-its-navy">
                {comparison.staffing.title}
              </span>
              <span className="mt-1 block text-[15px] text-its-slate-ink">{comparison.staffing.summary}</span>
            </div>
          </div>

          {comparison.rows.map((row, index) => (
            <div key={row.key} role="row" className="contents">
              <div
                role="rowheader"
                className="flex items-center border-t border-[#D5DAE0] py-6 pr-6 text-[16.5px] font-semibold tracking-[-0.01em] text-its-navy"
                style={{ gridColumn: 1, gridRow: index + 2 }}
              >
                {row.label}
              </div>
              <div
                role="cell"
                className="relative border-t border-white/15 px-8 py-6"
                style={{ gridColumn: 2, gridRow: index + 2 }}
              >
                <Answer cell={row.directHire} onDark />
              </div>
              <div
                role="cell"
                className="border-t border-[#D5DAE0] px-8 py-6"
                style={{ gridColumn: 3, gridRow: index + 2 }}
              >
                <Answer cell={row.staffing} onDark={false} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:hidden">
          <ModelCard model="directHire" />
          <ModelCard model="staffing" />
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-its-line pt-6 md:mt-14 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-[640px] text-[15.5px] leading-[1.6] text-its-slate-ink">{comparison.note.text}</p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <ArrowLink href={comparison.staffing.href}>{comparison.staffing.linkLabel}</ArrowLink>
            <ArrowLink href={comparison.note.href}>{comparison.note.label}</ArrowLink>
          </div>
        </div>
      </div>
    </section>
  );
}
