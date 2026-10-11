"use client";

import { ArrowRight, Heart } from "lucide-react";
import type { Recommendation } from "@/types";
import { formatPrice } from "@/utils/recommendation";
import ProductImage from "./ProductImage";

interface Props {
  rec: Recommendation;
  index: number;
  saved: boolean;
  onToggleSave: (id: string) => void;
  onOpen: (rec: Recommendation) => void;
}

export function matchedLabels(rec: Recommendation): string[] {
  const m = rec.matched;
  const all = Array.from(new Set([...m.personality, ...m.presence, ...m.style]));
  return (all.length ? all : rec.product.attributes).slice(0, 2);
}

export default function ProductCard({ rec, index, saved, onToggleSave, onOpen }: Props) {
  const { product, matchScore } = rec;

  return (
    <article
      className="relative animate-fadeUp"
      style={{ animationDelay: `${index * 180}ms` }}
    >
      <button
        type="button"
        onClick={() => onOpen(rec)}
        aria-label={`${product.name} — ${matchScore}% match. Explore the look`}
        className="group block w-full text-left"
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-beige">
          <ProductImage
            src={product.imageUrl}
            alt={product.imageAlt}
            gradient={product.gradient}
            label={product.name}
            className="absolute inset-0"
            imgClassName="transition-transform duration-[1400ms] ease-out group-hover:scale-[1.07]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-100" />
          {index === 0 && (
            <span className="absolute left-4 top-4 bg-ivory px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest2 text-ink">
              Top match
            </span>
          )}
          <span className="absolute bottom-4 left-4 right-4 hidden translate-y-3 items-center justify-between text-[11px] font-semibold uppercase tracking-widest2 text-ivory opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 md:flex">
            Why we chose this
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>

        <div className="pt-6 transition-transform duration-700 group-hover:-translate-y-1">
          <h3 className="font-serif text-2xl font-medium uppercase leading-tight tracking-wide text-ink md:text-[1.7rem]">
            {product.name}
          </h3>
          <p className="mt-1 text-xs uppercase tracking-widest2 text-charcoal/50">
            {product.category}
          </p>
          <p className="mt-4 font-serif text-lg italic text-burgundy">
            {matchedLabels(rec).join(" · ")}
          </p>

          <div className="mt-5">
            <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-widest2">
              <span className="text-ink">{matchScore}% Match</span>
              <span className="text-charcoal/70">{formatPrice(product.price)}</span>
            </div>
            <div className="mt-2 h-px w-full bg-charcoal/15">
              <div
                className="h-px bg-gold transition-all duration-1000"
                style={{ width: `${matchScore}%` }}
              />
            </div>
          </div>

          <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest2 text-burgundy transition-all duration-500 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-visible:translate-y-0 md:group-focus-visible:opacity-100">
            Explore the look
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
          </span>
        </div>
      </button>

      <button
        type="button"
        aria-pressed={saved}
        aria-label={saved ? `Remove ${product.name} from saved looks` : `Save ${product.name}`}
        onClick={() => onToggleSave(product.id)}
        className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-ivory/90 text-ink backdrop-blur transition-transform duration-300 hover:scale-110"
      >
        <Heart
          className={`h-[18px] w-[18px] transition-colors ${
            saved ? "fill-burgundy text-burgundy" : ""
          }`}
          strokeWidth={1.5}
        />
      </button>
    </article>
  );
}
