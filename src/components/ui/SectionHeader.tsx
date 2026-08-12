// Server Component — purely presentational.
import { cn } from "@/src/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  /** Alignment of the heading block — defaults to "center" */
  align?: "center" | "left";
  className?: string;
}

/**
 * Reusable section header used across community, clients, blog, etc.
 * Renders a Headline 2 title and optional Body 2 subtitle.
 * All copy is passed through props — no hardcoded text.
 */
export default function SectionHeader({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={cn("flex flex-col gap-3", alignClass, className)}>
      <h2
        className="text-neutral-black font-semibold"
        style={{
          fontSize: "var(--font-size-h2)",
          lineHeight: "var(--line-height-h2)",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-neutral-grey max-w-xl"
          style={{
            fontSize: "var(--font-size-body2)",
            lineHeight: "var(--line-height-body2)",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
