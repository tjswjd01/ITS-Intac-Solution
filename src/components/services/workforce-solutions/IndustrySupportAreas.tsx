import OperationsSectionHeader from "../operations/OperationsSectionHeader";
import { cn } from "@/lib/utils";

const industryPhotos = [
  {
    title: "Mobile Refurbishment",
    image: "/images/its-refurbish.png",
    imageAlt: "Mobile refurbishment workforce operations",
  },
  {
    title: "Warehouse Operations",
    image: "/images/who-warehouse.jpeg",
    imageAlt: "Warehouse operations workforce",
  },
  {
    title: "Quality Assurance",
    image: "/images/its-qa.png",
    imageAlt: "Quality assurance workforce operations",
  },
  {
    title: "Packaging & Fulfillment",
    image: "/images/who-warehouse.jpeg",
    imageAlt: "Packaging and fulfillment workforce",
  },
  {
    title: "Manufacturing Support",
    image: "/images/its-automation.jpeg",
    imageAlt: "Manufacturing support workforce",
  },
  {
    title: "Administrative & Office Support",
    image: "/images/who-team.jpeg",
    imageAlt: "Administrative and office support workforce",
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

function IndustryPhotoCard({
  photo,
  className,
}: {
  photo: (typeof industryPhotos)[number];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-black/[0.06] bg-[#F4F6F8] aspect-[4/5] w-full",
        className,
      )}
    >
      <img
        src={photo.image}
        alt={photo.imageAlt}
        className="h-full w-full object-cover"
      />
    </div>
  );
}

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

        <div className="mt-12 grid w-full min-w-0 grid-cols-1 gap-10 lg:mt-14 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] lg:items-start lg:gap-10 xl:grid-cols-[minmax(0,1fr)_380px] xl:gap-12">
          <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
            {industryPhotos.map((photo) => (
              <IndustryPhotoCard key={photo.title} photo={photo} />
            ))}
          </div>

          <div className="hidden min-w-0 grid-cols-3 gap-3 lg:grid xl:gap-4">
            <div className="flex min-w-0 flex-col gap-3 xl:gap-4">
              {col1.map((photo) => (
                <IndustryPhotoCard key={photo.title} photo={photo} />
              ))}
            </div>

            <div className="flex min-w-0 flex-col gap-3 pt-16 xl:gap-4 xl:pt-20">
              {col2.map((photo) => (
                <IndustryPhotoCard key={photo.title} photo={photo} />
              ))}
            </div>

            <div className="flex min-w-0 flex-col gap-3 pt-8 xl:gap-4 xl:pt-10">
              {col3.map((photo) => (
                <IndustryPhotoCard key={photo.title} photo={photo} />
              ))}
            </div>
          </div>

          <nav
            aria-label="Industries we support"
            className="min-w-0 shrink-0 lg:pt-2"
          >
            <ul className="flex flex-col gap-5" role="list">
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
                    <div className="min-w-0">
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
