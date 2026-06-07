import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/nav";
import home from "@/content/data/home.json";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col text-zinc-900">
      <Nav />

      {/* Hero */}
      <section className="max-w-5xl mx-auto w-full px-6 pt-24 pb-20">
        <h1 className="text-4xl font-semibold tracking-tight leading-tight max-w-2xl sm:text-5xl mb-6">
          {home.hero.headline}
        </h1>
        <p className="text-lg text-zinc-500 leading-relaxed max-w-xl mb-10">
          {home.hero.subheadline}
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href={home.hero.cta_primary.href}
            className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-700 transition-colors"
          >
            {home.hero.cta_primary.label}
          </Link>
          <a
            href={home.hero.cta_secondary.href}
            className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-900 hover:border-zinc-500 transition-colors"
          >
            {home.hero.cta_secondary.label}
          </a>
        </div>
      </section>

      {/* Outcomes bar */}
      <section className="border-t border-zinc-100 py-14">
        <div className="max-w-5xl mx-auto w-full px-6">
          <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-4">
            {home.outcomes.map((item) => (
              <div key={item.metric} className="flex flex-col gap-1">
                <span className="text-3xl font-semibold tracking-tight">{item.metric}</span>
                <span className="text-sm text-zinc-500 max-w-[160px] leading-snug">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tagline */}
      <section className="border-t border-zinc-100 py-16">
        <div className="max-w-5xl mx-auto w-full px-6">
          <p className="text-2xl font-medium italic text-zinc-400">{home.tagline}</p>
        </div>
      </section>

      {/* Positioning statement */}
      <section className="border-t border-zinc-100 py-16">
        <div className="max-w-5xl mx-auto w-full px-6">
          <div className="max-w-2xl flex flex-col gap-6">
            {home.positioning.map((paragraph, i) => (
              <p key={i} className="text-base text-zinc-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Case study cards */}
      <section className="border-t border-zinc-100 py-16">
        <div className="max-w-5xl mx-auto w-full px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {home.case_studies.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group flex flex-col gap-4 rounded-xl border border-zinc-100 overflow-hidden hover:border-zinc-300 transition-colors"
              >
                <div className="overflow-hidden bg-zinc-50">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={800}
                    height={500}
                    className="w-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col gap-2 px-5 pb-6">
                  <span className="text-xs font-medium text-zinc-400 uppercase tracking-wide">
                    {card.company}
                  </span>
                  <h3 className="text-base font-semibold leading-snug text-zinc-900 group-hover:text-zinc-600 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-zinc-400">{card.tags}</p>
                  <p className="text-sm text-zinc-500 leading-relaxed mt-1">{card.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="border-t border-zinc-100 py-16">
        <div className="max-w-5xl mx-auto w-full px-6">
          <figure className="max-w-2xl">
            <blockquote className="text-lg text-zinc-700 leading-relaxed font-medium">
              &ldquo;{home.testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-sm text-zinc-400">
              {home.testimonial.name}, {home.testimonial.title}
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="border-t border-zinc-100 py-20">
        <div className="max-w-5xl mx-auto w-full px-6 flex flex-col gap-5 max-w-2xl">
          <h2 className="text-2xl font-semibold leading-snug max-w-xl">
            {home.contact.heading}
          </h2>
          <p className="text-base text-zinc-500 leading-relaxed max-w-lg">
            {home.contact.body}
          </p>
          <a
            href={home.contact.cta.href}
            className="self-start inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-700 transition-colors"
          >
            {home.contact.cta.label}
          </a>
        </div>
      </section>
    </div>
  );
}
