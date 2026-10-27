import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { games, profile } from "@/lib/data";

export const metadata: Metadata = {
  title: `Games | ${profile.name}`,
  description: `Games built by ${profile.name}.`,
};

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7 4.5v15l13-7.5-13-7.5z" />
    </svg>
  );
}

export default function Games() {
  return (
    <>
      <Nav />
      <main id="top">
        {/* Header */}
        <div className="relative overflow-hidden border-b border-line">
          <div className="grid-bg pointer-events-none absolute inset-0" />
          <div className="glow pointer-events-none absolute inset-0" />
          <div className="rise relative mx-auto max-w-6xl px-5 pb-16 pt-32 sm:px-8 sm:pt-40">
            <p className="font-mono text-sm text-accent">~/games</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
              Things I&apos;ve <span className="text-gradient">built for fun.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Side projects where I get to experiment with game loops, physics, and design outside of commerce work.
            </p>
          </div>
        </div>

        {/* Game grid */}
        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {games.map((g) => (
              <li
                key={g.title}
                className="group flex flex-col overflow-hidden rounded-xl border border-line bg-surface transition-colors hover:border-accent/50"
              >
                <div className="relative aspect-video border-b border-line bg-surface-2">
                  {g.image ? (
                    <Image src={g.image} alt={`Screenshot of ${g.title}`} fill className="object-cover" />
                  ) : (
                    <div className="grid-bg absolute inset-0 flex items-center justify-center">
                      <span className="font-mono text-xs text-dim">screenshot coming soon</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-xs text-dim">{g.year}</p>
                  <h2 className="mt-2 text-lg font-medium text-fg">{g.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{g.description}</p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {g.tech.map((t) => (
                      <li key={t} className="rounded-md border border-line bg-surface-2 px-2.5 py-1 text-xs text-muted">
                        {t}
                      </li>
                    ))}
                  </ul>

                  {(g.playUrl || g.repoUrl) && (
                    <div className="mt-6 flex gap-3">
                      {g.playUrl && (
                        <a
                          href={g.playUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-90"
                        >
                          <PlayIcon /> Play
                        </a>
                      )}
                      {g.repoUrl && (
                        <a
                          href={g.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm text-fg transition-colors hover:border-accent hover:text-accent"
                        >
                          <GitHubIcon /> Code
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
