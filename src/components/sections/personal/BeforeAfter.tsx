const freeItems = [
  "Monthly upload limit (1 GB)",
  "One device synced",
  "No offline access",
  "No AI-powered search",
  "No PDF annotation",
  "Limited tasks & reminders",
];

const personalItems = [
  "Keep writing and capturing freely (100 GB/month)",
  "Unlimited devices in sync",
  "Notes available offline",
  "Find anything in seconds with AI search",
  "Annotate PDFs in your notes",
  "Full tasks & reminders",
];

function Cross() {
  return (
    <span
      className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#FDECEC] text-[#C0392B]"
      aria-hidden
    >
      <svg viewBox="0 0 12 12" className="size-3" fill="none">
        <path
          d="m3 3 6 6M9 3l-6 6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

function Check() {
  return (
    <span
      className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#E7F6EC] text-[#0F7B33]"
      aria-hidden
    >
      <svg viewBox="0 0 12 12" className="size-3" fill="none">
        <path
          d="m2.5 6 2.5 2.5L9.5 3.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function BeforeAfter() {
  return (
    <section className="px-5 py-12 md:py-16">
      <div className="mx-auto max-w-[720px] text-center">
        <h2 className="heading-3 text-balance">Before and after Personal</h2>
        <p className="mx-auto mt-4 max-w-[440px] text-[16px] leading-[1.55] text-text-secondary">
          Same second brain. Fewer stops.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-[960px] gap-5 md:grid-cols-2">
        <div className="rounded-card border border-stroke-cards bg-white p-7 md:p-8">
          <p className="text-[13px] font-semibold uppercase tracking-[0.06em] text-text-muted">
            Free
          </p>
          <p className="mt-2 text-[22px] font-semibold tracking-[-0.02em]">
            Where you are today
          </p>
          <ul className="mt-6 space-y-3.5">
            {freeItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[15px] text-text-tertiary"
              >
                <Cross />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-card border-2 border-brand-green bg-white p-7 shadow-showcase md:p-8">
          <p className="text-[13px] font-semibold uppercase tracking-[0.06em] text-brand-green">
            Personal
          </p>
          <p className="mt-2 text-[22px] font-semibold tracking-[-0.02em]">
            Where you keep going
          </p>
          <ul className="mt-6 space-y-3.5">
            {personalItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[15px] text-text-primary"
              >
                <Check />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
