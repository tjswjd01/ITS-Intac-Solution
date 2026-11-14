/**
 * All Home page copy lives here so wording can change without touching layout.
 *
 * Items marked TODO(owner) are placeholders for layout only and still need the
 * owner's sign-off before the site goes live.
 */

export const hero = {
  eyebrow: "Workforce · Operations · Automation",
  headline: ["People, Operations and", "Technology for"],
  headlineAccent: "U.S. Business Success.",
  // Proposed copy from the v2 brief, subject to owner approval.
  copy: "ITS provides direct hire, workforce staffing and management, engineering-led operations, specialized process automation, and U.S. market entry support.",
  primary: { label: "Our Solutions", href: "/services" },
  secondary: { label: "About ITS", href: "/about" },
  // TODO(owner): confirm the hero footage and still. Both are existing site assets.
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

// Card copy is the owner-preferred wording from the v2 brief (section 9).
// Service scope rules: staffing covers warehouse/logistics labor and is not
// automation; automation means refurbishment-process equipment and the
// logistics robots in that facility, never general warehouse automation.
export const solutions: {
  key: SolutionKey;
  title: string;
  description: string;
  href: string;
}[] = [
  {
    key: "direct-hire",
    title: "Direct Hire",
    description:
      "Executive, professional, technical and bilingual talent acquisition.",
    href: "/services/direct-hire",
  },
  {
    key: "staffing",
    title: "Staffing & Workforce",
    description:
      "Flexible staffing for logistics, warehouse, manufacturing and professional roles.",
    href: "/services/workforce-solutions",
  },
  {
    key: "managed-operations",
    title: "Managed Operations",
    description:
      "Engineering-led management of people, processes, quality and KPIs.",
    href: "/services/operations",
  },
  {
    key: "automation",
    title: "Automation & Robotics",
    description:
      "Customized refurbishment-process automation and logistics robot solutions.",
    href: "/services/automation-solutions",
  },
  {
    key: "market-entry",
    title: "U.S. Market Entry",
    description:
      "Workforce planning, facility/production-line support and U.S. operational setup.",
    href: "/services/global-business-support",
  },
];

// TODO(owner): placeholder figures for layout. Confirm the exact numbers and
// labels before publishing. Unverified figures from earlier versions
// (10M+, 99.5%, 24/7, 20+ years) are intentionally left out.
export const proof: { value: string; label: string }[] = [
  { value: "500+", label: "Specialists Employed" },
  { value: "5", label: "U.S. Facilities" },
  { value: "Engineering-Led", label: "Managed Operations" },
];

export const whyIts = {
  eyebrow: "Why ITS",
  title: "A Trusted Partner for People, Operations and Growth.",
  copy: "From hiring and workforce management to engineering-led site operations, ITS helps companies build and run stable, efficient operations in the United States.",
  link: { label: "Learn More", href: "/about" },
  points: [
    {
      key: "engineering",
      title: "Engineering-Led Operations",
      description:
        "Sites are run by managers with hands-on technical and process experience.",
    },
    {
      key: "workforce",
      title: "Workforce Management",
      description:
        "Hiring, onboarding, payroll, attendance and on-site supervision in one framework.",
    },
    {
      key: "quality",
      title: "KPI & Quality Control",
      description:
        "Quality, productivity and cost are tracked against agreed KPIs and reported.",
    },
    {
      key: "enterprise",
      title: "Enterprise Operations Experience",
      description:
        "Long-running, high-volume programs delivered for global enterprise clients.",
    },
  ],
} as const;

export const industries = {
  eyebrow: "Industries We Serve",
  title: "Supporting Key Industries Across the U.S.",
  link: { label: "View Industries", href: "/industries" },
  items: [
    { key: "electronics", label: "Electronics / IT" },
    { key: "logistics", label: "Logistics / Supply Chain" },
    { key: "manufacturing", label: "Manufacturing / Refurbishment" },
    { key: "automation", label: "Automation / Engineering" },
  ],
} as const;

export const nemo = {
  eyebrow: "NEMO",
  title: "NEMO: Our Operational Intelligence Advantage.",
  copy: "NEMO is the workforce and site management system ITS built for its own operations. It brings attendance, working hours, site issues and reporting into one view, so headquarters and on-site managers work from the same information.",
  points: [
    "Attendance and working hours",
    "Site issue tracking and follow-up",
    "Headcount and operating status",
    "Reporting for headquarters and site managers",
  ],
  note: "NEMO is used inside ITS-run operations. It is not sold as a separate product.",
  link: { label: "Why ITS", href: "/about" },
  sampleLabel: "Illustrative sample dashboard",
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
export const insights: {
  category: string;
  title: string;
  href: string;
  date: string;
}[] = [];

export const closing = {
  title: "Let’s Build Your U.S. Operations Together.",
  copy: "Connect with ITS to discuss your workforce, operations, or U.S. market entry needs.",
};
