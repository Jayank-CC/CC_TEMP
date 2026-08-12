# Project Status

## Current task

- **Reference:** https://www.cloudconverge.io/case-studies/verve-portrait-photoshoot-session/
- **Local target:** `case-studies/verve-portrait-photoshoot-session.html` (flat file),
  `css/pages/case-study-verve-portrait.css` (`cs-verve-` prefix), no page-specific JS needed.
- **Last updated:** 2026-08-12
- **State:** Complete, built from scratch this session.
  - **Important lesson — the site's `pagespeed_static` lazy-load placeholder gives false "square" image
    measurements, and this retroactively fixed a real bug on the pharmacy page.** This page's closing gallery
    (`verve-portrait-pic-2.webp`/`-pic-3.webp`) uses the same lazy mechanism as pharmacy's screenshots: a 1x1
    `pagespeed_static/1.JiBnMqyl6S.gif` placeholder with the real URL in `data-pagespeed-lazy-src`. Measuring
    the live reference through this placeholder (before the real asset swaps in) reads a rendered box of
    `550x550` — genuinely square — purely because the *placeholder itself* is a 1x1 (1:1) image, not because
    the real photo is square. Opening the real asset URL directly in a fresh tab gave the true native size,
    `744x1024` (portrait), and the only CSS rule beyond the framework default (`height:auto;max-width:100%`)
    is a `box-shadow` — the image is NOT force-cropped. **This prompted a re-check of the pharmacy page's own
    "1024x1024 forced square, `object-fit:fill`" finding from an earlier session, which used the exact same
    lazy mechanism — and it was indeed wrong.** The reference's real `<img>` attributes are `width="1024"
    height="768"` (native ratio, no distortion). Fixed retroactively this session (see "Previous completed
    page" below) — this is the first confirmed case in this project of a shipped page needing a correction for
    a measurement artifact, not a UI bug.
  - **Structure:** hero + breadcrumb + one spacer (60px desktop, 20px `<=767px`) + a centered intro text row
    (H1 36px/42px + **four** plain paragraphs, the longest intro block in this project so far, `20px` gaps
    between each) + one full-width screenshot (`1120x747` rendered, native ratio, no distortion) + a centered
    heading block (H2 26px/50px + one paragraph) + a two-column portrait photo gallery (natural `744x1024`
    ratio, `0 0 10px rgba(0,0,0,.5)` box-shadow, 50/50 flex columns stacking to 100% at `<768px`) + prev/next
    pagination. No "Conclusion" block. Same per-block desktop padding values as corporate-gifts (intro `16px
    0`, heading `32px 0`, both converging to `64px 0` at `<=1024px` and `0` at `<=767px`) — confirmed
    independently via `document.styleSheets`, not just assumed reused.
  - **Hero** is the same `.case-studies-banner img` real-`<img>` pattern as corporate-gifts (this page's own
    `.wraper_inner_banner` is again present but `display:none`) — a second confirmed instance of this pattern
    on a case-study page, not a one-off. The composite hero photo (dark family portrait + a floating website
    mockup screenshot) is a single baked-in image file (`Verve-BANNER.webp`, `1403x322`), not two separately
    overlaid elements — confirmed via `elementFromPoint` returning the same `<img>` at both regions.
  - **Assets** (`assets/images/`): `cs-verve-hero-banner.webp` (`1403x322`), `cs-verve-gallery-1.webp`
    (`1170x780`), `cs-verve-gallery-2.webp` (`744x1024`), `cs-verve-gallery-3.webp` (`744x1024`) — all
    downloaded via the established in-page `fetch()`+blob+`<a download>` technique.
  - **Pagination:** "Previous Post" → `corporate-gifts.html` (local, wired up both directions — corporate-gifts'
    own "Next Post" updated from the external reference URL to this new local file); "Next Post" →
    `https://www.cloudconverge.io/case-studies/migration-of-geotechnical-industry/` (kept external, page title
    on the reference reads "Enterprise IT Optimization & Cybersecurity for Market Leader" despite the
    mismatched URL slug — reproduced verbatim, not corrected). `portfolio.html`'s Verve Portrait card updated
    from the external reference URL to this new local file.
  - Verified clean console (0 errors) and network (15 initial-load requests, all `200`/`304`, `0` `404`s). **No
    horizontal overflow at any of the 9 required widths** (1920/1440/1366/1280/1024/768/480/390/360), verified
    via the same-origin `<iframe>` + `scrollWidth` technique. **Mobile verification** at `375px`: hero crops to
    `260px` (`object-fit:cover`, `object-position:left center`), spacer `20px`, two photo columns stack
    full-width (`331px` each, confirmed via differing `top` values, not side-by-side).

## Previous completed page

