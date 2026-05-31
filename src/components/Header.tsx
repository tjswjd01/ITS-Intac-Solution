import Link from "next/link";

import ServicesNavDropdown from "./ServicesNavDropdown";
import { ShinyButton } from "./ui/ShinyButton";
import { premiumPrimaryCtaClassName } from "./ui/premiumCtaStyles";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/about", label: "About Us" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact Us" },
];

type HeaderProps = {
  variant?: "default" | "dark";
  /** Automation page: black ShinyButton with restrained silver shine. */
  ctaVariant?: "primary" | "pro";
};

export default function Header({
  variant = "default",
  ctaVariant = "primary",
}: HeaderProps) {
  const isDark = variant === "dark";

  const navLinkClassName = cn(
    "text-[15px] font-medium transition",
    isDark
      ? "text-white/85 hover:text-white"
      : "text-[#0B0F14] hover:text-[#0B3D91]",
  );

  return (
    <header className="fixed left-1/2 top-4 z-50 w-[94%] max-w-[1380px] -translate-x-1/2 md:top-6">
      <div
        className={cn(
          "mx-auto flex items-center justify-between rounded-full border px-4 py-3 shadow-[0_14px_40px_rgba(15,23,42,0.06)] backdrop-blur md:px-6 lg:px-8",
          isDark
            ? "border-white/20 bg-white/[0.08]"
            : "border-[#E5E7EB] bg-white/92",
        )}
      >
        <Link href="/" className="flex items-center">
          <img
            src={isDark ? "/images/its-logo-full-white.png" : "/images/its-logo.png"}
            alt="ITS Logo"
            className="h-8 w-auto object-contain md:h-9"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link href="/about" className={navLinkClassName}>
            About Us
          </Link>
          <ServicesNavDropdown variant={variant} />
          {navItems.slice(1).map((item) => (
            <Link key={item.href} href={item.href} className={navLinkClassName}>
              {item.label}
            </Link>
          ))}
        </nav>

        {ctaVariant === "pro" ? (
          <ShinyButton
            href="/contact"
            variant="pro"
            className="min-h-11 px-5 py-2.5 text-[14px] md:px-6 md:py-3"
          >
            Get In Touch
          </ShinyButton>
        ) : (
          <Link
            href="/contact"
            className={`${premiumPrimaryCtaClassName} min-h-11 px-5 py-2.5 text-[14px] md:px-6 md:py-3`}
          >
            Get In Touch
          </Link>
        )}
      </div>
    </header>
  );
}
