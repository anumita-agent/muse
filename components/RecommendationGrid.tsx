"use client";

import { RotateCcw } from "lucide-react";
import type { Recommendation } from "@/types";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";

interface Props {
  recommendations: Recommendation[];
  runId: number;
  saved: Set<string>;
  onToggleSave: (id: string) => void;
  onOpen: (rec: Recommendation) => void;
  onRefine: () => void;
}

export default function RecommendationGrid({
  recommendations,
  runId,
  saved,
  onToggleSave,
  onOpen,
  onRefine,
}: Props) {
  return (
    <section id="collection" className="bg-ivory py-24 md:py-40">
      <div className="mx-auto max-w-[1400px] px-5 md:px-12">
        <Reveal className="mb-16 text-center md:mb-24">
          <p className="mb-5 text-[11px] font-medium uppercase tracking-widest2 text-burgundy">
            Curated for you
          </p>
          <h2 className="font-serif text-4xl font-light text-ink md:text-6xl">
            Three pieces. <em className="italic">Chosen with intent.</em>
          </h2>
          <p className="mt-5 text-sm text-charcoal/55">
            Tap any piece to see why it matches you.
          </p>
        </Reveal>

        <div
          key={runId}
          className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-3 md:gap-x-10 md:[&>*:nth-child(2)]:mt-20"
        >
          {recommendations.map((rec, i) => (
            <ProductCard
              key={rec.product.id}
              rec={rec}
              index={i}
              saved={saved.has(rec.product.id)}
              onToggleSave={onToggleSave}
              onOpen={onOpen}
            />
          ))}
        </div>

        <Reveal className="mt-24 text-center md:mt-36">
          <p className="font-serif text-3xl italic text-charcoal/70 md:text-4xl">
            Not quite you yet?
          </p>
          <button
            onClick={onRefine}
            className="group mt-8 inline-flex items-center gap-3 border border-ink px-10 py-5 text-[12px] font-semibold uppercase tracking-widest2 text-ink transition-all duration-500 hover:bg-ink hover:text-ivory"
          >
            <RotateCcw className="h-4 w-4 transition-transform duration-700 group-hover:-rotate-180" />
            Refine My Style
          </button>
        </Reveal>
      </div>
    </section>
  );
}
