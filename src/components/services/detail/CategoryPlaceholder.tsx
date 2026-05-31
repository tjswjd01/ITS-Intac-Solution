type CategoryPlaceholderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function CategoryPlaceholder({
  eyebrow,
  title,
  description,
}: CategoryPlaceholderProps) {
  return (
    <section className="section-shell bg-[#FAFAF8] pt-32 md:pt-40">
      <div className="layout-container">
        <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0A3A86]">
          <span className="h-2 w-2 rounded-full bg-[#0A3A86]" aria-hidden />
          {eyebrow}
        </p>

        <h1 className="section-title mt-5 max-w-[760px]">{title}</h1>

        <p className="section-copy mt-6 max-w-2xl">{description}</p>
      </div>
    </section>
  );
}
