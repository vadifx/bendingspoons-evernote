import Button from "@/components/ui/Button";
import BrandShape from "@/components/ui/BrandShape";

export default function FinalCta() {
  return (
    <section className="px-2 py-3 md:px-3 md:py-4">
      <div className="relative mx-auto max-w-[1320px] overflow-hidden rounded-panel bg-bg-secondary px-6 py-16 text-center md:rounded-panel-lg md:px-14 md:py-24">
        <BrandShape
          name="star"
          className="pointer-events-none absolute -left-14 -top-14 size-44 text-accent-purple opacity-[0.22] md:-left-16 md:-top-16 md:size-56"
        />
        <BrandShape
          name="flower"
          className="pointer-events-none absolute -bottom-20 -right-20 size-56 text-brand-lime opacity-[0.2] md:-bottom-24 md:-right-24 md:size-72"
        />
        <BrandShape
          name="circle"
          className="pointer-events-none absolute -right-10 top-6 size-28 text-accent-teal opacity-[0.14] md:size-32"
        />

        <div className="relative">
          <h2 className="heading-2 mx-auto max-w-[640px] text-balance">
            Your notes are already there. Keep going.
          </h2>
          <p className="mx-auto mt-5 max-w-[480px] text-[16px] leading-[1.55] text-text-secondary md:text-[17px]">
            Unlock every device, offline access, and AI-powered search, and keep
            saving without interruptions. Only €7.99/month.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              variant="primary"
              size="lg"
              upgrade
              fullWidthMobile
            >
              Continue without limits
            </Button>
            <a
              href="#"
              className="text-[14px] text-text-tertiary underline underline-offset-2 transition-colors hover:text-text-primary"
            >
              Stay on Free
            </a>
          </div>
          <p className="mt-5 hidden text-[13px] text-text-muted lg:block">
            Trusted by 250 million users worldwide
          </p>
        </div>
      </div>
    </section>
  );
}
