"use client";

import {
  BarChart3,
  ClipboardCheck,
  Eye,
  FileSearch,
  Radio,
  ShieldCheck,
} from "lucide-react";

import ServiceIntroSection from "./ServiceIntroSection";

export default function QualityAssuranceIntro() {
  return (
    <ServiceIntroSection
      eyebrow="Quality Assurance"
      heading="Inspection and validation services built for consistent device quality."
      description="ITS provides structured quality assurance services across device inspection, functional testing, RF validation, cosmetic grading, sampling checks, and final quality control."
      capabilityPills={[
        "Functional Testing",
        "RF Validation",
        "Cosmetic Inspection",
        "Final QC",
      ]}
      keyAdvantages={[
        { title: "Multi-Point Inspection", icon: FileSearch },
        { title: "Functional Testing", icon: ClipboardCheck },
        { title: "RF Validation", icon: Radio },
        { title: "Sampling QA", icon: Eye },
        { title: "Final Quality Control", icon: ShieldCheck },
        { title: "Reporting & Traceability", icon: BarChart3 },
      ]}
      withTopDivider
    />
  );
}
