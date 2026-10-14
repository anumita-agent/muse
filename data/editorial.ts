import type { EditorialImage } from "@/types";

/**
 * Free-to-use editorial photographs (Unsplash) used to bring the Tantora
 * lookbook to life. Each carries a gradient fallback so a failed remote
 * image still reads as part of the design.
 */

/** Full-bleed editorial band shown between two selector sections. */
export const EDITORIAL_IMAGES: EditorialImage[] = [
  {
    src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
    alt: "Editorial fashion photograph from the Tantora lookbook",
    gradient: "linear-gradient(160deg,#efe4d0 0%,#d9c7a8 55%,#b8975a 100%)",
    label: "The Edit",
  },
  {
    src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80",
    alt: "Model in a considered silhouette, styled editorially",
    gradient: "linear-gradient(160deg,#2b2226 0%,#5e1a2a 60%,#141214 100%)",
    label: "Silhouette",
  },
  {
    src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80",
    alt: "Moody editorial portrait in warm, rich tones",
    gradient: "linear-gradient(160deg,#7a1230 0%,#a3213f 50%,#3d0816 100%)",
    label: "Mood",
  },
  {
    src: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?auto=format&fit=crop&w=1200&q=80",
    alt: "Textural close study of fabric and light",
    gradient: "linear-gradient(160deg,#b98a8a 0%,#c9786b 50%,#8a4a5a 100%)",
    label: "Texture",
  },
];

/** Three-up lookbook strip shown inside the personalised style profile. */
export const LOOKBOOK_IMAGES: EditorialImage[] = [
  {
    src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
    alt: "Tantora lookbook: refined atelier styling",
    gradient: "linear-gradient(160deg,#1b1a2e 0%,#2f2a4a 45%,#0e0d0c 100%)",
    label: "Atelier",
  },
  {
    src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",
    alt: "Tantora lookbook: movement and drape",
    gradient: "linear-gradient(160deg,#efe4d0 0%,#b8975a 60%,#7a5a24 100%)",
    label: "Drape",
  },
  {
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
    alt: "Tantora lookbook: quiet, confident presence",
    gradient: "linear-gradient(160deg,#141214 0%,#2b2226 55%,#5e1a2a 100%)",
    label: "Presence",
  },
];

/** Single accent portrait used beside the style-language selector. */
export const ATELIER_IMAGE: EditorialImage = {
  src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
  alt: "Editorial portrait in the Tantora atelier",
  gradient: "linear-gradient(160deg,#efe4d0 0%,#d9c7a8 55%,#b8975a 100%)",
  label: "Tantora",
};
