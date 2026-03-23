# assets

A lightweight library of standalone HTML/CSS components for reports, embeds, and simple dashboard surfaces. The repo is intentionally static-first: each asset opens directly in the browser, uses print-friendly sizing where it matters, and avoids build tools or external dependencies.

## Preview

- Public gallery: [https://zacker3310.github.io/assets/](https://zacker3310.github.io/assets/)
- Local preview: open `index.html` or any component HTML file directly in a browser

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

## Shared Theme System

- `theme.css` contains shared light/dark-mode variables and the top-right rocker toggle styles.
- `theme.js` applies the selected theme, respects system preference by default, and persists user choice in `localStorage`.
- Every HTML page includes the same fixed toggle in the top-right corner.

## Repo Layout

```text
assets/
├── .gitignore
├── .nojekyll
├── AGENTS.md
├── CLAUDE.md
├── CODEX.md
├── README.md
├── index.css
├── index.html
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
- New assets should be added to `index.html`, this README, `CLAUDE.md`, `CODEX.md`, and `AGENTS.md` when relevant guidance changes.

## Working Locally

1. Open `index.html` to browse the component gallery.
2. Open a component HTML file to inspect it in isolation.
3. Edit the component-local CSS first, then update `theme.css` only if the change should apply across the whole library.

## Publishing Notes

- GitHub Pages serves the repo as a static site.
- `.nojekyll` is present so root-level static assets are served predictably.
- Shared theme asset links use version query strings to reduce stale-cache issues after deploys.
