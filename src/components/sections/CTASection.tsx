// Server Component.
import Button from "@/src/components/ui/Button";
import type { CTAData } from "@/src/types/landing-page";

interface CTASectionProps {
  data: CTAData;
}

/**
 * Final conversion CTA section.
 * Background: Silver (#F5F7FA).
 * All content from CTAData prop.
 */
export default function CTASection({ data }: CTASectionProps) {
  return (
    <section
      id="cta"
      aria-label="Get a demo"
      style={{ backgroundColor: "var(--color-neutral-silver)" }}
    >
      <div className="mx-auto max-w-content px-6 md:px-12 lg:px-[144px] py-12">
        <div className="flex flex-col items-center text-center gap-8">
          <h2
            className="text-neutral-black font-semibold max-w-lg"
            style={{
              fontSize: "var(--font-size-h1)",
              lineHeight: "var(--line-height-h1)",
            }}
          >
            {data.headlinePart1}{" "}
            {data.headlinePart2}
          </h2>

          <Button
            label={data.button.label}
            href={data.button.href}
            variant="primary"
            size="lg"
            showArrow
          />
        </div>
      </div>
    </section>
  );
}
