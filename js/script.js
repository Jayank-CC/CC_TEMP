/* CloudConverge replica — vanilla JS interactions
   1. Typed hero text        5. Case-study background slider
   2. Sticky header          6. Animated counters
   3. Mega menus + tabs      7. Scroll-reveal
   4. Mobile menu            8. Contact form validation

   Initialization is deferred: include.js injects header.html and
   footer.html into the page, then calls window.initSite().
*/
window.initSite = function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 1. Typed hero text ---------- */
  (function typedHero() {
    var el = document.getElementById('typed-text');
    if (!el) return;
    var strings = ['Innovative Solutions', 'AI Solutions', 'Cloud Based Solutions'];
    if (reduceMotion) { el.textContent = strings[0]; return; }
    var typeSpeed = 70, backSpeed = 20, backDelay = 2000;
    var idx = 0, pos = 0, deleting = false;

    function tick() {
      var word = strings[idx];
      if (!deleting) {
        pos++;
        el.textContent = word.slice(0, pos);
        if (pos === word.length) {
          deleting = true;
          setTimeout(tick, backDelay);
          return;
        }
        setTimeout(tick, typeSpeed);
      } else {
        pos--;
        el.textContent = word.slice(0, pos);
        if (pos === 0) {
          deleting = false;
          idx = (idx + 1) % strings.length;
        }
        setTimeout(tick, deleting ? backSpeed : 500);
      }
    }
    el.textContent = '';
    setTimeout(tick, 500);
  })();

  /* ---------- 2. Sticky header ---------- */
  (function stickyHeader() {
    var header = document.getElementById('site-header');
    if (!header) return;
    var stuck = false;
    function onScroll() {
      var shouldStick = window.scrollY > 150;
      if (shouldStick !== stuck) {
        stuck = shouldStick;
        header.classList.toggle('is-sticky', stuck);
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  })();

  /* ---------- 3. Mega menus (hover + keyboard) ---------- */
  (function megaMenus() {
    var items = document.querySelectorAll('.menu-item.has-mega');
    var openPanel = null, openItem = null, closeTimer = null;

    function close() {
      if (openPanel) {
        openPanel.classList.remove('is-open');
        openPanel.setAttribute('aria-hidden', 'true');
        openItem.classList.remove('is-open');
        openPanel = null;
        openItem = null;
      }
    }
    function open(item) {
      var panel = document.getElementById('mega-' + item.getAttribute('data-mega'));
      if (!panel) return;
      if (openPanel && openPanel !== panel) close();
      panel.classList.add('is-open');
      panel.setAttribute('aria-hidden', 'false');
      item.classList.add('is-open');
      openPanel = panel;
      openItem = item;
    }

    items.forEach(function (item) {
      var link = item.querySelector('a');
      item.addEventListener('mouseenter', function () {
        clearTimeout(closeTimer);
        open(item);
      });
      item.addEventListener('mouseleave', function () {
        closeTimer = setTimeout(close, 200);
      });
      link.addEventListener('click', function (e) { e.preventDefault(); });
      link.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (openItem === item) close(); else open(item);
        }
      });
    });

    document.querySelectorAll('.mega-panel').forEach(function (panel) {
      panel.addEventListener('mouseenter', function () { clearTimeout(closeTimer); });
      panel.addEventListener('mouseleave', function () { closeTimer = setTimeout(close, 200); });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });
    document.addEventListener('click', function (e) {
      if (openPanel && !e.target.closest('.site-header')) close();
    });

    /* Services mega tabs (hover + click) */
    var tabs = document.querySelectorAll('.mega-tab');
    function activateTab(tab) {
      tabs.forEach(function (t) {
        var active = t === tab;
        t.classList.toggle('is-active', active);
        t.setAttribute('aria-selected', active ? 'true' : 'false');
        var panel = document.getElementById(t.getAttribute('data-tab'));
        if (panel) {
          panel.classList.toggle('is-active', active);
          if (active) panel.removeAttribute('hidden');
          else panel.setAttribute('hidden', '');
        }
      });
    }
    tabs.forEach(function (tab) {
      tab.addEventListener('mouseenter', function () { activateTab(tab); });
      tab.addEventListener('click', function () { activateTab(tab); });
      tab.addEventListener('focus', function () { activateTab(tab); });
    });
  })();

  /* ---------- 4. Mobile menu ---------- */
  (function mobileMenu() {
    var toggle = document.getElementById('mobile-toggle');
    var menu = document.getElementById('mobile-menu');
    var overlay = document.getElementById('mobile-overlay');
    if (!toggle || !menu) return;

    function setOpen(openState) {
      menu.classList.toggle('is-open', openState);
      menu.setAttribute('aria-hidden', openState ? 'false' : 'true');
      toggle.setAttribute('aria-expanded', openState ? 'true' : 'false');
      toggle.setAttribute('aria-label', openState ? 'Close menu' : 'Open menu');
      document.body.style.overflow = openState ? 'hidden' : '';
      if (openState) {
        overlay.hidden = false;
        requestAnimationFrame(function () { overlay.classList.add('is-visible'); });
      } else {
        overlay.classList.remove('is-visible');
        setTimeout(function () { overlay.hidden = true; }, 350);
      }
    }
    toggle.addEventListener('click', function () {
      setOpen(!menu.classList.contains('is-open'));
    });
    var closeBtn = document.getElementById('mobile-close');
    if (closeBtn) closeBtn.addEventListener('click', function () { setOpen(false); });
    overlay.addEventListener('click', function () { setOpen(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) {
        setOpen(false);
        toggle.focus();
      }
    });

    /* nested accordions */
    menu.querySelectorAll('.m-sub-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var sub = btn.parentElement.querySelector('.m-sub');
        var expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
        if (sub) sub.classList.toggle('is-open', !expanded);
      });
    });
  })();

  /* ---------- 5. Case-study slider (background + caption, synced) ---------- */
  (function caseSlider() {
    var slides = document.querySelectorAll('.case-slide');
    var captions = document.querySelectorAll('.case-caption');
    if (!slides.length) return;
    if (reduceMotion) return; // keep the first slide static
    var current = 0;
    var count = slides.length;

    setInterval(function () {
      var next = (current + 1) % count;
      slides[current].classList.remove('is-active');
      slides[current].classList.add('is-leaving');
      (function (leaving) {
        setTimeout(function () { leaving.classList.remove('is-leaving'); }, 600);
      })(slides[current]);
      slides[next].classList.add('is-active');
      captions[current].classList.remove('is-active');
      captions[next].classList.add('is-active');
      current = next;
    }, 5000);
  })();

  /* ---------- 6. Animated counters ---------- */
  (function counters() {
    var numbers = document.querySelectorAll('.stat-number');
    if (!numbers.length || !('IntersectionObserver' in window)) return;

    function animate(el) {
      var from = parseInt(el.getAttribute('data-from') || '0', 10);
      var to = parseInt(el.getAttribute('data-to') || '0', 10);
      var duration = parseInt(el.getAttribute('data-duration') || '2000', 10);
      if (reduceMotion || from === to) { el.textContent = String(to); return; }
      var start = null;
      function step(ts) {
        if (!start) start = ts;
        var progress = Math.min((ts - start) / duration, 1);
        el.textContent = String(Math.round(from + (to - from) * progress));
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }

    var seen = new WeakSet();
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !seen.has(entry.target)) {
          seen.add(entry.target);
          animate(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    numbers.forEach(function (el) { io.observe(el); });
  })();

  /* ---------- 7. Scroll-reveal ---------- */
  (function reveal() {
    var els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    els.forEach(function (el) { io.observe(el); });
  })();

  /* ---------- 8. Contact form validation (client-side demo) ---------- */
  (function contactForm() {
    var form = document.getElementById('contact-form');
    if (!form) return;
    var success = document.getElementById('form-success');

    function setError(input, message) {
      var holder = input.closest('.form-field');
      var errEl = holder ? holder.querySelector('.field-error') : null;
      input.classList.toggle('has-error', !!message);
      if (errEl) errEl.textContent = message || '';
    }

    function validateField(input) {
      var value = input.value.trim();
      if (!value) { setError(input, 'This field is required.'); return false; }
      if (input.type === 'email') {
        var okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        if (!okEmail) { setError(input, 'Please enter a valid email address.'); return false; }
      }
      if (input.type === 'number' && !/^\+?\d{6,15}$/.test(value)) {
        setError(input, 'Please enter a valid phone number.');
        return false;
      }
      setError(input, '');
      return true;
    }

    var fields = form.querySelectorAll('input:not([type="hidden"]), textarea');
    fields.forEach(function (input) {
      input.addEventListener('blur', function () { validateField(input); });
      input.addEventListener('input', function () {
        if (input.classList.contains('has-error')) validateField(input);
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault(); // no backend — demo submission only
      var valid = true;
      fields.forEach(function (input) {
        if (!validateField(input)) valid = false;
      });
      if (!valid) {
        var firstError = form.querySelector('.has-error');
        if (firstError) firstError.focus();
        return;
      }
      success.hidden = false;
      form.reset();
      setTimeout(function () { success.hidden = true; }, 6000);
    });
  })();

};
