// Tests for the Paycor feed adapter. Run with: npm test
// Uses Node's built-in test runner; Node 24 loads the .ts files directly.
import assert from "node:assert/strict";
import { test } from "node:test";

import { getJobStats, jobCategories } from "../../content/jobs.ts";
import {
  FeedParseError,
  buildJobs,
  exclusionReason,
  mapCategory,
  parseFeed,
  parsePay,
  sanitizeHtml,
} from "./adapter.ts";
import { PAYCOR_CLIENT_ID, PAYCOR_RULES } from "./config.ts";

const rules = {
  ...PAYCOR_RULES,
  categoryLabels: Object.fromEntries(jobCategories.map((c) => [c.code, c.label])),
};

const ID = {
  open: "8a78839ea1ccddec01a1d61458f93c23",
  closedDept: "8a7885a89c2fd0e3019c678058833783",
  closedTitle: "8a7887a19d4aea3c019d553c19e30436",
  zero: "8a78859e9b80c289019bc773e2e076e6",
  mislabel: "8a7887a8a0abfc8001a0b59903237375",
  unmapped: "8a78839ea1ccddec01a1d2edb5eb540c",
  directHire: "8a78859f9eb34c34019ed155b3a33a9e",
};

/** Builds one entry in the same shape Paycor sends. `null` leaves a field out. */
function entry(fields) {
  const f = {
    id: ID.open,
    title: "Project Manager 2",
    department: "Engineering",
    city: "Mountain View",
    state: "CA",
    openings: "1",
    salary: "$55 - $57 per hour",
    published: "2026-11-13T18:03:40Z",
    updated: "2026-11-14T09:00:00Z",
    summary: "&lt;p&gt;Role summary.&lt;/p&gt;",
    ...fields,
  };
  const tag = (name, value) => (value === null ? "" : `<${name}>${value}</${name}>`);
  return `
  <entry>
    ${tag("title", f.title)}
    <link rel="alternate" href="https://www.intacsolution.com/join-us?gnk=job&amp;gni=${f.id}" />
    ${f.department === null ? "" : `<category term="${f.department}" />`}
    <author><name>United States ${f.city} ${f.state}</name></author>
    ${tag("id", f.id)}
    ${tag("updated", f.updated)}
    ${tag("published", f.published)}
    ${f.summary === null ? "" : `<summary type="html">${f.summary}</summary>`}
    <newton:jobId>302-18158</newton:jobId>
    ${tag("newton:openings", f.openings)}
    ${tag("newton:department", f.department)}
    ${tag("newton:location", f.city)}
    <newton:priority>Normal</newton:priority>
    <newton:country>United States</newton:country>
    ${tag("newton:state", f.state)}
    ${f.salary === "" ? "<newton:salary />" : tag("newton:salary", f.salary)}
    <newton:job_target_questionnaire_url>https://api.recruitingbypaycor.com/v1/jobs/${f.id}/applications/1/indeed</newton:job_target_questionnaire_url>
    <newton:job_target_apply_url>https://api.recruitingbypaycor.com/v1/jobs/${f.id}/candidates/jobtarget</newton:job_target_apply_url>
    <newton:easy_apply>1</newton:easy_apply>
  </entry>`;
}

const feed = (...entries) => `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xmlns:newton="http://www.newtonsoftware.com" version="1.0">
  <title>Paycor Recruiting Feed</title>
  <generator>Intac Solution</generator>${entries.join("")}
</feed>`;

/* ---------------------------- parsing ---------------------------- */

test("parseFeed reads the fields the site uses and decodes entities once", () => {
  const [e] = parseFeed(
    feed(entry({ title: "Import/Export &amp; Logistics Coordinator", department: "Accounting &amp; Finance" })),
  );
  assert.equal(e.id, ID.open);
  assert.equal(e.title, "Import/Export & Logistics Coordinator");
  assert.equal(e.department, "Accounting & Finance");
  assert.equal(e.city, "Mountain View");
  assert.equal(e.state, "CA");
  assert.equal(e.openings, 1);
  assert.equal(e.salary, "$55 - $57 per hour");
  assert.equal(e.published, "2026-11-13T18:03:40Z");
  assert.equal(e.updated, "2026-11-14T09:00:00Z");
  assert.equal(e.summaryHtml, "<p>Role summary.</p>");
});

