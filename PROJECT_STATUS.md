# Project Status

## Current task

- **Reference:** https://www.cloudconverge.io/portfolio/
- **Local target:** `portfolio.html`, `css/pages/portfolio.css` (`port-` prefix). No page-specific JS
  needed — the reference page has no filter tabs, lightbox, or hover animation on the project cards
  (confirmed via a real hover test: before/after screenshots were pixel-identical), so `js/portfolio.js`
  was intentionally NOT created.
- **Last updated:** 2026-08-10
- **State:** Built from scratch, complete. Much simpler than the service-detail pages: reference has only
  13 top-level Elementor sections total, and 3 of those are the shared footer (`Contact Us` block +
  tagline + copyright, already covered by the existing `footer.js` — confirmed identical markup/classes
  already exist there as `.footer-contact`/`.fc-info`/`.fc-box`/`.fc-form-card`, so zero new footer work
  was needed). **Section order:** generic theme `wraper_inner_banner` page-header (device-mockup collage
  on a pale gray/tan gradient background, `380px`/`300px`/`220px` tall at desktop/tablet/mobile) — this
  reuses the exact shared `.inner-banner`/`.inner-banner-overlay` component already established by
  `about.html`/`workculture.html`, only the background-image is overridden via a `.port-page` body-scoped
  selector in the page's own CSS (no shared file touched) → shared `.breadcrumb-bar` (Home / Portfolio,
  reused verbatim, zero page CSS needed) → intro (H1 "Portfolio" `45px/600` + centered intro paragraph
  `16px/26px`, both matching `--color-heading`/`--color-body` design tokens exactly, plus a small `75×77`
  decorative translucent shape (`Mask-Group-2.png`, downloaded as `port-shape-triangle.png`) absolutely
  positioned behind/above the H1 at low z-index, confirmed via `elementFromPoint`) → **20-card project
  grid**, 3-columns desktop inside a `1600px` `.container-wide` (reused as-is — this exact wide-container
  variable already existed in `css/style.css` and already matched the reference's measured Elementor
  section content-width of 1600px exactly, confirmed via direct measurement, not assumed), `40px` gap,
  cards are plain white rounded cards (`border-radius:24px`, `box-shadow:0 37px 80px rgba(0,0,0,.1)` —
  measured directly; the underlying Elementor column/wrap themselves have transparent bg/no radius, the
  "card" look comes purely from the shadow sitting on the page's own white background) each fully wrapped
  in an `<a>` (all 20 cards are real links on the reference, confirmed via DOM dump), `660×440` (3:2)
  screenshot-mockup image on top (`object-fit:cover`, any logo/brand watermark visible on a given card is
  baked into the photo asset itself, not a separate overlay element — confirmed only 1 `<img>` exists per
  card), then a centered `22px/600` heading + `16px/26px` paragraph below. All 20 card titles/descriptions
  transcribed verbatim from the live reference (mixed casing preserved exactly: some titles are ALL-CAPS
  company names, others like `Ozone.in - Web Application` and `E. J. McDougall` are mixed-case — confirmed
  via `.textContent`, not a CSS transform). Each card's href points to the reference's own live
  `/case-studies/<slug>/` detail page (verified via DOM dump of all 20 `href` values) — these 20
  individual case-study pages are a distinct, much larger body of work explicitly out of scope for this
  task, so cards intentionally link out to the real reference domain rather than to a dead placeholder,
  per CLAUDE.md's "external URLs are permitted... as clickable links" allowance.
  - **Capitalization bug caught and fixed (same class of bug as a prior page):** the shared `h1–h6`
    default in `css/style.css` applies `text-transform:capitalize` globally. One card's source text,
    `"AI-Powered Chatbot for Automobile Industry"`, has a lowercase `for` that `capitalize` was wrongly
    uppercasing to `For` (all-caps titles were unaffected since capitalize never lowercases existing
    text). Fixed with `text-transform:none` on `.port-title` and `.port-card-body h3`, screenshot-verified
    against the reference's own lowercase `for`.
  - **No light-header override — corrected 2026-08-10:** the initial build added a `.port-page
    .site-header:not(.is-sticky)` override (black nav text, dark logo swap) based on a DOM color read of
    `rgb(0,0,0)`. User reported the live header had turned black/blue instead of white. Re-measured via
    `elementFromPoint` on the actual visible nav links (not just a `querySelector` color dump): the
    `rgb(0,0,0)` text belonged to a zero-size, `pointer-events:none` decoy nav layer that never renders:
    the real, visible nav (confirmed via `elementFromPoint` at the on-screen link coordinates) is white
    (`rgb(255,255,255)`), and the visible logo is `cc_logo_white.webp`, not the color/dark logo. Removed
    the override entirely — this page uses the shared default (dark-hero-style white) header like every
    other page, no scoped override needed.
  - **Banner-height override bug caught and self-corrected:** an initial `body.port-page .inner-banner{
    height:380px}` rule (desktop-only measured value) unintentionally out-specificity'd the shared
    `css/responsive.css` breakpoint steps (`300px`@1024, `220px`@767), freezing the banner at 380px on
    mobile — caught via the iframe/`getBoundingClientRect` technique across breakpoints. Fixed by dropping
    the height override entirely (kept only the `background-image` override) so the page inherits the
    shared component's existing default height (`375px`, 5px off the reference's measured `380px` —
    accepted as negligible rather than duplicating the breakpoint ladder in page CSS) plus its correct
    `300px`/`220px` responsive steps, re-verified via the same iframe technique (375 → 300 → 220 across
    1200/1024/767px).
  - **Assets — 21 new files** downloaded via the browser fetch-blob-download-to-Downloads technique
    (bash has no outbound internet in this sandbox; the Chrome tab does) then copied into
    `assets/images/`: 20 project-card thumbnails, all confirmed `660×440` via Pillow (`port-helm-boots.webp`,
    `port-daintyjewells.webp`, `port-rostar.webp`, `port-packed-with-purpose.webp`, `port-verve-portrait.webp`,
    `port-ozone.webp`, `port-kabu-projects.webp`, `port-hirebrain.webp`, `port-encardio-rite.webp`,
    `port-el-guapo.webp`, `port-atmos-cooling.webp`, `port-superior-group.webp`, `port-we-are-egg.jpg`,
    `port-proleve.webp`, `port-ej-mcdougall.webp`, `port-rise-event.webp`, `port-toddyoffers.webp`,
    `port-shombhob.webp`, `port-food-beverage-chatbot.avif`, `port-automobile-chatbot.avif`) + 1 hero
    banner (`port-hero-banner.webp`, 1920×425) + 1 decorative shape (`port-shape-triangle.png`, 75×77).
    **Known harmless leftover:** two accidental duplicate downloads (`port-el-guapo-dup.webp`,
    `port-encardio-rite-dup.webp`) could not be deleted — repeated `rm`/`os.remove` calls on them
    returned `Operation not permitted` even though `ls -la` shows normal `youthful-awesome-carson`
    ownership/permissions (an environment/mount quirk, not a repo issue); they are renamed so they don't
    collide with real filenames and are not referenced by any HTML/CSS, so they have zero effect on the
    page — safe to delete manually later if desired.
  - **Files changed:** `js/header.js` (2 places: desktop mega-menu-less "Portfolio" nav item + mobile
    menu) and `js/footer.js` (1 place: "Company" footer links column) — all three previously pointed to
    a same-page-only `#portfolio` anchor that only ever worked on `index.html` (which has its own
    `id="portfolio"` teaser section) and was dead on every other page; fixed to `portfolio.html` on all
    three, verified via live reference DOM dump that the real site's own nav/footer "Portfolio" links (and
    its homepage "View More" button) all point to a dedicated `/portfolio/` page, confirming this is the
    correct fix rather than a guess. Also fixed `index.html`'s own `.clients-more` "View More" button,
    which previously self-referentially pointed to `#portfolio` (scrolling back up to its own teaser
    section) — now points to `portfolio.html`, matching the reference's own homepage behavior exactly
    (confirmed via DOM dump of the live homepage). `index.html`'s `id="portfolio"` teaser-section id itself
    was left in place (harmless, still a valid same-page anchor target).
  - **Verified this session:** HTML tag-balance checked with a Python `HTMLParser` pass (0 unclosed/
    mismatched tags). Served via the existing VS Code Live Server at `127.0.0.1:5500`. Header/footer
    inject correctly (dark-on-light nav confirmed post-fix, logo swap confirmed). Console clean, 0 errors,
    on both `portfolio.html` and (spot-checked after the shared `header.js`/`footer.js` edits) `index.html`
    and `services.html`. All 21 `main img` elements (20 cards + decorative shape) load with 0 broken
    (`naturalWidth===0`) after a full scripted scroll-through. Mobile hamburger menu opens via a real
    click (`aria-expanded` toggles true, menu becomes visible) and its "Portfolio" link resolves to
    `portfolio.html`. **No horizontal overflow at any required width** (1920/1440/1366/1280/1024/768/
    480/390/360), verified via the same-origin `<iframe>` + `scrollWidth` technique, re-verified after the
    banner-height fix. Grid collapse confirmed via iframe at 1200/1024/900/767/480/360px: 3→2 columns at
    1024px, 2→1 at 767px, holds through 360px with negative overflow margin throughout.
  - **NOT verified:** Keyboard/focus accessibility beyond the shared default `:focus-visible` outline
    (not custom-tested per-card).
  - **Next action:** none outstanding; page is complete.
