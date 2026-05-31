"use client";

import {
  BarChart3,
  Boxes,
  Package,
  Truck,
  Users,
  Warehouse,
} from "lucide-react";

import ServiceIntroSection from "./ServiceIntroSection";

export default function PackagingOperationalSupportIntro() {
  return (
    <ServiceIntroSection
      eyebrow="Packaging & Operational Support"
      heading="Packaging, fulfillment, and operational support services designed for scalable execution."
      description="ITS supports packaging programs, inventory handling, operational coordination, fulfillment preparation, and outbound support activities that help clients maintain efficiency and consistency."
      capabilityPills={[
        "Packaging Operations",
        "Inventory Coordination",
        "Fulfillment Support",
        "Workforce Support",
      ]}
      keyAdvantages={[
        { title: "Packaging Operations", icon: Package },
        { title: "Inventory Coordination", icon: Warehouse },
        { title: "Fulfillment Support", icon: Truck },
        { title: "Operational Execution", icon: Boxes },
        { title: "Reporting & Visibility", icon: BarChart3 },
        { title: "Scalable Workforce Support", icon: Users },
      ]}
    />
  );
}
