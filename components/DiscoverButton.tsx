"use client";

import { ArrowRight, Check } from "lucide-react";
import Reveal from "./Reveal";

export interface Step {
  id: string;
  label: string;
  done: boolean;
}

interface Props {
  steps: Step[];
  showError: boolean;
  onDiscover: () => void;
  onNavigate: (id: string) => void;
}

export default function DiscoverButton({ steps, showError, onDiscover, onNavigate }: Props) {
  const missing = steps.filter((s) => !s.done);
  const ready = missing.length === 0;

  return (
    <section
      id="discover"
      className="relative overflow-hidden bg-gradient-to-b from-burgundy via-[#3a0f1a] to-ink py-28 text-ivory md:py-44"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[120px]"
      />
      <div className="relative mx-auto max-w-[900px] px-5 text-center md:px-12">
        <Reveal>
          <p className="mb-6 text-[11px] font-medium uppercase tracking-widest2 text-gold">
            The moment
          </p>
          <h2 className="font-serif text-5xl font-light leading-[1.02] md:text-8xl">
            Ready to meet <em className="italic text-[#e3bcbc]">your style?</em>
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <ul className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[11px] uppercase tracking-widest2">
            {steps.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => onNavigate(s.id)}
                  className={`inline-flex items-center gap-2 transition-colors duration-500 ${
                    s.done ? "text-gold" : "text-ivory/45 hover:text-ivory"
                  }`}
                >
                  <span
                    className={`grid h-4 w-4 place-items-center rounded-full border ${
                      s.done ? "border-gold bg-gold text-ink" : "border-ivory/30"
                    }`}
                  >
                    {s.done && <Check className="h-2.5 w-2.5" strokeWidth={3} />}
                  </span>
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={250}>
          <button
            onClick={onDiscover}
            className={`group mt-14 inline-flex items-center gap-4 px-10 py-5 text-[12px] font-semibold uppercase tracking-widest2 transition-all duration-500 md:px-14 md:py-6 ${
              ready
                ? "bg-ivory text-ink hover:bg-gold"
                : "border border-ivory/40 text-ivory hover:border-ivory"
            }`}
          >
            Discover My Style
            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5" />
          </button>
        </Reveal>

        <div aria-live="polite" className="mt-8 min-h-[3rem]">
          {showError && !ready && (
            <p className="mx-auto max-w-md animate-fadeUp font-serif text-xl italic text-[#e3bcbc]">
              Almost there — tell us your{" "}
              {missing.map((m) => m.label.toLowerCase()).join(" and ")} so we can curate
              for you.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
