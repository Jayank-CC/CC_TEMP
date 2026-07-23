(function () {
  "use strict";

  var workTrack = document.querySelector(".iad-work-track");
  var workPrev = document.querySelector(".iad-work-prev");
  var workNext = document.querySelector(".iad-work-next");
  var workSlides = workTrack ? Array.from(workTrack.children) : [];
  var workIndex = 1;
  var workMoving = false;
  var workSettleId = 0;
  var workAutoplayId = 0;
  var workReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  function transitionWork(enabled) { if (workTrack) workTrack.style.transition = enabled ? "transform .65s cubic-bezier(.25,.46,.45,.94)" : "none"; }
  function positionWork(animate) { if (!workTrack) return; transitionWork(animate); workTrack.style.transform = "translate3d(" + (-workIndex * 100) + "%,0,0)"; }
  function normalizeWork() {
    window.clearTimeout(workSettleId);
    if (workIndex === 0) workIndex = workSlides.length;
    else if (workIndex === workSlides.length + 1) workIndex = 1;
    positionWork(false);
    workMoving = false;
  }
  function moveWork(direction) {
    if (!workTrack || workSlides.length < 2 || workMoving) return;
    if (workReducedMotion.matches) {
      workIndex = ((workIndex - 1 + direction + workSlides.length) % workSlides.length) + 1;
      positionWork(false);
      return;
    }
    workMoving = true;
    workIndex += direction;
    positionWork(true);
    window.clearTimeout(workSettleId);
    workSettleId = window.setTimeout(normalizeWork, 850);
  }
  function stopWork() { window.clearInterval(workAutoplayId); workAutoplayId = 0; }
  function startWork() { stopWork(); if (!workReducedMotion.matches && workSlides.length > 1) workAutoplayId = window.setInterval(function () { moveWork(1); }, 5500); }
  function buildWork() {
    if (!workTrack || workSlides.length < 2) return;
    var firstClone = workSlides[0].cloneNode(true);
    var lastClone = workSlides[workSlides.length - 1].cloneNode(true);
    firstClone.setAttribute("aria-hidden", "true");
    lastClone.setAttribute("aria-hidden", "true");
    workTrack.replaceChildren(lastClone);
    workSlides.forEach(function (slide) { workTrack.appendChild(slide); });
    workTrack.appendChild(firstClone);
    workIndex = 1;
    positionWork(false);
    startWork();
  }
  if (workTrack) {
    workTrack.addEventListener("transitionend", function (event) { if (event.propertyName === "transform" && workMoving) normalizeWork(); });
    window.addEventListener("resize", function () { positionWork(false); });
  }
  if (workPrev) workPrev.addEventListener("click", function () { stopWork(); moveWork(-1); startWork(); });
  if (workNext) workNext.addEventListener("click", function () { stopWork(); moveWork(1); startWork(); });
  buildWork();

  var form = document.querySelector(".iad-consult-form");
  if (form) { form.addEventListener("submit", function (event) { event.preventDefault(); if (!form.checkValidity()) { form.reportValidity(); return; } var message = form.querySelector(".iad-form-success"); if (message) message.hidden = false; form.reset(); }); }

  var revealTargets = document.querySelectorAll(".iad-service-card");
  revealTargets.forEach(function (target) { target.classList.add("iad-reveal"); });
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var observer = new IntersectionObserver(function (entries) { entries.forEach(function (entry) { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }); }, { threshold: .1 });
    revealTargets.forEach(function (target) { observer.observe(target); });
  } else { revealTargets.forEach(function (target) { target.classList.add("is-visible"); }); }

  var viewport = document.querySelector(".iad-review-viewport");
  var track = document.querySelector(".iad-review-track");
  if (!viewport || !track) return;
  var originals = Array.from(track.children);
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var visible = 2, index = 0, step = 0, autoplayId = 0, dragging = false, startX = 0, dragX = 0, moving = false, settleId = 0, lastBreakpoint = "";
  function breakpoint() { return window.innerWidth <= 767 ? "mobile" : "desktop"; }
  function transition(enabled) { track.style.transition = enabled ? "transform .42s cubic-bezier(.25,.46,.45,.94)" : "none"; }
  function position(animate, offset) { transition(animate); track.style.transform = "translate3d(" + (-(index * step) + (offset || 0)) + "px,0,0)"; }
  function normalize() { window.clearTimeout(settleId); while (index >= originals.length + visible) index -= originals.length; while (index < visible) index += originals.length; position(false, 0); moving = false; }
  function move(next) { if (moving || dragging || !step) return; index = Math.max(visible - 1, Math.min(originals.length + visible, next)); moving = true; position(true, 0); window.clearTimeout(settleId); settleId = window.setTimeout(normalize, 600); }
  function measure() { var card = track.querySelector(".iad-review-card"); if (!card) return; var styles = getComputedStyle(track); step = card.getBoundingClientRect().width + (parseFloat(styles.columnGap || styles.gap) || 0); position(false, 0); }
  function stop() { window.clearInterval(autoplayId); autoplayId = 0; }
  function start() { stop(); }
  function build() { lastBreakpoint = breakpoint(); visible = lastBreakpoint === "mobile" ? 1 : 2; stop(); window.clearTimeout(settleId); moving = false; track.replaceChildren(); originals.slice(-visible).forEach(function (card) { var clone = card.cloneNode(true); clone.setAttribute("aria-hidden", "true"); track.appendChild(clone); }); originals.forEach(function (card) { track.appendChild(card); }); originals.slice(0, visible).forEach(function (card) { var clone = card.cloneNode(true); clone.setAttribute("aria-hidden", "true"); track.appendChild(clone); }); index = visible + 2; requestAnimationFrame(function () { measure(); start(); }); }
  track.addEventListener("transitionend", function (event) { if (event.propertyName === "transform") normalize(); });
  viewport.addEventListener("pointerdown", function (event) { if ((event.pointerType === "mouse" && event.button !== 0) || moving) return; dragging = true; startX = event.clientX; dragX = 0; viewport.classList.add("is-dragging"); viewport.setPointerCapture(event.pointerId); stop(); transition(false); });
  viewport.addEventListener("pointermove", function (event) { if (!dragging) return; dragX = Math.max(-step, Math.min(step, event.clientX - startX)); position(false, dragX); });
  function finish(event) { if (!dragging) return; dragging = false; viewport.classList.remove("is-dragging"); if (viewport.hasPointerCapture(event.pointerId)) viewport.releasePointerCapture(event.pointerId); move(Math.abs(dragX) > Math.min(80, step * .18) ? index + (dragX < 0 ? 1 : -1) : index); start(); }
  viewport.addEventListener("pointerup", finish); viewport.addEventListener("pointercancel", finish); viewport.addEventListener("mouseenter", stop); viewport.addEventListener("mouseleave", function () { if (!dragging) start(); });
  var resizeId = 0; window.addEventListener("resize", function () { window.clearTimeout(resizeId); resizeId = window.setTimeout(function () { if (breakpoint() !== lastBreakpoint) build(); else { moving = false; normalize(); measure(); } }, 120); });
  build();
}());
