"use client";

import { useEffect, useState } from "react";

const MESSAGES = [
  "Reading your style...",
  "Understanding your presence...",
  "Curating your pieces...",
];

export const LOADING_DURATION_MS = 3600;

export default function StyleLoading() {
  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const step = LOADING_DURATION_MS / MESSAGES.length;
    const timers = [1, 2].map((i) => setTimeout(() => setIndex(i), step * i));
    const raf = requestAnimationFrame(() => setStarted(true));
    return () => {
      timers.forEach(clearTimeout);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-[100] grid animate-fadeIn place-items-center bg-ink px-6 text-center text-ivory"
    >
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-burgundy/40 blur-[110px]"
      />
      <div className="relative">
        <p className="font-serif text-3xl tracking-[0.5em] text-gold">TANTORA</p>
        <p
          key={index}
          className="mt-14 animate-fadeUp font-serif text-4xl font-light italic md:text-6xl"
        >
          {MESSAGES[index]}
        </p>
        <div className="mx-auto mt-14 h-px w-56 bg-ivory/15 md:w-72">
          <div
            className="h-px bg-gold transition-[width] ease-linear"
            style={{
              width: started ? "100%" : "0%",
              transitionDuration: `${LOADING_DURATION_MS}ms`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
