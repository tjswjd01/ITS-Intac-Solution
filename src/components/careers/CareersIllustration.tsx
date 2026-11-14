/**
 * Original hero illustration: a job-platform screen built from simple shapes.
 * No people and no photographs, so it cannot be mistaken for real ITS staff.
 * The two floating cards drift slowly and stay still under reduced motion.
 */
export default function CareersIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[540px]" aria-hidden>
      <div className="absolute -right-4 top-6 h-[78%] w-[78%] rounded-[48px] bg-[#E3EAE8]" />

      <svg viewBox="0 0 540 420" className="relative w-full" role="presentation">
        {/* browser window */}
        <rect x="40" y="36" width="400" height="300" rx="22" fill="#FFFFFF" stroke="#D9DEE4" strokeWidth="1.5" />
        <rect x="40" y="36" width="400" height="44" rx="22" fill="#F1F3F3" />
        <rect x="40" y="62" width="400" height="18" fill="#F1F3F3" />
        <circle cx="66" cy="58" r="5" fill="#C9D2DC" />
        <circle cx="84" cy="58" r="5" fill="#C9D2DC" />
        <circle cx="102" cy="58" r="5" fill="#C9D2DC" />
        <rect x="150" y="50" width="180" height="16" rx="8" fill="#FFFFFF" stroke="#D9DEE4" />

        {/* search row */}
        <rect x="66" y="100" width="258" height="34" rx="17" fill="#F7F6F3" stroke="#D9DEE4" />
        <circle cx="86" cy="117" r="6" fill="none" stroke="#A5B5C5" strokeWidth="2" />
        <path d="M90.5 121.5l4 4" stroke="#A5B5C5" strokeWidth="2" strokeLinecap="round" />
        <rect x="102" y="113" width="96" height="8" rx="4" fill="#C9D2DC" />
        <rect x="334" y="100" width="80" height="34" rx="17" fill="#14243D" />
        <rect x="352" y="113" width="44" height="8" rx="4" fill="#FFFFFF" opacity="0.85" />

        {/* job rows */}
        {[0, 1, 2].map((row) => (
          <g key={row} transform={`translate(0 ${row * 58})`}>
            <rect x="66" y="152" width="348" height="46" rx="12" fill="#FFFFFF" stroke="#E3E5E8" />
            <rect x="80" y="164" width="22" height="22" rx="6" fill="#EDF1F5" />
            <rect x="114" y="165" width={[150, 118, 168][row]} height="8" rx="4" fill="#14243D" opacity="0.82" />
            <rect x="114" y="179" width={[96, 132, 84][row]} height="6" rx="3" fill="#C9D2DC" />
            <rect x="350" y="167" width="50" height="16" rx="8" fill="#EDF1F5" />
          </g>
        ))}
      </svg>

      {/* floating checklist card */}
      <div className="absolute right-0 top-[8%] w-[42%] rounded-2xl border border-its-line bg-white p-4 shadow-[0_14px_34px_rgba(20,36,61,0.08)] motion-safe:animate-floatChart">
        {[0, 1, 2].map((row) => (
          <div key={row} className="flex items-center gap-2.5 py-1.5">
            <span
              className={
                row < 2
                  ? "flex h-4 w-4 shrink-0 items-center justify-center rounded bg-its-coral"
                  : "h-4 w-4 shrink-0 rounded border border-its-dusty"
              }
            >
              {row < 2 ? (
                <svg viewBox="0 0 12 12" className="h-2.5 w-2.5">
                  <path d="M2.5 6.2l2.3 2.3 4.7-5" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : null}
            </span>
            <span className="h-1.5 rounded-full bg-its-dusty" style={{ width: `${[78, 60, 70][row]}%` }} />
          </div>
        ))}
      </div>

      {/* floating chart card */}
      <div className="absolute bottom-[4%] right-[6%] w-[36%] rounded-2xl border border-its-line bg-white p-4 shadow-[0_14px_34px_rgba(20,36,61,0.08)] motion-safe:animate-floatChart [animation-delay:-3s]">
        <div className="h-1.5 w-1/2 rounded-full bg-its-dusty" />
        <div className="mt-3 flex h-14 items-end gap-2">
          {[40, 62, 52, 84].map((height, index) => (
            <span
              key={index}
              className={index === 3 ? "flex-1 rounded-t bg-its-navy" : "flex-1 rounded-t bg-its-dusty"}
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
