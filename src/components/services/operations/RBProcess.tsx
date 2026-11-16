import type { ReactNode } from "react";
import { Bot, Layers3, Radio, ShieldCheck } from "lucide-react";

import ImageSurface from "@/components/ui/ImageSurface";

const RB_MAP_WIDTH = 820;
const RB_MAP_HEIGHT = 1220;

const RB_COL_3 = [130, 410, 690] as const;
const RB_ROW_BADGE_Y = [55, 335, 620, 970] as const;

function rbPctX(x: number) {
  return `${(x / RB_MAP_WIDTH) * 100}%`;
}

function rbPctY(y: number) {
  return `${(y / RB_MAP_HEIGHT) * 100}%`;
}

const PLACEHOLDER_IMAGE = "/images/placeholder-photo.svg";

type RBStep = {
  number: string;
  title: string;
  bullets: readonly string[];
  image?: string;
};

/**
 * One end-to-end refurbishment flow, from inbound receiving to shipping.
 * Previously this page carried two flows (inbound "Reverse Logistics" and
 * "Advanced Device Refurbishment"), which repeated testing, packing and
 * shipping. They are merged here into a single twelve-step process.
 */
const rbSteps: RBStep[] = [
  {
    number: "01",
    title: "Receiving",
    bullets: ["Inbound receiving", "Barcode scanning", "Data registration"],
  },
  {
    number: "02",
    title: "Grading",
    bullets: ["Cosmetic grading", "Condition review", "Route allocation"],
    image: "/images/its-refurbish.png",
  },
  {
    number: "03",
    title: "Diagnostic",
    bullets: ["Power / current test", "Display & function test", "3G/4G/5G RF test"],
  },
  {
    number: "04",
    title: "Disassemble",
    bullets: ["Auto Screw Machine"],
    image: PLACEHOLDER_IMAGE,
  },
  {
    number: "05",
    title: "Harvest",
    bullets: ["H/W part reuse", "Metal, battery", "FPCB, NFC/MST", "Display reclamation"],
  },
  {
    number: "06",
    title: "Repair",
    bullets: ["3-level repair", "Included soldering"],
    image: "/images/its-refurbish.png",
  },
  {
    number: "07",
    title: "Assemble",
    bullets: ["Part managing", "Inventory"],
  },
  {
    number: "08",
    title: "Polishing",
    bullets: ["Display polishing", "AF coating", "Surface enhancement"],
    image: PLACEHOLDER_IMAGE,
  },
  {
    number: "09",
    title: "QA Testing",
    bullets: ["All function test"],
  },
  {
    number: "10",
    title: "Auto Testing",
    bullets: ["Etching / press", "Water proof", "3G/4G/5G RF test"],
    image: PLACEHOLDER_IMAGE,
  },
  {
    number: "11",
    title: "Final QA",
    bullets: ["Sampling test", "All function test", "Water proof", "RF test"],
    image: "/images/its-qa.png",
  },
  {
    number: "12",
    title: "Packing & Shipping",
    bullets: ["Secure packing, labeling", "AMR Moving Robot", "Outbound & tracking"],
  },
];

const highlights = [
  ["3-Level Repair Capability", "Component-level diagnostics and restoration.", Layers3],
  ["Advanced Testing", "RF, function and performance validation.", Radio],
  ["Quality Assurance", "Multi-layer QA from grading to final check.", ShieldCheck],
  ["Smart Automation", "AMR robots and automated equipment.", Bot],
] as const;

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F2B4A6]">
      <span className="h-2 w-2 rounded-full bg-its-coral" />
      {children}
    </p>
  );
}

function StepBadge({ number }: { number: string }) {
  return (
    <span
      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-transparent text-[12px] font-bold text-white"
      style={{
        backgroundImage:
          "linear-gradient(#08111C,#08111C),linear-gradient(135deg,#A5B5C5,#D97868,#8FAAA5)",
        backgroundClip: "padding-box,border-box",
        backgroundOrigin: "border-box",
      }}
    >
      {number}
    </span>
  );
}

