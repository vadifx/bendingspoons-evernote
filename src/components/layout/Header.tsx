"use client";

import { useState } from "react";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { ChevronDown, MenuIcon, CloseIcon } from "@/components/ui/icons";

type Locale = "it" | "en";

const copy = {
  it: {
    ai: "Funzioni AI",
    explore: "Esplora",
    plans: "Piani",
    company: "Azienda",
    login: "Accedi",
    download: "Scarica",
    start: "Inizia gratis",
    solutions: "Soluzioni",
    features: "Caratteristiche",
    ecosystem: "Ecosistema",
    exploreItems: [
      "Perché Evernote",
      "Presa di appunti",
      "Collaborazione",
      "Web Clipper",
      "Ricerca avanzata",
      "Scansione documenti",
      "Compiti",
      "Calendario",
    ],
  },
  en: {
    ai: "AI Features",
    explore: "Explore",
    plans: "Plans",
    company: "Company",
    login: "Log in",
    download: "Download",
    start: "Start for free",
    solutions: "Solutions",
    features: "Features",
    ecosystem: "Ecosystem",
    exploreItems: [
      "Why Evernote",
      "Note-taking",
      "Collaboration",
      "Web Clipper",
      "Advanced Search",
      "Document Scanning",
      "Tasks",
      "Calendar",
    ],
  },
} as const;

export default function Header({ locale = "it" }: { locale?: Locale }) {
  const [open, setOpen] = useState(false);
  const t = copy[locale];
  const navLinks = [t.ai, t.plans, t.company];

  return (
    <header className="fixed inset-x-0 top-0 z-40 h-[81px] bg-bg-primary">
      <div className="mx-auto flex h-full w-full max-w-[1320px] items-center px-5 lg:px-8">
        <Logo />

        <nav className="ml-10 hidden items-center gap-8 lg:flex">
          <a
            href="#"
            className="text-[15px] text-text-primary transition-colors duration-300 hover:text-brand-green"
          >
            {t.ai}
          </a>

          <div className="group relative">
            <button className="flex cursor-pointer items-center gap-1 text-[15px] text-text-primary transition-colors duration-300 group-hover:text-brand-green">
              {t.explore}
              <ChevronDown className="size-3.5 transition-transform duration-300 group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
              <div className="grid w-[420px] grid-cols-2 gap-4 rounded-control bg-white p-6 shadow-dropdown">
                {t.exploreItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-[14px] text-text-primary transition-colors duration-150 hover:text-brand-green"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a
            href="#"
            className="text-[15px] text-text-primary transition-colors duration-300 hover:text-brand-green"
          >
            {t.plans}
          </a>
          <a
            href="#"
            className="text-[15px] text-text-primary transition-colors duration-300 hover:text-brand-green"
          >
            {t.company}
          </a>
        </nav>

        <div className="ml-auto hidden items-center gap-3 lg:flex">
          <a
            href="#"
            className="mr-2 text-[15px] text-text-primary transition-opacity duration-300 hover:opacity-70"
          >
            {t.login}
          </a>
          <Button variant="outline" size="md" href="#">
            {t.download}
          </Button>
          <Button variant="primary" size="md" href="#upgrade">
            {locale === "en" ? "Continue without limits" : t.start}
          </Button>
        </div>

        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <Button variant="primary" size="sm" href="#upgrade">
            {locale === "en" ? "Upgrade" : t.download}
          </Button>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 cursor-pointer items-center justify-center rounded-button text-text-primary"
          >
            {open ? <CloseIcon className="size-4" /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-stroke-cards bg-bg-primary px-5 pb-8 pt-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link} href="#" className="text-[17px] font-medium">
                {link}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-3">
              <Button variant="outline" size="md" href="#" className="w-full">
                {t.login}
              </Button>
              <Button
                variant="primary"
                size="md"
                href="#upgrade"
                className="w-full"
              >
                {locale === "en" ? "Continue without limits" : t.start}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
