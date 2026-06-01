"use client";

import {
  motion,
  useInView,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import { useRef, type RefObject } from "react";

import { cn } from "@/lib/utils";

type RevealVariants = {
  visible: (index: number) => object;
  hidden: object;
};

type TimelineContentProps = {
  as?: "div" | "p" | "h1" | "h2" | "h3" | "article";
  className?: string;
  animationNum?: number;
  customVariants?: RevealVariants;
  timelineRef?: RefObject<HTMLDivElement | null>;
  children: React.ReactNode;
} & Omit<HTMLMotionProps<"div">, "children">;

const defaultRevealVariants: RevealVariants = {
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

const motionElements = {
  div: motion.div,
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  article: motion.article,
} as const;

export function TimelineContent({
  as = "div",
  className,
  animationNum = 0,
  customVariants,
  timelineRef,
  children,
  ...props
}: TimelineContentProps) {
  const localRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(timelineRef ?? localRef, {
    once: true,
    amount: 0.12,
  });

  const variants = (customVariants ?? defaultRevealVariants) as Variants;
  const MotionComponent = motionElements[as];

  return (
    <MotionComponent
      ref={localRef}
      className={cn(className)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={animationNum}
      variants={variants}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
