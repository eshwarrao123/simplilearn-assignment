// Server Component.
// Used for BOTH Feature 1 and Feature 2 — imagePosition controls left/right layout.
import Image from "next/image";
import Button from "@/src/components/ui/Button";
import type { FeatureSectionData } from "@/src/types/landing-page";

interface FeatureSectionProps {
  data: FeatureSectionData;
}

/**
 * Reusable 2-column feature section.
 * imagePosition: "left" → illustration on left, text on right.
 * imagePosition: "right" → text on left, illustration on right.
 * Background: White.
 * All content from FeatureSectionData prop.
 */
export default function FeatureSection({ data }: FeatureSectionProps) {
  const isImageLeft = data.imagePosition === "left";

  return (
    <section
      id={data.id}
      aria-label={data.title}
      className="bg-neutral-white"
    >
      <div className="mx-auto max-w-content px-6 md:px-12 lg:px-[144px] py-12">
        <div
          className={`flex flex-col ${
            isImageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
          } items-center gap-16`}
        >
          {/* Illustration */}
          <div className="flex-shrink-0 w-full max-w-sm lg:max-w-none lg:w-auto">
            <Image
              src={data.image.src}
              alt={data.image.alt}
              width={data.image.width}
              height={data.image.height}
              className="w-full h-auto"
            />
          </div>

          {/* Text content */}
          <div className="flex flex-col gap-6 max-w-lg">
            <h2
              className="text-neutral-black font-semibold"
              style={{
                fontSize: "var(--font-size-h2)",
                lineHeight: "var(--line-height-h2)",
              }}
            >
              {data.title}
            </h2>

            <p
              className="text-neutral-grey"
              style={{
                fontSize: "var(--font-size-body3)",
                lineHeight: "var(--line-height-body3)",
              }}
            >
              {data.body}
            </p>

            <Button
              label={data.cta.label}
              href={data.cta.href}
              variant="primary"
              size="md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
