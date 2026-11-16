import type { Metadata } from "next";
import Header from "@/components/Header";
import MobileRefurbishmentIntro from "@/components/services/operations/MobileRefurbishmentIntro";
import NEMOPlatform from "@/components/services/operations/NEMOPlatform";
import PackagingOperationalSupportIntro from "@/components/services/operations/PackagingOperationalSupportIntro";
import QualityAssuranceIntro from "@/components/services/operations/QualityAssuranceIntro";
import RelatedServices from "@/components/services/RelatedServices";
import RBKPI from "@/components/services/operations/RBKPI";
import RBProcess from "@/components/services/operations/RBProcess";
import RBTechnology from "@/components/services/operations/RBTechnology";
import WorkforceManagement from "@/components/services/operations/WorkforceManagement";

import OperationsHero from "./OperationsHero";

export const metadata: Metadata = {
  title: "Device Operations, QA & Packaging",
  description:
    "ITS runs device refurbishment, quality assurance, and packaging and operational support programs at enterprise scale.",
  alternates: { canonical: "/services/operations" },
};

export default function OperationsPage() {
  return (
    <main className="page-shell">
      <Header variant="dark" />

      <OperationsHero />
      <MobileRefurbishmentIntro />
      <RBProcess />
      <RBTechnology />
      <WorkforceManagement />
      <NEMOPlatform />
      <RBKPI />

      <QualityAssuranceIntro />
      <PackagingOperationalSupportIntro />
      <RelatedServices />
    </main>
  );
}
