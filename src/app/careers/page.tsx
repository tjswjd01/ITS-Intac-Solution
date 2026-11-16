import type { Metadata } from "next";

import Header from "../../components/Header";
import CareersBoard from "../../components/careers/CareersBoard";
import { CareersStories } from "../../components/careers/CareersExtras";
import { CareerAdvicePreview, CareersResume } from "../../components/careers/CareersSupport";
import { getJobStats, toJobCard } from "../../content/jobs";
import { PAYCOR_CAREER_HOME_URL } from "../../lib/paycor/config";
import { getJobs } from "../../lib/paycor/feed";

// Rebuild this page from the Paycor feed at most every 30 minutes.
// Keep in step with FEED_REVALIDATE_SECONDS in src/lib/paycor/config.ts.
export const revalidate = 1800;

export const metadata: Metadata = {
  title: "Careers at ITS",
  description:
    "Explore professional, technical, operational and logistics opportunities supported by ITS, or submit your resume.",
  alternates: { canonical: "/careers" },
};

const formatUpdated = (iso: string) =>
  `${new Date(iso).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZone: "America/Chicago",
  })} CT`;

export default async function CareersPage() {
  const result = await getJobs();

  return (
    <main className="page-shell bg-its-offwhite">
      <Header />
      <CareersBoard
        jobs={result.jobs.map(toJobCard)}
        stats={getJobStats(result.jobs)}
        // Formatted here so the server and the browser show the same text.
        updatedLabel={result.status === "ok" ? formatUpdated(result.fetchedAt) : null}
        paycorCareersUrl={PAYCOR_CAREER_HOME_URL}
      />
      <CareersResume />
      {/* Hidden until approved stories are added to careersContent.ts. */}
      <CareersStories />
      <CareerAdvicePreview />
    </main>
  );
}
