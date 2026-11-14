import type { Metadata } from "next";
import Header from "../../components/Header";
import ContactHero from "../../components/contact/ContactHero";
import ContactInfoCards from "../../components/contact/ContactInfoCards";
import ContactSection from "../../components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact Our Team",
  description:
    "Talk to INTAC Solution about device operations, workforce programs or U.S. market entry support. Headquarters in Plano, Texas, with facilities nationwide.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="page-shell">
      <Header variant="dark" />
      <ContactHero />
      <ContactInfoCards />
      <ContactSection />
    </main>
  );
}
