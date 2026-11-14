import type { Metadata } from "next";
import Header from "@/components/Header";

import MobileRefurbishmentHero from "@/components/services/detail/MobileRefurbishmentHero";

export const metadata: Metadata = {
  title: "Mobile Device Refurbishment Services",
  description:
    "350,000 phones, tablets and watches refurbished annually to carrier grading standards at INTAC Solution's Texas refurbishment and packaging centers.",
  alternates: { canonical: "/services/mobile-refurbishment" },
};

export default function MobileRefurbishmentPage() {
  return (
    <main className="page-shell">
      <Header />

      <MobileRefurbishmentHero />
    </main>
  );
}