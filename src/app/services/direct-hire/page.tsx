import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  Briefcase,
  Coins,
  Cog,
  Globe,
  IdCard,
  Languages,
  Laptop,
  Layers,
  Search,
  UserCheck,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import Header from "@/components/Header";
import {
  ShortlistIllustration,
  TalentHeroIllustration,
} from "@/components/direct-hire/TalentIllustration";
import ArticleCard from "@/components/insights/ArticleCard";
import {
  ArrowLink,
  Eyebrow,
  SectionTitle,
  navyButtonClassName,
  outlineButtonClassName,
} from "@/components/site/primitives";
import { articles } from "@/content/insights";

export const metadata: Metadata = {
  title: "Direct Hire Recruiting",
  description:
    "Executive, professional, technical and Korean–English bilingual recruiting tailored to your business. ITS runs the search; your company employs the hire.",
  alternates: { canonical: "/services/direct-hire" },
};

// Copy follows the owner's approved Direct Hire mockup. TODO(owner): confirm
// each claim (bilingual depth, post-placement support) before publishing.

const strengths: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Search,
    title: "Specialized Search",
    description: "Targeted talent acquisition for critical roles and business needs.",
  },
  {
    icon: Globe,
    title: "Bilingual Advantage",
    description: "Access to Korean–English bilingual talent for U.S. business operations.",
  },
  {
    icon: Layers,
    title: "U.S. Market Knowledge",
    description: "Local insight and hiring expertise to help your business grow in the U.S.",
  },
];

const specializations: { icon: LucideIcon; label: string }[] = [
  { icon: Users, label: "Executive & Leadership" },
  { icon: IdCard, label: "HR & Administration" },
  { icon: Coins, label: "Finance & Accounting" },
  { icon: Laptop, label: "IT & Software" },
  { icon: Cog, label: "Engineering & Technical" },
  { icon: Boxes, label: "Supply Chain & Operations" },
];

const steps = [
  {
    title: "Discover",
    description: "Understand your hiring needs, role requirements, and the right talent profile.",
  },
  {
    title: "Source & Screen",
    description: "Identify and evaluate qualified candidates through our specialized network.",
  },
  {
    title: "Shortlist & Interview",
    description: "Present top candidates, coordinate interviews, and support your selection process.",
  },
  {
    title: "Hire & Support",
    description: "Help you onboard your new hire and provide follow-up support after placement.",
  },
];

const reasons: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Languages,
    title: "Korean–English Bilingual Expertise",
    description: "Deep experience in sourcing and placing bilingual professionals.",
  },
  {
    icon: Layers,
    title: "Cross-Industry Experience",
    description: "Recruiting expertise across diverse industries and functional areas.",
  },
  {
    icon: UserCheck,
    title: "Personalized Recruitment Support",
    description: "A consultative, hands-on approach tailored to your business goals.",
  },
];

const hiringArticles = articles
  .filter((a) => a.category === "job-market-hiring" || a.category === "hr-workforce")
  .slice(0, 3);

