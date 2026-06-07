import Link from "next/link";
import Nav from "@/components/nav";
import { getAllCases } from "@/lib/mdx";

export default function ProjectsPage() {
  const cases = getAllCases();

  return (
    <div className="min-h-screen flex flex-col text-zinc-900">
      <Nav />

      <section className="max-w-5xl mx-auto w-full px-6 pt-24 pb-20">
        <h1 className="text-3xl font-semibold tracking-tight mb-3">Work</h1>
        <p className="text-base text-zinc-500 max-w-lg leading-relaxed mb-16">
          Selected case studies from energy systems, design leadership, and product strategy.
        </p>

        <div className="flex flex-col divide-y divide-zinc-100">
          {cases.map((c) => (
            <Link
              key={c.slug}
              href={`/projects/${c.slug}`}
              className="group flex flex-col gap-2 py-8 hover:opacity-70 transition-opacity"
            >
              <span className="text-xs font-medium text-zinc-400 uppercase tracking-wide">
                {c.company}
              </span>
              <h2 className="text-xl font-semibold leading-snug text-zinc-900">
                {c.title}
              </h2>
              <p className="text-sm text-zinc-400">{c.period} · {c.domain}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
