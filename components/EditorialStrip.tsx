import { EDITORIAL_IMAGES } from "@/data/editorial";
import ProductImage from "./ProductImage";
import Reveal from "./Reveal";

export default function EditorialStrip() {
  return (
    <section id="lookbook" className="bg-ivory py-20 md:py-28">
      <div className="mx-auto mb-12 max-w-[1400px] px-5 text-center md:mb-16 md:px-12">
        <Reveal>
          <p className="mb-5 text-[11px] font-medium uppercase tracking-widest2 text-burgundy">
            The lookbook
          </p>
          <h2 className="font-serif text-4xl font-light leading-tight text-ink md:text-6xl">
            Worn with <em className="italic text-burgundy">intention.</em>
          </h2>
        </Reveal>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4">
        {EDITORIAL_IMAGES.map((img, i) => (
          <Reveal key={img.src} delay={(i % 4) * 90}>
            <figure className="group relative aspect-[3/4] overflow-hidden bg-beige md:aspect-[4/5]">
              <ProductImage
                src={img.src}
                alt={img.alt}
                gradient={img.gradient}
                label={img.label}
                className="absolute inset-0"
                imgClassName="transition-transform duration-[1600ms] ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-70 transition-opacity duration-700 group-hover:opacity-100" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 text-[10px] font-semibold uppercase tracking-widest2 text-ivory md:p-6 md:text-[11px]">
                {img.label}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
