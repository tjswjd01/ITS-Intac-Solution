import ServiceDetailSection from "./ServiceDetailSection";

export default function PackagingOperationalSupportDetail() {
  return (
    <ServiceDetailSection
      eyebrow="Service Scope"
      heading="Supporting the final stages of device processing and fulfillment."
      description="From packaging preparation and inventory coordination to fulfillment support and operational execution, ITS provides scalable support services that help streamline daily operations."
      bullets={[
        "Packaging and shipment preparation",
        "Inventory coordination and handling",
        "Fulfillment and outbound support",
        "Operational execution support",
        "Reporting and workflow visibility",
        "Workforce scalability support",
      ]}
      imageAlt="Packaging and operational support services"
      background="white"
    />
  );
}
