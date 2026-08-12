// Server Component.
import Button from "@/src/components/ui/Button";
import type { CTAData } from "@/src/types/landing-page";

interface CTASectionProps {
  data: CTAData;
}

export default function CTASection({ data }: CTASectionProps) {
  return (
    <section
      id="cta"
      aria-label="Get a demo"
      style={{ backgroundColor: "var(--color-neutral-silver)" }}
    >
      <div
        className="mx-auto px-4 sm:px-6 md:px-12 lg:px-[144px] py-10 sm:py-14 md:py-20"
        style={{ maxWidth: "calc(var(--max-width-content) + 288px)" }}
      >
        <div className="flex flex-col items-center text-center gap-6 sm:gap-8">
          <h2
            className="font-semibold max-w-[640px] text-center"
            style={{
              color: "var(--color-neutral-black)",
              fontSize: "clamp(1.75rem, 4.5vw, var(--font-size-h1))",
              lineHeight: "var(--line-height-h1)",
            }}
          >
            {data.headlinePart1}{" "}
            <span className="block">{data.headlinePart2}</span>
          </h2>

          <Button
            label={data.button.label}
            href={data.button.href}
            variant="primary"
            size="lg"
            showArrow={true}
          />
        </div>
      </div>
    </section>
  );
}
