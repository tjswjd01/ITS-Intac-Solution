"use client";

import { cn } from "@/lib/utils";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import type React from "react";

type HeroHighlightProps = {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  variant?: "default" | "subtle";
};

export function HeroHighlight({
  children,
  className,
  containerClassName,
  variant = "default",
}: HeroHighlightProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const isSubtle = variant === "subtle";

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const dotPattern = (color: string) => ({
    backgroundImage: `radial-gradient(circle, ${color} 1px, transparent 1px)`,
    backgroundSize: "16px 16px",
  });

  const baseDotColor = isSubtle ? "rgb(212 212 220)" : "rgb(212 212 212)";
  const hoverDotColor = isSubtle ? "rgb(147 197 253)" : "rgb(59 130 246)";
  const hoverRadius = isSubtle ? "160px" : "200px";
  const hoverMask = useMotionTemplate`
    radial-gradient(
      ${hoverRadius} circle at ${mouseX}px ${mouseY}px,
      black 0%,
      transparent 100%
    )
  `;

  return (
    <div
      className={cn(
        "group relative flex w-full",
        variant === "default" &&
          "h-[40rem] items-center justify-center bg-white dark:bg-black",
        variant === "subtle" && "h-auto items-stretch justify-stretch bg-transparent",
        containerClassName,
      )}
      onMouseMove={handleMouseMove}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0",
          isSubtle ? "opacity-[0.22]" : "opacity-70",
        )}
        style={dotPattern(baseDotColor)}
      />
      {!isSubtle ? (
        <div
          className="pointer-events-none absolute inset-0 opacity-0 dark:opacity-70"
          style={dotPattern("rgb(38 38 38)")}
        />
      ) : null}
      <motion.div
        className={cn(
          "pointer-events-none absolute inset-0 opacity-0 transition duration-500",
          isSubtle ? "group-hover:opacity-40" : "group-hover:opacity-80",
        )}
        style={{
          ...dotPattern(hoverDotColor),
          WebkitMaskImage: hoverMask,
          maskImage: hoverMask,
        }}
      />

      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
}

export function Highlight({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        "relative inline-block rounded-lg bg-gradient-to-r from-[#dbeafe] to-[#bfdbfe] px-1 pb-1",
        className,
      )}
    >
      {children}
    </motion.span>
  );
}
