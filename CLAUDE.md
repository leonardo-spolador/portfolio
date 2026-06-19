# Portfolio — Leonardo Spolador

## Stack
- Next.js 14+ with App Router
- TypeScript
- Tailwind CSS v4
- shadcn/ui (Nova preset, Radix)
- next-mdx-remote for case studies

## Folder conventions
- /app — pages and layouts
- /components — reusable UI components
- /components/ui — shadcn components (do not edit manually)
- /content/cases — MDX files, one per case study
- /content/data — JSON files for positioning, metadata
- /public — images and static assets

## Content files
- /content/data/positioning.json — headline, subheadline, CTA copy
- /content/data/proof-points.json — the numbers (48% ACV, €1.6M, etc.)
- /content/cases/twaice.mdx — TWAICE case study
- /content/cases/lithium-design-system.mdx — Lithium DS case study

## Rules
- Never use inline styles — Tailwind classes only
- Never hardcode copy inside components — always pull from content files
- Placeholder images use https://placehold.co/[width]x[height] URLs
- No database — all content lives as files in this repo
- Keep components small and focused — one responsibility per file

## Pages
- / — Homepage
- /projects — Case study index
- /projects/[slug] — Individual case study
- /about — About page

## Positioning
- Target audience: Lead Designer / Head of Design hiring managers at energy tech scaleups
- Tone: direct, calm authority, no filler phrases, no em dashes
- Key numbers to surface: 48% ACV increase, €1.6M revenue growth, 50% faster UI execution

## Context files
- CLAUDE.md — this file, project rules and conventions
- file-tree.md — full file structure reference

## Branch strategy
- main — production, deployed to Vercel automatically
- feature/* — experimental work, never merged without review
- Always create a feature branch before starting new visual experiments
