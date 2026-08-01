"use client";

import { useEffect, useId } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "./core/dialog";

const CALENDLY_URL = "https://calendly.com/rishikakinger/30min";

function CalendlyInlineWidget() {
  useEffect(() => {
    if (document.querySelector("script[data-calendly-widget]")) return;
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.setAttribute("data-calendly-widget", "true");
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url={CALENDLY_URL}
      style={{ minWidth: "280px", height: "640px" }}
    />
  );
}

export function BookingDialog({ triggerClassName, children }) {
  return (
    <Dialog>
      <DialogTrigger className={triggerClassName}>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div>
            <DialogTitle>Book a Discovery Conversation</DialogTitle>
            <DialogDescription>
              Pick a time that works for you — a short, no-pressure call to explore
              whether coaching is the right fit.
            </DialogDescription>
          </div>
          <DialogClose />
        </DialogHeader>
        <CalendlyInlineWidget />
      </DialogContent>
    </Dialog>
  );
}
