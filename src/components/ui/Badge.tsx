import type { ReactNode } from "react";

type Tone = "pink" | "orange" | "yellow" | "purple" | "teal";

const tones: Record<Tone, string> = {
  pink: "bg-accent-pink",
  orange: "bg-accent-orange",
  yellow: "bg-accent-yellow",
  purple: "bg-accent-purple",
  teal: "bg-accent-teal",
};

export default function Badge({
  tone,
  children,
}: {
  tone: Tone;
  children: ReactNode;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-[6px] px-2.5 py-1 text-[13px] font-medium text-text-primary ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
