// Server Component.
import Image from "next/image";
import Link from "next/link";
import type { FooterData } from "@/src/types/landing-page";

interface FooterProps {
  data: FooterData;
}

export default function Footer({ data }: FooterProps) {
  return (
    <footer style={{ backgroundColor: "var(--color-brand-secondary)" }}>
      <div
        className="mx-auto px-4 sm:px-6 md:px-12 lg:px-[144px] py-12 sm:py-16"
        style={{ maxWidth: "calc(var(--max-width-content) + 288px)" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

          {/* Column 1 — Brand + copyright + socials */}
          <div className="flex flex-col gap-6">
            <Link href="/" aria-label="Nexcent home">
              <Image
                src={data.logo.src}
                alt={data.logo.alt}
                width={data.logo.width}
                height={data.logo.height}
                unoptimized
              />
            </Link>

            <p
              className="whitespace-pre-line leading-relaxed"
              style={{
                color: "var(--color-neutral-greyblue)",
                fontSize: "var(--font-size-body4)",
              }}
            >
              {data.copyright}
            </p>

            <div className="flex items-center gap-3" role="list" aria-label="Social media links">
              {data.socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  role="listitem"
                  aria-label={social.label}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:opacity-80 transition-opacity duration-200"
                  style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
                >
                  <Image
                    src={social.icon}
                    alt={social.label}
                    width={16}
                    height={16}
                    unoptimized
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {data.columns.map((col) => (
            <div key={col.id} className="flex flex-col gap-5">
              <h3
                className="font-semibold"
                style={{
                  color: "var(--color-neutral-white)",
                  fontSize: "var(--font-size-h4)",
                  lineHeight: "var(--line-height-h4)",
                }}
              >
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-3 list-none m-0 p-0">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition-colors duration-200 hover:text-white"
                      style={{
                        color: "var(--color-neutral-greyblue)",
                        fontSize: "var(--font-size-body3)",
                        lineHeight: "var(--line-height-body3)",
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="flex flex-col gap-5">
            <h3
              className="font-semibold"
              style={{
                color: "var(--color-neutral-white)",
                fontSize: "var(--font-size-h4)",
                lineHeight: "var(--line-height-h4)",
              }}
            >
              {data.newsletter.heading}
            </h3>

            <form
              className="flex items-center rounded-[var(--radius-btn)] overflow-hidden"
              style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
              noValidate
            >
              <label htmlFor="newsletter-email" className="sr-only">
                {data.newsletter.placeholder}
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder={data.newsletter.placeholder}
                className="flex-1 min-w-0 bg-transparent px-4 py-3 outline-none placeholder:opacity-60"
                style={{
                  color: "var(--color-neutral-silver)",
                  fontSize: "var(--font-size-body3)",
                }}
              />
              <button
                type="submit"
                aria-label={data.newsletter.submitLabel}
                className="flex items-center justify-center px-3 py-3 flex-shrink-0 hover:opacity-75 transition-opacity duration-200"
                style={{ backgroundColor: "var(--color-brand-primary)" }}
              >
                <Image
                  src={data.newsletter.submitIcon}
                  alt={data.newsletter.submitLabel}
                  width={18}
                  height={18}
                  unoptimized
                />
              </button>
            </form>
          </div>

        </div>
      </div>
    </footer>
  );
}
