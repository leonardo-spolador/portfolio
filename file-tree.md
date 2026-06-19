# File Tree — Leonardo Spolador Portfolio
*Last updated: June 2026*

## App (pages and layouts)
- /app/layout.tsx — root layout, fonts, global wrappers
- /app/page.tsx — homepage
- /app/globals.css — global styles
- /app/about/page.tsx — about page
- /app/projects/page.tsx — case study index
- /app/projects/[slug]/page.tsx — individual case study

## Components
- /components/nav.tsx — site navigation
- /components/people-grid.tsx — grid of people photos
- /components/slideshow.tsx — image slideshow
- /components/thread-icon.tsx — icon component
- /components/ui/ — shadcn/ui components (do not edit manually)

## Content
- /content/data/home.json — homepage copy
- /content/data/positioning.json — headline, subheadline, CTA copy
- /content/data/proof-points.json — KPI numbers (48% ACV, €1.6M, etc.)
- /content/data/about.json — about page copy
- /content/data/design-cop-people.json — CoP people data
- /content/cases/twaice.mdx — TWAICE case study
- /content/cases/mobil-mexico.mdx — Mobil Mexico case study
- /content/cases/design-cop.mdx — Design CoP case study

## Lib
- /lib/mdx.ts — MDX parsing utilities
- /lib/utils.ts — shared utility functions

## Public assets
- /public/cases/ — all case study images, organised by project
- /public/cases/about/portrait.jpg — author portrait
- /public/cases/twaice/ — TWAICE images and people photos
- /public/cases/mobil-mexico/ — Mobil Mexico images
- /public/cases/design-cop/ — CoP slides and people photos
- /public/cases/shoreline/ — Shoreline assets

## Config
- /next.config.ts
- /tsconfig.json
-