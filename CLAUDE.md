# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev         # dev server (localhost:3000)
pnpm build       # production build
pnpm lint        # ESLint
pnpm add <pkg>   # install packages (use pnpm, not npm)
```

No test suite. No single-test command.

## Architecture

**Stack:** Next.js 15 App Router · React 19 · TypeScript · Tailwind CSS 3.4 · `motion` (Framer Motion v11) · GSAP (with ScrollTrigger) · `tailwind-merge`

**Path alias:** `@/*` → `src/*`

**Font:** Cabin (400) — loaded via `next/font/google` in `src/app/layout.tsx`, applied to `<html>`.

**Dark mode:** `tailwind.config.ts` uses `darkMode: "selector"`. Toggle `.dark` class on `<html>`. Preference stored in `localStorage` via `src/hooks/useDarkMode.ts`.

### Component Structure

```
src/components/
  app_layout/     Header, MainLayout — global shell
  landing/        One file per page section (HeroSection, AboutSection, etc.)
  ui/             Reusable Neo Brutalism primitives (NeoCard, NeoButton, NeoTag, SectionHeading, DoodleDecor)
  doodles/        Custom SVG React components (Star, etc.)
```

### Portfolio Content — Single Source of Truth

**All hardcoded content lives in `src/app/data/portfolioData.ts`.**  
Edit this one file to update experience, projects, education, skills, or contact info. Section components import from here — never inline data in components.

Exported arrays:
- `techList` — tech stack items (`id, name, icon?, image?`)
- `projectList` — projects (`id, name, desc, tech[], src?, links?`)
- `experienceList` — work history (`id, company, role, period, location, bullets[]`)
- `educationList` — degrees (`id, institution, degree, gpa, period, location`)
- `personalInfo` — name, title, bio, email, github, linkedin

---

## Design System — Neo Brutalism

**Primary:** `violet-600` | **Secondary:** `amber-600`  
**Light bg:** `slate-50` · **Dark bg:** `slate-900` · **Text:** `slate-900` / `dark:slate-50`  
**Border color:** `slate-900` light · `violet-400` dark

### Shadow System

```
// Standard card shadow
[box-shadow:4px_4px_0_0_#0f172a] dark:[box-shadow:4px_4px_0_0_#7c3aed]

// Large card shadow
[box-shadow:8px_8px_0_0_#0f172a] dark:[box-shadow:8px_8px_0_0_#7c3aed]

// Interactive push (add to hover)
hover:[box-shadow:0_0_0_0_#0f172a] hover:translate-x-1 hover:translate-y-1 transition-all
```

### Reusable UI Primitives (`src/components/ui/`)

| Component | Purpose |
|-----------|---------|
| `NeoCard` | Bordered card with hard shadow. Props: `size` (`sm`/`md`/`lg`), `interactive` (adds hover push), `className` |
| `NeoButton` | Bordered button with push animation. Props: `variant` (`primary`/`secondary`/`ghost`), `size`, `asChild` |
| `NeoTag` | Pill tag for tech/skill labels. Props: `variant` (`violet`/`amber`/`neutral`) |
| `SectionHeading` | Bold section title with optional doodle accent. Props: `title`, `subtitle`, `doodle?` |
| `DoodleDecor` | Wraps `public/doodles/` SVGs with absolute positioning. Props: `src`, `size`, `rotate?`, `className` |

### Tailwind Color Tokens

`tailwind.config.ts` extends theme with:
```ts
primary: colors.violet[600]     // bg-primary, text-primary, border-primary
secondary: colors.amber[600]    // bg-secondary, text-secondary
```

---

## Animation Stack

**Rule:** `motion` for component-level; GSAP for page-level scroll orchestration and complex timelines.

### `motion` (Framer Motion v11) patterns

```tsx
// Entrance on scroll
<m.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
/>

// Stagger children
const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }

// Hover push (pairs with shadow CSS above)
whileHover={{ x: 1, y: 1 }}
```

Always wrap in `<LazyMotion features={domAnimation}>` for performance. Use `m.*` imports, not direct `motion.*`.

### GSAP patterns

```tsx
"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger, useGSAP)

// Hero timeline
useGSAP(() => {
  const tl = gsap.timeline()
  tl.from(".hero-heading", { y: 60, opacity: 0, duration: 0.8 })
    .from(".hero-sub", { y: 40, opacity: 0, duration: 0.6 }, "-=0.4")
}, [])

// Scroll parallax doodle
useGSAP(() => {
  gsap.to(".doodle-float", {
    y: -80,
    scrollTrigger: { trigger: ".section-hero", scrub: 1 },
  })
}, [])
```

Use GSAP in Client Components only (`"use client"`). Register plugins once per component.

---

## Doodles (`public/doodles/`)

449 SVG files across 14 categories. Use `<DoodleDecor>` component or `<Image>` (Next.js).

**Recommended per section:**
- Hero: `misc/`, `objects/` — rockets, lightning, stars
- Experience: `arrows/` — timeline connectors, chevrons
- Skills: `interface/` — UI icon decorations
- Projects: `objects/`, `logos/`
- Contact: `hand gestures/` — pointing hands

Always set `alt=""` (decorative) and `aria-hidden="true"` on doodle images.

---

## Portfolio Sections

Home page (`src/app/page.tsx`) renders sections in this order:

1. **HeroSection** — name, title, animated intro, CTA buttons (Download CV, Contact), scattered doodles, GSAP entrance timeline
2. **AboutSection** — bio card, personality traits, Unsplash placeholder portrait
3. **ExperienceSection** — vertical timeline, each entry a `NeoCard`, doodle arrow connectors
4. **MyTechSection** — tech grid with staggered `motion` entrance
5. **ProjectSection** — 2-col project cards with tech tags, links
6. **EducationSection** — single card for UTM degree
7. **ContactSection** — social links (GitHub, LinkedIn, email), copy-to-clipboard email

---

## Dark Mode

`useDarkMode` hook manages `localStorage` + `.dark` class on `document.documentElement`.  
Header renders a sun/moon toggle button using this hook.  
All section components must include `dark:` variants for bg, text, border, and shadow.

Dark palette cheat sheet:
```
bg:     dark:bg-slate-900
card:   dark:bg-slate-800
text:   dark:text-slate-50  dark:text-slate-400 (muted)
border: dark:border-violet-400
shadow: dark:[box-shadow:4px_4px_0_0_#7c3aed]
```
