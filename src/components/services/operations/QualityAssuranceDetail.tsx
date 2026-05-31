import ServiceDetailSection from "./ServiceDetailSection";

export default function QualityAssuranceDetail() {
  return (
    <ServiceDetailSection
      eyebrow="QA Service Scope"
      heading="A structured quality control program from inspection to final validation."
      description="From visual inspection and functional testing to RF validation and sampling QA, ITS supports quality assurance programs that help clients maintain consistent standards across device processing and outbound operations."
      bullets={[
        "Device inspection and cosmetic grading",
        "Functional, RF, and environmental validation",
        "Sampling QA and final quality control",
        "Reporting and quality visibility",
      ]}
      imageAlt="Quality assurance inspection and validation"
      background="white"
    />
  );
}
