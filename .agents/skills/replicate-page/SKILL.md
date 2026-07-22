---
name: replicate-page
description: Audit a supplied reference webpage and create or correct its pixel-accurate local replica using this repository's existing HTML, CSS, vanilla JavaScript, shared header/footer partials, reusable classes, and local assets.
argument-hint: "[reference-url] [optional-local-page]"
disable-model-invocation: true
---

# Replicate Reference Page

## Task input

The arguments are:

```text
$ARGUMENTS
```

The first argument must be the reference webpage URL. A second argument may specify the local target HTML file.

If no valid reference URL was supplied, stop and return this usage example:

```text
/replicate-page https://www.example.com/about-us/ about-us.html
```

Do not ask for clarification when the target can be determined from the repository and URL.

## Critical priorities

Apply these priorities in order:

1. Rendered visual similarity to the reference
2. Correct responsive behavior
3. Correct interactions and functionality
4. Preservation of the existing shared architecture
5. Local, independent assets
6. Meaningful class and component reuse
7. Performance and accessibility
8. Code cleanliness

Do not improve, modernize, simplify, or reinterpret the design.

## Architecture lock

Before editing, confirm and preserve:

- Shared header markup in `js/header.js`
- Shared footer markup in `js/footer.js`
- Partial injection through `js/include.js`
- Shared interaction initialization through `window.initSite` in `js/script.js`
- Shared styling in `css/style.css`
- Shared responsive overrides in `css/responsive.css`
- One dedicated stylesheet for every newly replicated inner page at `css/pages/<page-slug>.css`
- Local assets under `assets/`

Never:

- Create fetched `header.html` or `footer.html` partials
- Use `fetch()` for the shared header or footer
- Duplicate full header/footer markup inside a page
- Create page-specific header/footer copies
- Replace `window.__PARTIALS`
- Initialize shared interactions before injection
- Use React, Vue, Angular, Bootstrap, Tailwind, jQuery, or another frontend framework

## Phase 1 — Resolve the local target

1. Parse the reference URL from `$ARGUMENTS`.
2. Use the optional second argument as the target when supplied.
3. For a homepage reference, use `index.html` unless the repository clearly uses another convention.
4. For an inner page, follow the existing repository convention.
5. If no inner-page convention exists, create a root-level file using the URL slug, such as `about-us.html`.
6. Record the reference URL and target in `PROJECT_STATUS.md`.

## Phase 2 — Read current project state

Read before editing:

- `CLAUDE.md`
- `PROJECT_STATUS.md`
- The target HTML file, if it exists
- `css/style.css`
- `css/responsive.css`
- The target page stylesheet under `css/pages/`, when it exists
- `js/header.js`
- `js/footer.js`
- `js/include.js`
- `js/script.js`
- Relevant existing assets

Inventory:

- Existing reusable classes
- Existing reusable JavaScript functions
- Existing shared page sections
- Existing local assets
- Current visual and functional problems

Do not rebuild accurate existing areas.

## Phase 3 — Audit the complete reference

Inspect the rendered reference from top to bottom, including when present:

1. Announcement bars
2. Header and logo
3. Desktop navigation
4. Dropdowns and mega panels
5. Header CTA
6. Mobile navigation
7. Hero section and hero media
8. Content and service sections
9. Cards and statistics
10. Industry/client logos
11. Project or portfolio cards
12. Testimonials
13. Engagement models
14. Sliders, tabs, accordions, or carousels
15. Contact or CTA section
16. Forms
17. Footer
18. Floating controls
19. Decorative elements
20. Hover, scroll, and entrance animations

Inspect computed rendering rather than guessing conventional values.

Record confirmed measurements and behavior in `PROJECT_STATUS.md`, including:

- Section order
- Container widths
- Header dimensions and padding
- Mega-panel width and alignment
- Hero content gaps
- Heading line breaks
- Font sizes, weights, line heights, and colors
- Image dimensions and crop
- Card gaps and hover transforms
- Footer padding, columns, colors, and spacing
- Responsive transformations

## Phase 4 — Screenshot baseline

