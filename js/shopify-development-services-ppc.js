(function () {
  "use strict";

  if (window.__shopifyPpcPageInit) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  // ---- Portfolio carousel: reproduces the reference's own Swiper instance exactly (re-confirmed
  // by reading the live widget's actual `.swiper.params` object, not just the raw data-settings
  // JSON): speed:5000 (each slide-to-slide transition animates over 5s) and autoplay
  // delay:1000 (the slide then sits still for 1s before the next transition starts). Swiper's
  // default autoplay is sequential, not overlapping -- pause, then transition, then pause again
  // -- which is exactly the "one image goes, other comes in, then a pause" behavior described
  // against the live reference, and NOT the continuous overlapping glide an earlier pass here
  // wrongly modeled from a surface reading of the settings JSON alone. ----
  (function workCarousel() {
    const viewport = document.querySelector(".shppc-work-viewport");
    const track = document.querySelector(".shppc-work-track");
    const prevBtn = document.querySelector(".shppc-work-prev");
    const nextBtn = document.querySelector(".shppc-work-next");
    if (!viewport || !track) return;

    const PAUSE_MS = 1000;
    const TRANSITION_MS = 5000;

    const originals = Array.from(track.children);
    let visible = 4, index = 0, step = 0, autoplayId = 0, moving = false, lastBreakpoint = "", stopped = false;

    function breakpoint() {
      const w = window.innerWidth;
      if (w <= 480) return "mobile";
      if (w <= 767) return "mobile-extra";
      if (w <= 1024) return "tablet";
      return "desktop";
    }
    function visibleFor(bp) {
      if (bp === "mobile") return 1;
      if (bp === "mobile-extra") return 2;
      if (bp === "tablet") return 3;
      return 4;
    }
    function transition(on) { track.style.transition = on ? "transform " + TRANSITION_MS + "ms cubic-bezier(.4,0,.2,1)" : "none"; }
    function position(animate) { transition(animate); track.style.transform = "translate3d(" + (-(index * step)) + "px,0,0)"; }

    function normalize() {
      while (index >= originals.length + visible) index -= originals.length;
      while (index < visible) index += originals.length;
      position(false);
    }

    // Sequential autoplay cycle: sit still for PAUSE_MS, run one TRANSITION_MS move, wait for the
    // transition to genuinely finish, normalize the loop if needed, then schedule the next pause.
    function scheduleNext() {
      window.clearTimeout(autoplayId);
      if (stopped) return;
      autoplayId = window.setTimeout(function () {
        if (stopped || !step) return;
        moving = true;
        index += 1;
        position(true);
      }, PAUSE_MS);
    }

    function move(next) {
      if (moving || !step) return;
      window.clearTimeout(autoplayId);
      moving = true;
      index = next;
      position(true);
    }

    function measure() {
      const figure = track.querySelector("figure");
      if (!figure) return;
      step = figure.getBoundingClientRect().width;
      position(false);
    }

    function stop() { stopped = true; window.clearTimeout(autoplayId); }
    function start() { stopped = reducedMotion.matches; if (!stopped) scheduleNext(); }

    function build() {
      lastBreakpoint = breakpoint();
      visible = visibleFor(lastBreakpoint);
      stop();
      moving = false;
      track.replaceChildren();
      originals.slice(-visible).forEach(function (fig) {
        const clone = fig.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        track.appendChild(clone);
      });
      originals.forEach(function (fig) { track.appendChild(fig); });
      originals.slice(0, visible).forEach(function (fig) {
        const clone = fig.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        track.appendChild(clone);
      });
      index = visible;
      // Measure/start synchronously (getBoundingClientRect already forces a layout pass) rather
      // than waiting on requestAnimationFrame -- rAF never fires while document.hidden is true,
      // which this project's own automated browser-testing tab reports permanently regardless of
      // real tab focus, so an rAF-gated init could never be verified in this environment and is
      // also strictly unnecessary for real visitors.
      measure();
      start();
    }

    track.addEventListener("transitionend", function (event) {
      if (event.propertyName !== "transform") return;
      moving = false;
      normalize();
      if (!stopped) scheduleNext();
    });
    if (prevBtn) prevBtn.addEventListener("click", function () { move(index - 1); });
    if (nextBtn) nextBtn.addEventListener("click", function () { move(index + 1); });
    viewport.addEventListener("mouseenter", stop);
    viewport.addEventListener("mouseleave", function () { if (!moving) { stopped = false; scheduleNext(); } });

    let resizeId = 0;
    window.addEventListener("resize", function () {
      window.clearTimeout(resizeId);
      resizeId = window.setTimeout(function () {
        if (breakpoint() !== lastBreakpoint) build();
        else { moving = false; normalize(); measure(); }
      }, 120);
    });

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", build);
    } else {
      build();
    }
  })();

  // ---- Testimonial card entrance animation: reproduces the reference's own Elementor
  // scroll-triggered "fadeInUp" + "animated-fast" entrance effect (re-confirmed via each inner
  // section's own data-settings + elementor-invisible class on the live DOM) -- each card starts
  // faded/slid down 20px (set in CSS) and fades/slides up once it first scrolls into view, then
  // stays put (one-time, not a repeating/hover effect). ----
  (function testimonialEntrance() {
    const cards = document.querySelectorAll(".shppc-testimonial-card");
    if (!cards.length) return;
    if (!("IntersectionObserver" in window) || reducedMotion.matches) {
      cards.forEach(function (card) { card.classList.add("shppc-in-view"); });
      return;
    }
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("shppc-in-view");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.2 });
    cards.forEach(function (card) { observer.observe(card); });
  })();

  // ---- Static lead-capture form: no backend exists locally, so prevent the default navigation
  // submit and show a lightweight inline confirmation instead (idempotent single listener). ----
  (function staticForm() {
    const form = document.querySelector(".shppc-cwu-form-wrap .contact-form");
    if (!form || form.__shppcBound) return;
    form.__shppcBound = true;
    form.addEventListener("submit", function (event) {
      event.preventDefault();
    });
  })();

  window.__shopifyPpcPageInit = true;
})();
