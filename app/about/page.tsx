import Image from "next/image";
import Nav from "@/components/nav";
import ThreadIcon from "@/components/thread-icon";
import SiteFooter from "@/components/site-footer";
import about from "@/content/data/about.json";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col text-zinc-900 bg-[#F3F3E8]">
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="page-container pt-36 pb-30 text-center">
          <h1 className="font-heading text-4xl font-normal tracking-tight leading-tight sm:text-[60px] mb-6">
            {about.headline}
          </h1>
          <p className="text-lg text-zinc-500 leading-relaxed max-w-2xl mx-auto whitespace-pre-line mb-10">
            {about.subheadline}
          </p>
          <a
            href={about.resume.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-6 py-3 font-heading text-lg font-normal text-zinc-900 hover:border-zinc-500 transition-colors"
          >
            {about.resume.label}
          </a>
        </div>
      </section>

      {/* Portrait + narrative */}
      <section className="border-t border-black/10 py-16">
        <div className="page-container grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-16 items-start">
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
      <section className="border-t border-black/10 py-24">
        <div className="page-container flex flex-col gap-6 sm:flex-row sm:gap-12">
          <h2 className="font-heading text-2xl font-semibold text-zinc-900 sm:w-1/2">
            {about.career_arc.heading}
          </h2>
          <div className="flex flex-col gap-5 sm:w-1/2">
            {about.career_arc.body.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-base text-zinc-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Threads */}
      {about.threads.map((thread) => (
        <section key={thread.heading} className="border-t border-black/10 py-24">
          <div className="page-container flex flex-col gap-6 sm:flex-row sm:gap-12">
            <h2 className="font-heading text-2xl font-semibold text-zinc-900 sm:w-1/2 flex items-center gap-3">
              <ThreadIcon name={thread.icon} className="shrink-0 text-zinc-900" />
              {thread.heading}
            </h2>
            <p className="text-base text-zinc-600 leading-relaxed sm:w-1/2">
              {thread.body}
            </p>
          </div>
        </section>
      ))}

      {/* Testimonial */}
      <section className="border-t border-black/10 py-24">
        <div className="page-container">
          {about.testimonials.map((t) => (
            <figure key={t.name} className="border border-zinc-100 bg-zinc-50/60 p-8 sm:p-10">
              <blockquote className="text-2xl font-light leading-[1.4] text-zinc-600">
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
      </section>

      <SiteFooter />
    </div>
  );
}
