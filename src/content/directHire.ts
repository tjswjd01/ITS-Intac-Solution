/**
 * Direct Hire page wording. Edit text here; the layout lives in
 * `src/components/direct-hire`.
 *
 * Business accuracy rules for this page:
 * - Direct Hire: ITS manages recruiting, sourcing, screening, candidate
 *   presentation and hiring coordination. The client employs the candidate.
 * - Staffing: ITS is the employer of record and handles applicable employment
 *   administration. Day-to-day work direction depends on the assignment and
 *   contract. Never describe Staffing as ITS-managed operations.
 * - Managed Operations: ITS may manage the wider function (workforce,
 *   supervisors, processes, systems, KPIs) depending on the agreed scope.
 * - No metrics, testimonials, client logos or guarantees.
 *
 * Blocks marked DRAFT were written for layout from those rules and from the
 * earlier four-step copy. TODO(owner): review and approve each DRAFT block
 * before publishing.
 */

export const hero = {
  label: "Direct Hire",
  headline: ["The Right Talent.", "Lasting Business Impact."],
  copy: "Executive, professional, technical and bilingual recruiting tailored to your business.",
  primary: { label: "Request Talent", href: "/contact" },
  secondary: { label: "Explore Our Expertise", href: "#specializations" },
};

export const strengths = [
  {
    key: "search",
    title: "Specialized Search",
    description: "Targeted talent acquisition for critical roles and business needs.",
  },
  {
    key: "bilingual",
    title: "Bilingual Advantage",
    description: "Access to Korean–English bilingual talent for U.S. business operations.",
  },
  {
    key: "market",
    title: "U.S. Market Knowledge",
    description: "Local insight and hiring expertise to help your business grow in the U.S.",
  },
] as const;

export const specializations = {
  label: "Our Services",
  title: "Talent for Every Critical Function",
  copy: "We recruit high-performing professionals across key business areas, from leadership to technical and operational roles.",
  items: [
    { key: "executive", label: "Executive & Leadership" },
    { key: "hr", label: "HR & Administration" },
    { key: "finance", label: "Finance & Accounting" },
    { key: "it", label: "IT & Software" },
    { key: "engineering", label: "Engineering & Technical" },
    { key: "supply-chain", label: "Supply Chain & Operations" },
  ],
} as const;

export type HiringOutcome = {
  key: string;
  title: string;
  description: string;
  /** True for the model this page is about. */
  current?: boolean;
  href?: string;
  linkLabel?: string;
};

// DRAFT. TODO(owner): approve the three questions and the outcome wording.
export const hiringModel: {
  label: string;
  title: string;
  copy: string;
  steps: { question: string; outcome: HiringOutcome }[];
  fallback: { text: string; label: string; href: string };
} = {
  label: "Choosing a Hiring Model",
  title: "Which Hiring Model Fits Your Need?",
  copy: "Three questions point to the right structure. The models differ in who employs the worker and how much ITS manages.",
  steps: [
    {
      question: "Will the person join your own payroll as a long-term employee?",
      outcome: {
        key: "direct-hire",
        title: "Direct Hire",
        description:
          "ITS manages the search, screening and hiring coordination. Your company employs the candidate you select.",
        current: true,
      },
    },
    {
      question: "Do you need flexible workforce capacity, with the workers employed by ITS?",
      outcome: {
        key: "staffing",
        title: "Staffing",
        description:
          "ITS is the employer of record and handles applicable employment administration. Day-to-day work direction depends on the assignment and contract.",
        href: "/services/workforce-solutions",
        linkLabel: "Staffing & Workforce",
      },
    },
    {
      question: "Do you want ITS to run the function itself?",
      outcome: {
        key: "managed-operations",
        title: "Managed Operations",
        description:
          "ITS manages the broader function, which may include workforce, supervisors, processes, systems and KPIs, depending on the agreed scope.",
        href: "/services/operations",
        linkLabel: "Managed Operations",
      },
    },
  ],
  fallback: {
    text: "Not sure which applies? Tell us about the role and we will help you decide.",
    label: "Talk to Our Team",
    href: "/contact",
  },
};

