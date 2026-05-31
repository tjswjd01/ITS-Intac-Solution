"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Bell,
  CalendarCheck,
  DollarSign,
  FileText,
  LayoutDashboard,
  MessageSquare,
  Search,
  Settings,
  Users,
} from "lucide-react";

import { cn } from "@/lib/utils";

type TabId = "workforce" | "team-chat" | "finance" | "analytics" | "reports";

type TabItem = {
  id: TabId;
  label: string;
  icon: LucideIcon;
};

const tabs: TabItem[] = [
  { id: "workforce", label: "Workforce", icon: Users },
  { id: "team-chat", label: "Team Chat", icon: MessageSquare },
  { id: "finance", label: "Finance", icon: DollarSign },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "reports", label: "Reports", icon: FileText },
];

const sidebarItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Workforce", icon: Users, active: false },
  { label: "Messages", icon: MessageSquare, active: false },
  { label: "Reports", icon: FileText, active: false },
  { label: "Settings", icon: Settings, active: false },
];

function MockStat({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="rounded-xl border border-black/[0.06] bg-white p-3">
      <p className="text-[11px] font-medium text-neutral-500">{label}</p>
      <p
        className={cn(
          "mt-1 text-lg font-semibold tracking-[-0.03em]",
          accent ? "text-[#0A3A86]" : "text-[#0B0F14]"
        )}
      >
        {value}
      </p>
    </div>
  );
}

function BarChartMock({ heights }: { heights: string[] }) {
  return (
    <div className="flex h-28 items-end gap-2">
      {heights.map((height, index) => (
        <div key={`${height}-${index}`} className="flex flex-1 flex-col justify-end">
          <div
            className="rounded-t-md bg-[#0A3A86]/80"
            style={{ height }}
            aria-hidden
          />
        </div>
      ))}
    </div>
  );
}

