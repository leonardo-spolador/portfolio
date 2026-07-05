import home from "@/content/data/home.json";

export default function SiteFooter() {
  return (
    <section className="border-t border-black/10 bg-black/75 py-30">
      <div className="page-container flex flex-col items-center gap-5 text-center">
        <h2 className="font-heading text-3xl font-semibold leading-snug text-white whitespace-pre-line">
          {home.contact.heading}
        </h2>
        <p className="text-base text-white/80 leading-relaxed whitespace-pre-line max-w-2xl mx-auto">
          {home.contact.body}
        </p>
        <a
          href={home.contact.cta.href}
          className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-heading text-lg font-normal text-zinc-900 hover:bg-zinc-200 transition-colors"
        >
          {home.contact.cta.label}
        </a>
      </div>
    </section>
  );
}
