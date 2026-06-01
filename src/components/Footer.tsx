import Image from "next/image";
import Link from "next/link";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Our Services", href: "/services" },
];

const serviceLinks = [
  { label: "Mobile Refurbishment", href: "/services" },
  { label: "Quality Assurance & Inspection", href: "/services" },
  { label: "Staffing Solutions", href: "/services" },
  { label: "Packaging & Logistics", href: "/services" },
  { label: "ATM Technical Support", href: "/services" },
  { label: "Automation Solutions", href: "/services" },
];

const contactLinks = [
  { label: "Get in Touch", href: "/contact" },
  { label: "Locations", href: "/contact#locations" },
];

function FooterColumn({
  title,
  links,
  className = "",
}: {
  title: string;
  links: { label: string; href: string }[];
  className?: string;
}) {
  return (
    <div className={className}>
      <h3 className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#111111]">
        {title}
      </h3>
      <ul className="mt-5 space-y-3.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-[15px] leading-snug text-[#6B7280] transition-colors duration-200 hover:text-[#111111]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#FFFFFF] text-[#111111]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[#E5E7EB]" />
        <div className="absolute inset-y-0 w-1/2 animate-footer-shine bg-[linear-gradient(90deg,transparent_0%,rgba(10,58,134,0.14)_35%,rgba(17,17,17,0.55)_50%,rgba(10,58,134,0.14)_65%,transparent_100%)] shadow-[0_0_20px_rgba(10,58,134,0.22),0_0_8px_rgba(17,17,17,0.12)]" />
      </div>

      <div className="layout-container py-12 sm:py-14 md:py-16 lg:py-20">
        <div className="flex flex-col gap-10 sm:grid sm:grid-cols-2 sm:gap-12 lg:grid lg:grid-cols-[minmax(0,1.35fr)_repeat(3,minmax(0,1fr))] lg:gap-0">
          <div className="max-w-md lg:pr-12">
            <Link href="/" className="inline-block">
              <Image
                src="/images/its-logo.png"
                alt="ITS Intac Solution"
                width={140}
                height={36}
                className="h-9 w-auto"
              />
            </Link>
            <p className="mt-6 text-[15px] leading-[1.75] text-[#6B7280] md:text-base md:leading-8">
              ITS delivers intelligent solutions that connect people,
              processes, and technology.
            </p>
          </div>

          <FooterColumn
            title="Company"
            links={companyLinks}
            className="border-t border-[#E5E7EB] pt-10 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"
          />

          <FooterColumn
            title="Services"
            links={serviceLinks}
            className="border-t border-[#E5E7EB] pt-10 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"
          />

          <FooterColumn
            title="Contact"
            links={contactLinks}
            className="border-t border-[#E5E7EB] pt-10 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"
          />
        </div>

        <div className="mt-12 border-t border-[#E5E7EB] pt-8 md:mt-14 md:pt-9">
          <p className="text-sm text-[#6B7280]">
            © {year} ITS Intac Solution. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
