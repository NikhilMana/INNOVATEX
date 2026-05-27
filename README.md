# InnovateX

The website for **InnovateX** — the innovation ecosystem of the CSE AI & ML department at MIT Mysore.

Built with Next.js 16 App Router, TypeScript, Tailwind CSS, GSAP, and Lenis smooth scrolling.

## Quick start

```bash
npm install --legacy-peer-deps
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the dev server with Turbopack
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — lint the codebase

## Project structure

```
app/             — App Router pages
  events/        — All event pages (Vision X is the flagship)
  magazine/      — COSMIC 1.0–4.0 editions
components/
  ui/            — Shared primitives (Button, GlassCard, Pill, …)
  home/          — Homepage sections
  events/        — Event-specific components (Countdown, Template)
  magazine/      — Magazine edition template
  layout/        — Navbar, Footer, SmoothScrollProvider
  robot/         — RobotScene (scroll-linked global)
hooks/           — All animation/utility hooks
lib/             — gsap config, utils
data/            — All typed content (events, magazine, team, etc.)
public/
  robot/         — ROBOT_ASSET
  images/        — Logos and event posters
```

## Vision X content

The flagship `/events/vision-x` page is wired to `data/vision-x.ts`. Every
slot that needs real content has a `/* TODO: ... */` marker. Replace each
TODO with the corresponding section from `Department Fest 2025 Trifold Brochure (1).pdf`
(also available at `public/vision-x-brochure.pdf`).

Critical TODOs:
- `tagline` — brochure tagline
- `date` — ISO timestamp for the countdown
- `overview` — overview paragraph
- `tracks[]` — full event list
- `schedule[]` — day-by-day schedule
- `speakers[]` — confirmed speakers
- `sponsorTiers[]` — sponsor tiers
- `faqs[]` — FAQ from brochure
- `registerUrl` — live registration link

## Design tokens

| Token | Value | Usage |
|---|---|---|
| `bg` | `#0D0D1A` | Background base |
| `surface` | `#151524` | Card backgrounds |
| `purple-500` | `#A855F7` | Primary accent |
| `purple-700` | `#7E22CE` | Secondary depth |
| `magenta` | `#D946EF` | Gradient highlight |
| `muted` | `#8B8B9A` | Secondary text |

Custom utilities: `.gradient-text`, `.glass-card`, `.glow-purple`,
`.ai-grid`, `.ai-mesh`, `.noise-overlay`, `.container-x`, `.section-padding`.

Visual design QA: `/design-system` (remove before deploying to production).

## Animations

All animation logic lives in `hooks/`:

- `useRevealAnimation` — scroll-triggered fade-up reveals
- `useHeroAnimation` — full hero entrance timeline
- `useMagneticButton` — cursor-magnetic effect on buttons
- `useCountUp` — animated number counters
- `useParallax` — scroll-linked parallax transforms
- `useFloatingAnimation` — continuous float loop
- `useSplitText` — wraps words/chars for stagger animations
- `useReducedMotion` — honors prefers-reduced-motion

## Notes

- Splash plays once per session (sessionStorage). Press **Esc** to skip.
- The global `RobotScene` is fixed-positioned and scroll-driven — hidden on
  mobile for performance.
- All content is data-driven from `data/*.ts` — no hardcoded copy in components.
