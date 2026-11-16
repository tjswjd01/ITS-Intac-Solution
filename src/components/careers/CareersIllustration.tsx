import { Check } from "lucide-react";

import { accents } from "./careerAccents";

type Highlight = { label: string; count: number };

/**
 * Original hero illustration: layered colour panels with recruiting UI cards
 * (a candidate card with an initials avatar, a match checklist and a small
 * open-roles card). No people and no photographs, so it cannot be mistaken
 * for real ITS staff. The open-roles card shows real counts from the jobs
 * data. Floating cards drift slowly and stay still under reduced motion.
 */
export default function CareersIllustration({ highlights = [] }: { highlights?: Highlight[] }) {
  return (
    <div className="relative mx-auto aspect-[10/9] w-full max-w-[520px]" aria-hidden>
      {/* layered panels */}
      <div className="absolute left-[14%] top-[6%] h-[84%] w-[70%] rotate-[9deg] rounded-[36px] bg-its-navy" />
      <div className="absolute left-[12%] top-[7%] h-[84%] w-[70%] rotate-[4deg] rounded-[36px]" style={{ backgroundColor: "#8FA3C4" }} />
      <div className="absolute left-[10%] top-[8%] h-[84%] w-[70%] rounded-[36px] border border-its-line bg-white shadow-[0_18px_40px_rgba(20,36,61,0.08)]" />

      {/* candidate card content */}
      <div className="absolute left-[10%] top-[8%] flex h-[84%] w-[70%] flex-col px-[7%] py-[8%]">
        <div className="flex items-center gap-3">
          <span
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-[15px] font-semibold"
            style={{ backgroundColor: accents.teal.bg, color: accents.teal.fg }}
          >
            AB
          </span>
          <div className="min-w-0 flex-1">
            <div className="h-2.5 w-[62%] rounded-full bg-its-navy/80" />
            <div className="mt-2 h-2 w-[44%] rounded-full bg-[#C9D2DC]" />
          </div>
        </div>

        <div className="mt-[9%] flex flex-wrap gap-1.5">
          {(["dusty", "teal", "slate", "coral"] as const).map((name, index) => (
            <span
              key={name}
              className="h-5 rounded-full"
              style={{ width: [58, 44, 66, 40][index], backgroundColor: accents[name].bg }}
            />
          ))}
        </div>

        <div className="mt-[9%] space-y-2.5">
          {[86, 70, 78, 54].map((width, index) => (
            <div key={index} className="h-2 rounded-full bg-[#E3E8EE]" style={{ width: `${width}%` }} />
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between rounded-2xl bg-its-offwhite px-4 py-3">
          <div className="h-2 w-[40%] rounded-full bg-[#C9D2DC]" />
          <span className="h-7 w-[34%] rounded-full bg-its-navy" />
        </div>
      </div>

      {/* floating match checklist */}
      <div className="absolute right-0 top-[4%] w-[40%] rounded-2xl border border-its-line bg-white p-3.5 shadow-[0_14px_34px_rgba(20,36,61,0.09)] motion-safe:animate-floatChart">
        {[0, 1, 2].map((row) => (
          <div key={row} className="flex items-center gap-2.5 py-1.5">
            <span
              className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full"
              style={
                row < 2
                  ? { backgroundColor: accents.teal.fg, color: "#fff" }
                  : { border: "1.5px solid #C9D2DC" }
              }
            >
              {row < 2 ? <Check className="h-3 w-3" strokeWidth={2.6} /> : null}
            </span>
            <span className="h-1.5 rounded-full bg-[#C9D2DC]" style={{ width: `${[74, 58, 66][row]}%` }} />
          </div>
        ))}
      </div>

      {/* floating open-roles card: real counts from the jobs data */}
      {highlights.length > 0 ? (
        <div className="absolute bottom-[3%] right-0 w-[46%] rounded-2xl border border-its-line bg-white p-3.5 shadow-[0_14px_34px_rgba(20,36,61,0.09)] motion-safe:animate-floatChart [animation-delay:-3s]">
          {highlights.slice(0, 3).map((item, index) => {
            const tone = accents[(["dusty", "coral", "slate"] as const)[index]];
            return (
              <div key={item.label} className="flex items-center gap-2.5 py-1">
                <span
                  className="flex h-7 min-w-7 items-center justify-center rounded-lg px-1.5 text-[13px] font-semibold tabular-nums"
                  style={{ backgroundColor: tone.bg, color: tone.fg }}
                >
                  {item.count}
                </span>
                <span className="truncate text-[11.5px] font-medium leading-tight text-its-navy">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      ) : null}

      {/* small accent dot */}
      <span className="absolute left-[3%] top-[30%] h-3 w-3 rounded-full bg-its-coral" />
    </div>
  );
}
