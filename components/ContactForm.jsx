"use client";

import { useState } from "react";

const FORM_ACTION = "https://formspree.io/f/xeeybekr";

export function ContactForm() {
  const [status, setStatus] = useState({ text: "", type: "" });
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmitting(true);
    setStatus({ text: "", type: "" });

    try {
      const response = await fetch(FORM_ACTION, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus({
          text: "Thank you — your message has been sent. I'll be in touch shortly.",
          type: "success",
        });
        form.reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      setStatus({
        text: "Something went wrong sending your message. Please email arvind@solutionsatsource.in directly.",
        type: "error",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="contact-form" action={FORM_ACTION} method="POST" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your full name" required />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="you@company.com" required />
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="phone">Phone (optional)</label>
          <input type="tel" id="phone" name="phone" placeholder="+91 ..." />
        </div>
        <div className="field">
          <label htmlFor="role">Current Role (optional)</label>
          <input type="text" id="role" name="role" placeholder="e.g. Managing Director" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="message">What would you like to discuss?</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Share a little about your context and what you're looking for."
          required
        />
      </div>

      <input type="text" name="_gotcha" className="hp-field" tabIndex={-1} autoComplete="off" />

      <div className="btn-group" style={{ marginTop: "4px" }}>
        <button type="submit" className="btn btn-primary" disabled={submitting}>
          {submitting ? "Sending..." : "Schedule a Discovery Conversation"}
        </button>
        <a href="tel:+919930407361" className="btn btn-secondary">
          Call Instead
        </a>
      </div>
      <div className={`form-status ${status.type}`} role="status" aria-live="polite">
        {status.text}
      </div>
    </form>
  );
}
