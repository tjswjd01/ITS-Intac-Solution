"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Building2,
  ClipboardList,
  LineChart,
  UserSearch,
  UsersRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";

const NAVY = "#0F172A";
const ACCENT = "#0A3A86";
const BODY = "#6B7280";
const HEADING = "#0B0F14";
const LINE = "#CBD5E1";
const BORDER = "#E5E7EB";

type MediaItem = {
  type: "image" | "video";
  src: string;
  alt: string;
  ratio: string;
  span: string;
};

type WorkflowStage = {
  label: string;
  icon: LucideIcon;
};

const workflowStages: WorkflowStage[] = [
  { label: "Client Facility", icon: Building2 },
  { label: "Workforce Planning", icon: ClipboardList },
  { label: "Recruitment & Screening", icon: UserSearch },
  { label: "Deployment", icon: UsersRound },
  { label: "Workforce Management", icon: LineChart },
  { label: "Reporting & Operational Growth", icon: BarChart3 },
];

const FALLBACK_IMAGE = "/images/placeholder-photo.svg";

const mediaItems: MediaItem[] = [
  {
    type: "video",
    src: "/videos/field/operation-01.mp4",
    alt: "ITS field operations overview",
    ratio: "aspect-[16/10] xl:aspect-auto",
    span: "col-span-1 md:col-span-2 xl:col-span-2 xl:row-span-2",
  },
  {
    type: "image",
    src: "/images/field/operation-01.jpg",
    alt: "Warehouse refurbishment workflow",
    ratio: "aspect-[4/3] xl:aspect-auto",
    span: "col-span-1 xl:col-span-1 xl:row-span-1",
  },
  {
    type: "image",
    src: "/images/field/operation-02.jpg",
    alt: "Quality inspection station",
    ratio: "aspect-[4/3] xl:aspect-auto",
    span: "col-span-1 xl:col-span-1 xl:row-span-1",
  },
  {
    type: "image",
    src: "/images/field/operation-03.jpg",
    alt: "Operational team coordination",
    ratio: "aspect-[16/9] xl:aspect-auto",
    span: "col-span-1 md:col-span-2 xl:col-span-2 xl:row-span-1",
  },
  {
    type: "image",
    src: "/images/field/operation-04.jpg",
    alt: "Warehouse operations support",
    ratio: "aspect-[3/4] xl:aspect-auto",
    span: "col-span-1 xl:col-span-1 xl:row-span-2",
  },
  {
    type: "image",
    src: "/images/field/operation-05.jpg",
    alt: "Technical field support",
    ratio: "aspect-[4/3] xl:aspect-auto",
    span: "col-span-1 xl:col-span-1 xl:row-span-1",
  },
  {
    type: "video",
    src: "/videos/field/operation-02.mp4",
    alt: "Automation and workflow operations",
    ratio: "aspect-[16/9] xl:aspect-auto",
    span: "col-span-1 md:col-span-2 xl:col-span-2 xl:row-span-1",
  },
  {
    type: "image",
    src: "/images/field/operation-06.jpg",
    alt: "Device testing environment",
    ratio: "aspect-[4/3] xl:aspect-auto",
    span: "col-span-1 xl:col-span-1 xl:row-span-1",
  },
  {
    type: "image",
    src: "/images/field/operation-07.jpg",
    alt: "Operational workspace overview",
    ratio: "aspect-[4/3] xl:aspect-auto",
    span: "col-span-1 xl:col-span-1 xl:row-span-1",
  },
];

const bottomRowMedia: MediaItem[] = [
  {
    type: "video",
    src: "/videos/field/operation-03.mp4",
    alt: "Field operations workflow video",
    ratio: "aspect-[16/9] xl:aspect-auto",
    span: "col-span-1 md:col-span-1 xl:col-span-2",
  },
  {
    type: "image",
    src: "/images/field/operation-08.jpg",
    alt: "End-to-end service execution",
    ratio: "aspect-[16/9] xl:aspect-auto",
    span: "col-span-1 md:col-span-1 xl:col-span-2 xl:col-start-3",
  },
];

const entranceEase = [0.22, 1, 0.36, 1] as const;

