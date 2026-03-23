# CLAUDE.md

## Project Summary

A static HTML/CSS component library for reporting dashboards, investor updates, and operational reviews. No dependencies, print-aware sizing, light/dark theme. Opens directly in any browser. Hosted on GitHub Pages.

## Key Files

- `index.html`: homepage with component gallery and composition links
- `index.css`: homepage styles
- `theme.css`: shared design tokens, light/dark mode, site shell, theme toggle
- `theme.js`: theme persistence and system preference detection
- `brand_guide.html` / `brand_guide.css`: visual token reference
- `case_study.html` / `case_study.css`: portfolio case study

## Components

| Component | Directory | Files |
|-----------|-----------|-------|
| Bar Chart | `bar_chart/` | `bar_chart_chart.html`, `bar_chart_chart.css` |
| Donut Chart | `pie_chart/` | `pie_chart_chart.html`, `pie_chart_chart.css` |
| Progress Bar | `progress_bar/` | `progress_bar.html`, `progress_bar.css` |
| Stat Card | `stat_card/` | `stat_card.html`, `stat_card.css` |
| Sparkline Card | `sparkline_card/` | `sparkline_card.html`, `sparkline_card.css` |
| Bullet Chart | `bullet_chart/` | `bullet_chart.html`, `bullet_chart.css` |
| Timeline Steps | `timeline_steps/` | `timeline_steps.html`, `timeline_steps.css` |
| Leaderboard Card | `leaderboard_card/` | `leaderboard_card.html`, `leaderboard_card.css` |

## Compositions

- `executive_dashboard.html` / `.css` — Leadership KPI snapshot
- `investor_update.html` / `.css` — Quarterly summary sheet
- `operating_review.html` / `.css` — Internal review layout

## Assistant Guidance

- Keep the project dependency-free unless the user explicitly wants to change that.
- Preserve direct-open browser previews for every component.
- Treat `theme.css` and `theme.js` as shared infrastructure used by every page.
- If a theme-related change affects all assets, update both the gallery and component pages together.
- If you add or rename assets, update `index.html`, `README.md`, and this file.

## Design Rules

- Favor bold but clean presentation over generic defaults.
- Use CSS custom properties where reuse or theming is likely.
- Prefer inches for print-oriented component sizing.
- Keep markup legible enough to copy into other templates without extra cleanup.
- Use the accent color as a signal, not background atmosphere.

## Nav Structure

All pages share a 3-link nav: Home, Brand guide, Case study. The homepage links to compositions inline.

## Versioning

Cache-busting query strings on all CSS/JS: `?v=YYYYMMDD[a-z]`. Bump across all HTML files in the same pass.

## Publishing

- GitHub Pages is the public host.
- `.nojekyll` is present.
- Avoid machine-specific paths in docs.
