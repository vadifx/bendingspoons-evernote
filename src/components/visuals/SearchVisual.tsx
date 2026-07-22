import Image from "next/image";
import {
  SearchIcon,
  CloseIcon,
  NotebookLineIcon,
} from "@/components/ui/icons";

function Highlight({ children }: { children: string }) {
  return (
    <mark className="rounded-[3px] bg-accent-yellow/60 px-0.5 text-inherit">
      {children}
    </mark>
  );
}

const results: {
  category: string;
  title: React.ReactNode;
  snippet: React.ReactNode;
  thumb?: string;
  alt?: string;
}[] = [
  {
    category: "Travel ideas",
    title: (
      <>
        Portugal Trip <span className="align-middle text-[9px]">🇵🇹</span>
      </>
    ),
    snippet: (
      <>
        Day 1: Arriva in <Highlight>Lisbon</Highlight> at 14:30
      </>
    ),
    thumb:
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=200&q=70",
    alt: "Colorful alley in Lisbon",
  },
  {
    category: "Travel ideas",
    title: (
      <>
        <Highlight>Lisbon</Highlight> Flight Options
      </>
    ),
    snippet: <>Checked multiple airlines for flights to Rome…</>,
  },
  {
    category: "Work",
    title: (
      <>
        <Highlight>Lisbon</Highlight> Conference 2024
      </>
    ),
    snippet: <>Presentation slides for the Lisbon conferenc…</>,
  },
  {
    category: "Food",
    title: <>Restaurants to try</>,
    snippet: (
      <>
        Pastéis de <Highlight>Lisbon</Highlight> - nice cafe cl…
      </>
    ),
    thumb:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&q=70",
    alt: "Dish at a restaurant",
  },
  {
    category: "Travel ideas",
    title: (
      <>
        Music Festival - <Highlight>Lisbon</Highlight>
      </>
    ),
    snippet: <>Tickets for the Lisbon music festival confirm…</>,
  },
];

export default function SearchVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[480px] py-4">
      {/* Toggle Offline */}
      <div className="absolute right-[16%] top-0 z-20 flex items-center gap-1.5 rounded-pill bg-white px-2 py-1 shadow-showcase">
        <span className="relative inline-flex h-4 w-7 items-center rounded-pill bg-accent-blue">
          <span className="absolute right-0.5 size-3 rounded-full bg-white" />
        </span>
        <span className="text-[11px] font-medium">Offline</span>
      </div>

      {/* Barra di ricerca */}
      <div className="relative z-10 mt-5 flex h-12 w-[76%] items-center gap-2.5 rounded-pill bg-white px-4 shadow-showcase">
        <SearchIcon className="size-4 shrink-0 text-text-tertiary" />
        <span className="text-[14px] font-medium">
          Lisbon
          <span className="animate-caret ml-px inline-block h-4 w-px translate-y-[3px] bg-text-primary" />
        </span>
        <CloseIcon className="ml-auto size-3 shrink-0 text-text-muted" />
      </div>

      {/* Risultati */}
      <div className="relative z-10 mt-3 flex w-[82%] flex-col gap-2">
        {results.map((r, i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-control bg-white p-2.5 shadow-showcase"
          >
            <div className="min-w-0 flex-1">
              <p className="flex items-center gap-1 text-[9.5px] text-text-muted">
                <NotebookLineIcon className="size-2.5" /> {r.category}
              </p>
              <p className="mt-0.5 truncate text-[12.5px] font-semibold">
                {r.title}
              </p>
              <p className="truncate text-[10.5px] text-text-tertiary">
                {r.snippet}
              </p>
            </div>
            {r.thumb && (
              <div className="relative size-11 shrink-0 overflow-hidden rounded-[7px]">
                <Image
                  src={r.thumb}
                  alt={r.alt ?? ""}
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Biglietto decorativo */}
      <div className="absolute right-0 top-[22%] z-0 w-[36%] max-w-[170px] rotate-6 rounded-[10px] border border-stroke-cards bg-[#FDFBF7] p-3.5 shadow-showcase">
        <p className="text-[10px] font-bold tracking-[0.06em] text-[#5B8DB8]">
          TORRE DE BELÉM
        </p>
        <p className="text-[7.5px] text-text-muted">LISBOA · PORTUGAL</p>
        {/* Schizzo torre */}
        <svg
          viewBox="0 0 80 54"
          className="mt-2 w-full"
          fill="none"
          aria-hidden
        >
          <path
            d="M30 50V22h20v28M35 22V12h10v10M38 12V6h4v6M30 34h20M30 42h20M14 50h52"
            stroke="#5B8DB8"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 46c4-2 8-2 12 0M62 46c4-2 8-2 12 0"
            stroke="#9CC3DE"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
        <div className="my-2 border-t border-dashed border-stroke-buttons/60" />
        <div className="flex items-end justify-between">
          <div className="text-[6.5px] leading-[1.5] text-text-muted">
            <p className="font-semibold text-text-tertiary">GATE 15 NOV, 2024</p>
            <p>10:30 AM · nº 042</p>
          </div>
          {/* QR stilizzato */}
          <svg viewBox="0 0 24 24" className="size-8" aria-hidden>
            <rect x="1" y="1" width="8" height="8" fill="#141414" />
            <rect x="3" y="3" width="4" height="4" fill="#FDFBF7" />
            <rect x="15" y="1" width="8" height="8" fill="#141414" />
            <rect x="17" y="3" width="4" height="4" fill="#FDFBF7" />
            <rect x="1" y="15" width="8" height="8" fill="#141414" />
            <rect x="3" y="17" width="4" height="4" fill="#FDFBF7" />
            <rect x="12" y="12" width="3" height="3" fill="#141414" />
            <rect x="17" y="13" width="3" height="3" fill="#141414" />
            <rect x="13" y="17" width="3" height="3" fill="#141414" />
            <rect x="19" y="18" width="3" height="3" fill="#141414" />
          </svg>
        </div>
      </div>
    </div>
  );
}
