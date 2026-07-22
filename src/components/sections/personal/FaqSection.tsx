"use client";

import { useState } from "react";
import { ChevronDown } from "@/components/ui/icons";

const faqs = [
  {
    q: "Will I lose my notes if I upgrade?",
    a: "No. Everything you’ve already saved stays exactly where it is. Personal unlocks more room and features on top of your existing notes.",
  },
  {
    q: "What happens if I stay on Free?",
    a: "Your notes remain safe. You keep using Evernote with Free limits: 1 synced device, 1 GB upload per month, and no offline access or AI-powered search.",
  },
  {
    q: "Can I go back to Free later?",
    a: "Yes. Your notes stay in your account. Paid features pause if you return to Free, and Free limits apply again.",
  },
  {
    q: "What do I get with Personal that Free doesn’t have?",
    a: "Unlimited devices, offline access, AI-powered search, PDF annotation, full tasks and reminders, 100 GB of monthly uploads, and notes up to 200 MB.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="px-5 py-12 md:py-20">
      <div className="mx-auto max-w-[1000px]">
        <h2 className="heading-3 text-center text-balance">Questions</h2>
        <p className="mx-auto mt-4 max-w-[440px] text-center text-[16px] text-text-secondary">
          Straight answers before you decide.
        </p>

        <div className="mt-10 divide-y divide-stroke-cards border-y border-stroke-cards">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[16px] font-semibold text-text-primary md:text-[17px]">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`size-4 shrink-0 text-text-muted transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] pb-5 opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="overflow-hidden text-[15px] leading-[1.55] text-text-tertiary">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