test("parseFeed tolerates missing and empty optional fields", () => {
  const [e] = parseFeed(
    feed(entry({ salary: "", openings: null, published: null, summary: null, city: null, state: null })),
  );
  assert.equal(e.salary, "");
  assert.equal(e.openings, null);
  assert.equal(e.published, "");
  assert.equal(e.summaryHtml, "");
  assert.equal(e.city, "");
});

test("parseFeed reads a CDATA description as written", () => {
  const [e] = parseFeed(feed(entry({ summary: "<![CDATA[<p>Tom &amp; Co</p>]]>" })));
  assert.equal(e.summaryHtml, "<p>Tom &amp; Co</p>");
});

test("parseFeed returns an empty list for a complete feed with no jobs", () => {
  assert.deepEqual(parseFeed(feed()), []);
});

test("parseFeed rejects an error page and a cut-off response", () => {
  assert.throws(() => parseFeed("<html><body>Service Unavailable</body></html>"), FeedParseError);
  assert.throws(() => parseFeed(""), FeedParseError);
  const whole = feed(entry({}), entry({ id: ID.unmapped }));
  assert.throws(() => parseFeed(whole.slice(0, whole.length - 400)), FeedParseError);
  // Cut off inside the last entry but with a closing tag pasted on.
  const brokenEntry = `${whole.slice(0, whole.lastIndexOf("<newton:openings>"))}</feed>`;
  assert.throws(() => parseFeed(brokenEntry), FeedParseError);
});

/* ------------------------- open/closed rule ------------------------- */

const reasonFor = (fields) => exclusionReason(parseFeed(feed(entry(fields)))[0], rules);

test("an unmarked, published job is open", () => {
  assert.equal(reasonFor({}), null);
});

test("a job in the CLOSED department is excluded, whatever the letter case", () => {
  assert.equal(reasonFor({ department: "CLOSED" }), "closed-department");
  assert.equal(reasonFor({ department: " Closed " }), "closed-department");
});

test("a closed mark in the title excludes the job", () => {
  for (const title of ["[CLOSED] Software Tester", "(Closed) Analyst", "Analyst [closed]", "CLOSED - Analyst", "Closed: Analyst"]) {
    assert.equal(reasonFor({ title }), "closed-title", title);
  }
});

test("the word 'closed' alone does not close a job", () => {
  assert.equal(reasonFor({ title: "Closed-Loop Controls Engineer" }), null);
  assert.equal(reasonFor({ summary: "&lt;p&gt;Works on closed systems. Applications closed on Fridays.&lt;/p&gt;" }), null);
});

test("zero openings excludes; an unknown openings count does not", () => {
  assert.equal(reasonFor({ openings: "0" }), "no-openings");
  assert.equal(reasonFor({ openings: null }), null);
  assert.equal(reasonFor({ openings: "many" }), null);
});

test("a job with no department cannot be checked and is held back", () => {
  assert.equal(reasonFor({ department: null }), "no-department");
});

test("a bad id or empty title is invalid", () => {
  assert.equal(reasonFor({ id: "../../etc/passwd" }), "invalid");
  assert.equal(reasonFor({ id: "8A78839EA1CCDDEC01A1D61458F93C23" }), "invalid");
  assert.equal(reasonFor({ id: `${ID.open}0` }), "invalid");
  assert.equal(reasonFor({ title: "   " }), "invalid");
});

test("the hide-list removes a job that is otherwise open", () => {
  const [e] = parseFeed(feed(entry({})));
  assert.equal(exclusionReason(e, { ...rules, hiddenJobIds: [ID.open] }), "hidden");
});

/* --------------------------- categories --------------------------- */

test("departments map to the six ITS categories", () => {
  const cases = {
    Engineering: "engineering",
    "Software Engineering": "it-software",
    "IT/Technology": "it-software",
    "Accounting & Finance": "finance-accounting",
    "Human Resource": "hr-administration",
    "Executive & Administrative": "hr-administration",
    "Logistics Management": "logistics-warehouse",
    "Supply Chain Management": "logistics-warehouse",
    "Service Operation": "manufacturing-operations",
  };
  for (const [department, category] of Object.entries(cases)) {
    assert.equal(mapCategory(department, "Any Title", rules), category, department);
  }
});

