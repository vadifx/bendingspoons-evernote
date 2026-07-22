import Image from "next/image";
import Button from "@/components/ui/Button";

export default function PersonalHero() {
  return (
    <section className="px-2 pt-2 md:px-3">
      <div className="relative mx-auto max-w-[1320px] overflow-hidden rounded-panel bg-bg-secondary px-5 pb-[calc(11rem+25px)] pt-12 md:rounded-panel-lg md:px-10 md:pb-52 md:pt-16 lg:min-h-[560px] lg:px-16 lg:pb-24 lg:pt-24">
        <div className="relative z-10 max-w-[540px] animate-fade-up text-left">
          <p className="text-[14px] font-medium text-brand-green">
            Evernote Personal
          </p>
          <h1 className="heading-display mt-3 text-balance">
            Your second brain, without limits
          </h1>
          <p className="mt-6 text-[16px] leading-[1.55] text-text-secondary md:text-[18px]">
            Every note on every device, available offline, with AI-powered
            search and 100&nbsp;GB of monthly uploads. Everything you already
            love about Evernote, unlocked. Only{" "}
            <span className="font-semibold text-text-primary">€7.99/month</span>.
          </p>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button variant="primary" size="lg" upgrade>
              Continue without limits
            </Button>
            <a
              href="#compare"
              className="text-[14px] text-text-tertiary underline underline-offset-2 transition-colors hover:text-text-primary"
            >
              Compare plans
            </a>
          </div>

          <p className="mt-5 hidden text-[13px] text-text-muted lg:block">
            Trusted by 250 million users worldwide
          </p>
        </div>

        {/* Always stuck to bottom-right corner of the panel */}
        <div className="pointer-events-none absolute bottom-0 right-0 w-[78%] max-w-[420px] animate-fade-up [animation-delay:120ms] sm:w-[68%] sm:max-w-[520px] md:w-[62%] md:max-w-[640px] lg:max-w-[760px]">
          <Image
            src="/photoo.png"
            alt="Evernote Personal: notes, tasks, and AI on every device"
            width={1243}
            height={948}
            priority
            className="h-auto w-full object-contain object-right-bottom"
          />
        </div>
      </div>
    </section>
  );
}
