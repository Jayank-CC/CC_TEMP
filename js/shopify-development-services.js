(function () {
  "use strict";

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  // ---- "Previous development work" carousel (2 visible, clone-based infinite loop, arrows + autoplay) ----
  (function workCarousel() {
    const viewport = document.querySelector(".shpd-work-viewport");
    const track = document.querySelector(".shpd-work-track");
    const prevBtn = document.querySelector(".shpd-work-prev");
    const nextBtn = document.querySelector(".shpd-work-next");
    if (!viewport || !track) return;

    const originals = Array.from(track.children);
    let visible = 1, index = 0, step = 0, autoplayId = 0, moving = false, settleId = 0, lastBreakpoint = "";

    function breakpoint() { return window.innerWidth <= 991 ? "mobile" : "desktop"; }
    function transition(on) { track.style.transition = on ? "transform .5s cubic-bezier(.25,.46,.45,.94)" : "none"; }
    function position(animate) { transition(animate); track.style.transform = "translate3d(" + (-(index * step)) + "px,0,0)"; }

    function normalize() {
      window.clearTimeout(settleId);
      while (index >= originals.length + visible) index -= originals.length;
      while (index < visible) index += originals.length;
      position(false);
      moving = false;
    }

    function move(next) {
      if (moving || !step) return;
      index = next;
      moving = true;
      position(true);
      window.clearTimeout(settleId);
      settleId = window.setTimeout(normalize, 650);
    }

    function measure() {
      const figure = track.querySelector("figure");
      if (!figure) return;
      step = figure.getBoundingClientRect().width;
      position(false);
    }

    function stop() { window.clearInterval(autoplayId); autoplayId = 0; }
    function start() { stop(); if (!reducedMotion.matches) autoplayId = window.setInterval(function () { move(index + 1); }, 5000); }

    function build() {
      lastBreakpoint = breakpoint();
      visible = 1;
      stop();
      window.clearTimeout(settleId);
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
      requestAnimationFrame(function () { measure(); start(); });
    }

    track.addEventListener("transitionend", function (event) { if (event.propertyName === "transform") normalize(); });
    if (prevBtn) prevBtn.addEventListener("click", function () { move(index - 1); });
    if (nextBtn) nextBtn.addEventListener("click", function () { move(index + 1); });
    viewport.addEventListener("mouseenter", stop);
    viewport.addEventListener("mouseleave", start);

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

  // ---- Testimonial carousel (bounded drag + autoplay + clone-based infinite loop) ----
  (function reviewCarousel() {
    const viewport = document.querySelector(".shpd-review-viewport");
    const track = document.querySelector(".shpd-review-track");
    if (!viewport || !track) return;

    const originals = Array.from(track.children);
    let visible = 2, index = 0, step = 0, autoplayId = 0, dragging = false, startX = 0, dragX = 0, moving = false, settleId = 0, lastBreakpoint = "";

    function breakpoint() { return window.innerWidth <= 767 ? "mobile" : "desktop"; }
    function transition(on) { track.style.transition = on ? "transform .42s cubic-bezier(.25,.46,.45,.94)" : "none"; }
    function position(animate, offset) { transition(animate); track.style.transform = "translate3d(" + (-(index * step) + (offset || 0)) + "px,0,0)"; }

    function normalize() {
      window.clearTimeout(settleId);
      while (index >= originals.length + visible) index -= originals.length;
      while (index < visible) index += originals.length;
      position(false, 0);
      moving = false;
    }

    function move(next) {
      if (moving || dragging || !step) return;
      index = Math.max(visible - 1, Math.min(originals.length + visible, next));
      moving = true;
      position(true, 0);
      window.clearTimeout(settleId);
      settleId = window.setTimeout(normalize, 600);
    }

    function measure() {
      const card = track.querySelector(".shpd-review-card");
      if (!card) return;
      const styles = getComputedStyle(track);
      step = card.getBoundingClientRect().width + (parseFloat(styles.columnGap || styles.gap) || 0);
      position(false, 0);
    }

    function stop() { window.clearInterval(autoplayId); autoplayId = 0; }
    function start() { stop(); if (!reducedMotion.matches) autoplayId = window.setInterval(function () { move(index + 1); }, 4500); }

    function build() {
      lastBreakpoint = breakpoint();
      visible = lastBreakpoint === "mobile" ? 1 : 2;
      stop();
      window.clearTimeout(settleId);
      moving = false;
      track.replaceChildren();
      originals.slice(-visible).forEach(function (card) {
        const clone = card.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        track.appendChild(clone);
      });
      originals.forEach(function (card) { track.appendChild(card); });
      originals.slice(0, visible).forEach(function (card) {
        const clone = card.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        track.appendChild(clone);
      });
      index = visible + 2;
      requestAnimationFrame(function () { measure(); start(); });
    }

    track.addEventListener("transitionend", function (event) { if (event.propertyName === "transform") normalize(); });
    viewport.addEventListener("pointerdown", function (event) {
      if ((event.pointerType === "mouse" && event.button !== 0) || moving) return;
      dragging = true;
      startX = event.clientX;
      dragX = 0;
      viewport.classList.add("is-dragging");
      viewport.setPointerCapture(event.pointerId);
      stop();
      transition(false);
    });
    viewport.addEventListener("pointermove", function (event) {
      if (!dragging) return;
      dragX = Math.max(-step, Math.min(step, event.clientX - startX));
      position(false, dragX);
    });

    function finish(event) {
      if (!dragging) return;
      dragging = false;
      viewport.classList.remove("is-dragging");
      if (viewport.hasPointerCapture(event.pointerId)) viewport.releasePointerCapture(event.pointerId);
      move(Math.abs(dragX) > Math.min(80, step * 0.18) ? index + (dragX < 0 ? 1 : -1) : index);
      start();
    }

    viewport.addEventListener("pointerup", finish);
    viewport.addEventListener("pointercancel", finish);
    viewport.addEventListener("mouseenter", stop);
    viewport.addEventListener("mouseleave", function () { if (!dragging) start(); });

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

  window.__shopifyPageInit = true;
})();
