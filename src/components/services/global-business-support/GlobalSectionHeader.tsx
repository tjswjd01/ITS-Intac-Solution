import type { ReactNode } from "react";

import {
  GBS_ACCENT,
  GBS_BODY,
  GBS_HEADING,
} from "@/components/services/global-business-support/globalBusinessTheme";
import { cn } from "@/lib/utils";

type GlobalSectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  align?: "left" | "center";
};

export function GlobalSectionEyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em]",
        className,
      )}
      style={{ color: GBS_ACCENT }}
    >
      <span
        className="h-2 w-2 rounded-full"
        style={{ backgroundColor: GBS_ACCENT }}
        aria-hidden
      />
      {children}
    </p>
  );
}

export default function GlobalSectionHeader({
  eyebrow,
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
  align = "left",
}: GlobalSectionHeaderProps) {
  const alignClass = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={cn("max-w-[720px]", alignClass, className)}>
      <GlobalSectionEyebrow
        className={align === "center" ? "justify-center" : undefined}
      >
        {eyebrow}
      </GlobalSectionEyebrow>

      <h2
        className={cn(
          "mt-5 text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium leading-[1.08] tracking-[-0.04em]",
          titleClassName,
        )}
        style={{ color: GBS_HEADING }}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            "mt-5 max-w-[680px] text-[15px] leading-[1.8] md:text-base",
            align === "center" && "mx-auto",
            descriptionClassName,
          )}
          style={{ color: GBS_BODY }}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
