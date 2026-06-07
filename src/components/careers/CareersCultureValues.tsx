"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

type TextTile = {
  type: "text";
  title: string;
  description: string;
  variant: "professional" | "collaboration" | "integrity" | "growth";
};

type ImageTile = {
  type: "image";
  src: string;
  fallback: string;
  alt: string;
};

type CultureTile = TextTile | ImageTile;

const tiles: CultureTile[] = [
  {
    type: "text",
    title: "Professional Environment",
    description:
      "Structured operations, strong leadership, and a culture built around accountability and excellence.",
    variant: "professional",
  },
  {
    type: "image",
    src: "/images/its-refurbish.png",
    fallback: "/images/its-hhp.png",
    alt: "ITS manufacturing and refurbishment operations",
  },
  {
    type: "text",
    title: "Team Collaboration",
    description:
      "Working together across operations, technical services, and workforce management.",
    variant: "collaboration",
  },
  {
    type: "text",
    title: "Integrity & Respect",
    description:
      "Building trust through professionalism, communication, and mutual respect.",
    variant: "integrity",
  },
  {
    type: "image",
    src: "/images/who-team.jpeg",
    fallback: "/images/its-hhp.png",
    alt: "ITS employees collaborating and training together",
  },
  {
    type: "text",
    title: "Career Growth",
    description:
      "Continuous learning, mentorship, and opportunities to develop professionally.",
    variant: "growth",
  },
];

const variantStyles = {
  professional: {
    card: "bg-[#E9E5DF]",
    title: "text-[#0F172A]",
    description: "text-[#64748B]",
  },
  collaboration: {
    card: "bg-[#F8FAFC]",
    title: "text-[#0B0F14]",
    description: "text-[#64748B]",
  },
  integrity: {
    card: "border border-[#E5E7EB] bg-white",
    title: "text-[#0B0F14]",
    description: "text-[#64748B]",
  },
  growth: {
    card: "bg-[#E7EEF8]",
    title: "text-[#173F7A]",
    description: "text-[#64748B]",
  },
} as const;

const entranceEase = [0.22, 1, 0.36, 1] as const;

function CultureImageTile({ tile, index }: { tile: ImageTile; index: number }) {
  const [imageSrc, setImageSrc] = useState(tile.src);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: entranceEase }}
      className="relative min-h-[240px] overflow-hidden rounded-[20px] sm:min-h-[260px] lg:min-h-0 lg:h-full"
    >
      <Image
        src={imageSrc}
        alt={tile.alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        onError={() => setImageSrc(tile.fallback)}
      />
    </motion.div>
  );
}

function CultureTextTile({ tile, index }: { tile: TextTile; index: number }) {
  const styles = variantStyles[tile.variant];

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: entranceEase }}
      className={`flex min-h-[240px] flex-col justify-center rounded-[20px] p-7 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)] sm:min-h-[260px] sm:p-8 lg:min-h-0 lg:h-full ${styles.card}`}
    >
      <h3
        className={`text-[18px] font-bold tracking-[-0.02em] sm:text-[19px] ${styles.title}`}
      >
        {tile.title}
      </h3>
      <p className={`mt-3 text-[14px] leading-[1.65] sm:text-[15px] ${styles.description}`}>
        {tile.description}
      </p>
    </motion.article>
  );
}

export default function CareersCultureValues() {
  return (
    <section
      id="culture-values"
      className="border-t border-[#E5E7EB]/80 bg-white py-16 md:py-20 lg:py-24"
    >
      <div className="layout-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center justify-center text-[11px] font-semibold uppercase tracking-[0.18em] text-[#173F7A]">
            <span
              className="mr-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#173F7A]"
              aria-hidden
            />
            Culture & Values
          </p>
          <h2 className="section-title mx-auto mt-5 max-w-[720px]">
            Our Culture & Values
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-[1.75] text-[#64748B] md:text-base">
            The principles that guide our teams, support our people, and shape
            how we deliver operational excellence every day.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-fr">
          {tiles.map((tile, index) =>
            tile.type === "image" ? (
              <CultureImageTile key={tile.alt} tile={tile} index={index} />
            ) : (
              <CultureTextTile key={tile.title} tile={tile} index={index} />
            ),
          )}
        </div>
      </div>
    </section>
  );
}
