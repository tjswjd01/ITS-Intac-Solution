import {
  Bot,
  Camera,
  Cpu,
  Gauge,
  Radar,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

const technologies = [
  {
    number: "01",
    title: "Machine Vision",
    description:
      "Camera-based inspection for appearance, alignment, defects, labeling, and pass/fail verification.",
    icon: Camera,
  },
  {
    number: "02",
    title: "Robotic Handling",
    description:
      "Robotic arms, conveyors, fixtures, and transfer systems that reduce repetitive manual handling.",
    icon: Bot,
  },
  {
    number: "03",
    title: "Control Systems",
    description:
      "PLC logic and equipment controls that coordinate motion, timing, sensors, and system responses.",
    icon: Cpu,
  },
  {
    number: "04",
    title: "Sensor Integration",
    description:
      "Sensors, triggers, safety signals, and detection points that help automation systems react accurately.",
    icon: Radar,
  },
  {
    number: "05",
    title: "Data Monitoring",
    description:
      "Operational dashboards that capture equipment activity, inspection results, and workflow status.",
    icon: Gauge,
  },
  {
    number: "06",
    title: "Quality Verification",
    description:
      "Automated checks that support more consistent inspection, reporting, and quality control decisions.",
    icon: ShieldCheck,
  },
] as const;

function CardDecorator({ children }: { children: ReactNode }) {
  return (
    <div
      aria-hidden
      className="relative size-28 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,58,134,0.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(10,58,134,0.22)_1px,transparent_1px)] bg-[size:22px_22px] opacity-70" />
      <div className="absolute inset-0 m-auto flex size-12 items-center justify-center rounded-2xl border border-[#0A3A86]/15 bg-white shadow-[0_12px_40px_rgba(10,58,134,0.12)]">
        {children}
      </div>
    </div>
  );
}

function TechnologyCard({
  number,
  title,
  description,
  icon: Icon,
}: {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <Card className="group relative overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-none transition-all duration-300 hover:-translate-y-1 hover:border-[#0A3A86]/20 hover:shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardDecorator>
            <Icon className="size-6 text-[#0A3A86]" aria-hidden />
          </CardDecorator>

          <span className="font-mono text-[12px] tracking-[0.18em] text-[#98A2B3]">
            {number}
          </span>
        </div>

        <h3 className="mt-7 text-[20px] font-semibold tracking-[-0.02em] text-[#111111]">
          {title}
        </h3>
      </CardHeader>

      <CardContent>
        <p className="text-[15px] leading-7 text-[#667085]">{description}</p>
      </CardContent>
    </Card>
  );
}

export default function AutomationCoreTechnologies() {
  return (
    <section id="core-technologies" className="bg-[#F7F8FA] py-20 md:py-28 lg:py-32">
      <div className="layout-container">
        <div className="max-w-3xl">
          <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#0A3A86]">
            <span className="h-2 w-2 rounded-full bg-[#0A3A86]" aria-hidden />
            Core Technologies
          </p>

          <h2 className="mt-5 text-balance text-[clamp(36px,4vw,56px)] font-semibold leading-[1.05] tracking-[-0.04em] text-[#111111]">
            Core technologies behind practical automation.
          </h2>

          <p className="mt-6 max-w-[860px] text-[18px] leading-8 text-[#667085]">
            ITS combines inspection technology, motion systems, equipment
            controls, and data visibility to build automation solutions that fit
            real operational environments.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((item) => (
            <TechnologyCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
