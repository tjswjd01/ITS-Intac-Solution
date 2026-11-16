"use client";

import { useEffect, useRef } from "react";
import { Bot, Globe, Layers, Settings2, UserSearch, UsersRound, type LucideIcon } from "lucide-react";
import { motion, type Variants, useInView, useReducedMotion } from "framer-motion";

import { accents, type AccentName } from "@/components/site/accents";
import { Eyebrow, StatementBand } from "@/components/site/primitives";
import { coreStrengths, type StrengthKey } from "@/content/about";

/** Same tile, size and stroke for all six; the tint follows the site accent roles. */
const ICON_TILE = "flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px]";
const tints: Record<StrengthKey, AccentName> = {
  "direct-hire": "coral",
  workforce: "slate",
  engineering: "dusty",
  "managed-operations": "slate",
  automation: "dusty",
  "market-entry": "teal",
};
const ICON_SIZE = "h-[22px] w-[22px]";
const ICON_STROKE = 1.6;

const icons: Record<StrengthKey, LucideIcon> = {
  "direct-hire": UserSearch,
  workforce: UsersRound,
  engineering: Settings2,
  "managed-operations": Layers,
  automation: Bot,
  "market-entry": Globe,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 14, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

type Strength = (typeof coreStrengths.left)[number];

export default function AboutCoreStrengths() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      aria-labelledby="core-strengths-heading"
      className="bg-white py-16 md:py-24"
    >
      <motion.div
        className="layout-container"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="mx-auto max-w-[640px] text-center" variants={itemVariants}>
          <Eyebrow index={1} className="justify-center">
            Core Strengths
          </Eyebrow>
          <h2
            id="core-strengths-heading"
            className="mt-4 text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-its-navy"
          >
            {coreStrengths.title}
          </h2>
          <p className="mt-4 text-[16.5px] leading-[1.7] text-its-slate-ink">{coreStrengths.copy}</p>
        </motion.div>

        <div className="mt-12 grid w-full min-w-0 grid-cols-1 items-stretch gap-x-8 gap-y-9 md:grid-cols-2 lg:mt-14 lg:grid-cols-[minmax(0,1fr)_360px_minmax(0,1fr)] xl:gap-x-14">
          <StrengthColumn items={coreStrengths.left} />

          <motion.div
            className="order-first flex justify-center md:col-span-2 lg:order-none lg:col-span-1"
            variants={itemVariants}
          >
            <VideoMediaCard isInView={isInView} />
          </motion.div>

          <StrengthColumn items={coreStrengths.right} />
        </div>

        <motion.div variants={itemVariants}>
          <StatementBand className="mt-14" highlight="fit, quality, delivery and efficiency together.">
            We understand the technology and the floor, so we judge
          </StatementBand>
        </motion.div>
      </motion.div>
    </section>
  );
}

function StrengthColumn({ items }: { items: Strength[] }) {
  return (
    <ul className="flex flex-col justify-center gap-9 lg:gap-12">
      {items.map((item, index) => (
        <StrengthItem key={item.key} item={item} delay={index * 0.08} />
      ))}
    </ul>
  );
}

function VideoMediaCard({ isInView }: { isInView: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (prefersReducedMotion || !isInView) {
      video.pause();
      return;
    }

    void video.play();
  }, [isInView, prefersReducedMotion]);

  return (
    <motion.div
      className="relative aspect-[3/4] w-full max-w-[360px] overflow-hidden rounded-[28px] border border-its-line bg-its-dusty-soft lg:aspect-auto lg:h-[480px]"
      initial={{ opacity: 0, y: 12 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
      >
        <source src={coreStrengths.video} type="video/mp4" />
      </video>
    </motion.div>
  );
}

function StrengthItem({ item, delay }: { item: Strength; delay: number }) {
  const Icon = icons[item.key];

  return (
    <motion.li className="flex gap-4" variants={itemVariants} transition={{ delay }}>
      <span className={ICON_TILE} style={{ backgroundColor: accents[tints[item.key]].bg, color: accents[tints[item.key]].fg }}>
        <Icon className={ICON_SIZE} strokeWidth={ICON_STROKE} aria-hidden />
      </span>

      <div className="min-w-0">
        <h3 className="text-[17px] font-semibold leading-[1.3] tracking-[-0.02em] text-its-navy">
          {item.title}
        </h3>
        <p className="mt-1.5 text-[15px] leading-[1.6] text-its-slate-ink">{item.description}</p>
      </div>
    </motion.li>
  );
}
