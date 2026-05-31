"use client";

import {
  Globe,
  MapPin,
  PackageCheck,
  RotateCcw,
  Truck,
  Workflow,
} from "lucide-react";

import ServiceIntroSection from "./ServiceIntroSection";

export default function MailInServiceIntro() {
  return (
    <ServiceIntroSection
      eyebrow="Mail-In Service"
      heading="Nationwide mail-in programs designed for efficient device intake and processing."
      description="ITS supports centralized mail-in operations with device tracking, intake management, refurbishment coordination, and return fulfillment services."
      capabilityPills={[
        "Device Intake",
        "Tracking Visibility",
        "Repair Coordination",
        "Return Fulfillment",
      ]}
      keyAdvantages={[
        { title: "Nationwide Coverage", icon: Globe },
        { title: "Centralized Processing", icon: MapPin },
        { title: "Device Tracking", icon: Workflow },
        { title: "Repair Coordination", icon: RotateCcw },
        { title: "Status Visibility", icon: PackageCheck },
        { title: "Return Fulfillment", icon: Truck },
      ]}
      background="gray"
    />
  );
}
