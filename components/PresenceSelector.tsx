"use client";

import { Check } from "lucide-react";
import { PRESENCE_OPTIONS } from "@/data/options";
import type { Presence } from "@/types";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

interface Props {
  selected: Presence[];
  onToggle: (v: Presence) => void;
}

export default function PresenceSelector({ selected, onToggle }: Props) {
  return (
    <section
      id="presence"
      className="relative overflow-hidden bg-ink py-24 text-ivory md:py-44"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-burgundy/30 blur-[140px]"
      />
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-12">
        <SectionHeader
          eyebrow="03 — Presence"
          title="How do you want to be remembered?"
          subtitle="Your clothes speak before you do."
          hint="This is the heart of it — choose freely"
          count={selected.length}
          dark
        />

        <div
          role="group"
          aria-label="Desired presence"
          className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-5 md:gap-4 md:overflow-visible md:px-0 md:pb-0"
        >
          {PRESENCE_OPTIONS.map((opt, i) => {
            const isSelected = selected.includes(opt.value);
            return (
              <div
                key={opt.value}
                className="w-[72vw] shrink-0 snap-start sm:w-[44vw] md:w-auto"
              >
                <Reveal delay={(i % 5) * 80} className="h-full">
                  <button
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => onToggle(opt.value)}
                    className={`group relative flex h-full min-h-[340px] w-full flex-col justify-between overflow-hidden border p-6 text-left transition-all duration-700 md:min-h-[400px] ${
                      isSelected
                        ? "border-gold bg-gradient-to-b from-burgundy via-[#3a0f1a] to-ink shadow-[0_0_70px_-12px_rgba(184,151,90,0.45)] md:-translate-y-2"
                        : "border-ivory/15 bg-ivory/[0.02] hover:border-ivory/40 hover:bg-ivory/[0.05]"
                    }`}
                  >
                    {/* oversized initial */}
                    <span
                      aria-hidden
                      className={`pointer-events-none absolute -bottom-6 -right-2 select-none font-serif text-[11rem] font-light italic leading-none transition-all duration-700 ${
                        isSelected ? "text-gold/20" : "text-ivory/[0.04]"
                      }`}
                    >
                      {opt.value[0]}
                    </span>

                    <div className="relative flex items-start justify-between">
                      <span
                        className={`text-[10px] font-medium uppercase tracking-widest2 transition-colors duration-500 ${
                          isSelected ? "text-gold" : "text-ivory/35"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        aria-hidden
                        className={`grid h-7 w-7 place-items-center rounded-full bg-gold text-ink transition-all duration-500 ${
                          isSelected ? "scale-100 opacity-100" : "scale-50 opacity-0"
                        }`}
                      >
                        <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                      </span>
                    </div>

                    <div className="relative">
                      <span
                        className={`block h-px bg-gold transition-all duration-700 ${
                          isSelected ? "mb-6 w-12" : "mb-6 w-6 opacity-40"
                        }`}
                      />
                      <span
                        className={`block font-serif font-light uppercase leading-none tracking-wide transition-all duration-700 ${
                          isSelected ? "text-[2.1rem] text-ivory" : "text-3xl text-ivory/85"
                        }`}
                      >
                        {opt.value}
                      </span>
                      <span
                        className={`mt-4 block font-serif text-xl italic transition-colors duration-700 ${
                          isSelected ? "text-gold" : "text-ivory/50"
                        }`}
                      >
                        “{opt.quote}”
                      </span>
                    </div>
                  </button>
                </Reveal>
              </div>
            );
          })}
        </div>
        <p className="mt-6 text-center text-[10px] uppercase tracking-widest2 text-ivory/35 md:hidden">
          Swipe to explore →
        </p>
      </div>
    </section>
  );
}
