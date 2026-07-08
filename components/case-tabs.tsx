"use client";

import {
  Children,
  isValidElement,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";

type TabProps = { label: string; children: ReactNode };

export function Tab({ children }: TabProps) {
  return <>{children}</>;
}

export function Tabs({ title, children }: { title?: string; children: ReactNode }) {
  const tabs = Children.toArray(children).filter(isValidElement) as ReactElement<TabProps>[];
  const [active, setActive] = useState(0);

  return (
    <section className="not-prose my-21">
      {title && (
        <h2 className="font-heading text-4xl font-normal tracking-tight mb-16">{title}</h2>
      )}
      <div role="tablist" className="flex">
        {tabs.map((tab, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`flex-1 cursor-pointer p-6 font-heading text-2xl font-normal text-center transition-colors border-b-[3px] ${
              i === active
                ? "border-zinc-900 text-zinc-900"
                : "border-transparent text-zinc-900/40 hover:text-zinc-900/60"
            }`}
          >
            {tab.props.label}
          </button>
        ))}
      </div>
      <div className="bg-[#F3F3E8] p-8 sm:p-16 [&_h3]:font-heading [&_h3]:!text-3xl [&_h3]:font-normal [&_h3]:tracking-tight [&_h3]:mb-12 [&_p]:text-base [&_p]:text-zinc-600 [&_p]:leading-relaxed [&_p+p]:mt-5 [&_strong]:font-semibold [&_strong]:text-zinc-900 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:text-base [&_li]:text-zinc-600 [&_li]:leading-relaxed [&_li+li]:mt-4">
        {tabs[active]?.props.children}
      </div>
    </section>
  );
}
