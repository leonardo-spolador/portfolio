"use client";

import { useState, type ReactNode } from "react";
import { chapterContentClass } from "@/lib/case-styles";

export default function Accordion({
  chapter,
  title,
  subtitle,
  children,
}: {
  chapter: string | number;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((o) => !o);

  return (
    <section className="not-prose relative py-21">
      <div
        className="absolute top-0 left-1/2 h-px w-screen -translate-x-1/2 bg-black/10"
        aria-hidden="true"
      />
      <button
        type="button"
        aria-expanded={open}
        onClick={toggle}
        className="flex w-full cursor-pointer items-start justify-between gap-8 text-left"
      >
        <span className="flex flex-col gap-3">
          <span className="font-heading text-[22px] font-normal leading-[1.4] text-zinc-900">
            CHAPTER {chapter}
          </span>
          <span className="font-heading text-[40px] font-normal leading-[1.4] tracking-tight text-zinc-900">
            {title}
          </span>
          {subtitle && (
            <span className="font-heading text-[22px] font-normal leading-[1.4] text-zinc-900">
              {subtitle.split("||").map((line, i) => (
                <span key={i} className="block">
                  {line.trim()}
                </span>
              ))}
            </span>
          )}
        </span>
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={`mt-2 shrink-0 text-zinc-900 transition-transform motion-reduce:transition-none ${
            open ? "rotate-180" : ""
          }`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && <div className={chapterContentClass}>{children}</div>}
    </section>
  );
}
