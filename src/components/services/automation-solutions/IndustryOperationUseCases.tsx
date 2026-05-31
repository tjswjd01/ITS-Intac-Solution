import ImageSurface from "@/components/ui/ImageSurface";

import OperationsSectionHeader from "../operations/OperationsSectionHeader";

const useCases = [
  {
    title: "Electronics Refurbishment",
    description:
      "Automation support for testing, repair routing, material movement, and QA checkpoints in high-volume refurbishment environments.",
    image: "/images/services/automation.jpg",
  },
  {
    title: "Warehouse Operations",
    description:
      "AMR deployment, staging automation, and workflow coordination for warehouse and logistics programs.",
    image: "/images/placeholder-photo.svg",
  },
  {
    title: "Manufacturing & Assembly",
    description:
      "Custom automation systems and process optimization for assembly, handling, and production support workflows.",
    image: "/images/placeholder-photo.svg",
  },
  {
    title: "Packaging Operations",
    description:
      "Automation opportunities in kitting, labeling, packing lines, and outbound preparation activities.",
    image: "/images/services/packaging-logistics.jpg",
  },
  {
    title: "QA & Inspection Programs",
    description:
      "Automated validation, sampling support, and reporting visibility for quality-focused operations.",
    image: "/images/services/quality-inspection.jpg",
  },
  {
    title: "Enterprise Facilities",
    description:
      "Scalable automation consulting and implementation support for multi-site operational programs.",
    image: "/images/placeholder-photo.svg",
  },
] as const;

export default function IndustryOperationUseCases() {
  return (
    <section id="industry-use-cases" className="section-shell border-t border-black/[0.06] bg-[#FAFAF8]">
      <div className="layout-container">
        <OperationsSectionHeader
          eyebrow="Industry Use Cases"
          title="Automation support across industries and operational models."
          description="ITS adapts automation consulting and implementation support to the workflows, volumes, and facility requirements of each client environment."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {useCases.map((item) => (
            <article
              key={item.title}
              className="grid overflow-hidden rounded-[24px] border border-black/[0.08] bg-white shadow-[0_10px_36px_rgba(15,23,42,0.06)] md:grid-cols-[0.95fr_1.05fr]"
            >
              <ImageSurface
                src={item.image}
                alt={item.title}
                className="h-full min-h-[220px] w-full md:min-h-full"
              />

              <div className="flex flex-col justify-center p-6 md:p-7">
                <h3 className="text-[20px] font-semibold tracking-[-0.03em] text-[#0B0F14]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-[#64748B]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
