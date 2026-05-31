import OperationsSectionHeader from "../operations/OperationsSectionHeader";
import { cn } from "@/lib/utils";

const industryPhotos = [
  {
    title: "Mobile Refurbishment",
    image: "/images/its-refurbish.png",
    imageAlt: "Mobile refurbishment workforce operations",
    className:
      "h-[176px] w-[164px] sm:h-[210px] sm:w-[196px] md:h-[252px] md:w-[236px] lg:h-[296px] lg:w-[276px] xl:h-[330px] xl:w-[308px]",
  },
  {
    title: "Warehouse Operations",
    image: "/images/who-warehouse.jpeg",
    imageAlt: "Warehouse operations workforce",
    className:
      "h-[192px] w-[180px] sm:h-[228px] sm:w-[214px] md:h-[274px] md:w-[258px] lg:h-[322px] lg:w-[300px] xl:h-[358px] xl:w-[334px]",
  },
  {
    title: "Quality Assurance",
    image: "/images/its-qa.png",
    imageAlt: "Quality assurance workforce operations",
    className:
      "h-[168px] w-[156px] sm:h-[200px] sm:w-[186px] md:h-[240px] md:w-[224px] lg:h-[282px] lg:w-[262px] xl:h-[314px] xl:w-[292px]",
  },
  {
    title: "Packaging & Fulfillment",
    image: "/images/services/packaging-logistics.jpg",
    imageAlt: "Packaging and fulfillment workforce",
    className:
      "h-[184px] w-[172px] sm:h-[218px] sm:w-[204px] md:h-[262px] md:w-[246px] lg:h-[308px] lg:w-[288px] xl:h-[342px] xl:w-[318px]",
  },
  {
    title: "Manufacturing Support",
    image: "/images/its-automation.jpeg",
    imageAlt: "Manufacturing support workforce",
    className:
      "h-[200px] w-[188px] sm:h-[238px] sm:w-[224px] md:h-[286px] md:w-[270px] lg:h-[336px] lg:w-[316px] xl:h-[374px] xl:w-[350px]",
  },
  {
    title: "Administrative & Office Support",
    image: "/images/who-team.jpeg",
    imageAlt: "Administrative and office support workforce",
    className:
      "h-[172px] w-[160px] sm:h-[204px] sm:w-[190px] md:h-[246px] md:w-[230px] lg:h-[290px] lg:w-[270px] xl:h-[322px] xl:w-[300px]",
  },
] as const;

const industryItems = [
  {
    title: "Mobile Refurbishment",
    description:
      "Device testing, repair, restoration, and functional verification programs.",
  },
  {
    title: "Warehouse Operations",
    description:
      "Receiving, inventory control, picking, sorting, and outbound support.",
  },
  {
    title: "Quality Assurance",
    description:
      "Inspection, testing, quality verification, and reporting operations.",
  },
  {
    title: "Packaging & Fulfillment",
    description:
      "Kitting, labeling, packaging verification, and fulfillment support.",
  },
  {
    title: "Manufacturing Support",
    description:
      "Assembly, production support, component handling, and operational staffing.",
  },
  {
    title: "ATM Technical Support",
    description:
      "ATM installation, repair, maintenance, field service, and parts replacement.",
  },
  {
    title: "Logistics Operations",
    description:
      "Transportation coordination, distribution support, and operational logistics programs.",
  },
  {
    title: "Administrative & Office Support",
    description:
      "Accounting, HR, payroll, customer service, sales support, administrative coordination, and office operations.",
  },
] as const;

export default function IndustrySupportAreas() {
  const col1 = industryPhotos.filter((_, index) => index % 3 === 0);
  const col2 = industryPhotos.filter((_, index) => index % 3 === 1);
  const col3 = industryPhotos.filter((_, index) => index % 3 === 2);

  return (
    <section
      id="industry-support"
      className="section-shell border-t border-black/[0.06] bg-white"
    >
      <div className="layout-container">
        <OperationsSectionHeader
          eyebrow="Industries We Support"
          title="Supporting operations across every industry."
          description="From refurbishment centers and warehouses to manufacturing facilities, logistics operations, administrative offices, and technical field service environments, ITS delivers workforce programs designed to adapt to virtually any operational setting."
          descriptionClassName="max-w-3xl"
          eyebrowTone="black"
        />

        <div className="mt-12 flex flex-col gap-10 lg:mt-14 lg:flex-row lg:items-start lg:gap-8 xl:gap-10">
          {/* Left: masonry photos (~70%) */}
          <div className="flex min-w-0 flex-[7] justify-center gap-2.5 sm:gap-3 md:gap-4 lg:justify-start">
            <div className="flex flex-col gap-2.5 sm:gap-3 md:gap-4">
              {col1.map((photo) => (
                <div
                  key={photo.title}
                  className={cn(
                    "overflow-hidden rounded-2xl border border-black/[0.06] bg-[#F4F6F8]",
                    photo.className,
                  )}
                >
                  <img
                    src={photo.image}
                    alt={photo.imageAlt}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="mt-14 flex flex-col gap-2.5 sm:mt-16 sm:gap-3 md:mt-[88px] md:gap-4 lg:mt-[96px]">
              {col2.map((photo) => (
                <div
                  key={photo.title}
                  className={cn(
                    "overflow-hidden rounded-2xl border border-black/[0.06] bg-[#F4F6F8]",
                    photo.className,
                  )}
                >
                  <img
                    src={photo.image}
                    alt={photo.imageAlt}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-2.5 sm:mt-8 sm:gap-3 md:mt-10 md:gap-4 lg:mt-12">
              {col3.map((photo) => (
                <div
                  key={photo.title}
                  className={cn(
                    "overflow-hidden rounded-2xl border border-black/[0.06] bg-[#F4F6F8]",
                    photo.className,
                  )}
                >
                  <img
                    src={photo.image}
                    alt={photo.imageAlt}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: horizontal dot + text list (~30%) */}
          <nav
            aria-label="Industries we support"
            className="min-w-0 flex-[3] lg:max-w-[340px] lg:pt-2 xl:max-w-[380px]"
          >
            <ul className="flex flex-col gap-5 md:gap-5" role="list">
              {industryItems.map((item) => (
                <li key={item.title} className="group">
                  <div className="flex gap-3">
                    <span
                      className={cn(
                        "mt-[7px] h-2 w-3 shrink-0 rounded-full bg-[#D1D5DB] transition-all duration-300",
                        "group-hover:w-5 group-hover:bg-[#0A3A86]",
                      )}
                      aria-hidden
                    />
                    <div>
                      <p className="text-[15px] font-semibold leading-snug tracking-[-0.02em] text-[#0B0F14] transition-colors duration-300 group-hover:text-[#0A3A86] md:text-[16px]">
                        {item.title}
                      </p>
                      <p className="mt-1.5 text-[13px] leading-[1.65] text-[#64748B] md:text-[14px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
