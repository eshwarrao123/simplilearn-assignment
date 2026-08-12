// Server Component.
// Reusable for BOTH Feature 1 and Feature 2.
// imagePosition: "left" → illustration left, text right.
// imagePosition: "right" → text left, illustration right.
import Image from "next/image";
import Button from "@/src/components/ui/Button";
import type { FeatureSectionData } from "@/src/types/landing-page";

interface FeatureSectionProps {
  data: FeatureSectionData;
}

export default function FeatureSection({ data }: FeatureSectionProps) {
  const imageLeft = data.imagePosition === "left";

  return (
    <section id={data.id} aria-label={data.title} className="bg-white">
      <div
        className="mx-auto px-6 md:px-12 lg:px-[144px] py-12 md:py-16 lg:py-20"
        style={{ maxWidth: "calc(var(--max-width-content) + 288px)" }}
      >
        <div
          className={`flex flex-col ${imageLeft ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-10 lg:gap-16`}
        >
          {/* Illustration */}
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-none lg:flex-1 flex justify-center">
            <Image
              src={data.image.src}
              alt={data.image.alt}
              width={data.image.width}
              height={data.image.height}
              unoptimized
              className="w-full h-auto max-w-[442px]"
            />
          </div>

          {/* Text content */}
          <div className="flex flex-col gap-6 w-full lg:flex-1">
            <h2
              className="font-semibold"
              style={{
                color: "var(--color-neutral-black)",
                fontSize: "clamp(1.5rem, 3vw, var(--font-size-h2))",
                lineHeight: "var(--line-height-h2)",
              }}
            >
              {data.title}
            </h2>

            <p
              style={{
                color: "var(--color-neutral-grey)",
                fontSize: "var(--font-size-body3)",
                lineHeight: "var(--line-height-body3)",
              }}
            >
              {data.body}
            </p>

            <div>
              <Button
                label={data.cta.label}
                href={data.cta.href}
                variant="primary"
                size="md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
