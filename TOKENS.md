# TOKENS.md

## Shared Token Model

The shared token layer lives in `theme.css`.

## Core Tokens

- `--theme-page-bg`
- `--theme-surface`
- `--theme-surface-strong`
- `--theme-surface-muted`
- `--theme-border`
- `--theme-text`
- `--theme-text-muted`
- `--theme-accent`
- `--theme-accent-soft`
- `--theme-neutral-strong`
- `--theme-neutral-muted`

## Theme Toggle Tokens

- `--theme-toggle-bg`
- `--theme-toggle-border`
- `--theme-toggle-shadow`
- `--theme-toggle-ink`
- `--theme-toggle-muted`
- `--theme-track-bg`
- `--theme-knob-bg`
- `--theme-focus`

## Usage Rules

- Prefer referencing shared tokens before introducing component-local color values.
- Use component-local tokens only when a component truly needs a derived value.
- If a local token becomes common across multiple components, promote it into `theme.css`.
- Avoid adding alternate accent families unless the brand system explicitly expands.

## Practical Guidance

- Backgrounds should usually derive from `--theme-page-bg` or `--theme-surface`.
- Secondary structural fills can derive from `--theme-surface-muted`.
- Body copy should usually derive from `--theme-text` or `--theme-text-muted`.
- Highlights and metadata accents should usually derive from `--theme-accent`.
- Soft pills, hover states, and emphasis surfaces should usually derive from `--theme-accent-soft`.
- Tracks, dividers, and quiet structural bars can derive from `--theme-neutral-muted`.
- Strong visual marks that still need to feel on-brand can derive from `--theme-neutral-strong`.

## Composition Guidance

- Composition pages should prefer the shared token layer over page-specific hardcoded neutrals.
- If a composition needs an additional derived value, define it locally as a semantic alias rather than a raw color.
- If the same derived value appears across multiple pages, promote it into `theme.css`.
