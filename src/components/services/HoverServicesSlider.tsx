"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";

type ServiceDetail = {
  id: string;
  title: string;
  summary: string;
  overview: string;
  href: string;
  image?: string;
  keyCapabilities: string[];
  benefits: string[];
  supportedIndustries: string[];
};

type ServiceCategory = {
  number: string;
  title: string;
  services: ServiceDetail[];
};

const categories: ServiceCategory[] = [
  {
    number: "01",
    title: "Operations",
    services: [
      {
        id: "mobile-refurbishment",
        title: "Mobile Refurbishment",
        summary:
          "Repair, testing, grading, and restoration of mobile devices.",
        overview:
          "ITS provides comprehensive mobile device refurbishment services that cover the entire device lifecycle. From initial intake and diagnostics through repair, testing, and final quality validation, our structured processes ensure consistent quality and operational efficiency.",
        href: "/services/operations",
        image: "/images/services/mobile-refurbishment.jpg",
        keyCapabilities: [
          "Device diagnostics & triage",
          "Hardware repair & replacement",
          "Functional testing & verification",
          "Cosmetic grading & assessment",
          "Data wiping & security protocols",
          "Final quality audit & approval",
        ],
        benefits: [
          "Extend device lifecycle",
          "Reduce replacement costs",
          "Ensure data security",
          "Improve customer satisfaction",
          "Support sustainability goals",
          "Maintain consistent quality standards",
        ],
        supportedIndustries: [
          "Wireless Carriers",
          "Consumer Electronics",
          "Enterprise & Corporate",
          "Insurance & Warranty Providers",
          "Government & Education",
        ],
      },
      {
        id: "quality-assurance",
        title: "Quality Assurance",
        summary:
          "Inspection and verification workflows for consistent quality.",
        overview:
          "ITS supports quality assurance programs through defined inspection stages, verification checkpoints, and documentation standards. Our QA workflows help teams maintain consistency across high-volume operational environments.",
        href: "/services/operations",
        image: "/images/services/quality-inspection.jpg",
        keyCapabilities: [
          "Incoming inspection protocols",
          "Functional verification testing",
          "Quality grading standards",
          "Final QA checkpoint review",
          "Defect tracking & reporting",
          "Process consistency audits",
        ],
        benefits: [
          "Reduce operational defects",
          "Improve process reliability",
          "Support audit readiness",
          "Maintain brand quality standards",
          "Increase throughput confidence",
          "Enable scalable QA programs",
        ],
        supportedIndustries: [
          "Wireless Carriers",
          "Consumer Electronics",
          "Logistics & Distribution",
          "Enterprise Device Programs",
          "Refurbishment Operations",
        ],
      },
      {
        id: "mail-in-service",
        title: "Mail-in Service",
        summary:
          "End-to-end customer repair support from intake to return.",
        overview:
          "ITS manages mail-in repair programs with structured intake, shipping coordination, customer communication, refurbishment execution, and return delivery. The workflow is designed for traceability and consistent customer experience.",
        href: "/services/operations",
        image: "/images/services/mail-in-service.jpg",
        keyCapabilities: [
          "Intake & registration",
          "Shipping coordination",
          "Customer communication support",
          "Repair tracking & status updates",
          "Refurbishment management",
          "Return delivery coordination",
        ],
        benefits: [
          "Streamline customer repair flow",
          "Improve turnaround visibility",
          "Reduce handling errors",
          "Support scalable repair volume",
          "Enhance customer communication",
          "Maintain end-to-end accountability",
        ],
        supportedIndustries: [
          "Wireless Carriers",
          "Consumer Electronics",
          "Insurance & Warranty Providers",
          "Enterprise Support Programs",
          "Retail Service Operations",
        ],
      },
      {
        id: "packaging-operational-support",
        title: "Packaging & Operational Support",
        summary:
          "Secure packaging, kitting, and operational execution support.",
        overview:
          "ITS provides packaging and operational support services that complement refurbishment and distribution workflows. From kitting and labeling to inventory coordination, our teams help maintain organized, execution-ready operational environments.",
        href: "/services/operations",
        image: "/images/services/packaging-logistics.jpg",
        keyCapabilities: [
          "Secure packaging execution",
          "Kitting & labeling support",
          "Inventory coordination",
          "Operational workflow support",
          "Handoff & staging management",
          "Process documentation support",
        ],
        benefits: [
          "Improve fulfillment accuracy",
          "Reduce packaging errors",
          "Support high-volume operations",
          "Maintain organized workflows",
          "Enable faster operational handoff",
          "Strengthen downstream readiness",
        ],
        supportedIndustries: [
          "Wireless Carriers",
          "Consumer Electronics",
          "Warehouse & Distribution",
          "Enterprise Logistics",
          "Refurbishment Operations",
        ],
      },
    ],
  },
  {
    number: "02",
    title: "Workforce Solutions",
    services: [
      {
        id: "warehouse-workforce",
        title: "Warehouse Workforce",
        summary:
          "Warehouse operations staffing, material handling, inventory support, and logistics workforce programs.",
        overview:
          "ITS provides warehouse workforce programs covering operational staffing, material handling, inventory support, and logistics coordination. Teams are structured to support daily warehouse execution with scalable coverage.",
        href: "/services/workforce-solutions",
        image: "/images/services/staffing.jpg",
        keyCapabilities: [
          "Warehouse operations staffing",
          "Material handling support",
          "Inventory support programs",
          "Logistics workforce coordination",
          "Shift & schedule alignment",
          "Operational team deployment",
        ],
        benefits: [
          "Support scalable warehouse operations",
          "Improve daily execution coverage",
          "Reduce staffing gaps",
          "Align teams to operational demand",
          "Strengthen logistics readiness",
          "Enable flexible workforce scaling",
        ],
        supportedIndustries: [
          "Warehouse Operations",
          "Logistics & Distribution",
          "Fulfillment Centers",
          "Enterprise Logistics",
          "Manufacturing Support",
        ],
      },
      {
        id: "rb-qa-workforce",
        title: "RB & QA Workforce",
        summary:
          "Refurbishment, testing, inspection, and quality assurance workforce support for operational environments.",
        overview:
          "ITS supports refurbishment and quality assurance environments with workforce programs focused on testing, inspection, grading, and QA execution. Teams are aligned to structured operational workflows and quality standards.",
        href: "/services/workforce-solutions",
        keyCapabilities: [
          "Refurbishment workforce support",
          "Testing & inspection staffing",
          "QA program workforce coverage",
          "Grading & verification support",
          "Process-aligned team deployment",
          "Operational quality support",
        ],
        benefits: [
          "Support high-volume refurbishment programs",
          "Maintain QA consistency",
          "Improve inspection throughput",
          "Reduce quality execution gaps",
          "Align teams to process standards",
          "Enable scalable RB & QA operations",
        ],
        supportedIndustries: [
          "Mobile Refurbishment",
          "Consumer Electronics",
          "Quality Assurance Programs",
          "Wireless Carriers",
          "Enterprise Device Operations",
        ],
      },
      {
        id: "workforce-coordination",
        title: "Workforce Coordination",
        summary:
          "Recruitment, onboarding, scheduling, attendance tracking, and workforce management support.",
        overview:
          "ITS provides workforce coordination services that support recruitment, onboarding, scheduling, attendance tracking, and ongoing workforce management. Programs are designed to keep operational teams aligned with facility and program requirements.",
        href: "/services/workforce-solutions",
        keyCapabilities: [
          "Recruitment coordination",
          "Onboarding workflow support",
          "Scheduling & attendance tracking",
          "Workforce management support",
          "Team assignment coordination",
          "Operational role alignment",
        ],
        benefits: [
          "Accelerate team readiness",
          "Improve hiring alignment",
          "Reduce onboarding friction",
          "Maintain operational coverage",
          "Support program continuity",
          "Enable structured workforce growth",
        ],
        supportedIndustries: [
          "Warehouse & Fulfillment",
          "Refurbishment Operations",
          "QA & Inspection Programs",
          "Corporate Operations",
          "Field Service Operations",
        ],
      },
    ],
  },
  {
    number: "03",
    title: "Automation Solutions",
    services: [
      {
        id: "customized-automation-systems",
        title: "Customized Automation Systems",
        summary:
          "Custom-designed automation equipment and workflow solutions tailored to client operational requirements.",
        overview:
          "ITS supports customized automation systems designed around client operational requirements. Solutions span equipment planning, workflow integration, and execution support aligned to facility and program needs.",
        href: "/services/automation-solutions",
        image: "/images/services/automation.jpg",
        keyCapabilities: [
          "Custom automation equipment planning",
          "Workflow solution design",
          "Operational requirements alignment",
          "System integration support",
          "Implementation coordination",
          "Execution-ready automation setup",
        ],
        benefits: [
          "Match automation to operational needs",
          "Improve process fit and efficiency",
          "Support tailored workflow execution",
          "Reduce manual handling load",
          "Enable scalable automation adoption",
          "Strengthen long-term operational performance",
        ],
        supportedIndustries: [
          "Manufacturing & Assembly",
          "Warehouse Operations",
          "Electronics Refurbishment",
          "Packaging Operations",
          "Enterprise Operations",
        ],
      },
      {
        id: "robotics-smart-operations",
        title: "Robotics & Smart Operations",
        summary:
          "AMR robotics, material movement automation, and smart operational technologies designed to improve productivity and efficiency.",
        overview:
          "ITS supports robotics and smart operational technologies including AMR deployment, material movement automation, and technology-enabled workflow improvements designed to increase productivity and operational efficiency.",
        href: "/services/automation-solutions",
        keyCapabilities: [
          "AMR robotics support",
          "Material movement automation",
          "Smart operational technology integration",
          "Robotics workflow coordination",
          "Operational technology alignment",
          "Productivity improvement support",
        ],
        benefits: [
          "Improve material handling efficiency",
          "Increase operational productivity",
          "Reduce manual transport load",
          "Support smart operational scaling",
          "Strengthen technology-enabled workflows",
          "Enable modern operational environments",
        ],
        supportedIndustries: [
          "Warehouse Automation",
          "Manufacturing Support",
          "Logistics Operations",
          "Electronics Refurbishment",
          "Enterprise Facilities",
        ],
      },
      {
        id: "process-optimization",
        title: "Process Optimization",
        summary:
          "Workflow analysis, process improvement, and operational optimization programs focused on scalability, efficiency, and execution quality.",
        overview:
          "ITS delivers process optimization programs through workflow analysis, process improvement planning, and operational optimization support focused on scalability, efficiency, and execution quality.",
        href: "/services/automation-solutions",
        keyCapabilities: [
          "Workflow analysis & mapping",
          "Process improvement planning",
          "Operational optimization support",
          "Scalability assessment",
          "Efficiency improvement programs",
          "Execution quality review",
        ],
        benefits: [
          "Increase operational efficiency",
          "Improve execution quality",
          "Support scalable process design",
          "Reduce workflow friction",
          "Enable measurable improvement",
          "Strengthen long-term operational performance",
        ],
        supportedIndustries: [
          "Refurbishment Operations",
          "Warehouse & Logistics",
          "QA & Inspection Programs",
          "Manufacturing Support",
          "Enterprise Operations",
        ],
      },
    ],
  },
  {
    number: "04",
    title: "Global Business Support",
    services: [
      {
        id: "us-business-setup",
        title: "U.S. Business Setup",
        summary:
          "Entity setup, compliance support, facility planning, and operational infrastructure assistance.",
        overview:
          "ITS supports U.S. business setup through entity setup coordination, compliance support, facility planning, and operational infrastructure assistance for companies establishing operations in the United States.",
        href: "/services/global-business-support",
        keyCapabilities: [
          "Entity setup coordination",
          "Compliance & registration support",
          "Facility planning assistance",
          "Production line setup support",
          "Operational infrastructure planning",
          "Vendor & partner coordination",
        ],
        benefits: [
          "Accelerate U.S. market entry",
          "Reduce setup complexity",
          "Improve operational readiness",
          "Support compliant establishment",
          "Enable structured expansion",
          "Bridge Korean and U.S. requirements",
        ],
        supportedIndustries: [
          "Korean Manufacturing Companies",
          "Technology & Electronics",
          "Consumer Products",
          "Automotive Suppliers",
          "Cross-Border Enterprises",
        ],
      },
      {
        id: "workforce-setup-management",
        title: "Workforce Setup & Management",
        summary:
          "Recruitment, onboarding, workforce planning, and ongoing workforce management support.",
        overview:
          "ITS provides workforce setup and management support including recruitment, onboarding, workforce planning, and ongoing workforce management for companies building U.S. operational teams.",
        href: "/services/global-business-support",
        keyCapabilities: [
          "U.S. workforce recruitment support",
          "Onboarding program coordination",
          "HR administration support",
          "Payroll & compliance coordination",
          "Ongoing workforce management",
          "Bilingual HR communication",
        ],
        benefits: [
          "Build operational teams faster",
          "Reduce HR setup burden",
          "Support compliant hiring practices",
          "Maintain workforce continuity",
          "Enable bilingual coordination",
          "Support long-term team stability",
        ],
        supportedIndustries: [
          "Korean Companies Entering the U.S.",
          "Manufacturing Operations",
          "Warehouse & Logistics",
          "Corporate Operations",
          "Technology Businesses",
        ],
      },
      {
        id: "ongoing-operational-support",
        title: "Ongoing Operational Support",
        summary:
          "Bilingual business support, operational coordination, and day-to-day execution assistance.",
        overview:
          "ITS delivers ongoing operational support through bilingual business assistance, operational coordination, and day-to-day execution support for companies operating in the U.S.",
        href: "/services/global-business-support",
        keyCapabilities: [
          "Bilingual operational communication",
          "Documentation & reporting support",
          "Daily operations coordination",
          "Vendor & partner liaison",
          "Cross-border issue resolution",
          "Continuous operational oversight",
        ],
        benefits: [
          "Maintain smooth daily operations",
          "Reduce communication barriers",
          "Support long-term U.S. success",
          "Improve operational responsiveness",
          "Strengthen cross-border alignment",
          "Enable sustainable business growth",
        ],
        supportedIndustries: [
          "Korean Companies in the U.S.",
          "Cross-Border Operations",
          "Manufacturing & Logistics",
          "Corporate Services",
          "Technology & Electronics",
        ],
      },
    ],
  },
];

