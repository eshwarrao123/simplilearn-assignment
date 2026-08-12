// Server Component.
import Image from "next/image";
import SectionHeader from "@/src/components/ui/SectionHeader";
import type { ClientsData } from "@/src/types/landing-page";

interface ClientShowcaseProps {
  data: ClientsData;
}

export default function ClientShowcase({ data }: ClientShowcaseProps) {
  return (
    <section
      id="clients"
      aria-label="Our Clients"
      className="bg-white border-b border-neutral-silver"
    >
      <div
        className="mx-auto px-6 md:px-12 lg:px-[144px] py-10 md:py-12"
        style={{ maxWidth: "calc(var(--max-width-content) + 288px)" }}
      >
        <div className="flex flex-col items-center gap-8 md:gap-10">
          <SectionHeader title={data.title} subtitle={data.subtitle} />

          <div
            className="flex flex-wrap items-center justify-center gap-8 md:gap-10 lg:gap-14 w-full"
            role="list"
            aria-label="Client logos"
          >
            {data.logos.map((logo) => (
              <div
                key={logo.id}
                role="listitem"
                className="flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={40}
                  unoptimized
                  className="h-8 md:h-10 w-auto object-contain transition-transform duration-200 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
