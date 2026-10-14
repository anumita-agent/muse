export default function Footer() {
  return (
    <footer className="bg-ink px-5 py-20 text-ivory md:px-12 md:py-28">
      <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-12 md:flex-row md:items-end">
        <div>
          <p className="font-serif text-5xl font-light tracking-[0.3em] md:text-7xl">TANTORA</p>
          <p className="mt-5 font-serif text-2xl italic text-ivory/60">
            Dress the way you feel.
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-10 gap-y-3 text-[11px] uppercase tracking-widest2 text-ivory/50">
          <li>Dresses</li>
          <li>Sarees</li>
          <li>Lingerie</li>
        </ul>
      </div>
      <div className="mx-auto mt-16 flex max-w-[1400px] flex-col gap-2 border-t border-ivory/10 pt-8 text-xs text-ivory/35 md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} TANTORA. All rights reserved.</p>
        <p>Concept prototype · demo products and imagery</p>
      </div>
    </footer>
  );
}
