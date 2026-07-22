import type { CSSProperties, ReactNode } from "react";

export type ShapeName = "circle" | "cross" | "flower" | "star";

type BrandShapeProps = {
  name: ShapeName;
  className?: string;
  style?: CSSProperties;
};

/**
 * Evernote brand shape elements — flat fills via currentColor.
 * Place absolutely in section/box corners at low opacity.
 */
export default function BrandShape({
  name,
  className = "",
  style,
}: BrandShapeProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={style}
      aria-hidden
      focusable="false"
    >
      {shapes[name]}
    </svg>
  );
}

const shapes: Record<ShapeName, ReactNode> = {
  circle: <circle cx="50" cy="50" r="44" fill="currentColor" />,

  /* Plus with capsule arms */
  cross: (
    <path
      fill="currentColor"
      d="M40 8c0-4.4 3.6-8 8-8h4c4.4 0 8 3.6 8 8v24h24c4.4 0 8 3.6 8 8v4c0 4.4-3.6 8-8 8H60v24c0 4.4-3.6 8-8 8h-4c-4.4 0-8-3.6-8-8V52H16c-4.4 0-8-3.6-8-8v-4c0-4.4 3.6-8 8-8h24V8Z"
    />
  ),

  /* Butterfly / four-lobe flower from the brand kit */
  flower: (
    <path
      fill="currentColor"
      d="M50 22c6.5-12 24-14 34-5 10 9 8 26-3 35 11 9 13 26 3 35-10 9-27.5 7-34-5-6.5 12-24 14-34 5-10-9-8-26 3-35-11-9-13-26-3-35 10-9 27.5-7 34 5Z"
    />
  ),

  /* Six-ray asterisk star */
  star: (
    <path
      fill="currentColor"
      d="M50 2l5.2 36.2L90 28.5 62.5 50 90 71.5 55.2 61.8 50 98l-5.2-36.2L10 71.5 37.5 50 10 28.5l34.8 9.7Z"
    />
  ),
};
