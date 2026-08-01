"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatedBackground } from "./core/animated-background";
import { BookingDialog } from "./BookingDialog";

const LINKS = [
  { id: "who", label: "Who I Work With", href: "/#who" },
  { id: "focus", label: "Focus Areas", href: "/#focus" },
  { id: "approach", label: "Approach", href: "/#approach" },
  { id: "about", label: "About", href: "/#about" },
  { id: "blog", label: "Blog", href: "/blog/" },
  { id: "faq", label: "FAQ", href: "/#faq" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("main [id]");
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.getAttribute("id"));
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`topbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav">
        <Link href="/#home" className="brand">
          Arvind Nachaya
          <span>Executive Coach</span>
        </Link>

        <button
          className={`nav-toggle ${open ? "active" : ""}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          <AnimatedBackground
            className="nav-pill-bg"
            enableHover
            transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
          >
            {LINKS.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                data-id={link.id}
                className={`nav-pill-item ${activeId === link.id ? "active" : ""}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </AnimatedBackground>

          <div className="nav-actions">
            <a href="tel:+919930407361" className="btn-ghost">
              Call
            </a>
            <BookingDialog triggerClassName="btn btn-primary">Book a Call</BookingDialog>
          </div>
        </nav>
      </div>
    </header>
  );
}
