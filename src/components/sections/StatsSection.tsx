// Server Component.
import Image from "next/image";
import type { StatsData } from "@/src/types/landing-page";

interface StatsSectionProps {
  data: StatsData;
}

/**
 * Statistics / Achievements section.
 * Layout: 2-column split — headline on left, 2×2 stats grid on right.
 * Background: Silver (#F5F7FA).
 * All content from StatsData prop.
 */
export default function StatsSection({ data }: StatsSectionProps) {
  return (
    <section
      id="stats"
      aria-label="Achievements"
      style={{ backgroundColor: "var(--color-neutral-silver)" }}
    >
      <div className="mx-auto max-w-content px-6 md:px-12 lg:px-[144px] py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left — headline */}
          <div className="flex flex-col gap-4 max-w-sm">
            <h2
              className="text-neutral-black font-semibold"
              style={{
                fontSize: "var(--font-size-h2)",
                lineHeight: "var(--line-height-h2)",
              }}
            >
              {data.headlinePart1}{" "}
              <span className="text-brand-primary">{data.headlinePart2}</span>
            </h2>

            <p
              className="text-neutral-grey"
              style={{
                fontSize: "var(--font-size-body2)",
                lineHeight: "var(--line-height-body2)",
              }}
            >
              {data.subtitle}
            </p>
          </div>

          {/* Right — 2×2 grid */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            {data.items.map((stat) => (
              <div key={stat.id} className="flex flex-col gap-2">
                <Image
                  src={stat.icon.src}
                  alt={stat.icon.alt}
                  width={48}
                  height={48}
                />
                <p
                  className="text-neutral-black font-semibold"
                  style={{
                    fontSize: "var(--font-size-h3)",
                    lineHeight: "var(--line-height-h3)",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-neutral-grey"
                  style={{
                    fontSize: "var(--font-size-body3)",
                    lineHeight: "var(--line-height-body3)",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
