/* ERPNext Service Provider page interactions.
   Loaded after js/include.js, so the shared header/footer are already injected
   and window.initSite() has already run. Guarded so a repeated run is harmless. */
(function () {
  "use strict";

  if (window.__erpnextPageInit) return;
  window.__erpnextPageInit = true;

  var reduceMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Case-study image carousel ---------- */
  (function carousel() {
    var track = document.querySelector(".erp-carousel-track");
    var viewport = document.querySelector(".erp-carousel-viewport");
    if (!track || !viewport) return;

    var slides = Array.prototype.slice.call(track.children);
    if (slides.length < 2) return;

    var prev = document.querySelector(".erp-carousel-prev");
    var next = document.querySelector(".erp-carousel-next");
    var AUTOPLAY_MS = 5000;
    var SPEED_MS = 500;
    var index = 0;
    var timer = null;

    function render(animate) {
      track.style.transition = (animate && !reduceMotion)
        ? "transform " + SPEED_MS + "ms ease"
        : "none";
      track.style.transform = "translate3d(" + (-index * 100) + "%,0,0)";
      slides.forEach(function (s, i) {
        s.setAttribute("aria-hidden", i === index ? "false" : "true");
      });
    }

    function go(delta) {
      index = (index + delta + slides.length) % slides.length;
      render(true);
    }

    function start() {
      if (reduceMotion) return;
      stop();
      timer = window.setInterval(function () { go(1); }, AUTOPLAY_MS);
    }

    function stop() {
      if (timer) { window.clearInterval(timer); timer = null; }
    }

    if (prev) {
      prev.addEventListener("click", function () { go(-1); stop(); start(); });
    }
    if (next) {
      next.addEventListener("click", function () { go(1); stop(); start(); });
    }

    viewport.addEventListener("mouseenter", stop);
    viewport.addEventListener("mouseleave", start);
    viewport.addEventListener("focusin", stop);

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) { stop(); } else { start(); }
    });

    render(false);
    start();
  }());

  /* ---------- Case-study tabs ---------- */
  (function tabs() {
    var list = document.querySelector(".erp-tab-list");
    if (!list) return;

    var buttons = Array.prototype.slice.call(list.querySelectorAll(".erp-tab"));
    var panels = Array.prototype.slice.call(
      document.querySelectorAll(".erp-tab-panels .erp-tab-panel"));
    if (!buttons.length || buttons.length !== panels.length) return;

    function select(i, focus) {
      buttons.forEach(function (btn, n) {
        var active = n === i;
        btn.classList.toggle("is-active", active);
        btn.setAttribute("aria-selected", active ? "true" : "false");
        btn.tabIndex = active ? 0 : -1;
      });
      panels.forEach(function (panel, n) {
        var active = n === i;
        panel.classList.toggle("is-active", active);
        if (active) { panel.removeAttribute("hidden"); }
        else { panel.setAttribute("hidden", ""); }
      });
      if (focus) buttons[i].focus();
    }

    buttons.forEach(function (btn, i) {
      btn.addEventListener("click", function () { select(i, false); });
      btn.addEventListener("keydown", function (e) {
        var last = buttons.length - 1;
        if (e.key === "ArrowDown" || e.key === "ArrowRight") {
          e.preventDefault();
          select(i === last ? 0 : i + 1, true);
        } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
          e.preventDefault();
          select(i === 0 ? last : i - 1, true);
        } else if (e.key === "Home") {
          e.preventDefault();
          select(0, true);
        } else if (e.key === "End") {
          e.preventDefault();
          select(last, true);
        }
      });
    });
  }());

  /* ---------- FAQ accordion (single open, matching the reference) ---------- */
  (function accordion() {
    var root = document.querySelector(".erp-accordion");
    if (!root) return;

    var items = Array.prototype.slice.call(root.querySelectorAll(".erp-acc-item"));
    if (!items.length) return;

    items.forEach(function (item) {
      var btn = item.querySelector(".erp-acc-btn");
      var panel = item.querySelector(".erp-acc-panel");
      if (!btn || !panel) return;

      btn.addEventListener("click", function () {
        var willOpen = !item.classList.contains("is-open");

        items.forEach(function (other) {
          var otherBtn = other.querySelector(".erp-acc-btn");
          var otherPanel = other.querySelector(".erp-acc-panel");
          other.classList.remove("is-open");
          if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
          if (otherPanel) otherPanel.setAttribute("hidden", "");
        });

        if (willOpen) {
          item.classList.add("is-open");
          btn.setAttribute("aria-expanded", "true");
          panel.removeAttribute("hidden");
        }
      });
    });
  }());

  /* ---------- Consultation form ---------- */
  (function consultForm() {
    var form = document.querySelector(".erp-consult-form");
    if (!form) return;

    var success = form.querySelector(".erp-form-success");
    var honeypot = form.querySelector('input[name="erp_hp"]');

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (honeypot && honeypot.value) return;
      if (!form.checkValidity()) { form.reportValidity(); return; }
      if (success) success.hidden = false;
      form.reset();
    });
  }());

  /* ---------- Reveal on scroll ---------- */
  (function reveal() {
    var targets = Array.prototype.slice.call(
      document.querySelectorAll(".erp-service-card, .erp-module, .erp-industry"));
    if (!targets.length) return;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      targets.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    targets.forEach(function (el) { el.classList.add("erp-reveal"); });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      });
    }, { threshold: 0.1 });

    targets.forEach(function (el) { io.observe(el); });
  }());
}());
