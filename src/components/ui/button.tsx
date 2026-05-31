import Link from "next/link";
import * as React from "react";

import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm";
  href?: string;
}

const buttonClassName = (
  variant: ButtonProps["variant"],
  size: ButtonProps["size"],
  className?: string,
) =>
  cn(
    "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 disabled:pointer-events-none disabled:opacity-50",
    variant === "default" && "bg-white text-black hover:bg-white/90",
    variant === "outline" &&
      "border border-white/20 bg-transparent text-white/80 hover:bg-white/10 hover:text-white",
    variant === "ghost" && "hover:bg-white/10 text-white/80",
    size === "default" && "h-9 px-4 py-2 text-sm",
    size === "sm" && "h-7 px-2 text-xs",
    className,
  );

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", href, ...props }, ref) => {
    if (href) {
      return (
        <Link
          href={href}
          className={buttonClassName(variant, size, className)}
        >
          {props.children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={buttonClassName(variant, size, className)}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
