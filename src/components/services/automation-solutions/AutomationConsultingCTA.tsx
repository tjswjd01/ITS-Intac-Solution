import Link from "next/link";

export default function AutomationConsultingCTA() {
  return (
    <section
      id="contact-consultation"
      className="section-shell border-t border-black/[0.06] bg-[#0A3A86]"
    >
      <div className="layout-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
            <span className="h-2 w-2 rounded-full bg-white/80" aria-hidden />
            Contact / Consultation CTA
          </p>
          <h2 className="mt-5 text-[clamp(28px,3vw,40px)] font-medium leading-[1.1] tracking-[-0.04em] text-white">
            Need automation support for your operation?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-[1.75] text-white/75">
            Talk to ITS about automation consulting, workflow design, and
            implementation support.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-white/20 bg-white px-6 py-3 text-[14px] font-semibold text-[#0A3A86] shadow-[0_14px_30px_rgba(0,0,0,0.12)] transition hover:bg-white/95"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
