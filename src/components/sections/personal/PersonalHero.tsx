import Button from "@/components/ui/Button";
import MultiDeviceVisual from "@/components/visuals/MultiDeviceVisual";

export default function PersonalHero() {
  return (
    <section className="px-2 pt-2 md:px-3">
      <div className="rounded-panel bg-bg-secondary px-5 py-14 md:rounded-panel-lg md:px-10 md:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-[540px] animate-fade-up text-center lg:text-left">
            <p className="text-[14px] font-medium text-brand-green">
              Evernote Personal
            </p>
            <h1 className="heading-display mt-3 text-balance">
              Your second brain, without limits
            </h1>
            <p className="mt-6 text-[16px] leading-[1.55] text-text-secondary md:text-[18px]">
              Every note on every device, available offline, with AI-powered
              search and 100&nbsp;GB of monthly uploads. Everything you already
              love about Evernote — unlocked. Only{" "}
              <span className="font-semibold text-text-primary">
                €7.99/month
              </span>
              .
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start sm:justify-center">
              <Button
                variant="primary"
                size="lg"
                href="#upgrade"
                fullWidthMobile
              >
                Continue without limits
              </Button>
              <a
                href="#compare"
                className="text-[14px] text-text-tertiary underline underline-offset-2 transition-colors hover:text-text-primary"
              >
                Compare plans
              </a>
            </div>

            <p className="mt-5 text-[13px] text-text-muted">
              Trusted by 250 million users worldwide
            </p>
          </div>

          <div className="min-w-0 animate-fade-up [animation-delay:120ms]">
            <MultiDeviceVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
