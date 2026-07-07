"use client";

import { useEffect, useId, useState, type ReactNode } from "react";

const OPEN_EVENT = "case-accordion:open";

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
  const id = useId();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onOpen = (e: Event) => {
      if ((e as CustomEvent<string>).detail !== id) setOpen(false);
    };
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_EVENT, onOpen);
  }, [id]);

  const toggle = () => {
    if (!open) {
      window.dispatchEvent(new CustomEvent<string>(OPEN_EVENT, { detail: id }));
    }
    setOpen(!open);
  };

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
            <span className="font-heading text-[22px] font-normal leading-[1.4] text-zinc-900 whitespace-pre-line">
              {subtitle}
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
      {open && (
        <div className="mt-16 [&_p]:text-base [&_p]:text-zinc-600 [&_p]:leading-relaxed [&_p+p]:mt-5 [&_strong]:font-semibold [&_strong]:text-zinc-900 [&_h3]:font-heading [&_h3]:text-[28px] [&_h3]:font-normal [&_h3]:leading-[1.4] [&_h3]:text-zinc-900 [&_h4]:font-heading [&_h4]:text-[22px] [&_h4]:font-normal [&_h4]:leading-[1.4] [&_h4]:text-zinc-900 [&_h4]:mt-2 [&_h4+p]:mt-6 [&_p+figure]:mt-8 [&_figure+figure]:mt-8 [&>figure:first-child]:mt-0 [&>figure:first-child]:mb-16">
          {children}
        </div>
      )}
    </section>
  );
}
