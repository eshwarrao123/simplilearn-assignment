// Server Component — no "use client" needed; purely presentational.
import { cn } from "@/src/lib/utils";

type ButtonVariant = "primary" | "secondary" | "link";
type ButtonSize = "lg" | "md" | "sm";

interface ButtonProps {
  label: string;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  showArrow?: boolean;
  className?: string;
}

const SIZE_CLASSES: Record<ButtonSize, string> = {
  lg: "px-8 py-3.5 text-base font-medium",    /* 14px 32px, 16px text */
  md: "px-6 py-2.5 text-sm  font-medium",    /* 10px 24px, 14px text */
  sm: "px-4 py-2  text-sm  font-medium",     /* 8px  16px, 14px text */
};

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:   "bg-brand-primary text-white border border-transparent hover:bg-brand-shade-1 active:bg-brand-shade-2 rounded-[var(--radius-btn)]",
  secondary: "bg-transparent text-brand-primary border border-brand-primary hover:bg-brand-tint-5 rounded-[var(--radius-btn)]",
  link:      "bg-transparent text-brand-primary border-none hover:text-brand-shade-2 p-0",
};

/**
 * Reusable Button / link component.
 * Renders an <a> tag (appropriate for a static landing page).
 * All content (label, href, variant) is passed via props — no hardcoded copy.
 */
export default function Button({
  label,
  href = "#",
  variant = "primary",
  size = "md",
  showArrow = false,
  className,
}: ButtonProps) {
  const isLink = variant === "link";

  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center gap-1 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-tint-4",
        isLink ? VARIANT_CLASSES.link : SIZE_CLASSES[size],
        VARIANT_CLASSES[variant],
        className
      )}
    >
      {label}
      {(showArrow || isLink) && (
        <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
          →
        </span>
      )}
    </a>
  );
}
