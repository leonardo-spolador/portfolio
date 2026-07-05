import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/nav";
import home from "@/content/data/home.json";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col text-zinc-900 bg-[#EDF3E8]">
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden border-t border-black/10">
        <div className="relative z-10 page-container pt-36 pb-30 text-center">
          <h1 className="font-heading text-4xl font-normal tracking-tight leading-tight sm:text-[60px] mb-6">
            {home.hero.headline.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="text-lg text-zinc-500 leading-relaxed mb-10 whitespace-pre-line">
            {home.hero.subheadline}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
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
        </div>
      </section>

      {/* Outcomes bar */}
      <section className="border-t border-black/10 py-21">
        <div className="page-container">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-black/10">
            {home.outcomes.map((item) => (
              <div key={item.metric} className="flex flex-col items-center gap-2 text-center sm:px-6">
                <span className="font-heading text-5xl font-light tracking-tight sm:text-6xl">{item.metric}</span>
                <span className="text-sm text-zinc-500 leading-snug">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positioning sections */}
      {home.sections.map((section, i) => (
        <section key={i} className="border-t border-black/10 py-24">
          <div className="page-container flex flex-col gap-6 sm:flex-row sm:gap-12">
            <h2 className="font-heading text-2xl font-semibold text-zinc-900 sm:w-1/2">{section.heading}</h2>
            <p className="text-base text-zinc-600 leading-relaxed sm:w-1/2">{section.body}</p>
          </div>
        </section>
      ))}

      {/* Case study rows */}
      <section className="border-t border-black/10">
        {home.case_studies.map((card) => {
          const inner = (
            <div className="page-container flex flex-col gap-6 py-12 sm:flex-row sm:items-center sm:gap-12">
              <div className="flex flex-col gap-2 sm:flex-1">
                <span className="text-xs font-medium text-zinc-400 uppercase tracking-wide">
                  {card.company}
                </span>
                <h3 className="font-heading text-2xl font-semibold leading-snug text-zinc-900">
                  {card.title}
                </h3>
                <p className="text-xs text-zinc-400">{card.tags}</p>
                <p className="text-sm text-zinc-500 leading-relaxed mt-1">{card.description}</p>
              </div>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-zinc-50 sm:w-1/2">
                {card.coming_soon ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-xs font-medium uppercase tracking-wide text-zinc-400">
                      {home.coming_soon_label}
                    </span>
                  </div>
                ) : (
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={800}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300 motion-reduce:transition-none"
                  />
                )}
              </div>
            </div>
          );

          if (card.coming_soon) {
            return (
              <div key={card.href} className="border-t border-black/10 first:border-t-0">
                {inner}
              </div>
            );
          }

          return (
            <Link
              key={card.href}
              href={card.href}
              className="group block border-t border-black/10 first:border-t-0 transition-colors duration-200 hover:bg-white focus-visible:bg-white motion-reduce:transition-none"
            >
              {inner}
            </Link>
          );
        })}
      </section>

      {/* Testimonial */}
      <section className="border-t border-black/10 py-24">
        <div className="page-container">
          <figure className="border border-zinc-100 bg-zinc-50/60 p-8 sm:p-10">
            <blockquote className="text-zinc-600 leading-relaxed">
              &ldquo;{home.testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              {home.testimonial.image && (
                <Image
                  src={home.testimonial.image}
                  alt={home.testimonial.name}
                  width={56}
                  height={56}
                  className="w-11 h-11 rounded-full object-cover shrink-0"
                />
              )}
              <span className="text-sm text-zinc-400">
                <span className="block font-medium text-zinc-700">{home.testimonial.name}</span>
                <span className="block">{home.testimonial.title}</span>
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="border-t border-black/10 bg-black/75 py-30">
        <div className="page-container flex flex-col items-center gap-5 text-center">
          <h2 className="font-heading text-3xl font-semibold leading-snug text-white whitespace-pre-line">
            {home.contact.heading}
          </h2>
          <p className="text-base text-white/80 leading-relaxed whitespace-pre-line">
            {home.contact.body}
          </p>
          <a
            href={home.contact.cta.href}
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-200 transition-colors"
          >
            {home.contact.cta.label}
          </a>
        </div>
      </section>
    </div>
  );
}
