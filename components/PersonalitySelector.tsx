"use client";

import {
  Check,
  Compass,
  Crown,
  Flame,
  Flower2,
  Gem,
  Heart,
  Moon,
  Sparkles,
  Zap,
  Circle,
  type LucideIcon,
} from "lucide-react";
import { PERSONALITY_OPTIONS } from "@/data/options";
import type { Personality } from "@/types";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const ICONS: Record<Personality, LucideIcon> = {
  Confident: Crown,
  Elegant: Gem,
  Bold: Flame,
  Romantic: Heart,
  Mysterious: Moon,
  Playful: Sparkles,
  Powerful: Zap,
  Feminine: Flower2,
  Minimalist: Circle,
  Adventurous: Compass,
};

interface Props {
  selected: Personality[];
  onToggle: (v: Personality) => void;
}

export default function PersonalitySelector({ selected, onToggle }: Props) {
  return (
    <section id="personality" className="bg-ivory py-24 md:py-40">
      <div className="mx-auto max-w-[1400px] px-5 md:px-12">
        <SectionHeader
          eyebrow="01 — Personality"
          title="Who are you today?"
          subtitle="Your style starts with how you see yourself."
          hint="Choose as many as feel true"
          count={selected.length}
        />

        <div
          role="group"
          aria-label="Personality"
          className="grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4"
        >
          {PERSONALITY_OPTIONS.map((opt, i) => {
            const isSelected = selected.includes(opt.value);
            const Icon = ICONS[opt.value];
            return (
              <Reveal key={opt.value} delay={(i % 5) * 70}>
                <button
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => onToggle(opt.value)}
                  className={`group relative flex h-full min-h-[200px] w-full flex-col justify-between border p-4 text-left transition-all duration-500 md:min-h-[290px] md:p-6 ${
                    isSelected
                      ? "-translate-y-1 border-charcoal bg-charcoal text-ivory shadow-[0_24px_50px_-24px_rgba(14,13,12,0.6)]"
                      : "border-charcoal/15 bg-cream/50 hover:-translate-y-1 hover:border-gold hover:bg-cream"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span
                      className={`font-serif text-sm tracking-widest2 ${
                        isSelected ? "text-gold" : "text-charcoal/40"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`grid h-7 w-7 place-items-center rounded-full border transition-all duration-500 ${
                        isSelected
                          ? "scale-100 border-gold bg-gold text-ink"
                          : "scale-75 border-transparent opacity-0 group-hover:opacity-60"
                      }`}
                      aria-hidden
                    >
                      <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                  </div>

                  <div>
                    <Icon
                      className={`mb-6 h-5 w-5 transition-colors duration-500 ${
                        isSelected ? "text-gold" : "text-burgundy/70"
                      }`}
                      strokeWidth={1.25}
                      aria-hidden
                    />
                    <span className="block text-[11px] font-semibold uppercase tracking-widest2">
                      {opt.value}
                    </span>
                    <span
                      className={`mt-3 block font-serif text-[1.35rem] italic leading-snug md:text-2xl ${
                        isSelected ? "text-ivory/85" : "text-charcoal/70"
                      }`}
                    >
                      “{opt.quote}”
                    </span>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
