// Server Component.
import Image from "next/image";
import SectionHeader from "@/src/components/ui/SectionHeader";
import type { CommunityData } from "@/src/types/landing-page";

interface CommunitySectionProps {
  data: CommunityData;
}

export default function CommunitySection({ data }: CommunitySectionProps) {
  return (
    <section id="community" aria-label="Community" className="bg-white">
      <div
        className="mx-auto px-6 md:px-12 lg:px-[144px] py-12 md:py-16 lg:py-20"
        style={{ maxWidth: "calc(var(--max-width-content) + 288px)" }}
      >
        <div className="flex flex-col items-center gap-10 md:gap-14">
          <SectionHeader title={data.title} subtitle={data.subtitle} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
            {data.cards.map((card) => (
              <article
                key={card.id}
                className="flex flex-col items-center text-center gap-5 p-6 lg:p-8 bg-white rounded-[var(--radius-card)] transition-shadow duration-300 hover:shadow-card-hover"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                {/* Icon in Tint-5 container */}
                <div
                  className="flex items-center justify-center rounded-[var(--radius-icon)] w-[65px] h-[56px] flex-shrink-0"
                  style={{ backgroundColor: "var(--color-brand-tint-5)" }}
                >
                  <Image
                    src={card.icon.src}
                    alt={card.icon.alt}
                    width={48}
                    height={48}
                    unoptimized
                    className="w-[48px] h-[48px] object-contain"
                  />
                </div>

                <h3
                  className="font-semibold"
                  style={{
                    color: "var(--color-neutral-black)",
                    fontSize: "var(--font-size-h3)",
                    lineHeight: "var(--line-height-h3)",
                  }}
                >
                  {card.title}
                </h3>

                <p
                  style={{
                    color: "var(--color-neutral-grey)",
                    fontSize: "var(--font-size-body3)",
                    lineHeight: "var(--line-height-body3)",
                  }}
                >
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
