"use client";

import type { LucideIcon } from "lucide-react";
import {
  BriefcaseBusiness,
  Building2,
  Factory,
  Globe2,
  Users,
  Warehouse,
} from "lucide-react";
import { useRef } from "react";

import { TimelineContent } from "@/components/ui/timeline-animation";
import { cn } from "@/lib/utils";

type CardVariant = "white" | "white-grid" | "navy" | "blue";
type CardSize = "tall" | "compact" | "default";

type ScenarioCard = {
  title: string;
  description: string;
  supportList: readonly string[];
  icon: LucideIcon;
  variant: CardVariant;
  size?: CardSize;
  tag?: string;
};

const revealVariants = {
  visible: (index: number) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      delay: index * 0.12,
      duration: 0.5,
    },
  }),
  hidden: {
    filter: "blur(10px)",
    y: -20,
    opacity: 0,
  },
};

const scenarios = {
  manufacturing: {
    title: "Manufacturing Facility Launch",
    description:
      "Support for Korean manufacturers preparing to open or expand production operations in the U.S.",
    supportList: [
      "Production workforce planning",
      "Line operator staffing",
      "Supervisor placement",
      "Quality inspection support",
      "Launch coordination",
    ],
    icon: Factory,
    variant: "white-grid",
    size: "tall",
    tag: "Manufacturing",
  },
  warehouse: {
    title: "Warehouse & Distribution Operations",
    description:
      "Workforce and operational support for warehouse, fulfillment, and distribution center operations.",
    supportList: [
      "Warehouse staffing",
      "Inventory support",
      "Shipping and receiving",
      "Packaging operations",
      "Shift coordination",
    ],
    icon: Warehouse,
    variant: "blue",
    size: "compact",
    tag: "Logistics",
  },
  office: {
    title: "U.S. Office Establishment",
    description:
      "Administrative and office support for Korean companies setting up a U.S. branch or local entity.",
    supportList: [
      "Office staffing",
      "HR coordination",
      "Payroll support",
      "Executive assistants",
      "Korean-English communication",
    ],
    icon: Building2,
    variant: "navy",
    size: "default",
    tag: "Administrative",
  },
  coordination: {
    title: "Korean HQ ↔ U.S. Operations",
    description:
      "Bilingual coordination between Korean headquarters and U.S. local teams to reduce communication gaps.",
    supportList: [
      "Korean-English coordination",
      "Local issue reporting",
      "Vendor communication",
      "Operational updates",
      "On-site assistance",
    ],
    icon: Globe2,
    variant: "navy",
    size: "default",
    tag: "Coordination",
  },
  productionLine: {
    title: "Production Line Staffing",
    description:
      "Flexible workforce deployment for new production lines, seasonal volume changes, or operational ramp-up.",
    supportList: [
      "Line workers",
      "Team leads",
      "Training coordination",
      "Attendance tracking",
      "Workforce reporting",
    ],
    icon: Users,
    variant: "white",
    size: "compact",
    tag: "Workforce",
  },
  startup: {
    title: "Startup Operational Support",
    description:
      "Practical local support for Korean businesses entering the U.S. market for the first time.",
    supportList: [
      "Initial workforce setup",
      "Local operations guidance",
      "Facility readiness support",
      "Administrative support",
      "Ongoing management assistance",
    ],
    icon: BriefcaseBusiness,
    variant: "white-grid",
    size: "tall",
    tag: "Market Entry",
  },
} as const satisfies Record<string, ScenarioCard>;

const variantStyles: Record<
  CardVariant,
  {
    card: string;
    iconBadge: string;
    title: string;
    description: string;
    tag: string;
    listItem: string;
    bullet: string;
    gridClass?: string;
  }
