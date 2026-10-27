"use client";

import { useCallback, useEffect, useState } from "react";

// Same rules as app/games/hangman.py: an animal word list and six lives.
const WORDS = [
  "aardvark", "baboon", "camel", "dolphin", "elephant", "flamingo", "giraffe", "hippopotamus", "iguana",
  "jaguar", "kangaroo", "lemur", "meerkat", "narwhal", "octopus", "penguin", "quokka", "rhinoceros",
  "sloth", "tortoise", "uakari", "vulture", "walrus", "xenops", "yak", "zebra",
];
const LIVES = 6;
const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");

function pickWord(previous?: string) {
  let word;
  do word = WORDS[Math.floor(Math.random() * WORDS.length)];
  while (word === previous);
  return word;
}

// Body parts appear in order, one per wrong guess.
const PARTS = [
  <circle key="head" cx="140" cy="62" r="16" />,
  <line key="body" x1="140" y1="78" x2="140" y2="130" />,
  <line key="arm-l" x1="140" y1="92" x2="118" y2="112" />,
  <line key="arm-r" x1="140" y1="92" x2="162" y2="112" />,
  <line key="leg-l" x1="140" y1="130" x2="120" y2="160" />,
  <line key="leg-r" x1="140" y1="130" x2="160" y2="160" />,
];

function Drawing({ wrong, lost }: { wrong: number; lost: boolean }) {
  return (
    <svg viewBox="0 0 200 200" className="h-auto w-full max-w-[220px]" aria-hidden>
      <g stroke="var(--color-dim)" strokeWidth="4" strokeLinecap="round" fill="none">
        <line x1="30" y1="185" x2="120" y2="185" />
        <line x1="60" y1="185" x2="60" y2="20" />
        <line x1="60" y1="20" x2="140" y2="20" />
        <line x1="140" y1="20" x2="140" y2="46" />
      </g>
      <g
        stroke={lost ? "var(--color-muted)" : "var(--color-accent)"}
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      >
        {PARTS.slice(0, wrong)}
      </g>
    </svg>
  );
}

export default function Hangman() {
  // Picked after mount so the server and browser render the same thing.
  const [word, setWord] = useState<string | null>(null);
  const [guessed, setGuessed] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => setWord(pickWord()), []);

  const wrong = word ? guessed.filter((l) => !word.includes(l)).length : 0;
  const lives = LIVES - wrong;
  const won = !!word && [...word].every((l) => guessed.includes(l));
  const lost = lives <= 0;
  const over = won || lost;

  const guess = useCallback(
    (letter: string) => {
      if (!word || over) return;
      if (guessed.includes(letter)) {
        setMessage(`You already guessed ${letter.toUpperCase()}. Try another letter.`);
        return;
      }
      setMessage("");
      setGuessed((g) => [...g, letter]);
    },
    [word, over, guessed],
  );

  const newGame = useCallback(() => {
    setWord((w) => pickWord(w ?? undefined));
    setGuessed([]);
    setMessage("");
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const key = e.key.toLowerCase();
      if (over && key === "enter") newGame();
      else if (/^[a-z]$/.test(key)) guess(key);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [guess, newGame, over]);

  return (
    <div className="rounded-2xl border border-line bg-surface p-6 sm:p-10">
      <div className="grid items-center gap-10 md:grid-cols-[220px_1fr]">
        <div className="flex justify-center">
          <Drawing wrong={wrong} lost={lost} />
        </div>

        <div>
          <div className="flex items-center justify-between font-mono text-sm">
            <span className="text-dim">guess the animal</span>
            <span className={lives <= 2 && !over ? "text-accent-2" : "text-muted"}>
              lives: <span className="text-fg">{lives}</span>
            </span>
          </div>

          <p className="mt-6 flex flex-wrap gap-2 font-mono text-2xl sm:text-3xl" aria-label="Word">
            {word
              ? [...word].map((l, i) => {
                  const shown = guessed.includes(l);
                  return (
                    <span
                      key={i}
                      className={`flex h-11 w-8 items-end justify-center border-b-2 pb-1 uppercase sm:w-9 ${
                        shown ? "border-accent text-fg" : lost ? "border-line text-accent-2" : "border-line"
                      }`}
                    >
                      {shown || lost ? l : ""}
                    </span>
                  );
                })
              : <span className="h-11" />}
          </p>

          <p className="mt-6 min-h-6 text-sm" aria-live="polite">
            {won && <span className="text-accent">You win! 🎉</span>}
            {lost && <span className="text-muted">You lose! The word was <span className="text-fg">{word}</span>.</span>}
            {!over && message && <span className="text-muted">{message}</span>}
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-7 gap-2 sm:grid-cols-[repeat(13,minmax(0,1fr))]">
        {ALPHABET.map((l) => {
          const used = guessed.includes(l);
          const hit = used && !!word?.includes(l);
          return (
            <button
              key={l}
              type="button"
              onClick={() => guess(l)}
              disabled={used || over || !word}
              aria-label={`Guess ${l.toUpperCase()}`}
              className={`h-11 rounded-md border font-mono text-sm uppercase transition-colors ${
                hit
                  ? "border-accent/50 bg-accent/10 text-accent"
                  : used
                    ? "border-line text-dim line-through"
                    : "border-line bg-surface-2 text-fg hover:border-accent hover:text-accent disabled:opacity-50 disabled:hover:border-line disabled:hover:text-fg"
              }`}
            >
              {l}
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-xs text-dim">Tip: you can type letters on your keyboard.</p>
        <button
          type="button"
          onClick={newGame}
          className={`rounded-md px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-90 ${
            over ? "bg-accent text-bg" : "border border-line text-fg hover:border-accent hover:text-accent"
          }`}
        >
          New game{over && " ↵"}
        </button>
      </div>
    </div>
  );
}
