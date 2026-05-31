"use client";

import { useCallback, useEffect, useState, type MouseEvent } from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  type MotionStyle,
  type MotionValue,
  type Variants,
} from "framer-motion";

import { cn } from "@/lib/utils";

export interface CarouselStep {
  id: string;
  name: string;
  title: string;
  description: string;
}

type WrapperStyle = MotionStyle & {
  "--x": MotionValue<string>;
  "--y": MotionValue<string>;
};

const IMG_FRAME =
  "rounded-2xl border border-black/[0.08] bg-white shadow-[0_24px_64px_rgba(15,23,42,0.14)]";

function useNumberCycler(totalSteps: number, interval = 5000) {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCurrentNumber((prev) => (prev + 1) % totalSteps);
    }, interval);

    return () => clearTimeout(timerId);
  }, [currentNumber, totalSteps, interval]);

  const setStep = useCallback(
    (stepIndex: number) => {
      setCurrentNumber(stepIndex % totalSteps);
    },
    [totalSteps],
  );

  return { currentNumber, setStep };
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return isMobile;
}

function IconCheck({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn("h-3.5 w-3.5", className)}
      {...props}
    >
      <path d="m229.66 77.66-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69 218.34 66.34a8 8 0 0 1 11.32 11.32Z" />
    </svg>
  );
}

const stepVariants: Variants = {
  inactive: { scale: 0.98, opacity: 0.92 },
  active: { scale: 1, opacity: 1 },
};

function FeatureCard({
  children,
  step,
  steps,
}: {
  children: React.ReactNode;
  step: number;
  steps: readonly CarouselStep[];
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightX = useMotionTemplate`${mouseX}px`;
  const spotlightY = useMotionTemplate`${mouseY}px`;
  const isMobile = useIsMobile();

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    if (isMobile) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const current = steps[step];

  return (
    <motion.div
      className="animated-cards group relative w-full"
      onMouseMove={handleMouseMove}
      style={
        {
          "--x": spotlightX,
          "--y": spotlightY,
        } as WrapperStyle
      }
    >
      <div className="relative w-full rounded-[32px] border border-black/[0.06] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(420px circle at var(--x) var(--y), rgba(10,58,134,0.06), transparent 58%)",
          }}
          aria-hidden
        />

        <div className="relative px-7 pb-10 pt-6 md:px-9 md:pb-12 md:pt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              className="flex w-full max-w-[600px] flex-col gap-2"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0A3A86]">
                Step {current.name}
              </p>
              <h3 className="text-[clamp(26px,2.8vw,36px)] font-bold leading-[1.1] tracking-[-0.035em] text-[#111111]">
                {current.title}
              </h3>
              <p className="max-w-[560px] text-[15px] leading-[1.65] text-[#4B5563]">
                {current.description}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="relative mt-7 w-full md:mt-8">{children}</div>
        </div>
      </div>
    </motion.div>
  );
}

function StepsNav({
  steps: stepItems,
  current,
  onChange,
}: {
  steps: readonly CarouselStep[];
  current: number;
  onChange: (index: number) => void;
}) {
  return (
    <nav aria-label="Feature navigation" className="w-full lg:pt-2">
      <ol className="flex flex-col gap-2.5" role="list">
        {stepItems.map((step, stepIdx) => {
          const isCompleted = current > stepIdx;
          const isCurrent = current === stepIdx;
          const stepNumber = stepIdx + 1;

          return (
            <motion.li
              key={step.id}
              initial="inactive"
              animate={isCurrent ? "active" : "inactive"}
              variants={stepVariants}
              transition={{ duration: 0.28 }}
            >
              <button
                type="button"
                className={cn(
                  "group flex w-full items-center gap-3 rounded-full px-4 py-2.5 text-left transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A3A86]/35 focus-visible:ring-offset-2",
                  isCurrent
                    ? "bg-[#0A3A86] text-white shadow-[0_8px_24px_rgba(10,58,134,0.28)]"
                    : "bg-[#F3F4F6] text-[#4B5563] hover:bg-[#E5E7EB]",
                )}
                onClick={() => onChange(stepIdx)}
              >
                <span
                  className={cn(
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold transition-all duration-300",
                    isCurrent
                      ? "bg-white text-[#0A3A86]"
                      : isCompleted
                        ? "bg-[#0A3A86] text-white"
                        : "bg-[#E5E7EB] text-[#6B7280] group-hover:bg-[#D1D5DB]",
                  )}
                >
                  {isCompleted && !isCurrent ? <IconCheck /> : stepNumber}
                </span>
                <span
                  className={cn(
                    "line-clamp-2 text-[13px] font-semibold leading-snug tracking-[-0.01em]",
                    isCurrent ? "text-white" : "text-[#374151]",
                  )}
                >
                  {step.title}
                </span>
              </button>
            </motion.li>
          );
        })}
      </ol>
    </nav>
  );
}

