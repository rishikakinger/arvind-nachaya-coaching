"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";

const FAQS = [
  {
    q: "Who is your coaching best suited for?",
    a: "My coaching is best suited for senior leaders, founders, business heads, and emerging leaders who want to grow in effectiveness, clarity, and leadership impact.",
  },
  {
    q: "What kinds of issues can coaching help with?",
    a: "Coaching can support strategic thinking, leadership transitions, executive presence, team effectiveness, resilience, confidence, and greater alignment between purpose and action.",
  },
  {
    q: "Do you work only with senior executives?",
    a: "No. While much of my work is with senior leaders, I also work with mid-level leaders preparing for broader responsibility and greater influence.",
  },
  {
    q: "Is coaching virtual or in person?",
    a: "Engagements can be conducted virtually, and in-person sessions may also be possible depending on context and location.",
  },
  {
    q: "How long does a coaching engagement usually last?",
    a: "The duration depends on the client's goals and context. Some engagements are focused and short-term (3 months), while others support broader leadership development over a longer period (6–12 months).",
  },
  {
    q: "How is coaching different from mentoring or consulting?",
    a: "Coaching is not about offering ready-made answers. It is a process that helps clients think more deeply, access their own clarity, and move forward with greater awareness and intention.",
  },
  {
    q: "How do I know if we are the right fit?",
    a: "A discovery conversation is the best place to start. It gives us an opportunity to explore your goals, your context, and whether my approach is the right fit for your needs.",
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="grid-2">
      {FAQS.map((faq, i) => (
        <Reveal
          key={faq.q}
          className={`card glass faq-item ${openIndex === i ? "open" : ""}`}
        >
          <button
            className="faq-question"
            aria-expanded={openIndex === i}
            onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
          >
            <span>{faq.q}</span>
            <span className="faq-icon" aria-hidden="true"></span>
          </button>
          <div className="faq-answer">
            <div className="faq-answer-inner">
              <p>{faq.a}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
