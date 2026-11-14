import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Header from "@/components/Header";
import {
  ArrowLink,
  CtaBanner,
  Eyebrow,
  PageHero,
  SectionTitle,
  navyButtonClassName,
  outlineButtonClassName,
} from "@/components/site/primitives";

export const metadata: Metadata = {
  title: "Direct Hire Recruiting",
  description:
    "Direct hire recruiting for executive, professional, engineering, technical and bilingual roles. ITS sources and screens candidates; your company makes the hire.",
  alternates: { canonical: "/services/direct-hire" },
};

// TODO(owner): review role families and process wording before publishing.
const roles = [
  {
    title: "Executive & Management",
    description: "Senior leaders and managers for U.S. entities and operating sites.",
  },
  {
    title: "Engineering & Technical",
    description:
      "Equipment and field service engineers, technicians and technical specialists.",
  },
  {
    title: "Finance & Accounting",
    description: "Accounting managers, analysts and finance professionals.",
  },
  {
    title: "Supply Chain & Business Analysis",
    description: "Supply chain, sales operations and business analyst roles.",
  },
  {
    title: "HR, Admin & Executive Support",
    description: "HR, administrative and executive assistant positions.",
  },
  {
    title: "Korean–English Bilingual Roles",
    description:
      "Professionals who work across Korean headquarters and U.S. teams.",
  },
];

const steps = [
  {
    title: "Role intake",
    description:
      "We learn the role, the team, the must-haves and the compensation range.",
  },
  {
    title: "Sourcing",
    description:
      "We search our network and bilingual talent pool and reach out directly.",
  },
  {
    title: "Screening",
    description:
      "We interview candidates and check their experience against the role.",
  },
  {
    title: "Shortlist",
    description:
      "You receive qualified candidates with our notes on fit and open questions.",
  },
  {
    title: "Interview & offer",
    description:
      "We coordinate interviews and support the offer through to the start date.",
  },
];

const principles = [
  {
    title: "Verified, not assumed",
    description:
      "A skill that is not shown in a candidate’s record is confirmed with them, never assumed.",
  },
  {
    title: "Hands-on experience first",
    description:
      "What a candidate has actually done matters more than the company name on the resume.",
  },
  {
    title: "Fit and retention",
    description:
      "We check level, salary expectations and long-term fit before presenting anyone.",
  },
];

export default function DirectHirePage() {
  return (
    <main className="page-shell bg-its-offwhite">
      <Header />

      <PageHero
        eyebrow="Direct Hire"
        title="Professional, Technical and Bilingual Talent, Hired Directly."
        copy="ITS finds, screens and presents candidates for your permanent roles. Your company employs the hire. We run the search and stay with you through the offer."
      >
        <Link href="/contact" className={navyButtonClassName}>
          Request Talent
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
        <Link href="/services" className={outlineButtonClassName}>
          All Solutions
        </Link>
      </PageHero>

      <section aria-labelledby="roles-heading" className="bg-white py-16 md:py-24">
        <div className="layout-container">
          <Eyebrow>Roles We Recruit</Eyebrow>
          <SectionTitle className="mt-4 max-w-[640px]">
            <span id="roles-heading">From Executives to Specialist Engineers.</span>
          </SectionTitle>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((role) => (
              <li
                key={role.title}
                className="rounded-[24px] border border-its-line bg-its-offwhite p-6 lg:p-7"
              >
                <h3 className="text-[17px] font-semibold leading-[1.25] tracking-[-0.02em] text-its-navy">
                  {role.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-[1.65] text-its-slate-ink">
                  {role.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="process-heading" className="bg-its-offwhite py-16 md:py-24">
        <div className="layout-container">
          <Eyebrow>How It Works</Eyebrow>
          <SectionTitle className="mt-4 max-w-[640px]">
            <span id="process-heading">One Search, Five Steps.</span>
          </SectionTitle>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-[24px] border border-its-line bg-white p-6"
              >
                <span className="text-[13px] font-semibold tracking-[0.08em] text-its-mint-ink">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-[16.5px] font-semibold leading-[1.25] tracking-[-0.02em] text-its-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-[1.65] text-its-slate-ink">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="screening-heading" className="bg-white py-16 md:py-24">
        <div className="layout-container">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <div className="max-w-[440px]">
              <Eyebrow>How We Screen</Eyebrow>
              <SectionTitle className="mt-4">
                <span id="screening-heading">Quality Before Speed.</span>
              </SectionTitle>
              <p className="mt-5 text-[16.5px] leading-[1.7] text-its-slate-ink">
                Need ITS-employed staff or a managed operation instead of a
                permanent hire? ITS provides those too.
              </p>
              <div className="mt-6 flex flex-col items-start gap-3">
                <ArrowLink href="/services/workforce-solutions">
                  Staffing &amp; Workforce
                </ArrowLink>
                <ArrowLink href="/services/operations">Managed Operations</ArrowLink>
              </div>
            </div>
            <ul className="grid gap-4">
              {principles.map((item) => (
                <li
                  key={item.title}
                  className="rounded-[24px] border border-its-line bg-its-offwhite p-6 lg:p-7"
                >
                  <h3 className="text-[17px] font-semibold leading-[1.25] tracking-[-0.02em] text-its-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.65] text-its-slate-ink">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="bg-its-offwhite pt-16 md:pt-20">
        <CtaBanner
          title="Tell Us About the Role."
          copy="Share the position, location and timing, and our recruiting team will follow up."
          label="Request Talent"
        />
      </div>
    </main>
  );
}
