"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Calendar,
  Cog,
  Headset,
  Package,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  Users,
} from "lucide-react";
import {
  motion,
  type Variants,
  useInView,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

const iconClass = "h-5 w-5 text-neutral-500";

type ServiceConfig = {
  icon: ReactNode;
  title: string;
  description: string;
  position: "left" | "right";
};

const services: ServiceConfig[] = [
  {
    icon: <Smartphone className={iconClass} />,
    title: "Mobile Refurbishment",
    description:
      "Repair, testing, grading, and preparation workflows for mobile devices and high-volume operational programs.",
    position: "left",
  },
  {
    icon: <ShieldCheck className={iconClass} />,
    title: "Quality Assurance & Inspection",
    description:
      "Inspection systems, reporting standards, and quality control processes designed for reliable, accountable output.",
    position: "left",
  },
  {
    icon: <Users className={iconClass} />,
    title: "Staffing Solutions",
    description:
      "Workforce planning, attendance visibility, team coordination, and operational staffing for dependable execution.",
    position: "left",
  },
  {
    icon: <Package className={iconClass} />,
    title: "Packaging & Logistics",
    description:
      "Packaging, preparation, coordination, and movement support aligned with warehouse and fulfillment operations.",
    position: "right",
  },
  {
    icon: <Headset className={iconClass} />,
    title: "ATM Technical Support",
    description:
      "Field-ready technical support and maintenance for ATM and kiosk networks across active service locations.",
    position: "right",
  },
  {
    icon: <Cog className={iconClass} />,
    title: "Automation Solutions",
    description:
      "Workflow optimization, automation integration, and system-driven processes that help teams scale with confidence.",
    position: "right",
  },
];

const stats = [
  {
    icon: <Award className="h-5 w-5 text-neutral-500" />,
    value: 10,
    label: "Devices Processed",
    suffix: "M+",
  },
  {
    icon: <Users className="h-5 w-5 text-neutral-500" />,
    value: 700,
    label: "Skilled Professionals",
    suffix: "+",
  },
  {
    icon: <Calendar className="h-5 w-5 text-neutral-500" />,
    value: 15,
    label: "Years Experience",
    suffix: "+",
  },
  {
    icon: <TrendingUp className="h-5 w-5 text-neutral-500" />,
    value: 99.5,
    label: "Quality Accuracy",
    suffix: "%",
  },
];

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

export default function AboutIntro() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.35 });

  return (
    <section
      id="about-intro"
      ref={sectionRef}
      className="section-shell bg-[#FAFAF8] pt-28 text-[#0B0F14] md:pt-36"
    >
      <motion.div
        className="layout-container"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="mx-auto flex max-w-3xl flex-col items-center text-center" variants={itemVariants}>
          <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
            <span className="h-2 w-2 rounded-full bg-neutral-400" aria-hidden />
            About ITS
          </p>

          <h1 className="mt-6 text-[clamp(2rem,3.2vw,2.75rem)] font-medium leading-[1.1] tracking-[-0.04em] text-black">
            Operational infrastructure{" "}
            <span className="text-[#8B929D]">for enterprise teams.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-[1.85] text-neutral-500 md:text-[17px]">
            ITS is a workforce and operations partner dedicated to helping enterprise teams
            run refurbishment, quality assurance, logistics, technical support, and automation
            programs with greater consistency, visibility, and accountability.
          </p>
        </motion.div>

        <div className="relative mt-14 grid grid-cols-1 items-stretch gap-10 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_390px_minmax(0,1fr)] lg:gap-8 xl:gap-12">
          <div className="flex flex-col justify-between gap-12 lg:gap-0 lg:py-1">
            {services
              .filter((service) => service.position === "left")
              .map((service, index) => (
                <ServiceItem
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.08}
                />
              ))}
          </div>

          <motion.div
            className="order-first flex justify-center lg:order-none"
            variants={itemVariants}
          >
            <VideoMediaCard isInView={isInView} />
          </motion.div>

          <div className="flex flex-col justify-between gap-12 lg:gap-0 lg:py-1">
            {services
              .filter((service) => service.position === "right")
              .map((service, index) => (
                <ServiceItem
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.08}
                />
              ))}
          </div>
        </div>

        <motion.div
          ref={statsRef}
          className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-4"
          initial="hidden"
          animate={isStatsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <StatCounter
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 0.08}
            />
          ))}
        </motion.div>

        <motion.div className="flex justify-center" variants={itemVariants}>
          <Link
            href="/services"
            className="mx-auto mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-black px-8 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Our Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
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
      className="relative h-[520px] w-full max-w-[390px] overflow-hidden rounded-[28px] border border-black/10 bg-neutral-100 shadow-sm"
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
        <source src="/videos/about-its.mp4" type="video/mp4" />
      </video>
    </motion.div>
  );
}

type ServiceItemProps = {
  icon: ReactNode;
  title: string;
  description: string;
  variants: Variants;
  delay: number;
};

function ServiceItem({ icon, title, description, variants, delay }: ServiceItemProps) {
  return (
    <motion.div className="flex gap-4" variants={variants} transition={{ delay }}>
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-black/10 bg-neutral-100">
        {icon}
      </div>

      <div className="min-w-0">
        <h3 className="text-base font-semibold tracking-[-0.02em] text-black md:text-[17px]">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-7 text-neutral-500">{description}</p>
      </div>
    </motion.div>
  );
}

type StatCounterProps = {
  icon: ReactNode;
  value: number;
  label: string;
  suffix: string;
  delay: number;
};

function StatCounter({ icon, value, label, suffix, delay }: StatCounterProps) {
  const countRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(countRef, { once: true, amount: 0.45 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 12,
  });

  useEffect(() => {
    if (prefersReducedMotion) return;

    if (isInView && !hasAnimated) {
      springValue.set(value);
      setHasAnimated(true);
    }
  }, [isInView, value, springValue, hasAnimated, prefersReducedMotion]);

  const displayValue = useTransform(springValue, (latest) => {
    if (Number.isInteger(value)) {
      return Math.floor(latest);
    }
    return Math.round(latest * 10) / 10;
  });

  const staticDisplay = Number.isInteger(value) ? value : value.toFixed(1);

  return (
    <motion.div
      ref={countRef}
      className="flex h-[72px] items-center gap-4 rounded-2xl border border-black/10 bg-white px-6 py-3 shadow-sm"
      variants={{
        hidden: { opacity: 0, y: 12 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay },
        },
      }}
    >
      <div className="flex shrink-0 items-center justify-center text-neutral-500">
        {icon}
      </div>

      <div className="min-w-0">
        <div className="text-2xl font-semibold leading-none text-black">
          {prefersReducedMotion ? (
            <span>
              {staticDisplay}
              {suffix}
            </span>
          ) : (
            <span className="inline-flex items-baseline">
              <motion.span>{displayValue}</motion.span>
              <span>{suffix}</span>
            </span>
          )}
        </div>
        <p className="mt-1 text-xs text-neutral-500">{label}</p>
      </div>
    </motion.div>
  );
}
