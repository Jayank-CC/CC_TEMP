---
paths:
  - "**/*.html"
---

# HTML Rules

## Shared structure

- Keep page-specific content in the HTML file.
- Reuse the shared header and footer through these placeholders:

```html
<div id="site-header-placeholder"></div>
<main><!-- page content --></main>
<div id="site-footer-placeholder"></div>
```

- Never duplicate the complete header or footer markup inside page HTML.
- Never create fetched `header.html` or `footer.html` partials.
- Preserve the dependent script order: `header.js`, `footer.js`, `script.js`, then `include.js`.
- Use `defer`, not `async`, for these dependent scripts.
- Adjust relative paths only according to the repository’s page-location convention.
- Every newly replicated inner page must load `css/style.css`, `css/responsive.css`, then exactly one `css/pages/<page-slug>.css` stylesheet.

## Reuse

- Search existing markup and classes before creating a new component structure.
- Reuse shared section-header, button, card, grid, link, image-wrapper, statistic, and form patterns when their reference behavior matches.
- Use base classes plus modifiers instead of duplicating identical page-specific classes.
- Do not force unrelated elements into a shared class when it creates overrides or visual inaccuracies.

## Semantics and accessibility

- Use semantic landmarks and elements where they do not alter the visual result.
- Maintain a logical heading hierarchy.
- Use `<button>` for actions and `<a>` for navigation.
- Preserve keyboard access and visible focus behavior.
- Add form labels and appropriate attributes.
- Use ARIA only where native HTML is insufficient.

## Images and media

- Use local relative asset paths.
- Add meaningful `alt` text.
- Add explicit `width` and `height` attributes.
- Preserve aspect ratio and reference crop.
- Do not lazy-load the primary above-the-fold/LCP image.
- Use `fetchpriority="high"` for the primary LCP `<img>` when appropriate.
- Lazy-load suitable below-the-fold images.
- Do not use placeholders or remote production images.

## Content accuracy

- Preserve the reference section order and visible text.
- Match capitalization, punctuation, labels, button text, and intentional heading line breaks.
- Do not replace difficult sections with screenshots, Canvas, iframes, or large embedded SVG replicas.
- Do not remove elements merely because their assets or interactions require additional work.

## Clean markup

- Avoid unnecessary wrapper elements.
- Avoid inline styles unless a genuinely dynamic value requires one.
- Avoid duplicated IDs.
- Use stable, meaningful class names.
- Remove obsolete markup only after confirming it is unused and visually retesting the page.
