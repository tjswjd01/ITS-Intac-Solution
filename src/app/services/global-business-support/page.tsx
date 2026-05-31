import type { Metadata } from "next";

import Header from "@/components/Header";
import GlobalBusinessSupportHero from "@/components/services/global-business-support/GlobalBusinessSupportHero";

export const metadata: Metadata = {
  title: "Global Business Support | ITS Intac Solution",
  description:
    "Helping businesses expand between Korea and the United States through sourcing, compliance, logistics, and operational execution.",
};

export default function GlobalBusinessSupportPage() {
  return (
    <main className="page-shell bg-white">
      <Header />

      <GlobalBusinessSupportHero />
    </main>
  );
}
