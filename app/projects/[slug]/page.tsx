import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import Nav from "@/components/nav";
import Slideshow from "@/components/slideshow";
import PeopleGrid from "@/components/people-grid";
import { getCaseBySlug, getAllCases } from "@/lib/mdx";

export const dynamicParams = false;

export async function generateStaticParams() {
  const cases = getAllCases();
  return cases.map((c) => ({ slug: c.slug }));
}

function Mockup({ alt, src }: { alt: string; src?: string }) {
  return (
    <figure className="my-10">
      <Image
        src={src ?? "https://placehold.co/800x500"}
        alt={alt}
        width={1600}
        height={1000}
        className="w-full h-auto rounded-lg border border-zinc-100"
      />
      {alt && (
        <figcaption className="mt-2 text-xs text-zinc-400 text-center">{alt}</figcaption>
      )}
    </figure>
  );
}

function Quote({
  children,
  name,
  role,
  image,
}: {
  children: React.ReactNode;
  name: string;
  role?: string;
  image?: string;
}) {
  return (
    <figure className="not-prose my-8 rounded-2xl border border-zinc-100 bg-zinc-50/60 p-8 sm:p-10">
      <blockquote className="text-zinc-600 leading-relaxed">{children}</blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        {image && (
          <Image
            src={image}
            alt={name}
            width={56}
            height={56}
            className="w-11 h-11 rounded-full object-cover shrink-0"
          />
        )}
        <span className="text-sm text-zinc-400">
          <span className="block font-medium text-zinc-700">{name}</span>
          {role ? <span className="block">{role}</span> : null}
        </span>
      </figcaption>
    </figure>
  );
}

const components = { Mockup, Quote, Slideshow, PeopleGrid };

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let caseData;
  try {
    caseData = getCaseBySlug(slug);
  } catch {
    notFound();
  }

  if (!caseData) notFound();

  const { frontmatter, content } = caseData;

  return (
    <div className="min-h-screen flex flex-col text-zinc-900">
      <Nav />

      {/* Header */}
      <section className="max-w-5xl mx-auto w-full px-6 pt-24 pb-16">
        <span className="text-xs font-medium text-zinc-400 uppercase tracking-wide">
          {frontmatter.company}
        </span>
        <h1 className="font-heading text-4xl font-semibold tracking-tight leading-tight mt-3 mb-2 max-w-2xl">
          {frontmatter.title}
        </h1>
        <p className="text-lg text-zinc-500 mb-10">{frontmatter.subtitle}</p>

        {/* Metadata */}
        <dl className="grid grid-cols-2 gap-x-12 gap-y-4 sm:grid-cols-4 border-t border-zinc-200 pt-8">
          {[
            { label: "Role", value: frontmatter.role },
            { label: "Period", value: frontmatter.period },
            { label: "Domain", value: frontmatter.domain },
          ].map((item) => (
            <div key={item.label} className="flex flex-col gap-1">
              <dt className="text-xs text-zinc-400 uppercase tracking-wide">{item.label}</dt>
              <dd className="text-sm text-zinc-700 leading-snug">{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Outcomes */}
      <section className="border-t border-zinc-200 py-14">
        <div className="max-w-5xl mx-auto w-full px-6">
          <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-4">
            {frontmatter.outcomes.map((item) => (
              <div key={item.metric} className="flex flex-col gap-1">
                <span className="text-3xl font-semibold tracking-tight">{item.metric}</span>
                <span className="text-sm text-zinc-500 max-w-[160px] leading-snug">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MDX Content */}
      <article className="border-t border-zinc-200 py-16">
        <div className="max-w-5xl mx-auto w-full px-6">
          <div className="prose prose-zinc prose-base
            prose-headings:font-semibold prose-headings:tracking-tight
            prose-h2:text-xl prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-base prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-zinc-600 prose-p:leading-relaxed
            prose-blockquote:border-l-2 prose-blockquote:border-zinc-100
            prose-blockquote:pl-4 prose-blockquote:text-zinc-500 prose-blockquote:not-italic
            prose-strong:text-zinc-900 prose-strong:font-semibold
            prose-hr:border-zinc-200
            max-w-none">
            <MDXRemote source={content} components={components} />
          </div>
        </div>
      </article>

      {/* Footer CTA */}
      <section className="border-t border-zinc-200 py-16">
        <div className="max-w-5xl mx-auto w-full px-6 flex flex-col gap-4">
          <p className="text-lg font-semibold">Looking at a similar challenge?</p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:leonardo.spolador@gmail.com"
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-700 transition-colors"
            >
              Contact me
            </a>
            <a
              href="https://calendly.com/leonardo-spolador/meeting-with-leonardo-spolador"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-900 hover:border-zinc-500 transition-colors"
            >
              Book a conversation
            </a>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              Back to work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
