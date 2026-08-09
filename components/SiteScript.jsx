"use client";

import { useEffect } from "react";

const LENS_CONTENT = {
  p: {
    kicker: "P · Possibilities",
    title: "Widen the field of view.",
    body: "Surface assumptions, patterns, choices and options that are difficult to see from inside the immediate problem. Explore what becomes possible when the leader steps beyond the familiar frame.",
    question:
      "What are we not yet seeing, and what new choice becomes available if the frame changes?",
  },
  a: {
    kicker: "A · Alignment",
    title: "Connect choices to what matters.",
    body: "Test options against values, role mandate, business priorities, stakeholder reality and the leader’s intended way of being. Alignment helps the leader choose with integrity and purpose.",
    question:
      "Which choice best serves the mandate, the people affected and the leader you intend to be?",
  },
  c: {
    kicker: "C · Clarity",
    title: "Make the situation workable.",
    body: "Define the outcome, separate facts from interpretations, understand what is at play and distinguish signal from noise. Clarity creates a grounded basis for judgement and communication.",
    question: "What is the real outcome, what do we know, and what must be decided now?",
  },
  t: {
    kicker: "T · Transformation",
    title: "Turn insight into behaviour.",
    body: "Translate reflection into experiments, decisions, conversations, routines and commitments. Build support and evidence so the change survives beyond the coaching session.",
    question:
      "What will you practise, how will progress be observed, and what will help the change endure?",
  },
};

