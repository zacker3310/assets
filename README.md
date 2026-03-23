# assets

A static HTML/CSS component library for reporting dashboards, investor updates, and operational reviews. No dependencies, print-aware sizing, light/dark theme. Opens directly in any browser.

## Live site

[zacker3310.github.io/assets](https://zacker3310.github.io/assets/)

## Components

| # | Component | Directory | Purpose |
|---|-----------|-----------|---------|
| 01 | Bar Chart | `bar_chart/` | Horizontal comparison with labeled values |
| 02 | Donut Chart | `pie_chart/` | Circular summary with center metric and legend |
| 03 | Progress Bar | `progress_bar/` | Compact status card with progress track |
| 04 | Stat Card | `stat_card/` | Single KPI with label and context line |
| 05 | Sparkline Card | `sparkline_card/` | Mini trend bars with headline number |
| 06 | Bullet Chart | `bullet_chart/` | Actual vs. target with qualitative ranges |
| 07 | Timeline Steps | `timeline_steps/` | Horizontal phase tracker with status dots |
| 08 | Leaderboard Card | `leaderboard_card/` | Ranked list with scores |

## Compositions

Three example layouts that assemble the components into realistic reporting surfaces:

- `executive_dashboard.html` — Leadership KPI snapshot
- `investor_update.html` — Quarterly summary sheet
- `operating_review.html` — Internal review with delivery, activity, and ranking

## Theme system

- `theme.css` — Shared design tokens (40+ CSS custom properties): color, typography, spacing, radius, shadow, motion. Full light and dark mode.
- `theme.js` — Applies theme from localStorage or system preference. Syncs the toggle button.
- Every page includes the same theme toggle in the site header.

## Structure

```
assets/
├── index.html              Gallery and homepage
├── brand_guide.html        Visual brand guide
├── case_study.html         Portfolio case study
├── executive_dashboard.html
├── investor_update.html
├── operating_review.html
├── theme.css               Shared tokens and shell styles
├── theme.js                Theme persistence
├── index.css               Homepage styles
├── brand_guide.css
├── case_study.css
├── compositions.css
├── executive_dashboard.css
├── investor_update.css
├── operating_review.css
├── bar_chart/
├── pie_chart/
├── progress_bar/
├── stat_card/
├── sparkline_card/
├── bullet_chart/
├── timeline_steps/
└── leaderboard_card/
```

## Conventions

- Zero dependencies. No build step.
- Components are self-contained and directly openable in a browser.
- CSS custom properties for all theming. Use `theme.css` tokens before introducing local values.
- Print-sensitive components use inches (`in`) for sizing.
- Components include `sr-only` summaries for screen readers.

## Versioning

Cache-busting query strings on all CSS/JS references: `?v=YYYYMMDD[a-z]`. Bump across all HTML files at the same time when deploying changes.

## Working locally

1. Open `index.html` to browse the gallery.
2. Open any component HTML file to see it standalone.
3. Edit component CSS first; only update `theme.css` if the change should apply system-wide.

## Publishing

GitHub Pages serves the repo as a static site. `.nojekyll` is present.
