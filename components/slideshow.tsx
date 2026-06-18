"use client";

import { useState } from "react";
import Image from "next/image";

type SlideshowProps = {
  base: string;
  count: number | string;
  alt?: string;
};

export default function Slideshow({ base, count, alt = "Slide" }: SlideshowProps) {
  const total = Number(count);
  const slides = Array.from(
    { length: total },
    (_, i) => `${base}${String(i + 1).padStart(2, "0")}.jpg`,
  );
  const [idx, setIdx] = useState(0);
  const go = (delta: number) => setIdx((i) => (i + delta + total) % total);

  return (
    <figure className="not-prose my-10">
      <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-zinc-100 bg-zinc-50">
        <Image
          key={idx}
          src={slides[idx]}
          alt={`${alt} — slide ${idx + 1} of ${total}`}
          fill
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="object-contain"
          priority={idx === 0}
        />

        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-zinc-700 shadow-sm backdrop-blur hover:bg-white transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-zinc-700 shadow-sm backdrop-blur hover:bg-white transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        <div className="absolute bottom-3 right-3 rounded-full bg-zinc-900/70 px-2.5 py-1 text-xs font-medium text-white">
          {idx + 1} / {total}
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIdx(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === idx}
            className={`h-1.5 rounded-full transition-all ${
              i === idx ? "w-5 bg-zinc-700" : "w-1.5 bg-zinc-300 hover:bg-zinc-400"
            }`}
          />
        ))}
      </div>
    </figure>
  );
}
