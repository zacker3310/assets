# QA.md

## Manual Visual Regression Checklist

Run this checklist before or just after a GitHub Pages deploy.

## Gallery

- Open `index.html` locally and confirm all asset links load.
- Verify the home page works in both light and dark theme.
- Confirm keyboard focus is visible on the theme toggle and gallery cards.
- Confirm the gallery collapses to one column on narrow viewports.
- Confirm the home page sections read coherently in order: hero, proof, deliverables, compositions, asset gallery, system framing.

## Showcase Pages

- Open `compositions.html` and confirm the overview band, composition list, and usage matrix all render cleanly.
- Open `executive_dashboard.html`, `investor_update.html`, and `operating_review.html`.
- Confirm each composition page includes audience/context framing and a closing rationale section.
- Confirm composition layouts remain legible on narrower viewports.

## Theme

- Toggle dark mode on the home page and at least two standalone asset pages.
- Refresh the page and confirm the chosen theme persists.
- With no saved preference, confirm the page follows system theme.
- Confirm there is no obvious flash of the wrong theme on first paint.

## Assets

- Open each standalone asset page and confirm the top-right theme toggle appears.
- Check that text is legible in both light and dark modes.
- Confirm no card is cropped vertically at common desktop widths.
- Confirm accessible summary text exists in the DOM for data-oriented assets.

## Pages Deploy

- Push changes and wait for GitHub Pages to rebuild.
- Hard refresh the live site to verify cache-busted CSS and JS are actually updating.
- If the live site looks stale, verify the version token is consistent across all HTML entrypoints.
- Confirm the live site reflects the latest composition and guide pages, not only the component library.