function DashboardPreview({ activeTab }: { activeTab: TabId }) {
  const tabTitles: Record<TabId, string> = {
    workforce: "Workforce Overview",
    "team-chat": "Team Communication",
    finance: "Financial Summary",
    analytics: "Performance Analytics",
    reports: "Reports Center",
  };

  return (
    <div className="overflow-hidden rounded-[28px] border border-black/10 bg-[#F7F8FA] shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
      <div className="flex min-h-[420px] flex-col md:min-h-[480px] md:flex-row">
        <aside className="hidden w-[168px] shrink-0 border-r border-black/[0.06] bg-white p-4 md:block">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0A3A86] text-[11px] font-bold text-white">
              N
            </div>
            <span className="text-sm font-semibold tracking-[-0.02em] text-[#0B0F14]">
              NEMO
            </span>
          </div>

          <nav className="mt-6 space-y-1">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-2.5 py-2 text-[12px] font-medium",
                    item.active
                      ? "bg-[#EEF3FA] text-[#0A3A86]"
                      : "text-neutral-500"
                  )}
                >
                  <Icon className="h-3.5 w-3.5" aria-hidden />
                  {item.label}
                </div>
              );
            })}
          </nav>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col bg-[#FAFBFC]">
          <div className="flex items-center justify-between border-b border-black/[0.06] bg-white px-4 py-3 md:px-5">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-400">
                NEMO Dashboard
              </p>
              <h3 className="text-sm font-semibold text-[#0B0F14] md:text-[15px]">
                {tabTitles[activeTab]}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <div className="hidden h-8 w-36 items-center gap-2 rounded-lg border border-black/[0.06] bg-[#F7F8FA] px-2.5 sm:flex">
                <Search className="h-3.5 w-3.5 text-neutral-400" aria-hidden />
                <span className="text-[11px] text-neutral-400">Search</span>
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-black/[0.06] bg-white">
                <Bell className="h-3.5 w-3.5 text-neutral-500" aria-hidden />
              </div>
            </div>
          </div>

          <div className="flex-1 p-4 md:p-5">
            {activeTab === "workforce" && (
              <div className="grid gap-3 md:grid-cols-3">
                <MockStat label="Active Staff" value="142" accent />
                <MockStat label="On Shift" value="118" />
                <MockStat label="Open Roles" value="6" />
                <div className="rounded-xl border border-black/[0.06] bg-white p-4 md:col-span-2">
                  <p className="text-xs font-semibold text-[#0B0F14]">
                    Attendance Trend
                  </p>
                  <div className="mt-3">
                    <BarChartMock
                      heights={["42%", "58%", "52%", "68%", "64%", "72%", "70%"]}
                    />
                  </div>
                </div>
                <div className="rounded-xl border border-black/[0.06] bg-white p-4">
                  <p className="text-xs font-semibold text-[#0B0F14]">
                    Workforce Status
                  </p>
                  <div className="mt-3 space-y-2">
                    {[
                      ["Field Team A", "On site"],
                      ["Warehouse B", "Active"],
                      ["Support Crew", "Scheduled"],
                    ].map(([name, status]) => (
                      <div
                        key={name}
                        className="flex items-center justify-between rounded-lg bg-[#F7F8FA] px-2.5 py-2 text-[11px]"
                      >
                        <span className="font-medium text-[#0B0F14]">{name}</span>
                        <span className="text-[#0A3A86]">{status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "team-chat" && (
              <div className="grid gap-3 md:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-xl border border-black/[0.06] bg-white p-4">
                  <p className="text-xs font-semibold text-[#0B0F14]">
                    Team Activity
                  </p>
                  <div className="mt-3 space-y-2.5">
                    {[
                      "Shift handoff completed for Dallas warehouse.",
                      "QA lead posted inspection update.",
                      "Field team confirmed ATM service closure.",
                    ].map((message) => (
                      <div
                        key={message}
                        className="rounded-lg border border-black/[0.05] bg-[#F7F8FA] px-3 py-2.5 text-[11px] leading-5 text-neutral-600"
                      >
                        {message}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border border-black/[0.06] bg-white p-4">
                  <p className="text-xs font-semibold text-[#0B0F14]">
                    Live Channels
                  </p>
                  <div className="mt-3 space-y-2">
                    {[
                      ["Operations", "12 online"],
                      ["Field Support", "8 online"],
                      ["Finance Desk", "4 online"],
                    ].map(([channel, count]) => (
                      <div
                        key={channel}
                        className="flex items-center justify-between rounded-lg bg-[#EEF3FA] px-2.5 py-2 text-[11px]"
                      >
                        <span className="font-medium text-[#0B0F14]">
                          {channel}
                        </span>
                        <span className="text-neutral-500">{count}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "finance" && (
              <div className="grid gap-3 md:grid-cols-3">
                <MockStat label="Monthly Revenue" value="$842K" accent />
                <MockStat label="Operating Cost" value="$516K" />
                <MockStat label="Net Margin" value="18.4%" />
                <div className="rounded-xl border border-black/[0.06] bg-white p-4 md:col-span-2">
                  <p className="text-xs font-semibold text-[#0B0F14]">
                    Financial Summary
                  </p>
                  <div className="mt-3">
                    <BarChartMock
                      heights={["38%", "46%", "44%", "52%", "48%", "56%", "60%"]}
                    />
                  </div>
                </div>
                <div className="rounded-xl border border-black/[0.06] bg-white p-4">
                  <p className="text-xs font-semibold text-[#0B0F14]">
                    Pending Approvals
                  </p>
                  <div className="mt-3 space-y-2 text-[11px] text-neutral-600">
                    <p>Vendor invoice batch · 3 items</p>
                    <p>Payroll review · 2 items</p>
                    <p>Expense report · 5 items</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "analytics" && (
              <div className="grid gap-3 md:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-xl border border-black/[0.06] bg-white p-4">
                  <p className="text-xs font-semibold text-[#0B0F14]">
                    Operational Analytics
                  </p>
                  <div className="mt-4 h-36 rounded-xl bg-gradient-to-b from-[#EEF3FA] to-white p-3">
                    <div className="relative h-full">
                      <div className="absolute bottom-0 left-[8%] h-[42%] w-[10%] rounded-t bg-[#0A3A86]/25" />
                      <div className="absolute bottom-0 left-[24%] h-[58%] w-[10%] rounded-t bg-[#0A3A86]/35" />
                      <div className="absolute bottom-0 left-[40%] h-[52%] w-[10%] rounded-t bg-[#0A3A86]/30" />
                      <div className="absolute bottom-0 left-[56%] h-[68%] w-[10%] rounded-t bg-[#0A3A86]/45" />
                      <div className="absolute bottom-0 left-[72%] h-[62%] w-[10%] rounded-t bg-[#0A3A86]/40" />
                      <div className="absolute bottom-[52%] left-[8%] right-[8%] h-px bg-[#94A3B8]/40" />
                      <div className="absolute bottom-[72%] left-[8%] right-[8%] h-px bg-[#94A3B8]/25" />
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <MockStat label="Throughput" value="98.2%" accent />
                  <MockStat label="SLA Compliance" value="96.7%" />
                  <div className="rounded-xl border border-black/[0.06] bg-white p-4">
                    <p className="text-xs font-semibold text-[#0B0F14]">
                      Key Insight
                    </p>
                    <p className="mt-2 text-[11px] leading-5 text-neutral-600">
                      Attendance and output remain aligned across active field
                      and warehouse teams.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "reports" && (
              <div className="grid gap-3 md:grid-cols-[1fr_1fr]">
                <div className="rounded-xl border border-black/[0.06] bg-white p-4">
                  <p className="text-xs font-semibold text-[#0B0F14]">
                    Reports Overview
                  </p>
                  <div className="mt-3 space-y-2">
                    {[
                      ["Daily Operations", "Ready"],
                      ["Weekly Workforce", "Scheduled"],
                      ["Monthly Finance", "Draft"],
                    ].map(([name, status]) => (
                      <div
                        key={name}
                        className="flex items-center justify-between rounded-lg bg-[#F7F8FA] px-2.5 py-2 text-[11px]"
                      >
                        <span className="font-medium text-[#0B0F14]">{name}</span>
                        <span className="rounded-full bg-[#EEF3FA] px-2 py-0.5 text-[#0A3A86]">
                          {status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border border-black/[0.06] bg-white p-4">
                  <div className="flex items-center gap-2">
                    <CalendarCheck
                      className="h-4 w-4 text-[#0A3A86]"
                      aria-hidden
                    />
                    <p className="text-xs font-semibold text-[#0B0F14]">
                      Upcoming Exports
                    </p>
                  </div>
                  <div className="mt-3 space-y-2 text-[11px] text-neutral-600">
                    <p>QA inspection summary · Friday</p>
                    <p>Payroll compliance report · Monday</p>
                    <p>Field service activity log · Daily</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function NemoTeaser() {
  const [activeTab, setActiveTab] = useState<TabId>("workforce");

  return (
    <section className="section-shell bg-[#FAFAF8]">
      <div className="layout-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0A3A86]">
            <span className="h-2 w-2 rounded-full bg-[#0A3A86]" aria-hidden />
            Nemo System
          </p>

          <h2 className="section-title mx-auto mt-5 max-w-[760px]">
            Operational visibility built into daily workflows.
          </h2>

          <p className="section-copy mx-auto mt-6 max-w-2xl">
            NEMO helps teams manage workforce operations, communication,
            reporting, and performance visibility in one connected system.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="mx-auto flex w-max min-w-full justify-center">
            <div className="inline-flex rounded-full bg-[#ECEFF3] p-1.5">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition duration-200",
                      isActive
                        ? "bg-white text-[#0B0F14] shadow-[0_4px_14px_rgba(15,23,42,0.08)]"
                        : "text-neutral-500 hover:text-neutral-700"
                    )}
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <DashboardPreview activeTab={activeTab} />
        </div>
      </div>
    </section>
  );
}
