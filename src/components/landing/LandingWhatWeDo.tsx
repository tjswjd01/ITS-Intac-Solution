export default function LandingWhatWeDo() {
  const services = [
    {
      number: "01",
      category: "Device Lifecycle",
      title: "Device Lifecycle Operations",
      description:
        "ITS manages refurbishment, QA inspection, device logistics, and on-site technical workflows for scalable device operations.",
      bg: "bg-[#F7FAFD]",
    },
    {
      number: "02",
      category: "Workforce Operations",
      title: "Operational Workforce Support",
      description:
        "We provide warehouse staffing, packaging support, bilingual operations, and workforce coordination for daily execution.",
      bg: "bg-white",
    },
    {
      number: "03",
      category: "Workflow Automation",
      title: "Automation & Workflow Systems",
      description:
        "ITS supports robotics integration, conveyor systems, packaging automation, and workflow optimization for scalable operations.",
      bg: "bg-[#F7FAFD]",
    },
    {
      number: "04",
      category: "Business Infrastructure",
      title: "U.S. Business Infrastructure Support",
      description:
        "We help Korean and global companies build local operations through HR/payroll setup, staffing coordination, and field support.",
      bg: "bg-white",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="layout-container">
        {/* TOP */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* LEFT */}
          <div>
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#5F6B7A]">
              <span className="h-2 w-2 rounded-full bg-[#062A56]" />
              What We Do
            </p>

            <h2 className="mt-6 max-w-[520px] text-[clamp(30px,2.5vw,42px)] font-[500] leading-[1.08] tracking-[-0.04em] text-[#0B0F14]">
              Operational Solutions
              <br />
              <span className="text-[#8B929D]">Built to Scale.</span>
            </h2>
          </div>

          {/* RIGHT */}
          <p className="max-w-[620px] text-[16px] leading-[1.75] text-[#4B5563] lg:pt-10">
            From device lifecycle support to workforce operations and automation,
            ITS provides practical solutions for teams that need reliable
            execution, structured management, and scalable growth.
          </p>
        </div>

        {/* SERVICE LIST */}
        <div className="mt-12 overflow-hidden rounded-[22px] border border-[#EDF1F5] bg-white">
          {services.map((service, index) => (
            <div
              key={service.number}
              className={`grid gap-5 px-7 py-6 md:grid-cols-[0.22fr_0.78fr] lg:px-10 lg:py-7 ${service.bg} ${
                index !== services.length - 1
                  ? "border-b border-[#EDF1F5]"
                  : ""
              }`}
            >
              {/* LEFT SIDE */}
              <div className="border-r border-[#E6EBF1] pr-5">
                <p className="text-[18px] font-semibold tracking-[-0.03em] text-[#123D8F]">
                  {service.number}
                </p>

                <p className="mt-2 text-[14px] font-semibold leading-snug tracking-[-0.02em] text-[#123D8F]">
                  {service.category}
                </p>
              </div>

              {/* RIGHT SIDE */}
              <div>
                <h3 className="text-[18px] font-[520] leading-[1.2] tracking-[-0.03em] text-[#0B0F14]">
                  {service.title}
                </h3>

                <p className="mt-2 max-w-[840px] text-[14.5px] leading-[1.65] text-[#4B5563]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="mt-7 flex justify-end">
          <a href="/services" className="btn-primary">
            View All Services <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}