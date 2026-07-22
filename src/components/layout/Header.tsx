"use client";

import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 h-[81px] bg-bg-primary">
      <div className="mx-auto flex h-full w-full max-w-[1320px] items-center px-5 lg:px-8">
        <Logo />

        <div className="ml-auto hidden items-center gap-3 lg:flex">
          <a
            href="#"
            className="mr-2 text-[15px] text-text-primary transition-opacity duration-300 hover:opacity-70"
          >
            Log in
          </a>
          <Button variant="outline" size="md" href="#">
            Download
          </Button>
          <Button variant="primary" size="md" upgrade>
            Continue without limits
          </Button>
        </div>

        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <a
            href="#"
            className="mr-1 text-[15px] text-text-primary transition-opacity duration-300 hover:opacity-70"
          >
            Log in
          </a>
          <Button variant="primary" size="sm" upgrade>
            Upgrade
          </Button>
        </div>
      </div>
    </header>
  );
}
