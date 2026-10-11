export type Personality =
  | "Confident"
  | "Elegant"
  | "Bold"
  | "Romantic"
  | "Mysterious"
  | "Playful"
  | "Powerful"
  | "Feminine"
  | "Minimalist"
  | "Adventurous";

export type Style =
  | "Classic"
  | "Modern"
  | "Minimal"
  | "Luxury"
  | "Bohemian"
  | "Glamorous"
  | "Romantic"
  | "Edgy"
  | "Traditional"
  | "Contemporary";

export type Presence =
  | "Powerful"
  | "Elegant"
  | "Approachable"
  | "Mysterious"
  | "Sensual"
  | "Sophisticated"
  | "Playful"
  | "Fearless"
  | "Soft"
  | "Unforgettable";

export type Occasion =
  | "Everyday"
  | "Office"
  | "Date Night"
  | "Party"
  | "Wedding"
  | "Festive"
  | "Vacation"
  | "Special Occasion"
  | "Just For Me";

export type ProductCategory = "Dress" | "Saree" | "Lingerie";

/** Option shown in a selector (personality / style / presence / occasion). */
export interface SelectorOption<T extends string> {
  value: T;
  quote: string;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  /** Flat attribute list, exactly as supplied in the product brief. */
  attributes: string[];
  /** Occasions this piece suits (used for the 10% occasion weight). */
  occasions: Occasion[];
  imageUrl: string;
  imageAlt: string;
  /** CSS gradient used as an elegant fallback if the image fails. */
  gradient: string;
  tagline: string;
  description: string;
  /** Stylist explanation shown in "Why we chose this for you". */
  stylistNote: string;
  details: string[];
}

export interface UserSelections {
  personalities: Personality[];
  styles: Style[];
  presence: Presence[];
  occasion: Occasion | null;
}

export interface MatchBreakdown {
  personality: string[];
  style: string[];
  presence: string[];
  occasion: boolean;
}

export interface Recommendation {
  product: Product;
  /** Whole-number percentage, deterministic from the selections. */
  matchScore: number;
  matched: MatchBreakdown;
}
