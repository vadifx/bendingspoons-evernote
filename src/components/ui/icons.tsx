/**
 * Icone SVG originali del design system.
 * Line icons: stroke 1.5-2px, cap tondi (DESIGN_SYSTEM.md §10).
 * Flat feature icons: forme piene con accenti pastello.
 */

type IconProps = { className?: string };

/* ---------- UI line icons ---------- */

export function ChevronDown({ className = "size-3.5" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <path
        d="m4 6 4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowLeft({ className = "size-4" }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <path
        d="M16 10H4m0 0 5-5m-5 5 5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRight({ className = "size-4" }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <path
        d="M4 10h12m0 0-5-5m5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SearchIcon({ className = "size-4" }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <circle cx="9" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="m13.5 13.5 3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CloseIcon({ className = "size-3.5" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <path
        d="m4 4 8 8M12 4l-8 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MenuIcon({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <path
        d="M3 5.5h14M3 10h14M3 14.5h14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ShareIcon({ className = "size-3.5" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <path
        d="M8 10V2.5m0 0L5.5 5M8 2.5 10.5 5M3.5 8v4.5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DotsIcon({ className = "size-3.5" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden>
      <circle cx="3.5" cy="8" r="1.3" />
      <circle cx="8" cy="8" r="1.3" />
      <circle cx="12.5" cy="8" r="1.3" />
    </svg>
  );
}

export function CheckCircle({ className = "size-4" }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <circle cx="10" cy="10" r="8" fill="#00A82D" />
      <path
        d="m6.5 10 2.3 2.3L13.5 8"
        stroke="#fff"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FlagIcon({ className = "size-3" }: IconProps) {
  return (
    <svg viewBox="0 0 14 14" fill="none" className={className} aria-hidden>
      <path
        d="M3 12.5V2m0 .5h7.5L8.8 5l1.7 2.5H3"
        stroke="#E54E40"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function NotebookLineIcon({ className = "size-3.5" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <rect
        x="3"
        y="2.5"
        width="10"
        height="11"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path d="M6 2.5v11" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export function LinkIcon({ className = "size-3.5" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <path
        d="M6.5 9.5a3 3 0 0 0 4.2.3l2-2a3 3 0 0 0-4.3-4.2l-1 1M9.5 6.5a3 3 0 0 0-4.2-.3l-2 2a3 3 0 0 0 4.3 4.2l1-1"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function GlobeIcon({ className = "size-4" }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M2.5 10h15M10 2.5c-4.5 4.5-4.5 10.5 0 15 4.5-4.5 4.5-10.5 0-15Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

/* ---------- Flat feature icons (carousel) ---------- */

export function StarFlat({ className = "size-10" }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      <path
        d="M20 3.5c1 7.8 4.6 12 16.5 16.5C24.6 24.6 21 28.7 20 36.5 19 28.7 15.4 24.6 3.5 20 15.4 15.4 19 11.3 20 3.5Z"
        fill="#FFD919"
      />
    </svg>
  );
}

export function TemplateFlat({ className = "size-10" }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      <rect x="8" y="4" width="24" height="32" rx="4" fill="#7C8EFF" />
      <rect x="13" y="10" width="14" height="3" rx="1.5" fill="#fff" />
      <rect x="13" y="17" width="14" height="2.5" rx="1.25" fill="#fff" opacity=".85" />
      <rect x="13" y="23" width="9" height="2.5" rx="1.25" fill="#fff" opacity=".85" />
    </svg>
  );
}

export function NotebookFlat({ className = "size-10" }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      <rect x="9" y="4" width="22" height="32" rx="3.5" fill="#4DC869" />
      <rect x="9" y="4" width="7" height="32" rx="3.5" fill="#00A82D" />
      <rect x="21" y="10" width="7" height="2.5" rx="1.25" fill="#fff" />
    </svg>
  );
}

export function SearchFlat({ className = "size-10" }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      <circle cx="17.5" cy="17.5" r="10.5" stroke="#FFD919" strokeWidth="5" />
      <path
        d="m26 26 8 8"
        stroke="#FFD919"
        strokeWidth="5.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function TaskFlat({ className = "size-10" }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      <circle cx="20" cy="20" r="16" fill="#D9B6FD" />
      <path
        d="m13 20.5 4.5 4.5L27 15.5"
        stroke="#fff"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CalendarFlat({ className = "size-10" }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      <rect x="5" y="8" width="30" height="27" rx="4" fill="#FFA24D" />
      <rect x="5" y="8" width="30" height="8" rx="4" fill="#E2862F" />
      <rect x="11" y="3.5" width="4" height="8" rx="2" fill="#E2862F" />
      <rect x="25" y="3.5" width="4" height="8" rx="2" fill="#E2862F" />
      <circle cx="14" cy="24" r="2" fill="#fff" />
      <circle cx="20" cy="24" r="2" fill="#fff" />
      <circle cx="26" cy="24" r="2" fill="#fff" />
      <circle cx="14" cy="30" r="2" fill="#fff" opacity=".8" />
      <circle cx="20" cy="30" r="2" fill="#fff" opacity=".8" />
    </svg>
  );
}

export function ClipperFlat({ className = "size-10" }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      <path
        d="M8 10 32 26M8 26 32 10"
        stroke="#94E130"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <circle cx="8.5" cy="9" r="4.5" stroke="#94E130" strokeWidth="3" />
      <circle cx="8.5" cy="27" r="4.5" stroke="#94E130" strokeWidth="3" />
    </svg>
  );
}

export function CollabFlat({ className = "size-10" }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      <circle cx="14" cy="13" r="6" fill="#FAD0F6" />
      <circle cx="27" cy="15" r="5" fill="#7BDCD5" />
      <path
        d="M4 33c1-6 5-9.5 10-9.5S23 27 24 33H4Z"
        fill="#FAD0F6"
      />
      <path
        d="M23 33c.8-4.8 3.8-7.8 8-7.8 3.4 0 5.4 2.4 6 7.8H23Z"
        fill="#7BDCD5"
      />
    </svg>
  );
}

/* ---------- Platform / download icons ---------- */

export function MonitorIcon({ className = "size-8" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <rect
        x="3"
        y="5"
        width="26"
        height="17"
        rx="2.5"
        stroke="#7C8EFF"
        strokeWidth="2"
      />
      <path
        d="M12 27h8m-4-5v5"
        stroke="#7C8EFF"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PhoneIcon({ className = "size-8" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <rect
        x="9"
        y="3"
        width="14"
        height="26"
        rx="3"
        stroke="#D9B6FD"
        strokeWidth="2"
      />
      <path d="M14 25h4" stroke="#D9B6FD" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ScissorsIcon({ className = "size-8" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <path
        d="M8 8 26 22M8 24 26 10"
        stroke="#94E130"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="7.5" cy="7" r="3.2" stroke="#94E130" strokeWidth="2" />
      <circle cx="7.5" cy="25" r="3.2" stroke="#94E130" strokeWidth="2" />
    </svg>
  );
}

export function AppleGlyph({ className = "size-4" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden>
      <path d="M11.3 8.5c0-1.6 1.3-2.4 1.4-2.4-.8-1.1-2-1.3-2.4-1.3-1-.1-2 .6-2.5.6S6.5 4.8 5.6 4.8c-1.2 0-2.3.7-2.9 1.8-1.2 2.1-.3 5.3.9 7 .6.9 1.3 1.8 2.2 1.8.9 0 1.2-.6 2.3-.6s1.4.6 2.3.6c1 0 1.6-.9 2.2-1.7.7-1 1-2 1-2.1 0 0-1.9-.7-1.9-2.9l-.4-.2ZM9.7 3.7c.5-.6.8-1.4.7-2.2-.7 0-1.5.5-2 1-.4.5-.8 1.3-.7 2.1.8.1 1.6-.4 2-1v.1Z" />
    </svg>
  );
}

export function WindowsGlyph({ className = "size-4" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden>
      <path d="M2 3.5 7.2 2.8v4.7H2V3.5Zm0 9 5.2.7V8.6H2v3.9Zm6-8.9L14 2.5v5H8V3.6Zm0 8.8 6 .9v-5H8v4.1Z" />
    </svg>
  );
}

export function PlayStoreGlyph({ className = "size-4" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden>
      <path d="M3 1.8c-.3.2-.5.5-.5 1v10.4c0 .5.2.8.5 1l5.8-6.2L3 1.8Zm7 4.9L4.6 1.5l7 4 -1.6 1.2Zm.9.6 1.9 1.1c.6.3.6 1 0 1.3l-1.9 1.1L9.2 8l1.7-.7Zm-6.3 7.2 7-4-1.6-1.2L4.6 14.5Z" />
    </svg>
  );
}

export function ChromeGlyph({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="10" cy="10" r="3.2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10 6.8h7.6M7.2 11.6 3.4 5.2m6 12.7 3.8-6.4"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function FirefoxGlyph({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M15.5 7.5c-1.2 1-3 .8-4-.5-.8-1-.8-2.3-.2-3.3M6 5.5c-1.4 1.3-2 3.3-1.4 5.2.8 2.5 3.4 3.9 5.9 3.1 1.9-.6 3.2-2.3 3.3-4.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SafariGlyph({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M13.5 6.5 8.8 8.8l-2.3 4.7 4.7-2.3 2.3-4.7Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ---------- Social (footer, monocromatiche) ---------- */

export function FacebookGlyph({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden>
      <path d="M11.5 17.5v-6h2l.3-2.4h-2.3V7.6c0-.7.2-1.2 1.2-1.2h1.2V4.2c-.2 0-1-.1-1.8-.1-1.8 0-3 1.1-3 3.1V9H7v2.4h2.1v6h2.4Z" />
    </svg>
  );
}

export function XGlyph({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden>
      <path d="M11.6 8.8 17.1 3h-1.3l-4.8 5L7.2 3H3l5.8 7.7L3 17h1.3l5.1-5.4 4 5.4H17l-5.4-8.2ZM10 10.8l-.6-.8L4.8 4h2l3.8 5 .6.8 4.9 6.4h-2L10 10.8Z" />
    </svg>
  );
}

export function MediumGlyph({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden>
      <ellipse cx="6" cy="10" rx="4" ry="4.5" />
      <ellipse cx="13.5" cy="10" rx="2" ry="4.2" />
      <ellipse cx="17.5" cy="10" rx="1" ry="3.8" />
    </svg>
  );
}

export function InstagramGlyph({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <rect
        x="3"
        y="3"
        width="14"
        height="14"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="10" cy="10" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="14.2" cy="5.8" r="1" fill="currentColor" />
    </svg>
  );
}

export function YoutubeGlyph({ className = "size-5" }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden>
      <path d="M17.6 6.2c-.2-.8-.8-1.4-1.6-1.6C14.6 4.2 10 4.2 10 4.2s-4.6 0-6 .4c-.8.2-1.4.8-1.6 1.6C2 7.6 2 10 2 10s0 2.4.4 3.8c.2.8.8 1.4 1.6 1.6 1.4.4 6 .4 6 .4s4.6 0 6-.4c.8-.2 1.4-.8 1.6-1.6.4-1.4.4-3.8.4-3.8s0-2.4-.4-3.8ZM8.5 12.5v-5l4.2 2.5-4.2 2.5Z" />
    </svg>
  );
}

/* ---------- AI showcase icons ---------- */

export function ImageTileIcon({ className = "size-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="2.5" y="4" width="19" height="16" rx="3" fill="#4DC869" />
      <circle cx="8.5" cy="9.5" r="1.8" fill="#fff" />
      <path d="m5 17 4.5-4.5 3 3L16 12l3 5H5Z" fill="#fff" />
    </svg>
  );
}

export function MicTileIcon({ className = "size-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="8.5" y="2.5" width="7" height="12" rx="3.5" fill="#FAD0F6" />
      <path
        d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3.5"
        stroke="#E58BD9"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PlayTileIcon({ className = "size-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="2.5" y="3.5" width="19" height="17" rx="4" fill="#7C8EFF" />
      <path d="M10 8.5v7l6-3.5-6-3.5Z" fill="#fff" />
    </svg>
  );
}

export function UploadIcon({ className = "size-4" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <path
        d="M8 11V3m0 0L4.8 6.2M8 3l3.2 3.2M3 13h10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SparkleIcon({ className = "size-3.5" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden>
      <path d="M8 1.5c.5 3 1.9 4.5 5 5-3.1 1-4.5 2.4-5 5.5-.5-3.1-1.9-4.5-5-5.5 3.1-.5 4.5-2 5-5Z" />
    </svg>
  );
}
