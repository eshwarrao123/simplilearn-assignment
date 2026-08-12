// Server Component.
import Image from "next/image";
import Button from "@/src/components/ui/Button";
import type { TestimonialData } from "@/src/types/landing-page";

interface TestimonialSectionProps {
  data: TestimonialData;
}

/**
 * Testimonial section — Tesla case study.
 * Layout: 2-column (image left, quote right) on desktop.
 * Background: Silver (#F5F7FA).
 * All content from TestimonialData prop.
 */
export default function TestimonialSection({ data }: TestimonialSectionProps) {
  return (
    <section
      id="testimonial"
      aria-label="Testimonial"
      style={{ backgroundColor: "var(--color-neutral-silver)" }}
    >
      <div className="mx-auto max-w-content px-6 md:px-12 lg:px-[144px] py-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Tesla image */}
          <div className="flex-shrink-0">
            <Image
              src={data.image.src}
              alt={data.image.alt}
              width={data.image.width}
              height={data.image.height}
              className="rounded-[var(--radius-card)] object-cover"
            />
          </div>

          {/* Quote column */}
          <div className="flex flex-col gap-6 max-w-lg">
            <blockquote>
              <p
                className="text-neutral-grey"
                style={{
                  fontSize: "var(--font-size-body2)",
                  lineHeight: "var(--line-height-body2)",
                }}
              >
                {data.quote}
              </p>
            </blockquote>

            <div className="flex flex-col gap-1">
              <p
                className="text-brand-primary font-semibold"
                style={{
                  fontSize: "var(--font-size-h4)",
                  lineHeight: "var(--line-height-h4)",
                }}
              >
                {data.authorName}
              </p>
              <p
                className="text-neutral-grey"
                style={{
                  fontSize: "var(--font-size-body3)",
                  lineHeight: "var(--line-height-body3)",
                }}
              >
                {data.authorRole}
              </p>
            </div>

            {/* Client logo strip + link */}
            <div className="flex flex-col gap-4">
              <div
                className="flex flex-wrap items-center gap-6"
                role="list"
                aria-label="Featured customers"
              >
                {data.clientLogos.map((logo) => (
                  <div key={logo.id} role="listitem">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={80}
                      height={32}
                      className="object-contain h-8 w-auto opacity-70 hover:opacity-100 transition-opacity duration-200"
                    />
                  </div>
                ))}
              </div>

              <Button
                label={data.meetAllLink.label}
                href={data.meetAllLink.href}
                variant="link"
                showArrow
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
