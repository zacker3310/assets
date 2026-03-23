# assets

A compact library of standalone HTML/CSS assets for reports, embeds, and lightweight dashboards. Every component is self-contained, uses inch-based sizing for predictable print output, and can be opened directly in a browser without a build step.

## What is here

- `index.html` is a simple gallery page for browsing the asset library.
- Each component lives in its own folder with a matching `.html` and `.css` file.
- No JavaScript, package manager, external fonts, or CDN dependencies are required.

## Components

| Component | Directory | Notes |
|-----------|-----------|-------|
| Bar Chart | `bar_chart/` | Horizontal comparison chart with labels, values, and color-coded bars |
| Pie Chart | `pie_chart/` | Donut-style chart with center metric and legend |
| Progress Bar | `progress_bar/` | Compact status card with progress messaging |
| Stat Card | `stat_card/` | KPI card for summary pages and executive snapshots |
| Sparkline Card | `sparkline_card/` | Mini trend card with bar sparkline and headline metric |

## Quick Start

1. Visit [https://zacker3310.github.io/assets/](https://zacker3310.github.io/assets/) to preview the library.
2. Open any component HTML file directly for an isolated preview.
3. Copy a component directory into your project and adjust its CSS custom properties, copy, or dimensions as needed.

## Conventions

- Dimensions use CSS inches (`in`) to preserve print-oriented sizing.
- Components are static HTML/CSS by default.
- Colors, panel sizing, and shadows are exposed through CSS custom properties where useful.
- File naming follows `<component>/<component>_<variant>.html|css` for chart-style assets and `<component>/<component>.html|css` for card-style assets.

## Repository Layout

```text
assets/
├── .gitignore
├── CLAUDE.md
├── README.md
├── index.css
├── index.html
├── bar_chart/
├── pie_chart/
├── progress_bar/
├── sparkline_card/
└── stat_card/
```

## Extending The Library

1. Create a new component folder in `snake_case`.
2. Keep the component self-contained with local HTML and CSS.
3. Use inch-based sizing if the asset is intended for print or PDF workflows.
4. Add the new asset to `index.html`, this README, and `CLAUDE.md`.
