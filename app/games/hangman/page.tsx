import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Hangman from "@/components/Hangman";
import Nav from "@/components/Nav";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: `Hangman | ${profile.name}`,
  description: "Play Hangman in the browser: guess the hidden animal before your six lives run out.",
};

export default function HangmanPage() {
  return (
    <>
      <Nav />
      <main id="top" className="mx-auto max-w-4xl px-5 pb-24 pt-28 sm:px-8 sm:pt-36">
        <Link href="/games" className="font-mono text-sm text-muted transition-colors hover:text-accent">
          ← ~/games
        </Link>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Hangman</h1>
        <p className="mt-4 max-w-xl text-muted">
          Guess the hidden animal one letter at a time before your six lives run out. Originally a Python console
          game, rebuilt here in React.
        </p>
        <div className="mt-10">
          <Hangman />
        </div>
      </main>
      <Footer />
    </>
  );
}