function BulletList({ bullets }: { bullets: readonly string[] }) {
  return (
    <ul className="space-y-2">
      {bullets.map((item) => (
        <li key={item} className="flex gap-2 text-[13px] leading-[1.55] text-white/65">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A5B5C5]" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function RBSerpentinePath() {
  const [y1, y2, y3, y4] = RB_ROW_BADGE_Y;
  const [xL, , xR] = RB_COL_3;
  const turn = 72;

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox={`0 0 ${RB_MAP_WIDTH} ${RB_MAP_HEIGHT}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="rbSerpentineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A5B5C5" />
          <stop offset="34%" stopColor="#8FAAA5" />
          <stop offset="62%" stopColor="#D97868" />
          <stop offset="100%" stopColor="#A5B5C5" />
        </linearGradient>

        <filter id="rbLineGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path
        d={`
          M ${xL} ${y1}
          H ${xR}
          Q ${xR + turn} ${y1} ${xR + turn} ${y1 + turn}
          V ${y2 - turn}
          Q ${xR + turn} ${y2} ${xR} ${y2}
          H ${xL}
          Q ${xL - turn} ${y2} ${xL - turn} ${y2 + turn}
          V ${y3 - turn}
          Q ${xL - turn} ${y3} ${xL} ${y3}
          H ${xR}
          Q ${xR + turn} ${y3} ${xR + turn} ${y3 + turn}
          V ${y4 - turn}
          Q ${xR + turn} ${y4} ${xR} ${y4}
          H ${xL}
        `}
        fill="none"
        stroke="url(#rbSerpentineGradient)"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#rbLineGlow)"
      />
    </svg>
  );
}

function RBNodeContent({ step }: { step: RBStep }) {
  return (
    <div className="flex w-[200px] flex-col items-center">
      <h3 className="text-center text-[13px] font-semibold uppercase tracking-[0.05em] text-white">
        {step.title}
      </h3>

      {step.image ? (
        <ImageSurface
          src={step.image}
          alt={step.title}
          className="mt-3 aspect-[16/10] w-full rounded-[12px] border border-white/10"
        />
      ) : null}

      <ul className={`mx-auto w-fit space-y-1.5 ${step.image ? "mt-3" : "mt-2.5"}`}>
        {step.bullets.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-[12px] leading-[1.45] text-white/65"
          >
            <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#A5B5C5]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RBPlacedStep({ step, x, y }: { step: RBStep; x: number; y: number }) {
  return (
    <>
      <div
        className="absolute z-30 -translate-x-1/2 -translate-y-1/2"
        style={{ left: rbPctX(x), top: rbPctY(y) }}
      >
        <StepBadge number={step.number} />
      </div>

      <div
        className="absolute z-20 -translate-x-1/2"
        style={{ left: rbPctX(x), top: rbPctY(y + 28) }}
      >
        <RBNodeContent step={step} />
      </div>
    </>
  );
}

/** Desktop: twelve steps on a serpentine rail, three to a row. */
function RBTimeline() {
  const [xL, xC, xR] = RB_COL_3;
  const rows = [
    { y: RB_ROW_BADGE_Y[0], xs: [xL, xC, xR] },
    { y: RB_ROW_BADGE_Y[1], xs: [xR, xC, xL] },
    { y: RB_ROW_BADGE_Y[2], xs: [xL, xC, xR] },
    { y: RB_ROW_BADGE_Y[3], xs: [xR, xC, xL] },
  ];

  return (
    <div className="relative min-w-[820px] py-4 max-lg:hidden">
      <div className="relative w-full" style={{ height: RB_MAP_HEIGHT }}>
        <RBSerpentinePath />

        {rows.map((row, rowIndex) =>
          row.xs.map((x, columnIndex) => {
            const step = rbSteps[rowIndex * 3 + columnIndex];
            if (!step) return null;
            return <RBPlacedStep key={step.number} step={step} x={x} y={row.y} />;
          }),
        )}
      </div>
    </div>
  );
}

function MobileRBStep({ step, isLast }: { step: RBStep; isLast: boolean }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <StepBadge number={step.number} />
        {!isLast ? (
          <div
            className="mt-2 min-h-[32px] w-px flex-1 bg-gradient-to-b from-[#A5B5C5] via-[#D97868] to-[#8FAAA5]"
            aria-hidden
          />
        ) : null}
      </div>

      <div className={`min-w-0 flex-1 ${isLast ? "" : "pb-8"}`}>
        {step.image ? (
          <ImageSurface
            src={step.image}
            alt={step.title}
            className="mb-3 aspect-[16/10] w-full max-w-sm rounded-[16px] border border-white/10"
          />
        ) : null}

        <h3 className="text-[15px] font-semibold uppercase tracking-[0.04em] text-white">
          {step.title}
        </h3>

        <div className="mt-2">
          <BulletList bullets={step.bullets} />
        </div>
      </div>
    </div>
  );
}

export default function RBProcess() {
  return (
    <section className="relative overflow-hidden bg-[#14243D] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(165,181,197,0.14),transparent_38%),radial-gradient(circle_at_20%_80%,rgba(143,170,165,0.12),transparent_36%)]" />

      <div className="layout-container relative">
        <div className="grid gap-14 lg:grid-cols-[320px_1fr]">
          <aside>
            <Eyebrow>Refurbishment Process</Eyebrow>

            <h2 className="mt-5 text-[clamp(34px,3vw,52px)] font-semibold leading-[1.05] tracking-[-0.05em]">
              From Receiving to Shipping
            </h2>

            <p className="mt-6 text-[16px] leading-[1.75] text-white/60">
              One standardized flow covers the whole device lifecycle: inbound
              receiving and grading, diagnostics and repair, quality assurance,
              and packing for outbound delivery.
            </p>

            <div className="mt-10 space-y-4">
              {highlights.map(([title, desc, Icon]) => (
                <div
                  key={title}
                  className="rounded-[22px] border border-white/10 bg-white/[0.04] p-5"
                >
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-[#F2B4A6]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-[15px] font-semibold">{title}</h3>
                      <p className="mt-1 text-[13px] leading-[1.55] text-white/55">
                        {desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <div className="relative max-lg:mt-8 lg:overflow-x-auto lg:pb-6">
            <RBTimeline />

            <div className="lg:hidden">
              {rbSteps.map((step, index) => (
                <MobileRBStep
                  key={step.number}
                  step={step}
                  isLast={index === rbSteps.length - 1}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-[18px] border border-white/10 bg-white/[0.04] px-6 py-4 text-center text-[13px] text-white/60">
          Every device goes through the same twelve steps, so quality and
          turnaround stay consistent at volume.
        </div>
      </div>
    </section>
  );
}
