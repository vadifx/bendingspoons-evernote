import type { ReactNode } from "react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

type Props = {
  badge: { label: string; tone: "pink" | "orange" | "yellow" | "purple" | "teal" };
  title: string;
  body: string;
  visual: ReactNode;
  reverse?: boolean;
  cta?: string;
  ctaHref?: string;
  showCta?: boolean;
};

/**
 * Pattern "FeatureSplit": pannello cream con bordo hairline,
 * copy (badge + H2 + body + CTA) e collage visivo, orientamento alternabile.
 * DESIGN_SYSTEM.md §8.7 / Appendice E.
 */
export default function FeatureSplit({
  badge,
  title,
  body,
  visual,
  reverse = false,
  cta = "Provalo gratis",
  ctaHref = "#",
  showCta = true,
}: Props) {
  return (
    <section className="px-2 py-3 md:px-3 md:py-4">
      <div className="mx-auto max-w-[1320px] rounded-panel border border-stroke-cards bg-bg-secondary px-6 py-12 md:rounded-panel-lg md:px-14 md:py-20 lg:px-20 lg:py-24">
        <div
          className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div className="min-w-0">{visual}</div>
          <div className="max-w-[440px]">
            <Badge tone={badge.tone}>{badge.label}</Badge>
            <h2 className="heading-3 mt-4 text-balance">{title}</h2>
            <p className="mt-4 text-[15px] leading-[1.6] text-text-secondary md:text-[16px]">
              {body}
            </p>
            {showCta && (
              <div className="mt-8">
                <Button
                  variant="primary"
                  size="md"
                  href={ctaHref}
                  className="px-8 py-3"
                >
                  {cta}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
