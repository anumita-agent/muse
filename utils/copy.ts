import type { UserSelections } from "@/types";

/** Up to three unique words that summarise the user's identity. */
export function identityWords(s: UserSelections): string[] {
  const candidates: string[] = [
    s.personalities[0],
    s.styles[0],
    s.presence[0],
    s.personalities[1],
    s.presence[1],
    s.styles[1],
    s.personalities[2],
    s.presence[2],
    s.styles[2],
  ].filter((x): x is NonNullable<typeof x> => Boolean(x));
  const seen = new Set<string>();
  const out: string[] = [];
  for (const c of candidates) {
    const u = c.toUpperCase();
    if (!seen.has(u)) {
      seen.add(u);
      out.push(u);
    }
    if (out.length === 3) break;
  }
  return out;
}

const PRESENCE_LINES: Record<string, string> = {
  Powerful: "You gravitate toward pieces that make an entrance without asking for attention.",
  Elegant: "You choose clothes that move with grace and leave a quiet, lasting impression.",
  Approachable: "You reach for pieces that feel warm and effortless — easy to love at first glance.",
  Mysterious: "You dress to leave a question in the air, and let others lean in to ask it.",
  Sensual: "You favour pieces that honour the body and let confidence do the talking.",
  Sophisticated: "You value understated authority — refined lines, rich tones, nothing wasted.",
  Playful: "You wear joy openly, with pieces that sparkle, swirl and make people smile.",
  Fearless: "You dress without apology, choosing pieces that say exactly who you are.",
  Soft: "You lean toward gentle textures and easy silhouettes that feel as good as they look.",
  Unforgettable: "You dress to be the one they describe later — vivid, memorable, entirely yours.",
};

export function identityDescription(s: UserSelections): string {
  const first = s.presence[0];
  return (
    (first && PRESENCE_LINES[first]) ||
    "You gravitate toward pieces that make an entrance without asking for attention."
  );
}