test("a non-functional department falls back to the title", () => {
  assert.equal(mapCategory("Direct Hire", "Field Service Engineer - CVD", rules), "engineering");
  assert.equal(mapCategory("Direct Hire", "Entry-Level Field Service Engineer/Technician", rules), "engineering");
  assert.equal(mapCategory("Direct Hire", "Sales & Operations Coordinator", rules), "manufacturing-operations");
  assert.equal(mapCategory("Direct Hire", "Software Engineer", rules), "it-software");
  assert.equal(mapCategory("Some New Department", "Warehouse Associate", rules), "logistics-warehouse");
});

test("a job that fits no category is still listed, under its Paycor department", () => {
  assert.equal(mapCategory("Business Professional", "Legal Professional – Bilingual (Korean/English)", rules), null);
  assert.equal(mapCategory("constructor", "Analyst", rules), null);
  const { jobs } = buildJobs(feed(entry({ id: ID.unmapped, department: "Business Professional", title: "Business Analyst 2" })), rules);
  assert.equal(jobs.length, 1);
  assert.equal(jobs[0].category, null);
  assert.equal(jobs[0].categoryDisplay, "Business Professional");
});

/* ------------------------------ pay ------------------------------ */

test("pay with a clear, believable unit is kept as written", () => {
  assert.deepEqual(parsePay("$55 - $57 per hour", rules), { text: "$55 - $57 per hour", unit: "hour" });
  assert.deepEqual(parsePay("$33.00 - $34.50 per hour", rules), { text: "$33.00 - $34.50 per hour", unit: "hour" });
  assert.deepEqual(parsePay("$27 per hour", rules), { text: "$27 per hour", unit: "hour" });
  assert.deepEqual(parsePay("$62,880 - $153,960 per year", rules), { text: "$62,880 - $153,960 per year", unit: "year" });
  assert.deepEqual(parsePay("$65,000 per year", rules), { text: "$65,000 per year", unit: "year" });
});

test("an annual salary labelled hourly is not shown as an hourly rate", () => {
  assert.equal(parsePay("$55,000 - $75,000 per hour", rules), null);
  assert.equal(parsePay("$30 - $32 per year", rules), null);
});

test("pay with no amount or no unit is left off, never guessed", () => {
  assert.equal(parsePay("", rules), null);
  assert.equal(parsePay("   ", rules), null);
  assert.equal(parsePay("$55 - $57", rules), null);
  assert.equal(parsePay("Competitive, per year", rules), null);
  assert.equal(parsePay("DOE", rules), null);
});

/* ---------------------------- sanitizer ---------------------------- */

// Whatever goes in, only these tags, with no attributes, may come out.
const SAFE_OUTPUT = /^(?:[^<>]|<\/?(?:p|div|ul|ol|li|strong|em|u|blockquote|h3|h4)>|<br>|<hr>)*$/;

const attacks = [
  `<script>alert(1)</script><p>ok</p>`,
  `<SCRIPT SRC=//evil.example/x.js></SCRIPT>ok`,
  `<p>ok</p><script>alert(1)`,
  `<scr<script>ipt>alert(1)</scr</script>ipt>`,
  `<img src=x onerror=alert(1)>`,
  `<p onclick="alert(1)" style="background:url(javascript:alert(1))">ok</p>`,
  `<a href="javascript:alert(1)">click</a>`,
  `<a href="https://evil.example" target="_blank">click</a>`,
  `<iframe src="https://evil.example"></iframe>ok`,
  `<svg><script>alert(1)</script></svg>ok`,
  `<svg onload=alert(1)>`,
  `<math><mi xlink:href="javascript:alert(1)">x</mi></math>`,
  `<style>body{display:none}</style>ok`,
  `<b title="a>b" onmouseover='alert(1)'>bold</b>`,
  `<div><p>unclosed <strong>bold`,
  `</div></div></section></main>after`,
  `<p>a</div></p></div>b`,
  `<!-- <script>alert(1)</script> -->ok`,
  `<![CDATA[<script>alert(1)</script>]]>ok`,
  `<?php echo 1 ?>ok`,
  `<constructor>x</constructor><toString>y</toString><__proto__>z</__proto__>`,
  `<form action="https://evil.example"><input name=a><button>go</button></form>`,
  `<object data="x"></object><embed src="x"><base href="//evil.example/">ok`,
  `<meta http-equiv="refresh" content="0;url=//evil.example">ok`,
  `<p>1 < 2 and 3 > 2</p>`,
  `<p title="unterminated>text</p>`,
  `<<p>>x<</p>>`,
  `<textarea></div><script>alert(1)</script></textarea>ok`,
];

