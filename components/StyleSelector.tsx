"use client";

import { STYLE_OPTIONS } from "@/data/options";
import { ATELIER_IMAGE } from "@/data/editorial";
import type { Style } from "@/types";
import ProductImage from "./ProductImage";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

interface Props {
  selected: Style[];
  onToggle: (v: Style) => void;
}

export default function StyleSelector({ selected, onToggle }: Props) {
  return (
    <section id="style" className="bg-cream py-24 md:py-40">
      <div className="mx-auto max-w-[1400px] px-5 md:px-12">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <div className="md:sticky md:top-32">
              <SectionHeader
                eyebrow="02 — Style"
                title="What is your style language?"
                subtitle="Choose the aesthetic that feels most like you."
                hint="Choose as many as you like"
                count={selected.length}
              />
              <Reveal delay={120}>
                <figure className="group relative mt-10 hidden aspect-[4/5] overflow-hidden bg-beige md:block">
                  <ProductImage
                    src={ATELIER_IMAGE.src}
                    alt={ATELIER_IMAGE.alt}
                    gradient={ATELIER_IMAGE.gradient}
                    label={ATELIER_IMAGE.label}
                    className="absolute inset-0"
                    imgClassName="transition-transform duration-[1600ms] ease-out group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5 text-[10px] font-semibold uppercase tracking-widest2 text-ivory">
                    {ATELIER_IMAGE.label}
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>

          <div
            role="group"
            aria-label="Style language"
            className="md:col-span-7"
          >
            <ul className="border-t border-charcoal/15">
              {STYLE_OPTIONS.map((opt, i) => {
                const isSelected = selected.includes(opt.value);
                return (
                  <li key={opt.value} className="border-b border-charcoal/15">
                    <Reveal delay={i * 40}>
                      <button
                        type="button"
                        aria-pressed={isSelected}
                        onClick={() => onToggle(opt.value)}
                        className={`group relative flex w-full items-center justify-between gap-4 px-2 py-5 text-left transition-all duration-500 md:px-4 md:py-6 ${
                          isSelected ? "bg-ivory/70" : "hover:bg-ivory/40"
                        }`}
                      >
                        <span
                          className={`absolute left-0 top-0 h-full w-[3px] origin-top bg-gold transition-transform duration-500 ${
                            isSelected ? "scale-y-100" : "scale-y-0"
                          }`}
                        />
                        <span className="flex items-baseline gap-4 md:gap-6">
                          <span className="w-6 font-serif text-sm text-charcoal/35">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span
                            className={`font-serif text-4xl font-light leading-none transition-all duration-500 md:text-6xl ${
                              isSelected
                                ? "translate-x-2 italic text-burgundy"
                                : "text-ink group-hover:translate-x-2"
                            }`}
                          >
                            {opt.value}
                          </span>
                        </span>
                        <span
                          className={`hidden max-w-[11rem] text-right text-sm italic transition-colors duration-500 sm:block ${
                            isSelected ? "text-burgundy" : "text-charcoal/45"
                          }`}
                        >
                          {opt.quote}
                        </span>
                      </button>
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
