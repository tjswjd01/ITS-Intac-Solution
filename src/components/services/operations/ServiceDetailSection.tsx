import ImageSurface from "@/components/ui/ImageSurface";

type ServiceDetailSectionProps = {
  eyebrow: string;
  heading: string;
  description: string;
  bullets: readonly string[];
  imageAlt: string;
  background?: "white" | "gray";
  withBottomDivider?: boolean;
};

export default function ServiceDetailSection({
  eyebrow,
  heading,
  description,
  bullets,
  imageAlt,
  background = "white",
  withBottomDivider = false,
}: ServiceDetailSectionProps) {
  const bgClass = background === "gray" ? "bg-[#FAFAF8]" : "bg-white";

  return (
    <section
      className={`section-shell border-t border-black/[0.06] ${bgClass} ${
        withBottomDivider ? "border-b border-black/[0.1]" : ""
      }`}
    >
      <div className="layout-container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0">
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0A3A86]">
              <span className="h-2 w-2 rounded-full bg-[#0A3A86]" aria-hidden />
              {eyebrow}
            </p>

            <h2 className="section-title mt-5 max-w-[640px]">{heading}</h2>

            <p className="section-copy mt-6 max-w-xl">{description}</p>

            <ul className="mt-8 space-y-3">
              {bullets.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] leading-[1.65] text-[#475569]">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0A3A86]"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <ImageSurface
              alt={imageAlt}
              className="aspect-[16/10] rounded-[28px] border border-black/[0.06] shadow-[0_18px_50px_rgba(15,23,42,0.07)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
