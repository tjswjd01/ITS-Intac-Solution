import type { ReactNode } from "react";
import {
  Bot,
  ClipboardCheck,
  Layers3,
  Radio,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import ImageSurface from "@/components/ui/ImageSurface";

const RB_MAP_WIDTH = 820;
const RB_MAP_HEIGHT = 1220;

const RB_COL_3 = [130, 410, 690] as const;
const RB_COL_2 = [230, 590] as const;

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
  contentSlot: "above" | "below";
};

const rbRow1: RBStep[] = [
  {
    number: "01",
    title: "Diagnostic",
    bullets: ["All Function Test", "3G/4G/5G RF Test"],
    contentSlot: "below",
  },
  {
    number: "02",
    title: "Disassemble",
    bullets: ["Auto Screw Machine"],
    image: PLACEHOLDER_IMAGE,
    contentSlot: "below",
  },
  {
    number: "03",
    title: "Harvest",
    bullets: [
      "H/W Part",
      "Metal, Battery",
      "FPCB, NFC/MST",
      "H/W Part Reuse",
      "Display Reclamation",
    ],
    contentSlot: "below",
  },
];

const rbRow2: RBStep[] = [
  {
    number: "06",
    title: "QA Testing",
    bullets: ["All Function Test"],
    contentSlot: "above",
  },
  {
    number: "05",
    title: "Assemble",
    bullets: ["Part Managing", "Inventory"],
    contentSlot: "above",
  },
  {
    number: "04",
    title: "Repair",
    bullets: ["3-Level Repair", "Included Soldering"],
    image: "/images/its-refurbish.png",
    contentSlot: "above",
  },
];

const rbRow3: RBStep[] = [
  {
    number: "07",
    title: "Auto Testing",
    bullets: ["Etching / Press", "Water Proof", "3G/4G/5G RF Test"],
    image: PLACEHOLDER_IMAGE,
    contentSlot: "below",
  },
  {
    number: "08",
    title: "Final QA",
    bullets: [
      "Sampling Test",
      "All Function Test",
      "Water Proof",
      "RF Test",
    ],
    image: "/images/its-qa.png",
    contentSlot: "below",
  },
];

const rbRow4: RBStep[] = [
  {
    number: "10",
    title: "Shipping",
    bullets: ["Outbound fulfillment and delivery"],
    contentSlot: "below",
  },
  {
    number: "09",
    title: "Packing",
    bullets: ["AMR Moving Robot"],
    image: PLACEHOLDER_IMAGE,
    contentSlot: "below",
  },
];

type ReceivingTimelineStep = {
  number: string;
  title: string;
  bullets: readonly string[];
  image?: string;
  layout: "label-above" | "card-above" | "label-above-card-below";
};

const receivingTimelineSteps: ReceivingTimelineStep[] = [
  {
    number: "01",
    title: "Receiving",
    bullets: ["Inbound receiving", "Barcode scanning", "Data registration"],
    layout: "label-above",
  },
  {
    number: "02",
    title: "Grading",
    bullets: [
      "Grader",
      "Polishing Candidate",
      "Cosmetic grading",
      "Condition review",
    ],
    image: "/images/its-refurbish.png",
    layout: "card-above",
  },
  {
    number: "03",
    title: "Testing",
    bullets: [
      "Power / Current Test",
      "Display Test",
      "Function Test",
      "3G / 4G / 5G RF Test",
    ],
    image: PLACEHOLDER_IMAGE,
    layout: "label-above-card-below",
  },
  {
    number: "04",
    title: "Polishing",
    bullets: ["Display Polishing", "AF Coating", "Surface enhancement"],
    image: PLACEHOLDER_IMAGE,
    layout: "card-above",
  },
  {
    number: "05",
    title: "Sorting",
    bullets: ["Grade sorting", "Route allocation", "Rework / Pass"],
    layout: "label-above",
  },
  {
    number: "06",
    title: "Packing",
    bullets: ["Secure packing", "Labeling", "AMR Moving Robot"],
    image: PLACEHOLDER_IMAGE,
    layout: "card-above",
  },
  {
    number: "07",
    title: "Shipping",
    bullets: ["Outbound staging", "Shipping", "Tracking & delivery"],
    layout: "label-above",
  },
];

