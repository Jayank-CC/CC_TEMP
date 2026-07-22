# CloudConverge — Homepage Replica

A pixel-accurate static replica of the CloudConverge homepage
(reference: https://www.cloudconverge.io/), built with **HTML5, CSS3 and vanilla
JavaScript only** — no frameworks, no CSS libraries, no page builders, no build
step.

## Running locally

Option 1 — open directly:

```
open index.html   (double-click works too)
```

Option 2 — simple static server (recommended, matches production behaviour):

```
cd cloudconverge-replica
python -m http.server 8437
# then open http://localhost:8437/
```

## Project structure

```
cloudconverge-replica/
├── index.html            Homepage content (hero → stats) + partial placeholders
├── header.html           Shared header partial (nav, mega menus, mobile menu)
├── footer.html           Shared footer partial (contact form, columns, bottom bar)
├── css/
│   ├── style.css         Base + desktop styles, organised by page section
│   └── responsive.css    Breakpoints: 1366 / 1280 / 1024 / 767 / 480 / 390 / 360
├── js/
│   ├── script.js         All interactions (vanilla JS), exposed as window.initSite
│   └── include.js        Fetches header.html/footer.html, then runs initSite()
├── assets/
│   ├── images/           All photos, logos, banners, AVIF/WebP/PNG
│   ├── icons/            SVG icons used by the page
│   └── fonts/            DM Sans (variable) + Poppins 400/600, self-hosted woff2
└── README.md
```

Note: because the header/footer are loaded with `fetch()`, the site must be
served over HTTP (see the static-server command above) — opening `index.html`
directly from the filesystem will not load the partials.

## Implemented sections (in order)

1. Transparent header with sticky (white) state, dropdown chevrons, CTA
2. Mega menus: About (intro + 3 cards), Services (5 hover tabs, each with
   service links + 2 case-study cards), Products (intro + links + 2 cards)
3. Hero with typing animation, overlay, ISO/partner strip
4. "Powering Progress" intro strip
5. Four service cards (AI/ML, Cloud Migration, Ecommerce, Web & Mobile)
6. "How do we differentiate" — dark section, 6 icon boxes
7. "Our recent projects" — 4 case-study cards with gradient hover reveal
8. "Industry giants trust us" — 12-logo grid + View More
9. Case-study background slider (3 slides, synced captions, 5 s interval)
10. Engagement models — 4 cards + copy + CTA
11. Stats strip with animated counters (70+ / 100% / 100+)
12. Footer contact section (contact info + validated demo form)
13. Main footer (4 columns: brand/partners, services, products/company, contact)
14. Bottom bar (copyright + legal links)

## Interactions (vanilla JS)

- Hero typing loop (70 ms type / 20 ms back / 2 s hold — same as reference)
- Sticky header on scroll (logo + link colour swap)
- Hover mega menus with keyboard (Enter/Space/Escape) support
- Services mega-menu tab switching (hover/click/focus)
- Off-canvas mobile menu with nested accordions and Escape support
- Background slideshow + caption carousel, synchronised, 5 s per slide
- Count-up counters on scroll into view
- Scroll-reveal for cards
- Client-side form validation with demo success message (no backend)
- All animations respect `prefers-reduced-motion`

## Notes

- Every asset is stored locally; nothing is hotlinked from the production
  site. The only `cloudconverge.io` strings in the source are the visible
  `mailto:info@cloudconverge.io` contact links (page content, as on the
  original).
- Navigation links point to in-page anchors (`#...`) because only the homepage
  exists in this static replica.
- Fonts are the same families the site loads from Google Fonts (DM Sans,
  Poppins), self-hosted as woff2 with system-font fallbacks.
- The reference's contact form posts to WPForms; here submission is prevented
  and a clean demo success message is shown after client-side validation.
