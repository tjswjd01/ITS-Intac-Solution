/**
 * Contact page wording and contact details. Edit text here; the layout lives
 * in `src/components/contact`.
 *
 * Every detail below is real ITS data. Do not add an address, phone number,
 * link or reply-time promise that the company has not confirmed.
 *
 * The inquiry types and the mailbox each one is sent to are in
 * `src/lib/contact/submission.ts`.
 */
import { CONTACT_MAILBOXES } from "@/lib/contact/submission";

export const contactHero = {
  label: "Contact Us",
  headline: "We'd love to talk to you",
  copy: "Have a question about our services or an opportunity with ITS? Our team is here to help.",
};

export type ContactChannel = {
  id: "service" | "recruiting" | "phone" | "office";
  label: string;
  lines: string[];
  href: string;
  external?: boolean;
};

export const contactChannels: ContactChannel[] = [
  {
    id: "service",
    label: "Service Inquiries",
    lines: [CONTACT_MAILBOXES.business],
    href: `mailto:${CONTACT_MAILBOXES.business}`,
  },
  {
    id: "recruiting",
    label: "Recruiting / Careers",
    lines: [CONTACT_MAILBOXES.recruiting],
    href: `mailto:${CONTACT_MAILBOXES.recruiting}`,
  },
  {
    id: "phone",
    label: "Phone",
    lines: ["+1 (469) 922-5472"],
    href: "tel:+14699225472",
  },
  {
    id: "office",
    label: "Office",
    lines: ["5550 Granite Parkway, Suite 295", "Plano, TX 75024"],
    href: "https://maps.google.com/?q=5550+Granite+Parkway+Suite+295+Plano+TX+75024",
    external: true,
  },
];

export const contactForm = {
  title: "Send Us a Message",
  copy: "Complete the form below and we'll get back to you soon.",
  submit: "Submit Inquiry",
  privacy: "Your information is secure and will only be used to respond to your inquiry.",
};

export const contactSteps = [
  {
    id: "send",
    title: "Send Inquiry",
    text: "Tell us your needs or opportunity.",
  },
  {
    id: "route",
    title: "Review & Route",
    text: "We connect your request to the right team.",
  },
  {
    id: "respond",
    title: "Get a Response",
    text: "Our team will reply by email.",
  },
] as const;

export const contactLinkedIn = {
  title: "Follow Us on LinkedIn",
  copy: "Stay up to date with company news, insights, and career opportunities at ITS.",
  label: "View Our LinkedIn",
  url: "https://www.linkedin.com/company/its-intacsolution",
};
