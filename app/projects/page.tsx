import Link from "next/link";
import Nav from "@/components/nav";
import { getAllCases } from "@/lib/mdx";

export default function ProjectsPage() {
  const cases = getAllCases();

  return (
    <div className="min-h-screen flex flex-col text-zinc-900">
      <Nav />

      <section className="max-w-5xl mx-auto w-full px-6 pt-24 pb-16">
        <h1 className="font-heading text-5xl font-normal tracking-tight sm:text-6xl mb-3">Work</h1>
        <p className="text-base text-zinc-500 max-w-lg leading-relaxed">
          Selected case studies from energy systems, design leadership, and product strategy.
        </p>
      </section>

      {cases.map((c) => (
        <section key={c.slug} className="border-t border-zinc-200">
          <div className="max-w-5xl mx-auto w-full px-6">
            <Link
              href={`/projects/${c.slug}`}
              className="group flex flex-col gap-2 py-8 hover:opacity-70 transition-opacity"
            >
              <span className="text-xs font-medium text-zinc-400 uppercase tracking-wide">
                {c.company}
              </span>
              <h2 className="font-heading text-2xl font-semibold leading-snug text-zinc-900">
                {c.title}
              </h2>
              <p className="text-sm text-zinc-400">{c.period} · {c.domain}</p>
            </Link>
          </div>
        </section>
      ))}

      <section className="border-t border-zinc-200">
        <div className="max-w-5xl mx-auto w-full px-6">
          <div className="flex flex-col gap-2 py-8">
            <span className="text-xs font-medium text-zinc-400 uppercase tracking-wide">
              Shoreline Wind
            </span>
            <h2 className="font-heading text-2xl font-semibold leading-snug text-zinc-900">
              Designing operational clarity for the people who run wind farms
            </h2>
            <p className="text-sm text-zinc-400">Current · Wind Operations · B2B SaaS</p>
            <span className="text-xs font-medium uppercase tracking-wide text-zinc-400 mt-1">
              Coming soon
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
