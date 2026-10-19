import { profile } from "@/lib/data";

const lines: { cmd: string; out: React.ReactNode }[] = [
  {
    cmd: "whoami",
    out: (
      <>
        {profile.name} <span className="text-dim">— {profile.title}</span>
      </>
    ),
  },
  {
    cmd: "cat stack.json",
    out: (
      <>
        {"{ "}
        <span className="text-accent-2">&quot;platform&quot;</span>: <span className="text-accent">&quot;SFCC B2C&quot;</span>,{" "}
        <span className="text-accent-2">&quot;framework&quot;</span>: <span className="text-accent">&quot;SFRA&quot;</span>,{" "}
        <span className="text-accent-2">&quot;lang&quot;</span>: <span className="text-accent">&quot;JavaScript&quot;</span>
        {" }"}
      </>
    ),
  },
  {
    cmd: "echo $LOCATION",
    out: profile.location,
  },
];

export default function Terminal() {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface/90 shadow-2xl shadow-black/40 backdrop-blur">
      <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-dim">austin@lincoln: ~</span>
      </div>
      <div className="space-y-4 p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
        {lines.map((l) => (
          <div key={l.cmd}>
            <p>
              <span className="text-accent">❯</span> <span className="text-fg">{l.cmd}</span>
            </p>
            <p className="break-words text-muted">{l.out}</p>
          </div>
        ))}
        <p>
          <span className="text-accent">❯</span> <span className="cursor inline-block h-4 w-2 translate-y-0.5 bg-accent" />
        </p>
      </div>
    </div>
  );
}
