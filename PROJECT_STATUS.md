# Project Status

## Current task

- **Reference:** https://www.cloudconverge.io/ai-and-ml-development-services/
- **Local target:** `ai-and-ml-development-services.html`, `css/pages/ai-and-ml-development-services.css`
  (`aiml-` prefix), `js/ai-and-ml-development-services.js`
- **Last updated:** 2026-08-06
- **State:** Built from scratch. Content root `[data-elementor-id="30013"]`, 19 top-level children
  (indices 0-18), all audited individually via `textContent`/DOM-structure dumps (lesson 12 —
  concatenated ground truth per section before writing HTML). **No tabs, no accordion, no pricing
  table, no CTA gradient banner on this page** — only interactive widget is the standard client-
  review carousel (10 track children = 6 originals + 4 clones, matches `bis-`/`gads-` pattern
  exactly), so `js/ai-and-ml-development-services.js` contains only `reviewCarousel()`.
  - Theme-level `.wraper_inner_banner` present and visible (height 380px, background
    `AI-1-2.webp`), its own `.wraper_inner_banner_breadcrumb` is `display:none` — same pattern as
    `business-intelligence-services.html`. Visible breadcrumb is the Elementor icon-list widget
    below (Home / Services / AI/ML Development Services).
  - **Section order:** hero → breadcrumb → intro (H1 `45/600/normal` centered navy "AI/ML
    Development Services" + subtitle DIV `20/400/normal`, **`text-transform:none` explicitly
    measured** despite global capitalize default + 2 paragraphs `16/400/26` centered,
    `max-width:none`) → standalone left-aligned H2 "Artificial Intelligence A Modern Approach
    Solutions" `40/600/50`, own inner wrap measured `max-width:1030px` centered inside the 1140px
    container (rect-measured: heading left edge 55px inset from container edge on both sides) →
    2-col 50/50 text (4 paragraphs) + brain illustration image (confirmed `move-image-left-right`
    hover class → `translate3d(-10px,0,0)` on hover, image `540×461`) → **3-col × 2-row plain
    heading/paragraph grid, no icons, no card chrome** (Smart Business Insights / Picture
    Understanding / Chatbot Building / Smart Learning / Natural Language Understanding / Voice
    Assistant — all headings measured `18/400/left`, **confirmed `text-transform:none` on these
    item headings despite bold visual appearance**, lesson 1 applied) → "AI/ML Development
    Process" H2 `28/600/38` centered + intro paragraph → **two 3-card image grids** (Getting
    Started / Understanding Data / Preparing Data and Selecting Functions, then Building the Model
    / Checking the Model / Deploying the Model — all `350×215` images) — confirmed
    `img-box-hover-effect` via ancestor-chain walk + **live `:hover` simulation** (not just rule
    inspection): `border-top-color` → `rgb(30,78,196)` (`var(--color-primary)`) +
    `transform: translate3d(0,-5px,0)` simultaneously, heading inner-section padding exactly
    `30px 30px 20px`, paragraph widget-wrap padding exactly `0 30px` — byte-for-byte match to the
    proven `business-intelligence-services.css` 3-card pattern → **stats** (70+/100+/100%/50+,
    same reused icons/labels/paragraphs as every earlier page) → "Empower Your Business with
    Machine Learning" H2 `32/600/42` centered + paragraph → **2-col × 3-row plain grid, NOT card
    chrome** (col1: Anticipating the Future / Enhancing How Things Get Done / Smart Marketing;
    col2: Applying Deep Learning / Custom Machine Learning Software / Enhanced CRM Solution — all
    headings `18/400/left` measured `text-transform:none`; columns measured 0 gap/0 padding,
    widths sum exactly to the 1140px container). **Confirmed genuine source content duplication**
    (not a scraping artifact): the "Enhanced CRM Solution" paragraph ends with a near-repeat of the
    "Smart Marketing" sentence verbatim on the live reference — kept as-is per verbatim-reproduction
    rule → Industries We Serve (H2 `20/400` — **confirmed fw:400 not 600 on this page**, reused
    `industries-sectors.webp`) → Awards & Recognition (H2 `20/400`, same 4 reused logos) → Client
    Reviews (H2 `26/400`, same 6-review carousel/order as every other page, full concatenated text
    diffed against `business-intelligence-services.html`'s reviews and confirmed identical).
- **Assets — 8 new page-specific images**, one `fetch().then(blob)` + synthetic `<a download>` per
  `javascript_exec` call (one at a time, no batching, no hang): landed in Windows Downloads first,
  then copied into `assets/images/` via the sandbox bash tool (both `Downloads` and
  `cloudconverge-replica` are mounted in the same sandbox this session, so `cp` worked directly —
  no manual step needed), byte-size + PIL-dimension verified: `aiml-hero-banner.webp` (19938 bytes,
  1920×350), `aiml-brain-illustration.webp` (15030 bytes, 540×461), `aiml-getting-started.webp` /
  `aiml-understanding-data.webp` / `aiml-preparing-data.webp` / `aiml-building-the-model.webp` /
  `aiml-checking-the-model.webp` / `aiml-deploying-the-model.webp` (all `350×215`). Reused without
  copying: `industries-sectors.webp`, `award-clutch.png`, `award-app-development.png`,
  `award-goodfirms.png`, `award-microsoft.webp`, `icon-maintenance.svg`, `icon-project-done.svg`,
  `icon-design-thinking.svg`, `webapp-custom-applications.svg`, `tom-wyman.webp`,
  `richard-heller.webp`, `samuel-correns.webp`, `kabu-projects-logo.webp`,
  `entrepreneurs-organization-gurgaon.webp`, `barry-sarnoff.jpg`.
- **Files changed:** `js/header.js` (desktop mega-panel AI/ML tab link + mobile mega-panel AI/ML
  submenu link) and `js/footer.js` (AI/ML footer link) had a dead `href="#ai-and-ml-development-
  services"` hash anchor — fixed all 3 to `href="ai-and-ml-development-services.html"`. Also fixed
  the identical dead anchor on the "AI/ML Product Development" card's "Discover More" link on
  `services.html` (line ~223), and on the homepage `index.html` services grid card (line ~71) — both
  outside the header/footer scope named in the task brief, but the same bug class pointing at this
  exact page, fixed for consistency (same pattern as the BI card fix on the prior page).
- **Verified this session:** `node --check` passes on `js/ai-and-ml-development-services.js`,
  `js/header.js`, `js/footer.js`; HTML tag-balance checked with a Python `HTMLParser` pass (0
  unclosed/mismatched tags) on `ai-and-ml-development-services.html`. Served via the **existing
  VS Code Live Server already running on the user's machine at `127.0.0.1:5500`** (confirmed
  reachable directly from the real Chrome browser — no server needed to be started). On the local
  build: header/footer inject correctly (`#site-header`/`footer.site-footer` present),
  `window.initSite` defined, `window.__aimlPageInit` true, only 1 console message total (a browser-
  extension port-disconnect warning, unrelated to the page — 0 page-originated errors), all 26
  initial network requests (html/css/js/icons/fonts/images) resolve `200`, 26 `main img` elements
  all loaded with 0 broken (`naturalWidth===0`) after scrolling the full page with the `computer`
  tool; review carousel builds correctly (10 track children = 6 originals + 4 `aria-hidden`
  clones) and auto-advanced during the session. `.aiml-card:hover` rule confirmed both via direct
  `document.styleSheets` inspection and a live simulated `:hover` on the reference itself before
  writing CSS. Mega-menu AI/ML tab opens correctly and its link now resolves to the real page
  (verified via `.click()` + href check). **No horizontal overflow at any required width**
  (1920/1440/1366/1280/1024/768/480/390/360), verified via the same-origin `<iframe>` +
  `scrollWidth` technique (`resize_window` again capped at ~1685px real `innerWidth` in this
  sandbox, same documented limitation as every prior session). Grid collapse confirmed via iframe
  at 1200/992/768/500px: `.aiml-cards-grid` and `.aiml-features-grid` go 3→2→1 columns at the
  991/767 breakpoints; `.aiml-other-grid` and `.aiml-ml-grid` go 2→1 at the 991 breakpoint.
