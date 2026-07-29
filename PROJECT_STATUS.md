# Project Status

## Current task

- **Reference:** https://www.cloudconverge.io/erpnext-service-provider/
- **Local target:** `erpnext-service-provider.html` (new page, first build)
- **State:** BUILT BUT NOT VISUALLY VERIFIED — blocked on assets and on any way to render the page
- **Last updated:** 2026-07-29

### Next action

1. Add the 37 images listed in `ERPNEXT_ASSETS_TODO.md` to `assets/images/`, then delete that file.
2. Render `erpnext-service-provider.html` beside the reference and compare at 1920/1440/1366/1280/1024/768/480/390/360.
3. Correct measured differences, then re-run the reuse/dead-code audit.

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

### NOT verified — do not treat this page as complete

- No rendered screenshot comparison at any viewport. Nothing below has been checked visually:
  section boundaries, typography, gaps, responsive behavior, horizontal overflow, hover states,
  carousel/tab/accordion behavior in a real browser, console output, network results.
- 37 referenced images do not exist yet, so the page currently renders with broken media.
- Responsive rules at 1199 / 767 / 380 are reasoned from the reference's Elementor breakpoints, not
  measured. Expect these to need correction once the page can be rendered.

### Session blockers encountered

- The sandbox HTTP proxy rejects `cloudconverge.io` with `blocked-by-allowlist`, so the reference
  images could not be downloaded. `ERPNEXT_ASSETS_TODO.md` lists every source URL and target filename.
- The browser extension refuses `file://` URLs, and the Chrome-for-Testing download host is also
  proxy-blocked, so neither the in-app browser nor a headless Chrome could open the local page.
  Visual comparison is impossible until one of those paths is available.

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
