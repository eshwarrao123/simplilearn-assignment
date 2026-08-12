// Server Component.
import Image from "next/image";
import Link from "next/link";
import type { TestimonialData } from "@/src/types/landing-page";

interface TestimonialSectionProps {
  data: TestimonialData;
}

export default function TestimonialSection({ data }: TestimonialSectionProps) {
  return (
    <section
      id="testimonial"
      aria-label="Customer testimonial"
      style={{ backgroundColor: "var(--color-neutral-silver)" }}
    >
      <div
        className="mx-auto px-4 sm:px-6 md:px-12 lg:px-[144px] py-10 sm:py-12 md:py-16 lg:py-20"
        style={{ maxWidth: "calc(var(--max-width-content) + 288px)" }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">

          {/* Tesla image */}
          <div className="flex-shrink-0 w-full max-w-[220px] sm:max-w-[280px] lg:max-w-[326px]">
            <Image
              src={data.image.src}
              alt={data.image.alt}
              width={data.image.width}
              height={data.image.height}
              unoptimized
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>

          {/* Quote column */}
          <div className="flex flex-col gap-6 flex-1 w-full">
            <blockquote>
              <p
                style={{
                  color: "var(--color-neutral-black)",
                  fontSize: "var(--font-size-body2)",
                  lineHeight: "1.8",
                }}
              >
                {data.quote}
              </p>
            </blockquote>

            <div className="flex flex-col gap-1">
              <p
                className="font-semibold"
                style={{
                  color: "var(--color-brand-primary)",
                  fontSize: "var(--font-size-h4)",
                  lineHeight: "var(--line-height-h4)",
                }}
              >
                {data.authorName}
              </p>
              <p
                style={{
                  color: "var(--color-neutral-grey)",
                  fontSize: "var(--font-size-body3)",
                  lineHeight: "var(--line-height-body3)",
                }}
              >
                {data.authorRole}
              </p>
            </div>

            {/* Divider */}
            <hr style={{ borderColor: "var(--color-neutral-greyblue)", opacity: 0.4 }} />

            {/* Client logo strip + meet-all link */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-2">
              <div
                className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 lg:gap-8"
                role="list"
                aria-label="Featured clients"
              >
                {data.clientLogos.map((logo) => (
                  <div key={logo.id} role="listitem">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={80}
                      height={32}
                      unoptimized
                      className="h-6 sm:h-8 w-auto object-contain transition-transform duration-200 hover:scale-105"
                    />
                  </div>
                ))}
              </div>

              <Link
                href={data.meetAllLink.href}
                className="inline-flex items-center gap-2 font-semibold flex-shrink-0 transition-colors duration-200 hover:text-brand-shade-2"
                style={{
                  color: "var(--color-brand-primary)",
                  fontSize: "var(--font-size-body1)",
                }}
              >
                {data.meetAllLink.label}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
