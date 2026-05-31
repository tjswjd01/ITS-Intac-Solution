"use client";

import Image from "next/image";
import { motion, type Variants, useInView } from "framer-motion";
import { useRef } from "react";

type TimelineItem = {
  year: string;
  title: string;
  description: string;
  variant: "text" | "card" | "wide";
  placement?: "above" | "below";
  image?: string;
  accentDot?: boolean;
  highlightWords?: string[];
};

const largeImageYears = ["2022", "2025"];

const TIMELINE_CONTENT_H = 240;
const TIMELINE_CONNECTOR_H = 40;
const TIMELINE_LINE_TOP = 260;
const TIMELINE_ROW_H_TOP = 360;
const TIMELINE_ROW_H_BOTTOM = 320;
const MILESTONE_WIDTH = "w-full max-w-[200px]";
const CARD_HEIGHT_PX = 190;

const topItems: TimelineItem[] = [
  {
    year: "2015",
    title: "ITS Company Founded",
    description: "Created headquarters in Dallas, TX.",
    variant: "text",
  },
  {
    year: "2016",
    title: "Partnership with MQL",
    highlightWords: ["MQL"],
    description:
      "Network performance testing, drive test, and automation test solutions for R&D.",
    variant: "card",
    image: "/images/placeholder-photo.svg",
    accentDot: true,
  },
  {
    year: "2018",
    title: "Market Research",
    description:
      "Conducted AI speaker market research, packaging coordination, and refurbish QA support for commercial inspection programs.",
    variant: "text",
  },
  {
    year: "2019",
    title: "Partnership with Samsung SDS",
    highlightWords: ["Samsung"],
    description:
      "Participated in sourcing logistics, SW engineering, and asset coordinator workforce.",
    variant: "card",
    image: "/images/placeholder-photo.svg",
    accentDot: true,
  },
  {
    year: "2020",
    title: "Operational Expansion",
    description:
      "Strengthened workforce operations and expanded support across multiple regions.",
    variant: "text",
  },
];

const bottomItems: TimelineItem[] = [
  {
    year: "2021",
    title: "Process & System Enhancement",
    description:
      "Implemented process improvements and digital tools to drive efficiency and quality.",
    variant: "text",
  },
  {
    year: "2022",
    title: "Mobile Refurbishing Production Center",
    highlightWords: ["Refurbishing"],
    description:
      "Refurbished over 350K units of certified mobile phones for US carriers such as AT&T, T-Mobile, Verizon, and more.",
    variant: "card",
    image: "/images/its-2022.png",
    accentDot: true,
  },
  {
    year: "2023",
    title: "Samsung Packaging Production Center",
    highlightWords: ["Packaging"],
    description:
      "Operated commercial packaging lines supporting over 1 million mobile devices and accessories for major US carriers.",
    variant: "text",
  },
  {
    year: "2024",
    title: "Service & Capability Growth",
    description:
      "Expanded logistics, technical support, and automation services to meet growing client demands.",
    variant: "text",
  },
  {
    year: "2025",
    title: "Integrated Operational Solutions",
    highlightWords: ["Operational"],
    description:
      "Expanding into automation solutions and integrated workforce systems. Delivering smarter, data-driven operations across industries.",
    variant: "wide",
    image: "/images/its-2025.png",
  },
];

