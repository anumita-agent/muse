import type {
  Occasion,
  Personality,
  Presence,
  SelectorOption,
  Style,
} from "@/types";

export const PERSONALITY_OPTIONS: SelectorOption<Personality>[] = [
  { value: "Confident", quote: "I own the room." },
  { value: "Elegant", quote: "Quietly unforgettable." },
  { value: "Bold", quote: "Rules are a suggestion." },
  { value: "Romantic", quote: "I feel everything deeply." },
  { value: "Mysterious", quote: "Leave something to discover." },
  { value: "Playful", quote: "Joy is my signature." },
  { value: "Powerful", quote: "I move with intention." },
  { value: "Feminine", quote: "Soft, and never small." },
  { value: "Minimalist", quote: "Less, but exactly right." },
  { value: "Adventurous", quote: "Always one step further." },
];

export const STYLE_OPTIONS: SelectorOption<Style>[] = [
  { value: "Classic", quote: "Timeless, always." },
  { value: "Modern", quote: "Of this moment." },
  { value: "Minimal", quote: "Clean and considered." },
  { value: "Luxury", quote: "Rich in every detail." },
  { value: "Bohemian", quote: "Free-spirited and worn-in." },
  { value: "Glamorous", quote: "Light catches me." },
  { value: "Romantic", quote: "Soft edges, deep feeling." },
  { value: "Edgy", quote: "A little dangerous." },
  { value: "Traditional", quote: "Rooted in heritage." },
  { value: "Contemporary", quote: "Heritage, reimagined." },
];

export const PRESENCE_OPTIONS: SelectorOption<Presence>[] = [
  { value: "Powerful", quote: "Make an entrance." },
  { value: "Elegant", quote: "Grace that lingers." },
  { value: "Approachable", quote: "Warm before words." },
  { value: "Mysterious", quote: "Be the question." },
  { value: "Sensual", quote: "Let the room lean in." },
  { value: "Sophisticated", quote: "Understated authority." },
  { value: "Playful", quote: "Leave them smiling." },
  { value: "Fearless", quote: "Unapologetically yourself." },
  { value: "Soft", quote: "Gentle is its own strength." },
  { value: "Unforgettable", quote: "The one they describe later." },
];

export const OCCASION_OPTIONS: Occasion[] = [
  "Everyday",
  "Office",
  "Date Night",
  "Party",
  "Wedding",
  "Festive",
  "Vacation",
  "Special Occasion",
  "Just For Me",
];

/** Short stylist phrases used in the personalised result copy. */
export const IDENTITY_COPY = {
  fallback:
    "You gravitate toward pieces that make an entrance without asking for attention.",
};