export type ComparisonCell = { who: string; note: string };

// Title and intro are the approved copy. The rows are a DRAFT.
// TODO(owner): approve each row, especially onboarding and benefits.
export const comparison = {
  label: "Direct Hire vs. Staffing",
  title: "Direct Hire or Staffing?",
  copy: "Two hiring solutions with different employment structures. Here’s the difference.",
  directHire: { title: "Direct Hire", summary: "Your company employs the hire." },
  staffing: {
    title: "Staffing",
    summary: "ITS is the employer of record.",
    href: "/services/workforce-solutions",
    linkLabel: "Staffing & Workforce",
  },
  rows: [
    {
      key: "recruits",
      label: "Recruits and screens",
      directHire: { who: "ITS", note: "Sourcing, screening and candidate presentation." },
      staffing: { who: "ITS", note: "Recruiting for the assignment." },
    },
    {
      key: "hires",
      label: "Hires and employs",
      directHire: { who: "Your company", note: "The selected candidate joins your payroll." },
      staffing: { who: "ITS", note: "ITS is the employer of record." },
    },
    {
      key: "onboards",
      label: "Onboards",
      directHire: { who: "Your company", note: "ITS coordinates up to the start date." },
      staffing: { who: "ITS", note: "Employment onboarding and paperwork." },
    },
    {
      key: "pays",
      label: "Pays",
      directHire: { who: "Your company", note: "Payroll and benefits sit with you." },
      staffing: { who: "ITS", note: "Payroll and applicable employment administration." },
    },
    {
      key: "manages",
      label: "Directs daily work",
      directHire: { who: "Your company", note: "Your employee, your management." },
      staffing: { who: "Varies", note: "Depends on the assignment and contract." },
    },
  ] satisfies { key: string; label: string; directHire: ComparisonCell; staffing: ComparisonCell }[],
  note: {
    text: "Want ITS to run the function itself, including supervisors, processes and KPIs within an agreed scope?",
    label: "Managed Operations",
    href: "/services/operations",
  },
};

// DRAFT. TODO(owner): approve the service list and each description.
export const supportServices = {
  label: "Our Recruiting Support Services",
  title: "Support at Every Step of the Search",
  statement: {
    title: "One recruiting team, from search brief to start date.",
    text: "ITS manages recruiting, sourcing, screening, candidate presentation and hiring coordination. Your company employs the candidate you select.",
  },
  items: [
    {
      key: "planning",
      title: "Role & Search Planning",
      text: "Define the role, requirements and candidate profile with your hiring team.",
    },
    {
      key: "sourcing",
      title: "Candidate Sourcing",
      text: "Targeted outreach through our specialized network.",
    },
    {
      key: "screening",
      title: "Screening & Evaluation",
      text: "Review of experience, skills and fit before you meet a candidate.",
    },
    {
      key: "presentation",
      title: "Candidate Presentation",
      text: "A shortlist with clear profiles for your review.",
    },
  ],
  wide: [
    {
      key: "bilingual",
      title: "Korean–English Bilingual Recruiting",
      text: "Access to bilingual professionals for U.S. business operations.",
    },
    {
      key: "coordination",
      title: "Interview & Hiring Coordination",
      text: "Scheduling, communication and support through offer and start date.",
    },
  ],
} as const;

