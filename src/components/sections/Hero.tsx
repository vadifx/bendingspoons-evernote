import Image from "next/image";
import Button from "@/components/ui/Button";
import {
  ShareIcon,
  DotsIcon,
  NotebookLineIcon,
} from "@/components/ui/icons";

/** Mockup nota "Tokyo conference plan" — composizione originale in HTML/CSS. */
function NoteMockup() {
  return (
    <div className="mx-auto w-full max-w-[680px] overflow-hidden rounded-t-card bg-white shadow-showcase">
      {/* Barra finestra */}
      <div className="flex items-center gap-3 border-b border-stroke-cards px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-stroke-cards" />
          <span className="size-2.5 rounded-full bg-stroke-cards" />
        </div>
        <div className="flex min-w-0 items-center gap-1.5 rounded-[6px] bg-bg-primary px-2.5 py-1 text-[11px] text-text-tertiary">
          <NotebookLineIcon className="size-3 shrink-0" />
          <span className="truncate">Tokyo conference ›</span>
          <span className="truncate font-medium text-text-primary">
            Tokyo conference plan ✕
          </span>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className="rounded-[5px] bg-accent-blue px-3 py-1 text-[11px] font-medium text-white">
            Share
          </span>
          <ShareIcon className="size-3.5 text-text-tertiary" />
          <DotsIcon className="size-3.5 text-text-tertiary" />
        </div>
      </div>

      {/* Corpo nota */}
      <div className="px-6 pb-0 pt-5 md:px-10 md:pt-7">
        <span className="inline-flex items-center gap-1 rounded-pill bg-bg-secondary px-2 py-0.5 text-[10px] text-text-tertiary">
          <NotebookLineIcon className="size-2.5" /> Backpacking
        </span>
        <h3 className="mt-3 text-[22px] font-semibold tracking-[-0.01em] md:text-[26px]">
          Tokyo conference plan 🇯🇵
        </h3>
        <p className="mt-4 text-[13px] font-medium text-text-secondary">
          General information
        </p>
        <div className="mt-2 space-y-1.5 text-[12px] text-text-tertiary">
          <p>📅 Dates: Nov 3 – No…</p>
          <p>📍 Venue</p>
        </div>
        <div className="relative mt-4 aspect-[16/7] w-full overflow-hidden rounded-t-[10px]">
          <Image
            src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=75"
            alt="Skyline di Tokyo di notte"
            fill
            sizes="(max-width: 768px) 90vw, 640px"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="px-2 pt-2 md:px-3">
      <div className="rounded-panel bg-bg-secondary px-5 pt-16 md:rounded-panel-lg md:pt-24">
        <div className="mx-auto max-w-[820px] text-center">
          <h1 className="heading-display text-balance">
            Il tuo secondo cervello
          </h1>
          <p className="mx-auto mt-6 max-w-[560px] text-[16px] leading-[1.55] text-text-secondary md:text-[18px]">
            Ricorda tutto e affronta qualsiasi progetto con i tuoi appunti, le
            tue attività e il tuo programma, tutto in un unico posto.
          </p>
          <div className="mt-8 flex justify-center">
            <Button variant="primary" size="lg" href="#" fullWidthMobile>
              Ottieni Evernote gratuitamente
            </Button>
          </div>
          <p className="mt-6 text-[14px] text-text-secondary">
            Hai già un account?{" "}
            <a href="#" className="font-medium underline underline-offset-2">
              Accedi
            </a>
          </p>
        </div>

        <div className="mt-12 md:mt-16">
          <NoteMockup />
        </div>
      </div>
    </section>
  );
}
