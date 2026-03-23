# CODEX.md

## Purpose

This file gives Codex-specific context for working in this repo.

## Repo Expectations

- The repo is a static HTML/CSS component library with a shared theme layer.
- Every page should remain directly viewable without a build step.
- `theme.css` and `theme.js` are shared dependencies for the gallery and all component pages.

## When Editing

- Prefer small, local edits to a component unless the change is intentionally global.
- If you touch shared theme behavior, verify the gallery and all standalone component pages stay aligned.
- Keep filenames and relative paths simple so GitHub Pages keeps serving them cleanly.
- Avoid adding tooling, package manifests, or framework structure unless the user explicitly asks for it.

## Docs To Keep In Sync

- `README.md`
- `CLAUDE.md`
- `AGENTS.md`
- `index.html` when components are added or removed

## Preferred Patterns

- Use CSS variables for theming and component customization.
- Keep component markup easy to paste into another project.
- Preserve the top-right theme toggle across all previewable pages.
