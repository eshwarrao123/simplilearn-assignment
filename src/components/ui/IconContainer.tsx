// Server Component — purely presentational.
import Image from "next/image";
import type { IconData } from "@/src/types/landing-page";

interface IconContainerProps {
  icon: IconData;
  /** Container size in pixels. Defaults to 80. */
  size?: number;
}

/**
 * Tint-5 rounded square container for community section icons.
 * Background: #E8F5E9 (brand-tint-5), radius: 18px (radius-icon).
 * All icon data passed via props.
 */
export default function IconContainer({ icon, size = 80 }: IconContainerProps) {
  return (
    <div
      className="bg-brand-tint-5 flex items-center justify-center flex-shrink-0"
      style={{
        width: size,
        height: size,
        borderRadius: "var(--radius-icon)",
      }}
    >
      <Image
        src={icon.src}
        alt={icon.alt}
        width={Math.round(size * 0.55)}
        height={Math.round(size * 0.55)}
      />
    </div>
  );
}
