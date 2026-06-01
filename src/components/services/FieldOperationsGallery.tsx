"use client";

import { useState } from "react";

type MediaItem = {
  type: "image" | "video";
  src: string;
  alt: string;
  ratio: string;
  span: string;
};

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
          <p className="flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0A3A86]">
            <span className="h-2 w-2 rounded-full bg-[#0A3A86]" aria-hidden />
            Field Operations
          </p>

          <h2 className="section-title mx-auto mt-5 max-w-[760px]">
            Real work, real teams, real operations.
          </h2>

          <p className="section-copy mx-auto mt-6 max-w-2xl">
            A closer look at the environments, workflows, and operational support
            behind our services.
          </p>
        </div>

        <div className="mt-12 grid w-full min-w-0 grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-4 xl:auto-rows-[190px]">
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
