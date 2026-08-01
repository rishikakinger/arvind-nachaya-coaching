// ---------------------------------------------------------------
// Scroll-reveal animation, staggered within each grid
// ---------------------------------------------------------------
const revealGroups = document.querySelectorAll(".grid-2, .grid-3, .grid-4, .blog-grid, .timeline");
revealGroups.forEach((group) => {
  Array.from(group.children).forEach((child, i) => {
    if (child.classList.contains("reveal")) {
      child.style.setProperty("--reveal-delay", `${Math.min(i * 90, 360)}ms`);
    }
  });
});

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

// ---------------------------------------------------------------
// Cursor-tracked spotlight glow on cards (skip if the visitor
// prefers reduced motion)
// ---------------------------------------------------------------
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    });
  });
}

// ---------------------------------------------------------------
// Mobile nav toggle
// ---------------------------------------------------------------
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.classList.toggle("active", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ---------------------------------------------------------------
// Sticky nav shadow on scroll + active section highlighting
// ---------------------------------------------------------------
const topbar = document.querySelector(".topbar");
const sections = document.querySelectorAll("main [id]");
const navAnchors = document.querySelectorAll(".nav-links a[href^='#'], .nav-links a[href*='#']");

window.addEventListener(
  "scroll",
  () => {
    if (topbar) topbar.classList.toggle("scrolled", window.scrollY > 12);
  },
  { passive: true }
);

if (sections.length && navAnchors.length) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navAnchors.forEach((a) => {
            const isMatch = a.getAttribute("href") === `#${id}` || a.getAttribute("href") === `/#${id}`;
            a.classList.toggle("active", isMatch);
          });
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => sectionObserver.observe(s));
}

// ---------------------------------------------------------------
// Back to top button
// ---------------------------------------------------------------
const backToTop = document.getElementById("backToTop");
if (backToTop) {
  window.addEventListener(
    "scroll",
    () => {
      backToTop.classList.toggle("visible", window.scrollY > 600);
    },
    { passive: true }
  );
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ---------------------------------------------------------------
// FAQ accordion (animated height via grid-template-rows)
// ---------------------------------------------------------------
document.querySelectorAll(".faq-item").forEach((item) => {
  const question = item.querySelector(".faq-question");
  if (!question) return;
  question.addEventListener("click", () => {
    const isOpen = item.classList.toggle("open");
    question.setAttribute("aria-expanded", String(isOpen));
  });
});

// ---------------------------------------------------------------
// Calendly integration — every "Book/Schedule a Discovery
// Conversation" button (data-cta="primary") opens the Calendly
// popup instead of just scrolling to the contact section.
// ---------------------------------------------------------------
const CALENDLY_URL = "https://calendly.com/rishikakinger/30min";

if (CALENDLY_URL) {
  const script = document.createElement("script");
  script.src = "https://assets.calendly.com/assets/external/widget.js";
  script.async = true;
  document.body.appendChild(script);

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://assets.calendly.com/assets/external/widget.css";
  document.head.appendChild(link);

  document.querySelectorAll('[data-cta="primary"]').forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (window.Calendly) {
        window.Calendly.initPopupWidget({ url: CALENDLY_URL });
      } else {
        window.open(CALENDLY_URL, "_blank");
      }
    });
  });
}

// ---------------------------------------------------------------
// Contact form submission via Formspree
// ---------------------------------------------------------------
const form = document.getElementById("contactForm");
if (form) {
  const status = document.getElementById("formStatus");
  const submitBtn = document.getElementById("formSubmit");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (form.action.includes("YOUR_FORM_ID")) {
      status.textContent =
        "Form isn't connected yet — please email arvind@solutionsatsource.in directly, or set up Formspree to enable this form.";
      status.className = "form-status error";
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";
    status.textContent = "";
    status.className = "form-status";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        status.textContent = "Thank you — your message has been sent. I'll be in touch shortly.";
        status.className = "form-status success";
        form.reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch (err) {
      status.textContent =
        "Something went wrong sending your message. Please email arvind@solutionsatsource.in directly.";
      status.className = "form-status error";
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Schedule a Discovery Conversation";
    }
  });
}
