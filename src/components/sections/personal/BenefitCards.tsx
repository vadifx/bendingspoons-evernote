import type { ReactNode } from "react";
import {
  NotebookFlat,
  SearchFlat,
  PhoneIcon,
} from "@/components/ui/icons";

const benefits: {
  icon: ReactNode;
  title: string;
  body: string;
}[] = [
  {
    icon: <PhoneIcon className="size-10" />,
    title: "Work from anywhere",
    body: "Open notes offline on the train, in a meeting, or in the air, even with no signal.",
  },
  {
    icon: <SearchFlat className="size-11" />,
    title: "Find any note in seconds",
    body: "AI-powered search surfaces the right note among years of notes, even if you only remember a detail.",
  },
  {
    icon: <NotebookFlat className="size-11" />,
    title: "Save without stopping",
    body: "100 GB upload every month and notes up to 200 MB, with room for PDFs, scans, and long recordings.",
  },
];

export default function BenefitCards() {
  return (
    <section className="px-5 py-12 md:py-20">
      <div className="mx-auto max-w-[720px] text-center">
        <h2 className="heading-3 text-balance">What actually changes</h2>
        <p className="mx-auto mt-4 max-w-[480px] text-[16px] leading-[1.55] text-text-secondary">
          Three upgrades that remove the friction you feel every day, not a
          laundry list of specs.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-[1040px] gap-6 md:grid-cols-3">
        {benefits.map((b, i) => (
          <article
            key={b.title}
            className="group flex flex-col rounded-card bg-bg-secondary p-8 shadow-showcase transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_12px_32px_-8px_rgba(0,0,21,0.16),0_0_0_1px_rgba(0,0,21,0.08)]"
            style={{ animationDelay: `${120 + i * 80}ms` }}
          >
            <div className="transition-transform duration-300 group-hover:scale-105">
              {b.icon}
            </div>
            <h3 className="mt-6 text-[20px] font-semibold tracking-[-0.02em] text-text-primary">
              {b.title}
            </h3>
            <p className="mt-2 text-[15px] leading-[1.5] text-text-tertiary">
              {b.body}
            </p>
          </article>
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-[520px] text-center text-[14px] text-text-muted">
        Plus unlimited synced devices, full tasks & reminders, and PDF
        annotation, all included in Personal.
      </p>
    </section>
  );
}
