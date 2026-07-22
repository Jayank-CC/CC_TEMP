---
paths:
  - "**/*.css"
---

# CSS Rules

## File responsibilities

- Keep base styles, typography, and genuinely shared components in `css/style.css`.
- Keep only genuinely shared responsive overrides in `css/responsive.css`.
- Every newly replicated inner page must use `css/pages/<page-slug>.css` for all page-only desktop and responsive rules.
- Load the page stylesheet after `style.css` and `responsive.css`, and never load unrelated page stylesheets.
- A small change to an existing shared component belongs in a shared file; page-only changes belong in the page stylesheet.

## Reuse before creation

Before adding a selector:

1. Search for an existing suitable class.
2. Reuse it when purpose, appearance, interaction, and responsive behavior match.
3. Add a modifier for a small legitimate variation.
4. Create a new selector only for a genuine difference.

Prefer reusable patterns for:

- Containers and full-width sections
- Section headings and descriptions
- Buttons and text links
- Cards and hover-lift behavior
- Grid and flex layouts
- Image/icon wrappers
- Form controls
- Statistics
- Footer headings, links, and address groups

Do not create page-prefixed duplicates of identical styles.

## Accuracy over artificial deduplication

- Do not group selectors whose rendered reference behavior differs.
- Do not force reuse when it creates fragile overrides or excessive specificity.
- Keep unique measured values section-specific.
- Do not replace precise reference values with generic spacing merely to shorten CSS.

## Custom properties

Use CSS custom properties for genuinely repeated values such as:

- Local font families
- Brand and text colors
- Shared container widths
- Common radii and shadows
- Repeated spacing values
- Transition durations and easing

Do not create variables for every one-off value.

## Layout precision

Match measured reference values for:

- Container and maximum widths
- Section height and minimum height
- Margins, padding, row gaps, and column gaps
- Grid columns and flex alignment
- Font size, weight, line height, letter spacing, and color
- Image size, crop, and position
- Borders, radii, shadows, gradients, and backgrounds

Do not assume standard container widths.
Do not add arbitrary outer margins.
Do not use an unnecessarily restrictive `max-width` on full-width headers, mega panels, backgrounds, or footers.

## Responsive behavior

- Consolidate identical breakpoint rules when components genuinely behave the same.
- Do not repeat the same override across multiple media blocks without need.
- Reproduce the reference transformation rather than making desktop content merely shrink.
- Do not hide reference-visible elements to solve layout problems.
- Prevent horizontal overflow at every required viewport.
- Verify 1920, 1440, 1366, 1280, 1024, 768, 480, 390, and 360px, plus 4K when relevant.

## Interaction and animation

- Match transition duration, easing, transform distance, shadow, border, and background changes.
- When the reference lifts a complete card, apply the transform to the complete card—not only its icon or decorative line.
- Reuse a hover-lift class only when the complete effect matches.
- Mega panels must use the reference slide-down/fade-and-slide behavior, not flip or 3D effects.
- Respect `prefers-reduced-motion` for non-essential motion.

## Fonts and assets

- Use local fonts through `@font-face`.
- Reference CSS backgrounds through correct local paths relative to the CSS file.
- Verify background element dimensions, size, position, and repeat behavior.
- Do not load production-domain fonts, icons, or images.

## Quality controls

- Avoid excessive `!important`.
- Avoid deeply nested selectors and unnecessary specificity.
- Avoid unnecessary absolute positioning.
- Remove duplicate declarations and obsolete selectors only after checking references.
- After refactoring shared CSS, visually retest every affected page and viewport.
