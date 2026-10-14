import type { UserSelections } from "@/types";
import { identityDescription, identityWords } from "@/utils/copy";
import { LOOKBOOK_IMAGES } from "@/data/editorial";
import ProductImage from "./ProductImage";
import Reveal from "./Reveal";

interface Props {
  selections: UserSelections;
}

export default function StyleProfile({ selections }: Props) {
  const words = identityWords(selections);

  return (
    <section id="results" className="bg-cream pb-20 pt-28 text-center md:pb-28 md:pt-48">
      <div className="mx-auto max-w-[1000px] px-5 md:px-12">
        <Reveal>
          <p className="mb-8 text-[11px] font-medium uppercase tracking-widest2 text-burgundy">
            Your style profile
          </p>
          <h2 className="font-serif text-5xl font-light leading-[1.02] text-ink md:text-8xl">
            Your style has <em className="italic text-burgundy">a point of view.</em>
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p
            className="mt-12 text-sm font-semibold tracking-widest2 text-ink md:text-base"
            aria-label={`Your identity: ${words.join(", ")}`}
          >
            {words.map((w, i) => (
              <span key={w}>
                {i > 0 && <span className="mx-3 text-gold md:mx-5">·</span>}
                {w}
              </span>
            ))}
          </p>
          <p className="mx-auto mt-8 max-w-xl font-serif text-2xl italic leading-snug text-charcoal/75 md:text-3xl">
            {identityDescription(selections)}
          </p>
          {selections.occasion && (
            <p className="mt-8 text-xs uppercase tracking-widest2 text-charcoal/45">
              For · {selections.occasion}
            </p>
          )}
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-16 grid grid-cols-3 gap-3 md:mt-20 md:gap-4">
            {LOOKBOOK_IMAGES.map((img) => (
              <figure
                key={img.src}
                className="group relative aspect-[4/5] overflow-hidden bg-beige"
              >
                <ProductImage
                  src={img.src}
                  alt={img.alt}
                  gradient={img.gradient}
                  label={img.label}
                  className="absolute inset-0"
                  imgClassName="transition-transform duration-[1600ms] ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-100" />
                <figcaption className="absolute inset-x-0 bottom-0 p-3 text-[9px] font-semibold uppercase tracking-widest2 text-ivory md:p-4 md:text-[10px]">
                  {img.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
