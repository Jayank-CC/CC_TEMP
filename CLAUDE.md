# CloudConverge Static Replica — Project Instructions

## Project goal

Build and maintain pixel-accurate replicas of supplied reference pages using the existing static project. Preserve the reference design, content hierarchy, responsive behavior, interactions, and animations. This is replication, not redesign.

## Source of truth

- The rendered reference page is the visual and functional source of truth.
- The existing repository is the architectural source of truth.
- Preserve working code and correct sections. Modify only what comparison proves is inaccurate or missing.
- Do not claim pixel-perfect completion without rendered screenshot comparison.

## Existing architecture — do not replace

- `index.html` and additional page HTML files contain page-specific content.
- `js/header.js` contains the reusable shared header markup.
- `js/footer.js` contains the reusable shared footer markup.
- `js/include.js` injects the shared partials without `fetch()`.
- `js/script.js` defines shared interactions through `window.initSite`.
- `css/style.css` contains base and shared component styling.
- `css/responsive.css` contains shared responsive overrides.
- Every newly replicated inner page must have its own stylesheet under `css/pages/<page-slug>.css`, loaded after both shared stylesheets.
- Local assets live under `assets/images`, `assets/icons`, `assets/fonts`, and `assets/videos`.

Pages must contain these placeholders:

```html
<div id="site-header-placeholder"></div>
<main><!-- page-specific content --></main>
<div id="site-footer-placeholder"></div>
```

Preserve this dependent script order:

```html
<script defer src="js/header.js"></script>
<script defer src="js/footer.js"></script>
<script defer src="js/script.js"></script>
<script defer src="js/include.js"></script>
```

Adjust relative paths for nested pages only when the existing page convention requires it. Never use `async` for these dependent files.

## Shared component rules

- Reuse `js/header.js`, `js/footer.js`, and `js/include.js` on every page.
- Never duplicate complete header or footer markup inside page HTML.
- Never create page-specific header or footer copies.
- Never replace the partial system with fetched HTML components.
- Shared behavior must initialize after injection through `window.initSite`.
- Make initialization idempotent so repeated calls do not duplicate listeners, timers, counters, or carousel instances.
- Before changing shared header/footer code, check the effect on existing pages.

## Technology restrictions

Use only:

- Semantic HTML5
- CSS3
- Vanilla JavaScript
- Local images, icons, fonts, and videos

Do not use React, Vue, Angular, Next.js, Bootstrap, Tailwind, jQuery, page builders, CSS frameworks, UI libraries, iframes, remote page embeds, Canvas page replicas, or screenshot-based sections.

## CSS reuse and optimization

- Do not add new page-only selectors to `css/style.css` or `css/responsive.css`.
- Put both desktop and responsive rules for a new page in its dedicated `css/pages/<page-slug>.css` file.
- Load only the current page's dedicated stylesheet; never load another page's CSS.
- Search existing classes before creating a class.
- Reuse a class only when elements share a meaningful visual, structural, interactive, and responsive pattern.
- Prefer base classes plus modifiers for buttons, cards, grids, headings, links, and hover behavior.
- Consolidate identical declarations and repeated media-query rules.
- Use CSS custom properties for genuinely repeated design values.
- Keep unique measured values section-specific when reuse would reduce accuracy.
- Avoid unnecessary inline styles, excessive specificity, deep nesting, and excessive `!important`.
- Remove obsolete selectors only after checking all references and visually retesting affected pages.
- Optimization must never reduce pixel accuracy.

## Asset rules

- Search existing local assets before adding a new file.
- Do not create duplicate copies of an existing asset.
- Every runtime image, icon, font, background, and video must be local.
- Do not hotlink assets from the reference domain or its production CDN.
- External URLs are permitted only when intentionally used as clickable links.
- Do not use placeholders, random substitutes, or hidden broken elements.
- Hero/LCP media must not be lazy-loaded; use explicit dimensions and `fetchpriority="high"` when appropriate.
- Below-the-fold media may use lazy loading when it matches the reference behavior.

## Page file convention

- For a homepage reference, work in `index.html`.
- For an inner page, follow the repository’s existing naming convention.
- If no inner-page convention exists, create a root-level file using the URL slug, such as `about-us.html`.
- Reuse shared CSS, JavaScript, header, footer, and existing assets rather than duplicating them. Add one dedicated stylesheet for every newly replicated inner page.

## Required working method

For every page replication task:

1. Read `PROJECT_STATUS.md` and update stale task information.
2. Inspect the existing project before editing.
3. Audit the complete reference from header through footer.
4. Inventory reusable local classes, components, functions, and assets.
5. Implement incrementally instead of rebuilding correct areas.
6. Compare reference and local screenshots at matching viewport sizes.
7. Inspect browser Console and Network results.
8. Test interactions, responsive behavior, and horizontal overflow.
9. Perform a reuse and dead-code audit after visual accuracy is achieved.
10. Update `PROJECT_STATUS.md` before ending, compacting, or switching sessions.

## Required viewport checks

Test at least:

- 1920px
- 1440px
- 1366px
- 1280px
- 1024px
- 768px
- 480px
- 390px
- 360px

Also inspect a 4K width when wide-screen alignment differs from the reference.

## Visual quality rules

Compare exact:

- Section order and visible text
- Heading line breaks
- Font family, size, weight, line height, and color
- Container widths, max-widths, margins, padding, and gaps
- Image dimensions, crop, position, and opacity
- Borders, radii, shadows, gradients, and decorative elements
- Header, mega-menu, mobile navigation, contact section, and footer
- Hover states, transitions, sliders, carousels, counters, and card animations

Do not assume conventional container widths. Measure the rendered reference.

## Status-file discipline

- Treat `PROJECT_STATUS.md` as the cross-session handoff.
- Keep it concise and current; replace stale details instead of appending an endless diary.
- Record exact files changed, measured values, completed viewports, remaining differences, and the next action.
- Do not mark a viewport passed unless it was rendered and compared.

## Context discipline

- Keep the main conversation focused on the current page and phase.
- Use focused exploration or subagents for verbose audits when available, and return only concise findings.
- Avoid pasting full source files or huge command logs into chat when direct file tools are available.
- Before context compaction, update `PROJECT_STATUS.md`.
- Start a fresh session for a new page after the current page is stable and documented.

## Compact instructions

When compacting, preserve:

- Current reference URL and local target page
- Existing shared partial architecture
- Completed work and exact files modified
- Measurements and design decisions taken from the reference
- Reusable classes/components/assets selected
- Viewports tested and their status
- Console/Network findings
- Remaining visual or functional differences
- Exact next action from `PROJECT_STATUS.md`

## Completion standard

Do not report completion until:

- The full rendered page was compared at desktop, tablet, and mobile sizes.
- All required local assets load successfully.
- No relevant Console or Network errors remain.
- Shared header/footer injection and `window.initSite` work.
- Visible interactions work.
- No horizontal overflow remains.
- No production asset is hotlinked.
- Reuse/refactoring did not break another page.
- `PROJECT_STATUS.md` reflects the final state and honestly lists remaining differences.
