"use client";
// Isolated client component for the mobile hamburger toggle.
// This keeps Header.tsx a Server Component.
import { useState } from "react";
import Link from "next/link";
import type { NavData } from "@/src/types/landing-page";

interface MobileMenuProps {
  links: NavData["links"];
  actions: NavData["actions"];
}

export default function MobileMenu({ links, actions }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="lg:hidden flex flex-col justify-center gap-[5px] p-2 -mr-1"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
      >
        <span
          className={`block w-6 h-0.5 bg-neutral-dgrey transition-transform duration-200 ${open ? "translate-y-[7px] rotate-45" : ""}`}
        />
        <span
          className={`block w-6 h-0.5 bg-neutral-dgrey transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
        />
        <span
          className={`block w-6 h-0.5 bg-neutral-dgrey transition-transform duration-200 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
        />
      </button>

      {/* Dropdown drawer */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-neutral-silver shadow-card-hover z-40 py-4 px-6 border-t border-neutral-greyblue/20">
          <ul className="flex flex-col gap-1 list-none mb-4">
            {links.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-neutral-dgrey hover:text-brand-primary transition-colors duration-200"
                  style={{ fontSize: "var(--font-size-body2)" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3 pt-3 border-t border-neutral-greyblue/20">
            <Link
              href={actions.login.href}
              onClick={() => setOpen(false)}
              className="text-brand-primary font-medium"
              style={{ fontSize: "var(--font-size-body2)" }}
            >
              {actions.login.label}
            </Link>
            <Link
              href={actions.signup.href}
              onClick={() => setOpen(false)}
              className="bg-brand-primary text-white px-5 py-2 rounded-[var(--radius-btn)] font-medium text-sm hover:bg-brand-shade-1 transition-colors duration-200"
            >
              {actions.signup.label}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
