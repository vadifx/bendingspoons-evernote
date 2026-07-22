import {
  NotebookLineIcon,
  ShareIcon,
  DotsIcon,
} from "@/components/ui/icons";

function MiniNote({
  className = "",
  titleSize = "text-[11px]",
  compact = false,
}: {
  className?: string;
  titleSize?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[10px] bg-white shadow-showcase ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-stroke-cards px-2.5 py-1.5">
        <NotebookLineIcon className="size-2.5 text-text-tertiary" />
        <span className="truncate text-[9px] text-text-tertiary">
          Work › Meeting notes
        </span>
        {!compact && (
          <span className="ml-auto flex items-center gap-1 text-text-muted">
            <ShareIcon className="size-2.5" />
            <DotsIcon className="size-2.5" />
          </span>
        )}
      </div>
      <div className={compact ? "p-2" : "p-2.5"}>
        <p className={`font-semibold leading-tight ${titleSize}`}>
          Kickoff notes
        </p>
        <div className="mt-1.5 space-y-1">
          <span className="block h-1.5 w-full rounded bg-stroke-cards" />
          <span className="block h-1.5 w-4/5 rounded bg-stroke-cards" />
          {!compact && (
            <span className="block h-1.5 w-3/5 rounded bg-stroke-cards" />
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Collage multi-device: stessa nota su laptop, tablet e phone.
 * Lead visivo della landing Free → Personal (dispositivi illimitati).
 */
export default function MultiDeviceVisual() {
  return (
    <div className="relative mx-auto aspect-[5/4] w-full max-w-[560px]">
      {/* Laptop */}
      <div className="absolute left-[4%] top-[8%] z-10 w-[62%]">
        <div className="rounded-t-[10px] border-[3px] border-[#2a2a2a] bg-[#2a2a2a] p-1.5 pb-0 shadow-showcase">
          <MiniNote titleSize="text-[12px]" />
        </div>
        <div className="mx-auto h-2 w-[72%] rounded-b-[4px] bg-[#2a2a2a]" />
        <div className="mx-auto h-1.5 w-[88%] rounded-b-[3px] bg-[#3a3a3a]" />
      </div>

      {/* Tablet */}
      <div className="absolute bottom-[6%] left-[42%] z-20 w-[34%] rotate-[-4deg]">
        <div className="rounded-[14px] border-[3px] border-[#2a2a2a] bg-[#2a2a2a] p-1.5 shadow-showcase">
          <MiniNote titleSize="text-[10px]" />
        </div>
      </div>

      {/* Phone */}
      <div className="absolute bottom-[10%] right-[2%] z-30 w-[22%] rotate-[6deg]">
        <div className="rounded-[14px] border-[3px] border-[#2a2a2a] bg-[#2a2a2a] p-1 shadow-showcase">
          <div className="mx-auto mb-1 h-1 w-6 rounded-pill bg-[#444]" />
          <MiniNote compact titleSize="text-[9px]" />
        </div>
      </div>

      {/* Sync pills */}
      <span className="absolute right-[8%] top-[6%] z-40 inline-flex items-center gap-1.5 rounded-pill bg-white px-3 py-1.5 text-[11px] font-medium shadow-showcase">
        <span className="size-1.5 rounded-full bg-brand-green" />
        Synced
      </span>
      <span className="absolute left-[2%] bottom-[18%] z-40 inline-flex items-center gap-1 rounded-pill bg-white px-2.5 py-1 text-[10px] font-medium shadow-showcase">
        Laptop · Tablet · Phone
      </span>
    </div>
  );
}
