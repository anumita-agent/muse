import Reveal from "./Reveal";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  count?: number;
  hint?: string;
  dark?: boolean;
  align?: "left" | "center";
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  count,
  hint,
  dark = false,
  align = "left",
}: SectionHeaderProps) {
  const center = align === "center";
  return (
    <Reveal className={`mb-12 md:mb-16 ${center ? "text-center" : ""}`}>
      <p
        className={`mb-5 text-[11px] font-medium uppercase tracking-widest2 ${
          dark ? "text-gold" : "text-burgundy"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-serif text-5xl font-light leading-[1.02] md:text-7xl ${
          dark ? "text-ivory" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-5 max-w-xl text-base md:text-lg ${center ? "mx-auto" : ""} ${
          dark ? "text-ivory/65" : "text-charcoal/65"
        }`}
      >
        {subtitle}
      </p>
      {hint && (
        <p
          aria-live="polite"
          className={`mt-6 text-xs uppercase tracking-wider2 ${
            dark ? "text-ivory/45" : "text-charcoal/45"
          }`}
        >
          {hint}
          {typeof count === "number" && count > 0 ? ` · ${count} chosen` : ""}
        </p>
      )}
    </Reveal>
  );
}
