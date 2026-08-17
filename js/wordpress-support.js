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
    initForms();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
