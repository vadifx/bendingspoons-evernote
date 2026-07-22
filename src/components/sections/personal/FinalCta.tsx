import Button from "@/components/ui/Button";

export default function FinalCta() {
  return (
    <section className="px-2 py-3 md:px-3 md:py-4">
      <div className="mx-auto max-w-[1320px] rounded-panel bg-bg-secondary px-6 py-16 text-center md:rounded-panel-lg md:px-14 md:py-24">
        <h2 className="heading-2 mx-auto max-w-[640px] text-balance">
          Your notes are already there. Keep going.
        </h2>
        <p className="mx-auto mt-5 max-w-[480px] text-[16px] leading-[1.55] text-text-secondary md:text-[17px]">
          Unlock every device, offline access, and AI-powered search — and keep
          saving without interruptions. Only €7.99/month.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button variant="primary" size="lg" href="#upgrade" fullWidthMobile>
            Continue without limits
          </Button>
          <a
            href="#"
            className="text-[14px] text-text-tertiary underline underline-offset-2 transition-colors hover:text-text-primary"
          >
            Stay on Free
          </a>
        </div>
        <p className="mt-5 text-[13px] text-text-muted">
          Trusted by 250 million users worldwide
        </p>
      </div>
    </section>
  );
}
