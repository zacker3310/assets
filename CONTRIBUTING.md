# CONTRIBUTING.md

## Purpose

This repository should be maintained like a branded component system, not an ad hoc snippet collection.

## Contribution Standard

Every meaningful change should consider these layers:

1. Visual system
2. Component behavior
3. Accessibility
4. Deployment/versioning
5. Documentation

## Required For New Components

- Add a self-contained HTML entrypoint and paired CSS file.
- Include the shared theme boot script pattern.
- Include `theme.css` and `theme.js` with the current version token from `VERSIONING.md`.
- Add visible dark/light theme support.
- Add a hidden accessible summary if the component communicates data.
- Add the component to `index.html`, `README.md`, and `CLAUDE.md`.
- Update `brand_guide.html` or `BRAND_GUIDE.md` if the change affects system guidance.

## Required For New Composition Pages

- Add the HTML page and paired CSS file.
- Explain audience, decision context, and system purpose inside the page itself.
- Add the page to `compositions.html`, `README.md`, and `USAGE.md`.
- Prefer shared theme tokens over page-local raw colors.
- Include a closing note or rationale section so the page reads as a designed artifact, not just a layout sample.

## Required For Shared Visual Changes

- Check whether `theme.css`, `TOKENS.md`, `BRAND_GUIDE.md`, and `brand_guide.html` all need updates.
- Keep version tokens aligned across all HTML entrypoints.
- Run the checklist in `QA.md`.

## Review Expectations

- Avoid one-off visual exceptions unless they are intentionally added to the system.
- Prefer reusing shared tokens before creating local colors.
- Prefer semantic clarity over abstraction that hides meaning.
- Preserve direct-open browser behavior.
- Keep the portfolio/story layer current when the repo meaningfully changes.
