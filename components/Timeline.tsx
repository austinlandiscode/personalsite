import type { Role } from "@/lib/data";

export default function Timeline({ roles, highlight = false }: { roles: Role[]; highlight?: boolean }) {
  return (
    <ol className="relative space-y-10 border-l border-line pl-8">
      {roles.map((r) => (
        <li key={r.company + r.start} className="relative">
          <span
            className={`absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-bg ${
              highlight ? "bg-accent" : "bg-dim"
            }`}
          />
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <h4 className="text-lg font-medium text-fg">
              {r.role} <span className="text-muted">· {r.company}</span>
            </h4>
            <p className="shrink-0 font-mono text-xs text-dim">
              {r.start} — {r.end} <span className="text-dim/70">({r.duration})</span>
            </p>
          </div>
          {r.location && <p className="mt-1 text-sm text-dim">{r.location}</p>}
          {r.points.length > 0 && (
            <ul className="mt-3 space-y-2">
              {r.points.map((p) => (
                <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                  <span className={`mt-2.5 h-1 w-1 shrink-0 rounded-full ${highlight ? "bg-accent" : "bg-dim"}`} />
                  {p}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}
