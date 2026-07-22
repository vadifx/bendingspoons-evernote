import Image from "next/image";
import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Evernote — home"
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src="/evernote-logo.png"
        alt="Evernote"
        width={148}
        height={32}
        className="h-8 w-auto"
        priority
      />
    </Link>
  );
}
