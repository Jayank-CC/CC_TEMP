(function () {
  'use strict';
  function init() {
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var heroVideo = document.querySelector('.webapp-hero-video');
    if (heroVideo) {
      var hero = heroVideo.closest('.webapp-hero');
      var heroQuotes = document.querySelectorAll('.webapp-hero-quote-track article');
      var heroQuoteIndex = 0;
      var heroQuoteTimers = [];
      var heroQuoteContent = Array.prototype.map.call(heroQuotes, function (quote) {
        return { heading: quote.querySelector('h2').textContent, subheading: quote.querySelector('p').textContent };
      });
      var scheduleHeroQuote = function (callback, delay) {
        var timer = window.setTimeout(callback, delay);
        heroQuoteTimers.push(timer);
      };
      var typeHeroText = function (element, text, speed, complete) {
        var position = 0;
        element.textContent = '';
        var typeNext = function () {
          position += 1;
          element.textContent = text.slice(0, position);
          if (position < text.length) scheduleHeroQuote(typeNext, speed);
          else if (complete) complete();
        };
        typeNext();
      };
      var showHeroQuote = function (index) {
        var quote = heroQuotes[index];
        var heading = quote.querySelector('h2');
        var subheading = quote.querySelector('p');
        heroQuotes.forEach(function (item) { item.classList.remove('is-active', 'is-typing', 'typing-heading', 'typing-subheading'); });
        quote.classList.add('is-active', 'is-typing', 'typing-heading');
        heading.textContent = '';
        subheading.textContent = '';
        typeHeroText(heading, heroQuoteContent[index].heading, 28, function () {
          quote.classList.remove('typing-heading');
          quote.classList.add('typing-subheading');
          typeHeroText(subheading, heroQuoteContent[index].subheading, 24, function () {
            scheduleHeroQuote(function () {
              quote.classList.remove('is-active', 'is-typing', 'typing-subheading');
              heroQuoteIndex = (index + 1) % heroQuotes.length;
              scheduleHeroQuote(function () { showHeroQuote(heroQuoteIndex); }, 450);
            }, 1700);
          });
        });
      };
      if (heroQuotes.length && !reduce) showHeroQuote(0);
      var revealStaticHero = function () {
        heroQuoteTimers.forEach(function (timer) { window.clearTimeout(timer); });
        if (hero) hero.classList.add('is-ended');
      };
      heroVideo.addEventListener('ended', revealStaticHero, { once: true });
      if (reduce) {
        heroVideo.pause();
        revealStaticHero();
      } else {
        var playAttempt = heroVideo.play();
        if (playAttempt && typeof playAttempt.catch === 'function') playAttempt.catch(function () {});
      }
    }
    function rotate(selector, delay) {
      var items = document.querySelectorAll(selector);
      if (items.length < 2 || reduce) return;
      var current = 0;
      window.setInterval(function () {
        items[current].classList.remove('is-active');
        current = (current + 1) % items.length;
        items[current].classList.add('is-active');
      }, delay);
    }
    var projectSlides = document.querySelectorAll('.webapp-project-slides img');
    var projectIndex = 0;
    var projectAnimating = false;
    function showProject(nextIndex) {
      if (!projectSlides.length || projectAnimating) return;
      var normalizedIndex = (nextIndex + projectSlides.length) % projectSlides.length;
      if (normalizedIndex === projectIndex) return;
      var direction = nextIndex > projectIndex || (projectIndex === projectSlides.length - 1 && normalizedIndex === 0) ? 1 : -1;
      if (projectIndex === 0 && normalizedIndex === projectSlides.length - 1) direction = -1;
      var outgoing = projectSlides[projectIndex];
      var incoming = projectSlides[normalizedIndex];
      projectAnimating = true;
      incoming.classList.remove('is-active', 'is-leaving-left', 'is-leaving-right');
      incoming.classList.add(direction > 0 ? 'is-entering-right' : 'is-entering-left');
      incoming.getBoundingClientRect();
      outgoing.classList.add(direction > 0 ? 'is-leaving-left' : 'is-leaving-right');
      incoming.classList.add('is-active');
      incoming.classList.remove('is-entering-right', 'is-entering-left');
      projectIndex = normalizedIndex;
      window.setTimeout(function () {
        outgoing.classList.remove('is-active', 'is-leaving-left', 'is-leaving-right');
        projectAnimating = false;
      }, 720);
    }
    var projectPrev = document.querySelector('.webapp-project-prev');
    var projectNext = document.querySelector('.webapp-project-next');
    if (projectPrev) projectPrev.addEventListener('click', function () { showProject(projectIndex - 1); });
    if (projectNext) projectNext.addEventListener('click', function () { showProject(projectIndex + 1); });
    if (projectSlides.length > 1 && !reduce) window.setInterval(function () { showProject(projectIndex + 1); }, 5000);
    var testimonialViewport = document.querySelector('.webapp-testimonial-viewport');
    var testimonialTrack = document.querySelector('.webapp-testimonial-track');
    var testimonialCards = testimonialTrack ? Array.prototype.slice.call(testimonialTrack.querySelectorAll('.webapp-testimonial')) : [];
    var testimonialIndex = 0;
    var testimonialPhysicalIndex = 0;
    var testimonialCloneCount = 0;
    var testimonialTimer = null;
    var testimonialAnimationTimer = null;
    var testimonialAnimating = false;
    var testimonialDragging = false;
    var testimonialStartX = 0;
    var testimonialStartOffset = 0;
    function visibleTestimonials() {
      return window.matchMedia('(max-width: 767px)').matches ? 1 : 2;
    }
    function testimonialDistance() {
      if (!testimonialTrack || !testimonialCards.length) return 0;
      var gap = parseFloat(window.getComputedStyle(testimonialTrack).columnGap) || 0;
      return testimonialCards[0].getBoundingClientRect().width + gap;
    }
    function normalizedTestimonialIndex(index) {
      return (index % testimonialCards.length + testimonialCards.length) % testimonialCards.length;
    }
    function positionTestimonial(animate) {
      if (!testimonialTrack || !testimonialCards.length) return;
      if (!animate) testimonialTrack.style.transition = 'none';
      testimonialTrack.style.transform = 'translate3d(' + (-testimonialPhysicalIndex * testimonialDistance()) + 'px,0,0)';
      if (!animate) {
        testimonialTrack.getBoundingClientRect();
        testimonialTrack.style.transition = '';
      }
    }
    function settleTestimonialPosition() {
      if (testimonialAnimationTimer) window.clearTimeout(testimonialAnimationTimer);
      testimonialAnimationTimer = null;
      if (testimonialPhysicalIndex >= testimonialCloneCount + testimonialCards.length) {
        testimonialPhysicalIndex -= testimonialCards.length;
        positionTestimonial(false);
      } else if (testimonialPhysicalIndex < testimonialCloneCount) {
        testimonialPhysicalIndex += testimonialCards.length;
        positionTestimonial(false);
      }
      testimonialAnimating = false;
    }
    function armTestimonialTransition() {
      testimonialAnimating = true;
      if (testimonialAnimationTimer) window.clearTimeout(testimonialAnimationTimer);
      testimonialAnimationTimer = window.setTimeout(settleTestimonialPosition, 550);
    }
    function stepTestimonial(direction) {
      if (!testimonialCards.length || testimonialAnimating) return;
      testimonialIndex = normalizedTestimonialIndex(testimonialIndex + direction);
      testimonialPhysicalIndex += direction;
      armTestimonialTransition();
      positionTestimonial(true);
    }
    function buildInfiniteTestimonials() {
      if (!testimonialTrack || !testimonialCards.length) return;
      Array.prototype.slice.call(testimonialTrack.querySelectorAll('.is-clone')).forEach(function (clone) { clone.remove(); });
      testimonialCards.forEach(function (card) {
        Array.prototype.slice.call(card.querySelectorAll('img')).forEach(function (image) { image.loading = 'eager'; });
      });
      testimonialCloneCount = Math.min(visibleTestimonials(), testimonialCards.length);
      var leading = document.createDocumentFragment();
      testimonialCards.slice(-testimonialCloneCount).forEach(function (card) {
        var clone = card.cloneNode(true);
        clone.classList.add('is-clone');
        clone.setAttribute('aria-hidden', 'true');
        Array.prototype.slice.call(clone.querySelectorAll('img')).forEach(function (image) { image.loading = 'eager'; });
        leading.appendChild(clone);
      });
      testimonialTrack.insertBefore(leading, testimonialTrack.firstChild);
      testimonialCards.slice(0, testimonialCloneCount).forEach(function (card) {
        var clone = card.cloneNode(true);
        clone.classList.add('is-clone');
        clone.setAttribute('aria-hidden', 'true');
        Array.prototype.slice.call(clone.querySelectorAll('img')).forEach(function (image) { image.loading = 'eager'; });
        testimonialTrack.appendChild(clone);
      });
      testimonialPhysicalIndex = testimonialCloneCount + testimonialIndex;
      testimonialAnimating = false;
      if (testimonialAnimationTimer) window.clearTimeout(testimonialAnimationTimer);
      testimonialAnimationTimer = null;
      positionTestimonial(false);
    }
    function stopTestimonialAutoplay() {
      if (testimonialTimer) window.clearInterval(testimonialTimer);
      testimonialTimer = null;
    }
    function startTestimonialAutoplay() {
      if (reduce || testimonialCards.length <= visibleTestimonials()) return;
      stopTestimonialAutoplay();
      testimonialTimer = window.setInterval(function () { stepTestimonial(1); }, 5000);
    }
    var testimonialPrev = document.querySelector('.webapp-testimonial-prev');
    var testimonialNext = document.querySelector('.webapp-testimonial-next');
    if (testimonialPrev) testimonialPrev.addEventListener('click', function () { stepTestimonial(-1); });
    if (testimonialNext) testimonialNext.addEventListener('click', function () { stepTestimonial(1); });
    if (testimonialViewport && testimonialTrack) {
      buildInfiniteTestimonials();
      testimonialTrack.addEventListener('transitionend', function (event) {
        if (event.propertyName !== 'transform') return;
        settleTestimonialPosition();
      });
      testimonialViewport.addEventListener('pointerdown', function (event) {
        if (event.button !== undefined && event.button !== 0) return;
        if (testimonialAnimating) return;
        testimonialDragging = true;
        testimonialStartX = event.clientX;
        testimonialStartOffset = -testimonialPhysicalIndex * testimonialDistance();
        testimonialViewport.classList.add('is-dragging');
        testimonialViewport.setPointerCapture(event.pointerId);
        stopTestimonialAutoplay();
      });
      testimonialViewport.addEventListener('pointermove', function (event) {
        if (!testimonialDragging) return;
        var movement = event.clientX - testimonialStartX;
        testimonialTrack.style.transform = 'translate3d(' + (testimonialStartOffset + movement) + 'px,0,0)';
      });
      var finishTestimonialDrag = function (event) {
        if (!testimonialDragging) return;
        testimonialDragging = false;
        testimonialViewport.classList.remove('is-dragging');
        var endX = typeof event.clientX === 'number' ? event.clientX : testimonialStartX;
        var movement = endX - testimonialStartX;
        var threshold = Math.min(90, testimonialDistance() * .18);
        if (Math.abs(movement) >= threshold) stepTestimonial(movement < 0 ? 1 : -1);
        else {
          armTestimonialTransition();
          positionTestimonial(true);
        }
        startTestimonialAutoplay();
      };
      testimonialViewport.addEventListener('pointerup', finishTestimonialDrag);
      testimonialViewport.addEventListener('pointercancel', finishTestimonialDrag);
      testimonialViewport.addEventListener('mouseenter', stopTestimonialAutoplay);
      testimonialViewport.addEventListener('mouseleave', function () {
        if (!testimonialDragging) startTestimonialAutoplay();
      });
    }
    startTestimonialAutoplay();
    var testimonialMobile = window.matchMedia('(max-width: 767px)').matches;
    window.addEventListener('resize', function () {
      var nowMobile = window.matchMedia('(max-width: 767px)').matches;
      if (nowMobile !== testimonialMobile) {
        testimonialMobile = nowMobile;
        buildInfiniteTestimonials();
      } else positionTestimonial(false);
    });
    var form = document.getElementById('webapp-consult-form');
    if (form) form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var success = form.querySelector('.webapp-form-success');
      form.reset();
      if (success) success.hidden = false;
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
}());
