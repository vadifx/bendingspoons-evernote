import Button from "@/components/ui/Button";
import {
  ImageTileIcon,
  MicTileIcon,
  PlayTileIcon,
  UploadIcon,
  LinkIcon,
  SparkleIcon,
} from "@/components/ui/icons";

function FloatingPill({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`absolute z-20 hidden items-center gap-1.5 rounded-pill bg-white px-3 py-1.5 text-[13px] font-medium shadow-showcase md:inline-flex ${className}`}
    >
      {children}
    </span>
  );
}

export default function AiShowcase() {
  return (
    <section className="overflow-hidden px-5 py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[640px] text-center">
        <h2 className="heading-2 text-balance">
          Vuoi provare le nostre funzionalità AI?
        </h2>
        <p className="mx-auto mt-5 max-w-[480px] text-[16px] leading-[1.55] text-text-secondary md:text-[17px]">
          Prova la potenza dell’AI di Evernote tramite funzionalità autonome che
          rendono il tuo secondo cervello ancora più efficiente.
        </p>
        <div className="mt-8 flex justify-center">
          <Button variant="primary" size="md" href="#" className="px-8 py-3">
            Provalo gratis
          </Button>
        </div>
      </div>

      {/* Mockup transcriber */}
      <div className="relative mx-auto mt-14 max-w-[760px]">
        <FloatingPill className="-left-8 top-8 lg:-left-16">
          <LinkIcon className="size-3.5 text-text-tertiary" /> Transcribe video
          link
        </FloatingPill>
        <FloatingPill className="-left-4 top-[52%] lg:-left-12">
          <PlayTileIcon className="size-4" /> Transcribe video
        </FloatingPill>
        <FloatingPill className="-right-6 top-[30%] lg:-right-14">
          <ImageTileIcon className="size-4" /> Transcribe image
        </FloatingPill>
        <FloatingPill className="-right-3 top-[58%] lg:-right-10">
          <MicTileIcon className="size-4" /> Transcribe audio
        </FloatingPill>

        <div className="rounded-[20px] border-2 border-dashed border-stroke-buttons/50 bg-white p-6 shadow-showcase md:p-10">
          {/* Tabs */}
          <div className="flex items-center">
            <div className="mx-auto flex items-center gap-1 rounded-pill bg-bg-primary p-1">
              <span className="rounded-pill bg-accent-blue px-4 py-1.5 text-[13px] font-medium text-white">
                Upload
              </span>
              <span className="cursor-pointer px-4 py-1.5 text-[13px] text-text-tertiary">
                Record
              </span>
              <span className="cursor-pointer px-4 py-1.5 text-[13px] text-text-tertiary">
                From link
              </span>
            </div>
            <span className="hidden items-center gap-1 text-[11px] text-text-muted md:flex">
              <SparkleIcon className="size-3 text-accent-indigo" /> AI powered
            </span>
          </div>

          {/* Corpo */}
          <div className="mt-10 text-center md:mt-12">
            <div className="flex items-center justify-center gap-2">
              <ImageTileIcon className="size-7 -rotate-6" />
              <MicTileIcon className="size-7" />
              <PlayTileIcon className="size-7 rotate-6" />
            </div>
            <p className="mt-5 font-serif text-[24px] font-medium tracking-[-0.01em] text-text-primary md:text-[32px]">
              Turn audio, video and images to text
            </p>
            <p className="mt-2 text-[12px] text-text-muted">
              Transcribe with high accuracy · Supports multiple languages
            </p>
            <div className="mx-auto mt-8 max-w-[300px]">
              <a
                href="#"
                className="flex w-full items-center justify-center gap-2 rounded-[8px] bg-accent-blue px-5 py-3 text-[14px] font-medium text-white transition-colors duration-300 hover:bg-[#3a4fe0]"
              >
                <UploadIcon className="size-3.5" /> Choose a file
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
