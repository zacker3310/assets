# CLAUDE.md — AI Assistant Guide for `assets`

## Project Overview

This repository is a collection of standalone HTML/CSS web assets designed for embedding in web pages or print/report layouts. Each component lives in its own subdirectory and is self-contained (HTML + CSS only, no JavaScript or external dependencies).

**Primary use case:** Reusable visual components for reports and web embeds, sized in physical units (inches) for precise print rendering.

---

## Repository Structure

```
assets/
├── CLAUDE.md                        # This file
├── README.md                        # Brief project description
├── pie_chart/
│   ├── pie_chart_chart.html         # Pie chart markup
│   └── pie_chart_chart.css          # Pie chart styles
└── progress_bar/
    ├── progress_bar.html            # Progress bar markup
    └── progress_bar.css             # Progress bar styles
```

Each component follows the naming convention `<component_name>/<component_name>_<variant>.html` and `<component_name>/<component_name>_<variant>.css`.

---

## Components

### Pie Chart (`pie_chart/`)

A transparent-background CSS pie chart using `conic-gradient`.

**HTML structure** (`pie_chart_chart.html`):
```html
<div class="chart-wrapper">
  <div class="pie"></div>
</div>
```
Note: the HTML file references `styles.css`, but the actual stylesheet file is named `pie_chart_chart.css`. When deploying, ensure the `<link>` href matches the actual filename.

**Key CSS dimensions:**
- `.chart-wrapper`: `2.5in × 1in`, transparent background
- `.pie`: `0.9in` diameter circle (`aspect-ratio: 1/1`, `border-radius: 50%`)

**Pie segments** (defined via `conic-gradient` in `.pie`):
| Segment | Color   | Hex       | Share |
|---------|---------|-----------|-------|
| Q1      | Green   | `#4ade80` | 40%   |
| Q2      | Blue    | `#60a5fa` | 20%   |
| Q3      | Pink    | `#f472b6` | 25%   |
| Q4      | Yellow  | `#facc15` | 15%   |

**Background:** `transparent` — suitable for overlaying on report backgrounds.

---

### Progress Bar (`progress_bar/`)

A two-tone horizontal progress bar rendered entirely in CSS using flexbox.

**HTML structure** (`progress_bar.html`):
```html
<div class="bounding-box">
  <div class="progress-bar">
    <div class="progress-left"></div>
    <div class="progress-right"></div>
    <div class="progress-gloss"></div>
  </div>
</div>
```
Note: `.progress-gloss` is present in the HTML but has no corresponding CSS rule — it is a placeholder for a future gloss/shine overlay effect.

**Key CSS dimensions:**
- `.bounding-box`: `2.025in × 0.675in`
- `.progress-bar`: `1.6875in × 0.2025in`, `border-radius: 0.0675in`, `overflow: hidden`

**Fill sections** (flexbox proportions):
| Section          | Class             | Color     | Hex       | Flex weight |
|------------------|-------------------|-----------|-----------|-------------|
| Filled (dark)    | `.progress-left`  | Dark green | `#005f40` | 75          |
| Unfilled (light) | `.progress-right` | Light green | `#00cc66` | 25          |

**Background:** `white` (`body` background) — update if transparency is needed.

---

## Conventions

### Units
All dimensions use **inches (`in`)** as the CSS unit. This is intentional for print/report accuracy. Do not convert to pixels or other units unless specifically targeting screen-only usage.

### No JavaScript
These components use **zero JavaScript**. Keep it that way. All visuals are achieved with HTML and CSS alone.

### No External Dependencies
No CDN links, no npm packages, no build tools. Files should be usable as-is by opening in a browser.

### File Naming
- Component directories: `snake_case`
- Files: `<component>_<variant>.(html|css)` — e.g., `pie_chart_chart.html`

### CSS Style Conventions
- Use comments to label every CSS block (e.g., `/* Pie chart with drop shadow */`)
- Use `box-shadow` for visual depth rather than borders
- Colors are specified as hex values
- Flexbox is the layout mechanism for both components

---

## Adding a New Component

1. Create a new directory: `<component_name>/`
2. Add `<component_name>_<variant>.html` and `<component_name>_<variant>.css`
3. Keep all dimensions in inches
4. Use transparent or white body backgrounds as appropriate
5. Document the new component in this file under the **Components** section

---

## Known Issues / Notes

- `pie_chart_chart.html` references `href="styles.css"` but the CSS file is named `pie_chart_chart.css`. The link will be broken unless corrected on deployment.
- `.progress-gloss` in `progress_bar.html` has no CSS rule — it is an unfilled placeholder.
- No `.gitignore` is present; one may be desirable if build artifacts or OS files (`.DS_Store`, `Thumbs.db`) are added.

---

## Git Workflow

- Branch naming: `claude/<description>-<id>` for AI-assisted changes
- Commits should be atomic and descriptive (one component or concern per commit)
- No CI/CD is configured; changes are reviewed manually
