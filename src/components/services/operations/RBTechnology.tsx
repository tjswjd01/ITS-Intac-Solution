import ImageSurface from "@/components/ui/ImageSurface";
import OperationsSectionHeader from "./OperationsSectionHeader";

const technologies = [
  {
    title: "AMR Moving Robot",
    description:
      "Autonomous material movement across refurbishment workstations and staging areas.",
    mediaLabel: "VIDEO",
    image: "/images/placeholder-photo.svg",
    size: "large",
  },
  {
    title: "Auto Screw Machine",
    description:
      "Automated fastening support for consistent assembly and repair throughput.",
    mediaLabel: "VIDEO",
    image: "/images/placeholder-photo.svg",
    size: "large",
  },
  {
    title: "RF Test System",
    description:
      "Radio frequency validation for connectivity, signal integrity, and device performance.",
    mediaLabel: "VIDEO",
    image: "/images/placeholder-photo.svg",
    size: "small",
  },
  {
    title: "Waterproof Test System",
    description:
      "Water resistance testing to ensure device durability and reliability.",
    mediaLabel: "VIDEO",
    image: "/images/placeholder-photo.svg",
    size: "small",
  },
  {
    title: "Functional QA System",
    description:
      "Automated quality verification for key functions and device performance.",
    mediaLabel: "VIDEO",
    image: "/images/placeholder-photo.svg",
    size: "small",
  },
] as const;

function PlayBadge({ label }: { label: string }) {
  return (
    <div className="absolute left-4 top-4 z-20 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/35 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-md">
      <span className="flex h-4 w-4 items-center justify-center rounded-full border border-white/40 text-[8px]">
        ▶
      </span>
      {label}
    </div>
  );
}

function PlayButton() {
  return (
    <div className="absolute bottom-5 left-5 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/35 bg-black/30 text-white shadow-[0_12px_32px_rgba(0,0,0,0.25)] backdrop-blur-md">
      <span className="ml-0.5 text-[16px]">▶</span>
    </div>
  );
}

function TechnologyCard({
  item,
}: {
  item: (typeof technologies)[number];
}) {
  const isLarge = item.size === "large";

  return (
    <article
      className={`group overflow-hidden rounded-[24px] border border-black/[0.08] bg-white shadow-[0_14px_45px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)] ${
        isLarge ? "lg:col-span-3" : "lg:col-span-2"
      }`}
    >
      <div className="relative">
        <ImageSurface
          src={item.image}
          alt={item.title}
          className={`w-full ${isLarge ? "aspect-[16/9]" : "aspect-[16/10]"}`}
          overlayClassName="bg-[linear-gradient(180deg,rgba(8,15,20,0.06),rgba(8,15,20,0.35))]"
        />

        <PlayBadge label={item.mediaLabel} />
        <PlayButton />
      </div>

      <div className="p-6">
        <h3 className="text-[20px] font-semibold tracking-[-0.03em] text-[#0B0F14]">
          {item.title}
        </h3>

        <p className="mt-2 max-w-[520px] text-[14px] leading-[1.65] text-[#64748B]">
          {item.description}
        </p>
      </div>
    </article>
  );
}

export default function RBTechnology() {
  return (
    <section className="section-shell border-t border-black/[0.06] bg-[#FAFAF8]">
      <div className="layout-container">
        <OperationsSectionHeader
          eyebrow="RB Technology"
          title="Refurbishment technologies and automation that support consistent output."
          description="ITS invests in equipment, testing systems, and automation tools that improve throughput, reduce variability, and strengthen quality control across refurbishment operations."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-6">
          {technologies.map((item) => (
            <TechnologyCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}