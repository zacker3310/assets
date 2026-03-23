# assets

A portfolio-grade static component system for enterprise reporting, investor communication, and lightweight product surfaces. The repository is intentionally static-first: every page opens directly in the browser, uses print-aware sizing where it matters, and avoids build tools or external dependencies.

## Preview

- Public gallery: [https://zacker3310.github.io/assets/](https://zacker3310.github.io/assets/)
- Brand guide: open `brand_guide.html`
- Composition gallery: open `compositions.html`
- Flagship compositions: open `executive_dashboard.html`, `investor_update.html`, and `operating_review.html`
- Portfolio case study: open `CASE_STUDY.md`
- Local preview: open `index.html` or any component HTML file directly in a browser

## Repository Position

This repo is meant to read as more than an asset dump. It combines:

- a core library of standalone HTML/CSS components
- a shared theme and token layer with persistent light/dark mode
- stakeholder-facing guide pages for brand and composition usage
- operational docs for contribution, QA, governance, and static deployment
- portfolio-ready example compositions that show the system working in realistic business contexts

## What’s Included

| Component | Directory | Notes |
|-----------|-----------|-------|
| Bar Chart | `bar_chart/` | Horizontal comparison chart with labels, values, and themed bars |
| Pie Chart | `pie_chart/` | Donut-style chart with a center metric and legend |
| Progress Bar | `progress_bar/` | Compact status card with progress messaging |
| Stat Card | `stat_card/` | KPI card for summary pages and executive snapshots |
| Sparkline Card | `sparkline_card/` | Mini trend card with a simple bar sparkline |
| Bullet Chart | `bullet_chart/` | Actual-versus-target bar with qualitative ranges |
| Timeline Steps | `timeline_steps/` | Horizontal phase tracker for projects and launches |
| Leaderboard Card | `leaderboard_card/` | Ranked list card for people, teams, or campaigns |

## Composition Pages

| Page | File | Purpose |
|------|------|---------|
| Composition Gallery | `compositions.html` | Overview of approved multi-component layouts |
| Executive Dashboard | `executive_dashboard.html` | Leadership-facing operating snapshot |
| Investor Update | `investor_update.html` | Board- and investor-facing summary sheet |
| Operating Review | `operating_review.html` | Dense internal operating cadence layout |
| Brand Guide | `brand_guide.html` | Browsable system-level guide for brand and governance |

## Shared Theme System

- `theme.css` contains shared light/dark-mode variables and the top-right rocker toggle styles.
- `theme.js` applies the selected theme, respects system preference by default, and persists user choice in `localStorage`.
- Every HTML page includes the same fixed toggle in the top-right corner.
- Shared surface, border, text, and accent tokens also live in `theme.css` so component CSS can align around one visual system.
- New semantic tokens such as muted surfaces, soft accent fills, and neutral structural values support more consistent composition pages.

## Repo Layout

```text
assets/
├── .gitignore
├── .nojekyll
├── AGENTS.md
├── BRAND_GUIDE.md
├── CLAUDE.md
├── CODEX.md
├── CONTRIBUTING.md
├── GOVERNANCE.md
├── QA.md
├── README.md
├── TOKENS.md
├── USAGE.md
├── VERSIONING.md
├── brand_guide.css
├── brand_guide.html
├── CASE_STUDY.md
├── compositions.css
├── compositions.html
├── executive_dashboard.css
├── executive_dashboard.html
├── investor_update.css
├── investor_update.html
├── index.css
├── index.html
├── operating_review.css
├── operating_review.html
├── theme.css
├── theme.js
├── bullet_chart/
├── bar_chart/
├── leaderboard_card/
├── pie_chart/
├── progress_bar/
├── sparkline_card/
├── stat_card/
└── timeline_steps/
```

## Conventions

- Components are self-contained and should remain directly openable.
- Keep dependencies at zero unless a future change explicitly requires otherwise.
- Prefer CSS custom properties for colors, spacing, sizing, and theming hooks.
- Use inches (`in`) for print-sensitive component dimensions.
- New assets or pages should be added to `index.html`, this README, `CLAUDE.md`, `CODEX.md`, and `AGENTS.md` when relevant guidance changes.
- Keep the cache-busting token aligned across all HTML entrypoints. See `VERSIONING.md`.
- Treat `BRAND_GUIDE.md` and `brand_guide.html` as the system-level source for brand behavior and presentation intent.
- Use `CONTRIBUTING.md`, `GOVERNANCE.md`, and `USAGE.md` to keep the repo operationally useful for a larger organization.
- Use the composition pages as portfolio-level examples of how the system is meant to be assembled.
- Use `CASE_STUDY.md` to explain the system thinking and project framing in portfolio contexts.

## Working Locally

1. Open `index.html` to browse the component gallery.
2. Open `compositions.html` and `brand_guide.html` to review the system layer.
3. Open a component HTML file to inspect it in isolation.
4. Edit the page- or component-local CSS first, then update `theme.css` only if the change should apply across the whole library.

## Publishing Notes

- GitHub Pages serves the repo as a static site.
- `.nojekyll` is present so root-level static assets are served predictably.
- Shared and page-local asset links use version query strings to reduce stale-cache issues after deploys.
- Use `QA.md` as the manual post-change visual regression checklist.
