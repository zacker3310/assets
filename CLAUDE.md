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
├── .gitignore                       # OS/editor artifact exclusions
├── pie_chart/
│   ├── pie_chart_chart.html         # Pie chart markup
│   └── pie_chart_chart.css          # Pie chart styles
├── progress_bar/
│   ├── progress_bar.html            # Progress bar markup
│   └── progress_bar.css             # Progress bar styles
└── bar_chart/
    ├── bar_chart_chart.html         # Bar chart markup
    └── bar_chart_chart.css          # Bar chart styles
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

**Key CSS dimensions:**
- `.bounding-box`: `2.025in × 0.675in`
- `.progress-bar`: `1.6875in × 0.2025in`, `border-radius: 0.0675in`, `overflow: hidden`

**Fill sections** (flexbox proportions):
| Section          | Class             | Color      | Hex       | Flex weight |
|------------------|-------------------|------------|-----------|-------------|
| Filled (dark)    | `.progress-left`  | Dark green | `#005f40` | 75          |
| Unfilled (light) | `.progress-right` | Light green | `#00cc66` | 25          |

**Gloss overlay** (`.progress-gloss`): absolutely positioned over the top 50% of the bar; `linear-gradient` from `rgba(255,255,255,0.25)` to transparent, giving a shine effect.

**Background:** `white` (`body` background) — update if transparency is needed.

---

### Bar Chart (`bar_chart/`)

A horizontal bar chart rendered in pure CSS, using per-class widths to represent data values. Shares the same color palette as the pie chart.

**HTML structure** (`bar_chart_chart.html`):
```html
<div class="chart-wrapper">
  <div class="bar-group">
    <div class="bar-track"><div class="bar bar-q1"></div></div>
    <div class="bar-track"><div class="bar bar-q2"></div></div>
    <div class="bar-track"><div class="bar bar-q3"></div></div>
    <div class="bar-track"><div class="bar bar-q4"></div></div>
  </div>
</div>
```

**Key CSS dimensions:**
- `.chart-wrapper`: `2.5in × 1.4in`, transparent background
- `.bar-group`: flex column, `0.15in` gap between rows
- `.bar-track`: `100% × 0.2in`, light gray (`#e5e7eb`) background, `border-radius: 0.04in`
- `.bar`: `height: 100%`, `border-radius: 0.04in`, width set per segment class

**Bar segments:**
| Segment | Class      | Color  | Hex       | Width |
|---------|------------|--------|-----------|-------|
| Q1      | `.bar-q1`  | Green  | `#4ade80` | 40%   |
| Q2      | `.bar-q2`  | Blue   | `#60a5fa` | 20%   |
| Q3      | `.bar-q3`  | Pink   | `#f472b6` | 25%   |
| Q4      | `.bar-q4`  | Yellow | `#facc15` | 15%   |

**Background:** `transparent` — suitable for overlaying on report backgrounds.

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
- Flexbox is the layout mechanism for all components

---

## Adding a New Component

1. Create a new directory: `<component_name>/`
2. Add `<component_name>_<variant>.html` and `<component_name>_<variant>.css`
3. Keep all dimensions in inches
4. Use transparent or white body backgrounds as appropriate
5. Document the new component in this file under the **Components** section

---

## Known Issues / Notes

No known issues. All components are functional and self-contained.

---

## Git Workflow

- Branch naming: `claude/<description>-<id>` for AI-assisted changes
- Commits should be atomic and descriptive (one component or concern per commit)
- No CI/CD is configured; changes are reviewed manually
