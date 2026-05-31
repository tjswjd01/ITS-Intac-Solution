import ServiceDetailSection from "./ServiceDetailSection";

export default function MailInServiceDetail() {
  return (
    <ServiceDetailSection
      eyebrow="Service Scope"
      heading="End-to-end support for mail-in device programs."
      description="From receiving and intake management to refurbishment coordination and return shipment preparation, ITS helps simplify mail-in operations at scale."
      bullets={[
        "Device receiving and intake processing",
        "Tracking and workflow visibility",
        "Refurbishment coordination",
        "Return shipment preparation",
        "Centralized operational management",
      ]}
      imageAlt="Mail-in service device intake and processing"
      background="white"
      withBottomDivider
    />
  );
}
