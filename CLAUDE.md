# CLAUDE.md

## Project Summary

This repository is a small static asset library made of standalone HTML and CSS components. It is designed for direct browser use, embedding into other pages, and print/PDF-oriented layouts where predictable sizing matters.

## Key Files

- `index.html`: main gallery page and public landing page
- `index.css`: gallery-only styling
- `theme.css`: shared theme tokens, light/dark mode styling, and toggle UI
- `theme.js`: shared theme behavior and persistence

## Components

### `bar_chart/`

- Files: `bar_chart_chart.html`, `bar_chart_chart.css`
- Purpose: labeled horizontal comparison chart

### `pie_chart/`

- Files: `pie_chart_chart.html`, `pie_chart_chart.css`
- Purpose: donut chart with center metric and legend

### `progress_bar/`

- Files: `progress_bar.html`, `progress_bar.css`
- Purpose: compact progress/status card

### `stat_card/`

- Files: `stat_card.html`, `stat_card.css`
- Purpose: executive KPI card

### `sparkline_card/`

- Files: `sparkline_card.html`, `sparkline_card.css`
- Purpose: mini trend card with spark bars

## Assistant Guidance

- Keep the project dependency-free unless the user explicitly wants to change that.
- Preserve direct-open browser previews for every component.
- Treat `theme.css` and `theme.js` as shared infrastructure used by every page.
- If a theme-related change affects all assets, update both the gallery and component pages together.
- If you add or rename assets, update `index.html`, `README.md`, `CODEX.md`, `AGENTS.md`, and this file.

## Design Rules

- Favor bold but clean presentation over generic defaults.
- Use CSS custom properties where reuse or theming is likely.
- Prefer inches for print-oriented component sizing.
- Keep markup legible enough to copy into other templates without extra cleanup.

## Publishing Rules

- GitHub Pages is the public host.
- Avoid machine-specific paths in docs.
- Be mindful of asset caching when changing shared static files.
