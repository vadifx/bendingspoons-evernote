"use client";

import { useRef, type ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  StarFlat,
  TemplateFlat,
  NotebookFlat,
  SearchFlat,
  TaskFlat,
  CalendarFlat,
  ClipperFlat,
  CollabFlat,
} from "@/components/ui/icons";

type Feature = {
  title: string;
  description: string;
  icon: ReactNode;
};

const features: Feature[] = [
  {
    title: "AI Features",
    description: "Potenzia il tuo lavoro con un'intelligenza all'avanguardia",
    icon: <StarFlat />,
  },
  {
    title: "Template",
    description: "Ottieni risultati più rapidi con template già pronti",
    icon: <TemplateFlat />,
  },
  {
    title: "Quaderni e spazi",
    description: "Organizza le idee al posto giusto",
    icon: <NotebookFlat />,
  },
  {
    title: "Cerca",
    description: "Trova esattamente quello che cerchi in pochi secondi",
    icon: <SearchFlat />,
  },
  {
    title: "Attività",
    description: "Rimani aggiornato sulle cose da fare e mantieni il ritmo",
    icon: <TaskFlat />,
  },
  {
    title: "Calendario",
    description: "Collega gli eventi alle note per non interrompere il tuo lavoro",
    icon: <CalendarFlat />,
  },
  {
    title: "Web Clipper",
    description: "Cattura ciò che vedi online con un clic",
    icon: <ClipperFlat />,
  },
  {
    title: "Collabora",
    description: "Lavora in teamwork in tempo reale",
    icon: <CollabFlat />,
  },
];

export default function FeatureCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCards = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[720px] px-5 text-center">
        <h2 className="heading-2 text-balance">
          Sfrutta al massimo le tue idee e il tuo tempo
        </h2>
        <p className="mx-auto mt-5 max-w-[520px] text-[16px] leading-[1.55] text-text-secondary md:text-[17px]">
          Cattura tutto ciò che è, era o potrebbe essere importante e accedi ad
          esso quando e dove vuoi.
        </p>
      </div>

      {/* Track full-bleed: card tagliate ai bordi come nel riferimento */}
      <div
        ref={trackRef}
        className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 py-3 md:mt-14 md:gap-6 md:px-[max(20px,calc((100vw-1320px)/2))]"
      >
        {features.map((f) => (
          <a
            key={f.title}
            href="#"
            className="flex h-[300px] w-[75vw] shrink-0 snap-start flex-col rounded-card bg-white p-8 shadow-showcase transition-transform duration-300 ease-in-out hover:scale-[1.02] sm:w-[280px] md:h-[308px] md:w-[300px]"
          >
            <div>{f.icon}</div>
            <h5 className="mt-auto text-[19px] font-semibold text-text-primary">
              {f.title}
            </h5>
            <p className="mt-2 text-[14px] leading-[1.4] text-text-tertiary">
              {f.description}
            </p>
          </a>
        ))}
      </div>

      {/* Frecce */}
      <div className="mt-8 flex justify-center gap-3">
        <button
          aria-label="Scorri indietro"
          onClick={() => scrollByCards(-1)}
          className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-stroke-buttons text-text-primary transition-all duration-300 hover:border-bg-inverse hover:bg-bg-inverse hover:text-white"
        >
          <ArrowLeft />
        </button>
        <button
          aria-label="Scorri avanti"
          onClick={() => scrollByCards(1)}
          className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-stroke-buttons text-text-primary transition-all duration-300 hover:border-bg-inverse hover:bg-bg-inverse hover:text-white"
        >
          <ArrowRight />
        </button>
      </div>
    </section>
  );
}
