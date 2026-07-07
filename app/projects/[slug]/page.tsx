import { notFound } from "next/navigation";
import { Children } from "react";
import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import Nav from "@/components/nav";
import { Tabs, Tab } from "@/components/case-tabs";
import Accordion from "@/components/case-accordion";
import Carousel from "@/components/carousel";
import Slideshow from "@/components/slideshow";
import PeopleGrid from "@/components/people-grid";
import { getCaseBySlug, getAllCases } from "@/lib/mdx";
import { chapterContentClass } from "@/lib/case-styles";
import cases from "@/content/data/cases.json";

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

function TabCols({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 items-start gap-10 lg:grid-flow-col lg:auto-cols-fr lg:gap-16">
      {children}
    </div>
  );
}

function CardQuote({
  children,
  name,
  role,
  image,
  tone = "white",
}: {
  children: React.ReactNode;
  name: string;
  role?: string;
  image?: string;
  tone?: "white" | "sand";
}) {
  return (
    <figure
      className={`${tone === "sand" ? "bg-[#F3F3E8]" : "bg-white"} p-9 [&_p]:!text-lg [&_p]:!text-zinc-600 [&_p]:!leading-relaxed`}
    >
      <blockquote>{children}</blockquote>
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

function ChapterBlock({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="not-prose relative py-21">
      <div
        className="absolute top-0 left-1/2 h-px w-screen -translate-x-1/2 bg-black/10"
        aria-hidden="true"
      />
      <div className="flex flex-col gap-3">
        <h2 className="font-heading text-[40px] font-normal leading-[1.4] tracking-tight text-zinc-900">
          {title}
        </h2>
        {subtitle && (
          <p className="font-heading text-[22px] font-normal leading-[1.4] text-zinc-900 whitespace-pre-line">
            {subtitle}
          </p>
        )}
      </div>
      <div className={chapterContentClass}>{children}</div>
    </section>
  );
}

function DividedCols({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-15 mb-24 grid grid-cols-1 gap-10 lg:grid-flow-col lg:auto-cols-fr lg:gap-0 lg:divide-x lg:divide-black/10 lg:[&>*]:px-8 lg:[&>*:first-child]:pl-0 lg:[&>*:last-child]:pr-0">
      {children}
    </div>
  );
}

// First section of a case: aligns its top with the article's top line
// (-mt-16), metrics-matched vertical padding, a 40px title, 64px gap to a
// divided-column body, and a full-bleed bottom divider.
function LeadSection({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="not-prose relative -mt-16 py-21 [&_p]:text-base [&_p]:text-zinc-600 [&_p]:leading-relaxed [&_p+p]:mt-5 [&_strong]:font-semibold [&_strong]:text-zinc-900">
      <div className="flex flex-col gap-3">
        <h2 className="font-heading text-[40px] font-normal leading-[1.4] tracking-tight text-zinc-900">
          {title}
        </h2>
        {subtitle && (
          <p className="font-heading text-[22px] font-normal leading-[1.4] text-zinc-900 whitespace-pre-line">
            {subtitle}
          </p>
        )}
      </div>
      <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-flow-col lg:auto-cols-fr lg:gap-0 lg:divide-x lg:divide-black/10 lg:[&>*]:px-8 lg:[&>*:first-child]:pl-0 lg:[&>*:last-child]:pr-0">
        {children}
      </div>
      <div
        className="absolute bottom-0 left-1/2 h-px w-screen -translate-x-1/2 bg-black/10"
        aria-hidden="true"
      />
    </section>
  );
}

function Columns({ children }: { children: React.ReactNode }) {
  const items = Children.toArray(children).filter(
    (c) => typeof c !== "string" || c.trim() !== ""
  );
  return (
    <div className="not-prose relative -mt-16 grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] [&_h2]:font-heading [&_h2]:text-4xl [&_h2]:font-normal [&_h2]:tracking-tight [&_h2]:mb-16 [&_p]:text-zinc-600 [&_p]:leading-relaxed [&_p+p]:mt-5">
      <div className="py-21 lg:pr-21">{items[0]}</div>
      <div className="hidden lg:block bg-black/10" aria-hidden="true" />
      <div className="py-21 lg:pl-21">{items[1]}</div>
      <div
        className="absolute bottom-0 left-1/2 h-px w-screen -translate-x-1/2 bg-black/10"
        aria-hidden="true"
      />
    </div>
  );
}

const components = { Mockup, Quote, Slideshow, PeopleGrid, Columns, Tabs, Tab, TabCols, CardQuote, Accordion, Carousel, ChapterBlock, DividedCols, LeadSection };

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
  const card = cases.items.find((c) => c.href === `/projects/${slug}`);

  return (
    <div className="min-h-screen flex flex-col text-zinc-900 bg-white overflow-x-clip">
      <Nav />

      {/* Header */}
      <section className="relative overflow-hidden pt-36 pb-24">
        <div className="page-container text-center">
          <span className="text-xs font-medium text-zinc-400 uppercase tracking-wide">
            {frontmatter.company}
          </span>
          <h1 className="font-heading text-4xl font-normal tracking-tight leading-tight sm:text-[60px] mt-4 mb-4">
            {frontmatter.title}
          </h1>
          <p className="text-lg text-zinc-500 leading-relaxed max-w-2xl mx-auto mb-12">
            {frontmatter.subtitle}
          </p>

          {/* Metadata */}
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-black/10">
            {[
              { label: "Role", value: frontmatter.role },
              { label: "Period", value: frontmatter.period },
              { label: "Domain", value: frontmatter.domain },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-1 text-center sm:px-6">
                <dt className="text-xs text-zinc-400 uppercase tracking-wide">{item.label}</dt>
                <dd className="text-sm text-zinc-700 leading-snug">
                  {item.value.split(/\s+[·–—→]\s+/).map((part, k) => (
                    <span key={k} className="block">{part}</span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {card && (
          <div className="page-container mt-16">
            <Image
              src={card.image}
              alt={card.title}
              width={1600}
              height={1000}
              className="w-full h-auto rounded-xl"
            />
          </div>
        )}
      </section>

      {/* Outcomes */}
      <section className="border-t border-black/10 py-21">
        <div className="page-container">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-black/10">
            {frontmatter.outcomes.map((item) => (
              <div key={item.metric} className="flex flex-col items-center gap-2 text-center sm:px-6">
                <span className="font-heading text-5xl font-extralight tracking-tight sm:text-6xl">{item.metric}</span>
                <span className="text-sm text-zinc-500 leading-snug">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MDX Content */}
      <article className="border-t border-black/10 py-16">
        <div className="page-container">
          <div className="prose prose-zinc prose-base
            prose-headings:font-semibold prose-headings:tracking-tight
            prose-h2:text-xl prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-base prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-zinc-600 prose-p:leading-relaxed
            prose-blockquote:border-l-2 prose-blockquote:border-zinc-100
            prose-blockquote:pl-4 prose-blockquote:text-zinc-500 prose-blockquote:not-italic
            prose-strong:text-zinc-900 prose-strong:font-semibold
            prose-hr:border-black/10 prose-hr:relative prose-hr:left-1/2 prose-hr:w-screen prose-hr:-translate-x-1/2
            max-w-none">
            <MDXRemote source={content} components={components} />
          </div>
        </div>
      </article>

      {/* Footer CTA */}
      <section className="border-t border-black/10 bg-black/75 py-30">
        <div className="page-container flex flex-col items-center gap-6 text-center">
          <h2 className="font-heading text-3xl font-semibold leading-snug text-white">
            Looking at a similar challenge?
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:leonardo.spolador@gmail.com"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-heading text-lg font-normal text-zinc-900 hover:bg-zinc-200 transition-colors"
            >
              Get in touch
            </a>
            <a
              href="https://calendly.com/leonardo-spolador/meeting-with-leonardo-spolador"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 font-heading text-lg font-normal text-white hover:border-white transition-colors"
            >
              Book a conversation
            </a>
          </div>
          <Link
            href="/projects"
            className="font-heading text-lg font-normal text-white/80 hover:text-white transition-colors"
          >
            Back to projects
          </Link>
        </div>
      </section>
    </div>
  );
}
