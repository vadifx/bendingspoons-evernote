"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type EasterEggContextValue = {
  open: () => void;
};

const EasterEggContext = createContext<EasterEggContextValue | null>(null);

export function useEasterEgg() {
  const ctx = useContext(EasterEggContext);
  if (!ctx) {
    throw new Error("useEasterEgg must be used within EasterEggProvider");
  }
  return ctx;
}

export function EasterEggProvider({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(false);

  const open = useCallback(() => setVisible(true), []);
  const close = useCallback(() => setVisible(false), []);

  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [visible, close]);

  return (
    <EasterEggContext.Provider value={{ open }}>
      {children}
      {visible && <EasterEggModal onClose={close} />}
    </EasterEggContext.Provider>
  );
}

function EasterEggModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="easter-egg-title"
    >
      <button
        type="button"
        aria-label="Close"
        className="absolute inset-0 animate-[fade-in_0.25s_ease-out] bg-bg-inverse/45 backdrop-blur-[2px]"
        onClick={onClose}
      />

      <div className="relative w-full max-w-[400px] animate-[pop-in_0.35s_cubic-bezier(0.22,1,0.36,1)] rounded-panel bg-bg-primary p-7 shadow-showcase md:p-8">
        <span className="inline-flex items-center gap-1.5 rounded-pill bg-brand-lime/35 px-2.5 py-1 text-[12px] font-semibold text-text-primary">
          <span aria-hidden>👋</span> Recruiter note
        </span>

        <h2
          id="easter-egg-title"
          className="mt-4 text-[22px] font-semibold tracking-[-0.03em] text-text-primary md:text-[24px]"
        >
          Almost upgraded.
        </h2>

        <p className="mt-3 text-[15px] leading-[1.55] text-text-secondary">
          I&apos;d love to design this for real on Evernote, but I don&apos;t have
          access to the live product (yet). For now, this landing is the closest
          I can get to something that feels real, useful, and brand-true.
        </p>
        <p className="mt-3 text-[15px] leading-[1.55] text-text-secondary">
          If this made you smile, maybe we talk soon. Preferably with the real
          Evernote brief next time.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex cursor-pointer items-center justify-center rounded-button bg-bg-inverse px-6 py-2.5 text-[15px] text-white transition-all duration-300 hover:scale-[1.02] hover:bg-brand-green active:scale-[0.99]"
          >
            Deal, let&apos;s talk
          </button>
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer text-[14px] text-text-tertiary underline underline-offset-2 transition-colors hover:text-text-primary"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
