// Server Component.
import Image from "next/image";
import Button from "@/src/components/ui/Button";
import type { HeroData } from "@/src/types/landing-page";

interface HeroSectionProps {
  data: HeroData;
}

/**
 * Hero section — primary value proposition and CTA.
 * Layout: 2-column flex on desktop (text left, illustration right).
 * Background: Silver (#F5F7FA).
 * All content from HeroData prop.
 */
export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <section
      id="hero"
      aria-label="Hero"
      style={{ backgroundColor: "var(--color-neutral-silver)" }}
    >
      <div className="mx-auto max-w-content px-6 md:px-12 lg:px-[144px] py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text column */}
          <div className="flex flex-col gap-6 max-w-lg">
            <h1
              className="font-semibold text-neutral-black"
              style={{
                fontSize: "var(--font-size-h1)",
                lineHeight: "var(--line-height-h1)",
              }}
            >
              {data.headlinePart1}{" "}
              <span className="text-brand-primary">{data.headlinePart2}</span>
            </h1>

            <p
              className="text-neutral-grey"
              style={{
                fontSize: "var(--font-size-body2)",
                lineHeight: "var(--line-height-body2)",
              }}
            >
              {data.subtitle}
            </p>

            <div className="flex flex-col items-start gap-6">
              <Button
                label={data.cta.label}
                href={data.cta.href}
                variant="primary"
                size="lg"
              />

              {/* Carousel indicators */}
              <div className="flex items-center gap-2" aria-label="Slide indicators">
                {data.indicators.map((dot) => (
                  <span
                    key={dot.id}
                    role="presentation"
                    className="block h-2 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: dot.active
                        ? "var(--color-brand-primary)"
                        : "var(--color-brand-tint-3)",
                      width: dot.active ? "24px" : "8px",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Illustration column */}
          <div className="flex-shrink-0 w-full max-w-sm lg:max-w-none lg:w-auto">
            <Image
              src={data.image.src}
              alt={data.image.alt}
              width={data.image.width}
              height={data.image.height}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
