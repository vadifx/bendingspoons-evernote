import Image from "next/image";
import { ShareIcon, DotsIcon, CheckCircle } from "@/components/ui/icons";

function NameTag({
  name,
  color,
}: {
  name: string;
  color: string;
}) {
  return (
    <span className={`relative rounded-[3px] px-1 py-px text-[10px] font-medium ${color}`}>
      {name}
    </span>
  );
}

export default function CollabVisual() {
  return (
    <div className="relative mx-auto aspect-[10/9] w-full max-w-[520px]">
      {/* Sunburst decorativo */}
      <div
        aria-hidden
        className="absolute -left-8 -top-8 size-[420px] rounded-full opacity-60"
        style={{
          background:
            "repeating-conic-gradient(#efe7d9 0deg 5deg, transparent 5deg 12deg)",
          maskImage:
            "radial-gradient(circle, black 0%, black 55%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(circle, black 0%, black 55%, transparent 72%)",
        }}
      />

      {/* Foto team */}
      <div className="absolute bottom-[6%] left-0 h-[72%] w-[64%] overflow-hidden rounded-card">
        <Image
          src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=900&q=75"
          alt="Due colleghi sorridono davanti a un laptop"
          fill
          sizes="(max-width: 768px) 60vw, 340px"
          className="object-cover"
        />
      </div>

      {/* Nota condivisa */}
      <div className="absolute right-0 top-0 z-10 w-[58%] max-w-[260px] rounded-control bg-white p-4 shadow-showcase">
        <div className="flex items-center gap-1.5 text-[10px] text-text-muted">
          <span className="rounded-[4px] bg-bg-secondary px-1.5 py-0.5">
            📁 Work 💼
          </span>
          <span className="ml-auto flex items-center gap-2 text-text-tertiary">
            <ShareIcon className="size-3" />
            <DotsIcon className="size-3" />
          </span>
        </div>
        <p className="mt-2.5 text-[16px] font-semibold leading-tight">
          Team Weekly Sync
        </p>
        <p className="mt-2 text-[10.5px] font-semibold text-text-secondary">
          Agenda
        </p>
        <ul className="mt-1 space-y-1 text-[10px] leading-[1.5] text-text-tertiary">
          <li>
            • <NameTag name="Sofia" color="bg-accent-pink" /> updates from each
            member
          </li>
          <li>• Review ongoing campaigns</li>
          <li>• Discuss upcoming de…</li>
        </ul>
        <p className="mt-2 text-[10.5px] font-semibold text-text-secondary">
          Updates <NameTag name="Alice" color="bg-accent-yellow" />
        </p>
        <ul className="mt-1 space-y-1 text-[10px] leading-[1.5] text-text-tertiary">
          <li>• Blog draft completed, awaiting…</li>
          <li>
            • <NameTag name="Ben" color="bg-accent-teal" /> engagement up 15%,
            TikTok series
          </li>
          <li>• Campaign A/B test results</li>
          <li>• CTR improved</li>
          <li className="truncate">• New ad creatives ready for…</li>
        </ul>
      </div>

      {/* Pill di conferma */}
      <div className="absolute bottom-0 left-[22%] z-20 flex items-center gap-1.5 rounded-pill bg-[#E7F6EC] px-3 py-1.5 shadow-showcase">
        <CheckCircle className="size-3.5" />
        <span className="text-[11.5px] font-medium text-[#0F7B33]">
          Note shared with 4 people
        </span>
      </div>
    </div>
  );
}
