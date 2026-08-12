// Server Component.
import Image from "next/image";
import type { StatsData } from "@/src/types/landing-page";

interface StatsSectionProps {
  data: StatsData;
}

export default function StatsSection({ data }: StatsSectionProps) {
  return (
    <section
      id="stats"
      aria-label="Achievements"
      style={{ backgroundColor: "var(--color-neutral-silver)" }}
    >
      <div
        className="mx-auto px-4 sm:px-6 md:px-12 lg:px-[144px] py-10 sm:py-12 md:py-16 lg:py-20"
        style={{ maxWidth: "calc(var(--max-width-content) + 288px)" }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16">

          {/* Left — headline + subtitle */}
          <div className="flex flex-col gap-2 w-full lg:max-w-[400px]">
            <h2
              className="font-semibold"
              style={{
                color: "var(--color-neutral-black)",
                fontSize: "clamp(1.5rem, 3vw, var(--font-size-h2))",
                lineHeight: "var(--line-height-h2)",
              }}
            >
              {data.headlinePart1}{" "}
              <span className="block" style={{ color: "var(--color-brand-primary)" }}>
                {data.headlinePart2}
              </span>
            </h2>

            <p
              style={{
                color: "var(--color-neutral-grey)",
                fontSize: "var(--font-size-body2)",
                lineHeight: "var(--line-height-body2)",
              }}
            >
              {data.subtitle}
            </p>
          </div>

          {/* Right — 2×2 stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-6 sm:gap-y-10 w-full lg:w-auto">
            {data.items.map((stat) => (
              <div key={stat.id} className="flex items-center gap-3 sm:gap-4 min-w-0 sm:min-w-[200px]">
                <Image
                  src={stat.icon.src}
                  alt={stat.icon.alt}
                  width={48}
                  height={48}
                  unoptimized
                  className="w-12 h-12 flex-shrink-0 object-contain"
                />
                <div className="flex flex-col">
                  <p
                    className="font-semibold"
                    style={{
                      color: "var(--color-neutral-black)",
                      fontSize: "var(--font-size-h3)",
                      lineHeight: "var(--line-height-h3)",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    style={{
                      color: "var(--color-neutral-grey)",
                      fontSize: "var(--font-size-body3)",
                      lineHeight: "var(--line-height-body3)",
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
