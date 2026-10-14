import type { Product } from "@/types";

/**
 * Local mock catalogue (5 demo products).
 * Replace with data returned by your NestJS API later — the UI only depends
 * on the `Product` type, not on this file.
 */
export const PRODUCTS: Product[] = [
  {
    id: "midnight-power-saree",
    name: "Midnight Power Saree",
    category: "Saree",
    price: 4999,
    attributes: [
      "Confident",
      "Powerful",
      "Elegant",
      "Luxury",
      "Contemporary",
      "Sophisticated",
      "Mysterious",
    ],
    occasions: ["Office", "Wedding", "Festive", "Special Occasion", "Date Night"],
    imageUrl:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Woman draped in a deep midnight-blue silk saree",
    gradient: "linear-gradient(160deg,#1b1a2e 0%,#2f2a4a 45%,#0e0d0c 100%)",
    tagline: "Draped in authority.",
    description:
      "A fluid midnight silk with a structured, sharp-edged border. Worn tailored and close, it holds the room without raising its voice.",
    stylistNote:
      "The structured drape and deep midnight tone project a strong, sophisticated presence — authority that feels effortless rather than loud.",
    details: ["Pure silk blend", "Sharp gold-thread border", "Includes unstitched blouse piece"],
  },
  {
    id: "ruby-confidence-dress",
    name: "Ruby Confidence Dress",
    category: "Dress",
    price: 3999,
    attributes: [
      "Bold",
      "Confident",
      "Adventurous",
      "Glamorous",
      "Modern",
      "Fearless",
      "Sensual",
      "Unforgettable",
    ],
    occasions: ["Party", "Date Night", "Special Occasion", "Vacation"],
    imageUrl:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Woman in a fitted ruby red dress",
    gradient: "linear-gradient(160deg,#7a1230 0%,#a3213f 50%,#3d0816 100%)",
    tagline: "Make them remember.",
    description:
      "A sculpted ruby silhouette with a sweeping neckline and a sure, confident line. Made for the moment you walk in.",
    stylistNote:
      "The saturated ruby and sculpted cut reflect a fearless, magnetic presence — it asks to be noticed, and you’ll be glad it did.",
    details: ["Stretch crepe, lined", "Sculpted bodice", "Hits just below the knee"],
  },
  {
    id: "ivory-grace-saree",
    name: "Ivory Grace Saree",
    category: "Saree",
    price: 5499,
    attributes: [
      "Elegant",
      "Romantic",
      "Feminine",
      "Classic",
      "Luxury",
      "Soft",
      "Sophisticated",
      "Approachable",
    ],
    occasions: ["Wedding", "Festive", "Special Occasion", "Everyday", "Just For Me"],
    imageUrl:
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Woman in a flowing ivory saree with delicate embroidery",
    gradient: "linear-gradient(160deg,#efe4d0 0%,#d9c7a8 55%,#b8975a 100%)",
    tagline: "Softness, perfected.",
    description:
      "Feather-light ivory with hand-finished zari whispers. It moves like a slow exhale — graceful, warm, and quietly luxurious.",
    stylistNote:
      "Soft ivory and an unhurried drape speak to gentle, romantic elegance — a presence people are drawn toward rather than intimidated by.",
    details: ["Featherlight organza silk", "Hand-finished zari edge", "Includes unstitched blouse piece"],
  },
  {
    id: "midnight-allure-lingerie",
    name: "Midnight Allure Lingerie",
    category: "Lingerie",
    price: 2499,
    attributes: [
      "Confident",
      "Mysterious",
      "Bold",
      "Modern",
      "Glamorous",
      "Sensual",
      "Fearless",
    ],
    occasions: ["Date Night", "Just For Me", "Special Occasion"],
    imageUrl:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Black lace lingerie set styled editorially",
    gradient: "linear-gradient(160deg,#141214 0%,#2b2226 55%,#5e1a2a 100%)",
    tagline: "For no one but you.",
    description:
      "Black lace with a satin trim and precise tailoring. Designed to feel as good as it looks — confidence, worn closest.",
    stylistNote:
      "Dark lace and a refined cut hold a little mystery in reserve — confidence that is felt before it is seen.",
    details: ["Soft stretch lace", "Satin-finish trim", "Wire-free comfort support"],
  },
  {
    id: "sunset-freedom-dress",
    name: "Sunset Freedom Dress",
    category: "Dress",
    price: 3499,
    attributes: [
      "Playful",
      "Adventurous",
      "Romantic",
      "Bohemian",
      "Contemporary",
      "Approachable",
      "Unforgettable",
    ],
    occasions: ["Vacation", "Everyday", "Festive", "Party", "Just For Me"],
    imageUrl:
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Woman in a flowing sunset-toned bohemian dress",
    gradient: "linear-gradient(160deg,#e8a07a 0%,#c9786b 50%,#8a4a5a 100%)",
    tagline: "Wear the golden hour.",
    description:
      "A swirl of sunset tones in a breezy, tiered silhouette. Made for long afternoons, open roads, and being easy to love.",
    stylistNote:
      "Warm sunset tones and an easy, flowing shape reflect a playful, free-spirited presence — warm before you say a word.",
    details: ["Breathable viscose", "Tiered, flowing skirt", "Adjustable tie waist"],
  },
];
