// Server Component — purely presentational.
import Image from "next/image";
import Button from "@/src/components/ui/Button";
import type { HeroData } from "@/src/types/landing-page";

interface HeroSectionProps {
  data: HeroData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <section
      id="hero"
      aria-label="Hero"
      style={{ backgroundColor: "var(--color-neutral-silver)" }}
    >
      <div
        className="mx-auto px-6 md:px-12 lg:px-[144px] py-16 md:py-20 lg:py-24"
        style={{ maxWidth: "calc(var(--max-width-content) + 288px)" }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">

          {/* ── Left: text content ── */}
          <div className="flex flex-col gap-6 w-full lg:max-w-[540px]">
            <h1
              className="font-semibold"
              style={{
                color: "var(--color-neutral-black)",
                fontSize: "clamp(2rem, 5vw, var(--font-size-h1))",
                lineHeight: "var(--line-height-h1)",
              }}
            >
              {data.headlinePart1}{" "}
              <span className="block" style={{ color: "var(--color-brand-primary)" }}>
                {data.headlinePart2}
              </span>
            </h1>

            <p
              style={{
                color: "var(--color-neutral-grey)",
                fontSize: "var(--font-size-body2)",
                lineHeight: "var(--line-height-body2)",
              }}
            >
              {data.subtitle}
            </p>

            <div>
              <Button
                label={data.cta.label}
                href={data.cta.href}
                variant="primary"
                size="lg"
              />
            </div>
          </div>

          {/* ── Right: illustration ── */}
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-none lg:flex-1 flex justify-center lg:justify-end">
            <Image
              src={data.image.src}
              alt={data.image.alt}
              width={data.image.width}
              height={data.image.height}
              priority
              unoptimized
              className="w-full h-auto max-w-[520px] lg:max-w-none"
            />
          </div>

        </div>

        {/* Carousel indicator dots — centered at bottom */}
        <div
          className="flex items-center justify-center gap-2 mt-8 lg:mt-12"
          role="tablist"
          aria-label="Slide indicators"
        >
          {data.indicators.map((dot) => (
            <span
              key={dot.id}
              role="tab"
              aria-selected={dot.active}
              aria-label={`Slide ${dot.id}`}
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
    </section>
  );
}
