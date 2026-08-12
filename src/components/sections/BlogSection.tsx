// Server Component.
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/src/components/ui/SectionHeader";
import type { BlogData } from "@/src/types/landing-page";

interface BlogSectionProps {
  data: BlogData;
}

export default function BlogSection({ data }: BlogSectionProps) {
  return (
    <section id="blog" aria-label="Community Updates" className="bg-white">
      <div
        className="mx-auto px-6 md:px-12 lg:px-[144px] py-12 md:py-16 lg:py-20"
        style={{ maxWidth: "calc(var(--max-width-content) + 288px)" }}
      >
        <div className="flex flex-col items-center gap-10 md:gap-14">
          <SectionHeader title={data.title} subtitle={data.subtitle} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 w-full pb-8">
            {data.articles.map((article) => (
              <article
                key={article.id}
                className="flex flex-col items-center relative"
              >
                {/* Article image */}
                <div className="relative w-full h-[286px] rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={article.image.src}
                    alt={article.image.alt}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>

                {/* Overlapping text container */}
                <div
                  className="relative w-[90%] -mt-24 p-4 md:p-5 lg:p-6 bg-[#F5F7FA] rounded-lg text-center flex flex-col items-center justify-between gap-4 min-h-[176px] transition-shadow duration-300 hover:shadow-card-hover"
                  style={{ boxShadow: "var(--shadow-card-hover)" }}
                >
                  <h3
                    className="font-semibold text-center"
                    style={{
                      color: "var(--color-neutral-dgrey)",
                      fontSize: "var(--font-size-h4)",
                      lineHeight: "var(--line-height-h4)",
                    }}
                  >
                    {article.title}
                  </h3>

                  <Link
                    href={article.link.href}
                    className="inline-flex items-center gap-2 font-semibold transition-colors duration-200 hover:text-brand-shade-2 mt-auto"
                    style={{
                      color: "var(--color-brand-primary)",
                      fontSize: "var(--font-size-body1)",
                    }}
                  >
                    {article.link.label}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
