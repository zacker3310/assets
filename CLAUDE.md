# CLAUDE.md

## Project Overview

This repository is a pure HTML/CSS asset library. The components are designed to be copied into other projects, embedded in reports, or rendered directly in browsers and PDF workflows without build tooling.

## Current Components

### `bar_chart/`

- Files: `bar_chart_chart.html`, `bar_chart_chart.css`
- Purpose: horizontal comparison chart with labels and percentage values
- Default footprint: `3.35in x 2.1in`

### `pie_chart/`

- Files: `pie_chart_chart.html`, `pie_chart_chart.css`
- Purpose: donut chart with center metric and legend
- Default footprint: `3.5in x 1.9in`

### `progress_bar/`

- Files: `progress_bar.html`, `progress_bar.css`
- Purpose: compact progress/status card with a bar and supporting text
- Default footprint: `3.1in x 1.35in`

### `stat_card/`

- Files: `stat_card.html`, `stat_card.css`
- Purpose: headline KPI card for executive summaries
- Default footprint: `3.1in x 1.9in`

### `sparkline_card/`

- Files: `sparkline_card.html`, `sparkline_card.css`
- Purpose: mini trend card with a simple spark bar series
- Default footprint: `3in x 1.7in`

## Working Conventions

- Prefer keeping assets self-contained and dependency-free.
- Use inches for dimensions when precision matters for print output.
- Favor CSS custom properties for values that are likely to be themed or resized.
- Avoid introducing JavaScript unless the user explicitly asks for dynamic behavior.
- Keep markup readable enough that users can paste pieces into templates without hunting through wrappers.

## Preview Workflow

- `index.html` is the library entrypoint for browser previews.
- Individual component HTML files should also remain directly openable.
- If you add a component, update `index.html`, `README.md`, and this file together.

## File Naming

- Charts can continue using `<component>_<variant>.html|css` where that naming already exists.
- New card-like assets may use `<component>.html|css` when there is only one clear variant.

## Notes

- This repo intentionally has no build system.
- `.gitignore` should stay minimal and focused on OS/editor artifacts.
