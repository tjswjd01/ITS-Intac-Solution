/**
 * Careers data shapes: the categories, the `Job` model and the overview
 * numbers used by the search, the cards and the job detail pages.
 *
 * The jobs themselves come from Paycor Recruiting. See `src/lib/paycor`:
 * `config.ts` holds the rules for which jobs show and how they are grouped,
 * and `feed.ts` loads the live list on the server.
 */

export const jobCategories = [
  {
    code: "engineering",
    label: "Engineering",
    description: "Process, equipment and operational engineering roles",
  },
  {
    code: "it-software",
    label: "IT & Software",
    description: "IT support, systems and business technology roles",
  },
  {
    code: "finance-accounting",
    label: "Finance & Accounting",
    description: "Accounting, finance and business management roles",
  },
  {
    code: "hr-administration",
    label: "HR & Administration",
    description: "HR, talent and general administration roles",
  },
  {
    code: "logistics-warehouse",
    label: "Logistics & Warehouse",
    description: "Forklift, warehouse, inventory and material handling roles",
  },
  {
    code: "manufacturing-operations",
    label: "Manufacturing & Operations",
    description: "Production, refurbishment and site operations roles",
  },
] as const;

export type JobCategoryCode = (typeof jobCategories)[number]["code"];

export type JobPay = {
  /** Pay text as written in Paycor, for example "$30 - $32 per hour". */
  text: string;
  unit: "hour" | "year";
};

export type Job = {
  /** Paycor job id. Stable for the life of the posting. */
  id: string;
  /** Route segment for /careers/[slug]. Same as the Paycor id. */
  slug: string;
  title: string;
  /** One of the six ITS categories, or null when the job fits none of them. */
  category: JobCategoryCode | null;
  /** Label shown on the job: the ITS category, or the Paycor department. */
  categoryDisplay: string;
  /** "City, ST". Empty when Paycor has no location for the job. */
  location: string;
  /** Null when unknown. The Paycor feed has no employment type field. */
  employmentType: string | null;
  /** Null when Paycor has no pay, or the pay label fails the unit check. */
  pay: JobPay | null;
  /** ISO timestamp of first publication, or null when not known. */
  postedAt: string | null;
  /** ISO timestamp of the last edit in Paycor. Not a closing date. */
  updatedAt: string | null;
  /** Job description from Paycor, already sanitized for display. */
  descriptionHtml: string;
  /** The job's page on Paycor, where candidates apply. */
  applyUrl: string;
};

/** What the list page needs. Leaves out the long description. */
export type JobCard = Omit<Job, "descriptionHtml">;

export const toJobCard = (job: Job): JobCard => ({
  id: job.id,
  slug: job.slug,
  title: job.title,
  category: job.category,
  categoryDisplay: job.categoryDisplay,
  location: job.location,
  employmentType: job.employmentType,
  pay: job.pay,
  postedAt: job.postedAt,
  updatedAt: job.updatedAt,
  applyUrl: job.applyUrl,
});

// Keyword shortcuts under the search box. These only fill the search field;
// they do not claim that such roles are open.
export const quickFilters = ["Warehouse", "Technician", "Engineer", "Operations", "Bilingual"];

export const categoryLabel = (code: JobCategoryCode) =>
  jobCategories.find((c) => c.code === code)?.label ?? code;

/** Job dates are shown in U.S. Central time, where ITS is based. */
export const formatJobDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "America/Chicago",
  });

export type JobStats = {
  openJobs: number;
  /** Categories that have at least one open job. */
  activeCategories: number;
  /** Distinct job locations across the open jobs. */
  locations: number;
  /** Jobs posted in the last 7 days; null when no job carries a posting date. */
  newThisWeek: number | null;
  byCategory: Record<JobCategoryCode, number>;
};

/** Recruiting overview. Always computed from the same list of open jobs that
 *  the cards show, so the numbers and the cards cannot disagree. */
export function getJobStats(
  jobs: Pick<Job, "category" | "location" | "postedAt">[],
  now: Date = new Date(),
): JobStats {
  const byCategory = Object.fromEntries(
    jobCategories.map((c) => [c.code, jobs.filter((j) => j.category === c.code).length]),
  ) as Record<JobCategoryCode, number>;

  const end = now.getTime();
  const start = end - 7 * 24 * 60 * 60 * 1000;
  const dated = jobs.filter((j) => j.postedAt && !Number.isNaN(Date.parse(j.postedAt)));

  return {
    openJobs: jobs.length,
    activeCategories: Object.values(byCategory).filter((n) => n > 0).length,
    locations: new Set(jobs.map((j) => j.location.trim()).filter(Boolean)).size,
    newThisWeek: dated.length
      ? dated.filter((j) => {
          const t = Date.parse(j.postedAt as string);
          return t >= start && t <= end;
        }).length
      : null,
    byCategory,
  };
}
