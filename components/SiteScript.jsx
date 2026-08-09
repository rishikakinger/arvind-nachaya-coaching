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
      const show = (index) => {
        current = (index + testimonials.length) % testimonials.length;
        testimonials.forEach((item, i) => item.classList.toggle("active", i === current));
        [...dotsWrap.children].forEach((dot, i) => dot.classList.toggle("active", i === current));
      };
      dotsWrap.innerHTML = "";
      testimonials.forEach((_, i) => {
        const dot = document.createElement("button");
        dot.setAttribute("aria-label", `Show testimonial ${i + 1}`);
        dot.addEventListener("click", () => show(i));
        dotsWrap.appendChild(dot);
      });
      const goPrev = () => show(current - 1);
      const goNext = () => show(current + 1);
      prevBtn.addEventListener("click", goPrev);
      nextBtn.addEventListener("click", goNext);
      show(0);
      cleanups.push(() => {
        prevBtn.removeEventListener("click", goPrev);
        nextBtn.removeEventListener("click", goNext);
      });
    }

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