function WorkflowMarker({ stage, index }: { stage: WorkflowStage; index: number }) {
  const Icon = stage.icon;

  return (
    <div className="group flex min-w-0 flex-col items-center text-center max-md:flex-row max-md:items-start max-md:gap-4 max-md:text-left">
      <div
        className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border bg-white transition-transform duration-300 group-hover:scale-105"
        style={{ borderColor: BORDER }}
      >
        <Icon
          className="h-5 w-5"
          style={{ color: NAVY }}
          strokeWidth={1.75}
          aria-hidden
        />
      </div>

      <div className="mt-4 min-w-0 max-md:mt-0.5 max-md:flex-1">
        <p
          className="text-[11px] font-bold uppercase tracking-[0.14em]"
          style={{ color: BODY }}
        >
          Stage {String(index + 1).padStart(2, "0")}
        </p>
        <p
          className="mt-1.5 text-[13px] font-semibold leading-snug tracking-[-0.02em] sm:text-[14px]"
          style={{ color: HEADING }}
        >
          {stage.label}
        </p>
      </div>
    </div>
  );
}

function OperationalWorkflow() {
  return (
    <div className="mt-12 lg:mt-14">
      {/* Desktop: 6 stages horizontal */}
      <div className="relative hidden lg:block">
        <div
          className="pointer-events-none absolute left-[8%] right-[8%] top-6 h-px"
          style={{ backgroundColor: LINE }}
          aria-hidden
        />

        <div className="grid grid-cols-6 gap-3">
          {workflowStages.map((stage, index) => (
            <motion.div
              key={stage.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.45,
                delay: index * 0.06,
                ease: entranceEase,
              }}
            >
              <WorkflowMarker stage={stage} index={index} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tablet: 3 x 2 grid */}
      <div className="hidden md:grid md:grid-cols-3 md:gap-x-6 md:gap-y-10 lg:hidden">
        {workflowStages.map((stage, index) => (
          <motion.div
            key={stage.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.45,
              delay: index * 0.06,
              ease: entranceEase,
            }}
          >
            <WorkflowMarker stage={stage} index={index} />
          </motion.div>
        ))}
      </div>

      {/* Mobile: vertical timeline */}
      <div className="relative md:hidden">
        <div
          className="pointer-events-none absolute bottom-4 left-6 top-6 w-px"
          style={{ backgroundColor: LINE }}
          aria-hidden
        />

        <div className="flex flex-col gap-8">
          {workflowStages.map((stage, index) => (
            <motion.div
              key={stage.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.45,
                delay: index * 0.06,
                ease: entranceEase,
              }}
            >
              <WorkflowMarker stage={stage} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function GalleryMedia({
  item,
  className = "",
}: {
  item: MediaItem;
  className?: string;
}) {
  const [imageSrc, setImageSrc] = useState(item.src);

  return (
    <article
      className={`group relative min-h-[220px] overflow-hidden rounded-[24px] border border-black/10 bg-[#ECEFF3] ${item.ratio} ${item.span} xl:min-h-0 xl:h-full ${className}`}
    >
      {item.type === "video" ? (
        <>
          <video
            src={item.src}
            className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={item.alt}
          />
          <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/45 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
            Video
          </span>
        </>
      ) : (
        <img
          src={imageSrc}
          alt={item.alt}
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
          onError={() => {
            if (imageSrc !== FALLBACK_IMAGE) {
              setImageSrc(FALLBACK_IMAGE);
            }
          }}
        />
      )}

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />
    </article>
  );
}

export default function FieldOperationsGallery() {
  return (
    <section className="section-shell bg-[#FAFAF8]">
      <div className="layout-container">
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: ACCENT }}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: ACCENT }}
              aria-hidden
            />
            Field Operations
          </p>

          <h2 className="section-title mx-auto mt-5 max-w-[760px] text-[#0B0F14]">
            How Operations Come Together
          </h2>

          <p className="section-copy mx-auto mt-6 max-w-2xl">
            From workforce planning to deployment and ongoing support, ITS
            provides structured operational execution across manufacturing,
            logistics, refurbishment, and technical service environments.
          </p>
        </div>

        <OperationalWorkflow />

        <div
          className="my-12 border-t lg:my-14"
          style={{ borderColor: BORDER }}
          aria-hidden
        />

        <div className="grid w-full min-w-0 grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-4 xl:auto-rows-[190px]">
          {mediaItems.map((item) => (
            <GalleryMedia key={item.src} item={item} />
          ))}
        </div>

        <div className="mt-4 grid w-full min-w-0 grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 xl:mt-5 xl:grid-cols-4 xl:auto-rows-[190px]">
          {bottomRowMedia.map((item) => (
            <GalleryMedia key={item.src} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
