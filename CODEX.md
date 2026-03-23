# CODEX.md

## Repo Expectations

- Static HTML/CSS component library with a shared theme layer.
- Every page must remain directly viewable without a build step.
- `theme.css` and `theme.js` are shared dependencies for all pages.
- Zero external dependencies unless the user explicitly asks.

## When Editing

- Prefer small, local edits unless the change is intentionally global.
- If you touch shared theme behavior, verify the gallery and all component pages stay aligned.
- Keep filenames and relative paths simple for GitHub Pages.
- Cache-busting: bump `?v=YYYYMMDD[a-z]` across all HTML files when deploying CSS/JS changes.

## Docs To Keep In Sync

- `index.html` when components are added or removed
- `README.md`
- `CLAUDE.md`

## Preferred Patterns

- CSS variables for theming and component customization.
- Component markup easy to paste into another project.
- Theme toggle present on all previewable pages.
