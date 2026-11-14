import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Briefcase, Building2, MapPin } from "lucide-react";

import Header from "@/components/Header";
import { Eyebrow, navyButtonClassName, textLinkClassName } from "@/components/site/primitives";
import { categoryLabel, getJob, jobs } from "@/content/jobs";
import { formatDate } from "@/content/insights";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) return {};
  return {
    title: `${job.title} · ${job.location}`,
    description: job.summary,
    alternates: { canonical: `/careers/${job.slug}` },
    // Sample listings must never be indexed as real openings.
    robots: job.sample ? { index: false, follow: false } : undefined,
  };
}

export default async function JobDetailPage({ params }: Props) {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) notFound();

  return (
    <main className="page-shell bg-its-offwhite">
      <Header />

      <section className="border-b border-its-line bg-its-offwhite pb-10 pt-28 md:pb-14 md:pt-36">
        <div className="layout-container">
          <Link href="/careers#open-positions" className={`${textLinkClassName} no-underline`}>
            <ArrowLeft className="h-4 w-4" aria-hidden />
            All positions
          </Link>

          <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[760px]">
              <Eyebrow>{categoryLabel(job.category)}</Eyebrow>
              <h1 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-its-navy">
                {job.title}
              </h1>
              <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-its-slate-ink">
                <li className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4" aria-hidden />
                  {job.location}
                </li>
                <li className="inline-flex items-center gap-2">
                  <Briefcase className="h-4 w-4" aria-hidden />
                  {job.employmentType}
                </li>
                <li className="inline-flex items-center gap-2">
                  <Building2 className="h-4 w-4" aria-hidden />
                  Employer: {job.employerDisplay}
                </li>
              </ul>
              {job.postedAt ? (
                <p className="mt-3 text-[14px] text-its-slate-ink">Posted {formatDate(job.postedAt)}</p>
              ) : null}
            </div>
            <Link href={job.applyUrl} className={`${navyButtonClassName} shrink-0 self-start lg:self-auto`}>
              Apply
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          {job.sample ? (
            <p className="mt-8 rounded-xl border border-dashed border-[#C9CFD8] bg-white px-4 py-3 text-[14px] leading-[1.55] text-its-slate-ink">
              <strong className="font-semibold text-its-navy">Design template.</strong>{" "}
              This is a sample listing for layout review, not a real opening.
            </p>
          ) : null}
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="layout-container">
          <div className="max-w-[760px] space-y-10">
            <div>
              <h2 className="text-[1.35rem] font-semibold tracking-[-0.02em] text-its-navy">About the Role</h2>
              <p className="mt-3 text-[16.5px] leading-[1.75] text-its-slate-ink">{job.summary}</p>
            </div>
            <div>
              <h2 className="text-[1.35rem] font-semibold tracking-[-0.02em] text-its-navy">Responsibilities</h2>
              <ul className="mt-4 space-y-2.5">
                {job.responsibilities.map((line) => (
                  <li key={line} className="flex items-start gap-3 text-[16px] leading-[1.65] text-its-slate-ink">
                    <span aria-hidden className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-its-mint" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-[1.35rem] font-semibold tracking-[-0.02em] text-its-navy">Qualifications</h2>
              <ul className="mt-4 space-y-2.5">
                {job.qualifications.map((line) => (
                  <li key={line} className="flex items-start gap-3 text-[16px] leading-[1.65] text-its-slate-ink">
                    <span aria-hidden className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-its-mint" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3 border-t border-its-line pt-8 sm:flex-row sm:items-center">
              <Link href={job.applyUrl} className={navyButtonClassName}>
                Apply for This Position
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="/careers#open-positions" className={`${textLinkClassName} sm:ml-4`}>
                View all positions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
