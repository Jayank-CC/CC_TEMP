# Project Status

## Current task

- **Reference:** https://www.cloudconverge.io/mobile-app-development/
- **Local target:** `mobile-app-development.html`
- **State:** Corrected and verified at the available desktop viewport
- **Last updated:** 2026-07-22

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
