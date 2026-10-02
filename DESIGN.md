---
name: Quant Terminal Precision
colors:
  surface: '#0f131c'
  surface-dim: '#0f131c'
  surface-bright: '#353942'
  surface-container-lowest: '#0a0e16'
  surface-container-low: '#181c24'
  surface-container: '#1c2028'
  surface-container-high: '#262a33'
  surface-container-highest: '#31353e'
  on-surface: '#dfe2ee'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#dfe2ee'
  inverse-on-surface: '#2c3039'
  outline: '#849495'
  outline-variant: '#3b494b'
  surface-tint: '#00dbe9'
  primary: '#dbfcff'
  on-primary: '#00363a'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#006970'
  secondary: '#89ceff'
  on-secondary: '#00344d'
  secondary-container: '#00a2e6'
  on-secondary-container: '#00344e'
  tertiary: '#d8ffe7'
  on-tertiary: '#003824'
  tertiary-container: '#65f2b5'
  on-tertiary-container: '#006d4a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#c9e6ff'
  secondary-fixed-dim: '#89ceff'
  on-secondary-fixed: '#001e2f'
  on-secondary-fixed-variant: '#004c6e'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#0f131c'
  on-background: '#dfe2ee'
  surface-variant: '#31353e'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 3.5rem
    fontWeight: '700'
    lineHeight: 4rem
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.25rem
    fontWeight: '700'
    lineHeight: 2.75rem
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 2rem
    fontWeight: '600'
    lineHeight: 2.5rem
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: 2rem
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.75rem
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 1rem
    fontWeight: '600'
    lineHeight: 1.5rem
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
  body-md:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.375rem
  body-sm:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '400'
    lineHeight: 1.125rem
  code-lg:
    fontFamily: JetBrains Mono
    fontSize: 1rem
    fontWeight: '500'
    lineHeight: 1.5rem
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 0.8125rem
    fontWeight: '500'
    lineHeight: 1.25rem
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 0.6875rem
    fontWeight: '500'
    lineHeight: 1rem
  metric-display:
    fontFamily: JetBrains Mono
    fontSize: 1.75rem
    fontWeight: '700'
    lineHeight: 2.25rem
    letterSpacing: -0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-md: 1.5rem
  gutter-lg: 2rem
  margin: 1rem
  margin-md: 2rem
  margin-lg: 3rem
  space-2xs: 0.125rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
---

## Brand & Style

This design system embodies high-frequency precision, mathematical rigor, and institutional engineering excellence. Designed for algorithmic traders, quantitative researchers, and computational engineers, the aesthetic bridges advanced analytics workstations with modern developer-centric interfaces. 

The visual theme pairs utilitarian density with refined modernism:
- **Atmosphere:** Deep, low-noise dark surfaces accented by sharp, luminescent signals that prioritize visual scanning, signal-to-noise separation, and low cognitive overhead during intensive data review.
- **Form Follows Function:** Strict adherence to data-dense modularity, eliminating decorative ornamentation in favor of sub-pixel border precision, subtle glass surfaces, and exact tabular alignments.
- **Tone:** Methodical, surgical, authoritative, and frictionless.

## Colors

The palette is engineered for prolonged operational focus in low-light environments, using luminescent data-driven accents layered over midnight slate backdrops.

- **Primary Canvas & Neutrals:**
  - Base Background: `#0B0F17` (Deep Abyssal Slate)
  - Surface Elevation 1: `#111827` (Card & Panel Charcoal)
  - Surface Elevation 2: `#1E293B` (Elevated Layers / Flyouts)
  - Subtle Dividing Line: `rgba(255, 255, 255, 0.08)`
  - Primary Text: `#F8FAFC`
  - Secondary / Demoted Text: `#94A3B8`
  - Muted Metadata Text: `#64748B`

- **Interactive & Accent Colors:**
  - Primary Accent: `#00F0FF` (Electric Cyan) — Interactive highlights, primary execution actions, active indicators, and terminal focus states.
  - Secondary Accent: `#0EA5E9` (Vivid Cobalt/Sky) — Informational status, secondary action structures, linked entities.

- **Telemetry & Quantitative Metric Signals:**
  - Positive/Alpha Signal (Gain): `#10B981` (Emerald Green)
  - Warning/Drift Signal (Neutral Risk): `#F59E0B` (Telemetry Amber)
  - Negative/Drawdown Signal (Loss): `#EF4444` (Precision Crimson)

## Typography

Typography balances clean structural legibility with absolute numerical precision.

- **Plus Jakarta Sans** powers primary and secondary headings, lending a refined, geometric authority to major page architecture and narrative sections.
- **Inter** handles high-volume analytical documentation, body descriptions, and operational instructional text with balanced humanist neutrality.
- **JetBrains Mono** governs all quantitative figures, data tables, metrics, parameter inputs, and formulas. Monospaced styling ensures vertical alignment of figures in telemetry streams, financial order books, and latency logs.
- All numerical figures must employ tabular figures (`tnum`) and slashed zeros where available to prevent jitter during real-time streaming updates.

## Layout & Spacing

The layout is built around a rigorous 4px baseline sub-grid supporting dynamic, modular density.