> = {
  white: {
    card: "border-black/[0.08] bg-white",
    iconBadge: "border-black/[0.08] bg-[#F4F6F8] text-[#0A3A86]",
    title: "text-[#0B0F14]",
    description: "text-[#475569]",
    tag: "text-[#64748B]",
    listItem: "text-[#64748B]",
    bullet: "bg-[#0A3A86]",
  },
  "white-grid": {
    card: "border-black/[0.08] bg-white",
    iconBadge: "border-black/[0.08] bg-[#F4F6F8] text-[#0A3A86]",
    title: "text-[#0B0F14]",
    description: "text-[#475569]",
    tag: "text-[#64748B]",
    listItem: "text-[#64748B]",
    bullet: "bg-[#0A3A86]",
    gridClass:
      "bg-[linear-gradient(to_right,#4f4f4f14_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f14_1px,transparent_1px)] bg-[size:50px_56px]",
  },
  navy: {
    card: "border-white/[0.08] bg-[#111111] text-white",
    iconBadge: "border-white/[0.12] bg-white/[0.08] text-white",
    title: "text-white",
    description: "text-white/72",
    tag: "text-white/55",
    listItem: "text-white/58",
    bullet: "bg-[#60A5FA]",
  },
  blue: {
    card: "border-white/[0.1] bg-[#0A3A86] text-white",
    iconBadge: "border-white/[0.14] bg-white/[0.1] text-white",
    title: "text-white",
    description: "text-white/78",
    tag: "text-white/58",
    listItem: "text-white/65",
    bullet: "bg-white/85",
  },
};

