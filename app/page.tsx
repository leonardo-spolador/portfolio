import Link from "next/link";
import Nav from "@/components/nav";
import positioning from "@/content/data/positioning.json";
import proofPoints from "@/content/data/proof-points.json";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col text-zinc-900">
      <Nav />

      {/* Hero */}
      <section className="flex flex-col gap-8 max-w-5xl mx-auto w-full px-6 pt-24 pb-20">
        <h1 className="text-4xl font-semibold tracking-tight leading-tight max-w-2xl sm:text-5xl">
          {positioning.headline}
        </h1>
        <p className="text-lg text-zinc-600 leading-relaxed max-w-xl">
          {positioning.subheadline}
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={positioning.cta_primary.href}
            className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-700 transition-colors"
          >
            {positioning.cta_primary.label}
          </a>
          <a
            href={positioning.cta_secondary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-900 hover:border-zinc-500 transition-colors"
          >
            {positioning.cta_secondary.label}
          </a>
          <a
            href={positioning.cta_tertiary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            {positioning.cta_tertiary.label}
          </a>
        </div>
      </section>

      {/* Proof points */}
      <section className="border-t border-zinc-100 py-16">
        <div className="max-w-5xl mx-auto w-full px-6">
          <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-4">
            {proofPoints.items.map((item) => (
              <div key={item.metric} className="flex flex-col gap-1">
                <span className="text-3xl font-semibold tracking-tight">{item.metric}</span>
                <span className="text-sm text-zinc-500 max-w-[140px] leading-snug">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="border-t border-zinc-100 py-20">
        <div className="max-w-5xl mx-auto w-full px-6 flex flex-col gap-4">
          <p className="text-2xl font-semibold tracking-tight">
            Not just the product. The team behind it.
          </p>
          <Link
            href="/about"
            className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            More about me
          </Link>
        </div>
      </section>
    </div>
  );
}
