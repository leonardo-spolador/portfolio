import Image from "next/image";
import Nav from "@/components/nav";
import ThreadIcon from "@/components/thread-icon";
import about from "@/content/data/about.json";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col text-zinc-900">
      <Nav />

      {/* Opening */}
      <section className="max-w-5xl mx-auto w-full px-6 pt-24 pb-16">
        <h1 className="text-4xl font-semibold tracking-tight leading-tight max-w-xl sm:text-5xl mb-4">
          {about.headline}
        </h1>
        <p className="text-lg text-zinc-500 max-w-xl leading-relaxed">
          {about.subheadline}
        </p>
      </section>

      {/* Portrait + narrative */}
      <section className="border-t border-zinc-100 py-16">
        <div className="max-w-5xl mx-auto w-full px-6 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-16 items-start">
          <div className="flex flex-col gap-6">
            {about.narrative.map((paragraph, i) => (
              <p key={i} className="text-base text-zinc-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="order-first sm:order-last">
            <Image
              src={about.portrait.src}
              alt={about.portrait.alt}
              width={926}
              height={1200}
              className="w-full h-auto rounded-lg"
            />
            <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
              {about.human_moment.split("\n\n").map((para, i) => (
                <span key={i} className="block mb-3 last:mb-0">{para}</span>
              ))}
            </p>
          </div>
        </div>
      </section>

      {/* Career arc */}
      <section className="border-t border-zinc-100 py-16">
        <div className="max-w-5xl mx-auto w-full px-6 grid grid-cols-1 gap-8 sm:grid-cols-[200px_1fr]">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-400 pt-1">
            {about.career_arc.heading}
          </h2>
          <div className="flex flex-col gap-5">
            {about.career_arc.body.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-base text-zinc-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Three threads */}
      <section className="border-t border-zinc-100 py-16">
        <div className="max-w-5xl mx-auto w-full px-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-400 mb-10">
            Three threads
          </h2>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {about.threads.map((thread) => (
              <div key={thread.heading} className="flex flex-col gap-3">
                <ThreadIcon name={thread.icon} className="text-zinc-800" />
                <h3 className="text-base font-semibold text-zinc-900">
                  {thread.heading}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {thread.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-zinc-100 py-16">
        <div className="max-w-5xl mx-auto w-full px-6">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            {about.testimonials.map((t) => (
              <figure
                key={t.name}
                className="rounded-2xl border border-zinc-100 bg-zinc-50/60 p-8 sm:p-10"
              >
                <blockquote className="text-zinc-600 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  {t.image && (
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={56}
                      height={56}
                      className="w-11 h-11 rounded-full object-cover shrink-0"
                    />
                  )}
                  <span className="text-sm text-zinc-400">
                    <span className="block font-medium text-zinc-700">{t.name}</span>
                    <span className="block">{t.title}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="border-t border-zinc-100 py-20">
        <div className="max-w-5xl mx-auto w-full px-6 flex flex-col gap-5 max-w-2xl">
          <h2 className="text-2xl font-semibold leading-snug max-w-xl">
            {about.contact.heading}
          </h2>
          <p className="text-base text-zinc-500 leading-relaxed max-w-lg">
            {about.contact.body}
          </p>
          <a
            href={about.contact.cta.href}
            className="self-start inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-700 transition-colors"
          >
            {about.contact.cta.label}
          </a>
        </div>
      </section>
    </div>
  );
}
