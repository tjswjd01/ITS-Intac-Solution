import type { MetadataRoute } from "next";

const BASE = "https://www.intacsolution.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number }[] = [
    { path: "", priority: 1.0 },
    { path: "/about", priority: 0.8 },
    { path: "/services", priority: 0.9 },
    { path: "/services/operations", priority: 0.9 },
    { path: "/services/mobile-refurbishment", priority: 0.9 },
    { path: "/services/workforce-solutions", priority: 0.9 },
    { path: "/services/automation-solutions", priority: 0.8 },
    { path: "/services/global-business-support", priority: 0.8 },
    { path: "/careers", priority: 0.7 },
    { path: "/contact", priority: 0.6 },
  ];

  const lastModified = new Date();

  return routes.map(({ path, priority }) => ({
    url: `${BASE}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority,
  }));
}
