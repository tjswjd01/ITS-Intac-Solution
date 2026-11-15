/**
 * All Home page copy lives here so wording can change without touching layout.
 *
 * Items marked TODO(owner) are placeholders for layout only and still need the
 * owner's sign-off before the site goes live.
 */

export const hero = {
  eyebrow: "Workforce & Operations Partner",
  headline: ["People, Operations,", "and Technology"],
  headlineAccent: "for Your U.S. Growth.",
  copy: "ITS combines talent solutions, engineering-led operations management, and technical execution to support businesses operating and expanding in the U.S.",
  primary: { label: "Explore Our Solutions", href: "/services" },
  secondary: { label: "About ITS", href: "/about" },
  // TODO(owner): the clip has a caption baked in. Replace when a clean clip exists.
  video: "/videos/its-smart.mp4",
  poster: "/images/who-team.jpeg",
  posterAlt: "ITS technicians working at stations on an operations floor",
};

export type SolutionKey =
  | "direct-hire"
  | "staffing"
  | "managed-operations"
  | "automation"
  | "market-entry";

export const solutionsIntro = {
  eyebrow: "Our Solutions",
  title: "Five Integrated Solutions, One Trusted Partner",
  copy: "From talent acquisition to full operations, we deliver the people, technology, and execution to keep your business moving.",
  link: { label: "View All Solutions", href: "/services" },
};

// Scope rules: staffing covers warehouse and forklift labor and is not
// automation; automation means refurbishment-process equipment and the AMR
// robots in that facility, never general warehouse automation.
// TODO(owner): card photos are placeholders from existing ITS media. Replace
// each with a photo that fits the solution.
export const solutions: {
  key: SolutionKey;
  title: string;
  description: string;
  href: string;
  image: string;
  alt: string;
}[] = [
  {
    key: "direct-hire",
    title: "Direct Hire",
    description:
      "Targeted executive, professional, technical, and bilingual recruiting for long-term roles.",
    href: "/services/direct-hire",
    image: "/images/who-team.jpeg",
    alt: "Team members at work on an ITS operations floor",
  },
  {
    key: "staffing",
    title: "Staffing & Workforce",
    description:
      "Flexible staffing and employee management for logistics, warehouse, manufacturing, technical, and professional roles, including forklift operators and warehouse associates.",
    href: "/services/workforce-solutions",
    image: "/images/who-warehouse.jpeg",
    alt: "Warehouse floor with pallets staged for handling",
  },
  {
    key: "managed-operations",
    title: "Managed Operations",
    description:
      "Engineering-led management of workforce, processes, technical operations, quality, and KPIs.",
    href: "/services/operations",
    image: "/images/its-hhp.png",
    alt: "Technicians at repair stations on an ITS-run line",
  },
  {
    key: "automation",
    title: "Automation & Robotics",
    description:
      "Customized automation for mobile refurbishment processes and AMR robots used within the refurbishment facility, with robot rental, sales, and repair support.",
    href: "/services/automation-solutions",
    image: "/images/its-2025.png",
    alt: "ITS-built refurbishment process equipment",
  },
  {
    key: "market-entry",
    title: "U.S. Market Entry",
    description:
      "Workforce planning, recruiting, facility and production-line support, and operational setup for companies expanding in the U.S.",
    href: "/services/global-business-support",
    image: "/images/its-2022.png",
    alt: "Open production floor prepared for a new operation",
  },
];

// TODO(owner): wording to be finalized by the owner. No figures are shown
// until the exact numbers and labels are approved.
export const proof = {
  lead: "Proven Operational Execution",
  items: [
    { key: "engineering", title: "Engineering-Led", label: "Operations Management" },
    { key: "workforce", title: "Workforce", label: "Management at Scale" },
    { key: "enterprise", title: "Enterprise", label: "Operations Experience" },
  ],
} as const;

