---
paths:
  - "assets/**/*"
  - "**/*.{html,css,js}"
---

# Asset Rules

## Local-only runtime assets

Every runtime visual or media dependency must be stored locally under:

- `assets/images/`
- `assets/icons/`
- `assets/fonts/`
- `assets/videos/`

Do not hotlink:

- Reference-domain images
- Production WordPress uploads
- Production CDN assets
- Remote fonts
- Remote icon libraries
- Remote CSS or JavaScript

External URLs may remain only when intentionally used as clickable links.

## Reuse before download

Before adding a file:

1. Search all existing asset folders.
2. Reuse the exact local asset when available.
3. Confirm filename case and extension.
4. Add a new asset only when genuinely missing.
5. Do not create duplicate files with alternate names unless the source files are genuinely different.

## Fidelity

- Use the exact reference asset when legally and technically available for replication.
- Do not use placeholders, random alternatives, emoji replacements, or screenshots of complete page sections.
- Preserve quality, aspect ratio, transparency, crop, and intended desktop/mobile variants.
- Optimize without visible quality loss.
- Use descriptive, case-safe filenames.

## HTML images

- Use correct local relative paths.
- Add explicit `width` and `height`.
- Add meaningful `alt` text.
- Preserve aspect ratio.
- Match `object-fit` and `object-position` to the reference.
- Do not lazy-load the hero/LCP image.
- Use `fetchpriority="high"` for the primary LCP `<img>` when appropriate.
- Lazy-load suitable below-the-fold images.

## CSS backgrounds

- Resolve paths relative to the CSS file.
- Confirm the file exists.
- Confirm the target element has the required dimensions.
- Match `background-size`, `background-position`, and `background-repeat`.

## Validation

Search source files for:

- `http://`
- `https://`
- The reference production domain
- CSS `url(...)`
- HTML `src`, `srcset`, and preload references

Review every match and remove unintended runtime dependencies.

Before completion, verify through the browser Network panel:

- No image 404s
- No SVG 404s
- No font 404s
- No media failures
- No incorrect MIME types
- No unintended production-domain asset requests
