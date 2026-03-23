# AGENTS.md

## Overview

This repository contains static, self-contained HTML/CSS assets intended for browser preview, GitHub Pages hosting, and reuse in report-like layouts.

## Shared Constraints

- No build system is required.
- No external runtime dependencies should be introduced by default.
- Every component page should stay directly openable in a browser.
- Shared light/dark mode behavior lives in `theme.css` and `theme.js`.

## Change Checklist

When making meaningful repo changes, check whether these need updates too:

- `index.html` for gallery links and discoverability
- `README.md` for public-facing documentation
- `CLAUDE.md` for Claude-specific context
- `CODEX.md` for Codex-specific context
- Shared theme files if a change should apply across the whole library

## Content Guidelines

- Prefer portable documentation with no local machine paths.
- Favor clear relative asset paths that work both locally and on GitHub Pages.
- Keep components visually intentional and consistent with the existing library style.
