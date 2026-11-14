import { Mail } from "lucide-react";

/**
 * Newsletter sign-up, shown in a clearly disabled state.
 * No email service is connected yet, so the form cannot be submitted and
 * never shows a success message. Enable it only after the provider (for
 * example Mailchimp), consent wording and privacy policy are in place.
 */
export default function NewsletterBanner() {
  return (
    <section aria-labelledby="newsletter-heading" className="bg-white pb-16 md:pb-24">
      <div className="layout-container">
        <div className="grid gap-6 rounded-[24px] bg-[#E8EBED] px-7 py-9 sm:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-12 lg:px-12">
          <div className="flex items-start gap-5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-its-slate">
              <Mail className="h-5 w-5" strokeWidth={1.6} aria-hidden />
            </span>
            <div>
              <h2
                id="newsletter-heading"
                className="text-[clamp(1.4rem,2.2vw,1.8rem)] font-semibold leading-[1.2] tracking-[-0.03em] text-its-navy"
              >
                Stay Informed with ITS Insights
              </h2>
              <p className="mt-2 text-[15.5px] leading-[1.6] text-its-slate-ink">
                Practical perspectives on HR, the job market, careers and
                operations, sent as an occasional digest.
              </p>
            </div>
          </div>

          <div>
            <form aria-describedby="newsletter-status" className="flex flex-col gap-2 sm:flex-row">
              <label className="min-w-0 flex-1">
                <span className="sr-only">Email address</span>
                <input
                  type="email"
                  disabled
                  placeholder="Enter your email"
                  className="h-12 w-full rounded-full border border-[#C9CFD8] bg-white px-5 text-[15px] text-its-navy placeholder:text-its-slate disabled:cursor-not-allowed disabled:opacity-70"
                />
              </label>
              <button
                type="submit"
                disabled
                className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-its-navy px-6 text-[15px] font-medium text-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                Subscribe
              </button>
            </form>
            <p id="newsletter-status" className="mt-3 text-[13.5px] leading-[1.55] text-its-slate-ink">
              Newsletter sign-up is not open yet. It will be enabled once our
              email service is connected.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
