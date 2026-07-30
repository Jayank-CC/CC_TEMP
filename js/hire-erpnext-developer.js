(function () {
  "use strict";

  function initTabs(root) {
    var tabs = root.querySelectorAll(".hed-tab");
    var panels = root.querySelectorAll(".hed-tab-panel");
    if (!tabs.length) return;

    function activate(index) {
      tabs.forEach(function (tab, i) {
        var isActive = i === index;
        tab.classList.toggle("is-active", isActive);
        tab.setAttribute("aria-selected", isActive ? "true" : "false");
        tab.tabIndex = isActive ? 0 : -1;
      });
      panels.forEach(function (panel, i) {
        var isActive = i === index;
        panel.classList.toggle("is-active", isActive);
        if (isActive) {
          panel.removeAttribute("hidden");
        } else {
          panel.setAttribute("hidden", "");
        }
      });
    }

    tabs.forEach(function (tab, index) {
      if (tab.dataset.hedBound === "1") return;
      tab.dataset.hedBound = "1";

      tab.addEventListener("click", function () {
        activate(index);
      });

      tab.addEventListener("keydown", function (e) {
        var lastIndex = tabs.length - 1;
        var nextIndex = null;
        if (e.key === "ArrowRight" || e.key === "ArrowDown") {
          nextIndex = index === lastIndex ? 0 : index + 1;
        } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
          nextIndex = index === 0 ? lastIndex : index - 1;
        } else if (e.key === "Home") {
          nextIndex = 0;
        } else if (e.key === "End") {
          nextIndex = lastIndex;
        }
        if (nextIndex !== null) {
          e.preventDefault();
          activate(nextIndex);
          tabs[nextIndex].focus();
        }
      });
    });
  }

  function initAccordion(root) {
    var items = root.querySelectorAll(".hed-acc-item");
    if (!items.length) return;

    items.forEach(function (item) {
      var btn = item.querySelector(".hed-acc-btn");
      var panel = item.querySelector(".hed-acc-panel");
      if (!btn || !panel || btn.dataset.hedBound === "1") return;
      btn.dataset.hedBound = "1";

      btn.addEventListener("click", function () {
        var willOpen = !item.classList.contains("is-open");

        items.forEach(function (other) {
          if (other === item) return;
          other.classList.remove("is-open");
          var otherBtn = other.querySelector(".hed-acc-btn");
          var otherPanel = other.querySelector(".hed-acc-panel");
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
    var form = root.querySelector(".hed-consult-form");
    if (!form || form.dataset.hedBound === "1") return;
    form.dataset.hedBound = "1";

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var honeypot = form.querySelector('input[name="hed_hp"]');
      if (honeypot && honeypot.value) return;

      var success = form.querySelector(".hed-form-success");
      if (success) success.hidden = false;
      form.reset();
    });
  }

  function init() {
    var page = document.querySelector(".hed-page");
    if (!page) return;
    initTabs(page);
    initAccordion(page);
    initConsultForm(page);
  }

  if (window.__hedPageInit) {
    init();
  } else {
    window.__hedPageInit = true;
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", init);
    } else {
      init();
    }
  }
})();
