# Pointer AI — Landing Page

A modern, dark-themed marketing landing page for **Pointer AI**, an AI-powered coding assistant product. Built with a bento-style feature grid, animated sections, dashboard preview mockups, pricing, testimonials, and FAQ — a complete single-page marketing site.

## What it does

This site presents Pointer AI's product story through:

- **Hero section** — headline, CTAs, and an SVG-animated dashboard preview
- **Social proof** — customer logos / stats strip
- **Bento feature grid** — AI code reviews, easy deployment, MCP connectivity, one-click integrations, parallel agents, real-time previews
- **Testimonials** — large featured testimonial + testimonial grid
- **Pricing** — plan comparison section
- **FAQ** — accordion of common questions
- **CTA + Footer** — final conversion block and site footer

All content is static marketing content with local image assets in `public/images/` (avatars, product screenshots, integration logos).

## Features

- Dark-mode-first design with animated scroll-in sections (Framer Motion)
- Responsive layout (mobile → desktop) built on Tailwind CSS
- shadcn/ui component library (buttons, sheets, accordion, dialogs, etc.)
- Theme provider via `next-themes`
- Static export friendly — no API routes, no server actions, no backend

## Tech stack

| Layer      | Tech                                                |
|------------|-----------------------------------------------------|
| Framework  | Next.js 15 (App Router)                             |
| Language   | TypeScript + React 19                               |
| Styling    | Tailwind CSS 3.4, tailwindcss-animate, custom CSS modules |
| UI kit     | shadcn/ui (Radix UI primitives)                     |
| Animation  | Framer Motion                                       |
| Icons      | Lucide React                                        |
| Charts     | Recharts                                            |
| Forms      | React Hook Form + Zod                               |
| Package manager | pnpm                                          |

## Quick start

```bash
# install dependencies
pnpm install

# run the dev server
pnpm dev

# open http://localhost:3000
```

Build for production:

```bash
pnpm build
pnpm start
```

Static export (as configured in `next.config.mjs` for GitHub Pages):

```bash
pnpm build   # emits a static site into out/
```

## Project structure

```
pointer-ai-landing-page/
├── app/
│   ├── page.tsx          # Landing page composition (all sections)
│   ├── layout.tsx        # Root layout + metadata
│   └── globals.css       # Global styles
├── components/
│   ├── hero-section.tsx
│   ├── dashboard-preview.tsx
│   ├── social-proof.tsx
│   ├── bento-section.tsx
│   ├── bento/            # Bento card illustrations
│   │   ├── ai-code-reviews.tsx
│   │   ├── easy-deployment.tsx
│   │   ├── mcp-connectivity-illustration.tsx
│   │   ├── one-click-integrations-illustration.tsx
│   │   ├── parallel-agents.tsx
│   │   └── real-time-previews.tsx
│   ├── large-testimonial.tsx
│   ├── pricing-section.tsx
│   ├── testimonial-grid-section.tsx
│   ├── faq-section.tsx
│   ├── cta-section.tsx
│   ├── footer-section.tsx
│   ├── animated-section.tsx
│   ├── header.tsx
│   ├── theme-provider.tsx
│   └── ui/               # shadcn/ui primitives
├── lib/
│   └── utils.ts          # cn() class-name helper
├── public/images/        # Avatars, screenshots, logos
├── next.config.mjs
└── tailwind.config.ts
```

## Environment variables

None required. The site is fully static and runs without any env vars.

## Deployment notes

- `next.config.mjs` uses `output: 'export'` with `images: { unoptimized: true }`, so `pnpm build` produces a fully static `out/` directory that can be served from any static host (GitHub Pages, Cloudflare Pages, Netlify).
- For GitHub Pages project-site deploys, `basePath: '/pointer-ai-landing-page'` is set so assets resolve under the repo subpath. **Remove `basePath`** (or set it to `''`) when deploying to a custom domain or Vercel/Netlify root.
- Originally generated with v0; Next.js was bumped to 15.2.8 (fixes CVE-2025-55182 "React2Shell" and related Dec-2025 security advisories).

---

Built by Girish Lade — https://ladestack.in
