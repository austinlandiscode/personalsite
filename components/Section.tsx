export default function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="mb-12 flex items-center gap-4">
        <span className="font-mono text-sm text-accent">{index}</span>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
        <span className="h-px flex-1 bg-line" />
      </div>
      {children}
    </section>
  );
}
