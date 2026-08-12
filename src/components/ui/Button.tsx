// Server Component — purely presentational.
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
  lg: "px-7 py-3.5 text-base font-semibold",
  md: "px-6 py-2.5 text-sm  font-semibold",
  sm: "px-5 py-2   text-sm  font-semibold",
};

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "bg-[#4CAF4F] text-white hover:bg-[#43A046] active:bg-[#388E3B] rounded-[var(--radius-btn)]",
  secondary:
    "border border-[#4CAF4F] text-[#4CAF4F] hover:bg-[#E8F5E9] rounded-[var(--radius-btn)]",
  link: "text-[#4CAF4F] hover:text-[#388E3B] hover:underline underline-offset-2 p-0",
};

const BASE =
  "inline-flex items-center gap-2 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8E6C9] focus-visible:ring-offset-2 select-none";

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
        BASE,
        isLink ? VARIANT_CLASSES.link : SIZE_CLASSES[size],
        VARIANT_CLASSES[variant],
        className
      )}
    >
      {label}
      {(showArrow !== undefined ? showArrow : isLink) && (
        <span aria-hidden="true">→</span>
      )}
    </a>
  );
}
