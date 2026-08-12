// Server Component.
// Mobile nav toggle will eventually require a thin "use client" wrapper for the
// hamburger state — but we keep the layout component itself a Server Component
// and the interactive toggle isolated in a future MobileMenuButton.tsx.
import Image from "next/image";
import Link from "next/link";
import Button from "@/src/components/ui/Button";
import type { NavData } from "@/src/types/landing-page";

interface HeaderProps {
  data: NavData;
}

/**
 * Site-wide sticky navigation bar.
 * Receives all content — logo, nav links, action buttons — through `data` prop.
 * No hardcoded copy.
 */
export default function Header({ data }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-neutral-silver">
      <div className="mx-auto max-w-content px-6 md:px-12 lg:px-[144px]">
        <nav
          className="flex h-[84px] items-center justify-between gap-8"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src={data.logo.src}
              alt={data.logo.alt}
              width={data.logo.width}
              height={data.logo.height}
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
            {data.links.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-neutral-dgrey hover:text-brand-primary transition-colors duration-200"
                  style={{
                    fontSize: "var(--font-size-body2)",
                    lineHeight: "var(--line-height-body2)",
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <Button
              label={data.actions.login.label}
              href={data.actions.login.href}
              variant="link"
            />
            <Button
              label={data.actions.signup.label}
              href={data.actions.signup.href}
              variant="primary"
              size="sm"
            />
          </div>

          {/* Mobile hamburger placeholder — will be a "use client" component later */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Open navigation menu"
            type="button"
          >
            <span className="block w-6 h-0.5 bg-neutral-dgrey" />
            <span className="block w-6 h-0.5 bg-neutral-dgrey" />
            <span className="block w-6 h-0.5 bg-neutral-dgrey" />
          </button>
        </nav>
      </div>
    </header>
  );
}
