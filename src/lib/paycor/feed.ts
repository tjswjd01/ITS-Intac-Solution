/**
 * Loads the open jobs from Paycor. Server only: call this from server
 * components and route functions, never from a "use client" file.
 *
 * The feed is fetched at most once per FEED_REVALIDATE_SECONDS and shared by
 * every page that needs it. If Paycor cannot be reached, or sends something
 * that is not a complete feed, the result is "unavailable" with no jobs.
 * There is no fallback list, so the site never advertises a job it could not
 * confirm.
 */
import { cache } from "react";

import { jobCategories, type Job, type JobCategoryCode } from "@/content/jobs";

import { buildJobs, type AdapterRules } from "./adapter";
import { FEED_REVALIDATE_SECONDS, FEED_TIMEOUT_MS, PAYCOR_FEED_URL, PAYCOR_RULES } from "./config";

export type JobsResult =
  | {
      status: "ok";
      jobs: Job[];
      /** ISO time at which Paycor produced the feed these jobs came from. */
      fetchedAt: string;
    }
  | { status: "unavailable"; jobs: Job[] };

const rules: AdapterRules = {
  ...PAYCOR_RULES,
  categoryLabels: Object.fromEntries(jobCategories.map((c) => [c.code, c.label])) as Record<
    JobCategoryCode,
    string
  >,
};

const ATTEMPTS = 2;

async function fetchFeed(): Promise<{ xml: string; fetchedAt: string }> {
  const response = await fetch(PAYCOR_FEED_URL, {
    next: { revalidate: FEED_REVALIDATE_SECONDS },
    signal: AbortSignal.timeout(FEED_TIMEOUT_MS),
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const xml = await response.text();
  // The Date header is stored with the cached response, so this stays the
  // real fetch time even when the response is served from the cache.
  const served = Date.parse(response.headers.get("date") ?? "");
  return { xml, fetchedAt: new Date(Number.isNaN(served) ? Date.now() : served).toISOString() };
}

/** The last feed response that was parsed, so pages that share one cached
 *  response do not each parse it (and log it) again. */
let parsed: { key: string; result: JobsResult } | null = null;

async function loadJobs(): Promise<JobsResult> {
  let lastError: unknown;
  for (let attempt = 1; attempt <= ATTEMPTS; attempt += 1) {
    try {
      const { xml, fetchedAt } = await fetchFeed();
      const key = `${fetchedAt}:${xml.length}`;
      if (parsed?.key === key) return parsed.result;

      const { jobs, totalEntries, excluded } = buildJobs(xml, rules);
      // Counts only. Nothing about candidates passes through this module.
      console.info(
        `[paycor] feed ok: ${totalEntries} entries, ${jobs.length} open, excluded ${JSON.stringify(excluded)}`,
      );
      const result: JobsResult = { status: "ok", jobs, fetchedAt };
      parsed = { key, result };
      return result;
    } catch (error) {
      lastError = error;
    }
  }
  const message = lastError instanceof Error ? `${lastError.name}: ${lastError.message}` : String(lastError);
  console.error(`[paycor] job feed unavailable after ${ATTEMPTS} attempts: ${message}`);
  return { status: "unavailable", jobs: [] };
}

/** Open jobs from Paycor. Calls within one request share a single load. */
export const getJobs = cache(loadJobs);
