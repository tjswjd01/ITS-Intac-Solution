import { Mail, MapPin, Phone } from "lucide-react";

const cards = [
  {
    title: "Phone",
    icon: Phone,
    primary: "+1 (469) 922-5472",
    lines: [],
    href: "tel:+14699225472",
  },
  {
    title: "Email",
    icon: Mail,
    primary: "contact@intacsolution.com",
    lines: ["We typically respond within one business day."],
    href: "mailto:contact@intacsolution.com",
  },
  {
    title: "Location",
    icon: MapPin,
    primary: "Plano, TX",
    lines: ["5550 Granite Parkway, Suite 295", "Plano, TX 75024"],
    href: "https://maps.google.com/?q=5550+Granite+Parkway+Suite+295+Plano+TX+75024",
  },
] as const;

export default function ContactInfoCards() {
  return (
    <section className="relative z-30 bg-[#FAFAF8] pb-10 pt-12 md:pb-12 md:pt-[4.5rem] lg:pb-14 lg:pt-24">
      <div className="layout-container">
        <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            const content = (
              <>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#0B3A6F]">
                  <Icon className="h-5 w-5 text-white" strokeWidth={1.8} />
                </div>

                <h2 className="mt-5 text-[15px] font-semibold text-[#173F7A]">
                  {card.title}
                </h2>

                <p className="mt-3 text-[1.05rem] font-semibold leading-snug tracking-[-0.02em] text-[#081F3D]">
                  {card.primary}
                </p>

                {card.lines.length > 0 && (
                  <div className="mt-3 space-y-1">
                    {card.lines.map((line) => (
                      <p
                        key={line}
                        className="text-[14px] leading-[1.65] text-[#64748B]"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                )}
              </>
            );

            return (
              <article
                key={card.title}
                className={`rounded-[16px] border border-[#E2E8F0] bg-white px-8 py-8 text-center shadow-[0_10px_30px_rgba(15,23,42,0.06)] ${
                  index === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {card.href ? (
                  <a
                    href={card.href}
                    className="block transition-opacity hover:opacity-90"
                    {...(card.title === "Location"
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
