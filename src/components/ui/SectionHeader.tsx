// Server Component — purely presentational.

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`flex flex-col gap-3 ${isCenter ? "items-center text-center" : "items-start text-left"} ${className}`}
    >
      <h2
        className="font-semibold"
        style={{
          color: "var(--color-neutral-black)",
          fontSize: "clamp(1.5rem, 3vw, var(--font-size-h2))",
          lineHeight: "var(--line-height-h2)",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="max-w-2xl"
          style={{
            color: "var(--color-neutral-grey)",
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
