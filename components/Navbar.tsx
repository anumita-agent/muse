"use client";

import { useEffect, useState } from "react";
import { Heart, Menu, X } from "lucide-react";

const LINKS = [
  { label: "Discover", id: "personality" },
  { label: "Your Style", id: "discover" },
  { label: "Collection", id: "collection" },
];

interface NavbarProps {
  onNavigate: (id: string) => void;
  wishlistCount: number;
}

export default function Navbar({ onNavigate, wishlistCount }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  const go = (id: string) => {
    setOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "border-b border-charcoal/10 bg-ivory/90 py-4 text-ink backdrop-blur-md"
          : "bg-transparent py-6 text-ivory"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[1400px] items-center justify-between px-5 md:px-12"
      >
        <button
          onClick={() => go("top")}
          className="font-serif text-2xl font-medium tracking-[0.35em] md:text-3xl"
          aria-label="MUSE — back to top"
        >
          MUSE
        </button>

        <ul className="hidden items-center gap-12 md:flex">
          {LINKS.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className="group relative text-[12px] font-medium uppercase tracking-widest2"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5">
          <button
            aria-label={`Saved looks${wishlistCount ? `, ${wishlistCount} saved` : ""}`}
            className="relative"
          >
            <Heart className="h-5 w-5" strokeWidth={1.5} />
            {wishlistCount > 0 && (
              <span className="absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full bg-burgundy text-[9px] font-semibold text-ivory">
                {wishlistCount}
              </span>
            )}
          </button>
          <button
            className="md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-6 w-6" strokeWidth={1.5} /> : <Menu className="h-6 w-6" strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 top-[60px] z-40 bg-ivory text-ink transition-all duration-500 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul className="flex h-full flex-col justify-center gap-8 px-8 pb-24">
          {LINKS.map((l, i) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className="font-serif text-5xl font-light"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {l.label}
              </button>
            </li>
          ))}
          <li className="mt-6 text-xs uppercase tracking-widest2 text-charcoal/50">
            Dress the way you feel.
          </li>
        </ul>
      </div>
    </header>
  );
}
