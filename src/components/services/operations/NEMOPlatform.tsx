import { BarChart3, Clock3, FileWarning, UsersRound } from "lucide-react";

const features = [
  {
    title: "Attendance Tracking",
    description: "Monitor attendance, shifts, and workforce activity in real time.",
    icon: Clock3,
  },
  {
    title: "Issue Management",
    description: "Track incidents, operational issues, and corrective actions.",
    icon: FileWarning,
  },
  {
    title: "Productivity Monitoring",
    description: "Measure output, efficiency, and daily team performance.",
    icon: UsersRound,
  },
  {
    title: "Operational Analytics",
    description: "Visualize trends, workforce metrics, and operational insights.",
    icon: BarChart3,
  },
] as const;

export default function NEMOPlatform() {
  return (
    <section className="section-shell border-t border-black/[0.06] bg-white">
      <div className="layout-container">
        <div className="relative z-10 grid items-start gap-6 md:grid-cols-[0.95fr_1.05fr] md:gap-12">
          <div>
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0A3A86]">
              <span className="h-2 w-2 rounded-full bg-[#0A3A86]" />
              Workforce Platform
            </p>

            <h2 className="section-title mt-5 max-w-[760px]">
              NEMO connects workforce activity, attendance, issues, and
              operational data.
            </h2>
          </div>

          <p className="section-copy max-w-[520px] md:ml-auto md:pt-9">
            A centralized platform built to support real-time visibility across
            staffing, productivity, incident tracking, and daily operations.
          </p>
        </div>

        <div className="relative mt-14 overflow-hidden rounded-[32px] border border-black/[0.06] bg-[#F6F8FA] p-3 shadow-[0_20px_70px_rgba(15,23,42,0.08)] lg:-mx-4 lg:p-3 xl:-mx-8">
          <div className="relative aspect-[88/36] overflow-hidden rounded-[24px] bg-[#EDEFF3]">
            <div className="absolute inset-x-0 bottom-0 z-20 h-1/3 bg-gradient-to-t from-[#F6F8FA] to-transparent" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(10,58,134,0.16),transparent_32%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.18),transparent_30%)]" />

            <div className="absolute left-[5%] top-[10%] h-[74%] w-[90%] rounded-[24px] border border-white/80 bg-white/80 p-5 shadow-[0_22px_70px_rgba(15,23,42,0.16)] backdrop-blur">
              <div className="flex items-center justify-between border-b border-black/[0.06] pb-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0A3A86]">
                    NEMO Dashboard
                  </p>
                  <h3 className="mt-1 text-[20px] font-semibold tracking-[-0.03em] text-[#0B0F14]">
                    Workforce Operations Overview
                  </h3>
                </div>

                <div className="hidden gap-2 sm:flex">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#D9DEE7]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#D9DEE7]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#0A3A86]" />
                </div>
              </div>

              <div className="mt-5 grid h-[68%] gap-4 md:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[18px] border border-black/[0.06] bg-[#FAFBFC] p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-[12px] font-semibold text-[#0B0F14]">
                      Daily Activity
                    </p>
                    <span className="rounded-full bg-[#E8F0FF] px-2.5 py-1 text-[10px] font-semibold text-[#0A3A86]">
                      Live
                    </span>
                  </div>

                  <div className="mt-6 flex h-[62%] items-end gap-2">
                    {[42, 64, 48, 78, 58, 88, 72, 94, 69].map((height, index) => (
                      <span
                        key={index}
                        className="flex-1 rounded-t-full bg-[#0A3A86]/80"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="grid gap-4">
                  {[
                    ["Attendance", "96%"],
                    ["Open Issues", "12"],
                    ["Productivity", "+18%"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-[18px] border border-black/[0.06] bg-white p-4"
                    >
                      <p className="text-[11px] font-medium text-[#64748B]">
                        {label}
                      </p>
                      <p className="mt-1 text-[24px] font-semibold tracking-[-0.04em] text-[#0B0F14]">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-[10%] left-[18%] h-[36%] w-[64%] rounded-[28px] border border-white/80 bg-white/70 shadow-[0_18px_50px_rgba(15,23,42,0.14)] backdrop-blur-md" />
          </div>
        </div>

        <div className="relative mx-auto mt-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-8 lg:grid-cols-4">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="space-y-3">
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-[#0A3A86]" />
                  <h3 className="text-[14px] font-semibold tracking-[-0.02em] text-[#0B0F14]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[13px] leading-[1.6] text-[#64748B]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}