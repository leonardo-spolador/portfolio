"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Slide = { src: string; alt: string };

export default function Carousel({
  slides,
  base,
  count,
  alt = "Slide",
  interval = 6000,
  showCaption = true,
}: {
  slides?: Slide[];
  base?: string;
  count?: number | string;
  alt?: string;
  interval?: number;
  showCaption?: boolean;
}) {
  // Build the slide list from either an explicit array or a base+count
  // sequence. Generating here (client-side) keeps MDX props simple and
  // serializable across the server→client boundary.
  const resolved: Slide[] =
    slides ??
    (base
      ? Array.from({ length: Number(count) || 0 }, (_, i) => ({
          src: `${base}${String(i + 1).padStart(2, "0")}.jpg`,
          alt: `${alt} — ${i + 1} of ${Number(count) || 0}`,
        }))
      : []);

  const total = resolved.length;
  const [idx, setIdx] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduced || total < 2) return;
    const t = setTimeout(() => setIdx((i) => (i + 1) % total), interval);
    return () => clearTimeout(t);
  }, [idx, reduced, interval, total]);

  if (total === 0) return null;
  const current = resolved[Math.min(idx, total - 1)];

  return (
    <figure>
      {/* Progress bars: paginator + progress */}
      <div className="mb-4 flex gap-2">
        {resolved.map((slide, i) => (
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
          width={1600}
          height={1000}
          sizes="(max-width: 1024px) 100vw, 1400px"
          className="absolute inset-0 h-full w-full object-contain"
        />
      </div>
      {showCaption && (
        <figcaption className="mt-3 text-center text-xs text-zinc-400">
          {current.alt}
        </figcaption>
      )}
    </figure>
  );
}
