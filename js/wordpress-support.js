(function () {
  "use strict";

  // ---- FAQ accordion (single-open) -- same pattern as .ssm-acc-item on
  // shopify-support-and-maintenance-services.html, renamed under the wps- prefix. ----
  function initAccordion() {
    const items = document.querySelectorAll(".wps-acc-item");
    if (!items.length) return;

    items.forEach(function (item) {
      const btn = item.querySelector(".wps-acc-btn");
      const panel = item.querySelector(".wps-acc-panel");
      if (!btn || !panel || btn.dataset.wpsBound === "1") return;
      btn.dataset.wpsBound = "1";

      btn.addEventListener("click", function () {
        const willOpen = !item.classList.contains("is-open");

        items.forEach(function (other) {
          if (other === item) return;
          other.classList.remove("is-open");
          const otherBtn = other.querySelector(".wps-acc-btn");
          const otherPanel = other.querySelector(".wps-acc-panel");
          if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
          if (otherPanel) otherPanel.setAttribute("hidden", "");
        });

        item.classList.toggle("is-open", willOpen);
        btn.setAttribute("aria-expanded", willOpen ? "true" : "false");
        if (willOpen) {
          panel.removeAttribute("hidden");
        } else {
          panel.setAttribute("hidden", "");
        }
      });
    });
  }

  // ---- Scroll-triggered fade-in entrance (reference's own "animation":"fadeIn" -- a plain
  // opacity fade, no slide, confirmed via data-settings on the live reference). One-time per
  // element via IntersectionObserver, with a prefers-reduced-motion fallback. ----
  function initFadeIn() {
    const els = document.querySelectorAll(".wps-fade-in");
    if (!els.length) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!("IntersectionObserver" in window) || reducedMotion.matches) {
      els.forEach(function (el) { el.classList.add("wps-in-view"); });
      return;
    }
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("wps-in-view");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.2 });
    els.forEach(function (el) { observer.observe(el); });
  }

  // ---- Lead-capture forms (honeypot + fake success; static replica, no backend) ----
  function initForms() {
    document.querySelectorAll(".wps-hero-form-card form, .wps-contact-card form").forEach(function (form) {
      if (form.dataset.wpsBound === "1") return;
      form.dataset.wpsBound = "1";

      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const honeypot = form.querySelector('input[name="ccl_hp"]');
        if (honeypot && honeypot.value) return;
        form.reset();
      });
    });
  }

  function init() {
    initAccordion();
    initFadeIn();
    initForms();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
