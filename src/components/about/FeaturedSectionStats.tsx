"use client";

import { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "Jan", value: 20 },
  { name: "Feb", value: 40 },
  { name: "Mar", value: 60 },
  { name: "Apr", value: 80 },
  { name: "May", value: 100 },
  { name: "Jun", value: 130 },
  { name: "Jul", value: 160 },
];

const metrics = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Daily Operational Units" },
  { value: "24/7", label: "Operational Support" },
  { value: "98%", label: "Process Reliability" },
];

const CHART_ANIMATION_MS = 2200;
const CHART_LOOP_MS = 5800;

export default function FeaturedSectionStats() {
  const [chartAnimationKey, setChartAnimationKey] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setChartAnimationKey((current) => current + 1);
    }, CHART_LOOP_MS);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="section-shell bg-[#FAFAF8] pt-0">
      <div className="layout-container">
        <div className="mx-auto max-w-6xl text-left min-[1440px]:max-w-none">
          <div className="px-4">
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
              <span
                className="h-2 w-2 rounded-full bg-[#235CFF]"
                aria-hidden
              />
              OPERATIONAL METRICS
            </p>

            <h3 className="mt-6 text-[clamp(1.85rem,3vw,2.65rem)] font-medium leading-[1.12] tracking-[-0.04em] text-black">
              Powering operations with real-time visibility.{" "}
              <span className="text-neutral-400">
                Our operating systems help teams track execution, monitor
                reliability, and make better day-to-day decisions.
              </span>
            </h3>

            <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <p className="text-3xl font-medium tracking-[-0.04em] text-[#062A56]">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-neutral-500">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 h-48 w-full animate-floatChart">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart key={chartAnimationKey} data={data}>
                <defs>
                  <linearGradient
                    id="itsMetricBlueSimple"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#235CFF" stopOpacity={0.28} />
                    <stop offset="95%" stopColor="#235CFF" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <Tooltip
                  contentStyle={{
                    borderRadius: 16,
                    border: "1px solid #E5E7EB",
                    boxShadow: "0 18px 40px rgba(15, 23, 42, 0.08)",
                    fontSize: 13,
                  }}
                />

                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#235CFF"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#itsMetricBlueSimple)"
                  isAnimationActive
                  animationBegin={0}
                  animationDuration={CHART_ANIMATION_MS}
                  animationEasing="ease-in-out"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
