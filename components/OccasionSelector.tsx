"use client";

import { useRef, type KeyboardEvent } from "react";
import { OCCASION_OPTIONS } from "@/data/options";
import type { Occasion } from "@/types";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

interface Props {
  selected: Occasion | null;
  onSelect: (v: Occasion) => void;
}

export default function OccasionSelector({ selected, onSelect }: Props) {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: KeyboardEvent, index: number) => {
    const last = OCCASION_OPTIONS.length - 1;
    let next = -1;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = index === last ? 0 : index + 1;
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = index === 0 ? last : index - 1;
    if (next >= 0) {
      e.preventDefault();
      onSelect(OCCASION_OPTIONS[next]);
      refs.current[next]?.focus();
    }
  };

  return (
    <section id="occasion" className="bg-ivory py-24 md:py-40">
      <div className="mx-auto max-w-[1100px] px-5 text-center md:px-12">
        <SectionHeader
          eyebrow="04 — Occasion"
          title="Where are you going?"
          subtitle="One moment at a time."
          hint="Choose one"
          align="center"
        />

        <div
          role="radiogroup"
          aria-label="Occasion"
          className="flex flex-wrap justify-center gap-3 md:gap-4"
        >
          {OCCASION_OPTIONS.map((occ, i) => {
            const isSelected = selected === occ;
            return (
              <Reveal key={occ} delay={i * 50}>
                <button
                  ref={(el) => {
                    refs.current[i] = el;
                  }}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  tabIndex={isSelected || (!selected && i === 0) ? 0 : -1}
                  onClick={() => onSelect(occ)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  className={`rounded-full border px-7 py-4 font-serif text-xl transition-all duration-500 md:px-10 md:py-5 md:text-2xl ${
                    isSelected
                      ? "border-burgundy bg-burgundy text-ivory shadow-[0_18px_40px_-18px_rgba(94,26,42,0.8)]"
                      : "border-charcoal/20 text-ink hover:border-gold hover:bg-cream"
                  }`}
                >
                  {occ}
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
