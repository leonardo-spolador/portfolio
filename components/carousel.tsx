"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Slide = { src: string; alt: string };

// NOTE: All props are plain strings. In this MDX->RSC setup, only literal
// string attributes reach client components; any {expression} attribute is
// dropped when crossing the server->client boundary. So slides are passed
// as delimited strings (srcs comma-separated, alts "||"-separated) or as a
// base+count sequence, and parsed here on the client.
export default function Carousel({
  srcs,
  alts,
  base,
  count,
  alt = "Slide",
  caption,
  interval = "6000",
}: {
  srcs?: string;
  alts?: string;
  base?: string;
  count?: string | number;
  alt?: string;
  caption?: string;
  interval?: string | number;
}) {
  const n = Number(count) || 0;
  const altList = alts ? alts.split("||").map((a) => a.trim()) : [];
  const resolved: Slide[] = srcs
    ? srcs
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
        .map((src, i) => ({ src, alt: altList[i] || `${alt} — ${i + 1}` }))
    : base
      ? Array.from({ length: n }, (_, i) => ({
          src: `${base}${String(i + 1).padStart(2, "0")}.jpg`,
          alt: `${alt} — ${i + 1} of ${n}`,
        }))
      : [];

  const total = resolved.length;
  const ms = Number(interval) || 6000;
  const showCaption = caption !== "off";
  const [idx, setIdx] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduced || total < 2) return;
    const t = setTimeout(() => setIdx((i) => (i + 1) % total), ms);
    return () => clearTimeout(t);
  }, [idx, reduced, ms, total]);

  if (total === 0) return null;
  const current = resolved[Math.min(idx, total - 1)];

  return (
    <figure className="my-10">
      {/* Progress bars (paginator) + prev/next arrows */}
      <div className="mb-4 flex items-center gap-3">
        <div className="flex flex-1 gap-2">
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
                      : { animation: `carousel-progress ${ms}ms linear forwards` }
                  }
                />
              )}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setIdx((i) => (i - 1 + total) % total)}
          aria-label="Previous slide"
          className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-black/15 text-zinc-900 hover:border-zinc-500 transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12l14 0" />
            <path d="M5 12l6 6" />
            <path d="M5 12l6 -6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => setIdx((i) => (i + 1) % total)}
          aria-label="Next slide"
          className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-black/15 text-zinc-900 hover:border-zinc-500 transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12l14 0" />
            <path d="M13 18l6 -6" />
            <path d="M13 6l6 6" />
          </svg>
        </button>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-zinc-100 bg-zinc-50">
        <Image
          src={current.src}
          alt={current.alt}
          width={1600}
          height={1000}
          priority
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
