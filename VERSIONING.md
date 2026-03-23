# VERSIONING.md

## Purpose

This repo uses manual cache-busting query strings for static assets served by GitHub Pages.

## Current Convention

- Use a single shared release token across all HTML entrypoints.
- Apply the same token to:
  - `theme.css`
  - `theme.js`
  - the page-local stylesheet for that HTML file
- Current token format: `YYYYMMDD[a-z]`
  - Current token: `20260323c`

## When To Bump

- Bump the token whenever a deployed CSS or JS change should invalidate browser cache.
- If a change touches shared theme behavior or visuals, update every HTML entrypoint in the repo in the same pass.

## HTML Files To Keep In Sync

- `index.html`
- `brand_guide.html`
- `compositions.html`
- `executive_dashboard.html`
- `investor_update.html`
- `operating_review.html`
- `bar_chart/bar_chart_chart.html`
- `pie_chart/pie_chart_chart.html`
- `progress_bar/progress_bar.html`
- `stat_card/stat_card.html`
- `sparkline_card/sparkline_card.html`
- `bullet_chart/bullet_chart.html`
- `timeline_steps/timeline_steps.html`
- `leaderboard_card/leaderboard_card.html`

## Rule

Do not mix version tokens across pages unless there is a very deliberate reason to do so.