function ScenarioCardContent({
  scenario,
  className,
}: {
  scenario: ScenarioCard;
  className?: string;
}) {
  const Icon = scenario.icon;
  const styles = variantStyles[scenario.variant];
  const size = scenario.size ?? "default";
  const isGrid = scenario.variant === "white-grid";
  const listLimit = size === "compact" ? 3 : size === "tall" ? 5 : 4;
  const visibleItems = scenario.supportList.slice(0, listLimit);

  return (
    <article
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-2xl border p-5",
        styles.card,
        size === "tall" && "min-h-[380px] lg:min-h-0",
        size === "compact" && "min-h-[200px] lg:min-h-0",
        size === "default" && "min-h-[240px] lg:min-h-0",
        className,
      )}
    >
      {isGrid ? (
        <div
          className={cn(
            "pointer-events-none absolute inset-x-0 top-0 h-[52%]",
            styles.gridClass,
            "[mask-image:linear-gradient(to_bottom,#000_55%,transparent_100%)]",
          )}
          aria-hidden
        />
      ) : null}

      <div className="relative z-10 flex h-full flex-col">
        {isGrid ? <div className="min-h-[38%] shrink-0" aria-hidden /> : null}

        <div className={cn("flex flex-1 flex-col", !isGrid && "justify-end")}>
          <p
            className={cn(
              "text-[13px] leading-[1.7] md:text-[14px]",
              styles.description,
              size === "compact" && "line-clamp-3",
            )}
          >
            {scenario.description}
          </p>

          {size !== "compact" ? (
            <ul className="mt-4 space-y-1.5" role="list">
              {visibleItems.map((item) => (
                <li
                  key={item}
                  className={cn(
                    "flex gap-2 text-[12px] leading-[1.55] md:text-[13px]",
                    styles.listItem,
                  )}
                >
                  <span
                    className={cn(
                      "mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full",
                      styles.bullet,
                    )}
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          ) : null}

          <div className="mt-auto flex items-end justify-between gap-4 pt-5">
            <div className="min-w-0">
              <h3
                className={cn(
                  "text-[15px] font-semibold leading-snug tracking-[-0.03em] md:text-base",
                  styles.title,
                )}
              >
                {scenario.title}
              </h3>
              {scenario.tag ? (
                <p className={cn("mt-1 text-[12px] md:text-[13px]", styles.tag)}>
                  {scenario.tag}
                </p>
              ) : null}
            </div>

            <div
              className={cn(
                "flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border",
                styles.iconBadge,
              )}
            >
              <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function AnimatedScenarioCard({
  scenario,
  animationNum,
  timelineRef,
  className,
}: {
  scenario: ScenarioCard;
  animationNum: number;
  timelineRef: React.RefObject<HTMLDivElement | null>;
  className?: string;
}) {
  return (
    <TimelineContent
      animationNum={animationNum}
      customVariants={revealVariants}
      timelineRef={timelineRef}
      className={cn("flex h-full min-h-0 flex-col", className)}
    >
      <ScenarioCardContent scenario={scenario} className="h-full" />
    </TimelineContent>
  );
}

export default function GlobalBusinessScenarios() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const mobileScenarios = [
    scenarios.manufacturing,
    scenarios.office,
    scenarios.warehouse,
    scenarios.coordination,
    scenarios.productionLine,
    scenarios.startup,
  ];

  return (
    <section
      id="global-business-scenarios"
      className="section-shell border-t border-black/[0.06] bg-white"
    >
      <div className="layout-container">
        <div ref={sectionRef} className="relative">
          <article className="mx-auto max-w-3xl text-center">
            <TimelineContent
              as="p"
              animationNum={0}
              customVariants={revealVariants}
              timelineRef={sectionRef}
              className="flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#111111]"
            >
              <span className="h-2 w-2 rounded-full bg-[#111111]" aria-hidden />
              Common Expansion Scenarios
            </TimelineContent>

            <TimelineContent
              as="h2"
              animationNum={1}
              customVariants={revealVariants}
              timelineRef={sectionRef}
              className="section-title mx-auto mt-5 max-w-[760px]"
            >
              How We Support Korean Companies Expanding in the U.S.
            </TimelineContent>

            <TimelineContent
              as="p"
              animationNum={2}
              customVariants={revealVariants}
              timelineRef={sectionRef}
              className="section-copy mx-auto mt-6 max-w-2xl"
            >
              ITS provides practical, on-the-ground support for Korean businesses
              launching, staffing, and operating in the United States.
            </TimelineContent>
          </article>

          <div className="mt-12 flex flex-col gap-2 md:mt-14 lg:hidden">
            {mobileScenarios.map((scenario, index) => (
              <AnimatedScenarioCard
                key={scenario.title}
                scenario={scenario}
                animationNum={index + 3}
                timelineRef={sectionRef}
              />
            ))}
          </div>

          {/* Bento masonry — equal column height, middle column stretches to align bottom */}
          <div className="mt-12 hidden w-full gap-2 lg:mt-14 lg:grid lg:grid-cols-3 lg:items-stretch">
            <div className="flex h-full min-h-0 flex-col gap-2">
              <AnimatedScenarioCard
                scenario={scenarios.manufacturing}
                animationNum={3}
                timelineRef={sectionRef}
                className="min-h-0 lg:flex-[7]"
              />
              <AnimatedScenarioCard
                scenario={scenarios.warehouse}
                animationNum={4}
                timelineRef={sectionRef}
                className="min-h-0 lg:flex-[3]"
              />
            </div>

            <div className="flex h-full min-h-0 flex-col gap-2">
              <AnimatedScenarioCard
                scenario={scenarios.office}
                animationNum={5}
                timelineRef={sectionRef}
                className="min-h-0 lg:flex-1"
              />
              <AnimatedScenarioCard
                scenario={scenarios.coordination}
                animationNum={6}
                timelineRef={sectionRef}
                className="min-h-0 lg:flex-1"
              />
            </div>

            <div className="flex h-full min-h-0 flex-col gap-2">
              <AnimatedScenarioCard
                scenario={scenarios.productionLine}
                animationNum={7}
                timelineRef={sectionRef}
                className="min-h-0 lg:flex-[3]"
              />
              <AnimatedScenarioCard
                scenario={scenarios.startup}
                animationNum={8}
                timelineRef={sectionRef}
                className="min-h-0 lg:flex-[7]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