- **Grid Architecture:**
  - **Desktop (1200px+):** 12-column layout with 24px/32px gutters and 48px outer margins. Supports split analytical screens, multi-pane toolbars, and streaming telemetry sidebars.
  - **Tablet (768px – 1199px):** 8-column layout with 16px/24px gutters and 32px canvas margins; auxiliary terminal sidebars collapse into toggleable flyouts.
  - **Mobile (< 768px):** 4-column layout with 16px gutters and 16px margins. High-density data tables become horizontally scrollable or transform into tabular metric cards.
- **Data Densification:** 
  - Standard elements utilize `space-md` (16px) or `space-sm` (8px). 
  - Compact dashboard views, data grids, and execution logs drop to `space-xs` (4px) and `space-2xs` (2px) to maximize viewable information per pixel.

## Elevation & Depth

Visual hierarchy avoids heavy drop shadows, relying instead on translucent layering, subtle glow states, and crisp glassmorphism boundaries.

- **Base Layer (Canvas):** Solid `#0B0F17`. Non-interactive baseline surface.
- **Mid-Tier (Containers / Workstations):** Semi-opaque surfaces (`rgba(17, 24, 39, 0.75)`) utilizing a `12px` to `16px` backdrop blur (`backdrop-filter: blur(12px)`).
- **Precision Glass Borders:** Thin, crisp 1px borders constructed via `rgba(255, 255, 255, 0.08)` to clearly articulate panel boundaries without clutter. Active or hovered surfaces elevate border luminance to `rgba(0, 240, 255, 0.35)`.
- **Top Layer (Overlays / Modals):** Opaque `#1E293B` or frosted `rgba(15, 23, 42, 0.85)` with ambient cyan edge diffusion: `0 0 24px -4px rgba(0, 240, 255, 0.12)`.
- **Active Telemetry Halos:** When critical metrics alert or systems connect, a discrete 1px radial bloom (`0 0 8px rgba(0, 240, 255, 0.5)`) indicates live operational focus.

## Shapes

The system relies on compact, structured curvature (`roundedness: 1`), conveying structural integrity and industrial refinement.

- **Cards, Modals, & Panels:** Scaled to `rounded-lg` (0.5rem / 8px). Maintains crisp containment without soft visual distraction.
- **Buttons, Form Inputs, & Selectors:** Scaled to base roundedness (0.25rem / 4px). Tight corners create a technical, tactile instrument feel.
- **Telemetry Chips & Badges:** Use `rounded-sm` (0.125rem / 2px) or strict `rounded-md` (0.25rem / 4px). Full pills (`rounded-full`) are reserved exclusively for live connectivity pings and status orb indicators.

## Components

### Buttons & Interactive Controls
- **Primary Execution Button:** Solid `#00F0FF` background, `#0B0F17` bold typography, `0.25rem` radius. Subtle outer glow on hover (`0 0 12px rgba(0, 240, 255, 0.35)`).
- **Secondary / Ghost Button:** Transparent background, `1px` border of `rgba(255, 255, 255, 0.15)`, text in `#F8FAFC`. Shifts to `rgba(255, 255, 255, 0.05)` fill and `#00F0FF` border on hover.
- **Terminal Micro-Action:** Compact, mono-text button (`code-sm`), height `28px`, tight horizontal padding (`space-sm`).

### Metric Cards & Data Panels
- **Container:** Dark charcoal translucent surface (`rgba(17, 24, 39, 0.65)`), `backdrop-filter: blur(12px)`, `1px` solid `rgba(255, 255, 255, 0.07)`.
- **Header:** Label rendered in `code-sm` uppercase tracking (`#64748B`), with top-right status or trend pill.
- **Body:** Dominant metric display in `JetBrains Mono` (`metric-display`). Direct delta indicator (+12.4% / -3.2%) styled with `#10B981` or `#EF4444`.
- **Footer / Sparkline Area:** Integrated SVG canvas micro-chart directly grounded against the card base.

### Form Inputs & Parameter Sliders
- **Input Field:** `#0F172A` fill with `1px` border `rgba(255, 255, 255, 0.1)`. Monospaced text input, height `36px`, padding `0 space-sm`. Active focus transition invokes a `1px` ring in `#00F0FF` with matching subtle glow.
- **Checkboxes & Radios:** Sharp `2px` to `4px` corner geometries, `16px` dimension, deep grey fill, `#00F0FF` active tick/indicator.

### Chips, Tickers & Telemetry Tags
- **Structure:** Tight inline element, `height: 20px`, padding `2px 6px`, radius `2px`.
- **Style:** Semi-transparent background keyed to semantic context:
  - *Alpha/Long:* `rgba(16, 185, 129, 0.1)` with `#10B981` text and border.
  - *Risk/Alert:* `rgba(245, 158, 11, 0.1)` with `#F59E0B` text and border.
  - *Neutral/Ticker:* `rgba(255, 255, 255, 0.05)` with `#94A3B8` mono font.

### Specialized Quantitative Elements
- **Order Book / Level II Depth Grid:** Alternating micro-stripes with animated depth bars showing bid/ask volume, using `#10B981` (bid) and `#EF4444` (ask) at `15%` opacity.
- **Code & Formula Blocks:** Monospace block with `#070A0F` background, 1px left accent edge (`#00F0FF`), syntax highlighted with cyan, sky blue, and emerald accents.