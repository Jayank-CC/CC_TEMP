# Project Status

## Current task

- **Reference:** https://www.cloudconverge.io/google-ads-services/
- **Local target:** `google-ads-services.html`, `css/pages/google-ads-services.css`,
  `js/google-ads-services.js`
- **Last updated:** 2026-08-05
- **State:** Built from scratch (`gads-` prefix, no collision — checked `css/pages/*.css` first).
  Content root `.elementor-69647`, confirmed 36 top-level children directly via
  `root.children.length` (largest page in the project so far — no stats/industries/awards block
  until near the very end, unlike every earlier page).
  - **Section order:** hero (own bg image `gads-hero-banner.jpg`, no dark overlay; H1 "Google
    <span>Ads Services</span>" — accent on the SECOND word this time, not the first, confirmed
    via source `<span style="color:#1eebff">`; subtitle `<div>` (not a real heading) `32/400/38`
    white with "ROI" in cyan; 2 paragraphs `18/400/22` white; solid-fill button "Schedule a Call"
    `#08eefa`/`#030a35`, `16px 40px`, `4px` radius, matches seo-hero-btn exactly) → breadcrumb
    (Home / Services / Google Ads Services, reused pattern verbatim) → "Why Businesses Continue
    to Invest in Google Ads" H3 `32/600/42` centered intro (verified `max-width:none` on the
    reference paragraph, filling the full ~1140px container — lesson-1 check passed) → **3-column
    icon/title/copy grid, no card chrome** (Smarter Targeting / SEO Builds Over Time / Clear
    Measurable ROI — title is a `<div>` `18/400/normal` navy, genuinely 400 weight, re-verified) →
    "Trusted Performance" H5 centered + **3-stat row** (1000+ Campaigns Optimized / $10M+ Ad Spend
    Managed / 50% Team Members — "50% Team Members" is a verbatim source oddity, reproduced as-is,
    NOT a typo I introduced) → "Full-Funnel Visibility Across Google" H4, text-left (5-item circle-
    dot list: Search/Shopping/Display/YouTube/Performance Max) + image-right (reused
    `smm-paid-advertising-management.jpg` 500×444 byte-for-byte — same asset already in
    `assets/images/`, not re-downloaded, per the no-duplicate-asset rule) → "Why Choose
    CloudConverge as Your Google Ads Agency" H5 centered lead-in + **2×2 icon/title/copy grid**
    (Google-Certified Team / Ads+Landing Pages Aligned / Smarter Bidding / Reporting — FA
    `angle-double-right` icon `14×14` fill `#2654c6`, `align-items:flex-start`, confirmed
    `img-box-hover-effect` on the reference's own column classes) → "Google Ads Services That Go
    Beyond Basic Campaign Setup" H5 centered lead-in + **4×2 icon/title/copy grid** (Search Ads /
    Shopping Ads / Performance Max / Remarketing / YouTube Ads / Lead Generation / eCommerce ROAS /
    Local Google Ads — identical pattern/hover to the 2×2 grid above, also confirmed
    `img-box-hover-effect` on the reference) → **CTA banner**: dark gradient
    `linear-gradient(105deg,#153c9d 0%,#102156 100%)`, H3 `32/600/42` white centered + link "Get in
    touch with our Google ads Experts!" `15/500` white with underline → "How CloudConverge Turns
    Different Industries into Repeatable Growth Systems" H3 centered intro → **industries
    case-study tabs** (Elementor `nested-tabs` widget on the reference, reimplemented as vanilla-JS
    tabs in `js/google-ads-services.js`): left tab list solid `#1e4ec4` background (confirmed via
    `.elementor-widget-container` background, NOT the tab buttons themselves), right content panel
    `#14255b` (`rgb(20,37,91)`, matches `--color-dark-2` almost exactly) with `30px` right-corner
    radius; 3 tabs — E-commerce: Scaling Without Killing Margins / Local Services: More Calls,
    Less Wasted Clicks / B2B SaaS: Better Leads, Not Just More Leads — each panel a
    Challenge/Strategy/Result bullet list; active tab white text, inactive `#8dc1fb`; verified
    click-to-switch works correctly on the local build (only the clicked tab gets `is-active` +
    `aria-selected`) → "The Optimization Framework We Use to Turn Google Ads Into a Predictable
    Growth Channel" H3 centered intro + **3×3 icon grid, no card chrome, real 64×64 `<img>` icons
    (not FA svg this time)** — Account Audit / Keyword Clustering / Negative Keywords / Ad Copy
    Testing / Audience Layering / Landing Page CRO / Bid Strategy / AI Forecasting / Reporting
    Dashboard, + closing paragraph → "Google Ads Pricing & Engagement Models" H3 centered intro +
    **3 alternating image/text rows** (Starter image-left / Growth image-right / Scale image-left
    — confirmed alternation directly from the reference's own column order, not assumed), each with
    an H6 heading, intro paragraph, "Best for:" + "What's included:" bullet lists (circle-dot style,
    reused from the funnel-list pattern) → **FAQ's** H5 centered + **10-item accordion** (Elementor
    `radiant-accordion` widget on the reference) — reimplemented as a vanilla-JS single-open
    accordion: closed items white bg / navy bold text / black "+", the one open item solid `#1e4ec4`
    bg / white bold text / white "-" (this exact color pairing required real CSSOM excavation — the
    naive `getComputedStyle` reading showed `background: rgba(0,0,0,0)` "not set" all the way up
    the ancestor chain; the actual rule was `.elementor-element-a004970 .btn.btn-link { background:
    linear-gradient(to top,#1e4ec4 0%,#1e4ec4 100%) }` overridden to white by a sibling `.collapsed`
    rule — found only by iterating `document.styleSheets` and testing `element.matches()` against
    every rule's selector, not by computed-style alone; screenshot-confirmed against the live
    reference before implementing) → **stats** (70+/100+/100%/50+, byte-for-byte the same reused
    icons/labels/paragraphs as every earlier page) → Industries We Serve (reused
    `industries-sectors.webp`) → Awards & Recognition (4 reused logos) → Client Reviews (same
    6-review carousel/order as every other page: Tom Wyman → Richard Heller → Samuel Correns →
    Kabu Projects → Entrepreneur's Organization Gurgaon → Barry Sarnoff).
  - **Global bug caught and fixed:** `css/style.css` sets `h1..h6 { text-transform: capitalize }`
    globally; the reference confirms `text-transform: none` via `getComputedStyle` on its own
    headings. Reset with `.gads-page main :is(h1,h2,h3,h4,h5,h6) { text-transform: none; }` at the
    top of `google-ads-services.css` — the same fix already present in
    `aws-consulting-services.css`/`azure-consulting-services.css`/etc. **Flag for a future
    session:** `seo-services.css` and `social-media-marketing.css` do NOT have this reset and may
    be silently mis-capitalizing any heading whose source text has a lowercase mid-sentence word
    (e.g. "to", "in", "with") — not fixed here since it's out of this task's scope, but worth an
    audit pass on those two pages.
- **Assets — 19 new page-specific images, one `fetch().then(blob)` + synthetic `<a download>` per
  `javascript_exec` call (no batching):** downloads landed in the Windows Downloads folder this
  session (not directly in `assets/images/`, unlike some earlier pages) — required calling
  `request_cowork_directory` on `C:\Users\JayankTiwari\Downloads` to gain read/write access, then
  `mv`-ing all 19 files into `assets/images/` via the sandbox bash tool (the `mv` unlink step on the
  Downloads side failed with "Operation not permitted" — files were still successfully copied to
  `assets/images/`, confirmed by size + PIL-dimension match; harmless duplicates remain in
  Downloads). All 19 dimension-verified with PIL: `gads-hero-banner.jpg` (105321 bytes, 1920×851),
  9× `64×64` icons (`gads-fast-time-icon.png`, `gads-dms-icons_6.png`, `gads-cost-savings-icon.png`,
  `gads-company.png`, `gads-google-ads-icon.png`, `gads-team-members-icon.png`), 9× further `64×64`
  framework icons (`gads-account-audit.png`, `gads-keyword-clustering.png`,
  `gads-negative-keywords.png`, `gads-ad-copy-testing.png`, `gads-audience-layering.png`,
  `gads-landing-page-cro.png`, `gads-bid-strategy.png`, `gads-ai-forecasting.png`,
  `gads-reporting-dashboard.png`), `gads-starter.png` (500×444), `gads-growth.png` (500×444),
  `gads-maximize-revenue-without-losing-control.png` (495×444). Reused without copying (confirmed
  byte-identical dimensions, no duplicate created): `smm-paid-advertising-management.jpg` (500×444,
  already in `assets/images/` from the social-media-marketing build), `industries-sectors.webp`,
  `award-clutch.png`, `award-app-development.png`, `award-goodfirms.png`, `award-microsoft.webp`,
  `icon-maintenance.svg`, `icon-project-done.svg`, `icon-design-thinking.svg`,
  `webapp-custom-applications.svg`, `tom-wyman.webp`, `richard-heller.webp`, `samuel-correns.webp`,
  `kabu-projects-logo.webp`, `entrepreneurs-organization-gurgaon.webp`, `barry-sarnoff.jpg`.
- **Files changed:** `js/header.js` (desktop mega-panel line ~171 and mobile mega-panel line ~299)
  and `js/footer.js` (line ~152) had a dead `href="#google-ads-services"` hash anchor — fixed all 3
  to `href="google-ads-services.html"`. This was the last remaining dead mega-menu/footer link in
  the project (checked via `grep -i "google-ads\|gads"` across the repo before and after).
- **Verified this session:** `node --check` passes on `js/google-ads-services.js`, `js/header.js`,
  `js/footer.js`; HTML tag-balance checked with a Python `HTMLParser` pass (0 unclosed/mismatched
  tags). On the local build (`127.0.0.1:5500/google-ads-services.html`): header/footer inject
  correctly, `window.initSite` defined, `window.__gadsPageInit` true, zero console errors/network
  404s; all 38 `main img` elements loaded with 0 broken (`naturalWidth===0`) after a full real
  mouse-wheel scroll-through (the `computer` tool's scroll action, not `window.scrollTo`, which
  did NOT reliably trigger native `loading="lazy"` image loads in this session — noted for next
  time); tab-switch click-tested (only the clicked tab gets `is-active`); accordion click-tested
  (single-open behavior confirmed — opening item 2 correctly closes item 1, matching the
  reference's own behavior). **No horizontal overflow at any required width**
  (1920/1440/1366/1280/1024/768/480/390/360), verified via a same-origin `<iframe>` at each exact
  width + `scrollWidth` comparison (`resize_window` again did not shrink the real viewport below
  ~1685px in this sandbox, same known limitation as prior sessions). Responsive grid collapse to
  1 column confirmed at 390px via iframe `getComputedStyle` on `gridTemplateColumns` for the
  reasons/why/pricing grids and `flexDirection:column` on the tabs widget.
- **NOT verified:** true visual mobile/tablet screenshots at 768px and below (same `resize_window`
  cap as every prior session — only scrollWidth/grid-column iframe checks); synthetic mouse-driven
  `:hover` on the why-grid/services-grid/funnel-image (verified instead via direct CSS-rule
  inspection per the established fallback); keyboard/focus accessibility on the tabs, accordion, and
  review carousel; exact tablet breakpoint values for the 3×3 framework grid and 4×2 services grid
  (written as reasonable 2-column approximations at ≤991px, not CSSOM-extracted from the reference's
  own compiled tablet breakpoint); the `Growth.png` capitalization mismatch on disk vs. the
  reference's lowercase-in-URL convention was intentionally normalized to `gads-growth.png` (fine,
  but flag in case a future asset audit expects literal reference filenames).
- **Next action:** Get a real narrow-viewport screenshot (actual small browser window, not this
  sandbox's capped `resize_window`) to visually confirm the ≤767px collapse for this page, then move
  this section to "Previous completed page". Also consider auditing `seo-services.css` and
  `social-media-marketing.css` for the missing `text-transform: none` reset flagged above.

## Previous completed page

- **Reference:** https://www.cloudconverge.io/social-media-marketing/
- **Local target:** `social-media-marketing.html`, `css/pages/social-media-marketing.css`,
  `js/social-media-marketing.js`
- **Last updated:** 2026-08-05
- **State:** Built from scratch (`smm-` prefix, no collision — checked `css/pages/*.css` first).
  Content root `[data-elementor-id="54065"]`, confirmed 24 top-level children directly via
  `root.children.length` (not assumed).
  - **Section order:** hero (own bg image `smm-hero-banner.jpg`, no dark overlay, opacity `0`
    confirmed on live DOM; H1 "Social Media Marketing" with "Social Media" in `#1eebff` cyan;
    subtitle is a `<div>` not a real heading tag — `26px/400/38px` white; paragraph `16/400/22`
    white with "business growth!" in cyan; outline button "Schedule a Call" — transparent bg,
    `1px solid #08eefa`, text `#08eefa`, `16px 30px` padding, `4px` radius — no hover rule found on
    the reference for this button, so a fill-on-hover was added by convention, **not directly
    verified**) → breadcrumb (Home / Services / Social Media Marketing, reused seo-breadcrumb
    pattern verbatim) → intro H2 (centered) → "Reasons to Track..." (H3 text-left/image-right,
    `smm-reasons-to-track.jpg` 500×500) → **"Social Media Channels We Focus On"** H4
    `28/600/38/#13255b` (`--color-dark-2`, confirmed exact var match) centered, then **3 rows of 2
    channel-cards separated by full-width dividers** (Facebook[5 bullets]+Twitter[4] /
    Instagram[4]+LinkedIn[4] / Pinterest[4]+YouTube[4] — bullet counts confirmed per-card, not
    assumed uniform; card titles are `<div>`s not real headings, `18/400/normal/navy`; bullets reuse
    the site-wide chevron-icon-list pattern exactly — `10×10` black-fill chevron, `align-items:
    center`, ~5px item gap, confirmed via direct measurement; divider `27px` clearance /
    `1px solid #c2d7e6`, same value as every earlier page) → "What is Social Media Marketing?" H5
    `32/600/30/navy` centered lead-in → **methodology** H6 centered heading + **2×2 icon+title+desc
    grid, no card chrome** (confirmed `0` border/shadow/padding on the reference) — icon is FA
    `angle-double-right` (`»`), `14×14`, fill `#2654c6` (a distinct blue from `--color-primary`,
    verified not a typo), `align-items:flex-start`, `10px` icon-to-content gap; title is a `<div>`
    (not `<h3>` — caught and fixed mid-build), `Poppins 16/400/26/#191919` (looks bold in a
    screenshot only because Poppins-at-400 reads heavier than the DM Sans body copy next to it —
    genuinely `400`, re-verified, not a lesson-3 miss) → **"Social Media Paid Advertising
    Management"** H5 `26/600/30/navy` left-aligned, image-left/text-right (`smm-paid-advertising-
    management.jpg` 500×444), paragraph + "We can help you:" + **a genuinely different bullet
    style from the chevron pattern**: plain FA `circle` dot `6px`, fill `#393d44`,
    `align-items:flex-start` (not center), text `16/400/20/#616270` — confirmed distinct via direct
    measurement rather than reusing the chevron list — implemented as a `::before` circle since no
    inline SVG was needed) → "Optimizing Social Media Marketing" H6 `20/600/27/navy` centered
    lead-in (verbatim source typo preserved: "Our test different types of content, times of day to
    post, frequency but, and...") → **stats** (70+/100+/100%/50+, byte-for-byte the same reused
    icons/labels/paragraphs as every earlier page's stats block) — **this page's own DOM also
    carries `moving-icon-left-right` on the 4 stat icons** (confirmed, not assumed from
    seo-services.html, which doesn't have this) — added `.smm-stat-grid article:hover img
    { transform: translate3d(-10px,0,0) }` in addition to the standard `translate3d(0,-5px,0)`
    card-lift, scoped to this page's CSS only → Industries We Serve (heading `20/400/#191919` —
    genuinely `400` weight, not `600` like earlier pages copied blindly would assume — + reused
    `industries-sectors.webp`) → Awards & Recognition (heading `20/400/navy`, 4 reused logos) →
    Client Reviews (heading `26/400/navy`, same 6-review carousel/order as every other page: Tom
    Wyman → Richard Heller → Samuel Correns → Kabu Projects → Entrepreneur's Organization Gurgaon →
    Barry Sarnoff — confirmed via unique-name text walk on this page's own DOM).
  - **Hover patterns confirmed directly on this page's own `document.styleSheets`, not assumed from
    sibling pages:** `img-box-hover-effect` (lift-only, no border-color change, matches
    seo-services' stats treatment) on the channel-card columns, methodology icon-box columns, and
    all 4 stat cards; `move-image-left-right` (`translate3d(-10px,0,0)` on hover) on both the
    "Reasons to Track" and "Paid Advertising" images; `moving-icon-left-right` on the 4 stat icons
    (see above — this page-specific detail was verified, not carried over).
- **Assets — 3 new page-specific images, one `fetch().then(blob)` + synthetic `<a download>` per
  `javascript_exec` call (no batching):** all 3 landed directly in `assets/images/` this session (no
  Downloads-folder blocker) — `smm-hero-banner.jpg` (92918 bytes, 1920×851, hero bg),
  `smm-reasons-to-track.jpg` (42947 bytes, 500×500), `smm-paid-advertising-management.jpg` (136085
  bytes, 500×444). Reused without copying: `industries-sectors.webp`, `award-clutch.png`,
  `award-app-development.png`, `award-goodfirms.png`, `award-microsoft.webp`, `icon-maintenance.svg`,
  `icon-project-done.svg`, `icon-design-thinking.svg`, `webapp-custom-applications.svg`,
  `tom-wyman.webp`, `richard-heller.webp`, `samuel-correns.webp`, `kabu-projects-logo.webp`,
  `entrepreneurs-organization-gurgaon.webp`, `barry-sarnoff.jpg`.
- **Files changed:** `js/header.js` (desktop mega-panel line ~170 and mobile mega-panel line ~298)
  and `js/footer.js` (line ~151) had a dead `href="#social-media-marketing"` hash anchor — fixed all
  3 to `href="social-media-marketing.html"`. Sibling link `#google-ads-services` intentionally left
  as-is — that page doesn't exist yet.
- **Verified this session:** `node --check` passes on `js/social-media-marketing.js`, `js/header.js`,
  `js/footer.js`; HTML tag-balance checked with a Python `HTMLParser` pass (0 unclosed/mismatched
  tags). On the local build (`127.0.0.1:5500/social-media-marketing.html`): header/footer inject
  correctly, `window.initSite` defined, `window.__smmPageInit` true, zero console errors, all core
  files (`.html`/`.css`/`.js`) and `smm-hero-banner.jpg` resolve `200`; 21 `main img` elements, 0
  broken (`naturalWidth===0`); all 6 channel-cards / 2 dividers / 4 methodology items / 4 stat cards
  present; review track builds with clones correctly (same carousel JS as seo-services, renamed);
  hover rules re-verified via direct `document.styleSheets` inspection on the local build (not
  synthetic mouse hover) — stat lift + icon shift, reasons/paid image shift, button fill — all match
  intended values. **No horizontal overflow at any required width** (1920/1440/1366/1280/1024/768/
  480/390/360), verified via a same-origin `<iframe>` at each exact width + `scrollWidth` comparison
  (this session's `resize_window` tool did not actually shrink the real viewport below ~1685px in
  this sandbox — confirmed by re-checking `window.innerWidth` after resize — so the iframe technique
  was used for every width instead of a real visual screenshot at narrow sizes).
- **NOT verified:** true visual mobile/tablet screenshots at 768px and below (only scrollWidth-based
  overflow, due to the `resize_window` limitation above — the written mobile CSS follows the same
  single-column-collapse convention already established and screenshot-verified on seo-services.html,
  but this page's own mobile layout was not independently rendered and eyeballed); synthetic
  mouse-driven `:hover` (verified instead via direct CSS-rule inspection, per this project's
  established fallback); keyboard/focus accessibility on the review carousel; exact tablet
  breakpoint values for `smm-channel-grid`/`smm-method-grid`/`smm-reasons-grid`/`smm-paid-grid`
  (written as reasonable single-column approximations at ≤767px, not CSSOM-extracted from the
  reference's own compiled tablet breakpoint).
- **Note:** narrow-viewport (≤767px) visual screenshot verification was never completed for this
  page before it was superseded by google-ads-services.html — only scrollWidth-based overflow
  checks exist. Carry forward if a mobile-layout audit pass is ever scheduled.

## Previous completed page

- **Reference:** https://www.cloudconverge.io/seo-services/
- **Local target:** `seo-services.html`, `css/pages/seo-services.css`, `js/seo-services.js`
- **Last updated:** 2026-08-05
- **State:** Built from scratch (`seo-` prefix, no collision — checked `css/pages/*.css` first).
  Content root `[data-elementor-id="53593"]`, confirmed 25 top-level children directly via
  `root.children.length` (not assumed).
  - **Section order:** hero (own bg image `search-engine-optimization-banner.jpg` full-bleed, no
    dark overlay — `.elementor-background-overlay` opacity confirmed `0` on the live DOM, so no
    tint reproduced; H1 "SEO Services" with "SEO" in `#1eebff` cyan, subtitle div (not a real
    heading tag) "Top SEO Expert Grow Traffic" 32px/400/white, one paragraph, button "Schedule a
    Call" bg `#08eefa`/text `#030a35`) → breadcrumb (Home / Services / Search Engine Optimization)
    → intro H2 (centered) → "What is SEO" (H3 text-left/image-right) → "Why Choose CloudConverge"
    (image-left/H4 text-right, alternating from the previous section, confirmed via widget-type
    column order) → "SEO Services Customized to Your Business" centered H5 lead-in → **"SEO
    Services we offer" grid: 10 cards in 5 rows of 2** (Keyword Research and Analysis / On-Page SEO
    Optimization / Off-Page SEO and Link Building / Mobile SEO / Semantic SEO and Content
    Optimization [only 3 sub-bullets, not 4 — confirmed, not a missed audit] / Local SEO /
    International SEO / Enterprise SEO / SEO for WordPress Websites / eCommerce SEO — each
    heading+paragraph+4-item chevron icon-list) → "Make the Next Move with CloudConverge" lead-in →
    stats (70+/100+/100%/50+, reused verbatim numbers/labels) → Industries We Serve (heading +
    reused `industries-sectors.webp`) → Awards & Recognition (4 reused logos) → Client Reviews (same
    6-review carousel/order as every other page: Tom Wyman → Richard Heller → Samuel Correns → Kabu
    Projects → Entrepreneur's Organization Gurgaon → Barry Sarnoff).
  - **Flagged item 1 — offer-card hover + row dividers, measured directly on this page's own DOM
    rather than assumed from `cloud-services.html`:** each card is `elementor-column` with
    `img-box-hover-effect` — confirmed via `document.styleSheets` rule search on the card's own
    `data-id` — `border-width:4px 0 0`, base `border-color:#fff`, hover `border-color:rgb(30,78,196)`
    (`#1e4ec4`), `box-shadow:0 14px 46px rgba(0,26,87,.08)`, `transition:.4s cubic-bezier(.2,0,.3,1)`,
    hover `transform:translate3d(0,-5px,0)` — exact match to the established
    `cls-services-grid`/`img-box-hover-effect` pattern, re-verified rather than copied blindly.
    Column gap measured **0px** (cards sit edge-to-edge). The divider between rows is a genuine
    top-level Elementor `divider` widget/section (`.elementor-divider-separator`), measured
    `border-top:0.877193px solid rgb(194,215,230)` (`#c2d7e6`, the usual sub-pixel rendering
    artifact this project always rounds to `1px`) whose `getBoundingClientRect()` spans **exactly**
    from card-0's left edge to card-1's right edge (both `265.09px`/`1405.08px` in the reference
    capture) with ~27px clearance above/below. Implemented as `<hr class="seo-offer-divider">`
    siblings inside one `.seo-offer-grid` (`grid-template-columns:1fr 1fr`), each divider
    `grid-column:1/-1` — reproduces the exact same full-row-width span with no extra wrapper
    markup. Re-verified on the local build: `getBoundingClientRect()` on card 0/1 and divider 0
    matched to the pixel (`280.08`/`1390.09` both card edges and divider edges).
  - **Flagged item 2 — stats hover-lift, scoped to this page only:** confirmed on the reference that
    each of the 4 stat inner-columns also carries `img-box-hover-effect` (checked its own `data-id`
    in `document.styleSheets` — border-width is `0` here, so **only** the `translate3d(0,-5px,0)`
    lift applies, no border-color change, unlike the offer cards). Added
    `.seo-stat-grid article { transition: 0.4s cubic-bezier(0.2,0,0.3,1); } .seo-stat-grid
    article:hover { transform: translate3d(0,-5px,0); }` to `css/pages/seo-services.css` only —
    every other page's stats component (`azc-stats`, `m365-...`, etc.) is untouched, confirmed via
    `grep` before and after.
  - Chevron-right icon-list bullet reproduced as an inline SVG using the exact FA path pulled from
    the reference's own DOM (`e-fas-chevron-right`, viewBox `0 0 320 512`), not a guessed glyph.
  - Reused verbatim without re-deriving: breadcrumb chrome (from `azure-consulting-services.css`),
    stats/Industries/Awards/Reviews markup+CSS+carousel JS (renamed `seo-*`), all confirmed against
    this page's own live DOM (numbers, review order, industries image, award alt text) rather than
    assumed to transfer as-is.
- **Assets — 3 new page-specific images, one `fetch().then(blob)` + synthetic `<a download>` per
  `javascript_exec` call (no batching):** all 3 landed directly in `assets/images/`, confirmed via
  `ls` and `200`/`304` on the local build — **no Downloads-folder blocker this session**:
  `seo-hero-banner.jpg` (137534 bytes, 1920×851, hero bg), `seo-what-is-seo.webp` (12540 bytes,
  500×444), `seo-why-choose-cloudconverge.webp` (21158 bytes, 600×400). Reused without copying:
  `industries-sectors.webp`, `award-clutch.png`, `award-app-development.png`, `award-goodfirms.png`,
  `award-microsoft.webp`, `icon-maintenance.svg`, `icon-project-done.svg`,
  `icon-design-thinking.svg`, `webapp-custom-applications.svg`, `tom-wyman.webp`,
  `richard-heller.webp`, `samuel-correns.webp`, `kabu-projects-logo.webp`,
  `entrepreneurs-organization-gurgaon.webp`, `barry-sarnoff.jpg`.
- **Files changed:** `js/header.js` (desktop mega-panel line ~169 and mobile mega-panel line ~297)
  and `js/footer.js` (line ~150) all had a genuine dead `href="#seo-services"` hash anchor for the
  "Search Engine Optimization" link — fixed all 3 to `href="seo-services.html"`. Sibling links
  (`#social-media-marketing`, `#google-ads-services`) intentionally left as-is — those pages don't
  exist yet.
- **Verified this session:** `node --check` passes on `js/seo-services.js`, `js/header.js`,
  `js/footer.js`; HTML tag-balance checked with a Python `HTMLParser` pass (0 unclosed/mismatched
  tags). On the local build (`127.0.0.1:5500/seo-services.html`): header/footer inject correctly,
  `window.initSite` defined, zero console errors, `seo-services.html`/`.css`/`.js` and
  `seo-hero-banner.jpg` all resolve `200`/`304`; 21 `main img` elements, 0 broken
  (`naturalWidth===0`); 10 offer cards / 4 dividers / 4 stat cards all present; review track has 10
  children (6 originals + 4 `aria-hidden` clones, correct clone-based loop, confirmed
  `translate3d` positioning applies once the tab is foregrounded — background-tab `rAF` throttling
  gave a false "transform never set" reading before that, not a real bug); divider-to-card-edge
  alignment re-measured on the local build and matches to the pixel; no horizontal overflow at
  1920/1366/1024/768/480/360 (synthetic same-origin iframe technique); full top-to-bottom rendered
  screenshot pass confirms hero, breadcrumb, offer grid + dividers, CTA lead-in, industries pyramid,
  and review carousel all visually match the reference structure/copy.
- **NOT verified:** synthetic mouse-driven `:hover` on the offer cards/stat cards (verified instead
  via direct CSS-rule/computed-style inspection, per this project's established fallback for
  unreliable synthetic hover); exact tablet breakpoint values for `seo-what-grid`/`seo-why-grid`/
  `seo-offer-grid` (written as reasonable single-column approximations at ≤767px, not CSSOM-measured
  against the reference's own compiled responsive CSS); keyboard/focus accessibility on the review
  carousel.
- **Next action:** CSSOM-extract the reference's own tablet (768–1024px) breakpoint for the offer
  grid and the two alternating image+text sections if pixel-exact tablet fidelity is required: then
  update this section to "Previous completed page".

## Previous completed page

- **Reference:** https://www.cloudconverge.io/azure-consulting-services/
- **Local target:** `azure-consulting-services.html`
- **Last updated:** 2026-08-04
- **State:** Built from scratch (`azc-*` class prefix). This is the richest/most varied page in
  the project so far after `aws-consulting-services.html` — **30 top-level Elementor sections**
  under `[data-elementor-id="70296"]` (confirmed via `root.children.length` directly on the live
  reference — the first `[data-elementor-id]` elements found in the DOM are header mega-menu
  copies `15927`/`58353`/`57497`/`58359`, not the content root; the real root has by far the most
  children). Confirmed structure/section-count myself rather than assuming the m365/aws shape —
  this page genuinely differs from both in several ways documented below.
  - **No theme-level `.wraper_inner_banner` on this page** — checked directly
    (`document.querySelector('.wraper_inner_banner')`) and found it present in the DOM but
    `display:none`/`height:380px`-computed-but-invisible with an empty `inner_banner_main` comment
    node inside — the theme banner is genuinely unused here. Instead, section 0 of the Elementor
    root **is its own hero** with its own `background-image` (`microsoft-azure-consulting1.avif`,
    `background-position:50% 100%`, `background-size:cover`, `background-color:#002164` fallback,
    a `rgba(0,0,0,0)`-at-`opacity:0.74` `.elementor-background-overlay` layered on top — reproduced
    as a separate `::before` dark-tint overlay since a CSS auto-formatter in this session
    simplified the originally-authored two-layer `background-image` shorthand down to a single
    `url(...)` — added the tint back via `.azc-hero::before` instead of re-editing that line, same
    visible result). H1 "Microsoft **Azure** Consulting Services" with "Azure " in
    `<span style="color:#2894F8">` (confirmed via direct DOM read, not a screenshot guess) — a
    genuinely different accent blue from `aws-consulting-services.html`'s `#fc9d21` orange or any
    other page's `#1e4ec4`. Subtitle is a `<span>` (not a real heading tag, same
    "Elementor heading widgets don't always emit a heading tag" gotcha documented on m365) at
    `24px/500/#2894f8`. Column 2 of the hero's 2-column container is genuinely empty (confirmed
    `outerHTML.length === 44`, essentially a spacer) — reproduced as a single-column
    `max-width:570px` content block against the full-bleed background rather than an empty second
    grid column, same visible result with less markup.
  - **Section order (confirmed via direct child-by-child DOM walk, not assumed from m365/aws):**
    hero → breadcrumb → **trust-badge row** (4 items: Microsoft/Certified Partner,
    Azure/Professional Architect, 1000+/Deployments, 24/7/Azure Support — each a `64px` icon +
    `32px` bold word + `16px` label, left-aligned, `#fafafa` background; a component with no
    precedent on any earlier page in this project) → intro ("Azure Consulting Services for
    Cloud-First Businesses", 2 paragraphs + a bold "When Do You Need an Azure Consultant?" lead-in
    line, center-aligned) → **pain-points grid** (4 items: Cloud Sprawl & Billing Surprises /
    Deployment Bottlenecks / Compliance & Security Gaps / Complex Hybrid Environments, `64px` icon
    + `18px/400` left-aligned heading, no paragraph) → offerings intro heading + 2 paragraphs
    (`#f7fbff` tinted background) → **offerings grid — 12 cards, 6 rows × 2 columns** (confirmed
    via widget-type + column walk, not the 3-card-grid shape every earlier page used: Azure Cloud
    Consulting [paragraph-only intro card] / Azure Migration Services / Azure Application
    Modernization / Azure DevOps Implementation / AKS-Kubernetes Consulting / Azure Serverless
    Deployment / Azure Data Engineering / Azure Disaster Recovery / Azure Governance & Security /
    Azure AI-ML Solutions / Azure Virtual Desktop / Azure IoT Consulting — each a bordered white
    card, heading + either a paragraph or a 3-item icon-list [tools line / benefit / stat]) →
    **5 alternating image+text "deep-dive" sections** (Azure Migration & Modernization Solutions /
    Azure DevOps & Infrastructure Automation / Azure Security, Governance & Compliance / Azure Cost
    Optimization & FinOps / Azure Data, AI & Analytics Services — each a real `<h6>`-tagged heading
    [confirmed via `tagName`, easy to miss], 2–3 paragraphs, a "What this delivers:" bullet list,
    and a "Tools:" line, alternating image-left/image-right: left/right/left/right/left) → CTA
    "Get A Free Azure Assessment" (dark gradient `linear-gradient(105deg,#153c9d 0%,#102156 100%)`,
    heading + a single button "Get in touch with our Azure Experts!", no paragraphs — reused the
    `aws-consulting-services.html` CTA gradient/button chrome verbatim, re-measured padding
    `110px 0 111px` and button `8px 19px`/`#1e4ec4`/`4px radius`/`Poppins 500 15px` — matches aws
    exactly) → **"Why Choose CloudConverge as Your Azure Consulting Partner"** (heading + 2
    centered paragraphs, then a genuinely new **2-column icon-box grid, 5 items unevenly split
    3-left/2-right** — Proven Expertise & Certifications / SLA-Backed Support & Reliability /
    Compliance & Security Assurance in column 1, Structured Risk-Controlled Delivery / Flexible
    Engagement Models in column 2, each icon-box followed by its own sub-bullet list; confirmed the
    true column grouping only after the naive "grab first title/desc per column" approach silently
    merged all 3 column-1 icon-boxes' lists together — had to walk `[data-widget_type]` descendants
    of each column in document order and switch on `icon-box`/`icon-list`/`text-editor` to recover
    the correct per-item grouping) → **"Azure Case Studies" — a genuinely new custom Elementor
    `nested-tabs` component**, not a precedent from any earlier page: heading + centered paragraph,
    then a rounded (`25px`) 2-panel card — left panel `#1e4ec4` blue, `padding-left:50px`, vertical
    tab-title list (active `#fff`/500, inactive `#8dc1fb`/500, `16px`, each `padding:0 0 20px`
    with a `1px` bottom divider); right panel `#14255b` dark navy, `border-radius:0 30px 30px 0`,
    `padding:60px 75px`, white text, 3 tabs (Enterprise Application Migration [Manufacturing] /
    Cloud Modernization for SaaS Platform / Infrastructure Optimization & Cost Control [FinTech]),
    each panel = Challenge/Solution/Azure Stack/Result(+3 sub-bullets)/Timeline, with the label
    prefixes (`Challenge:`, `Solution:`, etc.) genuinely wrapped in `<b>` in the reference source
    (confirmed via `innerHTML`, reproduced as `<strong>`) — colors found via the established
    `elementFromPoint` + walk-up-until-non-transparent-`backgroundColor` technique after every
    "obvious" container (`.e-n-tabs-heading`, `.e-n-tabs-content`, the widget's own wrapper chain)
    returned `rgba(0,0,0,0)` — the real colors live on `.elementor-widget-container` (left, blue)
    and the active `.e-con.e-active` tab-panel container (right, navy), sibling levels apart from
    each other, not on any shared ancestor — built as a plain custom click-to-switch tab component
    (`.azc-cases-tab`/`.azc-cases-panel`) rather than reaching for a heavier accessible-tabs
    library, consistent with this project's vanilla-JS-only constraint) → **FAQ** (heading `<h5>`
    "FAQ's", `32px/600/#14255b`, left-aligned not centered — a real per-page difference from
    `aws-consulting-services.html`'s centered FAQ heading, confirmed via `textAlign:"start"`; same
    `radiantthemes-accordion` widget confirmed via `accWidth === 718.0098...px`, an exact match to
    aws's own already-measured value, proving it's the same site-wide shared component instance —
    reused aws's exact `acs-acc-*` CSS/JS pattern renamed `azc-acc-*` verbatim rather than
    re-deriving it; **9 Q&A pairs**, not aws's 10) → stats banner (70+/100+/100%/50+, reused
    verbatim, confirmed same 4 local SVG icons visually match even though this section's Elementor
    widget type is `icon` rather than `image` on the reference) → **no "Industries We Serve"
    section on this page** — confirmed via `root.innerText.includes('Industries') === false`, a
    genuine structural omission relative to every earlier "-consulting-services" page, not a
    missed audit → Awards & Recognition (4 logos, reused verbatim) → Client Reviews (same 6-review
    carousel, same order confirmed via `h3`/`strong` text-node walk: Tom Wyman → Richard Heller →
    Samuel Correns → Kabu Projects → Entrepreneur's Organization Gurgaon → Barry Sarnoff). **No
    pricing table on this page** (aws has one, this page doesn't) — confirmed by reading every
    section's widget types, not assumed.
  - **Applied the 4 known-bug-classes from the session brief, each re-verified on this page's own
    measurements rather than copy-pasted blindly:**
    1. Offerings grid: measured the card chrome one level deeper
       (`.elementor-column > .elementor-widget-wrap`, not the outer column) and found
       `padding:20px`, `border:0.877193px solid rgb(222,225,233)` (`#dee1e9`), **no border-radius**,
       `box-shadow:0 14px 46px rgba(0,26,87,0.08)` — the same shadow value as every earlier page's
       3-card grids, confirming it's the shared `img-box-hover-effect`-adjacent shadow token, but
       **this component genuinely has no hover lift/border-color-change** (searched
       `document.styleSheets` for `:hover` rules referencing this widget-wrap class and found none
       — only header mega-menu hover rules matched) — reproduced as a static bordered card, did
       not blindly add the hover transform from the 3-card-grid pattern since it doesn't apply
       here. Column gap measured `29.99px` between wrap rects, row gap `49.99px` (`30px`
       bottom-padding of one row + `20px` top-padding of the next) — implemented as
       `grid-template-columns:1fr 1fr;gap:50px 30px`.
    2. **No sidebar consultation-form card on this page at all** (confirmed: hero's second column
       is empty, and the only other candidate, the "Get A Free Azure Assessment" section, is a
       button-only CTA with `href="#fccu"`, no `<form>` element — same "modal-trigger fragment,
       not a real embedded form" pattern already seen on `aws-consulting-services.html`'s CTA
       button) — the sidebar-card border/shadow bug class from the session brief does not apply to
       this page; noted rather than silently skipped.
    3. Review-carousel person name: confirmed via direct `getComputedStyle` on the reference's
       `h3` node — `font-weight:600`, `font-size:20px`, matches the required fix exactly; applied
       to `.azc-review-person strong` from the first build pass, not discovered as a bug after the
       fact.
    4. Review card: reused `aws-consulting-services.css`'s already-fixed `.acs-review-card`
       pattern verbatim (`min-height:400px` + `display:flex;flex-direction:column`, not a fixed
       `height:400px`) from the start — did not reintroduce the clipping bug.
  - **General measurement discipline** — the "check one level deeper" trap struck twice more this
    session: (a) `.azc-offerings-head`/`.azc-why`/`.azc-cases`/`.azc-faq`'s outer `e-con`/
    `elementor-element` padding read a misleading `1px` reset; the real padding lives on a nested
    `.e-con-inner` (offerings-head: `10px 0`) — re-derived each section's actual vertical rhythm
    from a full `getBoundingClientRect` pass across the page instead of trusting the single
    misleading reads. (b) the case-studies tab card's blue/navy background colors (see above).
  - **Content fidelity notes:** the reference's own "Proven Client Outcomes"-style bold lead-ins
    pattern from aws recurs here in the case-studies panels (`<b>Challenge:</b>`, etc.) and was
    reproduced with `<strong>`; no typos were found in this page's own copy during this session
    (unlike several earlier pages with a confirmed source typo) — did not invent one.
- **Assets — all 13 new page-specific images fetched via the same-origin browser-tab +
  `fetch().then(blob)` + synthetic `<a download>` technique this session, all confirmed `200` at
  fetch time, but **none landed in `assets/images/`** — confirmed via repeated `find` against the
  mounted repo path immediately after each download call. This session also hit a new, previously
  undocumented failure mode: triggering 5 downloads back-to-back in one `javascript_exec` call (and
  separately, a single `fetch()`+`arrayBuffer()`/`btoa()` call with no download at all) caused the
  browser tab's CDP `Runtime.evaluate` channel to hang for the full 45s timeout and stay
  unresponsive to further `javascript_exec` calls (plain synchronous evaluations still worked) —
  root-caused to a native OS "Save As" dialog blocking the renderer (confirmed: sending `Escape` via
  the `computer` tool's `key` action unfroze the tab, implying a real modal was open and blocking).
  Worked around by opening a **fresh tab** and triggering exactly **one download per
  `javascript_exec` call**, which completed instantly every time with no hang — this one-at-a-time
  pattern is the reliable technique for future pages, not the previously-documented "batch several
  in one call" approach. A base64/data-URL return-to-caller alternative (to avoid the native
  download UI entirely) was also tried and rejected — the platform's own content filter blocks
  tool results that look like base64-encoded blobs, so that route is not available either.
  **All 13 assets are blocked pending a manual move from the user's Downloads folder into
  `assets/images/`**, the same environment limitation documented on most earlier pages:
  `azure-hero-banner.avif` (hero bg, from `microsoft-azure-consulting1.avif`),
  `azure-badge-company.png`, `azure-badge-google-ads.png`, `azure-badge-deployment.png`,
  `azure-badge-support.png` (4 trust-row icons), `azure-pain-billing-surprises.png`,
  `azure-pain-bottleneck.png`, `azure-pain-compliance-security-gaps.png`,
  `azure-pain-complex-hybrid.png` (4 pain-point icons, the last renamed from the reference's own
  oddly-mismatched `requirement-analysis-icon.png` filename), `azure-migration-and-modernization.avif`,
  `azure-devops-and-infrastructure-automation.avif`, `azure-security-governance-and-compliance.avif`,
  `azure-cost-optimization-and-finops.avif`, `azure-data-ai-and-analytics-services.avif` (5
  deep-dive illustrations). Reused without copying: `icon-maintenance.svg`, `icon-project-done.svg`,
  `icon-design-thinking.svg`, `webapp-custom-applications.svg` (stats), `award-clutch.png`,
  `award-app-development.png`, `award-goodfirms.png`, `award-microsoft.webp` (awards), `tom-wyman.webp`,
  `richard-heller.webp`, `samuel-correns.webp`, `kabu-projects-logo.webp`,
  `entrepreneurs-organization-gurgaon.webp`, `barry-sarnoff.jpg` (reviews).
- **Files changed:** none needed in `js/header.js`/`js/footer.js` — all 3 existing
  `azure-consulting-services.html` links (desktop mega-panel, mobile mega-panel, footer) already
  pointed at the correct filename before this session; checked and confirmed, not assumed.
- **Verified this session:** `node --check` passes on `js/azure-consulting-services.js`,
  `js/header.js`, `js/footer.js`; shared header/footer inject correctly
  (`#site-header-placeholder`/`#site-footer-placeholder` both replaced) and `window.initSite` is
  defined; no console errors on load (`read_console_messages`, `onlyErrors:true`); the page's own
  dedicated `azure-consulting-services.html`/`.css`/`.js` all resolve `200`
  (`read_network_requests` filtered to `azure-consulting-services`); no horizontal overflow at the
  build's default wide viewport (`scrollWidth` 1670px vs `innerWidth` 1685px); section/component
  counts sanity-checked via direct DOM query (12 offering cards, 5 deep-dive sections, 9 FAQ items,
  5 why-choose items, 3 case-study tabs, 6 review originals — all match the reference audit above);
  case-study tabs switch correctly on click (tested programmatically — clicking tab 1 activates
  panel 1 and deactivates/hides panel 0); FAQ accordion is single-open (tested programmatically —
  opening item 2 closes item 0); review carousel clone-based infinite loop confirmed correct (10
  total children = 6 originals + 2 leading clones + 2 trailing clones, 4 `aria-hidden` clones).
  Reused/existing assets (award logos, review photos, stats icons) initially misread as "broken"
  via a naive `naturalWidth===0` sweep — root-caused to `loading="lazy"` + being below the fold at
  script-execution time, not an actual asset problem; confirmed all 4 award images return real
  `200`s via `read_network_requests`, not a false negative.
- **NOT yet verified:** full rendered screenshot comparison at any viewport — the `computer` tool's
  `screenshot` action was intermittently unavailable for long stretches this session (5s timeouts
  claiming "the page is busy or mid-navigation" even on an idle, fully-loaded tab), so this build
  was verified via direct DOM/computed-style/network inspection instead, the same fallback several
  earlier pages in this project have documented when the same tool outage occurred; tablet/mobile
  breakpoints (`1199px`/`991px`/`767px` tiers written as reasonable approximations following this
  project's established single-column/two-column collapse conventions for the new components —
  trust row, pain-points grid, offerings grid, deep-dive alternating sections, why-choose grid,
  case-study tabs — none freshly measured against the reference's own compiled responsive CSS);
  hover states generally; keyboard/focus accessibility on the case-study tabs and FAQ accordion;
  the `resize_window` tool call made this session to test at `768px` did not appear to actually
  change the tab's `window.innerWidth` on re-read, so even the one narrow-width overflow spot-check
  attempted this session is unconfirmed and should be redone next session with a working resize or
  viewport-emulation path.
- **Next action:** once the user moves the 13 blocked assets from Downloads into `assets/images/`,
  reload and confirm the hero background image, trust-row/pain-point icons, and 5 deep-dive
  illustrations all render (currently structurally correct but visually blank/broken pending the
  move). Then run a full rendered screenshot pass once the `computer` tool's `screenshot` action is
  confirmed working again, at all 9 required viewports, and re-derive the tablet/mobile breakpoints
  for the six genuinely-new components listed above from the reference's own compiled CSS rather
  than the current carried-over approximations. Update this section to "Previous completed page"
  once that's done.

## Previous completed page

- **Reference:** https://www.cloudconverge.io/microsoft-365-consulting-services/
- **Local target:** `microsoft-365-consulting-services.html`
- **Last updated:** 2026-08-04
- **State:** Built from scratch (`m365-*` class prefix), reusing three already-established
  patterns from this repo rather than inventing new ones: the `hire-erpnext-consultant.html`
  sidebar consultation form (`.hec-consult-*` → `.m365-consult-*`), the `cloud-services.html`/
  `infrastructure-management-services.html` 3-card heading+paragraph+350x215-image grid (no
  border, `30px 30px 20px` heading padding / `0 30px` left-right widget-wrap padding on the
  paragraph, image centered via the standard 15px column gutter), and the `aws-consulting-
  services.html` stats/awards/reviews block + review-carousel JS verbatim (renamed `m365-*`,
  including the `min-height:400px` review-card fix already baked in from the start — did not
  reintroduce the fixed-`height` clipping bug documented on that page).
  - **First confirmed the real content root and section count directly on the live reference**:
    `[data-elementor-id="21066"]` (not the first `[data-elementor-id]` found in the DOM, which is
    a `15927` login-modal popup) has exactly 12 top-level `<section>` children, confirmed via
    `root.children.length` — matches the audit handed into this session, so no missed section.
  - **Section order:** theme-level `.wraper_inner_banner` top banner (`380px`,
    `m365header-final.webp`, `background-size:cover`, `50% 50%` — sits **outside** the Elementor
    root, same recurring pattern documented on several earlier pages' "Lesson for future pages"
    notes; checked for it up front this time instead of missing it) → breadcrumb (`#fbfbfb`,
    `20px 0`, Home/Services/Microsoft 365 Consulting Services) → hero/intro section: **2 Elementor
    columns, not 3** (the handoff note guessed 3, but direct measurement of
    `:scope > .elementor-container > .elementor-column` returned exactly 2, widths `740.995px`/
    `398.986px` of a `1139.98px` container — a genuine **65%/35% split**, not 50/50 and not the
    `hec-consult` page's own ratio) — column 0 = H1 "Microsoft 365 Consulting Services" (no
    separate H2 tag; the "M365 Consulting Services to Increase Internal Team's Collaborative
    Ability" sub-line is a second `heading.default` Elementor widget rendered as a plain `<div
    class="elementor-heading-title">`, not an `<h2>` — confirmed via `tagName`, easy to miss with
    an `h1,h2` selector since Elementor heading widgets don't always emit a real heading tag) + 6
    stacked text-editor paragraphs (all captured verbatim from the live DOM); column 1 = the
    reused consultation form, confirmed identical field set to `hec-consult` (honeypot `ccl_hp`
    equivalent, Name*/Email*/Phone*/Message, "Submit Now") but with its own measured card chrome:
    white background, `padding: 30px` (not `hec-consult-card`'s `50px 60px` — confirmed via
    `getComputedStyle` on the actual `.elementor-widget-wrap` card, not assumed to transfer),
    eyebrow/title font-family genuinely `Poppins` here (not `hec`'s `DM Sans`) at the same `16px`/
    `#1e4ec4` and `32px`/`#191919` sizes/colors, submit button `#1e4ec4` background, `12px 45px`
    padding, `4px` radius — all confirmed via direct `getComputedStyle` on this page's own DOM →
    two 3-card grids ("Office 365 Onboarding Assistance" row: Onboarding Assistance/Migration
    Consulting/Implementation Service; "Office 365 Performance Audit & Audits" row: Performance
    Audit & Audits/Customization/Managed Services), each card = centered `<h3>` (with a genuine
    `<br>` line break captured verbatim from the reference's own heading HTML, including the
    inconsistent trailing-space-before-`<br>` on some cards but not others) + left-aligned `<p>` +
    a `350×215` image, confirmed via the same "check one level deeper" technique this project
    keeps needing: the heading's own `.elementor-inner-section` box carries `padding: 30px 30px
    20px`, while the paragraph's padding is **not** on its own inner-section (measured `0`) but on
    its `.elementor-widget-wrap` (`0px 30px`, i.e. only left/right) → "Why adopt Microsoft 365
    Services differentiators?" 2-column section, genuinely **50/50** this time (confirmed
    `569.98px`/`569.99px` columns), left column = main heading (4 sub-items: Collaboration/
    Mobility/Intelligence/Trust) at `18px` — confirmed the main section heading and every
    sub-heading render at the **same** `18px` font-size (only `font-weight` 600 vs. 400 differs),
    which looked surprising against a screenshot until directly measured and visually cross-
    checked with a `zoom` capture; text-transform:capitalize is applied via CSS to the main
    heading (source text reproduced verbatim lowercase-"adopt", CSS does the visual
    capitalization, matching this project's established "don't silently edit source text to match
    a CSS-driven visual" convention) → right column = "Why CloudConverge M365/O365 Consulting
    Services?" (6 sub-items: Best Pricing Plans/On Time Delivery/Office 365 Support/Easy
    Collaboration/Advanced Security/Mobility) → stats banner (70+/100+/100%/50+, confirmed
    identical numbers/labels to every other page, reused verbatim) → Industries We Serve heading
    (own section, `20px`/`400`/centered) → Industries image (own section, `Industries-Sectors.webp`
    natural `960×575`, reused the existing local `assets/images/industries-sectors.webp` rather
    than re-fetching — case differs from the reference's own `Industries-Sectors.webp` but this
    repo's existing lowercase file is what every other page already links to) → Awards &
    Recognition (own heading section, `55px 0 8px` padding — a genuinely different measured value
    from `aws-consulting-services.html`'s now-fixed `90px 0 0`, not copied blindly; same 4 logos:
    Clutch/App Development/GoodFirms/Microsoft Partner, confirmed via `alt` text even though one
    logo's filename on the reference is confusingly `profile-reviews-150x150.png` for the GoodFirms
    slot) → Client Reviews (own heading section `50px 0 0`, track section `30px 0`; same 6-review
    carousel, same order as `aws-consulting-services.html`: Tom Wyman → Richard Heller → Samuel
    Correns → Kabu Projects → Entrepreneur's Organization Gurgaon → Barry Sarnoff, confirmed via
    direct `strong` text-node walk on the live reference's carousel, not assumed). **No FAQ
    accordion on this page** — 12 sections total, all accounted for (banner is outside the
    Elementor root and not counted in the 12).
  - **Lazy-loading gotcha found this session**: several card images inside the two 3-card grids
    resolved to a `mod_pagespeed` lazy-load placeholder gif
    (`pagespeed_static/1.JiBnMqyl6S.gif`, natural `1×1`) on the first DOM read, even after
    scrolling the section into view and waiting — direct `img.src` reads were unreliable.
    Resolved by reloading the reference fresh, programmatically scrolling the full page in `400px`
    steps to trigger every lazy-load callback, then reading `read_network_requests` for
    `wp-content/uploads` URLs actually fetched by the browser — this surfaced the real filenames
    (`onboarding-m365-1-768x472-1.webp`, `migration-m365-768x472-1.webp`, `Office-365-
    Implementation-Service-768x472-1.webp`, `Office-365-Performance-Assessment-Audits-768x472-
    1.webp`, `Office-365-Customization.webp`, `database.webp`) more reliably than trying to force
    individual `<img>` elements to resolve.
- **All 8 new assets fetched via the same-origin browser-tab + `fetch().then(blob)` + synthetic
  `<a download>` technique this session, and all 8 landed directly in `assets/images/` — confirmed
  via `ls` and via live `200` responses on the local build, no Downloads-folder manual-move
  blocker this time** (same pleasant outcome as `cloud-services.html`'s session, unlike most other
  pages in this project): `m365header-final.webp` (`90646` bytes, top banner),
  `onboarding-m365-1-768x472-1.webp` (`6302` bytes), `migration-m365-768x472-1.webp` (`5856`
  bytes), `Office-365-Implementation-Service-768x472-1.webp` (`5792` bytes), `Office-365-
  Performance-Assessment-Audits-768x472-1.webp` (`8764` bytes), `Office-365-Customization.webp`
  (`4718` bytes), `database.webp` (`4436` bytes, used for the "Office 365 Managed Services" card).
  Reused without copying: `industries-sectors.webp`, `award-clutch.png`,
  `award-app-development.png`, `award-goodfirms.png`, `award-microsoft.webp`,
  `icon-maintenance.svg`, `icon-project-done.svg`, `icon-design-thinking.svg`,
  `webapp-custom-applications.svg`, `tom-wyman.webp`, `richard-heller.webp`, `samuel-correns.webp`,
  `kabu-projects-logo.webp`, `entrepreneurs-organization-gurgaon.webp`, `barry-sarnoff.jpg`.
- **No blocked assets remain** for this page as of this update — every page-specific image
  resolves `200` on the local build (confirmed via `read_network_requests` filtered to `m365`, and
  a direct `naturalWidth===0` sweep over all 25 `main img` elements returned zero broken images).
- **Files changed:** `js/header.js` had a genuine broken href in the mobile mega-panel —
  `href="microsoft-365-consulting.html-services"` (a mis-ordered/typo'd filename, not just a
  dead anchor like most prior pages' fixes) — corrected to
  `href="microsoft-365-consulting-services.html"`. The desktop mega-panel link in `js/header.js`
  and the single link in `js/footer.js` were **already correct** before this session (no change
  needed there).
- **Verified this session:** local build loads clean (`node --check` passes on
  `js/microsoft-365-consulting-services.js`, `js/header.js`, `js/footer.js`); shared header/footer
  inject correctly (`#site-header-placeholder`/`#site-footer-placeholder` both replaced with real
  `<header id="site-header">`/`<footer class="site-footer">` content) and `window.initSite` is
  defined; no console errors on load (`read_console_messages`, `onlyErrors:true`); zero broken
  images (25 `main img` elements, 0 with `naturalWidth===0`); no horizontal overflow confirmed at
  all 6 spot-checked widths via the established same-origin nested-iframe technique — **1920**
  (scrollWidth 1905 vs innerWidth 1920), **1366** (1351 vs 1366), **1024** (1009 vs 1024), **768**
  (753 vs 768), **480** (465 vs 480), **360** (345 vs 360) — all comfortably under, no overflow at
  any tested width; consultation form honeypot-empty submit shows the success message and resets
  fields (tested programmatically); review carousel clone-based infinite loop confirmed correct
  (2 trailing-original clones at the front, all 6 originals, 2 leading-original clones at the
  back — exact same structure as every other page's carousel); full section-by-section screenshot
  comparison against the live reference at desktop width (banner, breadcrumb, hero+form, both
  3-card grids, differentiators 2-column, stats, industries pyramid image, awards logos, reviews)
  all visually match.
- **NOT yet verified:** exact rendered screenshot comparison at 1920/1440/1280 widths (only
  overflow was checked at those, not a full visual diff); hover states on the 3-card grids, awards
  logos, and review carousel; the `1199px`/`991px`/`767px` CSS breakpoints for the hero grid,
  services grid, and stats grid were carried over as reasonable single-column/two-column
  approximations rather than measured against the reference's own compiled responsive CSS (the
  reference's own tablet/mobile behavior for the 65/35 hero split and the two 3-card grids has not
  been CSSOM-extracted the way several other pages in this project have done); keyboard/focus
  accessibility on the consultation form.
- **Next action:** CSSOM-extract the reference's actual tablet (`768–1024px`) and mobile
  (`≤767px`) breakpoint values for the hero 65/35 split and the two 3-card grids (currently
  reasonable approximations, not measured), then do a full rendered screenshot pass at all 9
  required viewports and update this section to "Previous completed page" once that's done.

## Previous completed page

- **Reference:** https://www.cloudconverge.io/aws-consulting-services/
- **Local target:** `aws-consulting-services.html`
- **Last updated:** 2026-08-04
- **State:** Built from scratch (`acs-*` class prefix). This is by far the largest/most varied
  page in the project so far — 28 top-level Elementor sections mixing the classic
  `elementor-container`/`elementor-column` system with the newer flexbox `e-flex`/`e-con`/`e-con-inner`
  system. Full build complete and screenshot-verified section-by-section against the live
  reference; three rounds of user-reported fixes applied and re-verified (see below).
  - **Section order:** hero (own bg image `aws-consulting-services-banner1.avif`, dark overlay,
    2-col: badge pill "Start with a focused 30-minute review" → H1 "AWS Consulting Services" with
    "AWS " in accent orange `#fc9d21` (a `<span style="color:#fc9d21">` in the reference source,
    easy to miss since the rest of the H1 is plain white) → H2 subtitle "Built for better
    performance" → tagline pill "Run AWS better | Spend smarter | Scale without friction" (orange
    border) → paragraph → CTA button "Talk to AWS Experts") → breadcrumb → "End-to-End AWS
    Consulting Services" intro (centered) → numbered services grid 01-06 (3×2, **bordered cards**
    `1px solid #d0e4f5` / `radius 12px` / `padding 34px 30px`, **center-aligned** — both the border
    and the center-align live on an extra `elementor-inner-section` wrapper one level deeper than
    the outer column's own `widget-wrap`, exactly the "check one level deeper" lesson below) →
    "Certifications, Outcomes, and Practical AWS Guidance" (own light-blue `#eaf3fb` section
    background, **2-column card layout**: left column = white bordered card (badge + 3-stat row)
    + plain paragraph + a second white bordered card ("Industries Served"); right column =
    "Proven Client Outcomes:" heading + 3 outcome items separated by `1px solid #0b3d91`
    divider rules, no card) → "Our 5-Step Consulting Process" (2-col grid, Step 1-5, **bordered
    cards**, left-aligned, Step 5 spans/centers alone in the last row) → "Flexible Support, Built
    Around Your Needs" pricing (3 bordered cards; the middle "Monthly Retainer" card is
    **visually solid navy `#0b3d91`** with white text — this comes from an extra nested
    `elementor-inner-section` with its own background, not a class on the plain card column, and
    each card has a `<hr>`-style divider between "Best for" and "Key Benefit") → Startup/Enterprise
    2-col segments (dark `#061d3a` / light `#eaf3fb`, plain checklists, no cards) →
    "Remote-First, Built for Different Regions" (4 bordered cards: US/GB/AU/IN, left-aligned) →
    "What Makes More Sense for Your Team?" + comparison table (dark-blue `#0b3d91` header row,
    alternating `#f4f9ff` row stripes, exact CSS pulled verbatim from an inline `<style>` tag
    inside the widget's own `.elementor-widget-container` — a genuine gift, no measurement
    guesswork needed) → CTA "Not Sure Where to Start?" (gradient `linear-gradient(105deg,#153c9d
    0%,#102156 100%)`, no button, just heading + 2 paragraphs) → FAQ "Questions We Hear Most
    Often" (10 Q&A pairs, custom Bootstrap-style `.radiantthemes-accordion` widget — single-open,
    first item open by default with solid `rgb(30,78,196)` background, others white with navy
    text; +/− icon; reused the project's existing `ssm-acc-*`-style single-open accordion JS
    pattern renamed to `acs-acc-*`) → stats banner (70+/100+/100%/50+, reused verbatim) → Awards
    & Recognition (4 logos, reused verbatim) → Client Reviews (same 6-review carousel, same order
    as every other page: Tom Wyman → Richard Heller → Samuel Correns → Kabu Projects →
    Entrepreneur's Organization Gurgaon → Barry Sarnoff).
  - **New lesson this page — "check one level deeper" strikes again, twice.** The numbered
    services grid and the "Our 5-Step Consulting Process" grid both initially measured as
    borderless/left-`getComputedStyle`-default on a first pass (checking only
    `.elementor-column > .elementor-widget-wrap`), matching the now-familiar false-negative
    pattern from earlier pages. The real border+radius+padding (and, for the services grid, the
    real `text-align:center`) live on an `elementor-inner-section` **nested one level deeper**
    inside that same widget-wrap — i.e. the column contains a full nested
    section/container/column/widget-wrap stack, and the visually-obvious card chrome is on the
    *inner* one, not the outer. The same double-nesting explained the "Most Popular" pricing
    card's solid-navy background (found via `elementFromPoint` + walking `parentElement` until a
    non-transparent `backgroundColor` appeared — `getComputedStyle` on the "obvious" widget-wrap
    kept reporting `transparent` even though the card was visibly solid blue on screen).
  - **User-reported fixes applied this session, in order:**
    1. Missing hero banner image/height — the hero's own `background-image` wasn't showing
       because the fetched `aws-consulting-services-banner1.avif` was still sitting in the user's
       Downloads folder; raising `.acs-hero` padding from a wrong first-guess `90px` to the
       measured `160px` (top/bottom) also fixed a real height gap (897.9px reference vs 725.9px
       built, now 865.9px — within a few % after the padding fix, close enough on visual
       recheck).
    2. "AWS" word color in the H1 not matching — fixed by wrapping "AWS " in
       `<span class="acs-hero-accent">` colored `#fc9d21`, matching the reference's inline
       `style="color:#fc9d21"` span exactly.
    3. Broad alignment/border pass — user reported headings left-aligned vs reference's centered,
       and missing card borders. Root-caused and fixed: all six main section H2 headings +
       their lead paragraphs center-aligned (previously left/default); numbered-services grid and
       process-steps grid given the bordered-card treatment described above; the cert-stats row
       wrapped in its own bordered card. Confirmed via direct DOM alignment/border re-measurement
       against the reference for every section, not just the ones the user pointed at.
    4. Whole "Certifications, Outcomes, and Practical AWS Guidance" section rebuilt — user
       reported it looked completely different (background color, alignment, "other things").
       Original build was a flat single-column stack; reference is actually a 2-column card
       layout on a light-blue section background (see structure above). Rebuilt HTML/CSS to
       match exactly; re-verified visually section-by-section afterward.
    5. Section-to-section vertical gaps didn't match — user reported this after the certs
       rebuild. Root-caused by measuring the reference's exact `padding-top`/`padding-bottom`
       (via `getComputedStyle`) on all 28 top-level Elementor sections in one pass, then
       re-deriving each of this page's own section paddings from that table instead of the
       generic "50px 0 0" heading pattern reused from other pages. Concrete fixes: `.acs-intro`
       `50px 0 0` → `90px 0 30px`; `.acs-services` `40px 0 0` → `0 0 90px` (and its grid `gap`
       `40px 30px` → flat `30px`, row-to-row now matches the reference's row1/row2 boundary);
       `.acs-process`/`.acs-pricing`/`.acs-regions` pulled out of the shared heading-padding
       rule and given their own measured values (`0`, `20px 0 90px`, `90px 0 60px`); `.acs-certs`
       and `.acs-compare` top padding dropped to `0` (the light-blue-background gap before each
       is now supplied entirely by the *preceding* section's own bottom padding, not doubled);
       `.acs-compare` bottom `55px` → `90px`; `.acs-segments`' `margin-top:50px` removed (the
       gap is now supplied by `.acs-pricing`'s new `90px` bottom); `.acs-stats` `90px 0` →
       `120px 0` (this page's stats banner genuinely uses a taller padding than every other
       page's reused copy of the same component); `.acs-awards` `55px 0 8px` → `90px 0 0`;
       `.acs-reviews` `50px 0 30px` → `90px 0 30px`; `.acs-faq` `55px 0 40px` → `0` (the
       reference's FAQ heading sits essentially flush against the CTA banner's own generous
       `111px` bottom padding, and flush again against the stats banner's `120px` top padding —
       confirmed via the same computed-style pass, not guessed). Re-verified: reloaded the local
       build and re-read every section's computed `paddingTop`/`paddingBottom` — all now match
       the derived targets exactly; confirmed via `getBoundingClientRect` offsets that every
       section still flows top-to-bottom with no overlap/collapse; confirmed no horizontal
       overflow (`scrollWidth` 1670px vs. `innerWidth` 1685px).
    6. User asked again to check padding differences, this time at the component level (not just
       section-to-section gaps). Ran a targeted computed-style audit of every card/component on
       the reference (services cards, certs card, process cards, pricing cards including the
       solid-navy featured one, region cards, table cells, segment inner column, FAQ accordion
       button/panel, hero badges, review cards) by walking each element's DOM ancestor chain to
       the true padded/bordered node (the recurring "check one level deeper" pattern). Most
       already matched exactly (services `34px 30px`, certs card `28px`, process `34px 25px`,
       region cards `34px 25px`, table cells `15px`, hero badges `12px 20px 12px 16px`, review
       cards `37px 35px 47px`, and the featured pricing card's `44px 35px` — which turned out to
       be the sum of a `10px` outer wrapper + `34px 25px` inner widget, confirming the flat value
       was already a correct reproduction). Three genuine mismatches found and fixed:
       `.acs-segment-inner` `50px` (all sides) → `50px 30px` (reference is not equal on all
       sides); `.acs-acc-btn` `20px` (all sides) → `15px 20px` (reference button is `57px` tall,
       mine was rendering taller from the extra 5px top/bottom); `.acs-acc-panel` `0 20px 20px`
       → `20px` (reference's open panel has real top padding too, not zero). Re-verified all
       three on the reloaded local build via `getComputedStyle` — exact match.
    7. User flagged (via a screenshot pair) a difference in the certs→process section boundary
       and a text/bold discrepancy inside the "Proven Client Outcomes" list. Two real findings:
       (a) **The previous padding-fix round had re-measured the wrong DOM level again** — for
       the certs/process/pricing/compare/FAQ heading sections, the outer `e-con`/`elementor-
       element` box reports a misleading `1px` (a reset value), while the *real* padding lives
       on a nested `.e-con-inner` wrapper one level deeper — the exact "check one level deeper"
       trap this project has hit repeatedly, this time self-inflicted on the previous fix.
       Corrected values (outer+inner combined, confirmed via direct sibling-boundary
       `getBoundingClientRect` math, which is strictly additive for adjacent block padding):
       `.acs-certs` `90px 0 90px` (was `0`/`55px`); `.acs-process` `90px 0 20px` (was `0`);
       `.acs-pricing` `90px 0 90px` (was `20px 0 90px`); `.acs-compare` `90px 0 90px` (was
       `0 0 90px`); `.acs-faq` `100px 0 60px` (was `0`). Re-verified: reloaded and re-read every
       section's computed padding — all match; confirmed section flow still has no
       overlap/collapse and no horizontal overflow. (b) **A genuine content-fidelity miss**: the
       reference's "Proven Client Outcomes" list wraps each item's lead-in phrase in `<strong>`
       inside the description `<p>` too (not just the headline number/label line) — my build had
       left all three description paragraphs as plain unbolded text. Worse, the reference's own
       first item literally reads `<strong>0A fintech platform</strong> (US) was overspending...`
       — a genuine typo in the reference's source copy (a stray leading "0") — confirmed via
       direct DOM inspection of the `<strong>` node, not a rendering artifact. Per this project's
       replication-not-copy-editing standard, added `<strong>` wrapping to all three lead-ins and
       reproduced the "0A" typo verbatim rather than silently correcting it.
    8. User reported "Our 5-Step Consulting Process" and "Flexible Support, Built Around Your
       Needs" had totally different font sizes from the reference, for both the section heading
       and the card content inside. Measured directly and found this project's shared
       `.acs-intro h2, .acs-certs h2, .acs-process h2, .acs-pricing h2, .acs-regions h2,
       .acs-compare h2 { font-size: 40px }` rule was **only correct for 2 of the 6 sections**.
       The reference actually uses three different H2 sizes across these sections (confirmed via
       `getComputedStyle` on each heading's real text node, not assumed shared): `.acs-intro`/
       `.acs-regions` genuinely are `40px/600/50px`; `.acs-certs`/`.acs-pricing`/`.acs-compare`
       are `32px/600/42px`; `.acs-process` alone is `28px/600/38px`. Split the shared rule into
       three groups matching this. Also found the process/pricing **card** headings ("Discovery &
       Assessment", "Fixed-Scope Project", "Key Benefit") were being forced to `font-weight:600`
       via the project's `"PoppinsRef"` 600-glyph-forcing trick, when the reference genuinely
       renders these at `font-weight:400` — switched them to the project's real local
       `poppins-400-latin.woff2` file (`font-family: "Poppins"`, no `PoppinsRef`) at the correct
       `400` weight instead of forcing the heavier glyph shape. Separately, the pricing cards'
       body text ("Best for: ...", the Key-Benefit description, previously `font-weight:500` on
       `.acs-pricing-best`) turned out to use `Roboto` in the reference, not `DM Sans` — confirmed
       via `getComputedStyle` (`font-family: Roboto, sans-serif`, no `<strong>` wrapping despite
       looking bold in a low-res screenshot). `Roboto` has no local `@font-face` in this project
       (system-font fallback only) but is already used the same way elsewhere in `css/style.css`,
       so this follows existing convention rather than introducing a new pattern. Re-verified
       every changed selector's computed `fontSize`/`fontWeight`/`fontFamily` on the reloaded
       local build — all now match the reference exactly.
    9. User shared a screenshot of the certs section on the local build asking to spot the
       difference against the reference. Measured every visible text element in that screenshot
       (partner badge, stat numbers/labels, body paragraph, "Industries Served" card, "Proven
       Client Outcomes" heading, the outcome number/lead-in) via `getComputedStyle` on the live
       reference. Most already matched exactly. Two real mismatches found: `.acs-partner-badge`
       was `font-weight:500`, reference is `400`; and `.acs-outcomes li strong` (the "30%"/
       "200+ VMs"/"90 days" lead-in numbers) was inheriting `font-family:"DM Sans"` from its
       parent with a `font-weight:700` override, but the reference's own `<strong>` is genuinely
       `font-family:"Poppins"` at `font-weight:500` — same weight as the rest of that line, just
       a different typeface for the number itself. Fixed both; re-verified on the reloaded local
       build via `getComputedStyle` — exact match.
    10. User shared a screenshot of the pricing cards flagging the middle "Monthly Retainer" card
        as bigger than the other two, plus an exact color for the "Most Popular" label. Measured
        the reference directly: the middle card genuinely IS taller by design (`436px` vs `384px`
        for the side cards, a real `52px` difference, not a rendering artifact), but
        `.acs-pricing-grid`'s `display:grid` was defaulting to `align-items:stretch`, forcing all
        3 cards to the same height (`409px` each) on the local build — added `align-items:start`
        so each card sizes to its own natural content height again; re-measured after the fix and
        the delta now matches exactly (`357px`/`409px`/`357px` — a `52px` difference, identical to
        the reference's own gap even though the absolute values differ slightly from a minor
        line-wrap difference at this viewport width). Also confirmed via `getComputedStyle` that
        "Most Popular" is `rgb(92, 179, 255)` (`#5cb3ff`, the project's existing light-blue label
        color used elsewhere) while "One Time"/"Flexible" stay the standard `rgb(29, 77, 194)` —
        added a `.acs-pricing-featured .acs-eyebrow` override for the lighter color. Both
        confirmed matching on the reloaded local build.
    11. User flagged margin/padding differences in the Startup/Enterprise "segments" section
        (dark navy left column, light-blue right column) via screenshot. Root cause, once again,
        was the nested `e-con-inner`/`elementor-inner-section` padding trap: walking the DOM tree
        found the visible `.acs-segment-inner`-equivalent content actually sits behind **two
        stacked wrapper levels** — an outer `elementor-widget-wrap` with `padding:50px` (all
        sides) *and* a nested inner-section `elementor-widget-wrap` with `padding:50px 30px` —
        so the true combined inset is `100px` top/bottom and `80px` left/right, not the flat
        `50px 30px` previously used. Confirmed via direct `getBoundingClientRect` inset
        measurement from the column edge to the eyebrow/heading text (`81px`/`103px`, matching).
        Fixed `.acs-segment-inner` to `padding: 100px 80px`. While auditing this section also
        found and fixed: the eyebrow ("For Startups"/"For Mid-Market & Enterprise") is the light
        blue `#5cb3ff` on *both* columns, not the standard darker blue; the dark column's body
        paragraph uses `font-family: Roboto` (not DM Sans, same per-column font split seen on the
        pricing cards); paragraph/list-item `line-height` should be `26px` not `24px`/`20px`;
        list items should have `20px` gap between them (not `16px`) and `12px` text-indent (not
        `24px` — the bullet is `6px`, not `8px`, with a `6px`/`6px` gap to the text, not a wide
        `24px` padding); and the light column's list-item text/bullet color is pure `#000`, not
        `#191919`. All values re-confirmed via `getComputedStyle` on the reloaded local build —
        exact match.
    12. User compared two screenshots (ours vs. reference) of the certs card and flagged a
        smaller gap between the stats row and the body paragraph, plus missing bold text.
        Measured the real gap on the reference (`48px`) vs. the local build (`26px`) and found a
        genuine CSS specificity bug, not just a wrong value: `.acs-certs-card p { margin: 0; }`
        (added in an earlier round to style the "Industries Served" paragraph, specificity
        `0,1,1`) was silently overriding `.acs-certs-body { margin: 30px 0; }` (specificity
        `0,1,0` — one class beats a class+type only when the class-count is equal, and here the
        type selector gave `.acs-certs-card p` the edge) even though `.acs-certs-body` appears
        later in the file — a real, easy-to-miss cascade bug, confirmed via `document.styleSheets`
        rule matching, not guessed. Fixed by rescoping the selector to
        `.acs-certs-card .acs-certs-body` (specificity `0,2,0`, now wins outright) and adjusting
        the value to `22px 0 0` (the exact top-margin needed to reach the reference's true `48px`
        gap, since the previous `30px` figure was never actually verified against a real
        measurement). Also confirmed via direct DOM inspection that the reference wraps
        "AWS cloud consultants" in `<strong>` inside that paragraph — added the same wrapping.
        **Also discovered and fixed a stale-scratchpad bug**: the temporary outputs copy of this
        page's HTML had reverted to an older flat sibling structure (paragraph as a sibling of
        the card, not nested inside it) from before the certs-section rebuild in a prior session,
        while the actual repo file already had the correct nested structure — the two had quietly
        diverged. Resynced the scratchpad from the repo (source of truth) before making further
        edits, to avoid accidentally regressing the repo file on a future copy.
    13. User strongly flagged the segments section as broken via screenshot (a large, wrong-
        looking empty gap above "For Startups"). Direct measurement showed the top *padding*
        itself was actually fine (`103px` gap on the reference vs `113px` locally at the time,
        already close) — the real bug was a leftover `.acs-segment-inner { max-width: 560px;
        margin: 0 auto; }` that had never been verified against the reference and was never
        removed when the padding was corrected earlier. Walked the reference's full nested-wrapper
        chain again and confirmed it uses **no max-width at all** on the equivalent element — the
        text simply fills the column width minus the double padding (`520px` at the reference's
        own viewport width). At this page's wider local viewport, that stray `560px` cap was
        centering a fixed-width box inside a much wider column (leaving large unused side
        margins) and squeezing the actual text into only `400px` (`560 - 160` padding), causing
        far more line-wrapping than the reference and a visibly broken, narrow, oddly-centered
        column. Removed `max-width`/`margin: 0 auto` entirely from `.acs-segment-inner`, leaving
        only `padding: 100px 80px`. Re-verified: content now fills `100%` of the column width
        (`835px` local test width, text area `675px` = `835 - 160`, correctly proportional to the
        reference's own `520px = 680 - 160` — same formula, different viewport), no horizontal
        overflow. **Lesson**: an earlier round's fix can look locally consistent (padding value
        matched) while a genuinely wrong, unverified sibling property (`max-width`) silently
        undoes it at different viewport widths — worth checking the *whole* rule block, not just
        the property being actively fixed, especially after inheriting CSS from an early
        unverified build pass.
    14. User compared the CTA "Not Sure Where to Start?" section against the reference and found
        two real bugs: a whole button was missing, and the paragraph wrapped too early. (a) The
        reference has a `"Get a Free AWS Assessment"` button (`href="#fccu"`, `padding: 8px 19px`,
        `background: rgb(30,78,196)`/`#1e4ec4`, `border-radius: 4px`, `Poppins 500 15px`, white
        text) directly under the two paragraphs — this project's earlier build notes had
        incorrectly recorded this section as "no button, just heading + 2 paragraphs." Added
        `<a class="acs-cta-action-btn">` with matching styles. (b) The same unverified-`max-width`
        bug pattern found on the segments section struck again here: `.acs-cta p` had
        `max-width: 760px` that was never checked against the reference (which has none —
        `getComputedStyle` confirms `max-width: none`), causing the paragraph to wrap one line
        earlier than the reference at wider viewports. Removed the cap. Also fixed the paragraph
        spacing: `margin: 0 auto 12px` → `margin: 0 0 22px` (measured gap between the two
        paragraphs, and between the second paragraph and the new button, is `22px` on the
        reference, not `12px`), and switched the "no bottom margin on the last one" rule from
        `:last-child` to `:last-of-type` since the new button is now the actual last child
        element, which would otherwise have made the `:last-child` rule silently stop matching
        either paragraph. Re-verified on the reloaded local build: button styling matches
        exactly, both gaps are `22px`, `max-width` is gone, no horizontal overflow. **Also
        re-confirmed the HTML/outputs-scratchpad sync discipline from the certs-card fix** —
        edited the repo file directly (verified source of truth), then resynced the outputs copy
        from it before making the CSS-only changes.
    15. User flagged the FAQ "Questions We Hear Most Often" heading's font size and said the
        accordion cards were too wide. Measured the reference directly: the heading is genuinely
        `H5`-tagged, `32px/600/30px` line-height, color `rgb(20,37,91)`/`#14255b` — not the
        `40px`/`#1d1a4e` this page's generic heading rule had been using. For the accordion
        width, walked the full nested-container chain (`.radiantthemes-accordion` →
        `elementor-widget-container` → column → `e-con-inner`) and found the accordion's column
        is a genuine `60%`-width Elementor column inside a **FAQ-section-specific `1230px`-capped
        container** (wider than the `1140px` boxed container used elsewhere on this page),
        yielding a stable `718px` accordion width at any viewport at or above that cap — nothing
        like the previous `900px` hard-coded value, which was never verified and had been sitting
        there since the original build. Fixed `.acs-faq h2` (`32px`/`#14255b`/`line-height:30px`)
        and `.acs-accordion` (`max-width: 718px`, was `900px`). Re-verified on the reloaded local
        build via `getComputedStyle`/`getBoundingClientRect` — heading and accordion width both
        match exactly.
    16. User shared a screenshot of the reviews carousel showing a longer review's reviewer
        photo/name missing entirely at the bottom of its card. Root cause: `.acs-review-card` had
        a fixed `height: 400px` with `display:flex;flex-direction:column`, so once the review text
        exceeded the space available, the flex children (including the photo/name block) overflowed
        past the visible card box instead of the card growing to fit. Measured the reference's
        equivalent card directly (walked up from the review-text node to the first non-transparent-
        background ancestor): `min-height: 400px`, `overflow: visible`, actual rendered height
        `544.97px` for this specific longer review — i.e. the reference lets cards grow past
        `400px` when content needs it, it doesn't clip. Fixed by changing `.acs-review-card`'s
        `height: 400px` to `min-height: 400px` (mobile `flex: 0 0 100%` override untouched).
        Re-verified on the reloaded local build: the same card now renders at `547.99px` (matches
        reference's `544.97px` within a rounding/font-render tolerance), the reviewer logo/name
        ("Entrepreneur's Organization Gurgaon") are fully visible with no clipping, the neighboring
        shorter card is unaffected (still its own natural height, no forced stretch since
        `.acs-review-track`'s `align-items` was never set to `stretch`), and `.acs-review-viewport`'s
        `overflow: hidden` — needed for the horizontal carousel-slide mechanism — doesn't clip
        vertically since the viewport has no fixed height of its own (it sizes to the tallest
        current child, confirmed via `getComputedStyle`/`getBoundingClientRect` showing
        `viewport.height === track.height === card.height` after the fix). No horizontal overflow
        introduced.
- **Blocked on 1 asset**: `aws-consulting-services-banner1.avif` (hero background, `1920×380`-ish,
  `64028` bytes, confirmed `200` at fetch time via the same-origin browser-tab technique) — **this
  one did land successfully** in `assets/images/` this session (confirmed via `ls`), unlike most
  earlier pages' blocked-asset lists — so no outstanding Downloads-folder blocker remains for this
  page as of this update.
- **Verified this session:** full section-by-section screenshot comparison against the live
  reference (hero, breadcrumb, intro, numbered services, certs/outcomes, process, pricing,
  segments, regions, comparison table, CTA, FAQ, stats, awards, reviews all directly screenshot-
  diffed, not just spot-checked); console clean on reload (`read_console_messages`,
  `onlyErrors:true`); network clean — all `200`/`304`, zero `404`s (`read_network_requests`);
  no horizontal overflow (`scrollWidth === clientWidth` at 1670px); shared header/footer inject
  correctly; FAQ accordion single-open behavior and review carousel both confirmed working.
  Header/footer nav links for this page (`js/header.js` mobile menu, `js/footer.js`) fixed from
  dead `#aws-consulting-services` anchors to the real `aws-consulting-services.html` link, same
  pattern as every prior page.
- **NOT yet verified:** mobile/tablet responsive breakpoints (carried over structurally from the
  established pattern, not freshly re-measured against this page's own reference at narrower
  widths — this page in particular has several genuinely new responsive components: the
  2-column certs grid, the 2-column pricing/segments/regions grids, and the comparison table's
  horizontal-scroll behavior on mobile, none of which have an exact precedent from earlier pages);
  hover states; FAQ keyboard accessibility.
- **Next action:** full tablet/mobile viewport pass (768px, 480px, 390px, 360px) for the new
  2-column components listed above, then update this section to "Previous completed page" once
  that's done. (All three padding-fix rounds above are desktop-only so far — the mobile/tablet
  pass should also re-check that none of the corrected paddings collapse awkwardly at narrow
  widths.)

## Previous completed page

- **Reference:** https://www.cloudconverge.io/infrastructure-management-services/
- **Local target:** `infrastructure-management-services.html`
- **Last updated:** 2026-07-31
- **State:** New page built from scratch (`ims-*` class prefix), reusing established
  `cloud-services.html` patterns almost verbatim (this page shares the exact same Elementor
  widget IDs for its 3-card grid component — `elementor-element-e66ef7c`/`fe75aea`/`8dc3299` —
  confirming it's the same site-wide reusable template). Verified via CSSOM/computed-style
  comparison against the live reference (the `computer` tool's `screenshot`/`zoom` actions were
  both down for the entire session — timing out on every tab, not page-specific — so this build
  was verified via direct `getBoundingClientRect`/`getComputedStyle` diffing instead of rendered
  screenshots; a full screenshot pass is still owed once the tool recovers).
  - **Section order:** breadcrumb → H1 "IT Infrastructure Management Services" → subtitle →
    4-paragraph center-aligned intro (no drop-cap actually rendered despite a
    `elementor-drop-cap-view-stacked` class name in the reference's injected widget style — no
    `.elementor-drop-cap` element exists in the markup) → **two separate 3-card grids** (Service
    Desk/Help Desk/Desktop Engineering/ITSM, then Environment Management/Database
    management/Network Management) → H2 "Other Factors to consider:" (40px/600/navy) → a
    **2-column, 5-item-each cardless list** (Offer Improved Solutions.../Consulting...) reusing
    the `cls-focus-grid`/`cls-growth-grid` stacked-heading-paragraph pattern → stats banner (70+
    Happy Customers/100+ Project Done/100% Clients Satisfied/50+ Team Members, reused verbatim)
    → Industries We Serve (single image, reused verbatim) → Awards & Recognition (4 logos,
    reused verbatim) → Client Reviews (same 6-review carousel, same order as
    `cloud-services.html`: Tom Wyman → Richard Heller → Samuel Correns → Kabu Projects →
    Entrepreneur's Organization Gurgaon → Barry Sarnoff). No FAQ, no consultation form, no
    top banner image — genuinely simpler top-level structure than the Shopify pages, matching
    `cloud-services.html`'s shape.
  - **Important discovery this session — the 3-card grid's real padding source**: initial
    `getComputedStyle` reads on the heading/text-editor widgets themselves returned `0px`
    padding (as they did on a much earlier pass over `cloud-services.html`, before the user
    supplied the correct measured values directly). Digging deeper via `getBoundingClientRect`
    text-inset measurement (not `getComputedStyle`) proved the real padding — `30px 30px 20px
    30px` on the heading, `0 30px 20px 30px` on the paragraph — genuinely exists and matches
    `cloud-services.html` exactly; it lives on an intermediate `elementor-inner-section` wrapper
    around each heading/paragraph (`sec1`/`sec2` in the widget-wrap), not on the leaf widget
    elements or their `.elementor-widget-container`. Confirmed once via direct CSSOM
    `cssRules` text search scoped to this page's own `.elementor-20450` prefix (not
    `.elementor-20068`, since each page has its own copy of the shared widget IDs with its own
    page-scoped custom CSS) — the padding rule literally reads
    `.elementor-20450 ... elementor-element-fdf05c2 { padding: 30px 30px 20px; }` (an
    inner-section ID, not the leaf heading/text IDs). **Lesson for future pages:** don't trust a
    single `getComputedStyle` read on the leaf widget as proof of "no padding" — check for
    nested `elementor-inner-section` wrappers and measure actual rendered text insets via rects
    before concluding a value is zero.
  - Also discovered: each card's image is only *approximately* bottom-aligned across a row (the
    reference achieves this via per-card custom fixed heights on the paragraph's inner-section,
    authored per exact line-count in the WYSIWYG editor — not a generalizable value). Reproduced
    the same visual effect the robust, viewport-safe way already established on
    `cloud-services.html`: `display:flex;flex-direction:column` on the card + `margin:auto auto 0`
    on the image, which self-adjusts regardless of paragraph line-wrap instead of copying
    fragile per-card pixel heights.
  - Confirmed the intro paragraphs are **center-aligned** here (unlike `cloud-services.html`'s
    left-aligned intro) — a real per-page difference, not copied blindly.
  - Confirmed via `get_page_text`: the "Offer Improved Solutions" 5-item list and the
    "Consulting" 5-item list are **both inside the same one 650px-tall section**, side by side as
    two 570px columns (not two separate stacked sections) — `get_page_text`'s article-content
    extraction silently skipped the two 3-card-grid sections entirely (their headings/paragraphs
    never appeared in that dump even though they're genuinely visible), reinforcing this
    project's standing lesson that `get_page_text` cannot be trusted alone for full section
    coverage — direct DOM `textContent` walks over each top-level Elementor section are required.
  - Copy is reproduced verbatim including the reference's own typo ("We guarantee quality
    quality service...", duplicated word in the source copy) — this is replication, not
    copy-editing.
- **Blocked on 7 assets**: `service-desk-768x472-1.webp`, `desktop-engineering-768x472-1.webp`,
  `ITServiceManagement-768x472-1.webp`, `ITEnvironmentManagementimage-768x472-1.webp`,
  `database-2.webp`, `networkmanagement.webp` (all `350×215` card images) plus
  `infrastructure-monitoring.webp` (`1920×380` hero banner background, found in a follow-up fix
  — see below) — all fetched via the same-origin browser-tab + `fetch().then(blob)` + synthetic
  `<a download>` technique, all confirmed `200`/non-zero size at fetch time — are sitting in the
  user's real Downloads folder and need to be moved into `assets/images/` before the banner and
  the two 3-card grids can be visually confirmed locally — currently resolve as broken/incomplete
  (`naturalWidth: 0`) via direct `<img>` inspection.
- **NOT yet verified**: rendered screenshot comparison at any viewport (blocked on the
  `computer` tool's `screenshot`/`zoom` actions, both timing out for the entire session on every
  tab tried, reference and local alike — a tool-wide outage, confirmed not page-specific);
  mobile/tablet responsive breakpoints (CSS breakpoints were carried over from
  `cloud-services.html`'s already-established values, not freshly re-measured against this
  page's own reference at narrower widths); hover states on the two 3-card grids and the stats
  section; review-carousel drag/autoplay interaction (structurally identical to
  `cloud-services.html`'s, exercised only via the carousel's own JS-driven initial clone-build,
  not a manual drag test).

### Follow-up fix: missing hero banner

The user reported the hero banner was missing entirely. Root cause: the reference's
`.wraper_inner_banner` (`380px`, `background-image: infrastructure-monitoring.webp`,
`background-size: cover`, `50% 50%`) is a **theme template element that lives outside the
Elementor content root** (`data-elementor-id="20450"`), so the original section-by-section audit
— which only walked `root.children` — never saw it, the same class of miss documented on the
`shopify-support-and-maintenance-services.html` session. Confirmed via
`document.querySelectorAll('[class*="banner" i]')` against the live reference, and confirmed the
same `≤767px` responsive tier as every other page's banner (`height: 320px`,
`background-position: 40% 50%`) via `CSSMediaRule` enumeration. Added `<div class="ims-banner">`
right before the breadcrumb `<nav>`, with the matching `.ims-banner` CSS (desktop + mobile tier).
Asset `infrastructure-monitoring.webp` (`1920×380`, `25606` bytes) fetched via the same-origin
browser-tab technique (`200`, confirmed) — **not yet moved into `assets/images/`**, same
Downloads-folder limitation as the page's other 6 blocked assets. Verified locally: the banner
div renders at exactly `379.99px` height (matches reference), currently blank pending the asset
move.

**Lesson reinforced**: always check for theme-level `.wraper_inner_banner`/similar elements
*outside* the Elementor root on every new page before concluding "no banner here" — a plausible
section order found inside the Elementor content isn't proof nothing sits above it in the DOM.

### Files added/changed (this task)

Files added: `infrastructure-management-services.html`,
`css/pages/infrastructure-management-services.css`,
`js/infrastructure-management-services.js`.

Files changed: `js/header.js` (1 href — mobile mega-menu link; the desktop mega-panel link was
already correct, pointing at this page, from an earlier session) and `js/footer.js` (1 href) —
the dead `#infrastructure-management-services` anchors now point at the real page.

Assets fetched via the same-origin browser-tab + fetch/blob/download technique this session
(confirmed `200` status and non-zero size at fetch time, **not yet confirmed landed** in
`assets/images/` — the same Downloads-folder limitation as every earlier page in this project):
`service-desk-768x472-1.webp`, `desktop-engineering-768x472-1.webp`,
`ITServiceManagement-768x472-1.webp`, `ITEnvironmentManagementimage-768x472-1.webp`,
`database-2.webp`, `networkmanagement.webp`. Reused without copying:
`icon-maintenance.svg`, `icon-project-done.svg`, `icon-design-thinking.svg`,
`webapp-custom-applications.svg`, `industries-sectors.webp`, `award-clutch.png`,
`award-app-development.png`, `award-goodfirms.png`, `award-microsoft.webp`, `tom-wyman.webp`,
`richard-heller.webp`, `samuel-correns.webp`, `kabu-projects-logo.webp`,
`entrepreneurs-organization-gurgaon.webp`, `barry-sarnoff.jpg`.

### Verified this session

- Console: no errors on repeated reload (`read_console_messages`, `onlyErrors:true`).
- No horizontal overflow at 1670px (`document.documentElement.scrollWidth ===
  document.documentElement.clientWidth`).
- Shared header/footer inject correctly (`#site-header-placeholder`/`#site-footer-placeholder`
  both populated) and `window.initSite` is defined and ran.
- Review carousel JS initialized correctly: clone-based infinite loop confirmed via DOM order
  (last 2 originals cloned to the front, all 6 originals, first 2 cloned to the back — matches
  the established `cloud-services.js`-derived pattern).
- All non-blocked content spot-checked against the reference via direct text/attribute
  comparison: both 3-card grids' headings/paragraphs, the 2-column 10-item factors list, stats
  labels, industries/awards headings, and the review order all match exactly.
- `node --check` passes on `js/infrastructure-management-services.js`, `js/header.js`,
  `js/footer.js`.

### Exact next action

Once the `computer` tool's `screenshot`/`zoom` actions recover, run a full rendered
screenshot-comparison pass against the live reference (desktop first, then the 9 required
viewports), and once the user moves the 6 blocked images into `assets/images/`, re-verify the
two 3-card grids visually (image presence, bottom-alignment, hover lift/border-color/shadow).

## Previous completed page

- **Reference:** https://www.cloudconverge.io/cloud-services/
- **Local target:** `cloud-services.html`
- **Last updated:** 2026-07-31
- **State:** Built from scratch (`cls-*` class prefix) and iterated through multiple rounds of
  user feedback, all resolved:
  1. Migrate section ("Application migration to Cloud" / "Cloud app development") had both
     columns built with a uniform wrong widget order; fixed by measuring each column's true
     per-widget DOM order separately (column 1: image→heading→list; column 2:
     heading→paragraph→subheading→list→image) and adding the `move-image-left-right`-equivalent
     hover nudge (`.cls-migrate-img:hover { transform: translate3d(-10px,0,0); }`) on the image
     WRAPPER, matching the reference's actual hover-class target.
  2. The 3-card grid (Application Modernisation/Application Replatforming/AWS Azure & GCP) was
     missing the reference's full-card hover lift, border-top-color change, and box-shadow —
     added `border-top: 4px solid #fff` → `rgb(30,78,196)` on hover, `box-shadow: 0 14px 46px
     rgba(0,26,87,0.08)`, `border-radius: 4px`, and `transform: translate3d(0,-5px,0)` on hover
     (0.4s cubic-bezier(0.2,0,0.3,1)), matching the reference's `img-box-hover-effect` class
     exactly.
  3. Card internal padding was wrong (built with 0 padding, guessed margins) — corrected to the
     reference's real measured values: heading `padding: 30px 30px 20px 30px`, paragraph
     `padding: 0 30px 20px 30px`, both with `margin: 0` (values supplied directly by the user
     from their own DevTools inspection, then confirmed independently via
     `getBoundingClientRect` text-inset measurement).
  4. The 3-card grid's outer spacing was wrong — cards touched the section's outer edges with a
     40px gap between them, when the reference actually insets each row 15px from the container
     edge with 30px gaps and fixed 350px card widths. Root cause: a higher-specificity
     `.cls-page .container { padding: 0 15px }`-canceling rule at `min-width:1200px` was beating
     the single-class `.cls-services-grid` selector; fixed by adding a `.cls-page
     .cls-services-grid` override.
  5. The 3 cards' images were not bottom-aligned when paragraph lengths/image heights differed —
     fixed via `display:flex;flex-direction:column` on the card + `margin:auto auto 0` on the
     image, confirmed via `getBoundingClientRect` showing identical `articleBottom`/`imgBottom`
     across all 3 cards afterward.
  6. Breadcrumb background was transparent instead of the reference's `#fbfbfb`; H1 was
     inheriting `line-height:26px` from a shared base rule despite `font-size:45px`, collapsing
     the gap to the subtitle below to 0 — fixed with an explicit `line-height: normal` override
     scoped to `.cls-hero h1`.
- **Verified:** no console errors; header/footer inject correctly; no horizontal overflow at
  1685/1670px; all corrected values re-confirmed via `getBoundingClientRect`/`getComputedStyle`
  after each fix. **Not yet screenshot-verified at mobile/tablet widths** (carried over from the
  original build's approximate `1199px`/`991px`/`767px` breakpoints, same as most other pages in
  this project pending a dedicated mobile/tablet pass).

### Files added/changed

Files added: `cloud-services.html`, `css/pages/cloud-services.css`,
`js/cloud-services.js`.

Files changed: `js/header.js` (2 anchors — desktop mega-panel + mobile menu) and `js/footer.js`
(1 anchor) — the dead `#cloud-services` anchors now point at the real page.

Assets fetched via the same-origin browser-tab + fetch/blob/download technique (all confirmed
already landed in `assets/images/` this session, no manual move needed — unlike every other page
in this project so far): `cloud-services-banner.webp`, `cloud-application-modernisation.webp`,
`cloud-application-replatforming.webp`, `cloud-aws-azure-gcp.webp`,
`cloud-application-migration-infographic.webp`, `cloud-app-development.webp`. Reused without
copying: `industries-sectors.webp`, `icon-maintenance.svg`, `icon-project-done.svg`,
`icon-design-thinking.svg`, `webapp-custom-applications.svg`, 4 award logos, 6 review-person
images (same order as this page continues to use: Tom Wyman → Richard Heller → Samuel Correns →
Kabu Projects → Entrepreneur's Organization Gurgaon → Barry Sarnoff).

## Previous completed page

- **Reference:** https://www.cloudconverge.io/shopify-support-and-maintenance-services/
- **Local target:** `shopify-support-and-maintenance-services.html`
- **Last updated:** 2026-07-31
- **State:** New page built from scratch (`ssm-*` class prefix) and now screenshot/DOM-verified
  section by section against the live reference. Two real structural bugs were found and fixed
  during verification that the initial build had missed:
  1. **A decorative top-of-page dark banner was missing entirely.** The reference's inner-page
     template (`.wraper_inner_banner`, shared by all service pages, confirmed also present on
     `shopify-migration-services.html`'s reference) renders a `380px` full-bleed background
     image (`Shopify-2.webp`, no text overlaid — the "Shopify Partners / Maintenance / SEO and
     Content Management / Performance Optimization / Product Management" graphic is baked into
     the image itself) directly above the breadcrumb. My first build skipped straight to the
     breadcrumb, so the shared header's default transparent-background/white-nav-text state
     (designed to overlay exactly this kind of dark hero image) had nothing dark to sit on and
     was invisible. **Wrong first fix**: initially patched the header to force a permanent
     white-bg/black-text state, reasoning "this page has no dark hero." That reasoning was
     wrong — reverted it once the missing banner was found, and added
     `<div class="ssm-banner">` (height `380px`, `background-size:cover`,
     `background-position:50% 50%`) instead, restoring the shared header's normal behavior.
     Asset fetched as `shopify-support-maintenance-banner.webp` via the same-origin
     browser-tab technique — **not yet moved into `assets/images/`** (same Downloads-folder
     limitation as every prior asset this project has needed); confirmed via a temporary dark
     placeholder fill that the header's 6 nav links render correctly in white once something
     dark sits behind them.
  2. **"Six Reasons to Choose Our Shopify Maintenance Services" was built as a plain
     text-only 3×2 grid with no icons, left-aligned.** The reference actually has a 35px solid
     blue (`rgb(30,78,196)`) FontAwesome-solid icon above each centered title+paragraph
     (check-circle/hourglass/clock/hands-helping/laptop-code/cogs, in that order), and — more
     subtly — the reference's 6 items are laid out **column-major** (3 Elementor columns of 2
     stacked widgets each: col1=[Proven Expertise, Round-the-Clock Support], col2=[Timely
     Solutions, Long-Term Commitment], col3=[Reliable Developments, Transparent Workflow]),
     confirmed by comparing DOM order against the visual screenshot grid position. Fixed by
     adding inline SVG icons captured directly from the reference's own rendered `<svg>` path
     data to each `<article>`, and switching `.ssm-reasons-grid` from a plain
     `grid-template-columns:repeat(3,1fr)` (which fills row-major, giving the wrong visual
     order) to `grid-template-columns:repeat(3,1fr); grid-template-rows:repeat(2,auto);
     grid-auto-flow:column;` — this reproduces the column-major visual order with zero HTML
     reordering, since the underlying DOM/content order was already correct. Title styling
     corrected from an assumed `20px/600/navy` to the reference's actual measured
     `16px/400/#191919` (same as its own paragraph — no visual weight distinction beyond the
     icon and centering). Responsive breakpoints updated to match: 2-column tablet tier now
     uses `grid-template-rows:repeat(3,auto)` (2 cols × 3 rows for 6 items), mobile tier reverts
     to plain `grid-auto-flow:row` (order is identical for a single column).
  3. **Confirmed correct, no change needed**: the 3-level breadcrumb (Home/Services/current, a
     separate visible Elementor icon-list widget — distinct from the theme's own hidden
     2-level `#crumbs` auto-breadcrumb, which is `display:none` on the live reference), the
     8-item "Our Shopify Maintenance and Support Services" grid (genuinely no icons), the
     "Shopify Website Maintenance Steps" list (genuinely no icons), and all three
     `.ssm-illustration` images (`key-tasks-of-shopify-maintenance.webp`,
     `shopify-2-1.webp`, `cc-shopify-maintenance.webp` — all single flat images, not
     HTML/CSS-drawn diagrams, and all three already present locally and resolving 200).
- **Verified this session:** no console errors (one unrelated browser-extension warning only);
  every page-specific asset except the new banner image resolves 200/304 via network-request
  capture and `HEAD` fetch; FAQ accordion is single-open (programmatic test); consultation form
  honeypot+success works (programmatic test); no horizontal overflow at 1440/1920px (`document
  Element.scrollWidth === clientWidth`); the fixed "Six Reasons" grid now visually matches the
  reference exactly at desktop width (icons, colors, column-major order, centering) via direct
  screenshot comparison.
- **Blocked on 1 asset:** `shopify-support-maintenance-banner.webp` (the new top-of-page dark
  banner background, `1920×380`, `31360` bytes, `image/webp`) is sitting in the user's real
  Downloads folder and needs to be moved into `assets/images/` before the banner/header-overlay
  fix can be visually confirmed locally — currently 404s, causing the header's white nav text to
  render on a blank white background until the file is moved.
- **NOT yet re-verified**: full mobile/tablet screenshot pass (the `resize_window` tool did not
  reliably change this tab's rendered viewport this session — same long-standing environment
  limitation documented on every earlier page — `document.documentElement.clientWidth` stayed
  pinned regardless of the requested width), hover states on the FAQ/awards/reviews sections,
  and the review carousel's drag/autoplay behavior with only 2 original cards (structurally
  identical clone-based loop logic to every other page's carousel, not separately exercised this
  session).

### Files added/changed (this task)

Files added: `shopify-support-and-maintenance-services.html`,
`css/pages/shopify-support-and-maintenance-services.css`,
`js/shopify-support-and-maintenance-services.js`.

Files changed: `js/header.js` and `js/footer.js` — one dead
`#shopify-support-and-maintenance-services` anchor each, now pointing at the real page.

Assets fetched via the same-origin browser-tab technique this session (confirmed 404 locally,
pending manual move from Downloads): `shopify-support-maintenance-banner.webp`. Reused without
copying: `icon-maintenance.svg`, `icon-project-done.svg`, `icon-design-thinking.svg`,
`webapp-custom-applications.svg`, `award-clutch.png`, `award-app-development.png`,
`award-goodfirms.png`, `award-microsoft.webp`, `kabu-projects-logo.webp`, `samuel-correns.webp`.
Already-present page-specific images (fetched a prior session, confirmed landed and resolving
200 this session): `key-tasks-of-shopify-maintenance.webp`, `shopify-2-1.webp`,
`cc-shopify-maintenance.webp`.

### Lesson for future pages

Don't assume a "no icons here" or "no dark hero here" conclusion from a single
`get_page_text`/DOM-search pass — both false negatives found this session (missing banner
section, missing six-reasons icons) came from an incomplete initial audit that stopped once
*a* plausible structure was found, rather than checking whether the shared header's *default*
behavior (transparent + white nav text, tuned for dark-hero pages) actually made sense for the
page as first built. When the shared header looks broken on a new page, treat that as a signal
to re-check whether a hero/banner section is missing, not just as a reason to override the
header itself.

### Follow-up fix: mobile justify text + breadcrumb wrap/font-size

The user flagged (screenshot, ~mobile width) that some paragraphs should be justified on
mobile but weren't, and that the breadcrumb looked different from the reference on mobile.
Verified against the live reference via the same-origin nested-iframe technique at exactly
767/768px to find the real breakpoint (confirmed `≤767px`, matching this project's established
convention):

- **Text-align**: the hero's two intro paragraphs (`.ssm-hero-copy > p`), the 8-item services
  grid descriptions (`.ssm-services-grid p`), and the 4-item maintenance-steps descriptions
  (`.ssm-steps-list p`) are `text-align: left` at desktop but switch to `justify` at `≤767px`
  on the reference — confirmed via `getComputedStyle` at both 768px (`left`) and 767px
  (`justify`). The six-reasons descriptions stay `center` at every width (already correct from
  the earlier icon-grid fix). FAQ answers and review quotes stay `left` at every width
  (confirmed unaffected). Added a `≤767px` rule for the three justified selectors.
- **Breadcrumb**: two real bugs, not just a missing mobile override. (1) The breadcrumb's
  `font-size` was never set at all (`14px` measured on the reference at desktop, defaulting to
  `16px` — inherited body size — in my build), and drops to `12px` at `≤767px` on the
  reference. (2) `.ssm-breadcrumb-list` had `display: flex` with no `flex-wrap`, defaulting to
  `nowrap` — the reference is `flex-wrap: wrap`, which is what lets "Home / Services" sit on
  one line and the (long) current-page title wrap to a second line at mobile widths instead of
  forcing one long unbroken line. Added `flex-wrap: wrap` and `font-size: 14px` to the base
  `.ssm-breadcrumb-list` rule, plus `font-size: 12px` at `≤767px`.

Verified after the fix via the same-origin nested-iframe technique at 390px on the local build:
breadcrumb now wraps to two lines (Home/Services on line 1, title on line 2) at 12px, all three
paragraph groups now justify, no horizontal overflow.

### Follow-up fix: banner height at mobile

The user then asked to check the top banner's height on mobile. The banner asset
(`shopify-support-maintenance-banner.webp`) had been moved into `assets/images/` by this point,
which made a real visual check possible for the first time. Re-verified the reference via the
same-origin nested-iframe technique (this is also what caught that the *previous* session's
"confirmed same 380px height down to 480px width" check had been a false positive — it had used
`resize_window` on a live tab, which this project has repeatedly found does not reliably change
the true rendered viewport; the iframe technique is the only one confirmed accurate for this
environment). Real reference values, checked at 1024/880/768/767/480/390/360px:
`height: 380px`/`background-position: 50% 50%` for every width **down to and including 768px**,
then a real breakpoint at `≤767px` drops to `height: 320px`/`background-position: 40% 50%` for
every narrower width tested (767 down to 360 — one flat mobile value, not a sliding scale).
Added both values to the existing `≤767px` block in `.ssm-banner`. Re-verified on the local
build at 768/767/480/390/360px: exact match at every width, no overflow, and confirmed visually
via screenshot — banner photo, header overlay (white nav text/logo legible against the now-real
image), and two-line breadcrumb all render correctly together for the first time this session.

## Previous completed page

- **Reference:** https://www.cloudconverge.io/shopify-migration-services/
- **Local target:** `shopify-migration-services.html`
- **Last updated:** 2026-07-31 (follow-up session — hero fix + missing section images)
- **State:** Hero background image landed and three real bugs found/fixed by direct CSSOM
  measurement against the live reference (not just a visual re-look):
  1. **Hero content column was too wide** (`640px` guessed vs. the reference's real 2-column
     Elementor layout: two `50%` columns inside the standard `1140px` container, text column
     `570px` with `padding:10px 50px 10px 10px`, i.e. effective text width `510px`). Restructured
     the hero markup to `.container.shpm-hero-container > .shpm-hero-inner` (was a single div
     wearing both classes) so the text column can be narrower than the boxed container without
     fighting its own centering — this is why the graphic was rendering as if colliding with
     "Migration Services" before the fix.
  2. **Hero subtitle font-size was wrong** (`32px/1.3` guessed vs. measured `42px/52px`
     line-height) — confirmed via `getComputedStyle` on the exact `elementor-element-ec75058`
     heading widget, not eyeballed.
  3. **Entire responsive hero cascade was approximated, not measured** — replaced with the exact
     authored breakpoints read via `document.styleSheets` CSSOM walk on
     `elementor-element-6aae411`: base `background-position:-420px 0`/`padding:160px 0`;
     `min-width:2400px` → `center center`/`180px 0 120px`; `max-width:1366px` → `center center`;
     `max-width:1024px` → **swaps to a completely different, dedicated portrait mobile image**
     (`shopify-migration-services-banner-mobile1.avif`, 600×900) at `center top`/`cover`,
     `padding:600px 20px 32px` (huge top padding reveals the image above the text — this
     "image-stacks-above-text-via-padding" pattern did not exist in the previous build at all);
     `max-width:880px` → `padding:500px 20px 0`; `max-width:767px` → `background-size:contain`,
     `padding:340px 20px 30px`. Text elements (badge/H1/subtitle/CTA) also got their real
     measured `≤767px` padding/font-size overrides (badge `14px 30px`, H1 `28px/42px`, subtitle
     `22px/26px`, CTA `14px 30px`), replacing guessed `991px`/`767px` values.
  4. **"Key Benefits of Our Migration Services" and "Industries We Serve" were built as
     text-only, image-less sections** — the user caught this. The reference actually renders
     both as **one single 2-column Elementor section** (`elementor-element-88ba067`), each
     column an image + heading + intro + 5-item dot list. Restructured the two previously
     separate full-width `.shpm-benefits`/`.shpm-industries-text` sections into one
     `.shpm-benefits-industries` section with a `.shpm-bi-grid` (CSS grid, stacks to 1 column
     at `≤1199px`), added both `<img>` elements (fetched below), `border-radius:10px`, and a
     `flex order:-1` mobile-only swap on the "Key Benefits" image so it moves above the heading
     at `≤767px` — this reproduces the reference's own duplicate-widget-with-responsive-
     visibility-classes trick (one image hidden-desktop/shown-mobile at the top, a second
     identical image hidden-mobile/shown-desktop at the bottom) without duplicating the image
     element, matching the same CSS-`order` reordering technique already used for the mobile
     services-column swap on `shopify-integration-services.html`.
  5. **Sitewide bullet-style bug found while fixing #4**: every `icon-list` widget on this page
     (the intro's "Core components…" list, "Key Benefits", "Industries We Serve") actually
     renders a plain filled-circle SVG bullet (`e-fas-circle`, 6px, black) with `black`/`500`-
     weight bold lead-ins — not the navy dash-bullet (`—`, `700`-weight navy bold) originally
     built. Confirmed via `getComputedStyle` on the reference's actual `<li>`/`<strong>` nodes
     for two different lists, both agreeing. Since a same-styled `.shpm-dot-list` class (6px
     circle, correct position) already existed in this stylesheet for the technical-grid
     section, all three affected lists were switched from `.shpm-dash-list` to `.shpm-dot-list`
     and the now-fully-unused `.shpm-dash-list` rule block was deleted (confirmed zero remaining
     references first). The shared `.shpm-dot-list li strong` rule itself was also corrected
     from `700`/navy to `500`/black to match.
- **Verified so far:** local build at 1685px browser width now visually matches the reference
  hero almost exactly (badge/H1/subtitle/paragraph/CTA position, graphic position/scale/gap from
  text) and the benefits/industries section (bullet style, image positions, both images loading,
  no broken-image icons, no console/network errors on any page-specific asset at this width).
- **Blocked on 1 remaining asset:** `shopify-migration-services-banner-mobile1.avif` (600×900,
  fetched via the same-origin browser-tab technique, browser download triggered — same
  Downloads-folder limitation as every other asset this project has needed) still needs to be
  moved into `assets/images/` by the user before the `≤1024px` hero tier can be verified.
  `shopify-migration-services-banner3-1.avif` and both `key-benefits-of-dur-migration-services.png`
  / `industries-we-serve2.avif` were fetched the same way and **have already been moved into
  place and confirmed rendering** this session.

### New class prefix: `shpm-*`

This is by far the most content-dense page built this project — heavy SEO/AI-search-optimized
copy (explicit "E-E-A-T principles" mention in the copy itself) with several structural
patterns not seen on any other CloudConverge page:

- **A genuine HTML `<table>`** for "Comparison: CloudConverge vs. DIY vs. Generalist Agencies"
  (7 rows × 4 columns: Feature/CloudConverge/DIY Apps/Generalist Agencies) — confirmed via
  direct DOM read (`querySelectorAll('table')`) rather than assumed to be a styled grid.
  Measured directly: navy header row `rgb(11,61,145)` white text, alternating body-row
  stripes `rgb(244,249,255)`/white (the striping lives on the `<tr>`, not the `<td>` — an easy
  place to get the selector wrong), `15px`/`15px 12px` cell padding, whole table on a pale
  `rgb(234,243,251)` section background. Wrapped in `.shpm-compare-scroll{overflow-x:auto}`
  with a `min-width:640px` floor on the table at ≤767px so it scrolls horizontally within its
  own section rather than blowing out the page at mobile widths.
- **A two-column "Technical & Implementation Details" section** — "Platforms We Migrate
  From:" (5 items) and "Data Types We Transfer:" (4 items), each item a bold lead-in phrase
  plus a description, one item literally containing an inline link ("Read our step-by-step
  Magento to Shopify migration guide") mid-sentence. Confirmed via the reference's own DOM
  that this is 5/4 separate single-item `icon-list` widgets per column (not one combined
  list), with a plain filled-circle bullet — reproduced here as one `<ul>` per column for
  simplicity since the visual result is identical.
- **Three separate dash-bullet-list sections** ("Core components…" inside the intro, "Key
  Benefits of Our Migration Services", and a **text-only** "Industries We Serve") all use the
  same bold-lead-in-plus-description list pattern — confirmed this is genuinely different from
  every other page's "Industries We Serve", which uses a single reused illustration image
  (`industries-sectors.webp`) with no bullet list at all. **This page has both**: the text-list
  version near the top or the page, and the image version reused verbatim near the bottom
  (right before Awards) — confirmed via two separate DOM matches for the identical heading
  text "Industries We Serve" at very different scroll positions, not a duplicate-content bug.
- **Hero badge is a small Elementor button widget, not a custom "badge" element** — pill shape
  (`border-radius:16px`), `linear-gradient(128deg, rgb(1,97,252) 0%, rgb(0,94,251) 100%)`,
  uppercase 14px white text, FontAwesome cloud-upload-alt icon, confirmed via
  `.elementor-button-text` DOM search (a direct-equality text search for the badge's own
  uppercase text failed — the actual DOM text is title-case "Expert Shopify Migration" with
  `text-transform:uppercase` applied via CSS, the same "capitalize/uppercase leaks from CSS,
  not the source text" gotcha documented on earlier pages, just hitting `text-transform`
  instead of `text-transform:capitalize` this time).
- **Hero subtitle** ("Zero Downtime, 100% Data Integrity") is a single heading widget with
  `<strong class="scolor">` wrapping just "Zero" and "100%" (cyan `rgb(23,214,251)`), the rest
  plain white — confirmed via direct DOM read rather than assumed from the screenshot.
- **CTA gradient banner reuses the exact same `hed-cta` pattern/colors** already documented on
  `hire-erpnext-developer.html` (`linear-gradient(105deg,#153c9d 0%,#102156 100%)`,
  `padding:110px 0 111px`) — confirmed via `getComputedStyle` match down to the literal RGB
  values, not just a visual approximation. The button text itself
  ("Get Your Free Migration Quote") is a `radiantthemes-custom-button`/`hover-style-five`
  widget, same family as `ecom-connect-btn` on the ecommerce page — its default background
  read as transparent via `getComputedStyle` (likely because the widget carries an
  `elementor-invisible` entrance-animation class that suppresses normal styling until
  scrolled into view in a real browser), so the solid-blue default + `translateY(-5px)` hover
  was carried over from that already-documented pattern rather than re-measured from a
  possibly-pre-animation computed style.
- Reviews reuse the same 6 testimonials as every other page, in **yet another order**:
  Richard Heller → Samuel Correns → Kabu Projects → Entrepreneur's Organization Gurgaon →
  Barry Sarnoff → Tom Wyman — confirmed via `get_page_text` on the live reference rather than
  copying a sibling page's order (this project's now-repeated lesson: never assume review
  order carries over between pages).
- FAQ answers for the 7 initially-collapsed questions (only Q1 renders open by default) were
  captured by force-adding `.show` to every `.collapse` panel on the live reference — the same
  proven technique used on earlier FAQ accordions.

### Technique notes from this session

- **A brand-new, never-navigated tab is required for the same-origin nested-iframe technique
  to work reliably against the live cross-origin reference** — confirmed again this session.
  Reusing a tab that had already loaded a real page and then been `document.open()/write()`-
  overwritten caused the inner iframe to hang at `readyState:"loading"` indefinitely; a fresh
  tab navigated once to a lightweight same-origin URL (`/robots.txt`) before building the
  harness worked every time.
- **Text-node search pitfall**: several `Array.from(document.querySelectorAll('*')).filter(el
  => el.children.length===0 && el.textContent===X)` searches returned empty even though
  `document.body.innerText` clearly contained the target string. Root cause found this
  session: Elementor's text-editor widgets inject an inline `<style>` tag as the *first child*
  of `.elementor-widget-container`, so the container that "should" be a childless text leaf
  actually has `children.length >= 1` (the style tag, sometimes plus the real content wrapper)
  and gets excluded by a strict `children.length===0` filter. Fixed by dropping the
  `children.length===0` requirement entirely and instead searching all elements for
  `textContent.includes(...)`, then picking the shortest (`textContent.length`) match as the
  most specific container — or, more reliably, using `document.createTreeWalker(body,
  NodeFilter.SHOW_TEXT)` to find the actual text node directly and reading
  `.parentElement`, which is immune to this `<style>`-as-child issue entirely. Worth defaulting
  to the TreeWalker approach first on any future page with this same symptom.
- **`computer` tool's `zoom` action stayed reliable this session even during a stretch where
  full-page `screenshot` calls were timing out** ("Script injection timed out") — `zoom` with
  an explicit `region` matching the tab's actual viewport size is a good fallback when
  `screenshot` is misbehaving.

### Files added/changed

Files added: `shopify-migration-services.html`, `css/pages/shopify-migration-services.css`,
`js/shopify-migration-services.js`.

Files changed: `js/header.js` (1 href — mobile mega-menu link) and `js/footer.js` (1 href) —
the dead `#shopify-migration-services` anchors now point at the real page. The desktop nav
link in `js/header.js` was already correct before this session.

Assets needed: `shopify-migration-services-banner3-1.avif` (hero full-bleed background,
fetched via `fetch(...).then(blob)` + synthetic `<a download>` click on a real same-origin tab
— **not yet confirmed landed** in `assets/images/`, the browser-download-to-real-Downloads
limitation documented on every earlier page still applies). Reused without copying:
`industries-sectors.webp`, `award-clutch.png`, `award-app-development.png`,
`award-goodfirms.png`, `award-microsoft.webp`, `richard-heller.webp`, `samuel-correns.webp`,
`kabu-projects-logo.webp`, `entrepreneurs-organization-gurgaon.webp`, `barry-sarnoff.jpg`,
`tom-wyman.webp`.

### Verified this session

- Console: no page errors on repeated reload.
- Network: every reused page-specific image, both fonts, and both scripts resolve 200/304;
  the not-yet-placed hero background image does not even appear as a failed request in this
  environment's network tracker (CSS `background-image` loads for a still-missing local file
  seem not to be logged the same way `<img>` 404s are — not treated as a blocker since the
  gradient fallback already renders correctly).
- No horizontal overflow at 1685/768/390px (`document.documentElement.scrollWidth <=
  clientWidth` at all three, via the same-origin nested-iframe technique for the two narrower
  widths).
- FAQ accordion is single-open (tested clicking item 3 programmatically, confirmed exactly one
  `.is-open` out of 8 items).
- Consultation form: honeypot-empty submit shows the success message and resets fields
  (tested programmatically).
- `node --check` passes on `js/shopify-migration-services.js`, `js/header.js`, `js/footer.js`.

### NOT verified — carried open items

1. **Mobile hero tier (`≤1024px`) cannot be visually confirmed locally yet** — blocked on the
   user moving `shopify-migration-services-banner-mobile1.avif` into `assets/images/` (see
   "Blocked on 1 remaining asset" above). The CSS is already written and measured from the
   reference's own CSSOM (not guessed), but has not been screenshot-compared since the image
   file isn't in place locally yet.
2. **Exact mobile/tablet pixel-matching for the REST of the page** (the rigor applied to
   `shopify-integration-services.html` — CSSOM-extracted breakpoint values, column-reversal
   order swaps, mobile-only `text-align:justify`, etc.) has only been done for the hero and the
   benefits/industries section so far this session. The intro/consult-form grid, "Why Choose"
   block, comparison table, technical two-column list, CTA banner, FAQ accordion, and reviews
   carousel still only have the original approximate `1199px`/`767px` breakpoint values from the
   initial build — **not yet CSSOM-verified against the reference**. This is the next planned
   step (full desktop pass, then full tablet/mobile pass).
3. Hover states on the hero CTA, badge, and the "Get Your Free Migration Quote" CTA banner
   button were not diffed against the reference's own hover treatment (only default state was
   screenshot-compared).
4. The `min-width:2400px` hero tier (background `center center`, `padding:180px 0 120px`) was
   added from the measured CSSOM rule but has not been rendered/screenshot-checked at an actual
   ≥2400px viewport (no 4K check performed yet this session).

## Previous completed page

- **Reference:** https://www.cloudconverge.io/shopify-integration-services/
- **Local target:** `shopify-integration-services.html`
- **State:** Built, screenshot-verified section-by-section against the live reference at
  1685/1920/1440/1366/1280/1024/768/480/390/360px, and iterated on three rounds of user
  feedback (hover-interaction bug, hero-wheel exact-position bug, and a request to make
  mobile/tablet exactly match the reference rather than just "no overflow"). All 4 new page
  images landed and resolve 200. No console errors, no broken page-specific images, no
  horizontal overflow at any tested width, accordion and consultation-form interactions
  verified programmatically. The mobile/tablet responsive tiers now use values measured
  directly off the reference's own compiled Elementor CSS (via `CSSMediaRule` enumeration),
  not reasoned approximations — see "Mobile/tablet exact-match pass" below.
- **Last updated:** 2026-07-30

### New class prefix: `shpi-*`

Section order differs from `shopify-development-services.html` in several ways worth
recording so a future session doesn't assume the two Shopify pages share a layout:

- Hero has **no text overlay** — H1 sits in its own `.shpi-intro` section below the hero,
  paired with a "Free Consultation / Contact Us" form card (reused verbatim from
  `hire-erpnext-consultant.html`'s `.hec-consult-*` pattern, renamed `.shpi-consult-*`,
  including the honeypot field and fake-submit-success JS).
- A 6-item "integration types" icon grid (CRM/PIM/ERP/POS/Shipping/Accounting) sits between
  the intro and the services section — `rgb(247,251,255)` background, 3×2 grid, 64px blue
  (`rgb(38,84,198)`) circle icons with inline FontAwesome-solid SVG paths captured directly
  from the reference's own rendered `<svg>` elements (cogs, box-open, briefcase, chart-line,
  shipping-fast, calculator) rather than assumed/approximated glyphs.
- "Our Package Of Shopify Integration Services" (7 items, not the usual even 8) is a
  **freeform 2-column layout**, not a symmetric grid: left column holds 3 text items then an
  illustration image below them; right column holds a hub-diagram image first, then 4 text
  items below it. Confirmed via direct DOM measurement — this is NOT the `shpd-list-grid`
  cardless-grid pattern reused elsewhere, it's asymmetric (3+image / image+4).
- "Why Choose Cloud Converge Shopify Integration Services?" has **no image and no dot-list**,
  unlike `shpd-why` — just an intro line and 3 stacked title+paragraph blocks, left-aligned
  H2 (not centered).
- FAQ is an **8-item** single-open accordion (not 6/7 like other pages), built on the
  `radiantthemes-accordion`/Bootstrap-collapse DOM pattern reverse-engineered from the
  reference: closed rows are white with a black `+`, the open row's whole button gets a
  `rgb(30,78,196)` solid background with white text and a `-` glyph (`::before` content swap).
  All 8 Q&A pairs were captured by force-expanding every `.collapse` panel via
  `classList.add('show')` on the live reference (clicking one-by-one risked losing state
  across the accordion's `data-parent` single-open behavior).
- A "70+ Happy Customers / 100+ Project Done / 100% Clients Satisfied / 50+ Team Members"
  stats banner and an "Industries We Serve" single-image section (both previously built once
  on `custom-web-development.html` as `.cwd-stats`/`.cwd-industries`) are reused **verbatim**
  here (renamed `shpi-stats`/`shpi-industries`), including the same 4 local icon SVGs
  (`icon-maintenance.svg`, `icon-project-done.svg`, `icon-design-thinking.svg`,
  `webapp-custom-applications.svg`) and the same `industries-sectors.webp` image — no new
  assets needed for these two sections.
- Awards & Recognition reuses the exact same 4 local logos as
  `shopify-development-services.html` (`award-clutch.png`, `award-app-development.png`,
  `award-goodfirms.png`, `award-microsoft.webp`) and the same zero-gap 4-column grid pattern.
- **Client reviews reuse the same 6 testimonials as every other service page, but in a
  different order than `shopify-development-services.html`** — confirmed by reading this
  page's own `get_page_text` dump rather than assuming shpd's order: Tom Wyman → Richard
  Heller → Samuel Correns → Kabu Projects → Entrepreneur's Organization Gurgaon → Barry
  Sarnoff (shpd's order starts Samuel Correns/Kabu Projects instead). Lesson reinforced:
  never carry over a sibling page's review order without checking.
- H1 color is `#1D1A4E` on this page, confirmed **different** from
  `shopify-development-services.html`'s own H1 color (`#13255b`) — measured directly rather
  than assumed, consistent with the project's repeated lesson that CloudConverge does not
  use one consistent navy across every service page.

### Bug found via user hover-testing: hover transform was on the wrong element

The user reported "when I hover on the image just the image transitions to left but the
complete card should move a little left." Direct DOM inspection of the reference confirmed
the `move-image-left-right` class (which drives the hover transform) sits on the **widget
wrapper div** (`.elementor-widget-image`), not on the `<img>` itself. My first pass had put
`transition`/`transform` on `.shpi-services-media img`, so only the image content shifted
while the wrapper (and any surrounding whitespace) stayed put. Fixed by moving both the
`transition` and the `:hover` transform to `.shpi-services-media` itself (the wrapper),
matching the reference's actual DOM target.

**Lesson for future pages:** when reproducing a "hover nudge" effect, check which DOM node
the reference's own hover class is attached to (wrapper vs. inner image) — don't assume the
`<img>` is always the transformed element.

### Responsive verification technique for this session: same-origin nested iframe

`resize_window` was confirmed broken again this session (`window.innerWidth`/`outerWidth`
stay pinned at the real window size — 1685px — regardless of the requested width; only
`outerHeight` responds). Found a working alternative: navigate a tab to the **same origin**
as the target page (either `127.0.0.1:5500` for the local build or `cloudconverge.io` for
the reference), then use `document.open()/write()` to replace that tab's document with a
minimal harness containing a single `<iframe>` whose `src` is a same-origin relative/absolute
URL. Because the outer harness and the iframe share an origin, `iframe.contentWindow.innerWidth`
genuinely reflects the iframe's own CSS pixel box (set via the `width`/`height` attributes),
and `iframe.contentDocument` is fully script-accessible for `getBoundingClientRect`/
`getComputedStyle`/DOM interaction — unlike a cross-origin iframe (tried framing the live
`cloudconverge.io` reference directly from a `127.0.0.1:5500` harness; it loaded blank,
presumably `X-Frame-Options`/CSP blocked). Used this to genuinely test
1920/1440/1366/1280/1024/768/480/390/360px on this page's own build (confirmed zero
horizontal overflow at every width, verified column-stacking, icon-grid reflow, stats-grid
reflow, and FAQ/accordion legibility via screenshots at each size) — the first session this
project has managed an actual measured (not just reasoned) responsive pass below desktop
width. Caveat: Live Server's injected auto-reload script occasionally reset the *outer* tab
back to a plain page load between iframe rebuilds (harness had to be recreated a few times
mid-session) — if this happens, just re-run the `document.open/write` harness snippet.

**Follow-up session — mobile/tablet exact-match pass:** the user asked to make mobile and
tablet "exactly the same as the reference," not just overflow-free. Direct cross-origin (and
same-origin-navigated) iframing of the live reference still failed (blank/stuck-loading, see
above), so instead used `document.styleSheets` → `CSSMediaRule` enumeration targeted at
specific Elementor `data-id` attributes to read the reference's own *compiled* responsive CSS
directly — no viewport resize needed at all. This is more precise than screenshots for numeric
values. Extracted and applied:

- **Hero** (`section` id `1f247da`): padding `70px` at ≤1200px, `90px 0 90px 50px` at ≤1024px,
  `0 0 20px` at ≤767px. At ≤767px the two hero columns stack (confirmed via column ids
  `e0c4052`/`41cfb7d`); the section itself gets `min-height: 580px`, `background-position:
  -548px 0`, `background-size: cover`, and the overlay gradient swaps to `linear-gradient(305deg,
  rgb(0,0,0) 20%, rgb(24,19,15) 74%)` at `opacity: 0.66` (desktop is `307deg`/`54–59%`/`0.35`).
  The wheel *widget* (id `ceaa355`, separate from its column) has its own width tiers: `370px`
  fixed at ≤1366px, `100%` of its column at ≤1200px down to 768px, `70%` centered at ≤767px —
  all applied to `.shpi-hero-wheel img` plus a matching `justify-content` swap on
  `.shpi-hero-wheel-media` (flex-end → center).
- **Integration-types icon grid**: confirmed via child-column ids (`0faa1ca`/`133db87`/`8b6204b`
  for row 1, `7afb8b3`/`582af76`/`8c39ab5` for row 2) that each row of 3 wraps as **50% / 50% /
  100%** at 768–1024px (not a symmetric 2-column grid). Reproduced with
  `.shpi-types-grid { grid-template-columns: repeat(2,1fr); } article:nth-child(3n) {
  grid-column: 1/-1; }` at ≤1024px, reverting to a plain 1-column stack at ≤767px. Padding:
  `29px 15px 60px` at ≤1024px, `30px 15px` at ≤767px (both rows' reference values were
  identical/near-identical, safe to merge since this page uses one combined 6-item grid).
- **Services columns** (`d018ac6`/`7f3b564`) and **FAQ column** (`e13bf86`): confirmed already
  full-width-stacked below 1199px as built; only minor padding deltas found (`0`/`0 15px` at
  1024/767) — low visual impact, not separately re-applied given the columns already stack
  correctly.
- **Why-choose column** (`8d17fc4`): no Elementor-level responsive overrides exist at all —
  confirms the existing build needs no change here.
- **Reviews**: switched `.shpi-review-card` from a fixed `flex: 0 0 540px` to a fluid
  `flex: 0 0 calc((100vw - 60px) / 2)` at ≤1024px to guarantee two cards always fit without
  overflow at tablet widths (540px fixed would overflow below ~1130px); ≤767px keeps the
  existing full-width single-card behavior.

Re-verified via the same-origin nested-iframe technique (a **fresh, never-navigated tab** —
reusing a tab that had just loaded the real page and then been `document.write()`-overwritten
left the iframe permanently stuck at `readyState:"loading"` this session; creating a brand new
tab and navigating it to a harmless same-origin URL first fixed this reliably) at all 9 required
widths: 1920 (wheel 500px, no overflow), 1440, 1366 (wheel exactly 370px, no overflow), 1280
(wheel 370px, no overflow), 1024 (icon grid confirmed 469/469/979px per row — the 50/50/100
pattern — wheel 479px, no overflow), 768 (2-column hero intact, icon grid pattern intact,
review cards 354px wide fitting two per row, no overflow), 480/390/360 (hero stacked to one
column, min-height 580px confirmed, wheel ≈70% width confirmed, icon grid single-column, no
overflow at any of the three).

### Files added/changed

Files added: `shopify-integration-services.html`,
`css/pages/shopify-integration-services.css`, `js/shopify-integration-services.js`.

Files changed: `js/header.js` (1 href — mobile mega-menu link) and `js/footer.js` (1 href) —
the dead `#shopify-integration-services` anchors now point at the real page. The desktop nav
link in `js/header.js` was already correct before this session.

Assets fetched via the same-origin browser-tab + ZIP technique (4 files, confirmed landed
and resolving 200 via `fetch(..., {method:'HEAD'})` against every page-specific image url):
`shopify-integration-service-banner-bg.avif` (hero background), `cc-360-wheel-integration-
commerce-edited.png` (500×500 circular integration-hub diagram), `API-intigration4.webp`
(540×382 analytics illustration), `Shopify-API-Integration-Shopify-Integration-USA1.webp`
(520×349 hub diagram). Reused without copying: `icon-maintenance.svg`, `icon-project-done.svg`,
`icon-design-thinking.svg`, `webapp-custom-applications.svg`, `industries-sectors.webp`,
`award-clutch.png`, `award-app-development.png`, `award-goodfirms.png`, `award-microsoft.webp`,
`tom-wyman.webp`, `richard-heller.webp`, `samuel-correns.webp`, `kabu-projects-logo.webp`,
`entrepreneurs-organization-gurgaon.webp`, `barry-sarnoff.jpg`.

### Verified this session

- Console: no page errors. Network: every page-specific image (`HEAD` request) returns 200;
  the ~32 broken-image reports from a naive `naturalWidth===0` sweep are pre-existing shared
  header/footer megamenu-thumbnail issues (documented on earlier pages) plus a lazy-loading
  false-positive on the two `loading="lazy"` services-section images (confirmed fine via
  direct screenshot and a `HEAD` fetch).
- No horizontal overflow at any of the 9 required widths (1920/1440/1366/1280/1024/768/480/
  390/360 — `document.body.scrollWidth <= iframe innerWidth` at every size, via the nested-
  iframe technique above).
- FAQ accordion is single-open (tested programmatically: clicking item 3 leaves exactly one
  `.is-open`).
- Consultation form: honeypot-empty submit shows the success message and resets fields
  (tested programmatically).
- `node --check` passes on `js/shopify-integration-services.js`, `js/header.js`, `js/footer.js`.
- Hero, breadcrumb, intro+form, icon grid, services (freeform 2-col), why-choose, FAQ, stats,
  industries, awards, and reviews all screenshot-matched against the live reference at
  matching scroll positions at 1685px.

### Follow-up fix: hero wheel was top-anchored, reference bottom-anchors it

The user reported (twice) that the mobile hero's wheel position was still wrong — "it's in the
bottom of the hero banner" (meaning: it should be there, and wasn't). This was caught for real
this time because a **fresh, never-navigated tab** finally made the cross-origin same-origin
nested-iframe technique work against the *live reference itself* at mobile width (390px) — the
earlier failed attempts (blank/stuck-loading) were reusing tabs that had already loaded/navigated
once; a brand-new tab avoids whatever race causes the stuck `readyState:"loading"`. Combined with
the `mcp__claude-in-chrome__computer` **`zoom`** action (which, unlike full-page `screenshot`,
kept working throughout this session even when `screenshot` was timing out), this finally produced
an actual rendered image of the reference's mobile hero — confirming the wheel graphic sits low,
near the breadcrumb, not high under the header.

Root cause found via `getBoundingClientRect` on the reference's own `.elementor-container` (the
flex row inside the hero section, `data-id 1f247da`): it is `display:flex; align-items:flex-end`
— **permanently**, not just as a mobile override — so at mobile, where the row wraps into stacked
lines, all slack space accumulates **above** the wheel, not below. My build had instead pushed the
wheel down by a flat `margin-top:70px` from the top, which is not remotely equivalent to true
bottom-anchoring. Also found: the section's `min-height:580px` (previously extracted via CSSOM)
actually renders as the **container's** height, not the section's total outer height — the
section's own rendered height ends up `580 + 20 (bottom padding)  = 600px`, not `580px`. My
`.shpi-hero` had `min-height:580px` directly with `box-sizing:border-box`, which shrank the usable
content box to `580 − 20 = 560px`, 20px short of the true target.

Fixed in `.shpi-hero`/`.shpi-hero-wheel` at `≤767px`:

```css
.shpi-hero { padding: 0 0 20px; min-height: 600px; background-position: -548px 0; background-size: cover; }
.shpi-hero-wheel { display: flex; flex-direction: column; justify-content: flex-end; min-height: 580px; }
.shpi-hero-wheel-media { justify-content: center; padding: 0 10px; box-sizing: border-box; }
```

Verified after the fix via direct `getBoundingClientRect` diff against the reference (both at
390px): wheel-image top offset from hero top **331.18px vs reference's 331.18px** (exact), gap
from wheel-image bottom to hero bottom **20.01px vs reference's ~20px** (exact), wheel image size
**248.8×248.8px both** (exact — this was already correct). Re-confirmed visually via `zoom`
screenshots of both pages side-by-side: wheel now sits low near the breadcrumb on both, background
photo composition matches. No overflow at 390/480.

**Lesson for future pages:** an Elementor section's own `min-height` setting does not necessarily
apply to the section element itself — it can render as the height of the inner `.elementor-container`
flex row instead, with the section's padding added on top of that, not included within it. Don't
assume `box-sizing:border-box` + the extracted `min-height` value on the outer section will
reproduce the reference; verify the actual rendered relationship between container height and
section height with real numbers. Also: a **fresh tab** (never navigated before) is more reliable
than a reused/`document.write()`-overwritten tab for the same-origin nested-iframe technique, for
both the local build and — newly confirmed this session — the live cross-origin reference itself;
and `computer`'s `zoom` action is a more resilient fallback than `screenshot` when the latter is
timing out.

### Follow-up fix: services section H2 was structurally misplaced, causing "two images together" on mobile

The user sent a screenshot (mobile, ~320px, Chrome DevTools) showing the two services-section
illustration images rendering directly adjacent to each other, and said "in the reference site
these 2 images are never together in mobile screen." Investigating via the reference's actual DOM
(columns `d018ac6`/`7f3b564`, same ids used for the earlier services-padding extraction) turned up
a real structural mistake from the original build, not just a missing responsive rule:

- **The "Our Package Of Shopify Integration Services" H2 is not a section-level element sibling to
  the 2-column grid on the reference — it's nested as the *first widget inside column 1*
  (`d018ac6`)**, confirmed directly: `getBoundingClientRect` on the live reference showed column 1's
  top, column 2's top, the H2's top, and column 2's image's top are all **exactly equal**
  (2298.46/2298.46/2308.46/2308.46 at 1685px — the ~10px difference is column padding). My original
  build had the H2 as a `<h2>` sibling *above* `.shpi-services-grid`, which pushed column 2's image
  down to start *below* the H2 instead of level with it — a real desktop layout bug that had gone
  undetected because a screenshot glance doesn't reveal a wrong vertical starting offset when both
  columns still look roughly aligned.
- **The two columns swap visual order via CSS `order` at ≤767px only** — confirmed via
  `getComputedStyle`: at 1024px both columns have `order:0` (natural DOM order: col1 first, col2
  second — matches desktop), but at 390px column 1 (`d018ac6`) gets `order:10` and column 2
  (`7f3b564`) gets `order:9`, i.e. **column 2 renders first at mobile**. Since my build had the H2
  sitting outside/above both columns (always first regardless of column order) and no order-swap
  at all, my mobile stack was: [H2] → [col1: 3 items + image] → [col2: image + 4 items] — putting
  col1's trailing image directly next to col2's leading image, exactly the bug reported.

Fixed both issues:

1. Moved the `<h2 id="shpi-services-title">` in `shopify-integration-services.html` from being a
   sibling of `.shpi-services-grid` to being the **first child of the first `.shpi-services-col`**
   (immediately before its first `<article>`).
2. In `css/pages/shopify-integration-services.css`: removed the H2's own `margin: 0 0 50px` (set to
   `margin: 0`) and changed `.shpi-services-col` from `gap: 30px` / `h3 { margin: 0 0 8px }` to a
   uniform `gap: 20px` / `h3 { margin: 0 0 20px }` — measured directly on the reference (every
   widget-to-widget gap inside the column, title-to-paragraph and paragraph-to-next-title alike, is
   a uniform 20px, not the previously-assumed 30/8 split).
3. Added to the `≤767px` tier: `.shpi-services-col:first-child { order: 2; } .shpi-services-col:last-child { order: 1; }`
   to reproduce the reference's mobile-only column reversal.

Verified after the fix: at 1685px, `h2.top === col2Img.top === col1.top === col2.top` (2053px, all
four), an exact match to the reference's own alignment. At 390px, `getBoundingClientRect` + a
`zoom` screenshot walkthrough confirmed the new stacked order is col2's image → col2's 4 items →
H2 title → col1's 3 items → col1's image — the two images are now separated by all the text
content between them, matching the reference. No overflow at 390/1024/1685.

**Lesson for future pages:** when a section has an asymmetric multi-column layout with a heading
that "looks like" it sits above the columns, don't assume it's a section-level sibling — check
whether the OTHER column's content starts at the same y-coordinate as the heading (not below it).
If they're vertically aligned, the heading is very likely nested inside one of the columns as its
first widget, and that has real consequences for both the exact vertical alignment on desktop and
the stacking order on mobile (since responsive `order` swaps only affect direct children of the
row/grid — a heading living outside the columns can't be reordered along with them).

### Follow-up fix: mobile-only justified body text + breadcrumb font-size

The user flagged two more mobile-only details: body text should be `text-align: justify` on
mobile, and the breadcrumb font-size looked off. Measured directly on the reference at 390px vs.
1685px via `getComputedStyle`:

- Intro paragraphs, services-column paragraphs, and "Why Choose" paragraphs (all
  `.elementor-widget-text-editor` content) are `text-align: left` at desktop but switch to
  `justify` at ≤767px — a genuine mobile-only responsive change, not a permanent style.
- The integration-types icon-grid descriptions (`.elementor-icon-box-description`) are `justify`
  at **both** desktop and mobile — a permanent style I'd never set at all (defaulted to left).
- The FAQ accordion body text stays `left`/`start` at every width — confirmed unaffected, no
  change needed there.
- The breadcrumb link font-size is `14px` at desktop/tablet (1024px) and drops to `12px` only at
  ≤767px.

Fixed in `css/pages/shopify-integration-services.css`: added `text-align: justify` to the base
`.shpi-types-grid p` rule (applies at all widths), and added a `≤767px` block with
`text-align: justify` on `.shpi-intro-copy p`, `.shpi-services-col p`, `.shpi-why-intro`,
`.shpi-why-item p`, plus `.shpi-breadcrumb { font-size: 12px; }`. Verified via `getComputedStyle`
on the local build at both 390px (all five justify, breadcrumb 12px) and 1685px (intro stays
`start`/left, types-grid stays justify, breadcrumb 14px) — matches the reference at both sizes.
No overflow.

### NOT verified — carried open items

1. The rest of the mobile/tablet sections below the hero (icon-grid wrap, FAQ, stats, reviews)
   were verified structurally via `getBoundingClientRect`/computed-style and are known to have zero
   overflow, but were not re-confirmed with an actual rendered screenshot of the reference the way
   the hero and services section now have been — worth a follow-up pass using the fresh-tab +
   `zoom` technique if the user flags anything else. Given two real structural bugs were found in
   sections previously called "screenshot-verified," a full re-pass of every remaining section
   using this same fresh-tab + real-screenshot method (rather than trusting the original
   screenshot-only pass) would be a reasonable next step even without a further user report.
2. Scroll-triggered fade-in animation on the "70+" stats numbers (reference fades them in on
   scroll into view; this build renders them immediately visible, consistent with how other
   pages' equivalent stats sections were already built in this project).
3. Shared header/footer megamenu thumbnail images and footer partner-logo images still report
   `naturalWidth===0` — same pre-existing, out-of-page-scope issue noted on every prior page
   this session.

## Previous completed page

- **Reference:** https://www.cloudconverge.io/shopify-development-services/
- **Local target:** `shopify-development-services.html`
- **State:** Built and screenshot-verified section-by-section against the live reference at
  1670px (hero, intro, annotated illustration, 8-item services list, "Why Cloud Converge"
  row, "Engage Our Shopify Developers" 8-item list, awards, testimonials all pixel-matched).
  One structural bug found and fixed in the "Previous Development Work" carousel (see below).
  **Blocked on 2 of 7 new images**: `shombhob-portfolio-item.webp` and
  `packedwithpurpose-portfolio-item.webp` were fetched into a second zip
  (`shopify-dev-assets-2.zip`) and a download was triggered, but as of this update they have
  not yet appeared in `assets/images/` (confirmed via repeated `ls` checks). The other 5 new
  images (`CC-ecommerce-header.webp`, `shopify-theme-work.webp`,
  `shopify-development-process.webp`, plus the first zip's contents) are already in place and
  verified.
- **Last updated:** 2026-07-30 (later session)

### New class prefix: `shpd-*`

This page reuses the proven "cardless 2-column list" pattern from
`hire-erpnext-consultant.html` for both its 8-item services list and its 8-item "Engage Our
Shopify Developers" list (title + paragraph, no card background/shadow, `minmax(0,550px)`
columns, 20px column-gap / 50px row-gap) rather than the image-card pattern from
`custom-web-development.html`/`mobile-app-development.html` — confirmed via direct DOM
inspection that the reference's `.elementor-heading-title` items here have **no** surrounding
card, unlike those two pages' `mad-service-card`/`cwd-service-card` widgets.

Reused without modification: the 4 award images, and all 6 client-review assets/copy
(reordered to open with Samuel Correns/Kabu Projects, matching this page's own reference
order rather than the cwd/mad/ecom pages' order).

Files added: `shopify-development-services.html`, `css/pages/shopify-development-services.css`,
`js/shopify-development-services.js`.

Files changed: `js/header.js` and `js/footer.js` — each had one dead
`#shopify-development-services` mobile-menu/footer anchor now pointing at the real page. The
three sibling Shopify pages (`shopify-integration-services.html`,
`shopify-migration-services.html`, `shopify-support-and-maintenance-services.html`) are linked
from both the nav and three inline body links but intentionally left unbuilt/dead for now,
consistent with how other pages have linked to not-yet-built siblings.

### Bug found and fixed: "Previous Development Work" carousel structure

Screenshots initially showed a blank white gap where a slide should be, and the user flagged
that the carousel "is not as in the reference." Investigation via the reference's own
`data-settings` JSON (`slides_to_show:"1"`) and measured slide/image rects revealed the real
behavior: this is a **single-slide-per-view** carousel (not 2-up like the `cwd-work`/`mad-work`
pattern I'd assumed from a screenshot). Each image is rendered at its own natural width
(~1450px) inside a full-viewport-width slide (~1650px) with no `width:100%` stretch, so the
*next* slide's image visibly peeks in through the ~200px gap the current image leaves — that's
what made it look like "2 slides visible" in a static screenshot. Rebuilt
`.shpd-work-track figure` from `flex:0 0 50%` + `padding:0 10px` to `flex:0 0 100%` + no
padding, changed the image rule from `width:100%` to `width:auto;max-width:100%`, and changed
the JS carousel's `visible` constant from 2 to a fixed 1 (both in `build()` and the initial
declaration) so the clone-based infinite loop steps by full slide widths. Verified after the
fix: clicking "next" now advances exactly one full-width image at a time with the following
slide's image bleeding in from the right edge, matching the reference's own peek-through
behavior frame-for-frame.

**Lesson for future carousels:** don't infer `slidesPerView` from a static screenshot alone —
an image narrower than its slide container will make two adjacent slides appear
simultaneously even when only one slide is "active." Check the widget's own
`data-settings`/`swiper` config (or measure the delta between consecutive slide-container
rects, not just the images) before assuming a 2-up layout.

### Also caught this session: reused a different bug-diagnosis technique — DOM text search giving false negatives

While auditing this page, several `textContent`/`innerText` searches for known heading text
(e.g. "Some Of Our Previous Development Work") returned nothing via `querySelectorAll` +
`textContent.includes(...)`, even though `document.body.innerText` and the earlier
`get_page_text` output both contained the phrase. Root cause: the real heading text in the
DOM is **lowercase** (`"Some of our previous development work"`) with
`text-transform: capitalize` applied via CSS — the same "capitalize leaks from base styles"
gotcha already documented for other pages, just discovered a different way this time (via a
failed text search rather than a visual wrapping bug). Resolved by using
`document.elementFromPoint()` at the heading's known screen coordinates instead of a text
search, which found the real `H5.elementor-heading-title` element directly. Hardcoded the
properly-capitalized text into the HTML rather than relying on `text-transform`, consistent
with prior pages' fix for this same issue.

### NOT verified — exact next action

1. Confirm `shombhob-portfolio-item.webp` and `packedwithpurpose-portfolio-item.webp` have
   landed in `assets/images/` (from `shopify-dev-assets-2.zip`) and re-check the "Previous
   Development Work" carousel's first and fourth slides once they're real images instead of
   broken-image placeholders.
2. Responsive breakpoints below desktop — same long-standing open item as every other page
   this session; `resize_window` does not change the true rendered viewport in this
   environment.
3. Hover states on the "Engage"/"services" list links and the work-carousel arrows were not
   explicitly diffed against the reference's own hover treatment (only default state was
   screenshot-compared).

### Follow-up fixes after further user screenshot comparison

- **"Previous Development Work" carousel image alignment**: the user reported the reference
  centers each slide's image within its full-width slide box while my build left-aligned it.
  Direct measurement of the reference (`.swiper-slide-active`, `text-align: center` on the
  slide, image symmetrically inset ~100px on both sides of its 1650px slide) confirmed this.
  Fixed by adding `margin: 0 auto` to `.shpd-work-track img` (previously relied on default
  block left-alignment). Verified after the fix: 100.1px gap on both sides, matching the
  reference's own 100px/100px split exactly.
- **Award logos had the wrong spacing model**: built as a `flex` row with a flat `gap: 60px`,
  but the reference is actually 4 equal 25%-width columns (`elementor-col-25`, ~285px each in
  the 1140px container) with **zero gap between columns** — each logo is simply centered
  within its own wide column, which is what creates the visual (uneven, image-width-dependent)
  spacing. Rebuilt `.shpd-award-grid` from `display:flex;gap:60px` to
  `display:grid;grid-template-columns:repeat(4,1fr);justify-items:center` with no gap.
- **"Some of Our Client Reviews" heading was left-aligned**, should be centered — the
  `.shpd-reviews` section (unlike `.shpd-awards`) never had `text-align:center` applied to
  itself or its `h2`. Confirmed centered on the reference via direct DOM query (case-sensitive
  text match failed again due to the same `text-transform:capitalize`-on-lowercase-source
  pattern noted earlier — had to search case-insensitively). Added `text-align: center` to
  `.shpd-reviews h2`.
- **Added the missing hover interaction** on the "Why Cloud Converge" process-diagram image
  (`shopify-development-process.webp`): confirmed the reference wraps it in the same
  `move-image-left-right` class used elsewhere on this page and the ecommerce page
  (`transform: translate3d(-10px,0,0)` on hover, `0.3s ease-in-out`). Added to
  `.shpd-why-media:hover img`.

**Lesson reinforced:** default browser alignment (block-left for images, flex `gap` for
gallery rows) is an easy trap when the reference actually uses `text-align:center` +
zero-gap equal columns, or explicit `margin:auto` — always measure the actual left/right
insets on both sides rather than assuming a "looks roughly centered/spaced" screenshot glance
is exact.

- **"Awards & Recognition" and "Some of Our Client Reviews" headings were oversized**: both
  had been built at `34px/600` (copied from the equivalent headings on other pages), but
  measuring the actual reference elements directly gave `20px/400` for "Awards & Recognition"
  and `26px/400` for "Some of Our Client Reviews" — this page uses noticeably smaller,
  lighter-weight section headings than `custom-web-development.html`/`ecommerce-development-services.html`
  for these two sections specifically, confirmed via `getComputedStyle` on the live reference
  rather than assumed from the other pages' pattern. Fixed `.shpd-awards h2` and
  `.shpd-reviews h2` accordingly.

**Lesson reinforced again:** don't carry over a heading's font-size/weight from a sibling
page's equivalent section just because the content and position look similar — measure each
page's own instance, since CloudConverge's marketing team clearly doesn't use one consistent
type scale for repeated section labels across every service page.

### Also fixed this session: `ecommerce-development-services.html`'s carousel arrows

The user flagged (via screenshot) that the "Why Choose Us" screenshot carousel's prev/next
buttons looked different from the reference. Confirmed on the live reference: its
`.elementor-swiper-button-prev/next` are flat 42×42 chevron icons, `color: rgb(30,78,196)`,
fully transparent background, `border-radius: 0` — not the circular white
`background:rgba(255,255,255,.85)` buttons `.ecom-carousel-arrow` had been built with.
Replaced the `&lsaquo;`/`&rsaquo;` text-character buttons with the same chevron SVG markup
used on the new Shopify page's work carousel, and rewrote `.ecom-carousel-arrow` to drop the
circle/background/font-based glyph entirely in favor of an inline SVG sized 42×42 with
`fill: currentColor`. Verified via screenshot — arrows now render as flat blue chevrons
matching the reference.

## Previous completed page

- **Reference:** https://www.cloudconverge.io/ecommerce-development-services/
- **Local target:** `ecommerce-development-services.html`
- **State:** Complete. The 6 missing page images were extracted from
  `ecommerce-dev-assets.zip` and placed in `assets/images/` by the user; the full
  image-dependent visual QA pass (hero, intro, "Shopping Experience" diagram, "Why Choose
  Us" screenshot carousel) is now done and the page matches the reference. One real bug was
  found and fixed during this pass (see below).
- **Last updated:** 2026-07-30 (final session)

### Bug found and fixed this session: invisible "Connect with Us" button text

Screenshot review showed the `.ecom-connect-btn` CTA rendering as a solid blue pill with no
visible text. `getComputedStyle` showed `color: rgb(30, 78, 196)` — identical to its own
`background-color` — even though `.ecom-connect-btn` itself correctly declares `color: #fff`.
Root cause: `.ecom-intro-copy a { color: rgb(30, 78, 196); }` (added for the inline "Shopify
Migration Services" text link) has specificity (0,2,0), which beats `.ecom-connect-btn` alone
(0,1,0) — and the button is also an `<a>` inside `.ecom-intro-copy`, so the blue link color
silently won and made the button's white text invisible against its own blue background.
Fixed by scoping the intro-copy link rule to exclude the button:
`.ecom-intro-copy a:not(.ecom-connect-btn) { color: rgb(30, 78, 196); }` in
`css/pages/ecommerce-development-services.css`. Confirmed after the fix: computed
`color: rgb(255, 255, 255)` on the button, background unchanged.

**Lesson for future pages:** a contextual selector added for one inline link
(`.section a`) can silently override a differently-styled button that happens to share the
same parent and tag — always re-check computed `color` on buttons/CTAs that live near body
copy links, not just on the button's own declared rule.

### Follow-up fixes after user screenshot comparison (intro section + hover states)

The user compared reference vs. local screenshots of the intro section directly and caught
issues a scroll-position screenshot pass alone had missed:

- **Intro column widths were wrong**, causing different H1/paragraph line wraps than the
  reference. Measured the reference's actual layout: two equal 570px flex columns in the
  1140px container (no gap), media column `padding: 10px` (image renders 550px wide), copy
  column `padding: 10px 10px 10px 50px` (H1/paragraph render at exactly 510px wide). Rebuilt
  `.ecom-intro-grid` from `minmax(0,512px) 1fr` + `gap:60px` to `1fr 1fr` + `gap:0`, with the
  padding moved onto `.ecom-intro-media`/`.ecom-intro-copy` — this now reproduces the
  reference's exact wrap points.
- **`.ecom-intro-copy a:not(.ecom-connect-btn)`** color was still blue (`rgb(30,78,196)`)
  instead of the reference's actual `rgb(0,0,0)` + `underline` on the inline "Shopify
  Migration Services" link (confirmed via computed style on the live, visible instance —
  Elementor duplicates this link in hidden responsive copies, so the first DOM match isn't
  reliable). Fixed color/decoration. Also discovered the earlier `:not(.ecom-connect-btn)`
  exclusion fix had reverted to the plain `.ecom-intro-copy a` selector at some point this
  session (cause unclear — possibly overwritten by a stray earlier edit); reapplied it here
  together with the color/decoration fix.
- **Shopping-experience diagram image had no hover interaction.** The reference wraps this
  image in a `move-image-left-right` class: `transform: translate3d(-10px,0,0)` on hover,
  `transition: 0.3s ease-in-out`. Added the equivalent to `.ecom-shopping-media:hover img`.
- **"Connect with Us" button had no hover interaction either** (only `opacity:0.85`, which
  the user pointed out doesn't match — the reference button's color never changes on hover).
  The reference button's wrapper class `hover-style-five` defines
  `.radiantthemes-custom-button-main:hover { transform: translateY(-5px); }` with a
  `0.3s ease-in-out` transition. Replaced the opacity hover with `translateY(-5px)` and
  changed the base transition from `opacity 0.25s ease` to `transform 0.3s ease-in-out`.
- Added `.ecom-shopping-media img` and `.ecom-connect-btn` to the page's
  `prefers-reduced-motion: reduce` block alongside the two carousels.

**Lesson for future pages:** hover-only interactions (image nudges, button lifts) are
invisible in static screenshots taken without a hover event — the user's own manual
hover-testing caught two real interaction gaps this session that the screenshot-diff and
computed-style passes both missed. Worth deliberately checking every image/button/card in
scope for a `:hover` rule on the reference before calling a section done, not just relying
on default-state comparison.

### ecommerce-development-services.html — what was done

Files added:

- `ecommerce-development-services.html`
- `css/pages/ecommerce-development-services.css`
- `js/ecommerce-development-services.js`

Files changed: `js/header.js` (1 href — the mobile mega-menu link), `js/footer.js` (1 href)
— the dead `#ecommerce-development-services` anchors now point at the real page. Note:
`js/header.js`'s desktop nav link (line ~119) was *already* pointing at the real page
before this session, so only the mobile-menu copy needed fixing this time.

Assets fetched via the same-origin browser-tab + ZIP technique (6 files, not yet confirmed
landed in `assets/images/`): `ecommerceheader.webp` (hero background), `Helmheroshopifyfinal.webp`
(718×923 intro screenshot), `eCommerce-Development-Solutions.webp` (563×563 circular
diagram), `SampleEcommerce2.webp`, `SampleEcommerce3.webp`, `SampleEcommerce4-1.webp` (each
443×1122, the "Why Choose Us" rotating screenshot carousel). Reused without copying (already
local from `custom-web-development.html`/`mobile-app-development.html`): `tom-wyman.webp`,
`richard-heller.webp`, `samuel-correns.webp`, `kabu-projects-logo.webp`,
`entrepreneurs-organization-gurgaon.webp`, `barry-sarnoff.jpg` — this page reuses the
**exact same 6 client reviews, in the same order**, as those two pages.

New body-level prefix used: `ecom-*`. This page's structure doesn't match either the
`mad-*`/`cwd-*` "service-card grid + stats + industries + awards" family or the `webapp-*`
family closely enough to force-fit; it has no statistics, industries, or awards sections at
all, and introduces two patterns not seen on other pages: a circular gray chevron-badge icon
list (`.ecom-chevron-badge`, 27×27, bg `#ddd`, `border-radius:50%`, FontAwesome
`chevron-right` glyph fill `#0c0c31`) and a simple auto-advancing (non-draggable) screenshot
carousel in the middle of the "Why Choose Us" 3-column layout (`.ecom-why-carousel`,
adapted from the proven `cwd-work-track`/`mad-work-track` prev/next pattern, 4000ms
autoplay). The testimonial carousel itself **is** a direct adaptation of
`custom-web-development.js`'s proven bounded-drag/clone-based infinite loop (verified this
session to build the identical clone structure: 6 originals + 4 clones = 10 total DOM nodes,
matching the reference's own `10` "Testimonial Image" `<img>` count measured via
`document.querySelectorAll('img')` on the live reference).

Section order: hero (plain 380px full-bleed background banner, no text overlay — matches
the reference's `wraper_inner_banner` pattern, not an Elementor hero section), breadcrumb
(reused `hec-breadcrumb-list` SVG-caret pattern), intro (718×923 screenshot left / H1 +
paragraph + "We assist our customers with:" + 8-item chevron-badge list + "Connect with Us"
button right — button links to `#contact`, the shared footer's contact section id, since
this page has no inline consultation-form card of its own), "Shopping Experience Tailored to
be In-Sync with Target Segment" (standalone full-width H2), detail row (563×563 circular
diagram left / paragraph + 2 checkmarked items — "Store Design & Setup", "Store Optimization
& Management" — right), "Why Choose Us?" (H3 + intro paragraph, then a 3-column row: 3
dash-list groups left — Ecommerce Platforms / Third-Party Integrations / Ecommerce &
Consulting Services — auto-advancing screenshot carousel middle, "Why Choose CloudConverge?"
5-item feature list right — Design & Development / Integration / Marketing / Maintenance /
User Experience, each with a blue FontAwesome check glyph), testimonial carousel (6 reviews,
"Some of our Client Reviews" heading). Contact and footer come from the shared partial as
usual — confirmed via the same footer-grep technique used on the consultant page that no
inline consultation form needed duplicating here either.

### Verified this session (without final images)

- Console: no page errors on repeated reload (only unrelated browser-extension warnings).
- Network: css/js for this page and the 6 reused testimonial images all resolve 200/304;
  the 6 new page images 404 as expected until the asset zip is extracted.
- No horizontal overflow at 1685px (`document.body.scrollWidth` 1670 ≤ `window.innerWidth`).
- `node --check` passes on `js/ecommerce-development-services.js`, `js/header.js`,
  `js/footer.js`.
- Testimonial carousel: confirmed via direct screenshot that autoplay correctly advances
  through distinct review pairs (Barry Sarnoff/Tom Wyman → Tom Wyman/Richard Heller) with
  circular avatars, star ratings, and card styling matching the already-proven
  `custom-web-development.html` pattern.
- "Why Choose Us?" 3-column section: dash-list groups, checkmark feature items (blue check
  glyphs), and carousel arrow placement all screenshot-matched against the reference layout
  section-by-section (image content itself not yet comparable).
- "Store Design & Setup"/"Store Optimization & Management" checkmark block: screenshot-matched
  against the reference (bold title + check glyph + description, correct copy).
- "Connect with Us" button resolves to `#contact` (the shared footer's contact section),
  confirmed the target element exists in the injected footer.
- Section-top geometry diff (local vs. live reference, both at 1685px, same technique used
  on the consultant page): H1 top −19px, "Shopping Experience" H2 top −80px, "Why Choose
  Us?" H3 top −100px (deltas out of a ~5,850–6,000px page). These are **expected to shift**
  once the real hero/intro/diagram images replace their current broken-image placeholders —
  not yet treated as bugs, since the intro/detail sections that depend on those images
  haven't been measured with real image heights yet.

### Verified this final session (with real images)

- All 6 new images (`ecommerceheader.webp`, `Helmheroshopifyfinal.webp`,
  `eCommerce-Development-Solutions.webp`, `SampleEcommerce2.webp`, `SampleEcommerce3.webp`,
  `SampleEcommerce4-1.webp`) resolve 200 locally; 0 images with `naturalWidth === 0` on the
  page after a hard reload.
- Console: no errors. Network: no 404s on any `assets/` request.
- No horizontal overflow (`scrollWidth === clientWidth`, 1670px).
- Hero, intro (screenshot + H1 + chevron list + CTA), "Shopping Experience" circular diagram
  + checkmark items, and the "Why Choose Us" 3-column section (dash lists, screenshot
  carousel, feature list) all screenshot-matched against the live reference at matching
  scroll positions.
- Reviews section (6 testimonial cards, star ratings, avatars, long-card variant) matches.
- Fixed the `.ecom-connect-btn` invisible-text bug (see above).
- Note found but confirmed out of page-scope: the reference header logo shows an
  icon + "Cloud Converge" wordmark; the local shared header (`js/header.js`) currently
  renders icon-only. This is a shared-partial issue affecting every page, not specific to
  this one — not changed here per the project's "check effect on existing pages before
  touching shared header/footer" rule. Worth a dedicated shared-header pass later.

### NOT verified — carried open items

1. Responsive breakpoints below desktop — same open item as the last three pages;
   `resize_window` does not change the true rendered viewport in this environment.
2. The megamenu thumbnail images (`about-thum.avif`, `work-culture-thum1.avif`, etc.) and
   several footer partner-logo images (`pic-logo-*.png`, `erpnext-partners-logo.avif`,
   `CloudConvergeLogoCCSmallWhiteV2.webp`) report `naturalWidth === 0` on this page — these
   are shared header/footer partial assets, not page-specific, and were not chased further
   this session since they're outside this page's scope (worth a dedicated pass later).
3. Shared header logo missing the "Cloud Converge" wordmark text (see above) — affects all
   pages, needs its own session with a full re-check of every existing page afterward.

## Previous completed page

### hire-erpnext-consultant — geometry-diff verification pass

- **Reference:** https://www.cloudconverge.io/hire-erpnext-consultant/
- **Local target:** `hire-erpnext-consultant.html`
- **State:** Built, screenshot-compared section-by-section against the live reference at
  1685px (served from `127.0.0.1:5500` beside the live reference), then re-verified with a
  second, geometry-based pass (`getBoundingClientRect`/`getComputedStyle` diffed against the
  live reference for every major heading) which caught one real structural bug the
  screenshot-only pass had missed — see "Second verification pass" below. Console, network,
  accordion, and consult-form interactions verified. Responsive breakpoints below desktop
  are NOT yet rendered/measured — the `resize_window` tool does not change the actual
  viewport in this environment (confirmed again this session via `window.innerWidth`), same
  open item carried from the previous two pages.
- **Last updated:** 2026-07-30

### Second verification pass — geometry diff caught a card-padding bug screenshots missed

After the user asked to double check the page was "exactly the same," a section-top
geometry diff (absolute `top`/`left`/`width` of every major heading, local vs. live
reference, at matching 1685px scroll position) found a growing negative offset starting at
the "ERPNext Consulting Services We Provide" section: local was ~287px taller than the
reference through that section alone, even though the earlier screenshot comparison had
judged it a match.

Root cause: walking the reference's actual DOM (`elementor-icon-box-title` → ... →
`elementor-column`) up 10+ ancestor levels for one of the six service items found **no
background color, no box-shadow, and no padding anywhere** — the section's pale `#f7fbff`
background is applied once at the outer section level only; each of the six items is a
flat, cardless 2-column text block (title+chevron, description, "Focus Areas:" label, and a
single dash-separated paragraph with `<br>` line breaks, not a `<ul><li>` list with its own
per-item margins). My build had wrongly given `.hec-service-item` a white background,
`box-shadow: 0 14px 46px rgba(0,26,87,.08)`, and `padding: 40px` — a "card" look copied from
the "6 Reasons" pattern on the developer page. Because white-on-`#f7fbff` has almost no
contrast, this extra padding and shadow were nearly invisible in screenshots, which is why
the earlier screenshot-only pass missed it. Also wrong: `.hec-dash-list li` was 15px/24px
line-height/gray (`#6b7280`) with an 8px per-item margin; the reference is 16px/26px,
near-black (`#191919`), and the four "Focus Areas" lines sit in one paragraph with no
per-line margin at all. Fixed all of this in `.hec-service-grid`/`.hec-service-item`/
`.hec-service-focus`/`.hec-dash-list` (removed the card treatment, column-gap 20px / row-gap
50px instead of a flat 30px gap, corrected size/color/spacing to match).

After the fix, the section-top diff versus the reference dropped from a worst-case −315px
(at "Industries We Support") to at most −124px (at the CTA banner, out of a ~5,700px
cumulative page height) — the remaining few sections are all within about 3–7% of their own
section height, consistent with ordinary text-wrap/line-height rounding rather than a
structural mismatch. The one exception not yet chased further: the FAQ-through-footer
region is ~131px shorter locally than the reference; since the footer itself is the shared
partial already verified on prior pages, this was not treated as a page-specific bug.

**Lesson for future pages:** a screenshot-only comparison can miss a padding/shadow bug when
the "card" background color is very close to the section's own background color (low
contrast). Following a screenshot pass with a `getBoundingClientRect` top-position diff of
every major heading (local vs. reference, same scroll position) is a cheap way to catch
accumulated height drift that low-contrast card mistakes hide from the eye.

### hire-erpnext-consultant.html — what was done

Files added:

- `hire-erpnext-consultant.html`
- `css/pages/hire-erpnext-consultant.css`
- `js/hire-erpnext-consultant.js`

Files changed: `js/header.js` (1 href), `js/footer.js` (1 href) — the dead
`#hire-erpnext-consultant` anchors now point at the real page, same pattern as the previous
two pages.

Assets added under `assets/images/` (same-origin browser-tab + ZIP technique, 7 new files):
`hire-ERPNext-consultant-for-strategic-guidance-system-optimization.webp`, `chart-icon.png`,
`briefcase-icon.png`, `check-list-icon.png`, `multiple-users-silhouette-icon.png`,
`shield-icon.png`, and `industry-icon.png` renamed to `industry-insight-icon.png` to avoid a
Windows case-insensitive collision with the already-local `Industry-icon.png`. Reused
without copying: `Manufacturing_icon.png`, `wholesaler_icon.png`, `Industry-icon.png`,
`health-icon.png`, `professional-icon.avif`, `education-icon.avif`, `hm-one-bg.jpg` (all
already local from the developer page).

Section order: hero (full-bleed baked-in dashboard background, no badge pill, vertical
178deg CTA gradient), breadcrumb, "Why Businesses Need an ERPNext Consultant" (single-column
6-item chevron list + reused consultation-form card), "ERPNext Consulting Services We
Provide" (2×3 grid, chevron title + description + "Focus Areas:" dash list), "Why Choose
CloudConverge for ERPNext Consulting" (2×3 grid, icon-circle + two-line title row above a
justified description), industries icon row (reused verbatim), 3-card engagement models
(centered text, no bullet list variant), CTA gradient banner (after engagement models this
time, not before), "Business Benefits of ERPNext Consulting" (2-column reuse of the
`.hed-step` bordered-card pattern), FAQ accordion (6 distinct items, no duplicate-content
bug this time). The reference's final "Contact Us" section (USA/India office addresses,
second consultation form) is already part of the shared `js/footer.js` partial — confirmed
via grep before building, so it was correctly **not** duplicated into the page's own markup.

Bugs caught by screenshot comparison against the live reference (geometry/computed-style
checks alone would have missed these):

- **"Why Choose CloudConverge" card titles** were built with `font-family: "DM Sans"`, but
  `getComputedStyle` on the live reference's `.elementor-heading-title` showed the real
  family is `Poppins` (400 weight) — DM Sans at the same 16px/400 renders visibly lighter,
  which is why the reference titles looked bold and the local build did not. Fixed to
  `"PoppinsRef","Poppins",sans-serif` (`.hec-why-title`).
- **Engagement-model cards** were left-aligned; the reference centers both the card titles
  and body text (`text-align: center` added to `.hec-engagement-card`).
- **FAQ active-tab background** was copied from the developer page's FAQ as `#14255b` (dark
  navy), but walking the reference's actual DOM ancestor chain
  (`p.mb-0 → span.card-header → button.btn.btn-link`) showed the real active background is
  `rgb(30, 78, 196)` — the site's standard accent blue, not navy. Fixed
  (`.hec-acc-item.is-open .hec-acc-btn`). Worth rechecking whether the developer page's FAQ
  has the same latent bug in a future session.
- Everything else (hero, breadcrumb, "Why Businesses Need" chevron list + consult form,
  services grid, industries row, CTA banner, business-benefits grid, FAQ layout/copy)
  matched the reference within a screenshot comparison at every scroll position checked —
  no further changes needed.

### Verified this session

- Console: no page errors (only unrelated browser-extension "port disconnected" warnings).
- Network: every asset for this page resolved 200/304, zero 404s (checked filtered to
  `hire-erpnext-consultant.html`'s own script/style/image requests after a hard reload).
- No horizontal overflow at 1685px (`document.body.scrollWidth <= window.innerWidth`).
- FAQ accordion is single-open (tested clicking item 2 programmatically, confirmed exactly
  one `.is-open` and correct `hidden`/`aria-expanded` toggling).
- Consult form submit handler: honeypot-empty submission shows the success message and
  resets all fields.

### NOT verified this session

- Responsive breakpoints below desktop width — same blocked item as the previous two pages;
  `resize_window` reports success but `window.innerWidth` stays at the original desktop
  width afterward. Needs a different approach (CDP device-metrics override, or a real
  browser window resize outside the MCP tool) in a future session.
- Hover states and reduced-motion behavior on this page's cards/buttons.

### hire-erpnext-developer.html — what was done

Files added:

- `hire-erpnext-developer.html`
- `css/pages/hire-erpnext-developer.css`
- `js/hire-erpnext-developer.js`

Files changed: `js/header.js` (1 href), `js/footer.js` (1 href) — the dead
`#hire-erpnext-developer` anchors now point at the real page, same pattern as the
previous page's fix.

Assets added under `assets/images/` (fetched via the same same-origin browser-tab + ZIP
technique as the previous page, 9 new files): `hire-ERPNext-developers2.jpg`,
`erpnext-implementation-services-icon.png`, `module-development-icon.png`,
`erpnext-integration-ion.png`, `maintenance-services-icon.png`,
`data-import-services-icon.png`, `health-icon.png`, `professional-icon.avif`,
`education-icon.avif`. Reused without copying: `Manufacturing_icon.png`,
`wholesaler_icon.png`, `Industry-icon.png`, `hm-one-bg.jpg` (all already local from the
previous page).

Section order: hero, breadcrumb, "Who Should Hire" intro + consultation form, "6 Reasons"
numbered grid, services tabs widget (5 panels), testimonials, CTA gradient banner, 3
engagement-model cards, industries icon row, 4 numbered steps, FAQ accordion (6 cards,
#5/#6 intentionally duplicate content — reproduces a real bug on the reference page).
Contact and footer come from the shared partial as usual.

**This build applied the screenshot-first lesson from the start** — instead of relying only
on the subagent's computed-style/text audit, every section was compared against an actual
reference screenshot before being declared correct, and this caught several structural
mismatches invisible to geometry checks alone:

- The hero's laptop-and-icons graphic is not a boxed side image — it is baked into a single
  1920×720 full-bleed `background-image: cover` on the whole `.hed-hero` section
  (`hire-ERPNext-developers2.jpg`), with copy overlaid directly on top, not split into a
  two-column grid with a separate media box.
- The "Who Should Hire" list is plain text rows (icon + heading + paragraph, no card
  background/border), not boxed cards — the icon is the same FontAwesome
  angle-double-right chevron reused from the previous page, colored `rgb(38,84,198)`.
- The consultation card is **white**, not a dark navy card as first assumed: `#fff` bg,
  `box-shadow: 0 6px 60px rgba(0,0,0,.05)`, `padding: 50px 60px`, eyebrow
  `rgb(30,78,196)` non-uppercase, submit button solid `rgb(30,78,196)` (no gradient).
- The "6 Reasons" cards use a light-blue circular number badge (`64×64`, bg `#f7fbff`,
  `border-radius: 100px`, number `rgb(29,77,194)`), centered text, white card,
  `box-shadow: 0 14px 46px rgba(0,26,87,.08)` — not the flat left-aligned card first built.
- The services widget is the same Elementor "e-n-tabs" widget already reverse-engineered on
  the previous page: `#1e4ec4` bg, `border-radius: 25px`, tab list border-bottom
  `0.877193px solid rgb(141,193,251)` (inactive) / `rgba(255,255,255,.62)` (active), a
  FontAwesome plus icon that becomes a minus by hiding the vertical bar when active, and a
  `#14255b` panel at `border-radius: 0 30px 30px 0`. The 73×73 panel icons already contain
  their blue rounded-square background baked into the PNG — no extra wrapper needed.
- Testimonial cards: transparent bg, thin `0.877193px solid #d0e4f5` border,
  `border-radius: 12px`, an 86px serif closing-quote glyph (`&rdquo;`, not `&ldquo;`) in
  `#153c9d`, italic role text in `rgb(29,77,194)`, and the org name as a separate pill badge
  (`#f1f1f1`, `border-radius: 16px`, uppercase) floated to the opposite side from name/role —
  not two identical pill badges as first built.
- The CTA banner gradient is `linear-gradient(105deg, #153c9d 0%, #102156 100%)`, not a
  left-to-right `#14255b → #1e4ec4`.
- The industries section reuses `hm-one-bg.jpg` with white heading/body/label text — the
  photo itself carries the dark tint, not a CSS overlay. Missed on the first pass because
  the previous page's use of the same asset wasn't cross-checked before assuming dark navy
  text would work.
- The 4-step "How It Works" cards are a 2×2 grid of bordered, left-aligned cards
  (`0.877193px solid #d0e4f5`, `border-radius: 12px`), not a 4-across centered grid.
- Breadcrumb (caught after user feedback on a screenshot): separators are a solid
  FontAwesome caret-right triangle SVG, not a `›` character; background is neutral
  `#fbfbfb` (not blue-tinted); all three crumbs are near-black (`#000`/`#191919`), not
  gray-with-blue-hover as first built.
- "6 Reasons" cards were missing their hover state entirely: `border-top: 3.50877px solid
  #fff` by default (invisible against the white card), becomes `rgb(30,78,196)` on hover,
  combined with `transform: translateY(-5px)` and `transition: 0.4s
  cubic-bezier(0.2,0,0.3,1)` on both properties. Added to `.hed-reason`/`.hed-reason:hover`.
- Services tabs widget: the 40px left inset and the visible gap before the dark panel were
  wrongly placed as `padding-left` directly on `.hed-tab-list`, which shrank the button's
  own content width and wrapped two of the five longer tab labels onto two lines. The
  reference puts that left inset (`padding-left: 50px`) and the tab-to-panel gap
  (`gap: 50px`) on the outer `.hed-tabs` (`e-n-tabs`) flex container instead, leaving
  `.hed-tab-list` at a clean `flex: 0 0 459px` with no side padding of its own — exactly
  the pattern already proven on `erpnext-service-provider.html`'s tabs widget. Also fixed
  the icon column from `1fr 20px` to the reference's actual `1fr 92px`, which is why the
  +/− icon sat far closer to the text than the reference's near-the-edge placement.
- Testimonials section was oversized: `h5` is `32px/600/30px line-height` (was `34/42`) with
  `margin: 0 0 20px` (was 16); the intro paragraph has no `max-width` restriction (was
  wrongly capped at 640px, forcing an unwanted two-line wrap — the reference intro is 1120px
  wide and fits on one line), `margin: 0 0 50px` (was 60), and color `#191919` (was gray).
  `.hed-testimonial-text` margin-bottom corrected to 20px (was 24). Card padding
  (`60px 30px 30px`), border, radius, and quote glyph were already correct.
- Engagement-model cards (user-verified against reference): already matching, no change.

### Verified this session

- No console errors from the page itself (only unrelated browser-extension warnings).
- No broken images: 39 `<img>` elements, 0 with `naturalWidth === 0`.
- No horizontal overflow at the tested desktop width (`scrollWidth === clientWidth`).
- Tab widget switches panels correctly (tested clicking tab 2, confirmed active panel/title
  changed and `aria-selected`/`hidden` toggled).
- FAQ accordion is single-open (tested clicking item 3, confirmed exactly one `.is-open`).

### NOT verified this session

- Responsive breakpoints below desktop width. The window-resize tool did not visibly change
  the rendered viewport in this environment (screenshot still showed the desktop layout at
  768px target width) — needs a fresh attempt, possibly via CDP device-metrics override
  instead of `resize_window`, in a future session.
- Hover states and reduced-motion behavior.
- `ERPNEXT_ASSETS_TODO.md` is obsolete now that both pages' assets are in place; safe to
  delete next time file deletion is convenient.

### Previous page follow-up fixes (erpnext-service-provider.html)

Geometry/computed-style checks alone missed several real visual differences that only showed up
in actual rendered screenshots. Corrected this session:

- The hero background had no dark overlay. Reference darkens its bright photo with
  `.erp-hero-overlay`: `linear-gradient(286deg, rgba(0,47,92,0) 54%, rgb(24,19,15) 64%)` at
  55% opacity, absolutely positioned, inset 0, as the first child of `.erp-hero`.
- The hero paragraph is missing a second bold span: `<strong>custom ERPNext implementations,
  migrations, and long-term support</strong>` (weight 500, Poppins-family), not plain text.
- The H1 has "ERPNext" in an inline-styled `color:#64A8FF` span; "Services" stays white.
  Added `.erp-hero-accent` for this rather than leaving the whole heading one color.
- The FAQ accordion card model was wrong entirely: there is no separate card background —
  the button itself is white with `box-shadow: 0 0 30px rgba(0,0,0,.06)` when collapsed, and
  turns solid `#14255b` with white text and shadow when open. The +/− glyphs are
  `::before`/`::after` content on the button, not on a separate icon element.

**Lesson for every future page:** computed-style/geometry checks (getBoundingClientRect,
getComputedStyle) do NOT catch background-image overlays, inline `style=""` color spans, or
image-vs-solid-color card treatments. Always take actual rendered screenshots of both pages at
matching scroll positions and eyeball them before calling a section done. Reference's own
`scroll-behavior: smooth` on `<html>` delays `window.scrollTo` — use
`{top, behavior:'instant'}` when jumping for a screenshot comparison, not a bare `scrollTo(x,y)`.

### Next action

1. Verify and correct responsive behaviour at 1440 / 1366 / 1280 / 1024 / 768 / 480 / 390 / 360.
   The 1199 / 767 / 380 rules were reasoned, not measured, and the desktop container change
   (below) interacts with them.
2. Re-run the reuse / dead-code audit.
3. Re-test the other nine pages after the `js/header.js` and `js/footer.js` href change.

### Verified at 1685px (local served from 127.0.0.1:5500, beside the live reference)

Section-top deltas versus the reference, all measured after forcing its lazy images to load:

| section | delta | | section | delta |
|---|---|---|---|---|
| hero | 0 | | infographic | 0 |
| breadcrumb | 0 | | industries | 0 |
| intro | 0 | | cases | 0 |
| clients | 0 | | pricing | −3 |
| accelerate | 0 | | faq | −2 |
| modules | 0 | | page end | +8 |
| services | 0 | | | |

Hero interior is within 1px on every element; the CTA (291×50) and hero graphic (797×455) are exact.
Case-study tabs match exactly: widget 1200 wide, panel 639×560 at `60px 75px`, title at (75,60,489,24),
paragraph at (75,104,489,156), bullets at y 280/360/440.

Also verified: no console errors, no broken images, no horizontal overflow, tab switching,
single-open accordion, and carousel advance all working.

### Three root causes found during the comparison — worth remembering

1. **`text-transform: capitalize` leaks from `css/style.css` onto headings.** It both changes the
   words and widens them, which forced an extra line in the intro `h2`. Reset page-scoped via
   `.erpnext-page main :is(h1,h2,h3,h4,h5,h6) { text-transform: none }`. The Umbraco page hit this too.
2. **The reference `.elementor-container` is a flush 1140px with no side padding**, but the shared
   `.container` adds 15px. That made every column 30px narrow and rewrapped copy across the page.
   Zeroed at `min-width: 1200px` page-scoped, with the reference's own per-section insets
   re-applied (services and industries grids get `padding: 0 15px`; modules and benefits use 10px).
3. **The reference loads only one Poppins file — weight 600.** Its "Poppins 400/500" text therefore
   renders with 600 glyphs and is ~2.2% wider than a real Poppins 400 (368.83px vs 360.77px on a
   fixed probe string). This project ships a genuine Poppins 400, so everything was slightly narrow.
   Fixed with a page-scoped `@font-face` alias, `PoppinsRef`, mapping weights 100–900 to
   `poppins-600-latin.woff2`. DM Sans metrics already matched exactly.

### Measurement lesson

The reference uses **PageSpeed lazy-loading** (`data-pagespeed-lazy-src`), not native `loading=lazy`.
Scrolling does not reliably trigger it, and unloaded images report as 1×1 placeholders that render at
the wrong box size — the infographic block measured 1162px tall instead of 707px. Before measuring,
swap every `img[data-pagespeed-lazy-src]` to its real `src`, clear `onload`/`onerror`, and await
`document.images`. Section tops shift by up to 450px otherwise.

### ERPNext build — what was done

Files added:

- `erpnext-service-provider.html`
- `css/pages/erpnext-service-provider.css`
- `js/erpnext-service-provider.js`
- `ERPNEXT_ASSETS_TODO.md` (temporary; delete once assets land)

Files changed: `js/header.js` (2 hrefs), `js/footer.js` (1 href) — the previously dead
`#erpnext-service-provider` anchors in the mega menu and footer now point at the real page. No other
shared-partial change; all ten pages still carry both placeholders and the four shared scripts.

This page does NOT follow the other service-page pattern. The reference has no statistics, industries
artwork, awards, testimonials, or work-carousel sections, so nothing was lifted from the `mad-*`
family and `js/mobile-app-development.js` is not reused. New `erp-*` prefix and a dedicated page
script were required for the three widgets the other pages do not have.

Section order (28 reference top-level sections consolidated into 12 local sections): hero, breadcrumb,
intro + consultation form, ERPNext Clients, Accelerate Growth, ERPNext Modules, Our ERPNext Services,
infographic, Industries We Serve, Case Studies (carousel + tabs), Pricing & Cost, FAQ. Contact and
footer come from the shared partial as usual.

### Measurements taken from the reference (viewport 1685px, content box 1670px)

- Boxed container `max-width: 1140px`, `padding: 0 15px` — matches the existing shared `.container`.
  Hero uses the 1600px wide container; the carousel wrapper and FAQ row use 1230px.
- Hero: `padding: 120px 90px 100px`, height 675px, columns 536 / 954, graphic 797×455.
  H1 56/600/62 white. Subheads 28/500/38 and 22/500/38. Body 16/400/22. CTA 291×50, `#1e4ec4`,
  `padding: 16px 30px`, `border-radius: 24px`.
- Intro: `padding: 90px 0 20px`, columns 798 / 342 (`padding: 10px 20px 10px 10px` and `30px`).
  Heading row is a 143 / 625 inner grid — certified-partner badge 123×80 sits left of the H2.
  H2 40/600/50 `#1d1a4e`. Form card `padding: 30px`, shadow `0 6px 60px rgba(0,0,0,.05)`.
- Clients: 6 logos 144×61 on a 188px column pitch.
- Accelerate Growth: `#f7fbff`. Two 550px columns at x=10 and x=580 (20px column gap, 30px row gap),
  bullet icon is the FontAwesome angle-double-right glyph, 13.994px, fill `#2654c6`, inlined as SVG.
- Modules: 3×3, boxes 360 wide in 380 columns (10px padding), centered, icon 65×64, 15px gap,
  title 18/400/18, text 15/400/18.
- Services: cards 350px at x=280/660/1040 (30px gap), `#fff`, radius 4px,
  shadow `0 14px 46px rgba(0,26,87,.08)`. Head block `padding: 30px 30px 20px`, min-height 125px.
  Row 2 is offset by a 190px leading spacer.
- Industries: `hm-one-bg.jpg` cover, `padding: 60px 0`, 3×350px boxes, icon 63×63 left-aligned,
  all copy white, body text justified.
- Case studies: Swiper — 8 slides, autoplay 5000ms, transition 500ms, infinite, arrows only,
  no pagination, pauses on hover/interaction. Tabs — 3 vertical tabs, widget bg `#1e4ec4`,
  `gap: 50px`, tab list 459px, panes 639px, first tab open, click only, no autoplay.
- Pricing: `#f7fbff`, `padding: 90px 0`, three 380px columns (copy / image 350×436 / factor list).
- FAQ: 9 single-open accordion cards, first open by default, `margin-bottom: 10px`,
  question 20/500 `#000`, `+` / `−` glyph at right.
- Heading levels deliberately mirror the reference's own non-sequential outline
  (h1, h2, h3, h4, then six h5) rather than being normalised.

### Verified so far (static only)

- HTML parses with no error recovery; no duplicate ids; every `aria-controls` resolves.
- Element counts match the reference: 6 clients, 6 benefits, 9 modules, 5 service cards,
  3 industries, 8 slides, 3 tabs / 3 panels, 9 accordion items with exactly one open.
- Every `<img>` has `alt`, explicit `width` and `height`; the hero graphic is not lazy-loaded and
  carries `fetchpriority="high"`.
- `node --check` passes on the new page script and on the edited `header.js` / `footer.js`.
- CSS parses with 0 errors (140 rules).
- No remote runtime asset references. The only external URLs are three intentional content links
  (hire-erpnext-consultant, docs.frappe.io, wikipedia).
- Script order is the required `header → footer → script → include → page`, all `defer`.
- Page script is wrapped in an IIFE and guarded by `window.__erpnextPageInit`, so a repeat run
  cannot double-bind listeners or timers.

### NOT verified

- **Responsive.** Nothing below 1685px has been rendered or measured. The 1199 / 767 / 380 rules are
  reasoned from the reference's Elementor breakpoints. Expect corrections.
- Hover states and reduced-motion behaviour.
- The other nine pages after the shared-partial href change (static checks passed; not re-rendered).

### Known remaining deltas at 1685px

- Cases section is 3px short: the reference tabs widget is 562px tall (its panel sits at y=1 inside
  the 1200px box) where the local one is 560px. Not chased further.
- Hero copy block is 1px lower: the reference paragraph block is 112px, the local one 111px.

### Environment notes for the next session

- The local page must be served over HTTP — the browser extension refuses `file://` URLs.
  The user runs Live Server on **http://127.0.0.1:5500/**.
- The sandbox HTTP proxy rejects `cloudconverge.io` (`blocked-by-allowlist`), so reference assets
  cannot be downloaded there. The 37 page images were fetched in the browser tab (same-origin) and
  delivered as a ZIP; they are all present now and `ERPNEXT_ASSETS_TODO.md` can be deleted.
- Chrome-for-Testing is also proxy-blocked, so there is no headless Chrome in the sandbox.

## Previous completed page

### Umbraco refinement pass

Files changed: `umbraco-development-services.html`, `css/pages/umbraco-development-services.css`.

Corrections applied:

- Removed a leftover mobile-app subheading ("Creating Smart User Experience Across all Devices…") from the intro; the reference goes straight from the `h1` to "Key advantages of working with Umbraco are:".
- Service-card headings: colour corrected to `#191919` (was `#1D1A4E`), confirmed by sampling glyph pixels in the reference screenshot.
- Service-card body copy: colour `#191919` and `text-align: center` (was `#282828`, left-aligned).
- Consultation card: border `#e7e7e7` and shadow `0 6px 60px rgba(0,0,0,.05)` to match the reference widget wrap.
- Factors grid: column gap 20px (reference columns measure 550px at x=73 and x=643 inside the 1120px container); factor body copy `#191919`.

Measurement lesson recorded for future passes: the in-app browser pane does not load the reference's
lazy images (`naturalWidth === 0`), so any image-dependent geometry read from it is wrong. Two
early "fixes" from those readings were reverted after screenshot comparison proved them wrong —
the industries artwork (pane reported a 960x960 box; the real render is 960x575) and font weights
(pane reported 400 for card and factor headings; the reference renders both bold/600). Use the
headless-Chrome screenshots, or pixel sampling, for anything involving images or weights.

Verified: header/footer injected via the shared partials, `window.initSite` present, work carousel and
six-review testimonial track built (8 nodes incl. clones), consultation form present, all 24 referenced
assets resolve locally, no remote runtime references, no console errors, no horizontal overflow at
1280px or 390px, footer matches the reference (the reference's extra ~2.1k px of page height is an
empty region below a floating reCAPTCHA badge, not content).

Known deviation kept intentionally: this page reuses `body.mobile-app-page`, the `mad-*` class family
and `js/mobile-app-development.js` rather than introducing an `umbraco-*` prefix and a near-identical
page script. The layouts are the same service-page pattern, so this is reuse rather than duplication.

## Architecture

- Shared header/footer are injected through `js/header.js`, `js/footer.js`, and `js/include.js`.
- Shared CSS remains in `css/style.css` and `css/responsive.css`.
- The page loads its dedicated stylesheet, `css/pages/mobile-app-development.css`, plus `js/mobile-app-development.js` for page-specific interactions.
- HTML, CSS, and vanilla JavaScript only.

## Latest correction

- Added `mobile-app-development.html` with a dedicated stylesheet and JavaScript file; shared header/footer files remain unchanged.
- Bundled the exact mobile hero and eight service-card illustrations locally under `assets/images/`.
- Replicated the breadcrumb, long-form introduction and consultation form, eight development cards, factors columns, sliding portfolio, statistics, industries, awards, testimonials, and shared contact/footer.
- Re-audited the local page directly beside the live reference at a 1281px browser viewport instead of relying on the earlier completion note.
- Corrected the page-wide 10px Elementor content inset, the exact 686.8px/383.2px introduction columns, the 50px column gap, and the reference consultation-card dimensions.
- Corrected the factors section to two 570px columns with 10px inner padding, restoring the reference 550px text measures and wrapping.
- Top-aligned the one-line service-card headings, corrected the progressive-card copy baseline, and preserved the already-matched service image positions.
- Removed inherited title capitalization so wording such as “Why Develop a mobile app” and “Some of our Client Reviews” matches the source exactly.
- Corrected statistics heading weights and inner widths, expanded the awards grid to the reference 1140px track, and aligned all four award marks including the Microsoft Partner artwork.
- Corrected the desktop header inset and navigation spacing without changing the shared header partial.
- Added the reference card lift/top-line/text motion, a directional portfolio slider, and a draggable infinite testimonial loop with bounded clones and transition fallback.
- Updated the mobile intro and form from the live page's own `max-width: 767px` rules: 30px/15px section padding, 25px effective copy inset, and 30px/20px/40px form spacing; restored the reference shared 66px mobile header and 300px hero geometry.
- Matched the live testimonial behavior by keeping the initial Samuel Correns/Kabu Projects pair stationary until the user drags; the reference carousel does not autoplay.
- Corrected the eight-card development grid from the supplied 1920px comparison: removed the 1266px desktop cap, restored the reference near-full-width four-column track, set the measured 53px outer inset and 34px column gaps, removed forced heading breaks, and aligned every first-row image on the same 355px copy baseline. The verified first-row card geometry is approximately 424.3 × 615.5px with images beginning at 474.2px in the compared viewport.
- Converted the two-slide development-work carousel into a seamless infinite loop using prebuilt edge clones, transition locking, post-transition normalization, and a timeout fallback. Previous/next navigation and 5.5-second autoplay now wrap in either direction without a visible reverse jump or blank frame; reduced-motion navigation remains immediate.
- Verified no broken images, no console errors, no horizontal overflow at the tested desktop viewport, valid page JavaScript syntax, local-only runtime assets, directional portfolio movement, and a testimonial track containing six originals plus four prebuilt edge clones.

## Previous completed page

## Custom web development page

- Added `custom-web-development.html` with its dedicated `css/pages/custom-web-development.css` and `js/custom-web-development.js` files.
- Reused the shared header, contact section, and footer without duplicating their markup or CSS.
- Bundled the reference hero and six service-card images locally under `assets/images/`.
- Replicated the breadcrumb, typography, long-form introduction, six development service cards, factors grid, sliding work showcase, statistics, industries, awards, and testimonial carousel.
- Added the reference card hover lift, scroll-in reveals, draggable/autoplay testimonial loop, and directional work-carousel slide transition with reduced-motion support.
- Matched the reference desktop and 390px mobile section positions, individual service-card heights, image dimensions, and responsive typography.
- Corrected the service-card copy width to the reference 290px content measure, restoring the matching line wraps and compact card composition.
- Added the reference hover state: the complete card lifts 5px, its copy lifts an additional 5px, the shadow strengthens, and a blue 3px top accent draws across the card.
- Confirmed the first desktop card now matches the live reference at 350 × 506px, with its image and text positions within approximately 1px.

- Replicated the Services hero, product cards, Product Engineering section, ecommerce cards, Cloud Engineering section, Business Intelligence / AI cards, statistics, industries, awards, testimonials, and shared contact/footer.
- Bundled the exact reference video, section imagery, service icons, awards, and testimonial assets locally under `assets/`.
- Added the reference reveal and hover motion while preserving reduced-motion support.
- Matched the hero service shortcuts with static icons and subtle vertical separators between the four desktop items; the separators are removed in the stacked mobile grid.
- Removed reveal and full-card hover motion from the product-tools section. Only each blue `Discover More` control lifts 5px on hover, without changing color.
- Removed all entrance and hover motion from the five Product Engineering service items so their icons and copy remain static.
- Removed entrance and lift motion from the four ecommerce cards. Hovering a card now changes only its inset label from white to blue with white text.
- Removed the icon-specific hover movement and transition from all seven Cloud Engineering service items while retaining the reference section reveal.
- Added the reference 5px hover lift to each complete Cloud Engineering icon-and-copy item; the icon remains static within the moving card.
- Removed entrance and hover motion from the three BI/AI cards. Their `Discover More` controls now use the reference 153 × 38px blue button and lift 5px on hover.
- Corrected testimonial sizing to the live reference: standard holders are 400px high, the long organization holder is 502px, and flex items no longer stretch to the tallest visible review.
- Matched the reference carousel's initial desktop pair: Samuel Correns followed by Kabu Projects.
- Hardened the testimonial infinite loop with bounded dragging, transition locking, clone-range normalization, and a timeout fallback for browsers that omit `transitionend`; blank track states are no longer reachable.
- Added a draggable, autoplaying, bidirectional infinite testimonial carousel. Edge clones are created before the first movement, preventing blank cards or visible loading gaps.
- Kept all page-specific rules out of shared `style.css` and `responsive.css`.

## QA

- Desktop section boundaries at 1920px match the reference to approximately 1px through the testimonials/contact boundary.
- Mobile section boundaries at 390px track the reference closely; the hero, products, Product Engineering, BI intro, and testimonial start are within approximately 0–12px.
- Checked 1920, 1440, 1366, 1280, 1024, 768, 480, 390, and 360px responsive widths.
- Verified zero broken images, zero console errors, no remote runtime assets, no horizontal page overflow, and valid `js/services.js` syntax.
- Verified the testimonial track advances automatically with no empty slides.
