export default function ContactHero() {
  return (
    <section className="relative overflow-visible">
      <div className="relative h-[320px] md:h-[400px] lg:h-[480px]">
        <img
          src="/images/its-hero-bg.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[rgba(8,31,61,0.82)]"
          aria-hidden
        />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 pt-16 text-center sm:px-6 md:pt-20 lg:pt-24">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/75">
            Contact
          </p>
          <h1 className="mt-3 text-[clamp(2rem,5vw,2.75rem)] font-semibold leading-tight tracking-[-0.03em] text-white">
            Contact Us
          </h1>
          <p className="mt-4 max-w-[640px] text-[15px] leading-[1.75] text-white md:text-[16px]">
            Whether you are exploring workforce support, automation programs,
            partnerships, or career opportunities, our team is ready to help.
          </p>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1]">
          <svg
            viewBox="0 0 1440 88"
            preserveAspectRatio="none"
            className="block h-[52px] w-full md:h-[64px] lg:h-[72px]"
            aria-hidden
          >
            <path
              fill="#FAFAF8"
              d="M0,52 C320,88 640,18 960,52 C1120,68 1280,72 1440,48 L1440,88 L0,88 Z"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