export default function DirectHirePage() {
  return (
    <main className="page-shell bg-its-offwhite">
      <Header />

      {/* 1. Hero */}
      <section className="bg-its-offwhite pb-12 pt-28 md:pb-16 md:pt-36">
        <div className="layout-container">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
            <div className="max-w-[620px]">
              <Eyebrow rule>Direct Hire</Eyebrow>
              <h1 className="mt-5 text-[clamp(2.2rem,4.6vw,3.6rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-its-navy">
                <span className="block">The Right Talent.</span>
                <span className="block">Lasting Business Impact.</span>
              </h1>
              <p className="mt-6 max-w-[520px] text-[17px] leading-[1.7] text-its-slate-ink">
                Executive, professional, technical and bilingual recruiting
                tailored to your business.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className={navyButtonClassName}>
                  Request Talent
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <a href="#specializations" className={outlineButtonClassName}>
                  Explore Our Expertise
                </a>
              </div>
            </div>
            <TalentHeroIllustration />
          </div>
        </div>
      </section>

      {/* 2. Specialized recruiting strip */}
      <section aria-label="What sets our recruiting apart" className="border-y border-its-line bg-[#F1F3F3]">
        <div className="layout-container">
          <ul className="grid divide-y divide-its-line md:grid-cols-3 md:divide-x md:divide-y-0">
            {strengths.map((item) => (
              <li key={item.title} className="flex items-start gap-4 py-6 md:px-8 md:first:pl-0 md:last:pr-0">
                <item.icon className="mt-0.5 h-6 w-6 shrink-0 text-[#6E8196]" strokeWidth={1.5} aria-hidden />
                <div>
                  <h2 className="text-[16.5px] font-semibold tracking-[-0.01em] text-its-navy">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-[14.5px] leading-[1.6] text-its-slate-ink">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Talent specializations */}
      <section
        id="specializations"
        aria-labelledby="specializations-heading"
        className="scroll-mt-24 bg-white py-16 md:py-24"
      >
        <div className="layout-container">
          <div className="mx-auto max-w-[680px] text-center">
            <Eyebrow className="justify-center">Our Services</Eyebrow>
            <SectionTitle className="mt-4">
              <span id="specializations-heading">Talent for Every Critical Function</span>
            </SectionTitle>
            <p className="mt-4 text-[16.5px] leading-[1.7] text-its-slate-ink">
              We recruit high-performing professionals across key business
              areas, from leadership to technical and operational roles.
            </p>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {specializations.map((item) => (
              <li
                key={item.label}
                className="flex flex-col items-center rounded-2xl border border-its-line bg-white px-4 py-6 text-center"
              >
                <item.icon className="h-7 w-7 text-[#6E8196]" strokeWidth={1.4} aria-hidden />
                <span className="mt-4 text-[14.5px] font-semibold leading-[1.35] text-its-navy">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Recruitment process */}
      <section aria-labelledby="process-heading" className="bg-its-offwhite py-16 md:py-24">
        <div className="layout-container">
          <div className="mx-auto max-w-[680px] text-center">
            <Eyebrow className="justify-center">Our Recruitment Process</Eyebrow>
            <SectionTitle className="mt-4">
              <span id="process-heading">A Structured, Employer-Focused Approach</span>
            </SectionTitle>
            <p className="mt-4 text-[16.5px] leading-[1.7] text-its-slate-ink">
              A clear and efficient process to identify, evaluate, and secure
              the right talent for your team.
            </p>
          </div>
          <ol className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <span
              aria-hidden
              className="absolute left-[12.5%] right-[12.5%] top-[18px] hidden h-px bg-[#CDD3DA] lg:block"
            />
            {steps.map((step, index) => (
              <li key={step.title} className="relative flex flex-col items-center text-center">
                <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[#F4DDD8] text-[14px] font-semibold text-its-navy ring-4 ring-its-offwhite">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-[17px] font-semibold tracking-[-0.02em] text-its-navy">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[260px] text-[14.5px] leading-[1.65] text-its-slate-ink">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. Why ITS */}
      <section aria-labelledby="why-heading" className="bg-white py-16 md:py-24">
        <div className="layout-container">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
            <ShortlistIllustration />
            <div>
              <Eyebrow>Why ITS</Eyebrow>
              <SectionTitle className="mt-4 max-w-[480px]">
                <span id="why-heading">A Trusted Hiring Partner for U.S. Businesses</span>
              </SectionTitle>
              <ul className="mt-7 divide-y divide-its-line border-y border-its-line">
                {reasons.map((item) => (
                  <li key={item.title} className="flex items-start gap-4 py-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-its-dusty-soft text-[#6E8196]">
                      <item.icon className="h-5 w-5" strokeWidth={1.6} aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-[16.5px] font-semibold tracking-[-0.01em] text-its-navy">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[14.5px] leading-[1.6] text-its-slate-ink">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Direct Hire vs. Staffing */}
      <section aria-labelledby="compare-heading" className="border-y border-its-line bg-[#F1F3F3] py-14 md:py-16">
        <div className="layout-container">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-12">
            <div>
              <Eyebrow>Direct Hire vs. Staffing</Eyebrow>
              <SectionTitle className="mt-4 text-[clamp(1.5rem,2.4vw,2rem)]">
                <span id="compare-heading">Direct Hire or Staffing?</span>
              </SectionTitle>
              <p className="mt-3 max-w-[360px] text-[15.5px] leading-[1.65] text-its-slate-ink">
                Two hiring solutions with different employment structures.
                Here’s the difference.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-its-line border-t-2 border-t-its-coral bg-white p-6">
                <div className="flex items-center gap-3">
                  <Briefcase className="h-5 w-5 text-[#6E8196]" strokeWidth={1.6} aria-hidden />
                  <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-its-navy">
                    Direct Hire
                  </h3>
                </div>
                <p className="mt-3 text-[14.5px] leading-[1.65] text-its-slate-ink">
                  You hire the candidate directly as your permanent employee,
                  with long-term employment and full control.
                </p>
              </div>
              <div className="rounded-2xl border border-its-line bg-white p-6">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-[#6E8196]" strokeWidth={1.6} aria-hidden />
                  <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-its-navy">
                    Staffing
                  </h3>
                </div>
                <p className="mt-3 text-[14.5px] leading-[1.65] text-its-slate-ink">
                  The worker is employed by ITS and works at your site. ITS
                  handles payroll, benefits and workforce administration.
                </p>
                <ArrowLink href="/services/workforce-solutions" className="mt-4 text-[14px]">
                  Staffing &amp; Workforce
                </ArrowLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Hiring insights: shown only when Insights has matching articles */}
      {hiringArticles.length > 0 ? (
        <section aria-labelledby="hiring-insights-heading" className="bg-white py-16 md:py-24">
          <div className="layout-container">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,1.5fr)] lg:gap-12">
              <div>
                <Eyebrow>Hiring Insights</Eyebrow>
                <SectionTitle className="mt-4 text-[clamp(1.5rem,2.4vw,2rem)]">
                  <span id="hiring-insights-heading">Insights for Smarter Hiring</span>
                </SectionTitle>
                <p className="mt-3 text-[15.5px] leading-[1.65] text-its-slate-ink">
                  HR trends, hiring strategies, and workforce insights for U.S.
                  businesses.
                </p>
                <ArrowLink href="/insights" className="mt-5">
                  Read Insights
                </ArrowLink>
              </div>
              <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {hiringArticles.map((article) => (
                  <li key={article.slug}>
                    <ArticleCard article={article} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ) : null}

      {/* 8. CTA */}
      <section className="bg-white pb-16 md:pb-20">
        <div className="layout-container">
          <div className="flex flex-col gap-6 rounded-[24px] bg-[#E8EBED] px-7 py-8 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-12">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-10">
              <h2 className="text-[clamp(1.5rem,2.4vw,2rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-its-navy">
                Build Your Team With ITS
              </h2>
              <p className="max-w-[300px] text-[15.5px] leading-[1.6] text-its-slate-ink md:border-l md:border-[#CDD3DA] md:pl-10">
                Let’s find the right talent to drive your business forward.
              </p>
            </div>
            <Link href="/contact" className={`${navyButtonClassName} shrink-0 self-start md:self-auto`}>
              Discuss Your Hiring Needs
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