test("sanitized output only ever contains allowlisted tags with no attributes", () => {
  for (const input of attacks) {
    const output = sanitizeHtml(input);
    assert.match(output, SAFE_OUTPUT, `${input} -> ${output}`);
    assert.doesNotMatch(output, /alert\(1\)<|javascript:|onerror|onclick|onload|evil\.example|display:none/i, `${input} -> ${output}`);
  }
});

test("script and style content is removed, not shown as text", () => {
  assert.equal(sanitizeHtml(`<script>alert(1)</script><p>ok</p>`), "<p>ok</p>");
  assert.equal(sanitizeHtml(`<p>ok</p><script>alert(1)`), "<p>ok</p>");
  assert.equal(sanitizeHtml(`<style>p{color:red}</style>ok`), "ok");
});

test("links and images are removed; link text is kept", () => {
  assert.equal(sanitizeHtml(`<a href="javascript:alert(1)">click</a>`), "click");
  assert.equal(sanitizeHtml(`before<img src=x onerror=alert(1)>after`), "beforeafter");
});

test("already-escaped markup stays as visible text", () => {
  assert.equal(sanitizeHtml(`<p>&lt;script&gt;alert(1)&lt;/script&gt;</p>`), "<p>&lt;script&gt;alert(1)&lt;/script&gt;</p>");
  assert.equal(sanitizeHtml(`<p>1 < 2 & 3 > 2, R&D, &copy; &#8211;</p>`), "<p>1 &lt; 2 &amp; 3 &gt; 2, R&amp;D, &copy; &#8211;</p>");
});

test("output tags are always balanced, so it cannot break the page around it", () => {
  assert.equal(sanitizeHtml(`</div></div>after`), "after");
  assert.equal(sanitizeHtml(`<div><p>unclosed <strong>bold`), "<div><p>unclosed <strong>bold</strong></p></div>");
  assert.equal(sanitizeHtml(`<p>a</div>b</p>`), "<p>ab</p>");
  for (const input of attacks) {
    const output = sanitizeHtml(input);
    const stack = [];
    for (const [, slash, name] of output.matchAll(/<(\/?)([a-z0-9]+)>/g)) {
      if (name === "br" || name === "hr") continue;
      if (!slash) stack.push(name);
      else assert.equal(stack.pop(), name, `${input} -> ${output}`);
    }
    assert.deepEqual(stack, [], `${input} -> ${output}`);
  }
});

test("Paycor's editor markup is reduced to clean structure", () => {
  const input = `<div><b>Position Details</b></div>

<ul>
	<li><span style="font-size:11pt" data-path-to-node="3">Role: Coordinator</span></li>
	<li>Experience: 1–3 years<br />
	&nbsp;</li>
</ul>
<h1>Summary</h1><p style="margin:0">Line one<br>Line two</p><div>&nbsp;</div>`;
  assert.equal(
    sanitizeHtml(input),
    "<div><strong>Position Details</strong></div> <ul> <li>Role: Coordinator</li> <li>Experience: 1–3 years</li> </ul> <h3>Summary</h3><p>Line one<br>Line two</p>",
  );
});

test("an empty or missing description gives an empty string", () => {
  assert.equal(sanitizeHtml(""), "");
  assert.equal(sanitizeHtml("<div>&nbsp;</div><p><br></p>"), "");
});

/* ---------------------------- end to end ---------------------------- */