Capture or inspect reference screenshots at matching viewports:

- 1920px
- 1440px
- 1366px
- 1280px
- 1024px
- 768px
- 480px
- 390px
- 360px

Inspect a 4K viewport when wide-screen alignment differs.

Capture the current local page at the same widths before major corrections when possible. Compare matching scroll positions.

## Phase 5 — Asset audit

Before adding an asset:

1. Search `assets/images`, `assets/icons`, `assets/fonts`, and `assets/videos`.
2. Reuse the exact existing local asset when available.
3. Add a new local asset only when genuinely missing.
4. Use a descriptive, case-safe filename.
5. Avoid duplicate copies of the same asset.

Every runtime image, icon, font, video, and CSS background must be local.

Search source files for unintended remote dependencies, including:

- Reference-domain asset URLs
- Production CDN URLs
- Remote font URLs
- Remote icon-library URLs
- CSS `url(...)` values
- HTML `src` and `srcset` values

Keep external URLs only when intentionally used as clickable navigation links.

Do not use placeholders, random substitutes, screenshots as page sections, or hidden broken elements.

## Phase 6 — Reusable implementation architecture

Before creating a class or function:

1. Search for an existing suitable implementation.
2. Reuse it when purpose, visuals, interactions, and responsive behavior match.
3. Extend it with a modifier when only a small variation is required.
4. Create a new class or function only for a genuine difference.

Prefer meaningful reusable patterns for:

- Containers
- Section headers
- Buttons
- Discover links
- Cards
- Hover-lift effects
- Grid/flex layouts
- Image and icon wrappers
- Form fields
- Statistics
- Footer links and address groups
- Dropdown and mobile-menu behavior

Do not force unrelated elements to share classes when that requires fragile overrides or reduces accuracy.

Consolidate:

- Identical declarations
- Repeated responsive rules
- Repeated event-handling logic
- Duplicate assets

Use CSS custom properties for repeated design values. Keep precisely measured one-off values section-specific.

## Phase 7 — HTML implementation

- Use semantic HTML.
- Preserve the shared header and footer placeholders.
- Include every visible reference section and the same visible text hierarchy.
- Match heading line breaks intentionally.
- Use reusable classes rather than duplicated page-specific styles.
- Add meaningful image `alt` text.
- Add explicit image `width` and `height`.
- Do not lazy-load above-the-fold hero/LCP media.
- Use `fetchpriority="high"` for the primary LCP `<img>` when appropriate.
- Lazy-load suitable below-the-fold images.
- Avoid unnecessary inline styles.
- Keep controls keyboard accessible.

## Phase 8 — CSS implementation

- For every new inner page, create `css/pages/<page-slug>.css` and keep all page-only desktop and responsive rules there.
- Load that stylesheet after `css/style.css` and `css/responsive.css` only on its matching HTML page.
- Do not place new page-only selectors in either shared stylesheet and do not load unrelated page stylesheets.

Match the reference exactly for:

- Font family, size, weight, line height, letter spacing, and color
- Heading width and line wrapping
- Section order, height, margins, padding, and gaps
- Container and maximum widths
- Grid and flex alignment
- Image dimensions, crop, and position
- Borders, radii, shadows, gradients, and backgrounds
- Buttons and text-link hover states
- Header, mega panels, mobile navigation, and footer
- Card transforms and transitions

Do not assume common container widths. Measure the reference.

Do not add arbitrary margins or restrictive max-widths.

Do not fix mobile layouts by hiding reference-visible content.

Ensure no horizontal overflow at any required viewport.

## Phase 9 — JavaScript implementation

Use only vanilla JavaScript.

- Keep shared initialization inside `window.initSite`.
- Initialize after `include.js` injects the partials.
- Make initialization idempotent.
- Avoid duplicate listeners and timers.
- Reuse shared functions for repeated interactions.
- Keep visible controls functional.
- Match reference dropdown, mega-menu, mobile-menu, carousel, slider, tab, accordion, counter, sticky-header, and form behavior.
- Do not animate a statistic when the reference value is static.
- Do not add interactions absent from the reference.