const capabilities = [
  ["Accurate Grading", "Standardized grading system ensures consistent quality.", ClipboardCheck],
  ["Advanced Testing", "Multi-point testing including RF, function, and sensor.", Radio],
  ["Surface Enhancement", "Polishing and AF coating improve appearance and value.", Sparkles],
  ["Smart Automation", "AMR robots and automation increase speed and accuracy.", Bot],
] as const;

function Eyebrow({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <p
      className={`flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] ${
        dark ? "text-white/80" : "text-[#0A3A86]"
      }`}
    >
      <span
        className={`h-2 w-2 rounded-full ${
          dark ? "bg-[#7DD3FC]" : "bg-[#0A3A86]"
        }`}
      />
      {children}
    </p>
  );
}

function StepBadge({
  number,
  dark = false,
}: {
  number: string;
  dark?: boolean;
}) {
  return (
    <span
      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-transparent text-[12px] font-bold ${
        dark ? "text-white" : "text-[#0A3A86]"
      }`}
      style={{
        backgroundImage: dark
          ? "linear-gradient(#08111C,#08111C),linear-gradient(135deg,#60A5FA,#A78BFA,#22D3EE)"
          : "linear-gradient(#fff,#fff),linear-gradient(135deg,#60A5FA,#A78BFA,#22D3EE)",
        backgroundClip: "padding-box,border-box",
        backgroundOrigin: "border-box",
      }}
    >
      {number}
    </span>
  );
}

function BulletList({
  bullets,
  dark = false,
}: {
  bullets: readonly string[];
  dark?: boolean;
}) {
  return (
    <ul className="space-y-2">
      {bullets.map((item) => (
        <li
          key={item}
          className={`flex gap-2 text-[13px] leading-[1.55] ${
            dark ? "text-white/65" : "text-[#526173]"
          }`}
        >
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#60A5FA]" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function TimelineConnector() {
  return (
    <div
      className="h-7 w-px bg-gradient-to-b from-[#60A5FA]/80 via-[#A78BFA]/50 to-[#60A5FA]/30"
      aria-hidden
    />
  );
}

function StepTitleLabel({ title }: { title: string }) {
  return (
    <p className="text-center text-[11px] font-bold uppercase tracking-[0.06em] text-[#101820]">
      {title}
    </p>
  );
}

function TimelineBulletList({
  bullets,
  compact = false,
}: {
  bullets: readonly string[];
  compact?: boolean;
}) {
  return (
    <ul className={`space-y-1 ${compact ? "px-1" : ""}`}>
      {bullets.map((bullet) => (
        <li
          key={bullet}
          className="flex items-start gap-1.5 text-[10px] leading-[1.45] text-[#64748B]"
        >
          <span
            className="mt-[5px] h-1 w-1 shrink-0 rounded-full bg-[#60A5FA]"
            aria-hidden
          />
          {bullet}
        </li>
      ))}
    </ul>
  );
}

function TimelineImageCard({
  step,
  showTitle = false,
}: {
  step: ReceivingTimelineStep;
  showTitle?: boolean;
}) {
  return (
    <div className="w-full max-w-[168px] rounded-[16px] border border-black/[0.08] bg-white p-2.5 shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
      {step.image ? (
        <ImageSurface
          src={step.image}
          alt={step.title}
          className="aspect-[4/3] w-full rounded-[10px]"
        />
      ) : null}

      {showTitle ? (
        <h4 className="mt-2.5 text-[12px] font-semibold tracking-[-0.02em] text-[#0B0F14]">
          {step.title}
        </h4>
      ) : null}

      <div className={showTitle ? "mt-2" : "mt-2.5"}>
        <TimelineBulletList bullets={step.bullets} compact />
      </div>
    </div>
  );
}

function DesktopTimelineColumn({ step }: { step: ReceivingTimelineStep }) {
  const isLabelAbove = step.layout === "label-above";
  const isCardAbove = step.layout === "card-above";
  const isLabelAboveCardBelow = step.layout === "label-above-card-below";

  return (
    <div className="grid grid-rows-[200px_40px_200px]">
      {/* Top slot — content above badge rail */}
      <div className="flex flex-col items-center justify-end pb-0">
        {isLabelAbove || isLabelAboveCardBelow ? (
          <>
            <StepTitleLabel title={step.title} />
            <TimelineConnector />
          </>
        ) : null}

        {isCardAbove ? (
          <>
            <TimelineImageCard step={step} />
            <TimelineConnector />
          </>
        ) : null}
      </div>

      {/* Badge rail — fixed row, all badges share same y-position */}
      <div className="relative z-10 flex items-center justify-center">
        <StepBadge number={step.number} />
      </div>

      {/* Bottom slot — content below badge rail */}
      <div className="flex flex-col items-center justify-start pt-0">
        {isLabelAbove ? (
          <>
            <TimelineConnector />
            <div className="w-full max-w-[148px] rounded-[14px] border border-black/[0.06] bg-[#FAFBFC] px-3 py-2.5">
              <TimelineBulletList bullets={step.bullets} compact />
            </div>
          </>
        ) : null}

        {isCardAbove ? (
          <>
            <TimelineConnector />
            <StepTitleLabel title={step.title} />
          </>
        ) : null}

        {isLabelAboveCardBelow ? (
          <>
            <TimelineConnector />
            <TimelineImageCard step={step} />
          </>
        ) : null}
      </div>
    </div>
  );
}

function ReceivingDesktopTimeline() {
  const badgeRailOffset = 200 + 20;

  return (
    <div className="relative mt-16 hidden lg:block">
      <div
        className="pointer-events-none absolute inset-x-[3%] z-0 h-[2px]"
        style={{
          top: `${badgeRailOffset}px`,
          background:
            "linear-gradient(90deg, #60A5FA 0%, #818CF8 30%, #A78BFA 55%, #22D3EE 85%, #34D399 100%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 grid grid-cols-7 gap-x-2">
        {receivingTimelineSteps.map((step) => (
          <DesktopTimelineColumn key={step.number} step={step} />
        ))}
      </div>
    </div>
  );
}

function MobileTimelineStep({
  step,
  isLast,
}: {
  step: ReceivingTimelineStep;
  isLast: boolean;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <StepBadge number={step.number} />
        {!isLast ? (
          <div
            className="mt-2 w-px flex-1 min-h-[32px] bg-gradient-to-b from-[#60A5FA] via-[#A78BFA] to-[#22D3EE]"
            aria-hidden
          />
        ) : null}
      </div>

      <div className={`min-w-0 flex-1 ${isLast ? "" : "pb-8"}`}>
        {step.image ? (
          <ImageSurface
            src={step.image}
            alt={step.title}
            className="mb-3 aspect-[16/10] w-full max-w-sm rounded-[16px]"
          />
        ) : null}

        <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-[#0B0F14]">
          {step.title}
        </h3>

        <div className="mt-2">
          <BulletList bullets={step.bullets} />
        </div>
      </div>
    </div>
  );
}

function ReceivingInboundLine() {
  return (
    <section className="bg-white py-20">
      <div className="layout-container">
        <Eyebrow>INBOUND DEVICE PROCESSING</Eyebrow>

        <h2 className="section-title mt-5 max-w-[760px]">
          Receiving & Grading Operations
        </h2>

        <p className="section-copy mt-5 max-w-2xl">
          Streamlined receiving, grading, testing, and device preparation workflows
          designed for accuracy, visibility, and operational efficiency.
        </p>

        <ReceivingDesktopTimeline />

        {/* Mobile vertical timeline */}
        <div className="mt-12 lg:hidden">
          {receivingTimelineSteps.map((step, index) => (
            <MobileTimelineStep
              key={step.number}
              step={step}
              isLast={index === receivingTimelineSteps.length - 1}
            />
          ))}
        </div>

        <div className="mt-16 grid gap-4 rounded-[28px] border border-black/[0.08] bg-[#FAFBFC] p-4 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map(([title, description, Icon]) => (
            <div key={title} className="flex gap-4 p-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#0A3A86] shadow-sm">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-[14px] font-semibold text-[#0A3A86]">
                  {title}
                </h4>
                <p className="mt-1 text-[12px] leading-[1.55] text-[#526173]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RBNodeContent({
  step,
  compactBullets = false,
}: {
  step: RBStep;
  compactBullets?: boolean;
}) {
  const title = (
    <h3 className="text-center text-[13px] font-semibold uppercase tracking-[0.05em] text-white">
      {step.title}
    </h3>
  );

  const bulletList = step.image ? (
    <ul
      className={`mx-auto w-fit space-y-1.5 text-left ${
        compactBullets ? "text-[11px]" : ""
      }`}
    >
      {step.bullets.map((item) => (
        <li
          key={item}
          className="flex gap-2 text-[12px] leading-[1.45] text-white/65"
        >
          <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#60A5FA]" />
          {item}
        </li>
      ))}
    </ul>
  ) : (
    <ul className="mx-auto w-fit space-y-1.5">
      {step.bullets.map((item) => (
        <li
          key={item}
          className="flex items-start justify-center gap-2 text-[12px] leading-[1.45] text-white/65"
        >
          <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#60A5FA]" />
          <span className="text-center">{item}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="flex w-[200px] flex-col items-center">
      {title}

      {step.image ? (
        <ImageSurface
          src={step.image}
          alt={step.title}
          className="mt-3 aspect-[16/10] w-full rounded-[12px] border border-white/10"
        />
      ) : null}

      <div
        className={`flex w-full flex-col items-center ${
          step.image ? "mt-3" : "mt-2.5"
        }`}
      >
        {bulletList}
      </div>
    </div>
  );
}

function RBPlacedStep({
  step,
  x,
  y,
  compactBullets = false,
  contentOffsetY = 28,
}: {
  step: RBStep;
  x: number;
  y: number;
  compactBullets?: boolean;
  contentOffsetY?: number;
}) {
  const contentY = y + contentOffsetY;

  return (
    <>
      <div
        className="absolute z-30 -translate-x-1/2 -translate-y-1/2"
        style={{ left: rbPctX(x), top: rbPctY(y) }}
      >
        <StepBadge number={step.number} dark />
      </div>

      <div
        className="absolute z-20 -translate-x-1/2"
        style={{ left: rbPctX(x), top: rbPctY(contentY) }}
      >
        <RBNodeContent step={step} compactBullets={compactBullets} />
      </div>
    </>
  );
}

function RBSerpentinePath() {
  const y1 = RB_ROW_BADGE_Y[0];
  const y2 = RB_ROW_BADGE_Y[1];
  const y3 = RB_ROW_BADGE_Y[2];
  const y4 = RB_ROW_BADGE_Y[3];
  const [xL, , xR] = RB_COL_3;
  const [x2L] = RB_COL_2;
  const turn = 72;

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox={`0 0 ${RB_MAP_WIDTH} ${RB_MAP_HEIGHT}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="rbSerpentineGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="32%" stopColor="#818CF8" />
          <stop offset="52%" stopColor="#A78BFA" />
          <stop offset="75%" stopColor="#22D3EE" />
          <stop offset="100%" stopColor="#34D399" />
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
          H ${x2L}
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

function RBRepairTimeline() {
  const steps = {
    diagnostic: rbRow1[0],
    disassemble: rbRow1[1],
    harvest: rbRow1[2],
    qa: rbRow2[0],
    assemble: rbRow2[1],
    repair: rbRow2[2],
    auto: rbRow3[0],
    final: rbRow3[1],
    shipping: rbRow4[0],
    packing: rbRow4[1],
  };

  const [xL, xC, xR] = RB_COL_3;
  const [x2L, x2R] = RB_COL_2;
  const [y1, y2, y3, y4] = RB_ROW_BADGE_Y;

  return (
    <div className="relative min-w-[820px] py-4">
      <div
        className="relative w-full"
        style={{ height: RB_MAP_HEIGHT }}
      >
        <RBSerpentinePath />

        {/* Row 1: 01 → 02 → 03 */}
        <RBPlacedStep step={steps.diagnostic} x={xL} y={y1} />
        <RBPlacedStep step={steps.disassemble} x={xC} y={y1} />
        <RBPlacedStep step={steps.harvest} x={xR} y={y1} compactBullets />

        {/* Row 2: 06 ← 05 ← 04 */}
        <RBPlacedStep step={steps.qa} x={xL} y={y2} />
        <RBPlacedStep step={steps.assemble} x={xC} y={y2} />
        <RBPlacedStep step={steps.repair} x={xR} y={y2} />

        {/* Row 3: 07 → 08 */}
        <RBPlacedStep
          step={steps.auto}
          x={x2L}
          y={y3}
          compactBullets
          contentOffsetY={36}
        />
        <RBPlacedStep
          step={steps.final}
          x={x2R}
          y={y3}
          contentOffsetY={36}
        />

        {/* Row 4: 10 ← 09 */}
        <RBPlacedStep step={steps.shipping} x={xL} y={y4} />
        <RBPlacedStep step={steps.packing} x={x2R} y={y4} contentOffsetY={36} />
      </div>
    </div>
  );
}

function RBRepairProcess() {
  return (
    <section className="relative overflow-hidden bg-[#070D14] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.16),transparent_38%),radial-gradient(circle_at_20%_80%,rgba(34,211,238,0.12),transparent_36%)]" />

      <div className="layout-container relative">
        <div className="grid gap-14 lg:grid-cols-[320px_1fr]">
          <aside>
            <Eyebrow dark>Repair & Restoration</Eyebrow>

            <h2 className="mt-5 text-[clamp(34px,3vw,52px)] font-semibold leading-[1.05] tracking-[-0.05em]">
              Advanced Device Refurbishment
            </h2>

            <p className="mt-6 text-[16px] leading-[1.75] text-white/60">
              Technology-driven repair, testing, quality assurance, and automation
              workflows designed to maximize device value, reliability, and
              operational efficiency.
            </p>

            <div className="mt-10 space-y-4">
              {(
                [
                  [
                    "3-Level Repair Capability",
                    "Component-level diagnostics and restoration.",
                    Layers3,
                  ],
                  [
                    "Advanced Testing",
                    "RF, function, and performance validation.",
                    Radio,
                  ],
                  ["Quality Assurance", "Multi-layer QA process.", ShieldCheck],
                  ["Smart Automation", "AMR and automation tools.", Bot],
                ] as const
              ).map(([title, desc, Icon]) => (
                <div
                  key={title}
                  className="rounded-[22px] border border-white/10 bg-white/[0.04] p-5"
                >
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-[#7DD3FC]">
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

          <div className="relative overflow-x-auto pb-6">
            <RBRepairTimeline />
          </div>
        </div>

        <div className="mt-10 rounded-[18px] border border-white/10 bg-white/[0.04] px-6 py-4 text-center text-[13px] text-white/60">
          Every device goes through a strict, multi-step process to ensure optimal
          performance and reliability.
        </div>
      </div>
    </section>
  );
}

export default function RBProcess() {
  return (
    <>
      <ReceivingInboundLine />
      <RBRepairProcess />
    </>
  );
}