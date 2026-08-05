# Project Status

## Current task

- **Reference:** https://www.cloudconverge.io/business-intelligence-services/
- **Local target:** `business-intelligence-services.html`, `css/pages/business-intelligence-services.css`
  (`bis-` prefix), `js/business-intelligence-services.js`
- **Last updated:** 2026-08-05
- **State:** Built from scratch. Content root `[data-elementor-id="28459"]`, confirmed 17 top-level
  children via `root.children.length`. **No FAQ, no pricing table, no tabs widget, and no CTA
  gradient banner on this page** (confirmed via absence of matching widgets/text) — the only
  interactive widget is the standard client-review carousel, so `js/business-intelligence-
  services.js` contains only `reviewCarousel()`, no tabs/accordion functions.
  - Theme-level `.wraper_inner_banner` is present and **visible** here (unlike
    `azure-consulting-services.html` where it was unused) — pure decorative background
    (`BI-Header-1-1-1.webp` dashboard/device illustration), no text content; its own
    `.wraper_inner_banner_breadcrumb` is `display:none`, so the VISIBLE breadcrumb is the Elementor
    one below it. Reproduced as a plain `.bis-hero` background div, measured height `380px`
    (`getBoundingClientRect`, not reverse-engineered from the theme's own padding-top/bottom
    cascade, which didn't add up cleanly against several overriding rules).
  - **Global text-transform check (lesson carried from prior pages) came back negative this
    time:** `getComputedStyle` on this reference's own h1/h2/h3 returned `text-transform:
    capitalize` (not `none`, unlike gads/aws/azure/seo/smm) — so no
    `.bis-page main :is(h1..h6){text-transform:none}` reset was added; source text was kept
    verbatim lowercase where the reference's own `textContent` is lowercase ("Other Components of
    Our BI Implementation Solutions", "Ready to Revolutionize Your Business with Business
    Intelligence?") and the existing global capitalize CSS does the visual capitalization, matching
    the `microsoft-365-consulting-services.html` convention exactly.
  - **Section order:** banner (outside Elementor root) → breadcrumb (Home / Services / Business
    Intelligence Services & Consulting) → intro (H1 `45/600/normal` centered navy + subtitle DIV
    "Power Your Business with Effective Business Intelligence Implementation Services" `20/400`
    centered navy + paragraph `16/400/26/#191919` centered, `max-width:none`) → "Why Our BI
    Implementation Services?" H2 `22/600/50` line-height (unusually large relative to its own 22px
    font-size — measured directly, not assumed) centered + **2×2 heading/paragraph grid, no icons,
    no card chrome** (Expertise / Custom Solutions in column 1, Scalability / Results-Driven in
    column 2; 20px gap between stacked items and between columns, confirmed via rect measurement,
    each column `padding:10px`) → **two 3-card image grids** (BI Strategy and Planning / Tailored BI
    Solutions / Data Visualization, then Training and Support / Performance Optimization / Data
    Integration — all `350×215` images) — confirmed via `document.styleSheets` search on the
    reference's own `data-id` that these ARE `img-box-hover-effect` cards: `border-top` 4px `#fff` →
    `var(--color-primary)` on hover + `box-shadow: var(--shadow-card)` + `translate3d(0,-5px,0)`
    lift, heading widget's own inner-section padding `30px 30px 20px`, paragraph widget-wrap padding
    `0 30px` (left/right only), image full-bleed at the bottom — exact match to the already-proven
    `microsoft-365-consulting-services.css` 3-card pattern → "Other Components of Our BI
    Implementation Solutions" H3 + **2-column 50/50 split, NOT card chrome** (confirmed 0 hover
    class on these columns): column 1 = 3 items (Security and Compliance / Cost-Effective Solutions
    / Continuous Innovation) + a chart-collage image below; column 2 = a dashboard-mockup image on
    top + 4 items (Collaborative Approach / Real-Time Analytics / User Adoption Strategies /
    Measurable ROI) + solid `#1e4ec4` button "Connect with Us" (`href="#fccu"` quote-modal anchor on
    the reference, kept as a plain `#` placeholder locally per this project's established
    "modal-trigger fragment, not a real form" convention) → **stats** (70+/100+/100%/50+,
    byte-for-byte the same reused icons/labels/paragraphs as every earlier page) — this section is
    genuinely present but rendered with `visibility:hidden` on first read on the reference due to an
    Elementor scroll-triggered entrance animation that hadn't fired yet; re-confirmed visible/normal
    after scrolling + waiting, and confirmed `img-box-hover-effect` on the stat columns via the same
    ancestor-chain check used on gads → "Why Business Intelligence?" H4 `28/600/38` centered + intro
    paragraph + **3 stacked left-aligned title/paragraph pairs, single column, no grid** (Seeing the
    Big Picture / Smart Business Decision-Making / Staying Ahead) → "Ready to Revolutionize Your
    Business with Business Intelligence?" H5 `20/600/30` centered + paragraph — confirmed **no
    button and no dark-gradient CTA background** on this page (0 `<a>` elements,
    `background-color: rgba(0,0,0,0)`), unlike every "-cta" section on gads/aws/azure → Industries
    We Serve (heading `20/400` + reused `industries-sectors.webp`) → Awards & Recognition (heading
    `20/400`, same 4 reused logos) → Client Reviews (same 6-review carousel/order as every other
    page: Tom Wyman → Richard Heller → Samuel Correns → Kabu Projects → Entrepreneur's Organization
    Gurgaon → Barry Sarnoff). **No FAQ accordion, no pricing table, no case-study tabs, and no
    stats-adjacent CTA gradient banner on this page** — confirmed by direct widget-type/text audit
    of all 17 sections, not assumed from sibling pages.
