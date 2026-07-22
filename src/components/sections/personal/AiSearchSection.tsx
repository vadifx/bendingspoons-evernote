import Button from "@/components/ui/Button";
import BrandShape from "@/components/ui/BrandShape";
import SearchVisual from "@/components/visuals/SearchVisual";
import { SparkleIcon } from "@/components/ui/icons";

const points = [
  "Ask in your own words, with no exact titles needed",
  "Surfaces the right note among thousands, in seconds",
  "Gets more useful as your archive grows",
];

export default function AiSearchSection() {
  return (
    <section className="relative overflow-hidden border-y border-black bg-bg-dark py-16 text-white md:py-24">
      {/* Gradient blobs — left lime matches button, right purple accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full opacity-45 blur-[100px]"
        style={{
          background:
            "radial-gradient(closest-side, #94e130 0%, #94e13088 45%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 h-[460px] w-[460px] rounded-full opacity-50 blur-[100px]"
        style={{
          background:
            "radial-gradient(closest-side, #7c8eff 0%, #d9b6fd 60%, transparent 100%)",
        }}
      />

      <BrandShape
        name="star"
        className="pointer-events-none absolute -right-48 -top-28 hidden size-[26rem] text-accent-purple opacity-[0.16] lg:block"
      />
      <BrandShape
        name="cross"
        className="pointer-events-none absolute -bottom-40 -left-44 hidden size-[24rem] rotate-12 text-brand-lime opacity-[0.14] lg:block"
      />

      <div className="relative mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="max-w-[480px] px-8 sm:px-10 lg:px-0">
          <p className="flex items-center gap-2 text-[14px] font-medium text-brand-lime">
            <SparkleIcon className="size-3.5" /> AI features
          </p>
          <h2 className="heading-2 mt-4 text-balance text-white">
            Search that finds what you mean
          </h2>
          <p className="mt-5 text-[16px] leading-[1.6] text-white/85">
            AI-powered search doesn&apos;t just match keywords. It understands
            what you&apos;re looking for and brings back the right note, even
            when you only remember a detail.
          </p>

          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 text-[15px] text-white/90"
              >
                <span
                  className="mt-1 flex size-4 shrink-0 items-center justify-center rounded-full bg-brand-lime"
                  aria-hidden
                >
                  <svg viewBox="0 0 10 10" className="size-2.5" fill="none">
                    <path
                      d="m2 5 2 2 4-4"
                      stroke="#141414"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button variant="lime" size="md" upgrade className="px-8 py-3">
              Unlock AI search
            </Button>
          </div>
          <p className="mt-4 text-[13px] text-white/60">
            Included in Personal. Not available on Free.
          </p>
        </div>

        <div className="min-w-0 px-5 lg:px-0">
          <SearchVisual />
        </div>
      </div>
    </section>
  );
}
