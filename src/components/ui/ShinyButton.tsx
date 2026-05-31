"use client";

import Link from "next/link";
import React from "react";

type ShinyButtonVariant = "default" | "pro";

type ShinyButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  /** Black CTA with white text and restrained silver shine (Tesla / Apple Pro). */
  variant?: ShinyButtonVariant;
};

export function ShinyButton({
  children,
  className = "",
  href,
  variant = "default",
}: ShinyButtonProps) {
  const classes = `shiny-cta${variant === "pro" ? " shiny-cta--pro" : ""} ${className}`.trim();

  return (
    <>
      <style jsx global>{`
        @property --gradient-angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }

        @property --gradient-angle-offset {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }

        @property --gradient-percent {
          syntax: "<percentage>";
          initial-value: 5%;
          inherits: false;
        }

        @property --gradient-shine {
          syntax: "<color>";
          initial-value: white;
          inherits: false;
        }

        .shiny-cta {
          --shiny-cta-bg: #0f172a;
          --shiny-cta-bg-subtle: #1e293b;
          --shiny-cta-fg: #ffffff;
          --shiny-cta-highlight: #2563eb;
          --shiny-cta-highlight-subtle: #60a5fa;
          --animation: gradient-angle linear infinite;
          --duration: 5s;
          --shadow-size: 2px;
          --transition: 900ms cubic-bezier(0.25, 1, 0.5, 1);

          isolation: isolate;
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          cursor: pointer;
          outline-offset: 4px;
          padding: 0.75rem 1.5rem;
          font-size: 15px;
          line-height: 1.2;
          font-weight: 500;
          border: 1px solid transparent;
          border-radius: 9999px;
          color: var(--shiny-cta-fg);
          text-decoration: none;
          background: linear-gradient(var(--shiny-cta-bg), var(--shiny-cta-bg))
              padding-box,
            conic-gradient(
                from calc(var(--gradient-angle) - var(--gradient-angle-offset)),
                transparent,
                var(--shiny-cta-highlight) var(--gradient-percent),
                var(--gradient-shine) calc(var(--gradient-percent) * 2),
                var(--shiny-cta-highlight) calc(var(--gradient-percent) * 3),
                transparent calc(var(--gradient-percent) * 4)
              )
              border-box;
          box-shadow: inset 0 0 0 1px var(--shiny-cta-bg-subtle);
          transition: var(--transition);
          transition-property: --gradient-angle-offset, --gradient-percent,
            --gradient-shine;
        }

        .shiny-cta::before,
        .shiny-cta::after,
        .shiny-cta span::before {
          content: "";
          pointer-events: none;
          position: absolute;
          inset-inline-start: 50%;
          inset-block-start: 50%;
          translate: -50% -50%;
          z-index: -1;
        }

        .shiny-cta:active {
          translate: 0 1px;
        }

        .shiny-cta::before {
          --size: calc(100% - var(--shadow-size) * 3);
          --position: 2px;
          --space: calc(var(--position) * 2);
          width: var(--size);
          height: var(--size);
          background: radial-gradient(
              circle at var(--position) var(--position),
              rgba(255, 255, 255, 0.35) calc(var(--position) / 4),
              transparent 0
            )
            padding-box;
          background-size: var(--space) var(--space);
          background-repeat: space;
          mask-image: conic-gradient(
            from calc(var(--gradient-angle) + 45deg),
            black,
            transparent 10% 90%,
            black
          );
          border-radius: inherit;
          opacity: 0.28;
          z-index: -1;
        }

        .shiny-cta::after {
          --animation: shimmer linear infinite;
          width: 100%;
          aspect-ratio: 1;
          background: linear-gradient(
            -50deg,
            transparent,
            var(--shiny-cta-highlight),
            transparent
          );
          mask-image: radial-gradient(circle at bottom, transparent 40%, black);
          opacity: 0.35;
        }

        .shiny-cta span {
          z-index: 1;
        }

        .shiny-cta span::before {
          --size: calc(100% + 1rem);
          width: var(--size);
          height: var(--size);
          box-shadow: inset 0 -1ex 2rem 4px var(--shiny-cta-highlight);
          opacity: 0;
          transition: opacity var(--transition);
          animation: calc(var(--duration) * 1.5) breathe linear infinite;
        }

        .shiny-cta,
        .shiny-cta::before,
        .shiny-cta::after {
          animation: var(--animation) var(--duration),
            var(--animation) calc(var(--duration) / 0.4) reverse paused;
          animation-composition: add;
        }

        .shiny-cta:is(:hover, :focus-visible) {
          --gradient-percent: 16%;
          --gradient-angle-offset: 95deg;
          --gradient-shine: var(--shiny-cta-highlight-subtle);
        }

        .shiny-cta:is(:hover, :focus-visible),
        .shiny-cta:is(:hover, :focus-visible)::before,
        .shiny-cta:is(:hover, :focus-visible)::after {
          animation-play-state: running;
        }

        .shiny-cta:is(:hover, :focus-visible) span::before {
          opacity: 0.45;
        }

        @keyframes gradient-angle {
          to {
            --gradient-angle: 360deg;
          }
        }

        @keyframes shimmer {
          to {
            rotate: 360deg;
          }
        }

        @keyframes breathe {
          from,
          to {
            scale: 1;
          }

          50% {
            scale: 1.08;
          }
        }

        /* Pro: matte black, white type, silver shine — glow reduced ~40% */
        .shiny-cta--pro {
          --shiny-cta-bg: #000000;
          --shiny-cta-bg-subtle: #141414;
          --shiny-cta-fg: #ffffff;
          --shiny-cta-highlight: #d4d4d4;
          --shiny-cta-highlight-subtle: #f5f5f5;
          --duration: 6s;
        }

        .shiny-cta--pro::before {
          background: radial-gradient(
              circle at var(--position) var(--position),
              rgba(255, 255, 255, 0.21) calc(var(--position) / 4),
              transparent 0
            )
            padding-box;
          opacity: 0.17;
        }

        .shiny-cta--pro::after {
          background: linear-gradient(
            -50deg,
            transparent,
            rgba(255, 255, 255, 0.55),
            transparent
          );
          opacity: 0.21;
        }

        .shiny-cta--pro span::before {
          box-shadow: inset 0 -1ex 2rem 4px rgba(255, 255, 255, 0.35);
        }

        .shiny-cta--pro:is(:hover, :focus-visible) {
          --gradient-percent: 12%;
        }

        .shiny-cta--pro:is(:hover, :focus-visible) span::before {
          opacity: 0.27;
        }
      `}</style>

      {href ? (
        <Link href={href} className={classes}>
          <span>{children}</span>
        </Link>
      ) : (
        <button type="button" className={classes}>
          <span>{children}</span>
        </button>
      )}
    </>
  );
}