- **Assets — 9 new page-specific images, one `fetch().then(blob)` + synthetic `<a download>` per
  `javascript_exec` call (one at a time, no batching — no hang this session):** all 9 landed in the
  Windows Downloads folder first, then copied into `assets/images/` via the sandbox bash tool
  (byte-size-verified match, PIL-dimension-verified): `bis-hero-banner.webp` (17464 bytes,
  1920×350), `bis-strategy-and-planning.webp` / `bis-customized-bi-solutions.webp` /
  `bis-data-visualization.webp` / `bis-training-and-support.webp` /
  `bis-performance-optimization.webp` / `bis-data-integration.webp` (all `350×215`),
  `bis-power-bi-dashboard.jpg` (`584×403` natural, rendered ~`550×380`),
  `bis-bi-implementation.webp` (`540×288`). Reused without copying: `industries-sectors.webp`,
  `award-clutch.png`, `award-app-development.png`, `award-goodfirms.png`, `award-microsoft.webp`,
  `icon-maintenance.svg`, `icon-project-done.svg`, `icon-design-thinking.svg`,
  `webapp-custom-applications.svg`, `tom-wyman.webp`, `richard-heller.webp`, `samuel-correns.webp`,
  `kabu-projects-logo.webp`, `entrepreneurs-organization-gurgaon.webp`, `barry-sarnoff.jpg`.
- **Files changed:** `js/header.js` (desktop mega-panel line ~192 and mobile mega-panel line ~305)
  and `js/footer.js` (line ~158) had a dead `href="#business-intelligence-services"` hash anchor —
  fixed all 3 to `href="business-intelligence-services.html"`. Also fixed the identical dead anchor
  on the "Discover More" link inside the BI card on `services.html` (line ~215) — outside the
  header/footer scope named in the task brief, but the same bug class on the same page, so fixed
  for consistency.
- **Verified this session:** `node --check` passes on `js/business-intelligence-services.js`,
  `js/header.js`, `js/footer.js`; HTML tag-balance checked with a Python `HTMLParser` pass (0
  unclosed/mismatched tags). On the local build (`127.0.0.1:5500/business-intelligence-services.html`):
  header/footer inject correctly (placeholder divs fully replaced by real
  `<header id="site-header">`/`<footer class="site-footer">`), `window.initSite` defined,
  `window.__bisPageInit` true, zero console errors, all 39 network requests (html/css/js/images/
  fonts) resolve `200`, 27 `main img` elements all loaded with 0 broken (`naturalWidth===0`) after a
  real mouse-wheel scroll-through with the `computer` tool; review carousel builds correctly (10
  track children = 6 originals + 4 `aria-hidden` clones); `.bis-card:hover` rule confirmed via
  direct `document.styleSheets` inspection (`translate3d(0,-5px,0)` + `border-top-color` →
  `var(--color-primary)`), matching the reference's own measured hover. **No horizontal overflow at
  any required width** (1920/1440/1366/1280/1024/768/480/390/360), verified via the established
  same-origin `<iframe>` + `scrollWidth` technique (`resize_window` again capped at ~1685px real
  `innerWidth` in this sandbox, same documented limitation as every prior session). Grid collapse
  confirmed via iframe: 3-column card grid and 2-column why-grid both collapse to 1 column at
  ≤767px; card grid becomes 2-column at ≤991px (1024px still shows 3, correctly above that
  breakpoint).
- **NOT verified:** true visual mobile/tablet screenshots at 768px and below (same `resize_window`
  cap as every prior session — only iframe/scrollWidth checks, not an eyeballed render); synthetic
  mouse-driven `:hover` (verified instead via direct CSS-rule inspection, per this project's
  established fallback); keyboard/focus accessibility on the review carousel and the "Connect with
  Us" button; exact tablet breakpoint values for `bis-cards-grid`/`bis-why-grid`/`bis-other-grid`
  (written as reasonable 2-column/1-column approximations at ≤991px/≤767px, not CSSOM-extracted
  from the reference's own compiled tablet breakpoint, consistent with every prior page's documented
  limitation).
- **Next action:** get a real narrow-viewport screenshot (actual small browser window, not this
  sandbox's capped `resize_window`) to visually confirm the ≤767px collapse for this page, then move
  this section to "Previous completed page".

## Previous completed page

- `google-ads-services.html` (2026-08-05): 36-section page, `gads-` prefix, own hero banner + 3-column
  reasons grid + trusted-performance stats + funnel visibility + why-choose 2×2 grid + services 4×2
  grid + CTA gradient banner + industries case-study tabs (vanilla-JS) + 3×3 optimization-framework
  grid + 3 alternating pricing rows + 10-item single-open FAQ accordion + stats/industries/awards/
  reviews. Fixed 3 dead `#google-ads-services` anchors (header.js ×2, footer.js). Verified clean
  console/network, 0 broken images, no overflow at 9 widths, tab-switch and accordion tested.
