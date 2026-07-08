import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/nav";
import CaseTile from "@/components/case-tile";
import SiteFooter from "@/components/site-footer";
import home from "@/content/data/home.json";
import cases from "@/content/data/cases.json";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col text-zinc-900 bg-[#EDF3E8]">
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="relative z-10 page-container pt-36 pb-30 text-center">
          <h1 className="font-heading text-4xl font-normal tracking-tight leading-tight sm:text-[60px] mb-6">
            {home.hero.headline.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="text-lg text-zinc-500 leading-relaxed mb-10 whitespace-pre-line max-w-2xl mx-auto">
            {home.hero.subheadline}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href={home.hero.cta_primary.href}
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 font-heading text-lg font-normal text-white hover:bg-zinc-700 transition-colors"
            >
              {home.hero.cta_primary.label}
            </Link>
            <a
              href={home.hero.cta_secondary.href}
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-6 py-3 font-heading text-lg font-normal text-zinc-900 hover:border-zinc-500 transition-colors"
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
                <span className="font-heading text-5xl font-extralight tracking-tight sm:text-6xl">{item.metric}</span>
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
        {cases.items.filter((item) => !item.hidden).map((item) => (
          <CaseTile key={item.href} item={item} comingSoonLabel={cases.coming_soon_label} />
        ))}
      </section>

      {/* Testimonial */}
      <section className="border-t border-black/10 py-24">
        <div className="page-container">
          <figure className="border border-zinc-100 bg-zinc-50/60 p-8 sm:p-10">
            <blockquote className="text-2xl font-light leading-[1.4] text-zinc-600">
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

      <SiteFooter />
    </div>
  );
}