const FALLBACK_IMAGE = "/images/placeholder-photo.svg";
const DEFAULT_SERVICE_ID = "mobile-refurbishment";
const DEFAULT_EXPANDED = "01";

function DetailColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-[14px] font-semibold text-[#0B0F14]">{title}</h4>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-[13px] leading-[1.55] text-neutral-600"
          >
            <span
              className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#0A3A86]"
              aria-hidden
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ServiceDetailPanel({ service }: { service: ServiceDetail }) {
  const [imageSrc, setImageSrc] = useState(service.image ?? FALLBACK_IMAGE);

  return (
    <div className="relative min-h-[480px] bg-[#F4F7FD] p-6 md:p-8 lg:p-10">
      <div className="max-w-[82%]">
        <h3 className="text-[clamp(24px,2.2vw,32px)] font-semibold tracking-[-0.03em] text-[#0A3A86]">
          {service.title}
        </h3>

        <p className="mt-3 text-[15px] font-medium leading-[1.6] text-[#0B0F14]">
          {service.summary}
        </p>

        <p className="mt-4 text-[14px] leading-[1.75] text-neutral-500">
          {service.overview}
        </p>

        <div className="mt-8 border-t border-black/[0.08] pt-8">
          <div className="grid gap-8 md:grid-cols-3">
            <DetailColumn
              title="Key Capabilities"
              items={service.keyCapabilities}
            />
            <DetailColumn title="Benefits" items={service.benefits} />
            <DetailColumn
              title="Supported Industries"
              items={service.supportedIndustries}
            />
          </div>
        </div>

        <Link
          href={service.href}
          className="mt-8 inline-flex text-[13px] font-medium text-[#0A3A86] transition hover:text-[#062A56]"
        >
          Learn more about {service.title} →
        </Link>
      </div>

      {service.image ? (
        <div className="pointer-events-none absolute bottom-6 right-6 hidden h-28 w-[18%] min-w-[100px] max-w-[140px] overflow-hidden rounded-xl border border-black/[0.08] md:block lg:bottom-8 lg:right-8 lg:h-32">
          <Image
            src={imageSrc}
            alt=""
            fill
            sizes="140px"
            className="object-cover opacity-90"
            onError={() => {
              if (imageSrc !== FALLBACK_IMAGE) {
                setImageSrc(FALLBACK_IMAGE);
              }
            }}
          />
        </div>
      ) : null}
    </div>
  );
}

export default function HoverServicesSlider() {
  const [expandedCategory, setExpandedCategory] = useState(DEFAULT_EXPANDED);
  const [activeServiceId, setActiveServiceId] =
    useState(DEFAULT_SERVICE_ID);

  const allServices = useMemo(
    () => categories.flatMap((category) => category.services),
    [],
  );

  const activeService =
    allServices.find((service) => service.id === activeServiceId) ??
    allServices[0];

  const handleCategoryToggle = (categoryNumber: string) => {
    setExpandedCategory((current) =>
      current === categoryNumber ? "" : categoryNumber,
    );
  };

  const handleServiceSelect = (
    serviceId: string,
    categoryNumber: string,
  ) => {
    setActiveServiceId(serviceId);
    setExpandedCategory(categoryNumber);
  };

  return (
    <section id="service-capabilities" className="section-shell bg-[#FAFAF8]">
      <div className="layout-container">
        <div className="mb-12">
          <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0A3A86]">
            <span className="h-2 w-2 rounded-full bg-[#0A3A86]" aria-hidden />
            Service Capabilities
          </p>

          <h2 className="section-title mt-5 max-w-[760px] text-[#0B0F14]">
            Operational capabilities built for structured execution.
          </h2>
        </div>

        <div className="premium-card overflow-hidden rounded-[28px] border border-black/10 bg-white">
          <div className="grid lg:grid-cols-[minmax(280px,32%)_1fr]">
            <nav className="border-b border-black/[0.08] p-4 md:p-5 lg:border-b-0 lg:border-r">
              {categories.map((category) => {
                const isExpanded = expandedCategory === category.number;

                return (
                  <div
                    key={category.number}
                    className="border-b border-black/[0.06] last:border-b-0"
                  >
                    <button
                      type="button"
                      onClick={() => handleCategoryToggle(category.number)}
                      className="flex w-full items-center gap-3 px-3 py-4 text-left transition hover:bg-[#F7F9FC]"
                      aria-expanded={isExpanded}
                    >
                      <span className="text-xs font-semibold tracking-[0.16em] text-[#0A3A86]">
                        {category.number}
                      </span>
                      <span className="flex-1 text-[15px] font-semibold text-[#0B0F14]">
                        {category.title}
                      </span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 text-[#0A3A86] transition-transform duration-300",
                          isExpanded && "rotate-180",
                        )}
                        aria-hidden
                      />
                    </button>

                    {isExpanded ? (
                      <ul className="pb-2">
                        {category.services.map((service) => {
                          const isActive = activeServiceId === service.id;

                          return (
                            <li key={service.id}>
                              <button
                                type="button"
                                onClick={() =>
                                  handleServiceSelect(
                                    service.id,
                                    category.number,
                                  )
                                }
                                className={cn(
                                  "w-full rounded-lg px-3 py-2.5 pl-10 text-left text-[14px] transition-colors",
                                  isActive
                                    ? "bg-[#F4F7FD] font-medium text-[#0A3A86]"
                                    : "text-neutral-600 hover:bg-[#F7F9FC] hover:text-[#0B0F14]",
                                )}
                              >
                                {service.title}
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    ) : null}
                  </div>
                );
              })}
            </nav>

            <ServiceDetailPanel key={activeService.id} service={activeService} />
          </div>
        </div>
      </div>
    </section>
  );
}
