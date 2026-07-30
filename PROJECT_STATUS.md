# Project Status

## Current task

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
