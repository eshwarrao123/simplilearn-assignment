/**
 * Merges an arbitrary list of class-name values into a single string,
 * filtering out falsy entries (undefined, null, false, "").
 *
 * Intentionally dependency-free — no clsx or tailwind-merge needed
 * for this static landing page.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
