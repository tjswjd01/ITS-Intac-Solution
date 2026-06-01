"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import ServicesNavDropdown from "./ServicesNavDropdown";
import { ShinyButton } from "./ui/ShinyButton";
import { premiumPrimaryCtaClassName } from "./ui/premiumCtaStyles";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/about", label: "About Us" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact Us" },
];

const mobileServiceLinks = [
  { href: "/services/operations", label: "Operations" },
  { href: "/services/workforce-solutions", label: "Workforce Solutions" },
  { href: "/services/automation-solutions", label: "Automation Solutions" },
  { href: "/services/global-business-support", label: "Global Business Support" },
];

type HeaderProps = {
  variant?: "default" | "dark";
  ctaVariant?: "primary" | "pro";
};

export default function Header({
  variant = "default",
  ctaVariant = "primary",
}: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDark = variant === "dark";

  const navLinkClassName = cn(
    "text-[15px] font-medium transition",
    isDark
      ? "text-white/85 hover:text-white"
      : "text-[#0B0F14] hover:text-[#0B3D91]",
  );

  useEffect(() => {
    if (!mobileOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const ctaClassName = cn(
    premiumPrimaryCtaClassName,
    "min-h-11 px-5 py-2.5 text-[14px] md:px-6 md:py-3",
  );

  return (
    <>
      <header className="fixed inset-x-3 top-3 z-50 mx-auto max-w-[1380px] min-[1440px]:max-w-[1520px] sm:inset-x-4 sm:top-4 md:top-6">
        <div
          className={cn(
            "relative mx-auto flex min-w-0 items-center justify-between gap-2 rounded-full border px-3 py-2.5 shadow-[0_14px_40px_rgba(15,23,42,0.06)] backdrop-blur sm:gap-3 sm:px-4 sm:py-3 md:px-6 lg:px-8",
            isDark
              ? "border-white/20 bg-white/[0.08]"
              : "border-[#E5E7EB] bg-white/92",
          )}
        >
          <Link href="/" className="flex min-w-0 shrink items-center">
            <img
              src={
                isDark
                  ? "/images/its-logo-full-white.png"
                  : "/images/its-logo.png"
              }
              alt="ITS Logo"
              className="h-7 w-auto max-w-[120px] object-contain sm:h-8 sm:max-w-none md:h-9"
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

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2.5">
            {ctaVariant === "pro" ? (
              <ShinyButton
                href="/contact"
                variant="pro"
                className="hidden min-h-11 px-5 py-2.5 text-[14px] lg:inline-flex md:px-6 md:py-3"
              >
                Get In Touch
              </ShinyButton>
            ) : (
              <Link
                href="/contact"
                className={cn(ctaClassName, "hidden lg:inline-flex")}
              >
                Get In Touch
              </Link>
            )}

            <button
              type="button"
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((open) => !open)}
              className={cn(
                "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition lg:hidden",
                isDark
                  ? "border-white/25 bg-white/10 text-white hover:bg-white/15"
                  : "border-[#D1D5DB] bg-white text-[#0B0F14] shadow-sm hover:bg-[#F8FAFC]",
              )}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" aria-hidden />
              ) : (
                <Menu className="h-5 w-5" aria-hidden />
              )}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen ? (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-[#0B0F14]/40 backdrop-blur-[2px]"
            onClick={() => setMobileOpen(false)}
          />

          <div
            className={cn(
              "absolute right-0 top-0 flex h-full w-[min(100%,320px)] flex-col border-l px-5 pb-8 pt-24 shadow-2xl",
              isDark
                ? "border-white/10 bg-[#0B0F14] text-white"
                : "border-[#E5E7EB] bg-white text-[#0B0F14]",
            )}
          >
            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto">
              <Link
                href="/about"
                className={cn(
                  "rounded-xl px-3 py-3 text-[16px] font-medium",
                  isDark ? "hover:bg-white/8" : "hover:bg-[#F4F7FB]",
                )}
                onClick={() => setMobileOpen(false)}
              >
                About Us
              </Link>

              <div className="mt-2">
                <p
                  className={cn(
                    "px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em]",
                    isDark ? "text-white/50" : "text-[#64748B]",
                  )}
                >
                  Services
                </p>
                {mobileServiceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "block rounded-xl px-3 py-2.5 text-[15px] font-medium",
                      isDark ? "hover:bg-white/8" : "hover:bg-[#F4F7FB]",
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/services"
                  className={cn(
                    "block rounded-xl px-3 py-2.5 text-[14px]",
                    isDark
                      ? "text-white/65 hover:bg-white/8"
                      : "text-[#64748B] hover:bg-[#F4F7FB]",
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  View all services
                </Link>
              </div>

              {navItems.slice(1).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-xl px-3 py-3 text-[16px] font-medium",
                    isDark ? "hover:bg-white/8" : "hover:bg-[#F4F7FB]",
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div
              className={cn(
                "mt-6 border-t pt-6",
                isDark ? "border-white/10" : "border-black/[0.06]",
              )}
            >
              {ctaVariant === "pro" ? (
                <ShinyButton
                  href="/contact"
                  variant="pro"
                  className="min-h-11 w-full justify-center"
                >
                  Get In Touch
                </ShinyButton>
              ) : (
                <Link
                  href="/contact"
                  className={cn(ctaClassName, "w-full justify-center")}
                  onClick={() => setMobileOpen(false)}
                >
                  Get In Touch
                </Link>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