## Phase 10 — CloudConverge regression checklist

When the reference belongs to CloudConverge, inspect these recurring issues when the corresponding element exists:

### Header and mega panels

- Remove unnecessary outer margins.
- Correct overly restrictive max-widths.
- Match reference horizontal padding.
- Check wide desktop and 4K alignment.
- Use slide-down/fade-and-slide-down behavior rather than flip or 3D animation.
- Reuse the same structural classes for About, Services, and Products mega panels when their designs match.
- Match the actual mobile header instead of a generic mobile menu.

### Hero

- Match heading-to-description, description-to-CTA, button-to-button, and content-to-media gaps separately.
- Match heading width and line breaks.

### Industry/client logos

- Correct oversized logos.
- Match width, height, opacity, alignment, and grid gaps.

### Full-card hover effects

For service, scalability, or Engagement Models cards:

- Animate the complete card, not only the icon or decorative line.
- Match upward translation, duration, easing, shadow, border, and background change.
- Reuse a shared hover-lift class only when the effects genuinely match.

### Recent Projects

- Match section and card gaps.
- Include the reference Discover More control.
- Keep the full control clickable.
- When required, animate the underline only beneath `Discover`, not beneath `More`.

### Statistics

- Keep values such as `70+` static when the reference does not run a counter.

### Footer

- Match full-width behavior and actual top/bottom padding.
- Match Products-to-Company spacing.
- Include the divider above Follow Us when present.
- Match icon-to-text gaps.
- Match each text color individually.
- Keep description and office-address text white when shown white.
- Keep phone and email grey when shown grey.
- Match Delhi/Noida and USA/India address-group spacing.
- Match tablet and mobile stacking.

## Phase 11 — Visual QA loop

For every required viewport:

1. Capture or inspect the reference screenshot.
2. Capture the local screenshot at the identical width and scroll position.
3. Compare section by section.
4. Correct visible differences.
5. Capture again.
6. Repeat until remaining differences are minor and documented.

Pay special attention to:

- Container edges
- Header padding and alignment
- Mega-panel position
- Hero gaps
- Section spacing
- Font size, weight, line height, and alignment
- Image scale and crop
- Card gaps
- Footer columns and padding
- Mobile navigation

Do not declare completion based only on source inspection.

## Phase 12 — Technical QA

Inspect browser Console and Network results.

Resolve:

- JavaScript errors
- Broken partial injection
- Duplicate initialization
- CSS errors
- Image, SVG, and font 404s
- Invalid relative paths
- CORS or MIME errors caused by local implementation
- Failed media requests
- Horizontal overflow
- Broken buttons, links, menus, forms, sliders, or carousels

Search for production-domain runtime assets and remove them.

Confirm the page works through a simple local static server and, where supported by the architecture, when opened directly from disk.

## Phase 13 — Reuse and cleanup audit

Only after visual accuracy:

- Consolidate safe duplicate CSS.
- Consolidate identical responsive rules.
- Remove unused selectors and JavaScript.
- Remove temporary debugging output.
- Remove temporary screenshots from production directories.
- Confirm refactoring did not alter another page or shared component.
- Repeat a final visual spot-check after cleanup.

## Phase 14 — Update project handoff

Update `PROJECT_STATUS.md` with:

- Reference URL
- Local target
- Current/final phase
- Exact files modified
- Components, classes, functions, and assets reused
- New reusable patterns introduced
- Important measured values
- Viewports actually tested
- Functional QA status
- Console and Network status
- Remaining differences and exact technical reasons
- One exact next action

Do this before compaction or ending the session.

## Completion response

Provide:

1. Files created or modified
2. Sections implemented or corrected
3. Shared header/footer reuse confirmation
4. Existing classes/assets/functions reused
5. New reusable patterns created
6. Asset paths corrected and new local assets added
7. Responsive viewport results
8. Functional test results
9. Console and Network results
10. Confirmation that runtime visual assets are local
11. Confirmation that no framework was used
12. Remaining differences with exact technical reasons

Do not claim pixel-perfect completion unless rendered comparisons were completed across desktop, tablet, and mobile.
