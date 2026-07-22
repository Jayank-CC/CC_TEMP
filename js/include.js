/* Injects the shared header and footer partials (js/header.js, js/footer.js)
   into their placeholders, then initializes all page interactions
   (window.initSite from script.js). No fetch involved, so the page works
   both when opened directly from disk and when served over HTTP. */
(function () {
  'use strict';

  function inject(placeholderId, html) {
    var placeholder = document.getElementById(placeholderId);
    if (placeholder && html) placeholder.outerHTML = html;
  }

  var partials = window.__PARTIALS || {};
  inject('site-header-placeholder', partials.header);
  inject('site-footer-placeholder', partials.footer);

  if (window.initSite) window.initSite();
})();