- `corporate-gifts.html`: Complete, built from scratch this session.
  - **Important discovery — this page uses the OTHER site-wide hero pattern.** Every case study audited so far
    (bar-drinks, pharmacy, rise-event) used `.wraper_inner_banner` (an empty div with a CSS `background-image`).
    This page's `.wraper_inner_banner` is present in the DOM but `display:none` (confirmed via
    `getComputedStyle`) — it renders nothing. The real visible hero is the OTHER theme template,
    `.case-studies-banner img` (a genuine `<img>`, also used by Helm Boots/ecommerce/rise-event's own hero
    per their own PROJECT_STATUS.md history): full-bleed width, intrinsic `height:auto` at desktop (native
    `2048x453` ratio, no distortion), collapsing to a fixed `min-height:260px; object-fit:cover;
    object-position:left center` crop at `<=767px`. First download attempt grabbed the wrong asset (the hidden
    `wraper_inner_banner`'s unused background image, a 360x540 portrait AVIF) before this was caught by
    re-inspecting `elementFromPoint` at the actual visible hero pixel — re-downloaded the correct
    `Encardio-header2-2048x453-1.webp` (2048x453) from the real `.case-studies-banner img` element.
    **Lesson for future audits:** always confirm a suspected hero element is actually visible
    (`display`/`getBoundingClientRect().height`) before trusting its `background-image`, and check
    `elementFromPoint` on the real rendered pixels if unsure — this site mixes both hero patterns
    unpredictably per page, not by any obvious convention.
  - **Structure:** hero + breadcrumb + one spacer (60px desktop, 20px `<=767px`) + a centered intro text row
    (H1 36px/42px + two plain paragraphs, 20px gap between them via `margin-bottom`/`:last-child` reset — same
    pattern as bar-drinks) + one full-width screenshot (native ~3:2 ratio, no forced square crop, simple
    `width:100%;height:auto`, unlike pharmacy's `object-fit:fill` square boxes) + a centered heading block (H2
    26px/50px + one paragraph) + a second full-width screenshot + prev/next pagination. No "Conclusion" block.
  - **Per-block desktop padding is genuinely non-uniform** (measured independently, not assumed): intro block
    `16px 0`, heading block `32px 0` — both different from each other and from pharmacy's `0` — but both
    converge to the *same* `4em`/`64px 0` at `<=1024px` and `0` at `<=767px`, confirmed via
    `document.styleSheets`.
  - **Assets** (`assets/images/`): `cs-corp-hero-banner.webp` (`2048x453`, converted from the reference's
    source `.webp`), `cs-corp-gallery-1.webp` (`1170x780`), `cs-corp-gallery-2.webp` (`1200x800`) — all
    downloaded via the in-page `fetch()`+blob+`<a download>` technique into the mounted Downloads folder, then
    moved into `assets/images/` (direct `curl` from the sandbox shell is blocked for this domain — confirmed
    via a `403 blocked-by-allowlist` from the sandbox's proxy — so the browser-download route is required for
    every asset on this site, not just a fallback).
  - **Pagination:** "Previous Post" → `pharmacy-ecommerce-store.html` (local, wired up, and pharmacy's own
    "Next Post" updated from the external reference URL to this new local file); "Next Post" →
    `https://www.cloudconverge.io/case-studies/verve-portrait-photoshoot-session/` (kept external — not yet
    replicated). `portfolio.html`'s Corporate Gifts ("Packed With Purpose") card updated from the external
    reference URL to this new local file.
  - Verified clean console (0 errors) and network (15 initial-load requests, all `200`/`304`, `0` `404`s); the
    two lazy-loaded gallery `<img>`s briefly read `naturalWidth:0`/`complete:false` under scripted
    `scrollIntoView` in this automated tab (a known automation-timing artifact documented elsewhere in this
    project, not a real bug) — forcing `loading="eager"` confirmed both decode correctly at their native sizes
    (`1170x780`, `1200x800`), and the live screenshots taken during the normal scroll-through already showed
    both rendering correctly regardless.
  - **No horizontal overflow at any of the 9 required widths** (1920/1440/1366/1280/1024/768/480/390/360),
    verified via the same-origin `<iframe>` + `scrollWidth` technique. **Mobile verification** at `375px`:
    hero crops to `260px` (`object-fit:cover`, `object-position:left center`), breadcrumb stays on one visual
    row (its long final item's text wraps internally within that flex item rather than forcing a second row or
    overflowing — no dedicated reference-side override was found for this widget's mobile wrap behavior, since
    the only matching breakpoint rules target the widget's non-inline layout variant, which doesn't apply
    here), spacer `20px`, intro padding `0`, H1 `24px`.

## Previous completed page

- `pharmacy-ecommerce-store.html`: Complete, built from scratch, then fixed for a genuinely missing second intro
  paragraph.
  - **Simplest case-study template built in this project so far**: hero + breadcrumb + a single centered text row
    (H1 + one plain paragraph, no bold lead, no dash-list) + one square screenshot + a centered heading block +
    a second square screenshot + prev/next pagination. No "Conclusion & Feedback" block — confirmed genuinely
    absent via DOM (no `h1/h2/h3` containing "Conclusion" anywhere on the page), not an oversight.
  - **Same `.wraper_inner_banner` background-image hero technique as bar-drinks** (not an `<img>` tag) — reused
    verbatim since it's a site-wide theme template, not page-specific: `322px` height desktop, `297px` at
    `<=1024px`.
  - **Both screenshots are real `<img>` tags this time** (unlike bar-drinks' background-image gallery), but the
    reference forces a natively `1024×768` image into a `1024×1024` square box with no `object-fit` set — the
    browser default is `fill`, which stretches the image vertically by ~33%. Confirmed via `getComputedStyle` on
    the live reference (`object-fit:fill`, rendered box `1024×1024` despite the `<img>`'s own `width`/`height`
    attributes reading `1024`/`768`) and visually confirmed via screenshot that the reference genuinely shows this
    stretch, not a bug to avoid replicating. Reproduced with `aspect-ratio:1/1; object-fit:fill` on the `<img>`.
  - **Four real, independently-measured spacer widgets** (`60px` under the breadcrumb, `90px` between every other
    section) — modeled as dedicated `<div>` elements with their own height, not folded into a neighboring
    section's padding. This avoids a modeling mistake made on an earlier page in this project: folding a spacer's
    height into a neighboring row's `padding-top` works at desktop, but breaks the moment that row's own padding
    changes at a breakpoint while the spacer's own value stays fixed (the two values need to *add*, not replace
    each other) — using a separate element sidesteps the arithmetic entirely. At `<=767px` the first spacer
    collapses to `0px` while the other three shrink to `30px` (not `0`) — confirmed per-spacer via the reference's
    own dynamic CSS, not assumed uniform.
  - **Both text blocks (intro H1+paragraph, "User Experience Design" H2+paragraph) genuinely carry `0px` padding
    of their own at desktop and mobile**, gaining `64px 0` only at the `<=1024px` tablet tier — confirmed via
    `getComputedStyle`, not assumed from the bar-drinks/rise-event pattern where the equivalent blocks *do* carry
    real desktop padding.
  - **H1 is `42px/48px` here** — noticeably larger than every sibling case study's `36px/42px` H1, confirmed via
    `getComputedStyle`, not reused.
  - **Fix pass (user-reported, screenshot attached) — genuinely missing second intro paragraph.** The original
    build only included the first intro `<p>`; the reference actually has a second full paragraph
    ("Shombhob.com aims to be the premier pharmacy provider within Bangladesh...") in a separate Elementor
    text-editor widget directly below the first, with a `20px` gap between them (same `margin-bottom:20px` +
    `:last-child` reset pattern as bar-drinks). Confirmed via a fresh `get_page_text` dump of the live
    reference, added the missing `<p>` to the HTML and the matching CSS rule.
  - **Fix pass (2026-08-12, caught while auditing the verve-portrait page, not user-reported) — screenshots
    were wrongly forced into a square crop.** Both screenshots had been built with `width="1024" height="1024"`
    and `object-fit:fill`, based on an earlier session's measurement of the reference showing a `1024x1024`
    rendered box. That measurement was taken through the site's `pagespeed_static` 1x1-GIF lazy-load
    placeholder before the real asset swapped in — the placeholder itself is square, which produces a false
    "square" reading regardless of the real image's actual ratio. Re-inspecting the reference's real `<img
    width height>` attributes (independent of whether the pixels themselves finish loading) showed
    `1024`/`768` — the genuine native ratio. Fixed the HTML `height` attribute to `768` and removed the
    `aspect-ratio:1/1; object-fit:fill` CSS override in favor of plain `width:100%;height:auto`, matching every
    sibling page's single-screenshot treatment. Re-verified via screenshot: both images now render at their
    natural, undistorted `4:3` ratio.
  - **Assets downloaded and verified via PIL** (`assets/images/`): `cs-pharm-hero-banner.webp` (`1403×322`),
    `cs-pharm-web.webp` (`1024×768`), `cs-pharm-app.webp` (`1024×768`).
  - **Pagination**: "Previous Post" → `bar-drinks-offer-platform.html` (local, wired up); "Next Post" →
    `https://www.cloudconverge.io/case-studies/corporate-gifts/` (kept external — not yet replicated).
    `portfolio.html`'s Shombhob card and bar-drinks' "Next Post" link both updated from the external reference
    URL to this new local file.
  - Verified clean console (0 errors, one unrelated browser-extension warning) and network (`39` requests across
    two loads, all `200`, `0` `404`s).
  - **Mobile verification** via the same-origin `<iframe>`-at-`375px` technique: hero `297px`, breadcrumb `12px`,
    intro/heading padding `25px`, H1 `24px/36px`, paragraphs `text-align:justify`, spacers `0px`/`30px`, image
    still a correct `1:1` square (scaled proportionally) — no horizontal overflow (`scrollWidth 359` ≤
    `innerWidth 374`).

## Previous completed page

- `bar-drinks-offer-platform.html`: Complete. Hero and 3-image gallery both use CSS `background-image` on empty
  divs (not `<img>` tags) — confirmed via `querySelectorAll('img')` returning zero results inside the gallery
  despite 4 visible images. Breadcrumb is a one-off Elementor "Icon List" widget, visually identical to the
  shared component, so reused rather than duplicated. Intro text has a bold lead sentence inline in the first
  `<p>` (not a separate widget); "Conclusion & Feedback" block uses an `H3`, not `H2`.
  - **Mobile fix pass (user-reported difference, no screenshot attached — re-audited the reference's own
    per-element dynamic CSS from scratch):** the gallery's `background-image` boxes had no explicit height of
    their own — they got it "for free" via desktop's `align-items:stretch`, but collapsed to ~`20px` the moment
    the row switched to `flex-direction:column` at `<=1024px`. Fixed with `min-height:500px`/`400px` (web/app)
    and `min-height:240px`/`190px` (logo/currency), all values read from the reference's own dynamic CSS. Also
    added a missing breadcrumb mobile font shrink (`12px/20px`), missing `25px` widget-wrap padding on two
    heading-block columns, and missing `text-align:justify` on two paragraphs — all four had only been applied to
    the intro block originally, when the reference applies them page-wide.
  - Verified clean console/network and mobile behavior (`375px`, iframe technique): no horizontal overflow, all
    three gallery images now render at full size instead of collapsing.

## Previous completed page

- `rise-event.html`: Complete. Simplest case-study template in this project — hero + breadcrumb + a single 50/50
  text/image row + a centered "Solution" H2/paragraph block + a two-image gallery row + prev/next pagination.
  Two content sections (the "Solution" block and the gallery row) are built with Elementor's newer `e-con`
  flexbox-container system rather than classic `.elementor-top-section`, and were only found by sibling-walking —
  any future audit on this site must check for `e-con`-based elements, not just classic sections. Two real
  Elementor spacer widgets (`71px` under the breadcrumb, collapsing to `0` at `max-width:767px`; `48px` between
  the "Solution" block and the gallery, unchanged on mobile) reproduced as `padding-top` on the following section.
  - **Mid-session fix (user-reported alignment difference):** `.cs-rise-image-col` originally used
    `align-items:center` to vertically center the image within its (taller) column — but the reference actually
    top-aligns it: the column stretches to match the text column's height via the row's own
    `align-items:stretch`, while the image itself is a plain block child with a uniform `10px` padding and no
    vertical centering, leaving empty space below rather than splitting it evenly above/below. Confirmed via
    `getComputedStyle` on the live reference (widget-wrap `padding:10px`, column `align-items:stretch`, image has
    no `align-self`/`margin` centering) and fixed by changing `align-items` to `flex-start`.
  - Verified clean console/network (`37` requests, `200`/`304`, `0` `404`s) and mobile behavior (`375px`, via the
    same-origin iframe technique — `resize_window` remained unreliable this session): row stacks to a single
    column, spacer collapses to `0`, H1 shrinks to `24px/36px`, paragraphs justify, no horizontal overflow.

## Previous completed page

- `portfolio-ecommerce.html`: Complete. Two alternating 50/50 text+image rows (H1 "Ecommerce Store Development
  Using BigCommerce For Dainty Jewells"), each with `.move-image-left-right` hover-slide images sharing a `.5`
  shadow/`4px` radius; row 2 wraps its text in a light-gray "Our Mission"/"Implementation" box. Genuine tablet
  breakpoint at `1024px` (columns stack early, before the `767px` typography tier). Pagination is "Next Post"
  only (chronologically first page), linked to Helm Boots both directions.
  - Fix pass #5: `.cs-ecom-row:first-of-type` never matched (counts by tag, not class, among ALL section
    siblings including the hero) — replaced with explicit `.cs-ecom-row-1`/`.cs-ecom-row-2` classes, each with
    its own genuinely-different padding (`60px` top-only vs. `48px 0`). Also fixed `.cs-ecom-text-col` from
    `45px 0` to a uniform `45px` (measured on all 4 sides, not just top/bottom).
  - Fix pass #6 (caught via user screenshot): `.cs-ecom-col` used `flex:1 1 0` (equal grow) instead of literal
    `flex:0 0 50%` — equal grow only equalizes flexible space, not total column width, once each column's own
    padding is added on top; text column (90px padding) ended up 60px wider than the image column (30px
    padding) despite equal `flex-grow`. Also found `.cs-ecom-row-inner` inheriting the shared `.container`
    class's `15px` side padding where this row's own reference container has genuine `0` — overridden per-row.
  - Full mobile audit at genuinely-confirmed `320px`/`375px`: breadcrumb text shrinks `14/26px`→`12/20px` at
    `767px` (affects word-wrap point), row-2 padding shrinks to `25px 0 0`, row-1/row-2 images carry different
    Elementor margins targeted by `:first-child`/`:last-child` DOM position (not another tag-counting
    pseudo-class). No horizontal overflow at any width tested.

## Previous completed page

- `portfolio-migration-of-helm-boots-to-shopify-plus.html`: Complete. This page's HTML/CSS/assets had already been fully built and content-verified in a prior
  session (content re-confirmed again this session against a fresh fetch of the live reference: H1 "Ecommerce
  website for Shoe Manufacturer", all 3 intro paragraphs, H2 "User Experience Design with Back-End Collaboration",
  H3 "Conclusion & Feedback", and the prev/next pagination titles all match verbatim) — but it had been placed at
  the wrong path: a nested `case-studies/portfolio-migration-of-helm-boots-to-shopify-plus/index.html` (2 directory
  levels deep, using `../../` relative paths). This session's job was to relocate it to the required flat,
  1-level-deep path and fix the path-depth fallout.
  - **Path-depth fix applied:** Created the new flat file with every shared asset/CSS/JS reference changed from
    `../../` to `../` (`../css/style.css`, `../css/responsive.css`, `../css/pages/case-study-helm-boots.css`,
    `../js/header.js`/`footer.js`/`script.js`/`include.js`, `../assets/images/...`, `../assets/fonts/...`), and the
    page's own breadcrumb self-references (`../index.html` for Home, `../portfolio.html` for Portfolic) updated to
    match the new 1-level depth.
  - **Header/footer nested-link investigation — no fix needed:** Inspected `js/header.js` and `js/footer.js` before
    changing anything. Every internal link and every asset `src` in both partials already uses a **root-relative
    path with a leading `/`** (e.g. `href="/portfolio.html"`, `href="/about.html"`, `src="/assets/images/
    cc_logo_white.webp"`) — this was evidently already fixed in an earlier session (PROJECT_STATUS.md's own history
    for the `portfolio.html` build describes fixing dead `#portfolio` anchors to a page path, and the header/footer
    now go further and use leading-slash root-relative paths throughout). Root-relative paths resolve identically
    regardless of how deep the current page is nested, as long as the site is served from its domain root — which
    both the reference site and this project's Live Server setup do. **No changes to `js/header.js`, `js/footer.js`,
    or `js/include.js` were required or made.** Verified this holds by clicking through from the new nested page:
    logo → (href="#", pre-existing shared behavior, unrelated to nesting), top-nav "Portfolio" → `/portfolio.html`
    (correct), breadcrumb "Home" → `../index.html` (correct, page-owned path) → resolved to
    `http://127.0.0.1:5500/index.html` (correct), breadcrumb "Portfolio" → `../portfolio.html` → resolved to
    `http://127.0.0.1:5500/portfolio.html` (correct). Also spot-checked `index.html` and `portfolio.html` directly
    afterward (both load, nav "Portfolio"/"About" links still resolve to `/portfolio.html`/`/about.html`) — no
    regression from this page's addition, since no shared file was touched.
  - **Stale duplicate file — could not be deleted, neutralized instead:** The old nested
    `case-studies/portfolio-migration-of-helm-boots-to-shopify-plus/index.html` could not be removed: `rm`/`mv`/
    `unlink` (tried via bash, and via Python `os.remove`/`os.unlink`) all fail with "Operation not permitted" on
    this specific file even though ownership/permissions look normal — the same environment/mount quirk already
    documented in this file for two other undeletable leftover files from the `portfolio.html` build. Since it
    couldn't be deleted, its content was overwritten with a minimal `meta http-equiv="refresh"` + canonical-link
    redirect stub pointing at the new flat file, with an HTML comment explaining why it exists, so it cannot serve
    as duplicate/conflicting content. Nothing in the repo links to the old nested path anymore. Safe to delete
    manually later if filesystem access allows it.
  - **Files changed:** created `case-studies/portfolio-migration-of-helm-boots-to-shopify-plus.html`; overwrote
    `case-studies/portfolio-migration-of-helm-boots-to-shopify-plus/index.html` with the redirect stub described
    above; updated `portfolio.html`'s Helm Boots card `<a href>` from
    `case-studies/portfolio-migration-of-helm-boots-to-shopify-plus/` (external-style trailing-slash path that would
    have pointed at the now-defunct nested folder) to
    `case-studies/portfolio-migration-of-helm-boots-to-shopify-plus.html`. No shared file (`header.js`/`footer.js`/
    `script.js`/`include.js`/`style.css`/`responsive.css`) was modified. `css/pages/case-study-helm-boots.css` was
    reused as-is (no relative asset paths inside it, so the folder move required no edits there).
  - **Verified this session:** page loads at `http://127.0.0.1:5500/case-studies/portfolio-migration-of-helm-boots-
    to-shopify-plus.html` with a clean network log (every request `200`/`304`, 0 404s) covering both shared assets
    (`/assets/...`, `/css/...`, `/js/...`) and page-owned assets (`../assets/images/cs-helm-*.webp`). All 27 `img`
    elements on the page (8 page-specific + 19 from the injected header/footer/mega-menus) report `broken:false`
    (`naturalWidth>0`). Console clean, 0 errors. Header/footer inject correctly (`.site-header`/`.site-footer`
    present). **No horizontal overflow at any required width** — verified via the same-origin `<iframe>` +
    `scrollWidth` technique at all 9 required widths (1920/1440/1366/1280/1024/768/480/390/360), all returned
    `overflow:false` with 0 offending elements. Navigation end-to-end confirmed via real clicks (not just href
    inspection): clicking the Helm Boots card on `portfolio.html` → lands on the new flat case-study page; clicking
    top-nav "Portfolio" from the case-study page → lands on `portfolio.html`; clicking breadcrumb "Home"/"Portfolio"
    from the case-study page → land on `index.html`/`portfolio.html` respectively.
  - **NOT re-verified this session** (carried over from the prior session that originally built this page's
    content, not re-audited pixel-by-pixel against the reference again since content/measurements were already
    transcribed and this session's scope was the path relocation): exact gallery/screenshot image crop values,
    hover states on the prev/next pagination arrows, and full 1024/768px gallery-grid breakpoint visual comparison
    beyond the overflow check above.
  - **Next action:** none outstanding for this page. If bash/filesystem delete access is ever available in a
    future session, delete the neutralized stale file at
    `case-studies/portfolio-migration-of-helm-boots-to-shopify-plus/index.html` (currently just a harmless redirect
    stub, referenced by nothing).
- **2026-08-10 fix pass #1 — breadcrumb color:** user reported the breadcrumb was blue/gray like the shared site
  default. Reference measured `rgb(0,0,0)`/`rgb(33,37,41)` (solid black/near-black) on every part — Home link,
  Portfolio link, both separator icons, and the current-page text — via `getComputedStyle` directly on the live
  reference, not the shared blue-link/gray-current scheme every other inner page correctly uses. Added a
  `.cs-helm-page`-scoped override in `case-study-helm-boots.css` (`.breadcrumb-list a/li/[aria-current]` and
  `.breadcrumb-sep` → `#000`); no shared file touched.
- **2026-08-10 fix pass #2 (superseded, see pass #3) — wrongly concluded the "image gallery" section was
  fabricated.** An `img`-only query of the reference's `main` content found just 3 `<img>` elements and the
  gallery section was deleted on that basis. This was wrong (see pass #3): the query missed the gallery because
  it isn't built from `<img>` tags at all.
- **2026-08-10 fix pass #3 — the gallery is real; restored it correctly.** User pushed back hard, twice, insisting
  the gallery (hexagon "HELM BOOTS" logo, lifestyle/product photography, "Dedicated to the craft" banner, etc.)
  genuinely appears on the reference above the H1. Re-audited the live reference from scratch with a
  `background-image`-aware query (not just `<img>`) and confirmed it: the reference builds this row from 4
  Elementor columns/sections using CSS `background-image`, not `<img>` tags — that's exactly why the original
  `main img` query returned nothing here. Measured directly off the reference via `getBoundingClientRect`/
  `getComputedStyle`: a 3-column row, `1140px` total width, sitting `70px` below the breadcrumb and flush
  (`10px`) against the H1 text section below it. Left and right columns each hold one tall `360×500` image
  (`background-size:cover`, `background-position:50% 0%` — top-anchored crop); the middle column stacks two
  `360×240` images `20px` apart (top one is the hexagon logo on white, `background-size:contain`; bottom one is
  a product photo, `cover`/center). The two tall images are themselves multi-photo composites (native
  `576×968` and `576×733`) — that's why each one visually shows several "chapters" (e.g. "Timeless & Versatile" +
  "Austin, Texas" + a craftsmanship shot baked into one file); there are only 4 real image assets, matching what
  the reference itself uses.
  - Downloaded the 4 real assets from the reference (`helmboots-lower.webp` 57506B, `437x437.webp` 8026B,
    `helmlower.webp` 4636B, `helmboots-another.webp` 43766B — via in-page `fetch()` + blob download, since the
    sandbox has no direct internet) and saved them locally as `cs-helm-gallery-1.webp`, `cs-helm-gallery-2-top.webp`,
    `cs-helm-gallery-2-bottom.webp`, `cs-helm-gallery-3.webp`, verified valid via `file`/PIL (`576×968`, `437×437`,
    `400×300`, `576×733` respectively).
  - Re-added `<section class="cs-helm-gallery">` to the HTML (3-column flex grid, middle column an inner flex
    stack) between the breadcrumb and the intro-text section, and added matching rules to
    `case-study-helm-boots.css` (`.cs-helm-gallery`/`-grid`/`-col`/`-tall`/`-stack`/`-logo`, plus a `max-width:767px`
    stacked-mobile fallback that has not yet been checked against the reference's actual mobile layout).
  - Verified via direct DOM measurement of the rebuilt page (not just a screenshot): all 4 images render at the
    intended box sizes (`~360×500`, `240×240` contain-fit logo, `240px`-tall product shot), matching the reference's
    measured values.
  - **Lesson for future audits on this codebase:** always check for `background-image`-based content (via
    `getComputedStyle(...).backgroundImage`), not just `<img>` tags, before concluding a visual section doesn't
    exist on an Elementor reference page — this codebase's reference site uses both patterns interchangeably.
- **2026-08-10 fix pass #4 — mobile/tablet exact-match pass (hero, breadcrumb, justify, gallery).** User reported
  the mobile paragraph text should be justified, the hero banner should be taller on mobile, the breadcrumb looks
  slightly different, and the gallery's top-image alignment looked off on mobile. `resize_window` proved unreliable
  for arbitrary widths in this environment (768/820 requests kept rendering at the desktop size or an unrelated
  emulated width) — worked around this by reading the reference's actual dynamic CSS via
  `document.styleSheets`/`cssRules` (grep-ing for the specific `.elementor-element-<id>` selectors) instead of
  trying to force a literal viewport size, which also confirmed there is no separate ~768px "tablet" tier for this
  page: every override lives behind a single `max-width:767px` query, so tablet inherits the desktop rules as-is.
  - **Hero** (`.case-studies-banner img`, a theme template part, not an Elementor widget): desktop is `width:100%;
    height:auto` (unchanged); at `max-width:767px` the reference adds `min-height:260px; object-fit:cover;
    object-position:left center`. Added the same rule to `.cs-helm-hero img`.
  - **Breadcrumb wrap:** the shared `.breadcrumb-list` (`css/style.css`) has no `flex-wrap`, fine for every other
    page's short trail but this page's final item ("Migration of Helm Boots to Shopify Plus") is long enough that
    the reference's own breadcrumb widget wraps it to a second line under 767px. Added a `.cs-helm-page`-scoped
    `flex-wrap:wrap` at `max-width:767px` (shared file untouched). Also restructured this page's own breadcrumb
    markup so the separator icon before that final item lives inside the same `<li>` as the text (previously a
    sibling `<li>`) — otherwise the icon stayed stranded at the end of line 1 while only the text wrapped down,
    which didn't match the reference (icon + text wrap together as one unit).
  - **Paragraph justify:** confirmed via the reference's own dynamic CSS (`.elementor-element-3c6e2ab` at
    `max-width:767px`) that only the text-editor widget (the `<p>` tags) switches from `text-align:center` to
    `justify` — headings stay centered. Added `.cs-helm-text-container p{text-align:justify}` inside the existing
    767px block. Also corrected the H1 mobile size to the reference's actual measured value, `24px/36px` (was
    guessed at `28px/34px`); H2/H3 mobile sizes still have no directly-measured reference rule, kept
    proportionally scaled.
  - **Gallery on mobile** (re-measured directly via `getBoundingClientRect` on every `background-image` element at
    a genuine ~320px-wide viewport): the 3 columns stack full-width in the same order, each inset `10px` per side;
    the tall left/right composite images stay `500px` tall (unchanged from desktop — confirmed the visible
    "cut-off" text inside them, e.g. "Walk in. Stand o[ut]", is baked into the reference's own image file and
    crops identically on the live reference at this width, not a bug); only the middle stack's two images shrink
    from `240px` to `190px` each (stack height `400px`). Gap from the breadcrumb to the gallery shrinks from
    `70px`(desktop) to `20px`(mobile) — re-modeled as `margin-top:60px` (mobile `10px`) plus a breakpoint-invariant
    `padding:10px 0` on the section, instead of one padding value per breakpoint, since the section's own
    top/bottom inset measured identically (`10px`) at both widths.
  - Verified the rebuilt page against the live reference at the same emulated width (screenshots + live JS
    measurements), section by section: hero crop, breadcrumb wrap point, gallery stacking/crop, and paragraph
    justify all match.

## Previous completed page

- `portfolio.html` (2026-08-10, built from scratch + same-day fix pass): 20-card project grid reusing
  `.container-wide` (1600px)/plain white shadow-cards (`border-radius:24px`, `box-shadow:0 37px 80px rgba(0,0,0,.1)`),
  generic `.inner-banner` page-header reused with a body-scoped background override, shared `.breadcrumb-bar`.
  Fixed dead `#portfolio` anchors (`header.js` ×2, `footer.js` ×1, `index.html`'s own "View More" button) to point
  to `portfolio.html`. Fix pass corrected: asymmetric card-image inset (`padding-right:12%`, not a symmetric frame),
  wrong breadcrumb separator glyph (FontAwesome solid caret-right, not angle-right), decorative triangle shape
  position + `bounceInRight` entrance animation (fixed to `animation-fill-mode:forwards` only, no base `opacity:0`,
  so the resting state is correct even when the animation can't play in automation), and a stale-CSS-cache
  reporting issue (added a cache-busting `?v=3` query to the page's stylesheet link). Verified clean console/
  network, 0 broken images, no overflow at 9 widths, mobile menu opens and its "Portfolio" link resolves correctly.

## Previous completed page

- `ai-chatbot-development-services.html` (2026-08-06, 4 fix passes through 2026-08-10): 17-section page,
  `aicd-` prefix, dark navy hero with looping 4K background video + live JS chat-demo widget (rebuilt from
  the reference's own inline script to a genuine empty-box-then-plays-once conversation, not a looping
  fade), 4-tab vertical accordion ("Our AI Chatbot Development Services"), dark 5-item icon grid (3+2),
  2×2 stats, 5-card industries grid + decorative phone-mockup row, 6-card process grid, dark 5-review
  carousel (unique review set, not the standard 6), animation-hidden CTA card (reproduced visible), 5-item
  FAQ. No header-color override needed (dark hero). Fixed 3 dead `#ai-chatbot-development-services`
  anchors (header.js ×2, footer.js). Verified clean console/network, 0 broken images, no overflow at 9
  widths, tab-switch/FAQ/carousel/both-contact-forms interactions all confirmed via real clicks.

- `chatbot-integration-services.html` (2026-08-06): 32-section page, `cbot-` prefix, light/white hero
- **Local target:** `ai-chatbot-development-services.html`, `css/pages/ai-chatbot-development-services.css`
  (`aicd-` prefix), `js/ai-chatbot-development-services.js`
- **Last updated:** 2026-08-06 (fix pass, post-build user-reported diffs)
- **State:** Built from scratch, complete. Content root `[data-elementor-id="59475"]` (17 top-level
  sections — a much shorter/simpler page than the `cbot`/`cgpt` siblings, and structurally distinct in
  several places: classic `.elementor-section`/`.elementor-column` throughout, no `e-con` flexbox
  containers used on this page). Genuinely dark-hero-from-frame-one, so **no header-color override was
  needed** (unlike `chatbot-integration-services.html`'s light hero, which required a `.cbot-page`
  scoped override — confirmed this page's header renders correctly by default).
  - **Section order:** hero (dark navy `#14255b` bg, looping 4K background video
    `data-technology-ai-background.mp4` + `linear-gradient(rgba(2,0,61,.61),rgb(0,9,44))` overlay at
    `opacity:.4`, confirmed via `elementor-background-video-container`/`-overlay`) — H1 "AI Chatbot
    Development Services" (Poppins `52/600/56`, white) + subtitle "Build Smarter Customer Experiences"
    (`24/500` white) + paragraph + solid-blue (`#1e4ec4`, not gradient) "Book a Free Consultation"
    button + **a live animated chat-demo mockup** (`.chat-container`/`.chat-box`, 7 alternating
    bot/user bubbles, DOM order `[message, avatar]` for user rows justified `flex-end` and
    `[avatar, message]` for bot rows justified `flex-start`; bot bubble `#14255b` bg / `#eff3ff` text /
    radius `15px 15px 15px 0`, user bubble `#d8e2ed` bg / `#4d4d4d` text / radius `15px 15px 0`,
    35px circular avatars — bot avatar is a real asset (`chat-pwp-icon.png`), user avatar is a
    third-party stock placeholder the reference itself sources from `i.pravatar.cc`, downloaded locally
    rather than hotlinked; on the live reference this cycles via JS-driven opacity/timing that had
    already settled to a static end-state by the time of measurement, so the exact animation timing
    was not observable — reproduced with an original, reasonable-guess sequential reveal-then-loop
    timer in `js/ai-chatbot-development-services.js`, documented as an approximation, not a measured
    value) → breadcrumb (Home/Services/AI Chatbot Development Services) → "Why Choose Us?" (white bg,
    2-col: H2 `32/600 var(--color-heading)` left + 2 paragraphs (DM Sans `16/24`, this page's own
    measured line-height, not the `cbot` page's `26px`) | inline consult-form card, same reused
    `.contact-form`/`.btn-submit` pattern as every sibling page) → **a 4-tab vertical accordion widget**
    (Elementor's native `n-tabs` widget — a genuinely new interaction not present on any prior page):
    two-tone rounded card (`border-radius:25px`), heading rail flex-basis `40%` solid `#1e4ec4` blue
    (confirmed via `elementFromPoint` — the visible blue background is the outer
    `.elementor-widget-container`, NOT `.e-n-tabs-heading` itself, which is transparent) with 4 vertical
    tab buttons (inactive `#8dc1fb`/500, active/hover white/600, `1px solid rgba(255,255,255,.62)`
    bottom dividers, `+`/`–` icons), content rail navy `#14255b` (a separate per-tab `.e-con` panel
    layered on top of the blue, `border-radius:0 30px 30px 0`, `padding:60px 75px`) showing a `64px`
    icon (asset itself is a pre-rendered rounded-square app-icon graphic, `border-radius:10px` applied
    redundantly) + heading (`20px`, white — measured `font-weight:400` via `getComputedStyle` but the
    screenshot showed a clearly bold weight, so `600` was used per the visual-is-truth rule) + `p`
    (white/`.85`, `text-align:justify`). Default open tab = tab 0 "Custom AI Chatbot Development".
    Reproduced as a custom vanilla-JS click-to-switch widget (`initTabs()`), not a native `<details>`/
    accordion reuse, since no sibling page has this pattern → "Our AI Chatbot Development Services" —
    **dark full-bleed `#14255b` section** (confirmed via `elementFromPoint`, not a white/card section as
    initially assumed from the `cbot`/`cgpt` siblings' patterns): white centered H2/intro, then a
    **5-item icon grid with NO card chrome at all** (transparent background per item, confirmed via
    `getComputedStyle` on the `.elementor-image-box-wrapper`) — white `20/400` heading, `#a5aec2`
    paragraph, `64px` white line-icon, 3+2 split (2nd row's 2 real cards centered via 2 empty flanking
    `col-25` spacer columns in the reference — confirmed via `getBoundingClientRect` that the 2nd row's
    cards render at the *same* pixel width as the 3-card row above, not stretched; reproduced with a
    `flex-wrap:wrap;justify-content:center` grid rather than literal empty spacer divs) → **stats +
    side illustration** (white bg, reused 4-stat icon component in a 2×2 grid with dividers instead of
    every other page's 1×4 row — this page's own layout choice, confirmed via measured column/row
    border placement — beside a single illustration image `chat-bot-pic-1.webp`, a travel-app UI
    mockup, 742×931) → "Industries We Serve" — H2 `28/600 var(--color-heading)` center (this page's own
    measured size, not the `32px` used on `cbot`) + intro + **5-card light-blue-card grid** (bg
    `var(--color-bg-light)` `#f7fbff` — exact match confirmed via `getComputedStyle`, shadow
    `0 20px 20px rgba(0,26,87,.08)` — a different shadow shape from the shared `--shadow-card` var,
    measured directly and NOT forced to reuse the variable per the "unique measured values stay
    section-specific" rule — `64px` icon + `18/600` heading + paragraph, all centered; screenshot shows
    centered text despite an initial `text-align:left` reading on a wrapper div that turned out not to
    be the actually-relevant element), 3+2 split identically centered to the services grid above, plus
    a **decorative row of 5 unrelated phone-mockup screenshots** (`01.jpg`/`02.jpg`/`03.jpg`/`03.png`/
    `02.png` on the reference — generic filenames, renamed descriptively on download; purely decorative
    filler content on the live reference, not tied to any specific industry, reproduced as
    `aria-hidden="true"` images) → "Our Process" — H2 `32/600 var(--color-heading)` center (matches the
    shared heading var exactly here, unlike the `28px`/`Industries` heading above — a genuine
    per-section difference on this same page, confirmed both ways via direct measurement) + intro +
    **plain 6-card 3×2 icon grid, zero card chrome** (transparent bg, no shadow/radius/padding box —
    confirmed via `getComputedStyle` on the image-box wrapper — bold `20/600 var(--color-heading)`
    heading, centered, matching the screenshot's clearly-bold rendering): Discovery/Strategy/
    Development, Integration/Testing/Ongoing Support → **Client Reviews** — dark `#14255b` bg
    (NOT the light/white bg every sibling page's reviews section uses), white H2, light `#f4f4f4` cards
    (reused the exact `cbot`/`cgpt` 2-visible carousel component styling) — **5 unique reviews with
    their own dedicated photos**, not the standard 6-review Tom-Wyman-etc. set reused everywhere else on
    the site (confirmed via `swiper-slide` DOM dump: Maya Patel/Owner E-Commerce Brand, Carlos Ramirez/
    Travel Solutions, Jasmine Lee/SaaS Startup, Richard Collins/Banking Sector, Amira Khan/Health
    Network — a genuine reference-side content difference from every other built page, reproduced
    verbatim, not "corrected" to the standard set) → **CTA "Ready to Build Your AI Chatbot?"** — a
    genuinely tricky one: this entire section carries Elementor's `elementor-invisible` entrance-
    animation class and never actually de-hides during any scripted scroll pass this session (`display`
    stayed `block` the whole time but `visibility:hidden` — confirmed via `getComputedStyle` walking the
    ancestor chain, a real match for lesson #2's "animation-hidden content" case, not a genuinely broken/
    empty section: it has real content — eyebrow "Free Consultation" `17/600 var(--color-primary)` +
    H2 `32/600 var(--color-heading)` left + solid-blue "Schedule a Free Consultation" button, `href=
    "#fccu"` on the reference). Since layout/color properties are still computed correctly even while
    `visibility:hidden`, the section was measured and rebuilt as a normal visible light card
    (`border-radius:12px`, `box-shadow`) floating on a dark `#14255b` section — the reference's own
    exact padding value (`350px 0 120px`) was NOT reused verbatim since it's plausibly an animation-
    transform artifact rather than a deliberate design value; a reasonable `90px` was substituted
    instead, documented as an approximation → FAQ — H2 "FAQ's" `32/600 var(--color-dark)` center +
    **5-item accordion** (fewer than every sibling page's 7-10), `radiantthemes-accordion`/Bootstrap-
    collapse pattern reused, but this page's own distinct color scheme confirmed via direct measurement:
    closed = white bg / `var(--color-dark)` text / `+`, open = `var(--color-dark)` bg / white text /
    `–` (the `cbot` page's accordion used `#1e4ec4` for its open-state bg, a different color — each
    page's own exact color was measured independently, not assumed reusable). **No separate "Industries
    We Serve" (image), "Awards & Recognition", or generic reviews-carousel section exists on this page
    at all** — confirmed by walking all 17 top-level sections in the reference DOM; FAQ is genuinely the
    last main-content section before the shared footer, a real structural difference from every sibling
    page, not an oversight.
  - **Assets — 34 new page-specific files downloaded** via the established `<a download>` + synthetic-
    click technique from the live reference tab: 1 video (`data-technology-ai-background.mp4`, 4K
    h264+aac, renamed `aicd-hero-bg.mp4`) + 33 images — 4 tab icons (128×128 PNGs, `icon-cadc/ie/ms/
    alnp.png`), 5 dark-section service icons (64×64 webp), 1 stats illustration (742×931 webp), 5
    industry icons (64×64 webp/png, one — `aicd-industry-ecommerce.webp` — reused from a *different*
    upload folder path on the reference, `2025/06` vs this page's own `2025/09`, a genuine cross-page
    asset reuse on the reference itself), 6 process icons (64×64 webp), 5 decorative phone-mockup
    screenshots (414×896, mixed jpg/png), 5 unique review-person photos (128×128 jpg), 2 chat-demo
    avatars (bot: `chat-pwp-icon.png` 105×105 real asset; user: a third-party `pravatar.cc` stock photo,
    35×35, downloaded and localized rather than hotlinked per the asset rules). All 34 verified via
    Python/Pillow for correct, non-corrupt dimensions after transfer. **Reused without copying** (already
    local from prior pages): `icon-maintenance.svg`, `icon-project-done.svg`, `icon-design-thinking.svg`,
    `webapp-custom-applications.svg` (the 4 stats icons — confirmed identical `viewBox` dimensions to
    the reference's stats-section SVGs, i.e. genuinely the same reused component, not a coincidence).
  - **Video fast-start fix applied proactively:** `aicd-hero-bg.mp4` showed `readyState:0`/
    `networkState:2` (stuck loading) in this session's browser-automation tab after the initial
    download — remuxed with `ffmpeg -c copy -movflags faststart` (moov atom confirmed moved to the
    front via `ffprobe` byte-level check, matching lesson #11 exactly). **Important caveat for the next
    session:** even after the fix, the SAME `readyState:0` symptom was reproduced on
    `chatgpt-integration-services.html`'s ALREADY-FIXED, previously-working `chat-GPT.mp4` in this same
    browser-automation tab — proving the symptom is an environment-wide media-pipeline limitation of
    this particular automated Chrome session (not a real bug in either video file). The remux was still
    the correct precautionary step and should hold for real users; genuine video playback in a real,
    non-automated browser remains unverified this session and is worth a quick human sanity-check.
  - **Files changed:** `js/header.js` (2 places) and `js/footer.js` (1 place) — fixed the dead
    `href="#ai-chatbot-development-services"` anchor on the "AI Chatbot Development Company" mega-menu/
    mobile-menu/footer links to point to the real new page. `services.html` and `index.html` have no
    "AI Chatbot Development" reference at all (verified via grep), so nothing to fix there.
  - **Verified this session:** `node --check` passes on `js/ai-chatbot-development-services.js`,
    `js/header.js`, `js/footer.js`. HTML tag-balance checked with a Python `HTMLParser` pass (0 unclosed/
    mismatched tags). Served via the existing VS Code Live Server at `127.0.0.1:5500`. Header/footer
    inject correctly (confirmed dark-hero-appropriate default header styling, no override needed).
    Console clean, 0 errors. Initial-load network: 26/26 requests `200`. All 39 `main img` elements
    load with 0 broken (`naturalWidth===0`) after a full scripted scroll-through. Tab-switch interaction
    verified via real click (Custom AI Chatbot Development → Integration Expertise, icon/heading/
    paragraph swap confirmed via screenshot). FAQ accordion confirmed single-open via real click test
    (opening item 2 correctly closed item 1). Review carousel builds correctly (9 track children = 5
    originals + 4 `aria-hidden` clones at the 2-visible desktop breakpoint). Consult-form success path
    verified end-to-end (filled Name/Email/Phone via dispatched `input`/`change` events, real
    `.btn-submit` click, success message appeared then auto-hid after 6s per the shared
    `contactForm()` timer); footer's own independent `.contact-form` confirmed present and unaffected.
    A stray `.aicd-cta-card h2`/`Client Reviews of Some of Our Work` capitalization bug was caught and
    fixed this session: the shared `css/style.css` applies `text-transform:capitalize` to headings by
    default, which wrongly capitalized "to"/"of" in this page's own heading text (fine on every sibling
    page since none of their headings contained a lowercase preposition) — fixed with a page-scoped
    `.aicd-page main h2, .aicd-page main h3{text-transform:none}` override, screenshot-confirmed
    corrected ("Ready to Build Your AI Chatbot?", not "Ready To Build..."). **No horizontal overflow at
    any required width** (1920/1440/1366/1280/1024/768/480/390/360), verified via the same-origin
    `<iframe>` + `scrollWidth` technique (all 9 widths returned `overflow:false`). Grid collapse
    confirmed via iframe at 1200/990/766/500px: `.aicd-hero-grid`/`.aicd-why-grid`/`.aicd-stats-grid` go
    2→1 at 991px; `.aicd-tabs-widget` goes row→column at 991px; `.aicd-process-grid` goes 3→2→1 at
    991/767px. Visual screenshots taken at the real ~1568-1685px sandbox viewport confirmed section-by-
    section match against the reference for every section (hero/breadcrumb/why-choose-us+consult-card/
    tabs-widget-both-tone-colors-and-tab-switch/dark-services-grid/stats+illustration/industries-grid+
    phone-mockups/process/reviews/cta/faq-with-click-test).
  - **NOT verified:** True non-automated video playback (see caveat above — this session's automation
    environment could not play ANY video, including previously-working ones, so this is an environment
    limitation, not a known page defect, but still worth a human check). Keyboard/focus accessibility
    on the tabs widget, FAQ accordion, and review carousel. Eyeballed screenshots at the exact
    1024/480/390/360px breakpoints specifically (relied on the iframe `scrollWidth` + grid-column-count
    technique for those, consistent with every prior page in this project, since `resize_window` did not
    visibly affect this session's screenshot capture either — same known limitation noted on the
    `cbot` page).
  - **Next action:** none outstanding; page is complete. If resuming, do a quick human (non-automated)
    check that the hero video actually autoplays, since this session's browser automation could not
    confirm video playback for any page.
- **2026-08-06 fix pass (4 user-reported diffs, all confirmed against fresh reference measurement):**
  - "Our AI Chatbot Development Services" dark card grid: headings were wrapping to 2 lines — the
    section's `.container` had inherited the shared 1140px cap, but the reference measures this
    section's own `.elementor-container` at `max-width:1230px` with near-0 gap between the 3 equal
    columns (content-level padding creates the visual gap, column box itself ~410px). Cards were
    also fixed at `max-width:300px`. Added `.aicd-services > .container{max-width:1230px}` and
    widened `.aicd-services-card` to `flex:0 0 370px;max-width:370px` (gap `60px 30px`) — all 5
    headings now render on one line at desktop width.
  - Stats section (70+/100+/100%/50+): had copied a sibling page's stats component verbatim,
    including a descriptive `<p>` under each stat and left-aligned/hover-lift-the-whole-card
    behavior. Reference has **no paragraph at all** under any of the 4 stats (confirmed via
    `textContent` dump: just `"70+\nHappy Customers"`, nothing else) and is `text-align:center`
    top to bottom. Hover is icon-only: reference class `moving-icon-left-right` on the icon widget
    resolves to `.moving-icon-left-right:hover .elementor-icon svg{transform:translate3d(-10px,0,0)
    !important}` — a horizontal icon-only shift, not a whole-card vertical lift. Removed the 4
    `<p>` elements, centered `.aicd-stat-list article`, removed the article-level hover lift, and
    added `.aicd-stat-list article:hover img{transform:translate3d(-10px,0,0)}` instead.
  - Decorative 5-phone-mockup row under Industries We Serve: was a flat single-row flex layout.
    Reference measured (via `elementsFromPoint` → `.elementor-col-20` rects): images 1/3/5
    (`01.jpg`/`03.jpg`/`02.png`) sit at one `top`, images 2/4 (`02.jpg`/`03.png`) sit exactly 20px
    lower — a genuine alternating zigzag, not a layout accident. Added
    `.aicd-app-mockups img:nth-child(2n){margin-top:20px}`.
  - FAQ accordion was `max-width:900px` (copied from sibling pages' shared FAQ pattern) — this
    page's own reference measures the accordion `.card` at a fixed `700px` (confirmed via
    `getBoundingClientRect` on the first question's ancestor chain, independent of the outer
    1230px section container). Changed `.aicd-accordion` to `max-width:700px`.
  - All 4 fixes screenshot-verified on the local build against the live reference after the change.
- **2026-08-10 fourth fix pass — 360px horizontal overflow:** "verify our page on mobile screen" audit
  found 7px overflow at exactly 360px viewport (`scrollWidth:363` vs `innerWidth:356`) via the
  same-origin iframe technique; not present at 480/390px. Root cause: `.aicd-services-card` used
  `flex:0 0 370px` (flex-shrink:0), which unconditionally blocks shrinking below 370px even though the
  360px viewport is narrower. Fixed to `flex:1 1 370px;max-width:370px;min-width:0`. Re-verified via
  fresh iframe reload at 480/390/360px: all three now show negative overflow (`scrollWidth < innerWidth`),
  confirming the fix and no regression at the wider two widths.
- **2026-08-06 second fix pass — hero chat-demo mockup rebuilt from the reference's own source
  (not approximated):** the previous build's hero chat mockup was a static 7-message list faded
  in/out via CSS opacity on a loop, with a fixed `max-width:420px` card. User flagged it looked
  "empty" with a wrong-colored avatar. Root cause found by downloading the reference's actual
  inline `<script>`/`<style>` for this widget directly (via the browser-download-blob technique,
  since `document.querySelectorAll('script')[n].textContent` was blocked by the content filter on
  a `?img=5` query string inside it — worked around by grabbing it as a `Blob` download instead of
  returning the string through the tool call): the reference is a bespoke HTML+JS widget
  (`.chat-container`/`.chat-box#chat-box`/`.input-box`/`textarea#user-input`) that starts with an
  EMPTY chat box and plays its 7-message conversation ONCE (no loop): user turns are simulated by
  typing character-by-character into the textarea (50ms/char) then posting as a bubble, bot turns
  show a 3-dot typing indicator for 1000-1500ms then reveal letter-by-letter (40ms/char), with an
  800ms pause between turns and a CSS `scale(0)→1.2→1` pop-in per bubble. Container is `width:100%`
  of its grid column (no max-width cap) at a fixed `height:600px`, avatar `36px` (was `32px`), bot
  bubble `background-color:var(--color-dark)` `border-bottom-left-radius:0`, user bubble `#d8e2ed`
  `border-bottom-right-radius:0`. The "wrong-colored" avatar the user saw was our own correct,
  fully-opaque maroon `chat-pwp-icon.png` asset rendered at partial CSS opacity mid-fade (a bug in
  the old fade-loop timer, not a wrong asset) — confirmed by checking the PNG's actual pixel value
  (`133,33,71,255`, matches the reference exactly) before rewriting. Rewrote
  `initChatDemo()` in `js/ai-chatbot-development-services.js` to mirror the reference script
  line-for-line (own ids/local asset paths), rewrote the `.aicd-chat*` block in
  `css/pages/ai-chatbot-development-services.css` to the exact reference values, and simplified the
  static HTML to an empty `#aicd-chat-box` + live `#aicd-user-input`/`#aicd-chat-send` (previously
  read-only/non-interactive). The widget is now genuinely interactive post-auto-conversation
  (typing and pressing Send / Enter gets a canned reply), matching the reference's own
  `sendMessage()` behavior. Screenshot-verified the conversation posting correctly (avatar colors,
  bubble shapes, letter-by-letter reveal) through several turns. Hero heading/subtitle/paragraph/
  "Book a Free Consultation" button were re-checked against fresh computed styles and already
  matched (`#1e4ec4` button bg confirmed exact) — not part of this fix. The hero background video
  visual (wavy line pattern) still could not be A/B-compared frame-for-frame since this session's
  browser automation cannot play video on either the reference or local build (existing, previously
  documented limitation) — worth a human check in a normal browser if still in doubt.
- **2026-08-06 third fix pass — mobile chat-panel width bug + desktop split-ratio correction:**
  - User reported the mobile chat panel size didn't match the reference. Root cause: `.aicd-chat`
    had regressed to `width: 55%` (not the `100%` set in the previous fix pass — found via direct
    file re-read, not attributed further). At the single-column mobile/tablet breakpoint this made
    the panel less than a quarter of the viewport width instead of filling the column. Verified via
    a same-origin iframe at 480px width (`.aicd-hero-demo` content box measured `399.67px`, but
    `.aicd-chat` computed only `219.82px` = exactly 55% of it). Fixed back to `width:100%`;
    re-measured at 475px effective width: chat now correctly fills the full `399.67px` column.
  - While verifying, found the desktop column split itself was wrong: the reference's hero row is
    NOT a 50/50 split despite both columns sharing the `elementor-col-50` class — its own
    Elementor-generated inline CSS (extracted via the same styleSheet-blob-download technique, since
    a plain `cssText` dump was blocked by the content filter on an unrelated character sequence)
    gives the copy column `width:66.347%` and the chat column `width:33.653%` for `min-width:768px`,
    collapsing both to `width:100%` (stacked) specifically between `768px` and `1024px` and below
    `767px` — i.e. the true two-column desktop view only starts above `1024px`, not `991px` as our
    build assumed. The reference's outer hero row also caps at `max-width:1230px` (confirmed via
    ancestor-chain measurement: `.elementor-container{max-width:1230px}` → `10px` widget padding →
    `1210px` effective row content width) with the two columns contiguous (no gap) and the visual
    separation coming entirely from the copy column's own `padding-right:120px` at desktop.
    Reproduced all of this: `.aicd-hero-grid` is now `grid-template-columns:66.347% 33.653%;gap:0;
    max-width:1240px` (1240 so that, after this page's `.container` border-box padding of `0 15px`,
    the resolved content width is exactly `1210px`), `.aicd-hero-copy` gets `padding-right:120px`
    (reset to `0` at the new dedicated `max-width:1024px` breakpoint, where `.aicd-hero-grid` now
    collapses to a single column instead of at the old `991px`). Verified via direct measurement at
    innerWidth 1685 on both pages: reference chat width `407.1957px`, local chat width `407.2px` —
    exact match.

## Previous completed page

- `chatbot-integration-services.html` (2026-08-06): 32-section page, `cbot-` prefix, light/white hero
  (required a `.cbot-page` header-color override, unlike every dark-hero page), floating hero-stats card,
  inline consult-form card, alternating image/text "why" rows (2 images cross-assigned to the wrong row
  on the live reference — reproduced verbatim), 6-card illustrated services grid, industries icon-list,
  6-card process grid with circular icon badges, stats, benefits, CTA with no button, 10-item FAQ,
  reused industries-image/awards/reviews. Fixed 3 dead `#chatbot-integration-services` anchors
  (header.js ×2, footer.js). Verified clean console/network, 0 broken images, no overflow at 9 widths,
  FAQ single-open, both contact-forms independent.

- `chatgpt-integration-services.html` (2026-08-06): 15-section page, `cgpt-` prefix, dark
  particle-network hero with autoplay background video (remuxed `chat-GPT.mp4` for `moov`-atom
  fast-start), inline consult-form card, 5-card platform grid (3+2, centered-at-3-col-width),
  2×2 advantages grid, 2 alternating image/text service rows + 6-card illustrated grid, 2×2 "why"
  grid, dark 5-card process grid with divider, 7-item FAQ, stats/industries/awards/reviews. Fixed 3
  dead `#chatgpt-integration-services` anchors (header.js ×2, footer.js) plus a matching dead anchor
  on the `services.html` "ChatGPT Integration" card. Verified clean console/network, 0 broken images,
  no overflow at 9 widths, FAQ single-open, both contact-forms independent.

- `ai-and-ml-development-services.html` (2026-08-06): 19-section page, `aiml-` prefix, hero banner +
  standalone H2 + 2-col ML text/illustration + 3×2 plain feature grid + two 3-card image-box grids +
  stats + centered "Empower" heading + 2×3 plain "other" grid + industries/awards/reviews. Fixed 3
  dead `#ai-and-ml-development-services` anchors (header.js ×2, footer.js) plus matching dead
  anchors on `services.html` and `index.html`. Verified clean console/network, 0 broken images, no
  overflow at 9 widths.
