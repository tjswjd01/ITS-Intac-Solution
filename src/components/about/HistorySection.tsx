"use client";

import Image from "next/image";
import { motion, type Variants, useInView } from "framer-motion";
import { useRef } from "react";

import { Eyebrow } from "@/components/site/primitives";
import { journey, journeyBottom, journeyTop, type Milestone } from "@/content/about";
import { cn } from "@/lib/utils";

/** Height of the strip that holds each dot; the line runs through its middle. */
const CONNECTOR_H = 40;

const allItems = [...journeyTop, ...journeyBottom];

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
      className="overflow-hidden bg-white py-16 md:py-24"
      aria-labelledby="history-heading"
    >
      <div className="layout-container">
        <motion.div
          className="mx-auto max-w-[640px] text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Eyebrow index={2} className="justify-center">
              Our Journey
            </Eyebrow>
          </motion.div>
          <motion.h2
            id="history-heading"
            className="mt-4 text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-its-navy"
            variants={itemVariants}
          >
            {journey.title}
          </motion.h2>

          <motion.p
            className="mt-4 text-[16.5px] leading-[1.7] text-its-slate-ink"
            variants={itemVariants}
          >
            {journey.copy}
          </motion.p>
        </motion.div>

        {/* Desktop: two rows, each with its milestones sitting on a line. */}
        <motion.div
          className="hidden lg:block"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="mt-14">
            <TimelineRow items={journeyTop} />
          </div>

          <div className="mt-12">
            <TimelineRow items={journeyBottom} />
          </div>
        </motion.div>

        {/* Phones and tablets: one vertical list. */}
        <motion.ol
          className="relative mx-auto mt-10 max-w-[560px] space-y-9 lg:hidden"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="absolute bottom-4 left-[6px] top-2 w-px bg-its-line" aria-hidden />

          {allItems.map((item) => (
            <motion.li key={item.year} className="relative pl-8" variants={itemVariants}>
              <span
                className={cn(
                  "absolute left-0 top-1.5 h-[13px] w-[13px] rounded-full border-2 border-white",
                  item.current ? "bg-its-navy" : "bg-its-dusty",
                )}
                aria-hidden
              />

              <TimelineContent item={item} align="left" />
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}

function TimelineRow({ items }: { items: Milestone[] }) {
  return (
    <ol
      className="relative grid gap-6 xl:gap-10"
      style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}
    >
      <li
        className="pointer-events-none absolute inset-x-0 h-px bg-its-line"
        style={{ bottom: CONNECTOR_H / 2 }}
        aria-hidden
      />

      {items.map((item) => (
        <motion.li
          key={item.year}
          className="relative flex min-w-0 flex-col items-center justify-end"
          variants={itemVariants}
        >
          <TimelineContent item={item} align="center" />
          <TimelineConnector current={item.current} />
        </motion.li>
      ))}
    </ol>
  );
}

function TimelineConnector({ current }: { current?: boolean }) {
  return (
    <div className="relative z-10 mt-4 w-full" style={{ height: CONNECTOR_H }}>
      <span
        className={cn(
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full ring-4 ring-white",
          current ? "h-3 w-3 bg-its-navy" : "h-2.5 w-2.5 bg-its-dusty",
        )}
        aria-hidden
      />
    </div>
  );
}

function TimelineContent({ item, align }: { item: Milestone; align: "center" | "left" }) {
  const centered = align === "center";

  const text = (
    <>
      <p
        className={cn(
          "inline-flex rounded-full px-3 py-1 text-[13px] font-semibold leading-none",
          item.current ? "bg-its-navy text-white" : "bg-its-dusty-soft text-its-navy",
        )}
      >
        {item.year}
      </p>

      <h3 className="mt-3 text-[16px] font-semibold leading-[1.3] tracking-[-0.02em] text-its-navy">
        {item.title}
      </h3>

      <p className="mt-2 text-[14px] leading-[1.6] text-its-slate-ink">{item.description}</p>
    </>
  );

  if (!item.image) {
    return (
      <div className={cn("w-full", centered && "max-w-[270px] text-center")}>{text}</div>
    );
  }

  return (
    <article
      className={cn(
        "w-full overflow-hidden rounded-[20px] border border-its-line bg-white",
        centered && "max-w-[300px] text-center",
      )}
    >
      <div className="relative h-[120px] w-full bg-its-dusty-soft">
        <Image
          src={item.image}
          alt={item.imageAlt ?? ""}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 300px, 560px"
        />
      </div>
      <div className="px-4 pb-5 pt-4">{text}</div>
    </article>
  );
}
