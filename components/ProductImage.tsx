"use client";

import { useState } from "react";

interface ProductImageProps {
  src: string;
  alt: string;
  /** CSS gradient shown behind the image and as the fallback. */
  gradient: string;
  /** Large letter/word shown when the image cannot load. */
  label?: string;
  /** Must include positioning (relative / absolute) and sizing. */
  className?: string;
  imgClassName?: string;
  eager?: boolean;
}

/**
 * Image with an editorial gradient fallback so a failed remote image
 * never produces a broken-image icon.
 */
export default function ProductImage({
  src,
  alt,
  gradient,
  label,
  className = "",
  imgClassName = "",
  eager = false,
}: ProductImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`overflow-hidden ${className}`} style={{ background: gradient }}>
      {!failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          onError={() => setFailed(true)}
          className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
        />
      )}
      {failed && (
        <div
          role="img"
          aria-label={alt}
          className="grain absolute inset-0 grid place-items-center"
        >
          <span className="select-none px-6 text-center font-serif text-4xl font-light italic text-white/70 md:text-5xl">
            {label ?? "MUSE"}
          </span>
        </div>
      )}
    </div>
  );
}
