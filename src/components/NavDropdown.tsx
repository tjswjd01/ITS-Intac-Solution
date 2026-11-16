"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export type NavDropdownItem = {
  label: string;
  subtext: string;
  href: string;
  icon?: LucideIcon;
};

type NavDropdownProps = {
  label: string;
  /** When set, the label itself links here and a chevron button opens the menu. */
  href?: string;
  items: NavDropdownItem[];
  variant?: "default" | "dark";
  align?: "left" | "right";
};

const CLOSE_DELAY_MS = 200;

/** Header dropdown. Opens on click or hover, closes on Escape, outside click
 *  or when focus leaves it. */
export default function NavDropdown({
  label,
  href,
  items,
  variant = "default",
  align = "left",
}: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuId = useId();
  const isDark = variant === "dark";

  const cancelClose = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimeoutRef.current = setTimeout(() => setOpen(false), CLOSE_DELAY_MS);
  }, [cancelClose]);

  useEffect(() => cancelClose, [cancelClose]);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const textClassName = cn(
    "text-[15px] font-medium transition",
    isDark ? "text-white/85 hover:text-white" : "text-[#14243D] hover:text-its-navy",
  );
  const focusRing =
    "rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-its-navy";

  return (
    <div
      ref={containerRef}
      className="relative inline-flex items-center gap-0.5"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
      onBlur={(event) => {
        if (!containerRef.current?.contains(event.relatedTarget as Node)) setOpen(false);
      }}
    >
      {href ? (
        <>
          <Link href={href} className={cn(textClassName, focusRing)}>
            {label}
          </Link>
          <button
            ref={buttonRef}
            type="button"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={`Show ${label} menu`}
            onClick={() => setOpen((current) => !current)}
            className={cn("inline-flex items-center justify-center p-0.5", textClassName, focusRing)}
          >
            <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} aria-hidden />
          </button>
        </>
      ) : (
        <button
          ref={buttonRef}
          type="button"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((current) => !current)}
          className={cn("inline-flex items-center gap-1", textClassName, focusRing)}
        >
          {label}
          <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} aria-hidden />
        </button>
      )}

      {open ? (
        <div
          id={menuId}
          className={cn("absolute top-full z-50 w-[20rem] pt-3", align === "right" ? "right-0" : "left-0")}
        >
          <ul className="rounded-2xl border border-its-line bg-white p-2 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-start gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-its-offwhite focus-visible:bg-its-offwhite focus-visible:outline focus-visible:outline-2 focus-visible:outline-its-navy"
                  >
                    {Icon ? (
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-its-dusty-soft text-[#6E8196]">
                        <Icon className="h-[18px] w-[18px]" strokeWidth={1.6} aria-hidden />
                      </span>
                    ) : null}
                    <span>
                      <span className="block text-[14px] font-semibold leading-snug text-its-navy">
                        {item.label}
                      </span>
                      <span className="mt-1 block text-[12.5px] leading-[1.5] text-its-slate-ink">
                        {item.subtext}
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
