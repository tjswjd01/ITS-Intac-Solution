import { Eyebrow, SectionTitle } from "@/components/site/primitives";

import { testimonials } from "./homeContent";

/** Renders nothing until approved quotes are added to homeContent.ts. */
export default function HomeTestimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section aria-labelledby="testimonials-heading" className="bg-white py-16 md:py-20">
      <div className="layout-container">
        <Eyebrow>Client &amp; Candidate Voices</Eyebrow>
        <SectionTitle className="mt-4">
          <span id="testimonials-heading">What Partners Say About ITS.</span>
        </SectionTitle>
        <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <li key={item.quote} className="rounded-[24px] border border-its-line bg-its-offwhite p-7">
              <blockquote className="text-[16px] leading-[1.7] text-its-navy">
                “{item.quote}”
              </blockquote>
              <p className="mt-5 text-[14px] text-its-slate-ink">{item.attribution}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
