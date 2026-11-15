"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

import OperationsSectionHeader from "../operations/OperationsSectionHeader";
import { automationMedia } from "./automationContent";

type ApplicationArea = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  keyFunctions: string[];
  scene: "device-testing" | "packaging" | "quality" | "sorting" | "production";
};

// Four approved applications. No performance counters: the earlier KPI
// figures were unverified and have been removed.
const media = automationMedia.applications;

const applicationAreas: ApplicationArea[] = [
  {
    id: "01",
    title: "Device Testing Equipment",
    description:
      "Customized equipment that supports testing steps in the mobile-device refurbishment process.",
    image: media.deviceTesting.image,
    imageAlt: media.deviceTesting.alt,
    keyFunctions: [
      "Test-step support",
      "Repeatable device handling",
      "Fixtures matched to the process",
    ],
    scene: "device-testing",
  },
  {
    id: "02",
    title: "Inspection & Quality Verification",
    description:
      "Systems and devices that support repeatable checks and quality verification during refurbishment.",
    image: media.inspection.image,
    imageAlt: media.inspection.alt,
    keyFunctions: [
      "Vision-based checks",
      "Consistent pass/fail criteria",
      "Quality verification support",
    ],
    scene: "quality",
  },
  {
    id: "03",
    title: "Customized Refurbishment Equipment",
    description:
      "Purpose-built and customized equipment for specific refurbishment tasks, informed by day-to-day floor experience.",
    image: media.customEquipment.image,
    imageAlt: media.customEquipment.alt,
    keyFunctions: [
      "Task-specific equipment",
      "Custom jigs and fixtures",
      "Built around the actual process",
    ],
    scene: "production",
  },
  {
    id: "04",
    title: "AMR Material Movement",
    description:
      "AMR robots move materials between areas inside our mobile-device refurbishment facility.",
    image: media.amr.image,
    imageAlt: media.amr.alt,
    keyFunctions: [
      "Internal material movement",
      "Used in our own facility",
      "Rental, sales and repair inquiries",
    ],
    scene: "sorting",
  },
];

function ApplicationSceneFallback({ scene }: { scene: ApplicationArea["scene"] }) {
  const scenes = {
    "device-testing": (
      <>
        <div className="absolute bottom-[18%] left-[10%] right-[10%] h-14 rounded-lg bg-white/20 backdrop-blur-sm" />
        <div className="absolute bottom-[32%] left-[18%] h-24 w-16 rounded-md bg-white/30 shadow-lg" />
        <div className="absolute bottom-[32%] left-[32%] h-24 w-16 rounded-md bg-[#14243D]/40 ring-2 ring-emerald-400/60 shadow-lg" />
        <div className="absolute bottom-[32%] left-[46%] h-24 w-16 rounded-md bg-white/25 shadow-lg" />
        <div className="absolute top-[20%] right-[12%] rounded-full bg-[#14243D]/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-white">
          Inspection active
        </div>
      </>
    ),
    packaging: (
      <>
        <div className="absolute bottom-[22%] left-[8%] right-[8%] h-3 rounded-full bg-white/25" />
        <div className="absolute bottom-[30%] left-[20%] h-20 w-28 rounded-md border-2 border-dashed border-white/40 bg-white/15" />
        <div className="absolute bottom-[30%] right-[18%] h-20 w-28 rounded-md bg-white/25 shadow-xl" />
        <div className="absolute top-[18%] left-[14%] rounded-md bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-[#14243D]">
          Label verified
        </div>
      </>
    ),
    quality: (
      <>
        <div className="absolute inset-x-[12%] top-[22%] bottom-[28%] rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm" />
        <div className="absolute left-[22%] top-[34%] h-28 w-40 rounded-lg bg-[#14243D]/35" />
        <div className="absolute right-[20%] top-[38%] flex flex-col gap-2">
          {["PASS", "HOLD", "FAIL"].map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/25 bg-black/30 px-3 py-1 text-center text-[10px] font-semibold text-white"
            >
              {s}
            </span>
          ))}
        </div>
      </>
    ),
    sorting: (
      <>
        <div className="absolute bottom-[24%] left-[6%] right-[6%] flex justify-between gap-2">
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className="h-16 flex-1 rounded-t-lg bg-gradient-to-t from-white/25 to-white/5"
            />
          ))}
        </div>
        <div className="absolute bottom-[42%] left-[14%] h-10 w-10 rounded-md bg-white/30" />
        <div className="absolute bottom-[46%] left-[38%] h-10 w-10 rounded-md bg-emerald-400/50" />
        <div className="absolute bottom-[40%] right-[20%] h-10 w-10 rounded-md bg-white/20" />
      </>
    ),
    production: (
      <>
        <div className="absolute inset-x-[10%] top-[20%] grid grid-cols-3 gap-3">
          {["Line A", "Line B", "Line C"].map((line) => (
            <div
              key={line}
              className="rounded-xl border border-white/15 bg-black/25 p-3 backdrop-blur-sm"
            >
              <p className="text-[10px] uppercase tracking-wider text-white/50">{line}</p>
              <p className="mt-2 text-lg font-semibold text-white">Live</p>
            </div>
          ))}
        </div>
        <div className="absolute bottom-[20%] left-[12%] right-[12%] h-12 rounded-lg bg-[#14243D]/50" />
      </>
    ),
  };

  return (
    <div className="absolute inset-0 bg-[linear-gradient(145deg,#1a2744_0%,#0d1528_55%,#081018_100%)]">
      {scenes[scene]}
    </div>
  );
}

