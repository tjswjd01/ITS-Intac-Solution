import { Check } from "lucide-react";

/**
 * Light hero visual: a soft panel with a candidate-shortlist UI card.
 * Initials only, no portraits, so nobody can be mistaken for ITS staff
 * or a real candidate. Floating cards stay still under reduced motion.
 */
export default function ShortlistIllustration() {
  const rows = [
    { initials: "JK", width: "62%", tag: "Verified" },
    { initials: "SM", width: "48%", tag: "Verified" },
    { initials: "DH", width: "56%", tag: "In review" },
  ];
  return (
    <div className="relative mx-auto aspect-[10/9] w-full max-w-[560px]" aria-hidden>
      {/* soft backdrop shape */}
      <div className="absolute inset-x-[6%] bottom-0 top-[4%] rounded-[48px] bg-[#E6ECF6]" />
      <div className="absolute right-0 top-[18%] h-[52%] w-[46%] rounded-[40px] bg-its-coral-soft" />

      {/* main shortlist card */}
      <div className="absolute left-[8%] top-[14%] w-[66%] rounded-[24px] border border-its-line bg-white p-5 shadow-[0_18px_44px_rgba(20,36,61,0.08)] sm:p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="h-2 w-24 rounded-full bg-its-navy/80" />
            <div className="mt-2 h-1.5 w-16 rounded-full bg-[#C9D2DC]" />
          </div>
          <span className="rounded-full bg-its-coral-soft px-2.5 py-1 text-[11px] font-semibold text-its-coral-ink">
            Shortlist
          </span>
        </div>
        <ul className="mt-5 space-y-2.5">
          {rows.map((row) => (
            <li key={row.initials} className="flex items-center gap-3 rounded-2xl border border-its-line px-3 py-2.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E6ECF6] text-[12px] font-semibold text-its-navy">
                {row.initials}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block h-2 rounded-full bg-its-navy/70" style={{ width: row.width }} />
                <span className="mt-1.5 block h-1.5 w-[38%] rounded-full bg-[#D5DCE5]" />
              </span>
              <span
                className={`shrink-0 rounded-full px-2 py-0.5 text-[10.5px] font-medium ${
                  row.tag === "Verified" ? "bg-[#E4F0EE] text-[#3F6F68]" : "bg-its-offwhite text-its-slate-ink"
                }`}
              >
                {row.tag}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-5 flex items-center justify-between rounded-2xl bg-its-offwhite px-4 py-3">
          <span className="h-1.5 w-[36%] rounded-full bg-[#C9D2DC]" />
          <span className="h-7 w-[32%] rounded-full bg-its-coral" />
        </div>
      </div>

      {/* floating screening checklist */}
      <div className="absolute right-[2%] top-[6%] w-[36%] rounded-2xl border border-its-line bg-white p-3.5 shadow-[0_14px_34px_rgba(20,36,61,0.09)] motion-safe:animate-floatChart">
        <p className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-its-slate">Screening</p>
        {["Experience", "Technical", "Job fit"].map((label, index) => (
          <div key={label} className="mt-2 flex items-center gap-2">
            <span
              className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full ${
                index < 2 ? "bg-its-navy text-white" : "border-[1.5px] border-[#C9D2DC]"
              }`}
            >
              {index < 2 ? <Check className="h-3 w-3" strokeWidth={2.6} /> : null}
            </span>
            <span className="text-[12px] font-medium text-its-navy">{label}</span>
          </div>
        ))}
      </div>

      {/* floating offer card */}
      <div className="absolute bottom-[6%] right-[4%] w-[40%] rounded-2xl border border-its-line bg-white p-3.5 shadow-[0_14px_34px_rgba(20,36,61,0.09)] motion-safe:animate-floatChart [animation-delay:-3s]">
        <p className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-its-slate">Offer & onboarding</p>
        <div className="mt-2 flex items-end gap-1.5">
          {[36, 52, 44, 70, 86].map((h, i) => (
            <span
              key={i}
              className={`flex-1 rounded-t ${i === 4 ? "bg-its-coral" : "bg-[#D5DCE5]"}`}
              style={{ height: `${h * 0.5}px` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
