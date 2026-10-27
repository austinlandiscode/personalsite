import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Section from "@/components/Section";
import Terminal from "@/components/Terminal";
import Timeline from "@/components/Timeline";
import { education, engineeringRoles, otherRoles, profile, skillGroups, stats } from "@/lib/data";

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11H3v-11zM9.5 9.75h3.8v1.5h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1v5.45h-4v-4.83c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55v4.91h-4v-11z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        {/* Hero */}
        <div className="relative overflow-hidden">
          <div className="grid-bg pointer-events-none absolute inset-0" />
          <div className="glow pointer-events-none absolute inset-0" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-32 sm:px-8 sm:pt-40 lg:grid-cols-[1.15fr_1fr] lg:pb-28">
            <div className="rise">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1 font-mono text-xs text-muted">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Open to new opportunities
              </p>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
                Hi, I&apos;m {profile.firstName}.
                <br />
                <span className="text-gradient">I build commerce on the cloud.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{profile.tagline}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#experience"
                  className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
                >
                  View experience <Arrow />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 text-sm text-fg transition-colors hover:border-accent hover:text-accent"
                >
                  <LinkedInIcon /> LinkedIn
                </a>
              </div>
            </div>
            <div className="rise [animation-delay:150ms]">
              <Terminal />
            </div>
          </div>

          {/* Stats strip */}
          <div className="relative border-y border-line bg-surface/40">
            <dl className="mx-auto grid max-w-6xl grid-cols-2 px-5 sm:px-8 md:grid-cols-4">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`py-7 ${i % 2 ? "pl-6" : ""} ${i > 0 ? "md:border-l md:border-line md:pl-8" : ""} ${
                    i % 2 ? "border-l border-line" : ""
                  }`}
                >
                  <dt className="font-mono text-xs uppercase tracking-wider text-dim">{s.label}</dt>
                  <dd className="mt-1 text-2xl font-semibold text-fg">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* About */}
        <Section id="about" index="01" title="About">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-5 text-[17px] leading-relaxed text-muted">
              {profile.summary.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="rounded-xl border border-line bg-surface p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-dim">What I bring</p>
              <ul className="mt-5 space-y-4">
                {[
                  ["Platform depth", "Hands-on B2C Commerce Cloud and SFRA delivery"],
                  ["Fast onboarding", "Productive quickly inside existing client codebases"],
                  ["Ownership", "Ran my own business and led teams before writing code"],
                  ["Client focus", "Years of account and customer relationship experience"],
                ].map(([h, d]) => (
                  <li key={h} className="flex gap-3">
                    <span className="mt-1 text-accent">▹</span>
                    <div>
                      <p className="font-medium text-fg">{h}</p>
                      <p className="text-sm text-muted">{d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" index="02" title="Skills & Stack">
          <div className="grid gap-5 md:grid-cols-3">
            {skillGroups.map((g) => (
              <div
                key={g.title}
                className="group rounded-xl border border-line bg-surface p-6 transition-colors hover:border-accent/50"
              >
                <h3 className="font-mono text-sm text-accent">{g.title}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li
                      key={s}
                      className="rounded-md border border-line bg-surface-2 px-2.5 py-1 text-sm text-muted"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" index="03" title="Experience">
          <div className="grid gap-16 lg:grid-cols-[220px_1fr]">
            <h3 className="font-mono text-sm text-dim lg:sticky lg:top-24 lg:self-start">
              <span className="text-accent">{"//"}</span> Software engineering
            </h3>
            <Timeline roles={engineeringRoles} highlight />

            <h3 className="font-mono text-sm text-dim lg:sticky lg:top-24 lg:self-start">
              <span className="text-accent">{"//"}</span> Leadership & operations
            </h3>
            <Timeline roles={otherRoles} />
          </div>
        </Section>

        {/* Education */}
        <Section id="education" index="04" title="Education">
          <div className="grid gap-5 md:grid-cols-2">
            {education.map((e) => (
              <div key={e.school} className="rounded-xl border border-line bg-surface p-6">
                <p className="font-mono text-xs text-dim">{e.years}</p>
                <h3 className="mt-2 text-lg font-medium text-fg">{e.school}</h3>
                <p className="mt-1 text-muted">{e.detail}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-5 pb-28 pt-10 sm:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-line bg-surface px-6 py-14 text-center sm:px-12 sm:py-20">
            <div className="glow pointer-events-none absolute inset-0" />
            <div className="relative">
              <p className="font-mono text-sm text-accent">05 · What&apos;s next</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Let&apos;s build something.</h2>
              <p className="mx-auto mt-5 max-w-xl text-muted">
                I&apos;m looking for my next software development role. If you have a team, a project, or a
                question, my inbox is open.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90"
                >
                  Say hello <Arrow />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-line px-6 py-3 text-sm text-fg transition-colors hover:border-accent hover:text-accent"
                >
                  <LinkedInIcon /> Connect on LinkedIn
                </a>
              </div>
              <p className="mt-8 break-all font-mono text-xs text-dim">{profile.email}</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
