// Server Component.
import Image from "next/image";
import SectionHeader from "@/src/components/ui/SectionHeader";
import type { ClientsData } from "@/src/types/landing-page";

interface ClientShowcaseProps {
  data: ClientsData;
}

/**
 * Social proof logo bar.
 * Background: White.
 * All content from ClientsData prop.
 */
export default function ClientShowcase({ data }: ClientShowcaseProps) {
  return (
    <section id="clients" aria-label="Our Clients" className="bg-neutral-white">
      <div className="mx-auto max-w-content px-6 md:px-12 lg:px-[144px] py-10">
        <div className="flex flex-col items-center gap-10">
          <SectionHeader title={data.title} subtitle={data.subtitle} />

          <div
            className="flex flex-wrap items-center justify-center gap-10 md:gap-12 w-full"
            role="list"
            aria-label="Client logos"
          >
            {data.logos.map((logo) => (
              <div key={logo.id} role="listitem">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={48}
                  className="object-contain h-10 w-auto opacity-80 hover:opacity-100 transition-opacity duration-200 grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
