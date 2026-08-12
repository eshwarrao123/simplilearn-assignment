// Server Component.
import SectionHeader from "@/src/components/ui/SectionHeader";
import IconContainer from "@/src/components/ui/IconContainer";
import type { CommunityData } from "@/src/types/landing-page";

interface CommunitySectionProps {
  data: CommunityData;
}

/**
 * Community target audience section — 3-column card grid.
 * Background: White.
 * All content from CommunityData prop.
 */
export default function CommunitySection({ data }: CommunitySectionProps) {
  return (
    <section id="community" aria-label="Community" className="bg-neutral-white">
      <div className="mx-auto max-w-content px-6 md:px-12 lg:px-[144px] py-12">
        <div className="flex flex-col items-center gap-12">
          <SectionHeader title={data.title} subtitle={data.subtitle} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {data.cards.map((card) => (
              <article
                key={card.id}
                className="flex flex-col items-center text-center gap-5 p-8 bg-neutral-white rounded-[var(--radius-card)]"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <IconContainer icon={card.icon} size={80} />

                <h3
                  className="text-neutral-black font-semibold"
                  style={{
                    fontSize: "var(--font-size-h3)",
                    lineHeight: "var(--line-height-h3)",
                  }}
                >
                  {card.title}
                </h3>

                <p
                  className="text-neutral-grey"
                  style={{
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
