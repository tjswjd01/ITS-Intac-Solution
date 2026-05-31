"use client";

import { CardSticky, ContainerScroll } from "@/components/ui/card-sticky";

import OperationsSectionHeader from "./OperationsSectionHeader";

const workforceTopics = [
  {
    title: "Skilled Technicians",
    description:
      "Technicians trained for device handling, repair execution, and quality-sensitive workflows.",
  },
  {
    title: "Training & Certification",
    description:
      "Structured onboarding, skill validation, and ongoing certification for operational roles.",
  },
  {
    title: "Standardized Workflows",
    description:
      "Documented procedures and repeatable execution standards across refurbishment stations.",
  },
  {
    title: "Workforce Coordination",
    description:
      "Scheduling, shift alignment, and team coordination across production lines.",
  },
  {
    title: "Performance Management",
    description:
      "Productivity tracking, quality accountability, and continuous improvement support.",
  },
] as const;

const CARD_STACK = {
  baseTop: 112,
  incrementY: 14,
  incrementZ: 10,
  cardHeight: 340,
  scrollStep: 440,
} as const;

function WorkforceTopicCard({
  item,
  index,
}: {
  item: (typeof workforceTopics)[number];
  index: number;
}) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="relative flex h-[340px] w-full flex-col overflow-hidden rounded-[28px] border border-black/[0.05] bg-[#F3F3F1] p-8 shadow-[0_18px_50px_rgba(15,23,42,0.07)]">
      <div
        className="pointer-events-none absolute -right-4 top-0 h-36 w-36 rounded-full bg-[#818CF8]/35 blur-3xl"
        aria-hidden
      />

      <div className="relative flex items-start justify-between gap-6">
        <h3 className="max-w-[68%] text-[22px] font-semibold leading-[1.2] tracking-[-0.03em] text-[#0B0F14]">
          {item.title}
        </h3>
        <span
          aria-hidden
          className="relative shrink-0 text-[56px] font-semibold leading-none tracking-[-0.05em] text-[#818CF8]"
        >
          {number}
        </span>
      </div>

      <p className="relative mt-auto text-[15px] leading-[1.75] text-[#64748B]">
        {item.description}
      </p>
    </article>
  );
}

export default function WorkforceManagement() {
  return (
    <section className="section-shell border-t border-black/[0.06] bg-white">
      <div className="layout-container">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,400px)_minmax(0,1fr)] lg:gap-16">
          <OperationsSectionHeader
            className="lg:sticky lg:top-28 lg:self-start"
            eyebrow="Workforce Management"
            title="Operational workforce structure behind reliable refurbishment execution."
            description="Refurbishment performance depends on trained teams, clear workflows, and coordinated supervision. ITS supports workforce planning and day-to-day execution across refurbishment environments."
          />

          <ContainerScroll className="relative hidden w-full lg:block">
            <div
              className="pointer-events-none absolute -right-10 top-10 h-[500px] w-[500px] rounded-full bg-[#818CF8]/15 blur-[100px]"
              aria-hidden
            />

            <div className="relative">
              {workforceTopics.map((item, index) => (
                <div
                  key={item.title}
                  style={{ height: CARD_STACK.scrollStep }}
                >
                  <CardSticky
                    index={index}
                    baseTop={CARD_STACK.baseTop}
                    incrementY={CARD_STACK.incrementY}
                    incrementZ={CARD_STACK.incrementZ}
                    className="w-full will-change-transform"
                  >
                    <WorkforceTopicCard item={item} index={index} />
                  </CardSticky>
                </div>
              ))}

              <div
                style={{
                  height: CARD_STACK.cardHeight + CARD_STACK.baseTop,
                }}
                aria-hidden
              />
            </div>
          </ContainerScroll>
        </div>

        <div className="mt-12 flex flex-col gap-5 lg:hidden">
          {workforceTopics.map((item, index) => (
            <WorkforceTopicCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
