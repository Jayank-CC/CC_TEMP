(function () {
  "use strict";

  const viewport = document.querySelector(".services-review-viewport");
  const track = document.querySelector(".services-review-track");
  if (!viewport || !track) return;

  const originals = Array.from(track.children);
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let visible = 2;
  let index = 0;
  let step = 0;
  let autoplayId = 0;
  let dragging = false;
  let startX = 0;
  let dragX = 0;
  let lastBreakpoint = "";
  let moving = false;
  let settleId = 0;

  function breakpoint() {
    return window.innerWidth <= 767 ? "mobile" : "desktop";
  }

  function setTransition(enabled) {
    track.style.transition = enabled
      ? "transform .42s cubic-bezier(.25,.46,.45,.94)"
      : "none";
  }

  function position(animate, offset) {
    setTransition(animate);
    track.style.transform = `translate3d(${-(index * step) + (offset || 0)}px,0,0)`;
  }

  function normalize() {
    window.clearTimeout(settleId);
    settleId = 0;

    while (index >= originals.length + visible) index -= originals.length;
    while (index < visible) index += originals.length;

    position(false, 0);
    moving = false;
  }

  function animateTo(nextIndex) {
    if (moving || dragging || !step) return false;
    index = Math.max(visible - 1, Math.min(originals.length + visible, nextIndex));
    moving = true;
    position(true, 0);

    // Background tabs and interrupted pointer gestures do not always emit
    // transitionend. This fallback keeps the track inside the clone buffer.
    window.clearTimeout(settleId);
    settleId = window.setTimeout(normalize, 600);
    return true;
  }

  function measure() {
    const first = track.querySelector(".services-review-card");
    if (!first) return;
    const styles = getComputedStyle(track);
    const gap = parseFloat(styles.columnGap || styles.gap) || 0;
    step = first.getBoundingClientRect().width + gap;
    position(false, 0);
  }

  function stopAutoplay() {
    window.clearInterval(autoplayId);
    autoplayId = 0;
  }

  function startAutoplay() {
    stopAutoplay();
    if (reducedMotion.matches) return;
    autoplayId = window.setInterval(function () {
      animateTo(index + 1);
    }, 4500);
  }

  function build() {
    lastBreakpoint = breakpoint();
    visible = lastBreakpoint === "mobile" ? 1 : 2;
    stopAutoplay();
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

    // The reference carousel opens on Samuel Correns and Kabu Projects.
    index = visible + 2;
    requestAnimationFrame(function () {
      measure();
      startAutoplay();
    });
  }

  track.addEventListener("transitionend", function (event) {
    if (event.propertyName !== "transform") return;
    normalize();
  });

  viewport.addEventListener("pointerdown", function (event) {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    if (moving) return;
    dragging = true;
    startX = event.clientX;
    dragX = 0;
    viewport.classList.add("is-dragging");
    viewport.setPointerCapture(event.pointerId);
    stopAutoplay();
    setTransition(false);
  });

  viewport.addEventListener("pointermove", function (event) {
    if (!dragging) return;
    dragX = Math.max(-step, Math.min(step, event.clientX - startX));
    position(false, dragX);
  });

  function finishDrag(event) {
    if (!dragging) return;
    dragging = false;
    viewport.classList.remove("is-dragging");
    if (viewport.hasPointerCapture(event.pointerId)) viewport.releasePointerCapture(event.pointerId);
    const nextIndex = Math.abs(dragX) > Math.min(80, step * .18)
      ? index + (dragX < 0 ? 1 : -1)
      : index;
    animateTo(nextIndex);
    startAutoplay();
  }

  viewport.addEventListener("pointerup", finishDrag);
  viewport.addEventListener("pointercancel", finishDrag);
  viewport.addEventListener("mouseenter", stopAutoplay);
  viewport.addEventListener("mouseleave", function () {
    if (!dragging) startAutoplay();
  });
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) stopAutoplay(); else startAutoplay();
  });

  let resizeId = 0;
  window.addEventListener("resize", function () {
    window.clearTimeout(resizeId);
    resizeId = window.setTimeout(function () {
      if (breakpoint() !== lastBreakpoint) {
        build();
      } else {
        window.clearTimeout(settleId);
        moving = false;
        normalize();
        measure();
      }
    }, 120);
  });

  build();
}());
