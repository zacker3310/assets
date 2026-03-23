# TOKENS.md

## Shared Token Model

The shared token layer lives in `theme.css`.

## Core Tokens

- `--theme-font-ui`
- `--theme-font-display`
- `--theme-page-bg`
- `--theme-surface`
- `--theme-surface-strong`
- `--theme-surface-muted`
- `--theme-surface-overlay`
- `--theme-border`
- `--theme-border-strong`
- `--theme-text`
- `--theme-text-muted`
- `--theme-text-soft`
- `--theme-accent`
- `--theme-accent-strong`
- `--theme-accent-soft`
- `--theme-neutral-strong`
- `--theme-neutral-muted`

## Layout And Interaction Tokens

- `--theme-shadow-xs`
- `--theme-shadow-sm`
- `--theme-shadow-md`
- `--theme-shadow-lg`
- `--theme-radius-sm`
- `--theme-radius-md`
- `--theme-radius-lg`
- `--theme-radius-pill`
- `--theme-shell-max`
- `--theme-shell-wide`
- `--theme-header-max`
- `--theme-motion-fast`
- `--theme-motion-mid`
- `--theme-ease`

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
- Premium elevated shells can derive from `--theme-surface-overlay` or `--theme-surface-strong`.
- Secondary structural fills can derive from `--theme-surface-muted`.
- Body copy should usually derive from `--theme-text` or `--theme-text-muted`.
- Quiet metadata and supporting UI copy can derive from `--theme-text-soft`.
- Highlights and metadata accents should usually derive from `--theme-accent`.
- Strong accent moments such as primary actions can derive from `--theme-accent-strong`.
- Soft pills, hover states, and emphasis surfaces should usually derive from `--theme-accent-soft`.
- Tracks, dividers, and quiet structural bars can derive from `--theme-neutral-muted`.
- Strong visual marks that still need to feel on-brand can derive from `--theme-neutral-strong`.
- Major public-facing headings should use `--theme-font-display`; UI, data labels, and components should use `--theme-font-ui`.

## Composition Guidance

- Composition pages should prefer the shared token layer over page-specific hardcoded neutrals.
- If a composition needs an additional derived value, define it locally as a semantic alias rather than a raw color.
- If the same derived value appears across multiple pages, promote it into `theme.css`.
