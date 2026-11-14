/**
 * Original illustrations for the Direct Hire page: candidate profile cards
 * built from simple shapes. No photographs and no faces, so nothing here can
 * be mistaken for a real ITS employee, candidate or client.
 */

function ProfileCard({
  tag,
  widths,
  highlight = false,
  className = "",
}: {
  tag: string;
  widths: [number, number];
  highlight?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border bg-white p-4 shadow-[0_14px_34px_rgba(20,36,61,0.07)] ${
        highlight ? "border-its-navy" : "border-its-line"
      } ${className}`}
    >
      <div className="flex items-center gap-3">
        <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-its-dusty-soft">
          <span className="absolute left-1/2 top-[9px] h-4 w-4 -translate-x-1/2 rounded-full bg-its-dusty" />
          <span className="absolute -bottom-3 left-1/2 h-7 w-9 -translate-x-1/2 rounded-full bg-its-dusty" />
        </span>
        <div className="min-w-0 flex-1 space-y-2">
          <span className="block h-2 rounded-full bg-its-navy/80" style={{ width: `${widths[0]}%` }} />
          <span className="block h-1.5 rounded-full bg-[#C9D2DC]" style={{ width: `${widths[1]}%` }} />
        </div>
        {highlight ? (
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-its-coral">
            <svg viewBox="0 0 12 12" className="h-3 w-3">
              <path d="M2.5 6.2l2.3 2.3 4.7-5" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        ) : null}
      </div>
      <span className="mt-3 inline-block rounded-full bg-its-dusty-soft px-2.5 py-1 text-[11.5px] font-medium text-its-navy">
        {tag}
      </span>
    </div>
  );
}

export function TalentHeroIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[500px] py-6" aria-hidden>
      <div className="absolute inset-y-0 right-0 w-[82%] rounded-[48px] bg-[#E3EAE8]" />
      <div className="relative space-y-4">
        <ProfileCard tag="Executive" widths={[62, 44]} className="mr-[18%] motion-safe:animate-floatChart" />
        <ProfileCard tag="Professional" widths={[54, 70]} highlight className="ml-[14%] mr-[4%]" />
        <ProfileCard
          tag="Technical"
          widths={[70, 50]}
          className="mr-[10%] ml-[4%] motion-safe:animate-floatChart [animation-delay:-3s]"
        />
      </div>
    </div>
  );
}

export function ShortlistIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[440px]" aria-hidden>
      <div className="rounded-[28px] border border-its-line bg-its-offwhite p-6">
        <div className="flex items-center justify-between">
          <span className="h-2 w-28 rounded-full bg-its-navy/80" />
          <span className="rounded-full bg-white px-3 py-1 text-[11.5px] font-medium text-its-slate-ink">
            Shortlist
          </span>
        </div>
        <div className="mt-5 space-y-3">
          <ProfileCard tag="Bilingual" widths={[58, 40]} highlight />
          <ProfileCard tag="Finance" widths={[66, 52]} />
          <ProfileCard tag="Engineering" widths={[50, 62]} />
        </div>
      </div>
    </div>
  );
}