function PanelChrome({
  title,
  variant = "light",
  children,
  className,
}: {
  title: string;
  variant?: "light" | "dark";
  children: React.ReactNode;
  className?: string;
}) {
  const isDark = variant === "dark";

  return (
    <div className={cn(IMG_FRAME, "h-full w-full overflow-hidden", className)}>
      <div
        className={cn(
          "flex items-center gap-1.5 border-b px-4 py-3",
          isDark ? "border-white/10 bg-black/40" : "border-black/[0.06] bg-[#F9FAFB]",
        )}
      >
        <span className={cn("h-2 w-2 rounded-full", isDark ? "bg-red-400/90" : "bg-red-400")} />
        <span className={cn("h-2 w-2 rounded-full", isDark ? "bg-amber-400/90" : "bg-amber-400")} />
        <span className={cn("h-2 w-2 rounded-full", isDark ? "bg-emerald-400/90" : "bg-emerald-400")} />
        <span
          className={cn(
            "ml-2 text-[11px] font-semibold uppercase tracking-[0.14em]",
            isDark ? "text-white/55" : "text-[#6B7280]",
          )}
        >
          {title}
        </span>
      </div>
      <div className={cn("p-3 md:p-4", isDark ? "bg-[#0F172A]" : "bg-white")}>{children}</div>
    </div>
  );
}

