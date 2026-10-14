"use client";

import { ArrowRight } from "lucide-react";
import ProductImage from "./ProductImage";

interface HeroProps {
  onDiscover: () => void;
}

export default function Hero({ onDiscover }: HeroProps) {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-ink text-ivory"
    >
      <ProductImage
        src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=2000&q=80"
        alt="Editorial fashion portrait of a woman in a flowing dress"
        gradient="linear-gradient(135deg,#0e0d0c 0%,#3a0f1a 55%,#5e1a2a 100%)"
        label="TANTORA"
        className="absolute inset-0 md:left-[38%]"
        imgClassName="animate-scaleIn object-[50%_20%]"
        eager
      />
      {/* legibility overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10 md:hidden" />
      <div className="absolute inset-0 hidden bg-gradient-to-r from-ink via-ink/85 to-transparent md:block md:from-[38%] md:via-[48%]" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-ink/40" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-5 pb-16 pt-32 md:justify-center md:px-12 md:pb-0">
        <div className="max-w-[640px]">
          <p
            className="animate-fadeUp text-[11px] font-medium uppercase tracking-widest2 text-gold"
            style={{ animationDelay: "0.2s" }}
          >
            Personal style, discovered
          </p>
          <h1
            className="mt-6 animate-fadeUp font-serif text-[3.6rem] font-light leading-[0.95] sm:text-7xl md:text-[7rem]"
            style={{ animationDelay: "0.4s" }}
          >
            Dress the way you{" "}
            <em className="font-normal italic text-[#d9aeb0]">feel.</em>
          </h1>
          <p
            className="mt-8 max-w-md animate-fadeUp text-base leading-relaxed text-ivory/75 md:text-lg"
            style={{ animationDelay: "0.7s" }}
          >
            Discover styles that match your personality, your mood, and the presence
            you want to create.
          </p>

          <div
            className="mt-10 flex animate-fadeUp flex-col items-start gap-5 sm:flex-row sm:items-center"
            style={{ animationDelay: "0.95s" }}
          >
            <button
              onClick={onDiscover}
              className="group inline-flex items-center gap-3 bg-ivory px-8 py-4 text-[12px] font-semibold uppercase tracking-widest2 text-ink transition-all duration-500 hover:bg-gold hover:text-ink"
            >
              Discover My Style
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5" />
            </button>
            <p className="font-serif text-lg italic text-ivory/60">
              A different way to discover fashion.
            </p>
          </div>
        </div>

        <div
          className="absolute bottom-8 right-5 hidden animate-fadeIn flex-col items-center gap-3 md:flex md:right-12"
          style={{ animationDelay: "1.6s" }}
          aria-hidden
        >
          <span className="text-[10px] uppercase tracking-widest2 text-ivory/60 [writing-mode:vertical-rl]">
            Scroll
          </span>
          <span className="h-14 w-px bg-gradient-to-b from-ivory/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
