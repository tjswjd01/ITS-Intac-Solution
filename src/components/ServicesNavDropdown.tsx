"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const serviceLinks = [
  {
    label: "Direct Hire",
    subtext: "Executive, professional, technical and bilingual talent.",
    href: "/services/direct-hire",
  },
  {
    label: "Staffing & Workforce",
    subtext: "Staffing for logistics, warehouse, manufacturing and professional roles.",
    href: "/services/workforce-solutions",
  },
  {
    label: "Managed Operations",
    subtext: "Engineering-led management of people, processes, quality and KPIs.",
    href: "/services/operations",
  },
  {
    label: "Automation & Robotics",
    subtext: "Refurbishment-process automation and logistics robot solutions.",
    href: "/services/automation-solutions",
  },
  {
    label: "U.S. Market Entry",
    subtext: "Workforce planning, facility support and U.S. operational setup.",
    href: "/services/global-business-support",
  },
];

const CLOSE_DELAY_MS = 200;

type ServicesNavDropdownProps = {
  variant?: "default" | "dark";
};

export default function ServicesNavDropdown({
  variant = "default",
}: ServicesNavDropdownProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isDark = variant === "dark";

  const cancelClose = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);

  const openMenu = useCallback(() => {
    cancelClose();
    setOpen(true);
  }, [cancelClose]);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimeoutRef.current = setTimeout(() => {
      setOpen(false);
      closeTimeoutRef.current = null;
    }, CLOSE_DELAY_MS);
  }, [cancelClose]);

  const toggleMenu = useCallback(() => {
    cancelClose();
    setOpen((current) => !current);
  }, [cancelClose]);

  useEffect(() => {
    return () => {
      cancelClose();
    };
  }, [cancelClose]);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        cancelClose();
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, [open, cancelClose]);

  const linkClassName = cn(
    "text-[15px] font-medium transition",
    isDark
      ? "text-white/85 hover:text-white"
      : "text-[#14243D] hover:text-[#14243D]",
  );

  const chevronButtonClassName = cn(
    "inline-flex items-center justify-center rounded-md p-0.5 transition",
    isDark
      ? "text-white/85 hover:text-white"
      : "text-[#14243D] hover:text-[#14243D]",
  );

  return (
    <div className="relative inline-flex items-center gap-0.5">
      <Link href="/services" className={linkClassName}>
        Solutions
      </Link>

      <div
        ref={containerRef}
        className="relative"
        onMouseEnter={openMenu}
        onMouseLeave={scheduleClose}
      >
        <button
          type="button"
          aria-expanded={open}
          aria-haspopup="true"
          aria-label="Show solutions menu"
          onClick={toggleMenu}
          className={chevronButtonClassName}
        >
          <ChevronDown className="h-4 w-4" aria-hidden />
        </button>

      {open ? (
        <div className="absolute left-0 top-full z-50 w-[19rem] pt-3">
          <div className="rounded-2xl border border-black/10 bg-white p-2 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
            {serviceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-xl px-3 py-3 transition hover:bg-[#F3F6FA]"
                onClick={() => {
                  cancelClose();
                  setOpen(false);
                }}
              >
                <span className="block text-[14px] font-medium leading-snug text-[#14243D] transition group-hover:text-[#14243D]">
                  {link.label}
                </span>
                <span className="mt-1 block text-[12px] leading-[1.5] text-[#566173]">
                  {link.subtext}
                </span>
              </Link>
            ))}
          </div>
        </div>
      ) : null}
      </div>
    </div>
  );
}
