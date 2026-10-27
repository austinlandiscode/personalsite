import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import ProjectCard from "@/components/ProjectCard";
import { games, profile } from "@/lib/data";

export const metadata: Metadata = {
  title: `Games | ${profile.name}`,
  description: `Games built by ${profile.name}.`,
};

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
              Side projects where I get to experiment with game loops, physics, and design.
            </p>
          </div>
        </div>

        {/* Game grid */}
        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {games.map((g) => (
              <ProjectCard key={g.title} project={g} liveLabel="Play" />
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
