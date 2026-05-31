import OperationsSectionHeader from "../operations/OperationsSectionHeader";

const useCases = [
  {
    id: "01",
    title: "Mobile Device Refurbishment",
    description:
      "Support inspection consistency, testing workflows, and quality verification processes within mobile refurbishment operations.",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "02",
    title: "Packaging Verification",
    description:
      "Reduce packaging mistakes through barcode validation, label confirmation, and verification checkpoints.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "03",
    title: "Quality Assurance Operations",
    description:
      "Improve inspection consistency through structured quality verification and automated review workflows.",
    image:
      "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "04",
    title: "Component Sorting",
    description:
      "Support more efficient routing and handling of parts, devices, trays, and components.",
    image:
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "05",
    title: "Production Support Systems",
    description:
      "Increase operational visibility through workflow monitoring, reporting, and connected system data.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "06",
    title: "Workflow Monitoring",
    description:
      "Track workflow progress, equipment activity, and inspection outcomes through connected operational dashboards.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function AutomationIndustryUseCases() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="layout-container">
        <OperationsSectionHeader
          eyebrow="Industry Use Cases"
          title={
            <>
              <span className="block">Real automation challenges.</span>
              <span className="block">Practical operational solutions.</span>
            </>
          }
          description="ITS focuses on automation projects that solve measurable operational bottlenecks across inspection, quality control, packaging, refurbishment, and production support environments."
          descriptionClassName="max-w-3xl sm:max-w-4xl lg:max-w-[44rem]"
        />

        <div className="mt-12 grid gap-6 md:mt-14 lg:grid-cols-2">
          {useCases.slice(0, 2).map((item) => (
            <UseCaseCard key={item.id} item={item} large />
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {useCases.slice(2).map((item) => (
            <UseCaseCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCaseCard({
  item,
  large = false,
}: {
  item: (typeof useCases)[number];
  large?: boolean;
}) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_100px_rgba(15,23,42,0.12)]">
      <div
        className={
          large
            ? "relative h-[300px] overflow-hidden md:h-[360px]"
            : "relative h-[220px] overflow-hidden"
        }
      >
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

        <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/35 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-white backdrop-blur-md">
          {item.id}
        </div>
      </div>

      <div className={large ? "p-7 md:p-8" : "p-6"}>
        <h3
          className={
            large
              ? "max-w-[420px] text-[28px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#111111]"
              : "text-[22px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#111111]"
          }
        >
          {item.title}
        </h3>

        <p className="mt-4 text-[15px] leading-7 text-[#667085]">
          {item.description}
        </p>
      </div>
    </article>
  );
}