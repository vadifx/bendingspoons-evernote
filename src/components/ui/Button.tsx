"use client";

import type { ReactNode } from "react";
import { useEasterEgg } from "@/components/ui/EasterEgg";

type Variant = "primary" | "outline" | "ghost" | "lime" | "green";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap text-center transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-[0.99]";

const variants: Record<Variant, string> = {
  primary: "bg-bg-inverse text-white hover:bg-brand-green",
  outline:
    "border border-stroke-buttons bg-transparent text-text-primary hover:border-bg-inverse hover:bg-bg-inverse hover:text-white",
  ghost: "text-text-primary hover:opacity-70",
  lime: "bg-brand-lime text-text-primary hover:bg-brand-green hover:text-white",
  green: "bg-brand-green text-white hover:bg-bg-inverse",
};

const sizes: Record<Size, string> = {
  sm: "rounded-pill px-3 py-1 text-[14px] font-medium",
  md: "rounded-button px-6 py-2.5 text-[15px] xl:px-7",
  lg: "rounded-button px-10 py-3 text-[16px] md:py-4 md:min-w-[250px]",
};

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  className?: string;
  fullWidthMobile?: boolean;
  /** Opens the recruiter easter-egg panel */
  upgrade?: boolean;
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  fullWidthMobile = false,
  upgrade = false,
}: ButtonProps) {
  const { open } = useEasterEgg();

  const cls = [
    base,
    variants[variant],
    sizes[size],
    fullWidthMobile ? "w-full md:w-auto" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (upgrade) {
    return (
      <button type="button" className={cls} onClick={open}>
        {children}
      </button>
    );
  }

  if (href !== undefined) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return <button type="button" className={cls}>{children}</button>;
}
