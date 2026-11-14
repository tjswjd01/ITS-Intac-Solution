/**
 * Careers data: the single source for the search, the categories, the cards
 * and the job detail pages.
 *
 * DESIGN TEMPLATE ONLY. Every job below is a sample for layout review and is
 * labelled "Sample" on the page. None of them is a real opening.
 *
 * Connecting Paycor later: Paycor Recruiting offers an ATOM feed of the
 * account's jobs. Replace `jobs` with the feed's entries mapped to the `Job`
 * shape below, and set `applyUrl` to each job's Paycor application link.
 * Then set SHOW_SAMPLE_NOTICE to false.
 */

export const SHOW_SAMPLE_NOTICE = true;

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

export type Job = {
  id: string;
  slug: string;
  title: string;
  category: JobCategoryCode;
  location: string;
  employmentType: string;
  /** Who employs the hire: ITS, or a client company ITS recruits for. */
  employerDisplay: string;
  summary: string;
  responsibilities: string[];
  qualifications: string[];
  /** ISO date, or null when the posting date is not known. */
  postedAt: string | null;
  /** Where Apply goes. Later: the job's Paycor application link. */
  applyUrl: string;
  /** True for layout samples. Sample jobs are labelled on the page. */
  sample: boolean;
};

const sampleBody = {
  responsibilities: [
    "Sample responsibility line for layout review.",
    "Replace with the duties from the real posting.",
    "Each line should describe one clear responsibility.",
  ],
  qualifications: [
    "Sample qualification line for layout review.",
    "Replace with the requirements from the real posting.",
  ],
};

export const jobs: Job[] = [
  {
    id: "sample-1",
    slug: "sample-process-engineer",
    title: "Process Engineer",
    category: "engineering",
    location: "Irving, TX",
    employmentType: "Full-time",
    employerDisplay: "Sample employer",
    summary:
      "Sample listing. Supports process setup and improvement on a production line.",
    ...sampleBody,
    postedAt: null,
    applyUrl: "/contact",
    sample: true,
  },
  {
    id: "sample-2",
    slug: "sample-it-support-specialist",
    title: "IT Support Specialist",
    category: "it-software",
    location: "Plano, TX",
    employmentType: "Full-time",
    employerDisplay: "Sample employer",
    summary:
      "Sample listing. Supports business systems and day-to-day IT requests.",
    ...sampleBody,
    postedAt: null,
    applyUrl: "/contact",
    sample: true,
  },
  {
    id: "sample-3",
    slug: "sample-staff-accountant",
    title: "Staff Accountant",
    category: "finance-accounting",
    location: "Plano, TX",
    employmentType: "Full-time",
    employerDisplay: "Sample employer",
    summary:
      "Sample listing. Supports month-end close, reconciliations and reporting.",
    ...sampleBody,
    postedAt: null,
    applyUrl: "/contact",
    sample: true,
  },
  {
    id: "sample-4",
    slug: "sample-bilingual-hr-coordinator",
    title: "Bilingual HR Coordinator",
    category: "hr-administration",
    location: "Plano, TX",
    employmentType: "Full-time",
    employerDisplay: "Sample employer",
    summary:
      "Sample listing. Supports onboarding and employee administration in Korean and English.",
    ...sampleBody,
    postedAt: null,
    applyUrl: "/contact",
    sample: true,
  },
  {
    id: "sample-5",
    slug: "sample-forklift-operator",
    title: "Forklift Operator",
    category: "logistics-warehouse",
    location: "Coppell, TX",
    employmentType: "Full-time",
    employerDisplay: "Sample employer",
    summary:
      "Sample listing. Operates forklift and material handling equipment in a warehouse.",
    ...sampleBody,
    postedAt: null,
    applyUrl: "/contact",
    sample: true,
  },
  {
    id: "sample-6",
    slug: "sample-refurbishment-operations-technician",
    title: "Refurbishment Operations Technician",
    category: "manufacturing-operations",
    location: "Irving, TX",
    employmentType: "Full-time",
    employerDisplay: "Sample employer",
    summary:
      "Sample listing. Supports inspection, testing and quality checks on a refurbishment line.",
    ...sampleBody,
    postedAt: null,
    applyUrl: "/contact",
    sample: true,
  },
];

// Keyword shortcuts under the search box. These only fill the search field;
// they do not claim that such roles are open.
export const quickFilters = ["Warehouse", "Technician", "Engineer", "Operations", "Bilingual"];

export const categoryLabel = (code: JobCategoryCode) =>
  jobCategories.find((c) => c.code === code)?.label ?? code;

export const getJob = (slug: string) => jobs.find((job) => job.slug === slug);
