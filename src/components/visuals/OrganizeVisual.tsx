import Image from "next/image";
import {
  NotebookLineIcon,
  ChevronDown,
  FlagIcon,
} from "@/components/ui/icons";

const notebooks = [
  { name: "Content Ideas 💡", indent: false },
  { name: "Video scripts ✏️", indent: false },
  { name: "Admin", indent: false, chevron: true },
  { name: "Collabs 👥", indent: true },
  { name: "Planning 🗓️", indent: true, active: true },
];

export default function OrganizeVisual() {
  return (
    <div className="relative mx-auto aspect-[10/9] w-full max-w-[520px]">
      {/* Foto lifestyle */}
      <div className="absolute left-0 top-[8%] h-[76%] w-[72%] overflow-hidden rounded-card">
        <Image
          src="https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=900&q=75"
          alt="Creator sorridente alla scrivania con le cuffie"
          fill
          sizes="(max-width: 768px) 70vw, 380px"
          className="object-cover"
        />
      </div>

      {/* Pill tag */}
      <span className="absolute left-[30%] top-0 z-10 inline-flex items-center gap-1 rounded-pill bg-white px-2.5 py-1 text-[11px] font-medium shadow-showcase">
        🔒 Draft <span className="text-text-muted">(8)</span>
      </span>
      <span className="absolute left-0 top-[16%] z-10 inline-flex items-center gap-1 rounded-pill bg-white px-2.5 py-1 text-[11px] font-medium shadow-showcase">
        💡 Ideas <span className="text-text-muted">(24)</span>
      </span>
      <span className="absolute bottom-[24%] right-[6%] z-10 inline-flex items-center gap-1 rounded-pill bg-white px-2.5 py-1 text-[11px] font-medium shadow-showcase">
        👥 Collabs <span className="text-text-muted">(18)</span>
      </span>

      {/* Menu Notebooks */}
      <div className="absolute right-0 top-[4%] z-20 w-[54%] max-w-[230px] rounded-control bg-white p-3 shadow-showcase">
        <p className="flex items-center gap-1.5 text-[12px] font-semibold">
          <ChevronDown className="size-3" />
          <NotebookLineIcon className="size-3" /> Notebooks
        </p>
        <ul className="mt-2 space-y-1">
          {notebooks.map((n) => (
            <li
              key={n.name}
              className={`flex items-center gap-1.5 rounded-[5px] px-2 py-1 text-[11.5px] ${
                n.indent ? "ml-4" : "ml-1"
              } ${n.active ? "bg-bg-secondary" : ""}`}
            >
              {n.chevron ? (
                <ChevronDown className="size-2.5 -rotate-90 text-text-muted" />
              ) : (
                <NotebookLineIcon className="size-3 text-text-tertiary" />
              )}
              {n.name}
            </li>
          ))}
          <li className="ml-1 flex items-center gap-1.5 px-2 py-1 text-[11.5px] font-medium text-brand-green">
            + New Notebook
          </li>
        </ul>
      </div>

      {/* Task card */}
      <div className="absolute bottom-0 left-[8%] z-20 w-[62%] max-w-[270px] rounded-control bg-white p-3.5 shadow-showcase">
        <div className="flex items-start gap-2.5 border-b border-stroke-cards pb-2.5">
          <span className="mt-0.5 size-3.5 shrink-0 rounded-full border-[1.5px] border-stroke-buttons" />
          <div className="min-w-0">
            <p className="truncate text-[12px] font-medium">Record Q&A video</p>
            <p className="flex items-center gap-1.5 text-[10px] text-text-muted">
              Due today, 4:30 PM <FlagIcon className="size-2.5" />
              <span className="size-3 rounded-full bg-accent-orange" />
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2.5 border-b border-stroke-cards py-2.5">
          <span className="flex size-3.5 shrink-0 items-center justify-center rounded-full bg-accent-purple">
            <svg viewBox="0 0 10 10" className="size-2" fill="none" aria-hidden>
              <path
                d="m2 5 2 2 4-4"
                stroke="#fff"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <p className="text-[12px] text-text-muted line-through">
            Edit tutorial script
          </p>
        </div>
        <div className="flex items-center gap-2.5 pt-2.5">
          <span className="size-3.5 shrink-0 rounded-full border-[1.5px] border-stroke-buttons" />
          <p className="text-[12px] text-text-muted">
            Enter task
            <span className="ml-0.5 inline-block h-3 w-px translate-y-0.5 bg-text-primary align-baseline" />
          </p>
          <FlagIcon className="ml-auto size-2.5" />
        </div>
      </div>
    </div>
  );
}