// The four phases, the title and the intro are the approved four-step copy.
// Splitting each phase into two stages is a DRAFT.
// TODO(owner): approve the eight stage names and descriptions, and confirm
// that follow-up support after placement is offered.
export const process = {
  label: "Direct Hire Process",
  title: "A Structured, Employer-Focused Approach",
  copy: "A clear and efficient process to identify, evaluate, and secure the right talent for your team.",
  phases: [
    {
      title: "Discover",
      stages: [
        { title: "Discovery", text: "Understand your business, hiring needs and the role." },
        { title: "Role Definition", text: "Agree on requirements and the right talent profile." },
      ],
    },
    {
      title: "Source & Screen",
      stages: [
        { title: "Sourcing", text: "Identify candidates through our specialized network." },
        { title: "Screening", text: "Evaluate experience, skills and fit." },
      ],
    },
    {
      title: "Shortlist & Interview",
      stages: [
        { title: "Shortlist", text: "Present top candidates for your review." },
        { title: "Interviews", text: "Coordinate interviews and support your selection." },
      ],
    },
    {
      title: "Hire & Support",
      stages: [
        { title: "Offer & Hire", text: "Coordinate the offer and hiring steps. You employ the candidate directly." },
        { title: "Follow-Up", text: "Follow-up support after placement." },
      ],
    },
  ],
};

// The four words are the owner's. Each sentence is a DRAFT interpretation.
// TODO(owner): replace with the approved meaning of each word.
export const whyIts = {
  label: "Why ITS",
  title: "Why Clients Work With ITS",
  copy: "Four habits shape every search we run.",
  principles: [
    {
      word: "Recruit",
      text: "We search actively for each role and approach the people who fit it, rather than waiting for applicants.",
    },
    {
      word: "Record",
      text: "We document each requirement, conversation and candidate, so your search stays organized and transparent.",
    },
    {
      word: "Remember",
      text: "We remember your business, your preferences and the people we have met, so each new search starts further ahead.",
    },
    {
      word: "Recommend",
      text: "We recommend the candidates we believe fit the role, and we explain why.",
    },
  ],
  // Approved copy from the earlier Why ITS section.
  // TODO(owner): confirm each claim before publishing.
  supporting: [
    {
      key: "bilingual",
      title: "Korean–English Bilingual Expertise",
      description: "Deep experience in sourcing and placing bilingual professionals.",
    },
    {
      key: "industries",
      title: "Cross-Industry Experience",
      description: "Recruiting expertise across diverse industries and functional areas.",
    },
    {
      key: "personal",
      title: "Personalized Recruitment Support",
      description: "A consultative, hands-on approach tailored to your business goals.",
    },
  ],
} as const;

export const cta = {
  title: "Let’s Find the Right Talent for Your Team.",
  copy: "Talk to our team about your hiring needs and how ITS can help.",
  primary: { label: "Request Talent", href: "/contact" },
  secondary: { label: "View All Solutions", href: "/services" },
};

/* ------------------------------------------------------------------------
 * V3 (Nov 2026): light, consulting-style layout. Content follows the owner's
 * Oct 2026 proposal deck (hiring models, six-step selection process,
 * workforce tiers, core competencies). Client-specific role names from the
 * deck were generalized. TODO(owner): review each block before publishing.
 * ---------------------------------------------------------------------- */

export const heroV3 = {
  label: "Direct Hire",
  headline: ["The Right Talent.", "Lasting Business Impact."],
  copy: "Executive, professional, technical and Korean–English bilingual recruiting. ITS runs the search and verifies fit before you meet anyone. Your company employs the hire.",
  primary: { label: "Request Talent", href: "/contact" },
  secondary: { label: "How We Recruit", href: "#process" },
};

// From the deck's "core competencies" slide, generalized.
export const strengthsV3 = [
  {
    key: "engineering",
    title: "Engineering & Field Expertise",
    description:
      "We understand technical roles and real work processes, so screening reflects the job, not just the resume.",
  },
  {
    key: "verified",
    title: "Qualified Talent Acquisition",
    description:
      "Skills, experience and practical ability are checked before a candidate reaches your team.",
  },
  {
    key: "bilingual",
    title: "Bilingual & U.S. Market Knowledge",
    description:
      "Korean–English bilingual talent and local hiring insight for U.S. operations.",
  },
] as const;