export const whyIts = {
  eyebrow: "Why ITS",
  title: "A Stronger Operations Partner",
  copy: "We combine engineering expertise, workforce management, and large-scale operational experience to deliver reliable, scalable results for our clients.",
  // TODO(owner): placeholder photo from existing ITS media.
  image: "/images/its-automation.jpeg",
  imageAlt: "ITS equipment in use on the operations floor",
  points: [
    {
      key: "engineering",
      title: "Engineering-Led Expertise",
      description: "Process, quality, and operational know-how.",
    },
    {
      key: "workforce",
      title: "Workforce Management",
      description: "Recruiting, placement, and on-site support.",
    },
    {
      key: "enterprise",
      title: "Enterprise-Level Execution",
      description: "Experience with complex, large-scale operations.",
    },
    {
      key: "technology",
      title: "Technology-Enabled Operations",
      description: "NEMO and process automation for greater efficiency and visibility.",
    },
  ],
} as const;

// The four categories and anchors match the /industries page.
// TODO(owner): tile photos are placeholders from existing ITS media.
export const industries = {
  eyebrow: "Industries",
  title: "Industry Expertise for Real-World Impact",
  copy: "Tailored workforce and operational solutions for key U.S. industries.",
  items: [
    {
      key: "electronics",
      label: "Electronics / IT",
      href: "/industries#electronics",
      image: "/images/IMG_E8933.JPG",
      alt: "Mobile device seated in a test fixture",
    },
    {
      key: "logistics",
      label: "Logistics / Supply Chain",
      href: "/industries#logistics",
      image: "/images/who-warehouse.jpeg",
      alt: "Warehouse floor with staged pallets",
    },
    {
      key: "manufacturing",
      label: "Manufacturing / Refurbishment",
      href: "/industries#manufacturing",
      image: "/images/its-hhp.png",
      alt: "Production and repair line with technicians",
    },
    {
      key: "automation",
      label: "Automation / Engineering",
      href: "/industries#automation",
      image: "/images/IMG_E8916.JPG",
      alt: "ITS-built process equipment units",
    },
  ],
} as const;

export const nemo = {
  eyebrow: "NEMO",
  title: "Operational Intelligence for Greater Performance",
  copy: "NEMO is the internal platform ITS uses to connect people, processes, and operations across the sites we run.",
  points: [
    "Operations Visibility",
    "Workforce Management",
    "Quality & Productivity",
    "Reporting",
  ],
  note: "NEMO is used inside ITS-run operations. It is not sold as a separate product.",
  link: { label: "Why ITS", href: "/about" },
  sampleLabel: "Illustrative sample dashboard",
};

export const insightsPreview = {
  eyebrow: "Insights",
  title: "Insights for Smarter Operations",
  copy: "Market trends, hiring strategies, and operational insights from ITS.",
  link: { label: "Read Insights", href: "/insights" },
};

// Neutral headings until the owner approves named case studies and metrics.
export const caseStudies = {
  eyebrow: "Track Record",
  title: "Proven in Real Operations.",
  copy: "Operational excellence and workforce stability, built through long-term partnerships.",
  items: [
    {
      tag: "Managed Operations",
      title: "Engineering-Led Operations",
      description:
        "High-volume device repair and refurbishment lines run to the client’s quality standards.",
      image: "/images/its-hhp.png",
      alt: "Technicians at repair stations on an ITS-run operations floor",
    },
    {
      tag: "Staffing & Workforce",
      title: "Scalable Workforce Programs",
      description:
        "Warehouse, logistics and production workforce programs with on-site management.",
      image: "/images/who-warehouse.jpeg",
      alt: "Warehouse floor with pallets staged for outbound handling",
    },
    {
      tag: "U.S. Market Entry",
      title: "U.S. Launch Support",
      description:
        "Workforce and operational setup for companies starting operations in the United States.",
      image: "/images/its-2022.png",
      alt: "Open production floor prepared for a new operation",
    },
  ],
};

// Hidden until real, approved content exists. Add items to show the sections.
export const testimonials: { quote: string; attribution: string }[] = [];
export const closing = {
  title: "Let’s Build Your Next Phase Together",
  copy: "Discuss your talent, operations, or U.S. expansion needs with our team.",
  // The contact page lists phone and email. Its form does not send yet.
  cta: { label: "Get in Touch", href: "/contact" },
};
