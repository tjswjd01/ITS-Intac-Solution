import { Activity, BadgeCheck, Gauge, RotateCcw, ShieldCheck, Timer } from "lucide-react";

import OperationsSectionHeader from "./OperationsSectionHeader";

const metricCards = [
  {
    type: "hero",
    value: "0.0003%",
    label: "Defect Rate",
    description:
      "Maintaining exceptional quality standards through inspection, testing, and controlled refurbishment processes.",
  },
  {
    type: "icon",
    icon: BadgeCheck,
    label: "First Pass Yield",
    description:
      "Devices completing workflow without rework on initial pass.",
  },
  {
    type: "chart",
    icon: Activity,
    label: "Functional Pass Rate",
    description:
      "Devices meeting functional testing and validation standards.",
  },
  {
    type: "wideChart",
    icon: Timer,
    label: "Turnaround Time",
    description:
      "Cycle time from intake through outbound processing.",
  },
  {
    type: "widePeople",
    icon: ShieldCheck,
    label: "Quality Score",
    description:
      "Composite quality performance across inspection checkpoints and return benchmarks.",
  },
] as const;

function MiniLineChart() {
  return (
    <svg className="h-[120px] w-full" viewBox="0 0 360 120" fill="none">
      <path
        d="M8 82 C38 48, 64 76, 92 50 C118 24, 134 88, 168 56 C198 26, 218 80, 246 48 C278 14, 304 42, 352 28"
        stroke="#0B0F14"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M8 82 C38 48, 64 76, 92 50 C118 24, 134 88, 168 56 C198 26, 218 80, 246 48 C278 14, 304 42, 352 28 L352 120 L8 120 Z"
        fill="url(#kpiGradient)"
        opacity="0.18"
      />
      <defs>
        <linearGradient id="kpiGradient" x1="0" y1="20" x2="0" y2="120">
          <stop stopColor="#0A3A86" />
          <stop offset="1" stopColor="#0A3A86" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function MetricCard({ card }: { card: (typeof metricCards)[number] }) {
  if (card.type === "hero") {
    return (
      <article className="relative col-span-full flex min-h-[300px] overflow-hidden rounded-[24px] border border-black/10 bg-white p-8 shadow-[0_8px_32px_rgba(15,23,42,0.05)] lg:col-span-2">
        <div className="m-auto text-center">
          <div className="relative mx-auto flex h-32 w-72 items-center justify-center">
            <div className="absolute inset-x-4 top-1/2 h-24 -translate-y-1/2 rounded-[50%] border-[10px] border-[#0A3A86]/5" />
            <div className="absolute inset-x-8 top-1/2 h-16 -translate-y-1/2 rotate-[-8deg] rounded-[50%] border-[6px] border-[#22D3EE]/10" />
            <p className="relative bg-gradient-to-r from-[#0A3A86] via-[#2563EB] to-[#22D3EE] bg-clip-text text-[56px] font-semibold tracking-[-0.07em] text-transparent md:text-[64px]">
              {card.value}
            </p>
          </div>

          <h3 className="mt-6 text-[34px] font-semibold tracking-[-0.05em] text-[#0B0F14]">
            {card.label}
          </h3>

          <p className="mx-auto mt-4 max-w-[420px] text-[15px] leading-[1.7] text-[#64748B]">
            {card.description}
          </p>
        </div>
      </article>
    );
  }

  if (card.type === "chart") {
    return (
      <article className="col-span-full overflow-hidden rounded-[24px] border border-black/10 bg-white p-6 shadow-[0_8px_32px_rgba(15,23,42,0.05)] sm:col-span-3 lg:col-span-2">
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EEF3FA] text-[#0A3A86]">
            <Gauge className="h-5 w-5" />
          </div>
          <p className="text-[18px] font-semibold tracking-[-0.04em] text-[#0B0F14]">
            Performance
          </p>
        </div>

        <div className="mt-8">
          <MiniLineChart />
        </div>

        <h3 className="mt-8 text-center text-[22px] font-semibold tracking-[-0.04em] text-[#0B0F14]">
          {card.label}
        </h3>
        <p className="mx-auto mt-3 max-w-[380px] text-center text-[14px] leading-[1.65] text-[#64748B]">
          {card.description}
        </p>
      </article>
    );
  }

  if (card.type === "wideChart") {
    return (
      <article className="relative col-span-full overflow-hidden rounded-[24px] border border-black/10 bg-white p-7 shadow-[0_8px_32px_rgba(15,23,42,0.05)] lg:col-span-3">
        <div className="grid gap-8 sm:grid-cols-[0.8fr_1.2fr] sm:items-end">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-[#0A3A86]">
              <Timer className="h-5 w-5" />
            </div>
            <h3 className="mt-16 text-[24px] font-semibold tracking-[-0.04em] text-[#0B0F14] sm:mt-24">
              {card.label}
            </h3>
            <p className="mt-3 max-w-[320px] text-[15px] leading-[1.7] text-[#64748B]">
              {card.description}
            </p>
          </div>

          <div className="rounded-tl-[20px] border-l border-t border-black/10 p-5">
            <div className="mb-4 flex gap-1.5">
              <span className="h-2 w-2 rounded-full border border-black/10" />
              <span className="h-2 w-2 rounded-full border border-black/10" />
              <span className="h-2 w-2 rounded-full border border-black/10" />
            </div>
            <MiniLineChart />
          </div>
        </div>
      </article>
    );
  }

  if (card.type === "widePeople") {
    return (
      <article className="relative col-span-full overflow-hidden rounded-[24px] border border-black/10 bg-white p-7 shadow-[0_8px_32px_rgba(15,23,42,0.05)] lg:col-span-3">
        <div className="grid gap-8 sm:grid-cols-[0.95fr_1.05fr] sm:items-center">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-[#0A3A86]">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="mt-16 text-[24px] font-semibold tracking-[-0.04em] text-[#0B0F14] sm:mt-24">
              {card.label}
            </h3>
            <p className="mt-3 max-w-[360px] text-[15px] leading-[1.7] text-[#64748B]">
              {card.description}
            </p>
          </div>

          <div className="relative min-h-[220px]">
            {["Inspection", "Testing", "QA", "Returns"].map((label, index) => (
              <div
                key={label}
                className="absolute rounded-full border border-black/10 bg-white px-4 py-2 text-[13px] font-medium text-[#0B0F14] shadow-[0_8px_24px_rgba(15,23,42,0.08)]"
                style={{
                  top: `${20 + index * 42}px`,
                  right: `${index % 2 === 0 ? 40 : 100}px`,
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </article>
    );
  }

  const Icon = card.icon;

  return (
    <article className="relative col-span-full overflow-hidden rounded-[24px] border border-black/10 bg-white p-8 text-center shadow-[0_8px_32px_rgba(15,23,42,0.05)] sm:col-span-3 lg:col-span-2">
      <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-black/10 bg-[#FAFAF8] text-[#0A3A86]">
        <Icon className="h-10 w-10" strokeWidth={1.5} />
      </div>

      <h3 className="mt-8 text-[22px] font-semibold tracking-[-0.04em] text-[#0B0F14]">
        {card.label}
      </h3>
      <p className="mx-auto mt-3 max-w-[340px] text-[15px] leading-[1.7] text-[#64748B]">
        {card.description}
      </p>
    </article>
  );
}

export default function RBKPI() {
  return (
    <section className="section-shell border-t border-black/[0.06] bg-[#FAFAF8]">
      <div className="layout-container">
        <OperationsSectionHeader
          eyebrow="RB KPI"
          title="Operational metrics tracked across refurbishment programs."
          description="ITS monitors defect rate, turnaround time, pass rates, recovery performance, and quality indicators to support transparent reporting and continuous improvement."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-6">
          {metricCards.map((card) => (
            <MetricCard key={card.label} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}