const allItems = [...topItems, ...bottomItems];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function HistorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.08 });

  return (
    <section
      ref={sectionRef}
      className="section-shell overflow-hidden bg-[#FAFAF8]"
      aria-labelledby="history-heading"
    >
      <div className="layout-container">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.p
            className="flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500"
            variants={itemVariants}
          >
            <span className="h-2 w-2 rounded-full bg-neutral-400" aria-hidden />
            OUR JOURNEY
          </motion.p>

          <motion.h2
            id="history-heading"
            className="mt-6 text-[clamp(1.85rem,3vw,2.65rem)] font-medium leading-[1.12] tracking-[-0.04em] text-black"
            variants={itemVariants}
          >
            Operational{" "}
            <span className="text-[#235CFF]">Growth</span> Through Experience
          </motion.h2>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-base leading-[1.85] text-neutral-500 md:text-[17px]"
            variants={itemVariants}
          >
            From our founding to becoming a trusted operational partner, ITS has
            continuously expanded our capabilities, people, and infrastructure to
            deliver greater value to our clients.
          </motion.p>
        </motion.div>

        <motion.div
          className="hidden lg:block"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="mt-20">
            <TimelineRow items={topItems} rowHeight={TIMELINE_ROW_H_TOP} />
          </div>

          <div className="-mt-12">
            <TimelineRow
              items={bottomItems}
              rowHeight={TIMELINE_ROW_H_BOTTOM}
            />
          </div>
        </motion.div>

        <motion.ol
          className="relative mt-12 space-y-10 lg:hidden"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div
            className="absolute bottom-4 left-[7px] top-2 w-px bg-neutral-300"
            aria-hidden
          />

          {allItems.map((item) => (
            <motion.li
              key={item.year}
              className="relative pl-8"
              variants={itemVariants}
            >
              <span
                className={`absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[#FAFAF8] ${
                  item.accentDot ? "bg-[#235CFF]" : "bg-neutral-400"
                }`}
                aria-hidden
              />

              <TimelineContent item={item} />
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}

function TimelineRow({
  items,
  rowHeight,
}: {
  items: TimelineItem[];
  rowHeight: number;
}) {
  const belowContentH =
    rowHeight - TIMELINE_LINE_TOP - TIMELINE_CONNECTOR_H / 2;

  return (
    <div
      className="relative grid grid-cols-5 gap-6 xl:gap-8"
      style={{ height: rowHeight }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 h-px bg-black/10"
        style={{ top: TIMELINE_LINE_TOP }}
        aria-hidden
      />

      {items.map((item) => {
        const isBelow = item.placement === "below";

        return (
          <div
            key={item.year}
            className="relative flex min-w-0 flex-col items-center"
            style={{ height: rowHeight }}
          >
            {!isBelow ? (
              <div
                className="flex w-full items-end justify-center px-1"
                style={{ height: TIMELINE_CONTENT_H }}
              >
                <TimelineContent item={item} />
              </div>
            ) : (
              <div style={{ height: TIMELINE_CONTENT_H }} aria-hidden />
            )}

            <TimelineConnector accentDot={item.accentDot} />

            {isBelow ? (
              <div
                className="flex w-full items-start justify-center px-1"
                style={{ height: belowContentH }}
              >
                <TimelineContent item={item} align="start" />
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

function TimelineConnector({ accentDot }: { accentDot?: boolean }) {
  return (
    <div
      className="relative z-10 w-full"
      style={{ height: TIMELINE_CONNECTOR_H }}
    >
      <span
        className="absolute left-1/2 top-1/2 h-full w-px -translate-x-1/2 -translate-y-1/2 bg-black/10"
        aria-hidden
      />

      <span
        className={`absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full ${
          accentDot ? "bg-[#235CFF]" : "bg-neutral-400"
        }`}
        aria-hidden
      />
    </div>
  );
}

function renderHighlightedTitle(title: string, highlightWords?: string[]) {
  const keyword = highlightWords?.[0];

  if (!keyword) {
    return title;
  }

  const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`\\b(${escaped})\\b`);
  const parts = title.split(pattern);

  return parts.map((part, index) =>
    part === keyword ? (
      <span key={`${part}-${index}`} className="text-[#355CFF]">
        {part}
      </span>
    ) : (
      <span key={`${part}-${index}`}>{part}</span>
    ),
  );
}

function TimelineContent({
  item,
  align = "end",
}: {
  item: TimelineItem;
  align?: "end" | "start";
}) {
  const justify = align === "start" ? "justify-start" : "justify-end";

  const imageHeightClass = largeImageYears.includes(item.year)
    ? "h-[96px]"
    : "h-[48px]";

  if (item.variant === "text") {
    return (
      <div
        className={`${MILESTONE_WIDTH} text-center`}
        style={{ height: align === "start" ? "auto" : CARD_HEIGHT_PX }}
      >
        <div className={`flex h-full flex-col ${justify}`}>
          <p className="text-sm font-semibold text-black">{item.year}</p>

          <h3 className="mt-2 text-[15px] font-semibold leading-snug tracking-[-0.02em] text-black">
            {renderHighlightedTitle(item.title, item.highlightWords)}
          </h3>

          <p className="mt-2 text-xs leading-6 text-neutral-500">
            {item.description}
          </p>
        </div>
      </div>
    );
  }

  if (item.variant === "wide") {
    return (
      <article
        className={`${MILESTONE_WIDTH} overflow-hidden rounded-[22px] border border-black/10 bg-white p-3.5 shadow-sm xl:max-w-[220px]`}
        style={{ height: CARD_HEIGHT_PX }}
      >
        <div className="flex h-full flex-col">
          <p className="text-sm font-semibold text-black">{item.year}</p>

          <h3 className="mt-1 text-[13px] font-semibold leading-snug tracking-[-0.02em] text-black">
            {renderHighlightedTitle(item.title, item.highlightWords)}
          </h3>

          <p className="mt-1 line-clamp-2 text-[11px] leading-5 text-neutral-500">
            {item.description}
          </p>

          {item.image ? (
            <MilestoneImage
              src={item.image}
              alt={item.title}
              className={`mt-2 ${imageHeightClass} w-full shrink-0`}
            />
          ) : null}
        </div>
      </article>
    );
  }

  return (
    <article
      className={`${MILESTONE_WIDTH} flex flex-col overflow-hidden rounded-[22px] border border-black/10 bg-white p-3.5 shadow-sm`}
      style={{ height: CARD_HEIGHT_PX }}
    >
      <p className="text-sm font-semibold text-black">{item.year}</p>

      <h3 className="mt-1.5 text-[14px] font-semibold leading-snug tracking-[-0.02em] text-black">
        {renderHighlightedTitle(item.title, item.highlightWords)}
      </h3>

      <p className="mt-1.5 line-clamp-3 text-[11px] leading-5 text-neutral-500">
        {item.description}
      </p>

      {item.image ? (
        <MilestoneImage
          src={item.image}
          alt={item.title}
          className={`mt-auto ${imageHeightClass} w-full shrink-0`}
        />
      ) : null}
    </article>
  );
}

function MilestoneImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-neutral-100 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="200px"
      />
    </div>
  );
}