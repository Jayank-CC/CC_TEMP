---
paths:
  - "**/*.js"
---

# JavaScript Rules

## Technology

- Use vanilla JavaScript only.
- Do not add jQuery, frontend frameworks, component libraries, or remote production scripts.
- Prefer small reusable functions over repeated event-handling blocks.

## Shared partial architecture

- `js/header.js` defines the reusable header partial through `window.__PARTIALS`.
- `js/footer.js` defines the reusable footer partial through `window.__PARTIALS`.
- `js/include.js` injects `site-header-placeholder` and `site-footer-placeholder` without `fetch()`.
- `js/script.js` defines shared behavior through `window.initSite`.

Never:

- Replace the partial architecture with fetched HTML files
- Duplicate header/footer markup in page scripts
- Create page-specific header/footer copies
- Initialize shared header/footer interactions before injection
- Use `async` for dependent shared scripts

## Initialization

- Initialize shared behavior only after partial injection through `window.initSite`.
- Make initialization idempotent.
- Prevent duplicate listeners, observers, timers, counters, and carousel instances.
- Use a stable initialization marker when appropriate, for example `data-initialized="true"`.
- Scope queries to the relevant component or root when practical.
- Handle missing optional elements without throwing errors.

## Reuse

Before creating a function:

1. Search `js/script.js` and related files for existing behavior.
2. Reuse or generalize an existing function when behavior matches.
3. Add configuration rather than copying nearly identical logic.
4. Create a new function only for a genuine interaction difference.

Good reusable candidates include:

- Dropdown and mega-menu controls
- Mobile-menu toggling
- Body scroll locking
- Escape-key handling
- Accordion and tab behavior
- Slider/carousel controls
- Form validation
- Intersection Observer setup
- Counter initialization

## Reference behavior

- Reproduce only interactions visible on the reference.
- Do not invent animation, autoplay, counters, or controls.
- Keep static values static when the reference does not animate them.
- Match opening/closing behavior, active states, keyboard behavior, and timing.
- Ensure visible buttons and controls work.
- Preserve touch behavior on mobile.

## Events and performance

- Avoid repeated document-wide listeners when delegation or component-scoped listeners are suitable.
- Avoid layout-thrashing read/write loops.
- Debounce or throttle expensive resize/scroll handlers when needed.
- Prefer CSS for purely visual hover and transition effects.
- Use observers instead of continuous polling when appropriate.
- Remove temporary logs and debugging code before completion.

## Error handling and QA

- Do not allow missing optional components to break the entire page.
- Check Console output after changes.
- Verify shared injection and `window.initSite` on every page.
- Test desktop navigation, mega panels, mobile menu, keyboard interaction, sliders/carousels, forms, and floating controls where present.
- After shared JavaScript changes, retest all pages affected by the shared behavior.
