// Server Component.
import Image from "next/image";
import Link from "next/link";
import Button from "@/src/components/ui/Button";
import MobileMenu from "@/src/components/layout/MobileMenu";
import type { NavData } from "@/src/types/landing-page";

interface HeaderProps {
  data: NavData;
}

/**
 * Site-wide sticky navigation bar.
 * Desktop: logo | nav links | login + sign up
 * Mobile: logo | hamburger (MobileMenu — client component)
 */
export default function Header({ data }: HeaderProps) {
  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{ backgroundColor: "var(--color-neutral-silver)" }}
    >
      <div
        className="mx-auto px-6 md:px-12 lg:px-[144px]"
        style={{ maxWidth: "calc(var(--max-width-content) + 288px)" }}
      >
        <nav
          className="relative flex h-[84px] items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link href="/" aria-label="Nexcent home" className="flex-shrink-0">
            <Image
              src={data.logo.src}
              alt={data.logo.alt}
              width={data.logo.width}
              height={data.logo.height}
              priority
              unoptimized
            />
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
            {data.links.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="font-medium transition-colors duration-200 hover:text-brand-primary"
                  style={{
                    color: "var(--color-neutral-dgrey)",
                    fontSize: "var(--font-size-body2)",
                    lineHeight: "var(--line-height-body2)",
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA actions */}
          <div className="hidden lg:flex items-center gap-6 flex-shrink-0">
            <Button
              label={data.actions.login.label}
              href={data.actions.login.href}
              variant="link"
              showArrow={false}
            />
            <Button
              label={data.actions.signup.label}
              href={data.actions.signup.href}
              variant="primary"
              size="sm"
            />
          </div>

          {/* Mobile hamburger — client component */}
          <MobileMenu links={data.links} actions={data.actions} />
        </nav>
      </div>
    </header>
  );
}
