/**
 * Careers page copy and data.
 *
 * TODO(owner): the open positions below are carried over unchanged from the
 * previous Careers page (posted dates there were May 2025). Replace them with
 * current openings before publishing.
 */

export const careersHero = {
  label: "Careers at ITS",
  headline: ["Build Your Career in", "Operations, Technology"],
  headlineLast: "and",
  headlineAccent: "Global Business.",
  copy: "Join ITS and be part of a team that keeps people, operations and technology moving for companies across the U.S.",
  primary: { label: "Explore Open Positions", href: "#open-positions" },
  secondary: { label: "Submit Your Resume", href: "/contact" },
  image: "/images/who-team.jpeg",
  imageAlt: "ITS team members working on an operations floor",
};

export type Position = {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
};

export const positions: Position[] = [
  { id: 1, title: "QA Inspector", department: "Quality Assurance", location: "Dallas, TX", type: "Full-time" },
  { id: 2, title: "Warehouse Associate", department: "Operations", location: "Carrollton, TX", type: "Full-time" },
  { id: 3, title: "Administrative Assistant", department: "Administration", location: "Plano, TX", type: "Full-time" },
  { id: 4, title: "ATM Technician", department: "Technical Support", location: "Texas (Multiple)", type: "Full-time" },
  { id: 5, title: "Field Service Specialist", department: "Field Operations", location: "Texas (Multiple)", type: "Full-time" },
];

export const applyHref = "/contact";

export const resumeBanner = {
  label: "Not seeing the right role?",
  title: "Submit Your Resume",
  copy: "Tell us about your experience and career interests. We’ll reach out when a matching opportunity becomes available.",
  cta: { label: "Submit Resume", href: "/contact" },
};

// Hidden until real, approved stories exist. Add items to show the section.
export const careerStories: { quote: string; role: string; note: string }[] = [];

export const careersClosing = {
  title: "Your Next Opportunity Starts Here.",
  copy: "Apply today or speak with our team about career opportunities at ITS.",
  primary: { label: "View Open Positions", href: "#open-positions" },
  secondary: { label: "Contact Careers", href: "/contact" },
};
