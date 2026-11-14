import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-its-navy";

export const navyButtonClassName = cn(
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-its-navy px-6 py-3 text-[15px] font-medium text-white transition-colors duration-200 hover:bg-[#1D3252]",
  focusRing,
);

export const outlineButtonClassName = cn(
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#C9CFD8] bg-white px-6 py-3 text-[15px] font-medium text-its-navy transition-colors duration-200 hover:border-its-navy",
  focusRing,
);

export const lightButtonClassName = cn(
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-[15px] font-medium text-its-navy transition-colors duration-200 hover:bg-its-offwhite",
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
);

export const textLinkClassName = cn(
  "inline-flex items-center gap-2 text-[15px] font-semibold text-its-navy underline decoration-its-mint decoration-2 underline-offset-[6px] transition-colors hover:decoration-its-navy",
  focusRing,
);

export function Eyebrow({
  children,
  rule = false,
  onDark = false,
  className,
}: {
  children: ReactNode;
  rule?: boolean;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.16em]",
        onDark ? "text-[#B9CDC9]" : "text-its-mint-ink",
        className,
      )}
    >
      <span>{children}</span>
      {rule ? (
        <span
          aria-hidden
          className={cn("h-px w-14", onDark ? "bg-[#B9CDC9]/60" : "bg-its-mint")}
        />
      ) : null}
    </p>
  );
}

export function SectionTitle({
  children,
  as: Tag = "h2",
  onDark = false,
  className,
}: {
  children: ReactNode;
  as?: "h1" | "h2";
  onDark?: boolean;
  className?: string;
}) {
  return (
    <Tag
      className={cn(
        "text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.03em]",
        onDark ? "text-white" : "text-its-navy",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function ArrowLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={cn(textLinkClassName, className)}>
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden />
    </Link>
  );
}

/** Compact navy closing banner shared by the Home and the new solution pages. */
export function CtaBanner({
  title,
  copy,
  label = "Get in Touch",
  href = "/contact",
}: {
  title: string;
  copy: string;
  label?: string;
  href?: string;
}) {
  return (
    <section className="bg-its-offwhite pb-16 pt-4 md:pb-20">
      <div className="layout-container">
        <div className="flex flex-col gap-6 rounded-[28px] bg-its-navy px-7 py-9 sm:px-10 md:flex-row md:items-center md:justify-between md:py-10 lg:px-14">
          <div className="max-w-[640px]">
            <h2 className="text-[clamp(1.5rem,2.4vw,2rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-white">
              {title}
            </h2>
            <p className="mt-3 text-[16px] leading-[1.6] text-[#C8D1DC]">
              {copy}
            </p>
          </div>
          <Link href={href} className={cn(lightButtonClassName, "shrink-0 self-start md:self-auto")}>
            {label}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}

/** Light page header for the new solution, industries and insights pages. */
export function PageHero({
  eyebrow,
  title,
  copy,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  copy: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-its-line bg-its-offwhite pb-14 pt-32 md:pb-20 md:pt-40">
      <div className="layout-container">
        <div className="max-w-[760px]">
          <Eyebrow rule>{eyebrow}</Eyebrow>
          <h1 className="mt-5 text-[clamp(2.1rem,4.4vw,3.4rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-its-navy">
            {title}
          </h1>
          <p className="mt-6 max-w-[620px] text-[17px] leading-[1.7] text-its-slate-ink">
            {copy}
          </p>
          {children ? <div className="mt-9 flex flex-col gap-3 sm:flex-row">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
