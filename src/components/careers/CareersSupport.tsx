import Link from "next/link";
import { ArrowRight, FileUp } from "lucide-react";

import ArticleCard from "@/components/insights/ArticleCard";
import { ArrowLink, navyButtonClassName } from "@/components/site/primitives";
import { articles } from "@/content/insights";

/** Secondary path for candidates who find no suitable opening. There is no
 *  upload yet: the button goes to the contact route until a secure resume
 *  intake is approved and built. */
export function CareersResume() {
  return (
    <section aria-labelledby="resume-heading" className="bg-its-offwhite pb-14 md:pb-20">
      <div className="layout-container">
        <div className="flex flex-col gap-6 rounded-[24px] bg-[#E8EBED] px-7 py-8 sm:px-10 md:flex-row md:items-center md:gap-8 lg:px-12">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-its-slate">
            <FileUp className="h-6 w-6" strokeWidth={1.5} aria-hidden />
          </span>
          <div className="flex-1 md:border-l md:border-[#CDD3DA] md:pl-8">
            <h2
              id="resume-heading"
              className="text-[clamp(1.4rem,2.2vw,1.8rem)] font-semibold leading-[1.2] tracking-[-0.03em] text-its-navy"
            >
              Submit Your Resume
            </h2>
            <p className="mt-2 max-w-[560px] text-[15.5px] leading-[1.6] text-its-slate-ink">
              Don’t see the right role? Tell us about your experience and we
              will keep you in mind for future opportunities.
            </p>
          </div>
          <Link href="/contact" className={`${navyButtonClassName} shrink-0 self-start md:self-auto`}>
            Submit Resume
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}

/** Career Advice articles from Insights. The articles live under /insights;
 *  this is only a preview. Renders nothing when there are none. */
export function CareerAdvicePreview() {
  const advice = articles.filter((a) => a.category === "career-advice").slice(0, 3);
  if (advice.length === 0) return null;

  return (
    <section aria-labelledby="advice-heading" className="bg-white py-14 md:py-20">
      <div className="layout-container">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2
            id="advice-heading"
            className="text-[clamp(1.6rem,2.6vw,2.2rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-its-navy"
          >
            Career Advice
          </h2>
          <ArrowLink href="/insights">Read Insights</ArrowLink>
        </div>
        <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {advice.map((article) => (
            <li key={article.slug}>
              <ArticleCard article={article} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
