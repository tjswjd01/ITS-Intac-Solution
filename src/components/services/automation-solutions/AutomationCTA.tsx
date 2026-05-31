"use client";

import { cn } from "@/lib/utils";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { ShinyButton } from "@/components/ui/ShinyButton";
import { ArrowRight } from "lucide-react";
import type React from "react";

const FLOW_STEPS = ["Workflow", "Inspection", "Decision", "Report"] as const;

function AutomationCTABackground({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

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

  const highlightMask = useMotionTemplate`
    radial-gradient(
      250px circle at ${mouseX}px ${mouseY}px,
      black 0%,
      transparent 100%
    )
  `;

  return (
    <div
      className={cn(
        "group relative w-full overflow-hidden bg-black",
        className,
      )}
      onMouseMove={handleMouseMove}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={dotPattern("rgba(255, 255, 255, 0.08)")}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          ...dotPattern("rgba(255, 255, 255, 0.25)"),
          WebkitMaskImage: highlightMask,
          maskImage: highlightMask,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(255,255,255,0.04),transparent_55%)]"
        aria-hidden
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function AutomationFlowDiagram() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay: 0.18, ease: [0.25, 1, 0.5, 1] }}
      className="relative w-full max-w-[480px] justify-self-end"
    >
      <div className="rounded-[24px] border border-white/[0.12] bg-white/[0.04] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm md:p-8">
        <div className="mb-6 flex items-center justify-between border-b border-white/[0.08] pb-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
              Automation Flow
            </p>
            <p className="mt-1 text-[13px] text-white/70">Live process monitor</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3dff9a] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#3dff9a]" />
            </span>
            <span className="text-[11px] font-medium text-[#3dff9a]">ACTIVE</span>
          </div>
        </div>

        <div className="relative flex flex-col gap-3">
          {FLOW_STEPS.map((step, index) => (
            <div key={step} className="relative">
              {index > 0 ? (
                <div
                  className="absolute -top-3 left-7 h-3 w-px bg-gradient-to-b from-white/25 to-white/10"
                  aria-hidden
                />
              ) : null}
              <div className="flex items-center gap-4 rounded-full border border-white/[0.1] bg-white/[0.03] px-4 py-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.06] text-[11px] font-semibold text-white/80">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[14px] font-medium tracking-[-0.02em]">
                    <span className="bg-gradient-to-b from-white via-white to-neutral-400 bg-clip-text text-transparent">
                      {step}
                    </span>
                  </p>
                  {step === "Inspection" ? (
                    <p className="mt-0.5 text-[11px] text-white/45">
                      Vision · RF · Functional
                    </p>
                  ) : step === "Decision" ? (
                    <p className="mt-0.5 text-[11px] text-white/45">
                      PASS / FAIL routing
                    </p>
                  ) : null}
                </div>
                {step === "Decision" ? (
                  <div className="flex shrink-0 gap-1.5">
                    <span className="rounded-full border border-[#3dff9a]/30 bg-[#3dff9a]/10 px-2 py-0.5 text-[10px] font-semibold text-[#3dff9a]">
                      PASS
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] font-medium text-white/40">
                      FAIL
                    </span>
                  </div>
                ) : step === "Report" ? (
                  <div className="flex h-6 items-end gap-0.5" aria-hidden>
                    {[0.35, 0.55, 0.45, 0.7, 0.5].map((h, i) => (
                      <span
                        key={i}
                        className="w-1 rounded-sm bg-[#2d8cff]/80"
                        style={{ height: `${h * 100}%` }}
                      />
                    ))}
                  </div>
                ) : (
                  <ArrowRight
                    className="h-4 w-4 shrink-0 text-white/25"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3 rounded-[14px] border border-white/[0.08] bg-black/40 px-4 py-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/35">
            Signal line
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#3dff9a]/40 to-transparent" />
        </div>
      </div>
    </motion.div>
  );
}

export default function AutomationCTA() {
  return (
    <section id="contact-consultation" className="border-t border-white/[0.06]">
      <AutomationCTABackground className="min-h-[560px] md:min-h-[600px] lg:min-h-[640px]">
        <div className="layout-container flex min-h-[560px] flex-col justify-center py-16 md:min-h-[600px] md:py-20 lg:min-h-[640px]">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              className="max-w-xl"
            >
              <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">
                <span className="h-2 w-2 rounded-full bg-white/60" aria-hidden />
                Automation Solutions
              </p>

              <h2 className="mt-6 max-w-[520px] text-[clamp(32px,3.4vw,48px)] font-semibold leading-[1.08] tracking-[-0.04em]">
                <span className="bg-gradient-to-b from-white via-white to-neutral-500 bg-clip-text text-transparent">
                  Ready to explore automation for your operation?
                </span>
              </h2>

              <p className="mt-6 max-w-[520px] text-[15px] leading-[1.75] text-neutral-400 md:text-base md:leading-8">
                Tell us about your current workflow, inspection needs, or
                operational bottlenecks. ITS can help evaluate where automation
                may create the most practical impact.
              </p>

              <div className="mt-9">
                <ShinyButton
                  href="/contact"
                  variant="pro"
                  className="min-h-12 gap-2.5 px-7 py-3 text-[15px]"
                >
                  <span className="inline-flex items-center gap-2.5">
                    Request a Consultation
                    <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
                  </span>
                </ShinyButton>
              </div>
            </motion.div>

            <AutomationFlowDiagram />
          </div>
        </div>
      </AutomationCTABackground>
    </section>
  );
}
