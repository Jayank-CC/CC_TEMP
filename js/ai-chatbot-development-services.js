(function () {
  "use strict";

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  // ---- Vertical tabs widget (Custom AI Chatbot Development / Integration
  // Expertise / Multilingual Support / Advanced NLP) ----
  function initTabs() {
    const titles = document.querySelectorAll(".aicd-tab-title");
    const panels = document.querySelectorAll(".aicd-tab-panel");
    if (!titles.length || !panels.length) return;

    titles.forEach(function (btn) {
      if (btn.dataset.aicdBound === "1") return;
      btn.dataset.aicdBound = "1";

      btn.addEventListener("click", function () {
        const target = btn.getAttribute("data-tab");
        if (btn.classList.contains("is-active")) return;

        titles.forEach(function (t) {
          const active = t === btn;
          t.classList.toggle("is-active", active);
          t.setAttribute("aria-selected", active ? "true" : "false");
        });
        panels.forEach(function (p) {
          const active = p.getAttribute("data-panel") === target;
          p.classList.toggle("is-active", active);
          if (active) p.removeAttribute("hidden");
          else p.setAttribute("hidden", "");
        });
      });
    });
  }

  // ---- Hero chat demo: reproduced from the reference's own inline
  // HTML-widget script (downloaded and read directly from the live page,
  // not guessed) — types the user turns into the textarea, shows a
  // typing-dots indicator then reveals bot turns letter by letter, plays
  // the 7-message conversation ONCE (no loop, matching the reference),
  // then leaves the textarea live for the visitor to send their own
  // message. ----
  function initChatDemo() {
    const box = document.getElementById("aicd-chat-box");
    const userInput = document.getElementById("aicd-user-input");
    const sendBtn = document.getElementById("aicd-chat-send");
    if (!box || !userInput || !sendBtn || box.dataset.aicdBound === "1") return;
    box.dataset.aicdBound = "1";

    const avatars = {
      user: "assets/images/aicd-chat-avatar-user.jpg",
      bot: "assets/images/aicd-chat-avatar-bot.png"
    };

    const conversation = [
      { sender: "user", text: "Hello, can I check my order status?" },
      { sender: "bot", text: "Your order is on its way with FedEx! It should arrive tomorrow by 8pm." },
      { sender: "bot", text: "Would you like me to text you the tracking link?" },
      { sender: "user", text: "Yes, that would be great" },
      { sender: "bot", text: "Done! I've just sent the tracking link to the phone number ending in 9042." },
      { sender: "user", text: "Awesome, thanks!" },
      { sender: "bot", text: "Thank you, have a great day ahead" }
    ];

    let currentMessageIndex = 0;
    let isAutoChatRunning = true;

    function makeAvatar(sender) {
      const avatar = document.createElement("span");
      avatar.className = "aicd-avatar aicd-avatar-" + sender;
      avatar.setAttribute("aria-hidden", "true");
      avatar.style.backgroundImage = "url(" + avatars[sender] + ")";
      return avatar;
    }

    function displayMessage(sender, text) {
      const wrapper = document.createElement("div");
      wrapper.className = "aicd-msg-wrap aicd-" + sender;
      const avatar = makeAvatar(sender);
      const message = document.createElement("div");
      message.className = "aicd-msg aicd-" + sender + "-msg";
      message.innerHTML = text;

      if (sender === "user") {
        wrapper.appendChild(message);
        wrapper.appendChild(avatar);
      } else {
        wrapper.appendChild(avatar);
        wrapper.appendChild(message);
      }

      box.appendChild(wrapper);
      box.scrollTop = box.scrollHeight;
      return message;
    }

    function typeBotMessage(text, callback) {
      const wrapper = document.createElement("div");
      wrapper.className = "aicd-msg-wrap aicd-bot";
      const avatar = makeAvatar("bot");
      const messageDiv = document.createElement("div");
      messageDiv.className = "aicd-msg aicd-bot-msg";
      wrapper.appendChild(avatar);
      wrapper.appendChild(messageDiv);
      box.appendChild(wrapper);
      box.scrollTop = box.scrollHeight;

      if (reducedMotion.matches) {
        messageDiv.innerHTML = text;
        callback && callback();
        return;
      }

      let i = 0;
      const interval = window.setInterval(function () {
        messageDiv.innerHTML = text.substring(0, i + 1);
        i++;
        box.scrollTop = box.scrollHeight;
        if (i >= text.length) {
          window.clearInterval(interval);
          callback && callback();
        }
      }, 40);
    }

    function showNextMessage() {
      if (currentMessageIndex >= conversation.length) {
        isAutoChatRunning = false;
        return;
      }

      const message = conversation[currentMessageIndex];
      currentMessageIndex++;

      if (reducedMotion.matches) {
        displayMessage(message.sender, message.text);
        window.setTimeout(showNextMessage, 0);
        return;
      }

      if (message.sender === "user") {
        userInput.value = "";
        let i = 0;
        const interval = window.setInterval(function () {
          userInput.value += message.text[i];
          i++;
          if (i >= message.text.length) {
            window.clearInterval(interval);
            window.setTimeout(function () {
              displayMessage("user", message.text);
              userInput.value = "";
              window.setTimeout(showNextMessage, 800);
            }, 500);
          }
        }, 50);
      } else {
        const wrapper = document.createElement("div");
        wrapper.className = "aicd-msg-wrap aicd-bot";
        const avatar = makeAvatar("bot");
        const typing = document.createElement("div");
        typing.className = "aicd-msg aicd-typing";
        wrapper.appendChild(avatar);
        wrapper.appendChild(typing);
        box.appendChild(wrapper);
        box.scrollTop = box.scrollHeight;

        window.setTimeout(function () {
          box.removeChild(wrapper);
          typeBotMessage(message.text, function () {
            window.setTimeout(showNextMessage, 800);
          });
        }, 1000 + Math.random() * 500);
      }
    }

    function sendMessage() {
      const text = userInput.value.trim();
      if (!text) return;

      displayMessage("user", text);
      userInput.value = "";
      userInput.style.height = "auto";

      if (isAutoChatRunning) return;

      window.setTimeout(function () {
        const typingWrapper = document.createElement("div");
        typingWrapper.className = "aicd-msg-wrap aicd-bot";
        const avatar = makeAvatar("bot");
        const typing = document.createElement("div");
        typing.className = "aicd-msg aicd-typing";
        typingWrapper.appendChild(avatar);
        typingWrapper.appendChild(typing);
        box.appendChild(typingWrapper);
        box.scrollTop = box.scrollHeight;

        window.setTimeout(function () {
          box.removeChild(typingWrapper);
          typeBotMessage(
            "Thank you for your message. Please contact our sales team using the <a href='https://www.cloudconverge.io/contact/'>contact form at</a>"
          );
        }, 1000);
      }, 500);
    }

    sendBtn.addEventListener("click", sendMessage);
    userInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });
    userInput.addEventListener("input", function () {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    });

    window.setTimeout(showNextMessage, 500);
  }

  // ---- FAQ accordion (single-open, first item pre-opened in markup) ----
  function initAccordion() {
    const items = document.querySelectorAll(".aicd-acc-item");
    if (!items.length) return;

    items.forEach(function (item) {
      const btn = item.querySelector(".aicd-acc-btn");
      const panel = item.querySelector(".aicd-acc-panel");
      if (!btn || !panel || btn.dataset.aicdBound === "1") return;
      btn.dataset.aicdBound = "1";

      btn.addEventListener("click", function () {
        const willOpen = !item.classList.contains("is-open");

        items.forEach(function (other) {
          if (other === item) return;
          other.classList.remove("is-open");
          const otherBtn = other.querySelector(".aicd-acc-btn");
          const otherPanel = other.querySelector(".aicd-acc-panel");
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

  // ---- Testimonial carousel (bounded drag + autoplay + clone-based infinite loop) ----
  function reviewCarousel() {
    const viewport = document.querySelector(".aicd-review-viewport");
    const track = document.querySelector(".aicd-review-track");
    if (!viewport || !track) return;

    const originals = Array.from(track.children);
    let visible = 2, index = 0, step = 0, autoplayId = 0, dragging = false, startX = 0, dragX = 0, moving = false, settleId = 0, lastBreakpoint = "";

    function breakpoint() { return window.innerWidth <= 767 ? "mobile" : "desktop"; }
    function transition(on) { track.style.transition = on ? "transform .42s cubic-bezier(.25,.46,.45,.94)" : "none"; }
    function position(animate, offset) { transition(animate); track.style.transform = "translate3d(" + (-(index * step) + (offset || 0)) + "px,0,0)"; }

    function normalize() {
      window.clearTimeout(settleId);
      while (index >= originals.length + visible) index -= originals.length;
      while (index < visible) index += originals.length;
      position(false, 0);
      moving = false;
    }

    function move(next) {
      if (moving || dragging || !step) return;
      index = Math.max(visible - 1, Math.min(originals.length + visible, next));
      moving = true;
      position(true, 0);
      window.clearTimeout(settleId);
      settleId = window.setTimeout(normalize, 600);
    }

    function measure() {
      const card = track.querySelector(".aicd-review-card");
      if (!card) return;
      const styles = getComputedStyle(track);
      step = card.getBoundingClientRect().width + (parseFloat(styles.columnGap || styles.gap) || 0);
      position(false, 0);
    }

    function stop() { window.clearInterval(autoplayId); autoplayId = 0; }
    function start() { stop(); if (!reducedMotion.matches) autoplayId = window.setInterval(function () { move(index + 1); }, 4500); }

    function build() {
      lastBreakpoint = breakpoint();
      visible = lastBreakpoint === "mobile" ? 1 : 2;
      stop();
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
      index = visible + 2;
      requestAnimationFrame(function () { measure(); start(); });
    }

    track.addEventListener("transitionend", function (event) { if (event.propertyName === "transform") normalize(); });
    viewport.addEventListener("pointerdown", function (event) {
      if ((event.pointerType === "mouse" && event.button !== 0) || moving) return;
      dragging = true;
      startX = event.clientX;
      dragX = 0;
      viewport.classList.add("is-dragging");
      viewport.setPointerCapture(event.pointerId);
      stop();
      transition(false);
    });
    viewport.addEventListener("pointermove", function (event) {
      if (!dragging) return;
      dragX = Math.max(-step, Math.min(step, event.clientX - startX));
      position(false, dragX);
    });

    function finish(event) {
      if (!dragging) return;
      dragging = false;
      viewport.classList.remove("is-dragging");
      if (viewport.hasPointerCapture(event.pointerId)) viewport.releasePointerCapture(event.pointerId);
      move(Math.abs(dragX) > Math.min(80, step * 0.18) ? index + (dragX < 0 ? 1 : -1) : index);
      start();
    }

    viewport.addEventListener("pointerup", finish);
    viewport.addEventListener("pointercancel", finish);
    viewport.addEventListener("mouseenter", stop);
    viewport.addEventListener("mouseleave", function () { if (!dragging) start(); });

    let resizeId = 0;
    window.addEventListener("resize", function () {
      window.clearTimeout(resizeId);
      resizeId = window.setTimeout(function () {
        if (breakpoint() !== lastBreakpoint) build();
        else { moving = false; normalize(); measure(); }
      }, 120);
    });

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", build);
    } else {
      build();
    }
  }

  function init() {
    initTabs();
    initChatDemo();
    initAccordion();
    reviewCarousel();
  }

  if (window.__aicdPageInit) {
    init();
  } else {
    window.__aicdPageInit = true;
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", init);
    } else {
      init();
    }
  }
})();
