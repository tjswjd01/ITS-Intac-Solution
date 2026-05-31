"use client";

export default function LandingWhoWeAre() {
  return (
    <section className="relative overflow-hidden bg-[#FAF9F6] py-28">
      <div className="layout-container">
        <div className="grid items-center gap-16 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          {/* LEFT CONTENT */}
          <div className="max-w-[560px]">
            <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6F7886]">
              <span className="h-2 w-2 rounded-full bg-[#073A73]" />
              <span>Who We Are</span>
            </div>

            <h2 className="mt-7 text-[clamp(28px,2.25vw,38px)] font-[500] leading-[1.1] tracking-[-0.04em] text-[#0B0F14]">
              More Than a Partner.
              <span className="block">We’re Your</span>
              <span className="block text-[#8B93A1]">
                Operational Advantage.
              </span>
            </h2>

            <p className="mt-8 max-w-[520px] text-[16px] leading-[1.9] text-[#4A5260]">
              From refurbishment and quality assurance to workforce coordination
              and logistics support, ITS helps businesses scale operational
              performance with real-world execution.
            </p>

            <a
              href="/about"
              className="mt-10 inline-flex min-w-[220px] items-center justify-center gap-2 rounded-full border border-[#073A73] bg-[#073A73] px-6 py-3 text-[14px] font-medium text-white shadow-[0_14px_30px_rgba(7,58,115,0.18)] transition hover:opacity-90"
            >
              Learn More About ITS
              <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* RIGHT GRID */}
          <div className="grid gap-5 md:grid-cols-[0.95fr_1.35fr]">
            {/* NAVY CARD */}
            <div className="relative min-h-[310px] overflow-hidden rounded-[30px] bg-[#062E61] p-8 text-white shadow-[0_24px_60px_rgba(6,46,97,0.24)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,126,214,0.45),transparent_36%)]" />
              <div className="absolute bottom-8 left-8 h-28 w-64 opacity-25 [background-image:radial-gradient(rgba(255,255,255,0.55)_1px,transparent_1px)] [background-size:14px_14px]" />

              <div className="relative z-10 flex h-full flex-col justify-start">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/58">
                  System Driven Operations
                </p>

                <h3 className="mt-8 max-w-[300px] text-[1.85rem] font-[500] leading-[1.05] tracking-[-0.045em]">
                  Workforce systems built for operational control.
                </h3>

                <p className="mt-6 max-w-[300px] text-[14px] leading-[1.65] text-white/65">
                  Structured HR management, workflow tracking, and field
                  operation support in one connected process.
                </p>
              </div>
            </div>

            {/* VIDEO CARD */}
            <div className="relative min-h-[310px] overflow-hidden rounded-[30px] bg-[#E8ECF1] shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
              >
                <source src="/videos/its-smart.mp4" type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,10,18,0.34),rgba(5,10,18,0.04)_58%)]" />

              <div className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#27303C] backdrop-blur">
                Automated Operations
              </div>
            </div>

            {/* QUALITY ASSURANCE CARD */}
            <div className="relative min-h-[210px] overflow-hidden rounded-[28px] bg-[#E8ECF1] shadow-[0_20px_44px_rgba(15,23,42,0.1)]">
              <img
                src="/images/its-qa.png"
                alt="ITS quality assurance and device testing"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,10,18,0.28),transparent_62%)]" />
              <div className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#27303C] backdrop-blur">
                Quality Assurance
              </div>
            </div>

            {/* BOTTOM TWO CARDS */}
            <div className="grid gap-5 md:grid-cols-[0.72fr_1fr]">
              {/* KPI CARD */}
              <div className="flex min-h-[210px] flex-col justify-between rounded-[28px] border border-[#E5E8ED] bg-[#FCFCFB] p-7 shadow-[0_20px_44px_rgba(15,23,42,0.07)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DDE3EA] text-[#073A73]">
                  ✓
                </div>

                <p className="text-[1.45rem] font-[500] leading-[1.05] tracking-[-0.04em] text-[#0B0F14]">
                  10M+ devices
                  <span className="block">processed with</span>
                  <span className="block">precision and care.</span>
                </p>
              </div>

              {/* REFURBISHMENT CARD */}
              <div className="relative min-h-[210px] overflow-hidden rounded-[28px] bg-[#E8ECF1] shadow-[0_20px_44px_rgba(15,23,42,0.1)]">
                <img
                  src="/images/its-refurbish.png"
                  alt="ITS device refurbishment operation"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,10,18,0.28),transparent_62%)]" />
                <div className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#27303C] backdrop-blur">
                  Device Refurbishment
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}