function ApplicationImagePanel({ area }: { area: ApplicationArea }) {
  const [photoLoaded, setPhotoLoaded] = useState(false);

  return (
    <div className="relative min-h-[280px] sm:min-h-[340px] lg:min-h-[480px]">
      <ApplicationSceneFallback scene={area.scene} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={area.image}
        alt={area.imageAlt}
        loading="lazy"
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-500 motion-reduce:transition-none",
          photoLoaded ? "opacity-100" : "opacity-0",
        )}
        onLoad={() => setPhotoLoaded(true)}
        onError={() => setPhotoLoaded(false)}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,15,0.08)_0%,rgba(5,8,15,0.5)_100%)]"
        aria-hidden
      />
      <div className="absolute bottom-5 left-5 z-10 rounded-full border border-white/20 bg-black/40 px-4 py-2 backdrop-blur-md">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
          {area.id} · Field Application
        </p>
      </div>
    </div>
  );
}

export default function WhereAutomationCanBeApplied() {
  const [activeId, setActiveId] = useState(applicationAreas[0].id);
  const active = applicationAreas.find((a) => a.id === activeId) ?? applicationAreas[0];

  return (
    <section
      id="application-areas"
      className="bg-its-offwhite py-16 md:py-24 lg:py-28"
    >
      <div className="layout-container">
        <div className="max-w-4xl">
          <OperationsSectionHeader
            eyebrow="Applications"
            eyebrowTone="black"
            title="Where our automation is applied."
            description="Four areas of our mobile-device refurbishment operation where ITS equipment and AMR robots are in use."
            className="[&_.section-title]:max-w-[52rem]"
            descriptionClassName="max-w-[42rem]"
          />
        </div>

        <div className="mt-14 grid w-full grid-cols-1 gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
          {/* Left navigation */}
          <nav
            aria-label="Application areas"
            className="flex w-full flex-col gap-2 lg:w-[280px]"
          >
            {applicationAreas.map((item) => {
              const isActive = item.id === activeId;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  aria-pressed={isActive}
                  className={cn(
                    "flex w-full items-center gap-4 rounded-xl border px-4 py-3.5 text-left transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14243D] motion-reduce:transition-none",
                    isActive
                      ? "border-[#14243D]/25 bg-[#14243D]/[0.06] shadow-[0_8px_28px_rgba(10,58,134,0.1)]"
                      : "border-transparent bg-[#FAFAF8] hover:border-black/[0.08] hover:bg-[#F3F4F6]",
                  )}
                >
                  <span
                    className={cn(
                      "w-8 shrink-0 font-mono text-[12px] font-semibold tracking-[0.12em]",
                      isActive ? "text-[#14243D]" : "text-[#9CA3AF]",
                    )}
                  >
                    {item.id}
                  </span>
                  <span
                    className={cn(
                      "text-[15px] font-medium tracking-[-0.02em]",
                      isActive ? "text-[#111111]" : "text-[#4B5563]",
                    )}
                  >
                    {item.title}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Right — image-led detail (fills remaining container width) */}
          <div className="min-w-0 w-full overflow-hidden rounded-[24px] border border-black/[0.08] bg-[#FAFAF8] shadow-[0_16px_48px_rgba(15,23,42,0.06)]">
            <div className="grid lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1.05fr)]">
              {/* Image ~59% */}
              <ApplicationImagePanel key={active.id} area={active} />

              {/* Content ~41% — wider for KPI cards */}
              <div className="flex min-w-0 flex-col justify-center border-t border-black/[0.06] p-6 md:p-8 lg:min-w-[300px] lg:border-l lg:border-t-0 lg:px-7">
                <p className="font-mono text-[11px] font-semibold tracking-[0.14em] text-[#14243D]">
                  {active.id}
                </p>
                <h3 className="mt-3 text-[clamp(22px,2.2vw,28px)] font-semibold leading-[1.12] tracking-[-0.03em] text-[#111111]">
                  {active.title}
                </h3>
                <p className="mt-4 text-[15px] leading-[1.75] text-[#4B5563]">
                  {active.description}
                </p>

                <div className="mt-8 border-t border-black/[0.06] pt-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6B7280]">
                    Key Functions
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {active.keyFunctions.map((fn) => (
                      <li
                        key={fn}
                        className="flex items-start gap-2.5 text-[14px] leading-snug text-[#4B5563]"
                      >
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#14243D]"
                          aria-hidden
                        />
                        {fn}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