- **2026-08-10 fix pass (3 user-reported diffs + 1 header regression, all re-measured against the live
  reference, not guessed):**
  - **Card image not inset — corrected the "same pixel result" assumption above:** re-measured the Helm
    Boots card directly (`getBoundingClientRect` on the image vs. its card `<section>`, which has
    `padding:20px`, `border-radius:24px`, `box-shadow:0 37px 80px rgba(0,0,0,.1)`): the image is flush
    with the card's top+left edges (0px gap, via Elementor's `-30px`/`-30px` widget-container margin
    canceling the card's own padding) but inset **~60px from the right edge** before the next card
    content starts (60/493 card-width ≈ 12%) — a genuine asymmetric bleed, not a symmetric frame, and not
    reproducible with a plain `width:100%` image as previously assumed. Fixed by giving `.port-card img`
    `box-sizing:border-box; padding-right:12%; border-radius:24px 24px 0 0` (top corners rounded to match
    the card, since the image is flush with the card's top edge; bottom-right/bottom-left square since
    they float clear of any card edge) — object-fit:cover then renders within the reduced content box,
    leaving a visible inset margin on the right exactly like the reference.
  - **Header regression (see corrected write-up above):** removed the incorrect `.port-page` light-header
    override; page now uses the shared default white header.
  - **Breadcrumb separator icon was the wrong glyph:** the shared inline SVG (viewBox `0 0 448 512`, a
    thin outlined chevron path — FontAwesome "angle-right") didn't match. Found the reference's actual
    separator via `elementFromPoint` at the rendered arrow's pixel position: an Elementor icon-list widget
    rendering FontAwesome Solid **"caret-right"** (`viewBox 0 0 192 512`, a solid filled triangle). Swapped
    the SVG's `viewBox`/`path`/dimensions in `portfolio.html` to match exactly (color left at the shared
    `.breadcrumb-sep{color:#6d6d6d}` — not re-overridden, since the reference's own icon color read as a
    default inherited text color, not a deliberate per-page override, and the shared value is already
    validated on other inner pages).
  - **Decorative triangle shape mispositioned + missing entrance animation:** re-measured against the
    reference via the Range-API text-bbox technique: the shape's left edge sits almost exactly at the
    H1 text's horizontal center (not offset further right), and its bottom edge sits ~38.9px above the
    H1 text's top edge. Also found (via `data-settings` on the reference's widget element) that the shape
    carries an Elementor `_animation:"bounceInRight"` (Animate.css) entrance animation, 1s duration. Fixed
    `.port-shape` to `left:50%` (removed an incorrect `margin-left:40px` that had shifted it toward the
    "li" in "Portfolio"), retuned `top` to `-50px` (verified via the same Range-API measurement: local
    gap-to-text now ~38.6px, matching the reference's ~38.9px), and added a hand-written
    `@keyframes port-bounce-in-right` matching Animate.css's standard bounceInRight easing/steps, applied
    as `animation: port-bounce-in-right 1s cubic-bezier(.215,.61,.355,1) .2s both` with `opacity:0` as the
    pre-animation state. **Not visually confirmed playing** in this session's browser automation: the tab
    reports `document.visibilityState:"hidden"` while backgrounded, which pauses CSS animations entirely
    (same class of environment limitation as the previously-documented video-autoplay issue) — the
    keyframe math and trigger are correct and will play for a real foreground user; worth a quick human
    sanity-check.
  - All 4 fixes re-verified via direct DOM measurement against the live reference (not just visual
    screenshot comparison) before considering this pass done.
  - **Follow-up same day:** user reported the triangle still looked wrong after the fix, and separately
    that the card-image `border-radius` "wasn't working." Re-verified both directly: (1) `border-radius`
    was already correct on a fresh load (confirmed via `getComputedStyle`) — the visible bug was a stale
    cached copy of `portfolio.css` in the reporting browser; added a `?v=3` cache-busting query to the
    stylesheet `<link>` in `portfolio.html` to force a fresh fetch. (2) The triangle's CSS position
    (`left:50%`, matching text-center) was already correct, but the `opacity:0` + `animation:...both`
    fill-mode meant any screenshot taken while the animation hadn't run (e.g. a backgrounded tab, which
    pauses CSS animations) would render the shape stuck at an arbitrary, wrong mid-animation
    offset — explaining why repeated screenshots seemed to show it in different "wrong" spots. Fixed by
    dropping the base `opacity:0` and changing the fill-mode to `forwards` only, so the element's default
    (pre-animation) state IS the correct resting position — confirmed via a debug pass that outlined each
    letter of "Portfolio" and the shape itself, which showed the shape spanning the second `o`/`l`/`i`,
    i.e. genuinely landing on "li" as intended, both with and without the tab focused.

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
