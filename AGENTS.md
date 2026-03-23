# AGENTS.md

## Overview

Static, self-contained HTML/CSS component library for reporting. Browser preview, GitHub Pages hosting, no build step.

## Constraints

- No build system. No external dependencies.
- Every component page must open directly in a browser.
- Shared theme: `theme.css` and `theme.js`.
- Cache-busting: `?v=YYYYMMDD[a-z]` on all CSS/JS references, bumped across all HTML files together.

## Change Checklist

When making meaningful changes, check whether these need updates:

- `index.html` for gallery links
- `README.md` for public docs
- `CLAUDE.md` for AI context

## Content Guidelines

- No local machine paths in documentation.
- Clear relative asset paths that work locally and on GitHub Pages.
- Keep components consistent with existing library style.
