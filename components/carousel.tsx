"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Slide = { src: string; alt: string };

export default function Carousel({
  slides,
  interval = 6000,
}: {
  slides: Slide[];
  interval?: number;
}) {
  const [idx, setIdx] = useState(0);
  const [reduced, setReduced] = useState(false);

  const total = slides?.length ?? 0;

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduced || total < 2) return;
    const t = setTimeout(() => setIdx((i) => (i + 1) % total), interval);
    return () => clearTimeout(t);
  }, [idx, reduced, interval, total]);

  if (total === 0) return null;
  const current = slides[Math.min(idx, total - 1)];

  return (
    <figure>
      {/* Progress bars: paginator + progress */}
      <div className="mb-4 flex gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setIdx(i)}
            aria-label={`Go to slide ${i + 1} of ${total}`}
            aria-current={i === idx}
            className="h-1 flex-1 cursor-pointer overflow-hidden bg-black/10"
          >
            {i < idx && <span className="block h-full w-full bg-zinc-900" />}
            {i === idx && (
              <span
                key={idx}
                className="block h-full bg-zinc-900"
                style={
                  reduced
                    ? { width: "100%" }
                    : { animation: `carousel-progress ${interval}ms linear forwards` }
                }
              />
            )}
          </button>
        ))}
      </div>
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-zinc-100 bg-zinc-50">
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 1400px"
          className="object-contain"
        />
      </div>
      <figcaption className="mt-3 text-center text-xs text-zinc-400">
        {current.alt}
      </figcaption>
    </figure>
  );
}