export function SiteScript() {
  useEffect(() => {
    const cleanups = [];

    // Sticky header shadow
    const header = document.querySelector(".site-header");
    const onScroll = () => header?.classList.toggle("scrolled", window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    cleanups.push(() => window.removeEventListener("scroll", onScroll));

    // Mobile nav
    const menuButton = document.querySelector(".menu-button");
    const nav = document.querySelector(".primary-nav");
    if (menuButton && nav) {
      const toggle = () => {
        const open = menuButton.getAttribute("aria-expanded") === "true";
        menuButton.setAttribute("aria-expanded", String(!open));
        nav.classList.toggle("open", !open);
        document.body.classList.toggle("menu-open", !open);
      };
      menuButton.addEventListener("click", toggle);
      cleanups.push(() => menuButton.removeEventListener("click", toggle));

      const closeMenu = () => {
        menuButton.setAttribute("aria-expanded", "false");
        nav.classList.remove("open");
        document.body.classList.remove("menu-open");
      };
      const links = nav.querySelectorAll("a");
      links.forEach((link) => link.addEventListener("click", closeMenu));
      cleanups.push(() =>
        links.forEach((link) => link.removeEventListener("click", closeMenu))
      );
    }

    // P.A.C.T. lens tabs
    const lensTabs = document.querySelectorAll(".lens-tab");
    const lensDetail = document.querySelector(".lens-detail");
    if (lensTabs.length && lensDetail) {
      const handlers = [];
      lensTabs.forEach((tab) => {
        const handler = () => {
          const key = tab.dataset.lens;
          const content = LENS_CONTENT[key];
          if (!content) return;
          lensTabs.forEach((item) => {
            item.classList.toggle("active", item === tab);
            item.setAttribute("aria-selected", String(item === tab));
          });
          lensDetail.innerHTML = `
            <p class="lens-kicker">${content.kicker}</p>
            <h3>${content.title}</h3>
            <p>${content.body}</p>
            <div class="lens-question">${content.question}</div>
          `;
        };
        tab.addEventListener("click", handler);
        handlers.push([tab, handler]);
      });
      cleanups.push(() => handlers.forEach(([tab, h]) => tab.removeEventListener("click", h)));
    }

    // Testimonial slider
    const testimonials = [...document.querySelectorAll(".testimonial")];
    const dotsWrap = document.querySelector(".slider-dots");
    const prevBtn = document.querySelector(".slider-prev");
    const nextBtn = document.querySelector(".slider-next");
    if (testimonials.length && dotsWrap && prevBtn && nextBtn) {
      let current = 0;
      const AUTOPLAY_MS = 6000;
      let timer = null;
      const reduceMo = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const show = (index) => {
        current = (index + testimonials.length) % testimonials.length;
        testimonials.forEach((item, i) => item.classList.toggle("active", i === current));
        [...dotsWrap.children].forEach((dot, i) => dot.classList.toggle("active", i === current));
      };
      const stop = () => {
        if (timer) {
          clearInterval(timer);
          timer = null;
        }
      };
      const start = () => {
        if (reduceMo || testimonials.length < 2) return;
        stop();
        timer = setInterval(() => show(current + 1), AUTOPLAY_MS);
      };
      // Restart the countdown after any manual interaction so the current
      // slide gets a full dwell before auto-advancing again.
      const restart = () => {
        stop();
        start();
      };
      dotsWrap.innerHTML = "";
      testimonials.forEach((_, i) => {
        const dot = document.createElement("button");
        dot.setAttribute("aria-label", `Show testimonial ${i + 1}`);
        dot.addEventListener("click", () => {
          show(i);
          restart();
        });
        dotsWrap.appendChild(dot);
      });
      const goPrev = () => {
        show(current - 1);
        restart();
      };
      const goNext = () => {
        show(current + 1);
        restart();
      };
      prevBtn.addEventListener("click", goPrev);
      nextBtn.addEventListener("click", goNext);
      show(0);
      start();

      // Pause on hover so a reader isn't rushed mid-quote
      const slider = prevBtn.closest(".testimonial-slider") || dotsWrap.parentElement;
      if (slider) {
        slider.addEventListener("mouseenter", stop);
        slider.addEventListener("mouseleave", start);
      }
      // Pause while the tab is hidden
      const onVisibility = () => (document.hidden ? stop() : start());
      document.addEventListener("visibilitychange", onVisibility);

      cleanups.push(() => {
        stop();
        prevBtn.removeEventListener("click", goPrev);
        nextBtn.removeEventListener("click", goNext);
        if (slider) {
          slider.removeEventListener("mouseenter", stop);
          slider.removeEventListener("mouseleave", start);
        }
        document.removeEventListener("visibilitychange", onVisibility);
      });
    }

    // Animated FAQ accordion. Each <details> keeps the `open` attribute so its
    // answer is always in the render tree — that makes scrollHeight reliable at
    // any time. A .faq-open class + explicit height animate the open/close.
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const faqItems = document.querySelectorAll(".faq-list details");
    faqItems.forEach((details) => {
      const summary = details.querySelector("summary");
      const answer = details.querySelector(".faq-answer");
      if (!summary || !answer) return;
      const onClick = (e) => {
        e.preventDefault();
        const isOpen = details.classList.toggle("faq-open");
        if (reduceMotion) {
          answer.style.height = isOpen ? "auto" : "0px";
          return;
        }
        if (isOpen) {
          answer.style.height = answer.scrollHeight + "px";
          const done = () => {
            answer.style.height = "auto";
            answer.removeEventListener("transitionend", done);
          };
          answer.addEventListener("transitionend", done);
        } else {
          answer.style.height = answer.scrollHeight + "px";
          void answer.offsetHeight; // force reflow so the next set animates
          answer.style.height = "0px";
        }
      };
      summary.addEventListener("click", onClick);
      cleanups.push(() => summary.removeEventListener("click", onClick));
    });

    // Calendly popup — progressive enhancement over the anchor's href.
    // With JS + the Calendly widget loaded we open an in-page modal; otherwise
    // the link falls back to opening Calendly in a new tab.
    const bookingLinks = document.querySelectorAll("[data-calendly-popup]");
    bookingLinks.forEach((link) => {
      const onClick = (e) => {
        if (!window.Calendly) return; // fall through to normal navigation
        e.preventDefault();
        window.Calendly.initPopupWidget({ url: link.getAttribute("href") });
      };
      link.addEventListener("click", onClick);
      cleanups.push(() => link.removeEventListener("click", onClick));
    });

    // Stagger reveal entrances within card grids
    const STAGGER_GRIDS = [
      ".audience-grid",
      ".focus-grid",
      ".motion-grid",
      ".ai-cards",
      ".levels-grid",
      ".work-modes-grid",
    ];
    STAGGER_GRIDS.forEach((sel) => {
      document.querySelectorAll(sel).forEach((grid) => {
        Array.from(grid.children)
          .filter((c) => c.classList.contains("reveal"))
          .forEach((item, i) => {
            item.style.transitionDelay = `${Math.min(i * 90, 450)}ms`;
          });
      });
    });

    // Scroll reveal
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
    cleanups.push(() => revealObserver.disconnect());

    // Footer year
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
