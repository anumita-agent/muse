import { PRODUCTS } from "@/data/products";
import type { Product, Recommendation, UserSelections } from "@/types";

/**
 * Weights: Personality 40 · Style 25 · Presence 25 · Occasion 10.
 */
export const WEIGHTS = {
  personality: 0.4,
  style: 0.25,
  presence: 0.25,
  occasion: 0.1,
} as const;

/** Cap used so picking many tags doesn't make a perfect match impossible. */
const SATURATION = 3;

function overlap(selected: string[], attributes: string[]): string[] {
  const set = new Set(attributes);
  return selected.filter((s) => set.has(s));
}

function dimensionScore(selected: string[], matched: string[]): number {
  if (selected.length === 0) return 0;
  return Math.min(matched.length / Math.min(selected.length, SATURATION), 1);
}

/** Maps the raw 0–1 weighted score to a friendly, deterministic percentage. */
function toPercent(raw: number): number {
  return Math.min(98, Math.round(50 + raw * 48));
}

export function scoreProduct(product: Product, s: UserSelections): Recommendation {
  const personality = overlap(s.personalities, product.attributes);
  const style = overlap(s.styles, product.attributes);
  const presence = overlap(s.presence, product.attributes);
  const occasion = s.occasion ? product.occasions.includes(s.occasion) : false;

  const raw =
    WEIGHTS.personality * dimensionScore(s.personalities, personality) +
    WEIGHTS.style * dimensionScore(s.styles, style) +
    WEIGHTS.presence * dimensionScore(s.presence, presence) +
    WEIGHTS.occasion * (occasion ? 1 : 0);

  return {
    product,
    matchScore: toPercent(raw),
    matched: { personality, style, presence, occasion },
  };
}

/**
 * Local recommendation engine (synchronous, deterministic).
 * Swap this for `POST /api/recommendations` later — keep the same
 * UserSelections → Recommendation[] contract and the UI won't change.
 */
export function localRecommendationEngine(
  selections: UserSelections,
  limit = 3,
): Recommendation[] {
  return PRODUCTS.map((p) => scoreProduct(p, selections))
    .sort((a, b) => {
      if (b.matchScore !== a.matchScore) return b.matchScore - a.matchScore;
      // deterministic tie-break by catalogue order
      return PRODUCTS.indexOf(a.product) - PRODUCTS.indexOf(b.product);
    })
    .slice(0, limit);
}

/** Async wrapper — the shape you'll want once this becomes a network call. */
export async function getRecommendations(
  selections: UserSelections,
  limit = 3,
): Promise<Recommendation[]> {
  return localRecommendationEngine(selections, limit);
}

export function formatPrice(n: number): string {
  return `₹${n.toLocaleString("en-IN")}`;
}
