"use client";

import { useState } from "react";
import {
  Bot,
  Camera,
  Cpu,
  Gauge,
  Radar,
  ShieldCheck,
} from "lucide-react";

import RadialOrbitalTimeline, {
  type TimelineItem,
} from "@/components/ui/radial-orbital-timeline";
import { cn } from "@/lib/utils";

const coreTechnologyNodes: TimelineItem[] = [
  {
    id: 1,
    title: "Machine Vision",
    date: "Inspection",
    content:
      "Camera-based inspection for defects, alignment, labeling, and pass/fail verification.",
    category: "Vision",
    icon: Camera,
    relatedIds: [3, 6],
    status: "in-progress",
    energy: 92,
  },
  {
    id: 2,
    title: "Motion Control",
    date: "Handling",
    content:
      "Robotic arms, conveyors, fixtures, and transfer systems that coordinate automated movement.",
    category: "Motion",
    icon: Bot,
    relatedIds: [3, 4],
    status: "completed",
    energy: 88,
  },
  {
    id: 3,
    title: "PLC Logic",
    date: "Control",
    content:
      "Control logic that coordinates equipment actions, timing, sensors, and safety signals.",
    category: "PLC",
    icon: Cpu,
    relatedIds: [2, 4, 5],
    status: "in-progress",
    energy: 95,
  },
  {
    id: 4,
    title: "Sensor Network",
    date: "Sensing",
    content:
      "Sensors, triggers, and detection points that help systems respond accurately in real time.",
    category: "Sensors",
    icon: Radar,
    relatedIds: [2, 3],
    status: "completed",
    energy: 84,
  },
  {
    id: 5,
    title: "Data Monitoring",
    date: "Visibility",
    content:
      "Dashboards that capture equipment activity, inspection outcomes, and workflow status.",
    category: "Data",
    icon: Gauge,
    relatedIds: [3, 6],
    status: "in-progress",
    energy: 78,
  },
  {
    id: 6,
    title: "Quality Verification",
    date: "QA",
    content:
      "Automated checks that support consistent pass/fail decisions and quality reporting.",
    category: "Quality",
    icon: ShieldCheck,
    relatedIds: [1, 5],
    status: "completed",
    energy: 90,
  },
];

const ORBITAL_SCALE = 1.32;

export default function AutomationCoreTechnologies() {
  const [selectedNodeId, setSelectedNodeId] = useState<number | null>(1);

  return (
    <section
      id="core-technologies"
      className="relative scroll-mt-24 border-t border-white/[0.06] bg-[#05080f]"
    >
      <div className="layout-container py-16 md:py-20 lg:py-24">
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] lg:items-center lg:gap-x-12 xl:gap-x-16 min-[1440px]:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] min-[1440px]:gap-x-20">
          {/* Left — copy + technology list */}
          <div className="flex flex-col lg:max-w-[520px]">
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55">
              <span className="h-2 w-2 rounded-full bg-[#0A3A86]" aria-hidden />
              Core Technologies
            </p>

            <h2 className="mt-5 text-balance text-[clamp(30px,3.2vw,48px)] font-semibold leading-[1.06] tracking-[-0.04em] text-white">
              Connected technologies behind practical automation.
            </h2>

            <p className="mt-6 text-[16px] leading-8 text-white/55 md:text-[17px]">
              ITS combines inspection, motion, sensing, data, and quality
              verification technologies into automation systems designed for real
              operational environments.
            </p>

            <ul className="mt-10 space-y-2" role="list">
              {coreTechnologyNodes.map((item, index) => {
                const isActive = selectedNodeId === item.id;
                const num = String(index + 1).padStart(2, "0");

                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedNodeId(isActive ? null : item.id)
                      }
                      className={cn(
                        "group flex w-full items-center gap-4 rounded-xl border px-4 py-3.5 text-left transition-all duration-300",
                        isActive
                          ? "border-[#0A3A86]/50 bg-[#0A3A86]/15 shadow-[0_8px_32px_rgba(10,58,134,0.2)]"
                          : "border-white/[0.06] bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]",
                      )}
                    >
                      <span
                        className={cn(
                          "w-8 shrink-0 font-mono text-[12px] font-semibold tracking-[0.12em] transition-colors",
                          isActive ? "text-white" : "text-white/40 group-hover:text-white/70",
                        )}
                      >
                        {num}
                      </span>
                      <span
                        className={cn(
                          "text-[15px] font-medium tracking-[-0.02em] transition-colors",
                          isActive ? "text-white" : "text-white/75 group-hover:text-white",
                        )}
                      >
                        {item.title}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right — orbital diagram */}
          <div className="relative flex min-h-[min(560px,70vh)] w-full items-center justify-center overflow-visible lg:min-h-[740px] min-[1440px]:min-h-[820px]">
            <div className="w-full min-[1440px]:origin-center min-[1440px]:scale-[1.14]">
              <RadialOrbitalTimeline
                timelineData={coreTechnologyNodes}
                scale={ORBITAL_SCALE}
                selectedNodeId={selectedNodeId}
                onSelectedNodeChange={setSelectedNodeId}
                hideNodeLabels
                className="w-full max-w-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
