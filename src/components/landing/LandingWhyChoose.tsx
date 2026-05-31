"use client";

import { useState } from "react";

const benefits = [
  {
    number: "01",
    title: "Operational Expertise",
    short:
      "Real execution across refurbishment, QA, logistics, and field operations.",
    heading: "Operational Expertise",
    description:
      "ITS operates complex, high-volume environments with proven execution across refurbishment, QA inspection, logistics, technical support, and field operations.",
    points: [
      {
        title: "End-to-end operational execution",
        desc: "From planning to delivery with consistent quality and accountability.",
        icon: "/icons/why-choose/operations.svg",
      },
      {
        title: "QA-focused processes",
        desc: "Rigorous quality control and inspection standards across all operations.",
        icon: "/icons/why-choose/qa.svg",
      },
      {
        title: "Technical workforce support",
        desc: "Skilled teams and structured processes to ensure reliable execution.",
        icon: "/icons/why-choose/workforce.svg",
      },
      {
        title: "Logistics & field coordination",
        desc: "Efficient resource management and on-site coordination for smooth operations.",
        icon: "/icons/why-choose/logistics.svg",
      },
    ],
  },
  {
    number: "02",
    title: "Automation Integration",
    short:
      "Workflow optimization and automation support for scalable operations.",
    heading: "Automation Integration",
    description:
      "ITS supports workflow optimization, semi-automation, and operational systems that improve efficiency, visibility, and long-term scalability.",
    points: [
      {
        title: "Workflow optimization",
        desc: "Improving daily process flow and reducing unnecessary operational friction.",
        icon: "/icons/why-choose/workflow.svg",
      },
      {
        title: "Automation partnerships",
        desc: "Supporting practical automation integration with trusted technical partners.",
        icon: "/icons/why-choose/automation.svg",
      },
      {
        title: "Systems integration",
        desc: "Connecting people, process, and operational tools into one coordinated structure.",
        icon: "/icons/why-choose/systems.svg",
      },
      {
        title: "Scalable operations",
        desc: "Building processes that can grow with expanding business needs.",
        icon: "/icons/why-choose/scalable.svg",
      },
    ],
  },
  {
    number: "03",
    title: "Global Expansion Support",
    short:
      "Bilingual coordination and workforce support for Korea and U.S. businesses.",
    heading: "Global Expansion Support",
    description:
      "ITS bridges Korean and U.S. operational environments through bilingual communication, workforce coordination, and localized operational management.",
    points: [
      {
        title: "Bilingual communication",
        desc: "Korean-English support for operational and business coordination.",
        icon: "/icons/why-choose/bilingual.svg",
      },
      {
        title: "Local workforce management",
        desc: "Helping teams operate smoothly within U.S. workforce environments.",
        icon: "/icons/why-choose/workforce-management.svg",
      },
      {
        title: "Cross-border support",
        desc: "Supporting Korean and global companies expanding into the U.S.",
        icon: "/icons/why-choose/crossborder.svg",
      },
      {
        title: "Operational coordination",
        desc: "Aligning people, process, and local execution needs.",
        icon: "/icons/why-choose/coordination.svg",
      },
    ],
  },
  {
    number: "04",
    title: "Professional Management Infrastructure",
    short:
      "Structured administration supported by HR, CPA, payroll, and compliance.",
    heading: "Professional Management Infrastructure",
    description:
      "ITS supports workforce administration with SHRM-CP certified HR professionals, in-house CPA oversight, payroll administration, compliance support, and operational accountability.",
    points: [
      {
        title: "SHRM-CP certified HR professionals",
        desc: "Professional HR oversight for structured workforce management.",
        icon: "/icons/why-choose/hr.svg",
      },
      {
        title: "In-house CPA oversight",
        desc: "Financial and administrative visibility built into operations.",
        icon: "/icons/why-choose/cpa.svg",
      },
      {
        title: "Payroll administration",
        desc: "Reliable payroll support for operational workforce programs.",
        icon: "/icons/why-choose/payroll.svg",
      },
      {
        title: "Compliance & reporting support",
        desc: "Documentation, accountability, and operational reporting systems.",
        icon: "/icons/why-choose/compliance.svg",
      },
    ],
  },
];

