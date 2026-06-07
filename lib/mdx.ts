import fs from "fs";
import path from "path";
import matter from "gray-matter";

const casesDir = path.join(process.cwd(), "content/cases");

export type CaseFrontmatter = {
  title: string;
  subtitle: string;
  company: string;
  role: string;
  period: string;
  domain: string;
  slug: string;
  outcomes: { metric: string; label: string }[];
};

export function getAllCases(): CaseFrontmatter[] {
  const files = fs.readdirSync(casesDir).filter((f) => f.endsWith(".mdx"));
  return files.map((file) => {
    const source = fs.readFileSync(path.join(casesDir, file), "utf8");
    const { data } = matter(source);
    return { ...(data as CaseFrontmatter), slug: file.replace(".mdx", "") };
  });
}

export function getCaseBySlug(slug: string): {
  frontmatter: CaseFrontmatter;
  content: string;
} {
  const filePath = path.join(casesDir, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);
  return {
    frontmatter: { ...(data as CaseFrontmatter), slug },
    content,
  };
}
