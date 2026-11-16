import type { Metadata } from "next";

import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfoStrip from "@/components/contact/ContactInfoStrip";
import ContactProcess from "@/components/contact/ContactProcess";
import Header from "@/components/Header";
import Reveal from "@/components/site/Reveal";
import { isDeliveryConfigured } from "@/lib/contact/delivery";

export const metadata: Metadata = {
  title: "Contact Our Team",
  description:
    "Talk to INTAC Solution about device operations, workforce programs or U.S. market entry support. Headquarters in Plano, Texas, with facilities nationwide.",
  alternates: { canonical: "/contact" },
};

// The footer comes from the root layout, so it is not repeated here.
export default function ContactPage() {
  return (
    <main className="page-shell">
      <Header variant="dark" />
      <ContactHero />
      <ContactInfoStrip />

      <section className="bg-its-offwhite pb-16 pt-5 md:pb-24">
        <div className="layout-container grid gap-5 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
          <Reveal className="h-full">
            <ContactForm deliveryReady={isDeliveryConfigured()} />
          </Reveal>
          <Reveal className="h-full" delay={0.08}>
            <ContactProcess />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
