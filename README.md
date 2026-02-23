# assets

A collection of standalone HTML/CSS visual components designed for embedding in web pages or print/report layouts. Each component is self-contained — no JavaScript, no external dependencies, no build tools required.

---

## Overview

These assets are built for precision. All dimensions use CSS inch units (`in`) to ensure accurate rendering in print contexts (PDFs, reports, embedded iframes). Open any `.html` file directly in a browser to preview it.

---

## Repository Structure

```
assets/
├── README.md
├── CLAUDE.md
├── pie_chart/
│   ├── pie_chart_chart.html
│   └── pie_chart_chart.css
└── progress_bar/
    ├── progress_bar.html
    └── progress_bar.css
```

---

## Components

### Pie Chart (`pie_chart/`)

A circular pie chart with a transparent background, rendered entirely with CSS `conic-gradient`.

**Files:**
- `pie_chart_chart.html` — markup
- `pie_chart_chart.css` — styles

**Dimensions:**
| Element          | Size                  |
|------------------|-----------------------|
| `.chart-wrapper` | `2.5in × 1in`         |
| `.pie`           | `0.9in` diameter      |

**Segments:**
| Segment | Color  | Hex       | Share |
|---------|--------|-----------|-------|
| Q1      | Green  | `#4ade80` | 40%   |
| Q2      | Blue   | `#60a5fa` | 20%   |
| Q3      | Pink   | `#f472b6` | 25%   |
| Q4      | Yellow | `#facc15` | 15%   |

**Background:** `transparent` — safe to overlay on any report background.

> **Note:** `pie_chart_chart.html` references `href="styles.css"` but the stylesheet is named `pie_chart_chart.css`. Update the `<link>` tag to match when deploying.

---

### Progress Bar (`progress_bar/`)

A horizontal two-tone progress bar using CSS flexbox with rounded corners and a subtle drop shadow.

**Files:**
- `progress_bar.html` — markup
- `progress_bar.css` — styles

**Dimensions:**
| Element          | Size                      |
|------------------|---------------------------|
| `.bounding-box`  | `2.025in × 0.675in`       |
| `.progress-bar`  | `1.6875in × 0.2025in`     |
| Border radius    | `0.0675in`                |

**Fill sections:**
| Section  | Class             | Color       | Hex       | Flex weight |
|----------|-------------------|-------------|-----------|-------------|
| Filled   | `.progress-left`  | Dark green  | `#005f40` | 75          |
| Unfilled | `.progress-right` | Light green | `#00cc66` | 25          |

**Background:** `white` — update `body { background-color }` in the CSS if transparency is needed.

> **Note:** `.progress-gloss` is present in the HTML as a placeholder for a future gloss/shine overlay. It has no CSS rule yet.

---

## Usage

Each component is fully self-contained. To use one:

1. Copy the component's directory into your project.
2. Embed the HTML via an `<iframe>` or copy the markup directly into your page.
3. Adjust dimensions, colors, or flex weights in the CSS to match your design.

No npm install, no build step, no internet connection required.

---

## Design Conventions

| Convention         | Detail                                              |
|--------------------|-----------------------------------------------------|
| **Units**          | All dimensions in CSS inches (`in`) for print accuracy |
| **JavaScript**     | None — visuals are pure HTML + CSS                  |
| **Dependencies**   | None — no CDN links or external resources           |
| **Layout**         | Flexbox throughout                                  |
| **Colors**         | Hex values only                                     |
| **Depth**          | `box-shadow` instead of borders                     |
| **File naming**    | `<component>_<variant>.(html\|css)`                 |

---

## Adding a New Component

1. Create a directory: `<component_name>/`
2. Add `<component_name>_<variant>.html` and `<component_name>_<variant>.css`
3. Keep all dimensions in inches
4. Use `transparent` or `white` body backgrounds as appropriate
5. Document it in `CLAUDE.md` and add a section to this README

---

## Known Issues

- `pie_chart_chart.html` links to `styles.css` but the file is `pie_chart_chart.css` — the link will 404 unless corrected.
- `.progress-gloss` in `progress_bar.html` is an unstyled placeholder with no CSS rule.
- No `.gitignore` is present — one may be useful to exclude OS files like `.DS_Store` or `Thumbs.db`.