function VisionInspectionUI() {
  return (
    <PanelChrome title="Vision inspection UI" variant="light">
      <div className="grid h-[156px] grid-cols-[1fr_108px] gap-2.5 md:h-[168px]">
        <div className="relative overflow-hidden rounded-xl border border-[#0A3A86]/15 bg-[#EEF4FC]">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(10,58,134,0.08)_50%,transparent_100%)]" />
          <div className="absolute left-4 top-4 h-24 w-32 rounded-lg border-2 border-dashed border-[#0A3A86]/35 bg-white/80" />
          <div className="absolute bottom-4 left-4 right-4 flex justify-between text-[10px] font-medium text-[#0A3A86]">
            <span>ALIGN</span>
            <span>DEFECT SCAN</span>
            <span>PASS / FAIL</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {["OK", "OK", "NG"].map((s, i) => (
            <div
              key={i}
              className={cn(
                "flex flex-1 items-center justify-center rounded-lg text-[11px] font-bold",
                s === "NG" ? "bg-red-500/10 text-red-600" : "bg-emerald-500/10 text-emerald-700",
              )}
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </PanelChrome>
  );
}

function ScanningStation() {
  return (
    <PanelChrome title="Product scanning station" variant="dark">
      <div className="relative h-[156px] md:h-[168px]">
        <div className="absolute bottom-0 left-0 right-0 h-10 rounded-lg bg-white/10" />
        <div className="absolute bottom-12 left-[18%] h-14 w-20 rounded-md bg-white/20" />
        <div className="absolute bottom-12 left-[42%] h-14 w-20 rounded-md bg-[#0A3A86]/50 ring-2 ring-[#3dff9a]/60" />
        <div className="absolute bottom-12 left-[66%] h-14 w-20 rounded-md bg-white/20" />
        <div className="absolute left-1/2 top-2 h-16 w-24 -translate-x-1/2 rounded-b-full bg-white/15" />
        <p className="absolute right-3 top-3 rounded-full bg-[#3dff9a]/15 px-2 py-0.5 text-[10px] font-semibold text-[#3dff9a]">
          SCAN ACTIVE
        </p>
      </div>
    </PanelChrome>
  );
}

function RoboticHandlingVisual() {
  return (
    <PanelChrome title="Robotic handling line" variant="light">
      <div className="relative h-[156px] md:h-[168px]">
        <div className="absolute bottom-6 left-0 right-0 h-3 rounded-full bg-[#E5E7EB]" />
        <div className="absolute bottom-9 left-[8%] h-20 w-3 origin-bottom rotate-[-28deg] rounded-full bg-[#0A3A86]" />
        <div className="absolute bottom-[52px] left-[14%] h-10 w-10 rounded-md border-2 border-[#0A3A86]/30 bg-white" />
        <div className="absolute bottom-8 left-[38%] h-12 w-28 rounded-lg border border-[#0A3A86]/20 bg-[#EEF4FC]" />
        <div className="absolute bottom-8 left-[68%] h-10 w-24 rounded-lg bg-[#D1D5DB]" />
      </div>
    </PanelChrome>
  );
}

function TransferFixtureVisual() {
  return (
    <PanelChrome title="Fixture & transfer system" variant="dark">
      <div className="relative h-[156px] md:h-[168px]">
        <div className="absolute inset-x-6 bottom-8 top-10 rounded-xl border border-white/15 bg-white/5" />
        <div className="absolute left-10 top-14 h-16 w-16 rounded-lg bg-white/15" />
        <div className="absolute right-10 top-16 flex flex-col gap-2">
          {["Pick", "Place", "Release"].map((l) => (
            <span
              key={l}
              className="rounded-full border border-white/15 px-3 py-1 text-center text-[10px] font-medium text-white/70"
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </PanelChrome>
  );
}

function PLCControlPanel() {
  return (
    <PanelChrome title="PLC control panel" variant="dark" className="shadow-[0_28px_72px_rgba(15,23,42,0.18)]">
      <div className="grid h-[188px] gap-3 md:h-[200px] md:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-xl border border-white/10 bg-black/30 p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
            I/O Status
          </p>
          <div className="mt-4 grid grid-cols-4 gap-2">
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                className={cn(
                  "aspect-square rounded-md",
                  i % 3 === 0 ? "bg-[#3dff9a]/70" : "bg-white/10",
                )}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {["Conveyor RUN", "Sensor A1", "Safety OK", "Cycle START"].map((label, i) => (
            <div
              key={label}
              className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2.5"
            >
              <span className="text-[11px] text-white/65">{label}</span>
              <span
                className={cn(
                  "h-2 w-2 rounded-full",
                  i < 3 ? "bg-[#3dff9a]" : "bg-amber-400",
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </PanelChrome>
  );
}

function OperationsDashboard() {
  return (
    <PanelChrome title="Operations dashboard" variant="light" className="shadow-[0_28px_72px_rgba(15,23,42,0.14)]">
      <div className="h-[188px] md:h-[200px]">
        <div className="mb-3 grid grid-cols-3 gap-2.5">
          {[
            { label: "Throughput", value: "1,284" },
            { label: "Pass rate", value: "98.2%" },
            { label: "Active lines", value: "6" },
          ].map((m) => (
            <div
              key={m.label}
              className="rounded-xl border border-black/[0.06] bg-[#F9FAFB] px-3 py-3"
            >
              <p className="text-[10px] font-medium text-[#6B7280]">{m.label}</p>
              <p className="mt-1 text-lg font-semibold tracking-[-0.03em] text-[#111111]">
                {m.value}
              </p>
            </div>
          ))}
        </div>
        <div className="flex h-[92px] items-end gap-2 rounded-xl border border-black/[0.06] bg-[#F9FAFB] px-4 pb-3 pt-3">
          {[42, 58, 48, 72, 65, 80, 74].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-md bg-[#0A3A86]/80"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </PanelChrome>
  );
}

/** Unified visual stage height for steps 1–4 */
const VISUAL_STAGE =
  "relative mx-auto h-[272px] min-h-[272px] w-full max-w-[860px] md:h-[300px] md:min-h-[300px]";

function DualImageLayout({
  back,
  front,
}: {
  back: React.ReactNode;
  front: React.ReactNode;
}) {
  return (
    <div className={VISUAL_STAGE}>
      <motion.div
        className="absolute left-0 top-[2%] z-10 w-[50%] max-w-[400px]"
        initial={{ opacity: 0, x: -28, scale: 0.96 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 240, damping: 26 }}
      >
        {back}
      </motion.div>
      <motion.div
        className="absolute left-[38%] top-[16%] z-20 w-[58%] max-w-[460px]"
        initial={{ opacity: 0, x: 28, scale: 0.96 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 240, damping: 26, delay: 0.08 }}
      >
        {front}
      </motion.div>
    </div>
  );
}

function SingleImageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={VISUAL_STAGE}>
      <motion.div
        className="absolute left-[3%] top-[4%] z-10 w-[94%]"
        initial={{ opacity: 0, y: 16, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 240, damping: 26 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

function FeatureVisual({ step }: { step: number }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={step}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        {step === 0 ? (
          <DualImageLayout back={<VisionInspectionUI />} front={<ScanningStation />} />
        ) : null}
        {step === 1 ? (
          <DualImageLayout
            back={<RoboticHandlingVisual />}
            front={<TransferFixtureVisual />}
          />
        ) : null}
        {step === 2 ? (
          <SingleImageLayout>
            <PLCControlPanel />
          </SingleImageLayout>
        ) : null}
        {step === 3 ? (
          <SingleImageLayout>
            <OperationsDashboard />
          </SingleImageLayout>
        ) : null}
      </motion.div>
    </AnimatePresence>
  );
}

export interface FeatureCarouselProps {
  steps: readonly CarouselStep[];
  interval?: number;
  className?: string;
}

export function FeatureCarousel({
  steps,
  interval = 5000,
  className,
}: FeatureCarouselProps) {
  const { currentNumber: step, setStep } = useNumberCycler(steps.length, interval);

  return (
    <div
      className={cn(
        "grid w-full items-start gap-8 lg:grid-cols-[minmax(0,260px)_minmax(0,1fr)] lg:gap-10 xl:gap-12",
        className,
      )}
    >
      <StepsNav current={step} onChange={setStep} steps={steps} />

      <FeatureCard step={step} steps={steps}>
        <FeatureVisual step={step} />
      </FeatureCard>
    </div>
  );
}