const sample = feed(
  entry({ id: ID.closedDept, title: "HR Generalist", department: "CLOSED", published: "2026-02-16T17:29:50Z" }),
  entry({ id: ID.directHire, title: "Field Service Engineer - CVD", department: "Direct Hire", city: "Malta", state: "NY", salary: "$60,000 - $100,000 per year", published: "2026-06-16T16:48:35Z" }),
  entry({}),
  entry({ id: ID.closedTitle, title: "[CLOSED] Software Tester - Voice Interaction", department: "IT/Technology" }),
  entry({ id: ID.zero, title: "Network Tester", department: "IT/Technology", openings: "0" }),
  entry({ id: ID.mislabel, title: "Sales &amp; Operations Coordinator", department: "Direct Hire", city: "Cedar Park", state: "TX", salary: "$55,000 - $75,000 per hour", published: "2026-08-19T12:00:00Z", summary: "&lt;p onclick=&quot;x()&quot;&gt;Hello&lt;script&gt;alert(1)&lt;/script&gt;&lt;/p&gt;" }),
  entry({ id: ID.unmapped, title: "Legal Professional", department: "Business Professional", city: "Plano", state: "TX", salary: "", published: "not a date" }),
  entry({}), // the same job a second time
);

test("buildJobs keeps only verified-open jobs and counts why the rest were left out", () => {
  const { jobs, totalEntries, excluded } = buildJobs(sample, rules);
  assert.equal(totalEntries, 8);
  assert.deepEqual(excluded, { "closed-department": 1, "closed-title": 1, "no-openings": 1, duplicate: 1 });
  assert.deepEqual(
    jobs.map((j) => j.id),
    [ID.open, ID.mislabel, ID.directHire, ID.unmapped], // newest first, undated last
  );
});

test("a normalized job has the expected shape and nothing extra from Paycor", () => {
  const { jobs } = buildJobs(sample, rules);
  const job = jobs[0];
  assert.deepEqual(job, {
    id: ID.open,
    slug: ID.open,
    title: "Project Manager 2",
    category: "engineering",
    categoryDisplay: "Engineering",
    location: "Mountain View, CA",
    employmentType: null,
    pay: { text: "$55 - $57 per hour", unit: "hour" },
    postedAt: "2026-11-13T18:03:40.000Z",
    updatedAt: "2026-11-14T09:00:00.000Z",
    descriptionHtml: "<p>Role summary.</p>",
    applyUrl: `https://recruitingbypaycor.com/career/JobIntroduction.action?clientId=${PAYCOR_CLIENT_ID}&id=${ID.open}&source=&lang=en`,
  });
  for (const j of jobs) {
    assert.doesNotMatch(JSON.stringify(j), /indeed|jobtarget|api\.recruitingbypaycor/);
    assert.ok(j.applyUrl.includes(`&id=${j.id}&`));
  }
});

test("missing data stays missing: no invented pay or dates", () => {
  const { jobs } = buildJobs(sample, rules);
  const mislabel = jobs.find((j) => j.id === ID.mislabel);
  assert.equal(mislabel.pay, null);
  assert.equal(mislabel.title, "Sales & Operations Coordinator");
  assert.equal(mislabel.descriptionHtml, "<p>Hello</p>");
  const undated = jobs.find((j) => j.id === ID.unmapped);
  assert.equal(undated.pay, null);
  assert.equal(undated.postedAt, null);
  assert.notEqual(undated.updatedAt, null);
});

test("overview numbers come from the same open list as the cards", () => {
  const { jobs } = buildJobs(sample, rules);
  const stats = getJobStats(jobs, new Date("2026-11-15T12:00:00Z"));
  assert.equal(stats.openJobs, 4);
  assert.equal(stats.byCategory.engineering, 2);
  assert.equal(stats.byCategory["manufacturing-operations"], 1);
  assert.equal(stats.byCategory["it-software"], 0);
  assert.equal(stats.activeCategories, 2);
  assert.equal(stats.locations, 4);
  assert.equal(stats.newThisWeek, 1);
  // The unmapped job is counted in the total but in none of the six categories.
  assert.equal(Object.values(stats.byCategory).reduce((a, b) => a + b, 0), 3);
  assert.equal(getJobStats(jobs.map((j) => ({ ...j, postedAt: null }))).newThisWeek, null);
  assert.equal(getJobStats([]).openJobs, 0);
});
