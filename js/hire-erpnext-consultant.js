(function () {
  "use strict";

  function initAccordion(root) {
    var items = root.querySelectorAll(".hec-acc-item");
    if (!items.length) return;

    items.forEach(function (item) {
      var btn = item.querySelector(".hec-acc-btn");
      var panel = item.querySelector(".hec-acc-panel");
      if (!btn || !panel || btn.dataset.hecBound === "1") return;
      btn.dataset.hecBound = "1";

      btn.addEventListener("click", function () {
        var willOpen = !item.classList.contains("is-open");

        items.forEach(function (other) {
          if (other === item) return;
          other.classList.remove("is-open");
          var otherBtn = other.querySelector(".hec-acc-btn");
          var otherPanel = other.querySelector(".hec-acc-panel");
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

  function initConsultForm(root) {
    var form = root.querySelector(".hec-consult-form");
    if (!form || form.dataset.hecBound === "1") return;
    form.dataset.hecBound = "1";

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var honeypot = form.querySelector('input[name="hec_hp"]');
      if (honeypot && honeypot.value) return;

      var success = form.querySelector(".hec-form-success");
      if (success) success.hidden = false;
      form.reset();
    });
  }

  function init() {
    var page = document.querySelector(".hec-page");
    if (!page) return;
    initAccordion(page);
    initConsultForm(page);
  }

  if (window.__hecPageInit) {
    init();
  } else {
    window.__hecPageInit = true;
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", init);
    } else {
      init();
    }
  }
})();
