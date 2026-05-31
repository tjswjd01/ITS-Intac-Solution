import Header from "@/components/Header";
import MailInServiceDetail from "@/components/services/operations/MailInServiceDetail";
import MailInServiceIntro from "@/components/services/operations/MailInServiceIntro";
import MobileRefurbishmentIntro from "@/components/services/operations/MobileRefurbishmentIntro";
import NEMOPlatform from "@/components/services/operations/NEMOPlatform";
import PackagingOperationalSupportDetail from "@/components/services/operations/PackagingOperationalSupportDetail";
import PackagingOperationalSupportIntro from "@/components/services/operations/PackagingOperationalSupportIntro";
import QualityAssuranceDetail from "@/components/services/operations/QualityAssuranceDetail";
import QualityAssuranceIntro from "@/components/services/operations/QualityAssuranceIntro";
import RelatedServices from "@/components/services/RelatedServices";
import RBKPI from "@/components/services/operations/RBKPI";
import RBProcess from "@/components/services/operations/RBProcess";
import RBTechnology from "@/components/services/operations/RBTechnology";
import WorkforceManagement from "@/components/services/operations/WorkforceManagement";

import OperationsHero from "./OperationsHero";

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
      <QualityAssuranceDetail />
      <MailInServiceIntro />
      <MailInServiceDetail />
      <PackagingOperationalSupportIntro />
      <PackagingOperationalSupportDetail />
      <RelatedServices />
    </main>
  );
}
