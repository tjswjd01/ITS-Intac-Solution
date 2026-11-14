/**
 * Insights data: the single source for the Insights page, the article pages
 * and the Career Advice preview on Careers.
 *
 * DESIGN TEMPLATE ONLY. Every article below is a sample for layout review and
 * is labelled "Sample" on the page. No real article, date or source is implied.
 * When real articles exist (from a CMS later), replace `articles` and set
 * SHOW_SAMPLE_NOTICE to false.
 */

export const SHOW_SAMPLE_NOTICE = true;

// The four fixed editorial categories. Topic tags sit under these and never
// become top-level tabs.
export const insightCategories = [
  { code: "hr-workforce", label: "HR & Workforce" },
  { code: "job-market-hiring", label: "Job Market & Hiring" },
  { code: "operations-industry", label: "Operations & Industry" },
  { code: "career-advice", label: "Career Advice" },
] as const;

export type InsightCategoryCode = (typeof insightCategories)[number]["code"];

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: InsightCategoryCode;
  tags: string[];
  /** ISO date, or null for an unpublished sample. */
  publishedAt: string | null;
  readMinutes: number | null;
  coverImage: string | null;
  coverAlt: string;
  featured: boolean;
  body: string[];
  sources: { label: string; url: string }[];
  sample: boolean;
};

const sampleBody = [
  "This is placeholder text for layout review. It shows how an article body reads at this width and type size.",
  "Replace it with the published article. Articles should offer ITS’s own practical view, and news recaps should name their sources.",
  "A third paragraph is included so the page shows realistic length and spacing.",
];

const sample = (
  slug: string,
  title: string,
  category: InsightCategoryCode,
  tags: string[],
  featured = false,
): Article => ({
  slug,
  title,
  excerpt: "Placeholder summary for layout review. Replace with the article’s own excerpt.",
  category,
  tags,
  publishedAt: null,
  readMinutes: null,
  coverImage: null,
  coverAlt: "",
  featured,
  body: sampleBody,
  sources: [],
  sample: true,
});

export const articles: Article[] = [
  sample("sample-onboarding-a-new-site-team", "Sample article: Onboarding a new site team", "hr-workforce", ["Onboarding"], true),
  sample("sample-bilingual-hiring", "Sample article: Bilingual hiring in practice", "job-market-hiring", ["Bilingual Talent"]),
  sample("sample-quality-kpis-for-a-new-line", "Sample article: Quality KPIs for a new line", "operations-industry", ["Manufacturing"]),
  sample("sample-preparing-for-an-interview", "Sample article: Preparing for a U.S. workplace interview", "career-advice", ["Interviews"]),
];

export const insightCategoryLabel = (code: InsightCategoryCode) =>
  insightCategories.find((c) => c.code === code)?.label ?? code;

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
