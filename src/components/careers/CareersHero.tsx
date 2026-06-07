"use client";

import type { LucideIcon } from "lucide-react";
import { Briefcase, Target, TrendingUp, Users } from "lucide-react";

const cultureCards: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Professional Environment",
    description:
      "Structured operations, strong leadership, and a supportive workplace.",
    icon: Briefcase,
  },
  {
    title: "Career Growth",
    description:
      "Training, mentorship, and clear opportunities to advance.",
    icon: TrendingUp,
  },
  {
    title: "Team Collaboration",
    description:
      "Work with experienced teams that value communication and respect.",
    icon: Users,
  },
  {
    title: "Meaningful Impact",
    description:
      "Support real operations and make a difference every day.",
    icon: Target,
  },
];

export default function CareersHero() {
  return (
    <section className="bg-[#FAFAF8] pb-6 pt-24 sm:pt-28 md:pb-10">
      <div className="layout-container">
        <div className="relative overflow-hidden rounded-[36px] bg-white">
          <div className="grid min-h-[480px] lg:grid-cols-[0.82fr_1.18fr] lg:min-h-[500px]">
            <div className="relative z-10 flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#0B3D91]">
                Careers at ITS
              </p>

              <h1 className="mt-4 max-w-[480px] text-[38px] font-bold leading-[1.05] tracking-[-0.04em] text-[#0B0F14] md:text-[44px] lg:text-[56px]">
                Culture & Opportunities
              </h1>

              <p className="mt-5 max-w-[480px] text-[16px] font-semibold leading-[1.5] text-[#0B0F14] md:text-[18px]">
                We empower people to grow, collaborate, and make an impact every
                day.
              </p>

              <p className="mt-3 max-w-[480px] text-[15px] leading-[1.7] text-[#64748B]">
                At ITS, you&apos;ll find a professional environment that values
                integrity, teamwork, and growth.
              </p>
            </div>

            <div className="relative min-h-[320px] lg:min-h-full">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,#FFFFFF_0%,rgba(255,255,255,0.84)_18%,rgba(255,255,255,0.08)_47%,rgba(255,255,255,0)_100%)] lg:z-10" />
              <img
                src="/images/who-team.jpeg"
                alt="ITS team collaboration"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="-mt-12 grid gap-[18px] px-4 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
          {cultureCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="relative z-20 flex flex-col rounded-2xl border border-[#DCE7F7] bg-white p-6 shadow-[0_12px_40px_rgba(6,42,86,0.06)]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#DCE7F7] bg-[#EEF4FF] text-[#062A56]">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="mt-3 text-[16px] font-bold leading-snug tracking-[-0.02em] text-[#062A56]">
                  {card.title}
                </h3>
                <p className="mt-1.5 text-[14px] leading-[1.6] text-[#64748B]">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