- **NOT verified:** true visual mobile/tablet screenshots at 768px and below (same `resize_window`
  cap as every prior session — only iframe/scrollWidth + computed-grid-column checks, not an
  eyeballed narrow render); synthetic mouse-driven `:hover` on the local build itself (verified
  instead via direct CSS-rule inspection plus a live hover simulation against the *reference*,
  per this project's established fallback); keyboard/focus accessibility on the review carousel;
  exact tablet breakpoint values for `aiml-cards-grid`/`aiml-features-grid`/`aiml-other-grid`
  (written as reasonable 2-column/1-column approximations at ≤991px/≤767px, not CSSOM-extracted
  from the reference's own compiled tablet breakpoint, consistent with every prior page).
- **Next action:** get a real narrow-viewport screenshot (actual small browser window, not this
  sandbox's capped `resize_window`) to visually confirm the ≤767px collapse for this page, then
  move this section to "Previous completed page".

## Previous completed page

- `business-intelligence-services.html` (2026-08-05): 17-section page, `bis-` prefix, hero banner +
  2×2 why-grid + two 3-card image grids + 2-column "other components" split with CTA button + stats
  + 3-item stacked "why BI" section (no CTA button/gradient on this page) + industries/awards/
  reviews. Fixed 3 dead `#business-intelligence-services` anchors (header.js ×2, footer.js) plus a
  matching dead anchor on `services.html`. Verified clean console/network, 0 broken images, no
  overflow at 9 widths.