// From the deck's workforce-tier pyramid, generalized beyond one client.
export const placement = {
  label: "Who We Place",
  title: "From Leadership to Specialized Technical Talent",
  copy: "Three tiers of hiring need, each matched to the right engagement model.",
  tiers: [
    {
      key: "core",
      tag: "Core",
      title: "Executive & Management",
      roles: ["C-level executives", "HR management", "Corporate administration"],
      model: "Direct Hire",
      featured: true,
    },
    {
      key: "specialized",
      tag: "Specialized",
      title: "Professional & Engineering",
      roles: ["Application & field service engineers", "Process & quality engineers", "Finance, IT and supply chain professionals"],
      model: "Direct Hire / Staffing",
    },
    {
      key: "scalable",
      tag: "Scalable Workforce",
      title: "Technical Workforce",
      roles: ["Installation engineers", "Technicians", "Technical specialists"],
      model: "Staffing / Managed Operations",
    },
  ],
  specializationsTitle: "Functions we recruit for",
} as const;

// From the deck's six-step talent selection process.
export const processV3 = {
  label: "How We Recruit",
  title: "A Six-Step Selection Process",
  copy: "Technical ability, practical experience and working conditions are reviewed before a candidate is recommended.",
  steps: [
    { title: "Job Order & Agreement", sub: "Scope", points: ["Role requirements in detail", "Working conditions and timeline", "Service agreement"] },
    { title: "Targeted Sourcing", sub: "Search", points: ["Industry and technical networks", "Professional hiring platforms", "Engineer communities and referrals"] },
    { title: "Technical Screening", sub: "Verify", points: ["Experience and credentials", "Technical background review", "Job-fit assessment"], highlight: true },
    { title: "Compensation & Availability", sub: "Confirm", points: ["Expected pay and conditions", "Work authorization", "Start date and relocation"] },
    { title: "Candidate Submission", sub: "Shortlist", points: ["Strengths and review points", "Interview scheduling", "Feedback collected and shared"] },
    { title: "Offer & Onboarding", sub: "Hire", points: ["Offer and onboarding support", "Start date confirmed", "Post-hire follow-up"] },
  ],
  statement: ["Not more resumes.", "The right candidates."],
} as const;

// From the deck's hiring-model comparison. Rows are the deck's rows, reworded for the web.
export const modelsV3 = {
  label: "Hiring Models",
  title: "Direct Hire, Staffing, or Managed Operations?",
  copy: "The models differ in who employs the worker and how much ITS manages. Start from the question in the first row.",
  rowLabels: ["Best when", "How it works", "Typical roles", "ITS covers"],
  columns: [
    {
      key: "direct-hire",
      title: "Direct Hire",
      subtitle: "Your company employs",
      current: true,
      cells: [
        "You need long-term core staff.",
        "ITS finds and verifies candidates. Your company employs the person you select.",
        "C-level executives, senior management, senior engineers.",
        "Sourcing, screening and recommendation; interview, offer and onboarding support.",
      ],
    },
    {
      key: "staffing",
      title: "Staffing",
      subtitle: "ITS employs and places",
      href: "/services/workforce-solutions",
      cells: [
        "You need flexible headcount.",
        "ITS employs the worker, places them with you and handles applicable employment administration.",
        "Engineers, technicians, QA/QC, operations support.",
        "Recruiting and placement; payroll, benefits and tax; attendance, performance and backfill.",
      ],
    },
    {
      key: "operations",
      title: "Managed Operations",
      subtitle: "ITS runs the function",
      href: "/services/operations",
      cells: [
        "A function needs integrated operation.",
        "ITS manages workforce, process, quality and performance within an agreed scope.",
        "Technical operations, repair, QA/QC, logistics and warehouse.",
        "Managers, workforce and systems; payroll and benefits; quality, productivity, cost and regular reporting.",
      ],
    },
  ],
} as const;

export const ctaV3 = {
  label: "Let’s Talk",
  title: "Let’s Find the Right Talent for Your Team.",
  copy: "Tell us about the role, the timeline and the kind of person you need. We will come back with how we would run the search.",
  primary: { label: "Request Talent", href: "/contact" },
  secondary: { label: "View All Solutions", href: "/services" },
  points: ["Engineering-informed screening", "Korean–English bilingual talent", "Structured, transparent process"],
};
