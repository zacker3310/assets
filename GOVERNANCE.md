# GOVERNANCE.md

## Goal

This repo should be suitable for enterprise brand stewardship: predictable, reviewable, and easy to audit.

## Decision Rules

- Shared token changes affect the whole system and should be treated as system-level decisions.
- Component-local changes should not silently redefine the brand language.
- Accessibility regressions should block visual changes.
- Deployment reliability is part of quality, not post-work cleanup.

## Change Categories

### System Change

- Changes to `theme.css`
- Changes to theme behavior in `theme.js`
- Changes to shared docs such as `BRAND_GUIDE.md`, `TOKENS.md`, `VERSIONING.md`, `QA.md`

### Component Change

- Changes isolated to a specific component folder
- Copy, structure, or layout changes that do not alter shared brand tokens

### Release Change

- Any change that requires a version-token bump for deployed CSS or JS

### Showcase Change

- Changes to `index.html`, `compositions.html`, `brand_guide.html`, or composition pages that affect how the system is presented to stakeholders or reviewers

## Approval Checklist

- Is the change consistent with the brand principles?
- Does it keep or improve accessibility?
- Does it preserve direct-open preview behavior?
- Are docs and guide pages updated?
- Are cache/version rules followed?
- Does the change strengthen or weaken the repo’s credibility as a governed enterprise system?