export default function LandingWhyChoose() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = benefits[activeIndex];

  return (
    <section className="bg-white py-24">
      <div className="layout-container">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#5F6B7A]">
              <span className="h-2 w-2 rounded-full bg-[#062A56]" />
              Operational Advantage
            </p>

            <h2 className="mt-6 max-w-[620px] text-[clamp(30px,2.6vw,42px)] font-[500] leading-[1.08] tracking-[-0.04em] text-[#0B0F14]">
              Built for modern
              <br />
              operational <span className="text-[#8B929D]">excellence.</span>
            </h2>
          </div>

          <p className="max-w-[560px] text-[16px] leading-[1.75] text-[#4B5563] lg:pt-10">
            ITS delivers real operational execution, automation integration,
            global support, and professional management infrastructure to help
            businesses operate more efficiently and scale with confidence.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-[28px] border border-[#E5E7EB] bg-white shadow-[0_18px_50px_rgba(15,23,42,0.04)]">
          <div className="grid lg:grid-cols-[0.42fr_0.58fr]">
            <div className="border-b border-[#E5E7EB] lg:border-b-0 lg:border-r">
              {benefits.map((item, index) => {
                const isActive = activeIndex === index;

                return (
                  <button
                    key={item.number}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`group grid w-full grid-cols-[64px_1fr_40px] items-center gap-5 border-b border-[#E5E7EB] px-7 py-7 text-left transition active:scale-[0.99] last:border-b-0 ${
                      isActive
                        ? "bg-[#F6F9FF] shadow-[inset_-18px_0_28px_rgba(10,58,134,0.06)]"
                        : "bg-white hover:bg-[#FAFBFC]"
                    }`}
                  >
                    <span
                      className={`text-[28px] font-semibold tracking-[-0.04em] ${
                        isActive ? "text-[#0A3A86]" : "text-[#64748B]"
                      }`}
                    >
                      {item.number}
                    </span>

                    <span>
                      <span className="block text-[17px] font-[520] leading-tight tracking-[-0.03em] text-[#0B0F14]">
                        {item.title}
                      </span>
                      <span className="mt-2 block max-w-[300px] text-[13.5px] leading-[1.55] text-[#4B5563]">
                        {item.short}
                      </span>
                    </span>

                    <span
                      className={`relative flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                        isActive
                          ? "border-[#0A3A86]/30 bg-white text-[#0A3A86] shadow-[0_0_0_6px_rgba(10,58,134,0.08)]"
                          : "border-[#D6DCE5] bg-white text-[#0B0F14] shadow-[0_4px_12px_rgba(15,23,42,0.08)] group-hover:border-[#0A3A86]/40 group-hover:text-[#0A3A86] group-hover:shadow-[0_0_22px_rgba(10,58,134,0.22)]"
                      }`}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="translate-x-[1px]"
                      >
                        <path
                          d="M9 6L15 12L9 18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="relative flex items-start justify-center overflow-hidden px-8 py-14 md:px-12 lg:px-16">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#F6F9FF] via-[#F8FBFF] to-white opacity-90" />
              <div className="pointer-events-none absolute left-0 top-0 h-full w-[1px] bg-[#DCE7F8]" />
              <div className="pointer-events-none absolute left-0 top-1/2 h-[65%] w-[120px] -translate-y-1/2 bg-[#EAF2FF] blur-3xl opacity-70" />
              <div className="relative z-10 w-full max-w-[760px] text-center">
                <h3 className="text-[clamp(25px,2.16vw,36px)] font-[500] leading-[1.08] tracking-[-0.04em] text-[#0B0F14]">
                  {active.heading}
                </h3>

                <p className="mx-auto mt-5 max-w-[640px] text-[15.5px] leading-[1.75] text-[#4B5563]">
                  {active.description}
                </p>

                <div className="mt-9 grid gap-4 md:grid-cols-4">
                  {active.points.map((point) => (
                    <div
                      key={point.title}
                      className="flex min-h-[270px] flex-col items-center border-l border-[#E5E7EB] px-4 first:border-l-0"
                    >
                      <div className="mx-auto flex h-6 w-6 items-center justify-center">
                        {"icon" in point && point.icon ? (
                          <img
                            src={point.icon}
                            alt=""
                            className="h-6 w-6 object-contain"
                          />
                        ) : (
                          <span className="text-[18px] leading-none text-[#0A3A86]">
                            ✓
                          </span>
                        )}
                      </div>

                      <p className="mt-5 flex min-h-[58px] items-start justify-center text-[12.6px] font-[520] leading-[1.32] tracking-[-0.025em] text-[#0B0F14]">
                        {point.title}
                      </p>

                      <p className="mt-3 max-w-[150px] text-[12.5px] leading-[1.6] text-[#4B5563]">
                        {point.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NEMO TEASER */}
        <div className="mt-8 overflow-hidden rounded-[28px] bg-[#062A56] text-white shadow-[0_24px_60px_rgba(15,23,42,0.14)]">
          <div className="grid gap-8 p-8 lg:grid-cols-[0.66fr_1.34fr] lg:p-10">
            <div>
              <p className="text-[26px] font-semibold tracking-[-0.04em] text-[#3BA7FF]">
                05.
              </p>

              <h3 className="mt-4 text-[clamp(28px,2.5vw,42px)] font-[500] leading-[1.08] tracking-[-0.04em]">
                NEMO Workforce
                <br />
                Intelligence
              </h3>

              <p className="mt-6 max-w-[420px] text-[15px] leading-[1.75] text-white/78">
                Our proprietary workforce intelligence system helps operators
                manage attendance, reporting, visibility, and day-to-day
                coordination from one calmer, more structured environment.
              </p>

              <a
                href="/services"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-medium text-[#062A56]"
              >
                See How NEMO Works <span className="ml-2">→</span>
              </a>
            </div>

            <div className="overflow-hidden rounded-[24px] border border-white/16 bg-[#F6F8FC] p-4 text-[#111827] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.28)]">
              <div className="rounded-[20px] border border-[#DFE6F0] bg-white shadow-[0_20px_55px_rgba(15,23,42,0.16)]">
                <div className="flex items-center justify-between border-b border-[#EEF2F6] px-5 py-4">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EAF1FF] text-[11px] font-bold text-[#0A3A86]">
                      N
                    </span>
                    <div>
                      <p className="text-[13px] font-semibold text-[#0B0F14]">
                        NEMO
                      </p>
                      <p className="text-[10px] text-[#8792A3]">
                        Workforce Management System
                      </p>
                    </div>
                  </div>

                  <div className="hidden items-center gap-2 rounded-full bg-[#F5F7FA] px-3 py-2 text-[10px] text-[#6B7280] md:flex">
                    <span className="h-2 w-2 rounded-full bg-[#22C55E]" />
                    Live Dashboard
                  </div>
                </div>

                <div className="grid md:grid-cols-[0.24fr_0.76fr]">
                  <div className="border-r border-[#EEF2F6] bg-[#F8FAFD] p-4">
                    <div className="grid gap-2">
                      {[
                        "Dashboard",
                        "Attendance",
                        "Staff",
                        "Incident Center",
                        "Reports",
                      ].map((item, index) => (
                        <div
                          key={item}
                          className={`rounded-[12px] px-3 py-2 text-[11px] font-medium ${
                            index === 0
                              ? "bg-[#EAF1FF] text-[#0A3A86]"
                              : "text-[#6B7280]"
                          }`}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0A3A86]">
                          Dashboard
                        </p>
                        <h4 className="mt-2 text-[20px] font-semibold tracking-[-0.04em] text-[#0B0F14]">
                          Today’s Workforce Overview
                        </h4>
                      </div>

                      <div className="rounded-full bg-[#F6F8FC] px-3 py-2 text-[10px] text-[#6B7280]">
                        Updated now
                      </div>
                    </div>

                    <div className="mt-5 grid gap-3 md:grid-cols-4">
                      {[
                        ["Attendance", "98%", "#FFF4E5", "#F59E0B"],
                        ["Active Staff", "307", "#EAF1FF", "#2563EB"],
                        ["Pending Issues", "2", "#FFF1F2", "#E11D48"],
                        ["Scheduled", "68%", "#ECFDF3", "#16A34A"],
                      ].map(([label, value, bg, color]) => (
                        <div
                          key={label}
                          className="rounded-[16px] border border-[#E8EDF4] bg-white p-3"
                        >
                          <div
                            className="mb-3 h-2 w-8 rounded-full"
                            style={{ backgroundColor: color }}
                          />
                          <p
                            className="text-[20px] font-semibold leading-none"
                            style={{ color }}
                          >
                            {value}
                          </p>
                          <p className="mt-2 text-[10.5px] font-medium text-[#6B7280]">
                            {label}
                          </p>
                          <div
                            className="mt-3 h-1.5 rounded-full"
                            style={{ backgroundColor: bg }}
                          >
                            <div
                              className="h-full w-[72%] rounded-full"
                              style={{ backgroundColor: color }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 grid gap-4 md:grid-cols-[0.62fr_0.38fr]">
                      <div className="rounded-[18px] border border-[#E8EDF4] bg-[#FBFCFE] p-4">
                        <div className="mb-4 flex items-center justify-between">
                          <p className="text-[12px] font-semibold text-[#0B0F14]">
                            Key Metrics
                          </p>
                          <p className="text-[10px] text-[#8792A3]">
                            Weekly trend
                          </p>
                        </div>

                        <div className="grid gap-3">
                          {[
                            ["On-time check-in", "82%", "#2563EB"],
                            ["Shift coverage", "74%", "#16A34A"],
                            ["Issue response", "91%", "#F59E0B"],
                          ].map(([label, value, color]) => (
                            <div key={label}>
                              <div className="mb-1.5 flex justify-between text-[11px] text-[#5B6472]">
                                <span>{label}</span>
                                <span className="font-semibold text-[#0B0F14]">
                                  {value}
                                </span>
                              </div>
                              <div className="h-2 rounded-full bg-[#E8EDF4]">
                                <div
                                  className="h-full rounded-full"
                                  style={{
                                    width: value,
                                    backgroundColor: color,
                                  }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-[18px] border border-[#E8EDF4] bg-white p-4">
                        <p className="text-[12px] font-semibold text-[#0B0F14]">
                          Notification
                        </p>

                        <div className="mt-4 grid gap-3">
                          {[
                            ["58", "alerts reviewed", "#EAF1FF", "#2563EB"],
                            ["12", "pending tasks", "#FFF4E5", "#F59E0B"],
                            ["0", "critical issues", "#ECFDF3", "#16A34A"],
                          ].map(([value, label, bg, color]) => (
                            <div
                              key={label}
                              className="flex items-center gap-3 rounded-[14px] bg-[#F8FAFD] p-3"
                            >
                              <span
                                className="flex h-8 w-8 items-center justify-center rounded-full text-[12px] font-semibold"
                                style={{
                                  backgroundColor: bg,
                                  color,
                                }}
                              >
                                {value}
                              </span>
                              <span className="text-[10.5px] leading-snug text-[#6B7280]">
                                {label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}