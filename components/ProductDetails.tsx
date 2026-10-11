"use client";

import { useEffect, useRef } from "react";
import { Check, X } from "lucide-react";
import type { Recommendation } from "@/types";
import { formatPrice } from "@/utils/recommendation";
import ProductImage from "./ProductImage";

interface Props {
  rec: Recommendation | null;
  onClose: () => void;
}

function Group({ title, items }: { title: string; items: string[] }) {
  if (items.length === 0) return null;
  return (
    <div>
      <h4 className="text-[11px] font-semibold uppercase tracking-widest2 text-burgundy">
        {title}
      </h4>
      <ul className="mt-3 space-y-2">
        {items.map((i) => (
          <li key={i} className="flex items-center gap-3 font-serif text-xl text-ink">
            <Check className="h-4 w-4 text-gold" strokeWidth={2.5} aria-hidden />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ProductDetails({ rec, onClose }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!rec) return;
    lastFocus.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab" && dialogRef.current) {
        const f = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], [tabindex]:not([tabindex="-1"])',
        );
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      lastFocus.current?.focus();
    };
  }, [rec, onClose]);

  if (!rec) return null;
  const { product, matchScore, matched } = rec;

  const highlight = [matched.personality[0], matched.style[0], matched.presence[0]].filter(
    (x): x is string => Boolean(x),
  );

  return (
    <div
      className="fixed inset-0 z-[90] flex animate-fadeIn items-end justify-center bg-ink/70 backdrop-blur-sm md:items-center md:p-8"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="pd-title"
        className="relative grid max-h-[94svh] w-full max-w-[1100px] animate-modalIn grid-cols-1 overflow-y-auto bg-ivory md:max-h-[88vh] md:grid-cols-2 md:overflow-hidden"
      >
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full bg-ivory/90 text-ink backdrop-blur transition-transform hover:scale-110"
        >
          <X className="h-5 w-5" strokeWidth={1.5} />
        </button>

        <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[600px]">
          <ProductImage
            src={product.imageUrl}
            alt={product.imageAlt}
            gradient={product.gradient}
            label={product.name}
            className="absolute inset-0"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-6 pt-24 text-ivory">
            <p className="font-serif text-2xl italic">{product.tagline}</p>
          </div>
        </div>

        <div className="p-6 pb-10 md:overflow-y-auto md:p-12">
          <p className="text-[11px] font-medium uppercase tracking-widest2 text-burgundy">
            Why we chose this for you
          </p>
          <h3
            id="pd-title"
            className="mt-4 font-serif text-4xl font-light uppercase leading-[1.05] tracking-wide text-ink md:text-5xl"
          >
            {product.name}
          </h3>
          <p className="mt-3 flex items-center gap-4 text-xs uppercase tracking-widest2 text-charcoal/60">
            <span>{product.category}</span>
            <span className="h-3 w-px bg-charcoal/30" />
            <span className="font-semibold text-ink">{matchScore}% Match</span>
          </p>

          <div className="mt-8 border-l-2 border-gold pl-5">
            <p className="text-base text-charcoal/80">
              {highlight.length > 0 ? (
                <>
                  You selected{" "}
                  {highlight.map((h, i) => (
                    <span key={h}>
                      <strong className="font-semibold text-ink">{h}</strong>
                      {i < highlight.length - 2 ? ", " : ""}
                      {i === highlight.length - 2 ? (highlight.length > 2 ? ", and " : " and ") : ""}
                    </span>
                  ))}
                  .
                </>
              ) : (
                <>This piece suits the moment you described, even where its character differs from your other choices.</>
              )}
            </p>
            <p className="mt-3 font-serif text-xl italic leading-snug text-charcoal/80">
              {product.stylistNote}
            </p>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <Group title="Your personality" items={matched.personality} />
            <Group title="Your style" items={matched.style} />
            <Group title="Your presence" items={matched.presence} />
            {matched.occasion && (
              <div>
                <h4 className="text-[11px] font-semibold uppercase tracking-widest2 text-burgundy">
                  Your occasion
                </h4>
                <p className="mt-3 flex items-center gap-3 font-serif text-xl text-ink">
                  <Check className="h-4 w-4 text-gold" strokeWidth={2.5} aria-hidden />
                  Suits the moment
                </p>
              </div>
            )}
          </div>

          <div className="mt-10 border-t border-charcoal/15 pt-8">
            <p className="text-sm leading-relaxed text-charcoal/70">{product.description}</p>
            <ul className="mt-4 space-y-1 text-sm text-charcoal/60">
              {product.details.map((d) => (
                <li key={d}>— {d}</li>
              ))}
            </ul>
            <p className="mt-8 font-serif text-3xl text-ink">{formatPrice(product.price)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
