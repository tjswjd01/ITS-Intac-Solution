import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Banknote, Briefcase, MapPin } from "lucide-react";

import Header from "@/components/Header";
import { Eyebrow, navyButtonClassName, textLinkClassName } from "@/components/site/primitives";
import { formatJobDate } from "@/content/jobs";
import { PAYCOR_CAREER_HOME_URL } from "@/lib/paycor/config";
import { getJobs } from "@/lib/paycor/feed";

type Props = { params: Promise<{ slug: string }> };

// Rebuild each job page from the Paycor feed at most every 30 minutes.
// Keep in step with FEED_REVALIDATE_SECONDS in src/lib/paycor/config.ts.
export const revalidate = 1800;

/** Pages for the jobs open at build time. A job posted later gets its page on
 *  first visit; a job that has closed or been removed returns "not found". */
export async function generateStaticParams() {
  const { jobs } = await getJobs();
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const result = await getJobs();
  const job = result.jobs.find((item) => item.slug === slug);
  if (!job) {
    return { title: "Position not available", robots: { index: false, follow: true } };
  }
  return {
    title: job.location ? `${job.title} · ${job.location}` : job.title,
    description: `${job.title}${job.location ? ` in ${job.location}` : ""}. Read the role details and apply through ITS.`,
    alternates: { canonical: `/careers/${job.slug}` },
  };
}

// Styles for the description from Paycor. It arrives as sanitized HTML with
// no classes of its own, so its elements are styled from this wrapper.
const descriptionClassName = [
  "text-[16px] leading-[1.7] text-its-slate-ink [overflow-wrap:anywhere]",
  "[&_p]:mt-3 [&_div]:mt-3 [&>*:first-child]:mt-0",
  "[&_strong]:font-semibold [&_strong]:text-its-navy",
  "[&_h3]:mt-8 [&_h3]:text-[1.2rem] [&_h3]:font-semibold [&_h3]:leading-[1.3] [&_h3]:tracking-[-0.02em] [&_h3]:text-its-navy",
  "[&_h4]:mt-6 [&_h4]:text-[1.05rem] [&_h4]:font-semibold [&_h4]:text-its-navy",
  "[&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:mt-3 [&_ol]:list-decimal [&_ol]:pl-5",
  "[&_li]:mt-1.5 [&_li]:pl-1 [&_li]:marker:text-its-mint [&_li_div]:mt-0 [&_li_p]:mt-0",
  "[&_hr]:my-8 [&_hr]:border-its-line",
  "[&_blockquote]:mt-3 [&_blockquote]:border-l-2 [&_blockquote]:border-its-line [&_blockquote]:pl-4",
].join(" ");

function ApplyLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${navyButtonClassName} shrink-0`}>
      {label}
      <span className="sr-only"> (opens the application on Paycor in a new tab)</span>
      <ArrowRight className="h-4 w-4" aria-hidden />
    </a>
  );
}

export default async function JobDetailPage({ params }: Props) {
  const { slug } = await params;
  const result = await getJobs();

  // The job source is down: we cannot tell whether this job is still open,
  // so say so instead of showing a stale posting or a false "not found".
  if (result.status === "unavailable") {
    return (
      <main className="page-shell bg-its-offwhite">
        <Header />
        <section className="pb-20 pt-28 md:pb-28 md:pt-36">
          <div className="layout-container">
            <div role="status" className="max-w-[640px]">
              <Eyebrow>Careers at ITS</Eyebrow>
              <h1 className="mt-4 text-[clamp(1.9rem,3.6vw,2.6rem)] font-semibold leading-[1.1] tracking-[-0.035em] text-its-navy">
                This position cannot be shown right now
              </h1>
              <p className="mt-4 text-[16.5px] leading-[1.7] text-its-slate-ink">
                We could not load job details from our recruiting system.
                Please try again shortly, or view the current openings on{" "}
                <a
                  href={PAYCOR_CAREER_HOME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-its-navy underline decoration-its-mint decoration-2 underline-offset-4"
                >
                  our Paycor careers page
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                .
              </p>
              <Link href="/careers#open-positions" className={`${textLinkClassName} mt-8`}>
                <ArrowLeft className="h-4 w-4" aria-hidden />
                Back to Careers
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  const job = result.jobs.find((item) => item.slug === slug);
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
              <Eyebrow>{job.categoryDisplay}</Eyebrow>
              <h1 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-its-navy">
                {job.title}
              </h1>
              <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-its-slate-ink">
                {job.location ? (
                  <li className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4" aria-hidden />
                    {job.location}
                  </li>
                ) : null}
                {job.employmentType ? (
                  <li className="inline-flex items-center gap-2">
                    <Briefcase className="h-4 w-4" aria-hidden />
                    {job.employmentType}
                  </li>
                ) : null}
                {job.pay ? (
                  <li className="inline-flex items-center gap-2">
                    <Banknote className="h-4 w-4" aria-hidden />
                    {job.pay.text}
                  </li>
                ) : null}
              </ul>
              {job.postedAt ? (
                <p className="mt-3 text-[14px] text-its-slate-ink">Posted {formatJobDate(job.postedAt)}</p>
              ) : null}
            </div>
            <div className="self-start lg:self-auto">
              <ApplyLink href={job.applyUrl} label="Apply Now" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="layout-container">
          <div className="max-w-[760px]">
            <h2 className="text-[1.35rem] font-semibold tracking-[-0.02em] text-its-navy">About the Role</h2>
            {job.descriptionHtml ? (
              // Safe to inject: sanitizeHtml in src/lib/paycor/adapter.ts rebuilt
              // this markup from an allowlist of tags with no attributes.
              <div className={`mt-4 ${descriptionClassName}`} dangerouslySetInnerHTML={{ __html: job.descriptionHtml }} />
            ) : (
              <p className="mt-3 text-[16.5px] leading-[1.75] text-its-slate-ink">
                The full description for this role is on the application page.
              </p>
            )}

            <div className="mt-10 border-t border-its-line pt-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <ApplyLink href={job.applyUrl} label="Apply for This Position" />
                <Link href="/careers#open-positions" className={`${textLinkClassName} sm:ml-4`}>
                  View all positions
                </Link>
              </div>
              <p className="mt-4 text-[14px] leading-[1.6] text-its-slate-ink">
                Applications are completed on Paycor, the recruiting system ITS
                uses. The button opens this job there in a new tab.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
