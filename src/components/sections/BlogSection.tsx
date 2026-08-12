// Server Component.
import Image from "next/image";
import SectionHeader from "@/src/components/ui/SectionHeader";
import Button from "@/src/components/ui/Button";
import type { BlogData } from "@/src/types/landing-page";

interface BlogSectionProps {
  data: BlogData;
}

/**
 * Blog / Community Updates section — 3-column card grid.
 * Cards have a photo on top and an overlapping white text box below.
 * Background: White.
 * All content from BlogData prop.
 */
export default function BlogSection({ data }: BlogSectionProps) {
  return (
    <section id="blog" aria-label="Community Updates" className="bg-neutral-white">
      <div className="mx-auto max-w-content px-6 md:px-12 lg:px-[144px] py-12">
        <div className="flex flex-col items-center gap-12">
          <SectionHeader
            title={data.title}
            subtitle={data.subtitle}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {data.articles.map((article) => (
              <article
                key={article.id}
                className="flex flex-col"
              >
                {/* Photo */}
                <div className="w-full overflow-hidden rounded-t-[var(--radius-card)]">
                  <Image
                    src={article.image.src}
                    alt={article.image.alt}
                    width={article.image.width}
                    height={article.image.height}
                    className="w-full h-[286px] object-cover"
                  />
                </div>

                {/* Overlapping text box */}
                <div
                  className="bg-neutral-white -mt-10 mx-4 relative z-10 flex flex-col gap-4 p-4 rounded-[var(--radius-card)]"
                  style={{ boxShadow: "var(--shadow-card-hover)" }}
                >
                  <h3
                    className="text-neutral-black font-semibold"
                    style={{
                      fontSize: "var(--font-size-h4)",
                      lineHeight: "var(--line-height-h4)",
                    }}
                  >
                    {article.title}
                  </h3>

                  <Button
                    label={article.link.label}
                    href={article.link.href}
                    variant="link"
                    showArrow
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
