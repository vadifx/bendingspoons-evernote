import Logo from "@/components/ui/Logo";
import Container from "@/components/ui/Container";
import {
  ChevronDown,
  GlobeIcon,
  FacebookGlyph,
  XGlyph,
  MediumGlyph,
  InstagramGlyph,
  YoutubeGlyph,
} from "@/components/ui/icons";

type Locale = "it" | "en";

const columnsByLocale: Record<
  Locale,
  { title: string; links: string[] }[]
> = {
  it: [
    {
      title: "Prodotto",
      links: [
        "Perché Evernote",
        "Note",
        "Note di rilascio",
        "Organizzazione",
        "Produttività",
        "Aziende",
        "Studenti",
        "Confronta le offerte",
      ],
    },
    {
      title: "Esplora",
      links: [
        "Funzionalità IA",
        "Collaborazione",
        "Web Clipper",
        "Scanner documento",
        "Attività",
        "Calendario",
        "Home",
        "Ricerca",
        "Mappa del sito",
      ],
    },
    {
      title: "Risorse",
      links: [
        "Modelli",
        "Product updates",
        "Sviluppatori",
        "Blog",
        "Assistenza e risorse",
        "Forum",
        "Contattaci",
        "Riguardo Bending Spoons",
        "Opportunità di lavoro",
      ],
    },
    {
      title: "Inizia qui",
      links: ["Iscriviti gratuitamente", "Accedi", "Scarica"],
    },
  ],
  en: [
    {
      title: "Product",
      links: [
        "Why Evernote",
        "Notes",
        "Release notes",
        "Organization",
        "Productivity",
        "Business",
        "Students",
        "Compare plans",
      ],
    },
    {
      title: "Explore",
      links: [
        "AI Features",
        "Collaboration",
        "Web Clipper",
        "Document Scanner",
        "Tasks",
        "Calendar",
        "Home",
        "Search",
        "Sitemap",
      ],
    },
    {
      title: "Resources",
      links: [
        "Templates",
        "Product updates",
        "Developers",
        "Blog",
        "Help & support",
        "Forum",
        "Contact us",
        "About Bending Spoons",
        "Careers",
      ],
    },
    {
      title: "Get started",
      links: ["Sign up for free", "Log in", "Download"],
    },
  ],
};

const socials = [
  { label: "Facebook", icon: FacebookGlyph },
  { label: "X", icon: XGlyph },
  { label: "Medium", icon: MediumGlyph },
  { label: "Instagram", icon: InstagramGlyph },
  { label: "YouTube", icon: YoutubeGlyph },
];

export default function Footer({ locale = "it" }: { locale?: Locale }) {
  const columns = columnsByLocale[locale];

  return (
    <footer className="bg-bg-primary pb-10 pt-16 lg:pt-24">
      <Container>
        <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
          <Logo />
          <button className="flex cursor-pointer items-center gap-2 text-[14px] text-text-primary">
            <GlobeIcon className="size-4 text-text-tertiary" />
            <span className="text-text-tertiary">Language:</span>
            <span className="font-medium">
              {locale === "en" ? "English" : "Italiano"}
            </span>
            <ChevronDown className="size-3" />
          </button>
          <div className="ml-auto flex items-center gap-5">
            {socials.map(({ label, icon: Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="text-text-primary transition-opacity duration-300 hover:opacity-60"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 lg:gap-x-16">
          {columns.map((col) => (
            <div key={col.title}>
              <h6 className="text-[16px] font-semibold text-text-primary">
                {col.title}
              </h6>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[14px] text-text-primary transition-colors duration-150 hover:text-brand-green"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-stroke-cards pt-6 text-[13px] text-text-tertiary md:flex-row md:items-center">
          <p>
            © 2026 Bending Spoons US Inc.{" "}
            {locale === "en"
              ? "All rights reserved."
              : "Tutti i diritti riservati."}
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 md:ml-auto">
            <a href="#" className="hover:text-text-primary">
              {locale === "en" ? "Cookie settings" : "Impostazioni dei cookie"}
            </a>
            <a href="#" className="hover:text-text-primary">
              {locale === "en" ? "Security" : "Sicurezza"}
            </a>
            <a href="#" className="hover:text-text-primary">
              {locale === "en" ? "Legal" : "Note legali"}
            </a>
            <a href="#" className="hover:text-text-primary">
              Privacy
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
