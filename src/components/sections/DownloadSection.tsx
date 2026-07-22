import {
  MonitorIcon,
  PhoneIcon,
  ScissorsIcon,
  AppleGlyph,
  WindowsGlyph,
  PlayStoreGlyph,
  ChromeGlyph,
  FirefoxGlyph,
  SafariGlyph,
} from "@/components/ui/icons";

function OutlineAction({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <a
      href="#"
      className="flex w-full items-center justify-center gap-2 rounded-button border border-stroke-buttons px-4 py-2.5 text-[14px] font-medium text-text-primary transition-all duration-300 hover:border-bg-inverse hover:bg-bg-inverse hover:text-white"
    >
      {icon}
      {children}
    </a>
  );
}

function StoreAction({
  icon,
  topLabel,
  storeName,
}: {
  icon: React.ReactNode;
  topLabel: string;
  storeName: string;
}) {
  return (
    <a
      href="#"
      className="flex w-full items-center justify-center gap-2.5 rounded-button border border-stroke-buttons px-4 py-2 transition-all duration-300 hover:border-bg-inverse hover:bg-bg-inverse hover:text-white"
    >
      {icon}
      <span className="text-left leading-none">
        <span className="block text-[8px] uppercase tracking-[0.5px] opacity-70">
          {topLabel}
        </span>
        <span className="mt-0.5 block text-[14px] font-semibold">
          {storeName}
        </span>
      </span>
    </a>
  );
}

const browsers = [
  { name: "Chrome", icon: <ChromeGlyph /> },
  { name: "Firefox", icon: <FirefoxGlyph /> },
  { name: "Safari", icon: <SafariGlyph /> },
];

export default function DownloadSection() {
  return (
    <section className="px-5 py-20 md:py-28">
      <h3 className="heading-4 mx-auto max-w-[640px] text-balance text-center">
        Sfrutta il potere del tuo secondo cervello, oggi stesso
      </h3>

      <div className="mx-auto mt-12 grid max-w-[1000px] gap-6 md:grid-cols-3">
        {/* Desktop */}
        <div className="flex flex-col rounded-card border border-stroke-cards bg-white p-8">
          <MonitorIcon />
          <h5 className="mt-5 text-[20px] font-semibold">Desktop</h5>
          <p className="mt-2 text-[14px] leading-[1.45] text-text-tertiary">
            Sfrutta tutta la potenza di Evernote su tutti i tuoi dispositivi
          </p>
          <a
            href="#"
            className="mt-3 text-[13px] text-text-tertiary underline underline-offset-2 hover:text-text-primary"
          >
            Note di rilascio
          </a>
          <div className="mt-5 flex flex-col gap-2.5">
            <OutlineAction icon={<AppleGlyph />}>Scarica per Mac</OutlineAction>
            <OutlineAction icon={<WindowsGlyph />}>
              Scarica per Windows
            </OutlineAction>
          </div>
        </div>

        {/* Mobile */}
        <div className="flex flex-col rounded-card border border-stroke-cards bg-white p-8">
          <PhoneIcon />
          <h5 className="mt-5 text-[20px] font-semibold">Mobile</h5>
          <p className="mt-2 text-[14px] leading-[1.45] text-text-tertiary">
            Rimani organizzato e produttivo ovunque tu vada
          </p>
          <div className="mt-5 flex flex-col gap-2.5 md:mt-auto">
            <StoreAction
              icon={<AppleGlyph />}
              topLabel="Get it on"
              storeName="App Store"
            />
            <StoreAction
              icon={<PlayStoreGlyph />}
              topLabel="Get it on"
              storeName="Google Play"
            />
          </div>
        </div>

        {/* Web Clipper */}
        <div className="flex flex-col rounded-card border border-stroke-cards bg-white p-8">
          <ScissorsIcon />
          <h5 className="mt-5 text-[20px] font-semibold">
            Estensione Web Clipper
          </h5>
          <p className="mt-2 text-[14px] leading-[1.45] text-text-tertiary">
            Cattura ciò che vedi con un clic.
          </p>
          <div className="mt-5 flex gap-2.5 md:mt-auto">
            {browsers.map((b) => (
              <a
                key={b.name}
                href="#"
                className="flex flex-1 flex-col items-center gap-1.5 rounded-[8px] border border-stroke-cards px-2 py-3 text-text-primary transition-all duration-300 hover:border-bg-inverse"
              >
                {b.icon}
                <span className="text-[11px] font-medium">{b.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
