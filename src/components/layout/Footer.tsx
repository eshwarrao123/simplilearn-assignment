// Server Component — purely presentational.
import Image from "next/image";
import Link from "next/link";
import type { FooterData } from "@/src/types/landing-page";

interface FooterProps {
  data: FooterData;
}

/**
 * Site-wide footer.
 * Renders brand info, social links, nav columns, and newsletter form.
 * All content passed through `data` prop — no hardcoded copy.
 *
 * Newsletter form submit will need a Server Action or client handler in a
 * later phase. The input is rendered as a static form shell here.
 */
export default function Footer({ data }: FooterProps) {
  return (
    <footer
      className="w-full"
      style={{ backgroundColor: "var(--color-brand-secondary)" }}
    >
      <div className="mx-auto max-w-content px-6 md:px-12 lg:px-[144px] py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 — Brand & Socials */}
          <div className="flex flex-col gap-6">
            <Link href="/">
              <Image
                src={data.logo.src}
                alt={data.logo.alt}
                width={data.logo.width}
                height={data.logo.height}
              />
            </Link>

            <p
              className="text-neutral-silver whitespace-pre-line"
              style={{
                fontSize: "var(--font-size-body4)",
                lineHeight: "var(--line-height-body4)",
              }}
            >
              {data.copyright}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {data.socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-silver/10 hover:bg-neutral-silver/20 transition-colors duration-200"
                >
                  <Image
                    src={social.icon}
                    alt={social.label}
                    width={16}
                    height={16}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Columns 2 & 3 — Link groups */}
          {data.columns.map((col) => (
            <div key={col.id} className="flex flex-col gap-5">
              <h3
                className="text-neutral-white font-semibold"
                style={{
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
                      className="text-neutral-greyblue hover:text-neutral-silver transition-colors duration-200"
                      style={{
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

          {/* Column 4 — Newsletter */}
          <div className="flex flex-col gap-5">
            <h3
              className="text-neutral-white font-semibold"
              style={{
                fontSize: "var(--font-size-h4)",
                lineHeight: "var(--line-height-h4)",
              }}
            >
              {data.newsletter.heading}
            </h3>
            <form className="flex items-center rounded-lg overflow-hidden bg-white/10" noValidate>
              <input
                type="email"
                placeholder={data.newsletter.placeholder}
                aria-label={data.newsletter.placeholder}
                className="flex-1 bg-transparent px-4 py-3 text-neutral-silver placeholder-neutral-lgrey outline-none"
                style={{ fontSize: "var(--font-size-body3)" }}
              />
              <button
                type="submit"
                aria-label={data.newsletter.submitLabel}
                className="flex items-center justify-center p-3 hover:bg-white/10 transition-colors duration-200 flex-shrink-0"
              >
                <Image
                  src={data.newsletter.submitIcon}
                  alt={data.newsletter.submitLabel}
                  width={18}
                  height={18}
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
