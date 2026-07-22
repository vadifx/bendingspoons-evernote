import Button from "@/components/ui/Button";

export default function DarkBanner() {
  return (
    <section className="relative overflow-hidden border-y border-black bg-bg-dark py-24 text-white md:py-32">
      {/* Blob decorativi sfumati (DESIGN_SYSTEM.md §8.8) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/2 h-[440px] w-[440px] -translate-y-1/2 rounded-full opacity-70 blur-[90px]"
        style={{
          background:
            "radial-gradient(closest-side, #4dc869 0%, #5bb4d0 65%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-36 top-1/2 h-[500px] w-[500px] -translate-y-1/3 rounded-full opacity-70 blur-[90px]"
        style={{
          background:
            "radial-gradient(closest-side, #7c8eff 0%, #d9b6fd 60%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[640px] px-5 text-center">
        <h2 className="heading-2 text-balance text-white">
          La tua produttività, potenziata
        </h2>
        <p className="mx-auto mt-5 max-w-[480px] text-[16px] leading-[1.55] text-white/85 md:text-[17px]">
          Evernote v11 introduce nuove potenti funzionalità AI per potenziare il
          tuo secondo cervello.
        </p>
        <div className="mt-8 flex justify-center">
          <Button variant="lime" size="lg" href="#">
            Scopri di più
          </Button>
        </div>
      </div>
    </section>
  );
}
