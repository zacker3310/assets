# CLAUDE.md

## Project Summary

This repository is a small static asset library made of standalone HTML and CSS components. It is designed for direct browser use, embedding into other pages, and print/PDF-oriented layouts where predictable sizing matters.

## Key Files

- `index.html`: main gallery page and public landing page
- `index.css`: gallery-only styling
- `theme.css`: shared theme tokens, light/dark mode styling, and toggle UI
- `theme.js`: shared theme behavior and persistence
- `brand_guide.html`: browsable brand and component guide
- `brand_guide.css`: styling for the guide page
- `compositions.html`: gallery of approved multi-component layouts
- `compositions.css`: styles for composition index page
- `executive_dashboard.html`: flagship composed example page
- `executive_dashboard.css`: styles for flagship dashboard composition
- `investor_update.html`: investor-facing summary composition
- `investor_update.css`: styles for investor summary composition
- `operating_review.html`: internal operating review composition
- `operating_review.css`: styles for internal operating review composition
- `CASE_STUDY.md`: portfolio-facing explanation of system decisions
- `BRAND_GUIDE.md`: written brand-system principles
- `CONTRIBUTING.md`: rules for adding and updating components
- `GOVERNANCE.md`: brand-system decision and approval model
- `TOKENS.md`: shared token guidance
- `USAGE.md`: recommended business contexts and component pairings
- `VERSIONING.md`: cache-busting convention for deployed static assets
- `QA.md`: manual visual regression checklist

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

### `bullet_chart/`

- Files: `bullet_chart.html`, `bullet_chart.css`
- Purpose: actual-versus-target bullet chart

### `timeline_steps/`

- Files: `timeline_steps.html`, `timeline_steps.css`
- Purpose: horizontal milestone timeline

### `leaderboard_card/`

- Files: `leaderboard_card.html`, `leaderboard_card.css`
- Purpose: ranked performance card

## Assistant Guidance

- Keep the project dependency-free unless the user explicitly wants to change that.
- Preserve direct-open browser previews for every component.
- Treat `theme.css` and `theme.js` as shared infrastructure used by every page.
- Treat `brand_guide.html` and `BRAND_GUIDE.md` as part of the product, not optional docs.
- Treat `VERSIONING.md` as the source of truth for cache-busting updates.
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
