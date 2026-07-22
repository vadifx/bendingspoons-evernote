import Image from "next/image";
import { DotsIcon, ShareIcon, ClipperFlat } from "@/components/ui/icons";

const waveHeights = [5, 9, 13, 7, 11, 15, 8, 12, 6, 10, 14, 7, 9, 12, 5, 8];

export default function CaptureVisual() {
  return (
    <div className="relative mx-auto aspect-[10/9] w-full max-w-[520px]">
      {/* Sunburst */}
      <div
        aria-hidden
        className="absolute -right-6 -top-6 size-[380px] rounded-full opacity-60"
        style={{
          background:
            "repeating-conic-gradient(#efe7d9 0deg 5deg, transparent 5deg 12deg)",
          maskImage:
            "radial-gradient(circle, black 0%, black 55%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(circle, black 0%, black 55%, transparent 72%)",
        }}
      />

      {/* Nota principale con allegati */}
      <div className="absolute left-[6%] top-[6%] z-10 w-[70%] max-w-[330px] rounded-card bg-white p-5 shadow-showcase">
        <div className="flex items-center gap-1.5 text-[10px] text-text-muted">
          <span className="rounded-[4px] bg-bg-secondary px-1.5 py-0.5">
            📁 Work 💼
          </span>
          <span className="ml-auto flex items-center gap-2 text-text-tertiary">
            <ShareIcon className="size-3" />
            <DotsIcon className="size-3" />
          </span>
        </div>
        <p className="mt-2.5 text-[17px] font-semibold">Client kickoff</p>

        {/* Player audio */}
        <div className="mt-3 flex items-center gap-2.5 rounded-control bg-bg-primary p-2.5">
          <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-accent-blue">
            <svg viewBox="0 0 12 12" className="size-3" fill="#fff" aria-hidden>
              <path d="M3 2.2v7.6L10 6 3 2.2Z" />
            </svg>
          </span>
          <div className="flex h-5 flex-1 items-end gap-[2.5px]">
            {waveHeights.map((h, i) => (
              <span
                key={i}
                className="w-[3px] rounded-pill bg-accent-blue/70"
                style={{ height: `${h + 4}px` }}
              />
            ))}
          </div>
          <span className="text-[10px] text-text-muted">02:34</span>
        </div>

        {/* Scansione */}
        <div className="mt-2.5 flex items-center gap-2.5 rounded-control border border-stroke-cards p-2.5">
          <div className="flex h-10 w-8 shrink-0 flex-col gap-1 rounded-[4px] border border-stroke-cards bg-white p-1.5">
            <span className="h-[2.5px] w-full rounded bg-stroke-buttons/70" />
            <span className="h-[2.5px] w-4/5 rounded bg-stroke-buttons/70" />
            <span className="h-[2.5px] w-full rounded bg-stroke-buttons/50" />
            <span className="h-[2.5px] w-3/5 rounded bg-stroke-buttons/50" />
          </div>
          <div>
            <p className="text-[11.5px] font-medium">Receipt_scan.pdf</p>
            <p className="text-[9.5px] text-text-muted">
              Scanned · Nov 12, 09:41
            </p>
          </div>
          <span className="ml-auto rounded-[4px] bg-[#E7F6EC] px-1.5 py-0.5 text-[8.5px] font-semibold text-[#0F7B33]">
            OCR
          </span>
        </div>

        {/* Clip web */}
        <div className="mt-2.5 flex items-center gap-2.5 rounded-control border border-stroke-cards p-2.5">
          <div className="relative size-9 shrink-0 overflow-hidden rounded-[6px]">
            <Image
              src="https://images.unsplash.com/photo-1552581234-26160f608093?w=200&q=70"
              alt="Anteprima articolo web"
              fill
              sizes="36px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-[11.5px] font-medium">Design trends 2026</p>
            <p className="text-[9.5px] text-text-muted">
              Clipped from the web
            </p>
          </div>
        </div>
      </div>

      {/* Chip flottanti */}
      <span className="absolute right-[4%] top-[14%] z-20 inline-flex items-center gap-1.5 rounded-pill bg-white px-3 py-1.5 text-[12px] font-medium shadow-showcase">
        🎙️ Registra
      </span>
      <span className="absolute bottom-[26%] right-0 z-20 inline-flex items-center gap-1.5 rounded-pill bg-white px-3 py-1.5 text-[12px] font-medium shadow-showcase">
        📄 Scansiona
      </span>
      <span className="absolute bottom-[8%] left-[14%] z-20 inline-flex items-center gap-1.5 rounded-pill bg-white px-3 py-1.5 text-[12px] font-medium shadow-showcase">
        <ClipperFlat className="size-4" /> Ritaglia
      </span>
    </div>
  );
}
