import Nav from "@/components/nav";
import CaseTile from "@/components/case-tile";
import SiteFooter from "@/components/site-footer";
import cases from "@/content/data/cases.json";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col text-zinc-900 bg-[#F3F3E8]">
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="page-container pt-36 pb-30 text-center">
          <h1 className="font-heading text-4xl font-normal tracking-tight leading-tight sm:text-[60px] mb-6">
            Projects
          </h1>
          <p className="text-lg text-zinc-500 leading-relaxed max-w-2xl mx-auto">
            Selected case studies from energy systems, design leadership, and product strategy.
          </p>
        </div>
      </section>

      {/* Case study rows */}
      <section className="border-t border-black/10">
        {cases.items.filter((item) => !item.hidden).map((item) => (
          <CaseTile key={item.href} item={item} comingSoonLabel={cases.coming_soon_label} />
        ))}
      </section>

      <SiteFooter />
    </div>
  );
}
