import type { ReactNode } from "react";
import Image from "next/image";
import {
  SearchIcon,
  CloseIcon,
  NotebookLineIcon,
} from "@/components/ui/icons";

function Highlight({ children }: { children: string }) {
  return (
    <mark className="rounded-[3px] bg-accent-yellow px-0.5 text-text-primary">
      {children}
    </mark>
  );
}

/** Clean QR mark for the decorative ticket */
function QrMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 21 21"
      className={className}
      aria-hidden
      shapeRendering="crispEdges"
    >
      {/* Finder: top-left */}
      <path fill="#141414" d="M0 0h9v9H0zm2 2h5v5H2z" />
      <path fill="#141414" d="M3 3h3v3H3z" />
      {/* Finder: top-right */}
      <path fill="#141414" d="M12 0h9v9h-9zm2 2h5v5h-5z" />
      <path fill="#141414" d="M15 3h3v3h-3z" />
      {/* Finder: bottom-left */}
      <path fill="#141414" d="M0 12h9v9H0zm2 2h5v5H2z" />
      <path fill="#141414" d="M3 15h3v3H3z" />
      {/* Timing / data modules */}
      <path
        fill="#141414"
        d="M10 0h1v1h-1zm0 2h1v1h-1zm0 2h1v1h-1zm0 2h1v1h-1zm0 2h1v1h-1zm0 2h1v1h-1zm0 2h1v1h-1zm0 2h1v1h-1zm0 2h1v1h-1zm0 2h1v1h-1zm2 1h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1zm-2 0h1v1h-1zm2-2h1v1h-1zm-4 0h1v1h-1zm2-2h1v1h-1zm2 0h1v1h-1zm-2-2h1v1h-1zm-2 0h1v1h-1zm4 0h1v1h-1zm-2 4h1v1h-1zm2 2h1v1h-1zm0 2h1v1h-1z"
      />
    </svg>
  );
}

const results: {
  category: string;
  title: ReactNode;
  snippet: ReactNode;
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
    <div className="relative mx-auto w-full py-2 text-text-primary lg:max-w-[480px]">
      {/* Column shares one width: search bar + result cards.
          Full width until the section splits into two columns (lg). */}
      <div className="relative z-10 w-full space-y-3 lg:w-[78%]">
        <div className="flex h-12 w-full items-center gap-2.5 rounded-pill bg-white px-4 text-text-primary shadow-showcase">
          <SearchIcon className="size-4 shrink-0 text-text-tertiary" />
          <span className="text-[14px] font-medium text-text-primary">
            Lisbon
            <span className="animate-caret ml-px inline-block h-4 w-px translate-y-[3px] bg-text-primary" />
          </span>
          <CloseIcon className="ml-auto size-3 shrink-0 text-text-muted" />
        </div>

        <div className="flex w-full flex-col gap-2">
          {results.map((r, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-control bg-white p-2.5 text-text-primary shadow-showcase"
            >
              <div className="min-w-0 flex-1">
                <p className="flex items-center gap-1 text-[9.5px] text-text-muted">
                  <NotebookLineIcon className="size-2.5 text-text-muted" />{" "}
                  {r.category}
                </p>
                <p className="mt-0.5 truncate text-[12.5px] font-semibold text-text-primary">
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
      </div>

      {/* Decorative ticket — only when the section is two columns (lg+) */}
      <div className="absolute right-0 top-[16%] z-0 hidden w-[30%] max-w-[148px] rotate-6 rounded-[10px] border border-stroke-cards bg-[#FDFBF7] p-3 shadow-showcase lg:block">
        <p className="text-[10px] font-bold tracking-[0.06em] text-[#5B8DB8]">
          TORRE DE BELÉM
        </p>
        <p className="text-[7.5px] text-text-muted">LISBOA · PORTUGAL</p>
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
        <div className="flex items-end justify-between gap-2">
          <div className="min-w-0 text-[6.5px] leading-[1.5] text-text-muted">
            <p className="font-semibold text-text-tertiary">GATE 15 NOV, 2024</p>
            <p>10:30 AM · nº 042</p>
          </div>
          <QrMark className="size-8 shrink-0" />
        </div>
      </div>
    </div>
  );
}
