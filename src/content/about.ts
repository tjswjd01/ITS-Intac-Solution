/**
 * About page wording. Edit text here; the layout lives in
 * `src/components/about`.
 *
 * Content rules for this page:
 * - No figure, client name, date or milestone that ITS has not confirmed.
 * - Items marked TODO(owner) still need the owner's sign-off before launch.
 */

export const aboutHero = {
  label: "About ITS",
  headline: ["Built on Engineering.", "Driven by People.", "Proven in Operations."],
  copy: "Since 2015, ITS has combined workforce solutions, engineering expertise, and operational management to help businesses build, manage, and scale their U.S. operations.",
  // Real ITS photo. Do not replace with a generated building or facility image.
  image: "/images/its-hhp.png",
  imageAlt: "Technicians working at stations on an ITS-run operations floor",
};

export type StrengthKey =
  | "direct-hire"
  | "workforce"
  | "engineering"
  | "managed-operations"
  | "automation"
  | "market-entry";

export const coreStrengths: {
  title: string;
  copy: string;
  video: string;
  left: { key: StrengthKey; title: string; description: string }[];
  right: { key: StrengthKey; title: string; description: string }[];
} = {
  title: "Our Core Strengths",
  copy: "A unique combination of people, technology, and operational expertise that delivers real business impact.",
  video: "/videos/about-its.mp4",
  left: [
    {
      key: "direct-hire",
      title: "Direct Hire & Talent Acquisition",
      description: "Recruiting specialized, technical, and leadership talent for long-term roles.",
    },
    {
      key: "workforce",
      title: "Workforce Management",
      description: "From hiring and onboarding to day-to-day workforce operations.",
    },
    {
      key: "engineering",
      title: "Engineering-Led Operations",
      description: "Process design, quality control, and performance optimization.",
    },
  ],
  right: [
    {
      key: "managed-operations",
      title: "Managed Operations",
      description: "End-to-end site operations, including people, process, and quality management.",
    },
    {
      // Scope: refurbishment-process equipment and the AMR robots in the ITS
      // facility. Not general warehouse automation.
      key: "automation",
      title: "Automation & Robotics",
      description: "Custom automation for refurbishment processes and AMR robots in our facility.",
    },
    {
      key: "market-entry",
      title: "U.S. Market Entry",
      description: "Workforce planning and operational setup for companies entering the U.S.",
    },
  ],
};

// No figures here. The Home page follows the same rule: numbers such as
// headcount, volumes or quality rates stay off the site until the owner
// approves the exact values and labels.
// TODO(owner): replace with approved figures when they are confirmed.
export const aboutProof = [
  { key: "since", title: "Since 2015", label: "Supporting U.S. Operations" },
  { key: "engineering", title: "Engineering-Led", label: "Operations Management" },
  { key: "workforce", title: "Workforce", label: "Management at Scale" },
  { key: "enterprise", title: "Enterprise", label: "Operations Experience" },
] as const;

export type Milestone = {
  /** A year from ITS's published history, or "Today". */
  year: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  /** Marks the current stage with the solid navy dot. */
  current?: boolean;
};

export const journey = {
  title: "Our Journey",
  copy: "From our founding in 2015 to an integrated workforce and operations partner for businesses in the U.S.",
};

// Every dated milestone below comes from the company history published on
// intacsolution.com/about-us. Volume figures and carrier names from that page
// are left out until the owner confirms them. "Today" describes the current
// offering and is deliberately not given a year.
export const journeyTop: Milestone[] = [
  {
    year: "2015",
    title: "ITS Founded",
    description: "Company established with headquarters in Dallas, Texas.",
  },
  {
    year: "2016",
    title: "Engineering & Technical Execution",
    description:
      "Partnered with MQL on network performance testing, test strategies, and automated test scripts for R&D.",
  },
  {
    year: "2018",
    title: "Quality & Inspection Capabilities",
    description:
      "Market research for the AI wireless speaker industry, and designation as a certified commercial quality control and product inspection organization.",
  },
  {
    year: "2019",
    title: "Enterprise Relationships & Workforce",
    description:
      "Partnered with Samsung SDS, providing sourcing logistics, software engineering, and asset coordinator workforce.",
  },
];

export const journeyBottom: Milestone[] = [
  {
    year: "2022",
    title: "Production Operations at Scale",
    description:
      "Began operating a mobile refurbishing production center serving major U.S. carriers.",
    image: "/images/its-2022.png",
    imageAlt: "Open production floor at an ITS-run operations center",
  },
  {
    year: "2023",
    title: "Expanded Operational Capabilities",
    description:
      "Began operating a packaging production center with Samsung, running commercial packaging lines for phones, tablets, and accessories.",
  },
  {
    year: "Today",
    title: "Integrated Workforce & Operations",
    description:
      "Talent acquisition, staffing, managed operations, automation and management systems, and U.S. market entry from one partner.",
    image: "/images/its-2025.png",
    imageAlt: "ITS-built process equipment",
    current: true,
  },
];

// TODO(owner): confirm the four industry names. They describe markets, not
// services, and currently differ from the names on the /industries page.
// Photos are existing ITS media used as placeholders.
export const aboutIndustries = {
  title: "Industries We Support",
  copy: "We deliver flexible workforce and operational solutions across diverse industries.",
  link: { label: "View Industries", href: "/industries" },
  items: [
    {
      key: "consumer-electronics",
      label: "Consumer Electronics",
      image: "/images/IMG_E8933.JPG",
      alt: "Mobile device seated in a test fixture",
    },
    {
      key: "manufacturing",
      label: "Manufacturing & Industrial",
      image: "/images/who-team.jpeg",
      alt: "Production stations on an ITS operations floor",
    },
    {
      key: "logistics",
      label: "Logistics & Distribution",
      image: "/images/who-warehouse.jpeg",
      alt: "Warehouse floor with staged pallets",
    },
    {
      key: "technology",
      label: "Technology & Electronics",
      image: "/images/its-automation.jpeg",
      alt: "Test stations with screens on an ITS line",
    },
  ],
} as const;

export const aboutCta = {
  title: "Let's Build What's Next Together.",
  copy: "From talent and operations to automation and U.S. expansion, ITS is ready to support your next stage of growth.",
  primary: { label: "Explore Our Solutions", href: "/services" },
  secondary: { label: "Get in Touch", href: "/contact" },
};
