import type { Metadata } from "next";

import DirectHireCtaLight from "@/components/direct-hire/light/DirectHireCtaLight";
import DirectHireHeroLight from "@/components/direct-hire/light/DirectHireHeroLight";
import HiringModels from "@/components/direct-hire/light/HiringModels";
import ProcessTimeline from "@/components/direct-hire/light/ProcessTimeline";
import WhoWePlace from "@/components/direct-hire/light/WhoWePlace";
import WhyItsLight from "@/components/direct-hire/light/WhyItsLight";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Direct Hire Recruiting",
  description:
    "Executive, professional, technical and Korean–English bilingual recruiting tailored to your business. ITS runs the search; your company employs the hire.",
  alternates: { canonical: "/services/direct-hire" },
};

// V3 (Nov 2026): light, consulting-style layout. Wording lives in
// `src/content/directHire.ts` (the *V3 blocks). Surfaces alternate
// off-white / white so no two neighbors share a background. The earlier dark
// components remain in `src/components/direct-hire/` for reference.
export default function DirectHirePage() {
  return (
    <main className="page-shell bg-its-offwhite">
      <Header />
      <DirectHireHeroLight />
      <WhoWePlace />
      <ProcessTimeline />
      <HiringModels />
      <WhyItsLight />
      <DirectHireCtaLight />
    </main>
  );
}
