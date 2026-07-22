import Button from "@/components/ui/Button";
import BrandShape from "@/components/ui/BrandShape";

type Cell =
  | { type: "text"; value: string }
  | { type: "check" }
  | { type: "cross" };

type Row = {
  feature: string;
  free: Cell;
  personal: Cell;
};

const rows: Row[] = [
  {
    feature: "Devices synced",
    free: { type: "text", value: "1" },
    personal: { type: "text", value: "Unlimited" },
  },
  {
    feature: "Monthly upload limit",
    free: { type: "text", value: "1 GB" },
    personal: { type: "text", value: "100 GB" },
  },
  {
    feature: "Note size limit",
    free: { type: "text", value: "25 MB" },
    personal: { type: "text", value: "200 MB" },
  },
  {
    feature: "Offline access",
    free: { type: "cross" },
    personal: { type: "check" },
  },
  {
    feature: "AI-powered search",
    free: { type: "cross" },
    personal: { type: "check" },
  },
  {
    feature: "PDF annotation",
    free: { type: "cross" },
    personal: { type: "check" },
  },
  {
    feature: "Tasks & reminders",
    free: { type: "text", value: "Limited" },
    personal: { type: "text", value: "Full" },
  },
];

function CheckMark() {
  return (
    <span
      className="inline-flex size-6 items-center justify-center rounded-full bg-[#E7F6EC] text-[#0F7B33]"
      aria-label="Included"
    >
      <svg viewBox="0 0 12 12" className="size-3" fill="none" aria-hidden>
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

function CrossMark() {
  return (
    <span
      className="inline-flex size-6 items-center justify-center rounded-full bg-bg-primary text-text-muted"
      aria-label="Not included"
    >
      <svg viewBox="0 0 12 12" className="size-3" fill="none" aria-hidden>
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

function CellView({ cell, emphasize }: { cell: Cell; emphasize?: boolean }) {
  if (cell.type === "check") return <CheckMark />;
  if (cell.type === "cross") return <CrossMark />;
  return (
    <span
      className={`text-[14px] ${
        emphasize ? "font-semibold text-text-primary" : "text-text-secondary"
      }`}
    >
      {cell.value}
    </span>
  );
}

export default function PlanTable() {
  return (
    <section id="compare" className="relative scroll-mt-24 overflow-hidden px-5 py-12 md:py-20">
      <BrandShape
        name="star"
        className="pointer-events-none absolute -right-10 bottom-16 size-32 text-accent-purple opacity-[0.12] md:-right-12 md:size-40"
      />

      <div id="upgrade" className="relative mx-auto max-w-[720px] scroll-mt-28 text-center">
        <h2 className="heading-3 text-balance">Free vs Personal</h2>
        <p className="mx-auto mt-4 max-w-[480px] text-[16px] leading-[1.55] text-text-secondary">
          Side by side, everything that changes when you unlock Personal.
        </p>
      </div>

      <div className="mx-auto mt-14 hidden max-w-[800px] rounded-card border border-stroke-cards bg-white shadow-showcase animate-fade-up md:block">
        <div className="grid grid-cols-[1.4fr_1fr_1.15fr] border-b border-stroke-cards">
          <div className="p-5" />
          <div className="border-l border-stroke-cards p-5 text-center">
            <p className="text-[15px] font-semibold">Free</p>
            <p className="mt-2 text-[22px] font-semibold">€0.00/mo</p>
          </div>
          <div className="relative border-l border-stroke-cards bg-[#F0FDF4]/15 p-5 text-center">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-pill bg-brand-green px-3 py-0.5 text-[11px] font-semibold text-white">
              Recommended
            </span>
            <p className="text-[15px] font-semibold">Personal</p>
            <p className="mt-2 text-[22px] font-semibold">€7.99/mo</p>
            <p className="mt-1 text-[12px] text-text-muted">
              Less than two coffees
            </p>
          </div>
        </div>

        {rows.map((row, i) => (
          <div
            key={row.feature}
            className={`grid grid-cols-[1.4fr_1fr_1.15fr] ${
              i < rows.length - 1 ? "border-b border-stroke-cards" : ""
            } ${i % 2 === 1 ? "bg-bg-primary/50" : ""}`}
          >
            <div className="flex items-center px-5 py-3.5 text-[14px] font-medium text-text-primary">
              {row.feature}
            </div>
            <div className="flex items-center justify-center border-l border-stroke-cards px-3 py-3.5">
              <CellView cell={row.free} />
            </div>
            <div className="flex items-center justify-center border-l border-stroke-cards bg-[#F0FDF4]/15 px-3 py-3.5">
              <CellView cell={row.personal} emphasize />
            </div>
          </div>
        ))}

        <div className="grid grid-cols-[1.4fr_1fr_1.15fr] border-t border-stroke-cards">
          <div className="p-5" />
          <div className="border-l border-stroke-cards p-5" />
          <div className="flex items-center justify-center border-l border-stroke-cards bg-[#F0FDF4]/15 p-5">
            <Button
              variant="green"
              size="md"
              upgrade
              className="w-full max-w-[200px]"
            >
              Unlock everything
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile cards */}
      <div className="mx-auto mt-10 flex max-w-[400px] flex-col gap-4 md:hidden">
        {(
          [
            {
              name: "Free",
              price: "€0.00/mo",
              highlight: false,
              key: "free" as const,
            },
            {
              name: "Personal",
              price: "€7.99/mo",
              highlight: true,
              key: "personal" as const,
            },
          ] as const
        ).map((plan) => (
          <div
            key={plan.name}
            className={`rounded-card border bg-white p-5 shadow-showcase ${
              plan.highlight
                ? "border-2 border-brand-green"
                : "border-stroke-cards"
            }`}
          >
            {plan.highlight && (
              <span className="mb-2 inline-block rounded-pill bg-brand-green px-2.5 py-0.5 text-[11px] font-semibold text-white">
                Recommended
              </span>
            )}
            <p className="text-[17px] font-semibold">{plan.name}</p>
            <p className="mt-1 text-[20px] font-semibold">{plan.price}</p>
            <ul className="mt-4 space-y-2.5">
              {rows.map((row) => (
                <li
                  key={row.feature}
                  className="flex items-center justify-between gap-3 text-[13px]"
                >
                  <span className="text-text-tertiary">{row.feature}</span>
                  <CellView cell={row[plan.key]} emphasize={plan.highlight} />
                </li>
              ))}
            </ul>
            {plan.highlight && (
              <div className="mt-5">
                <Button variant="green" size="md" upgrade className="w-full">
                  Unlock everything
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
