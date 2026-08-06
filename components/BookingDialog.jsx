"use client";

import { useEffect } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "./core/dialog";

const CALENDLY_URL = "https://calendly.com/arvind-solutionsatsource/30min";

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
          <DialogTitle>Book a Discovery Conversation</DialogTitle>
          <DialogClose />
        </DialogHeader>
        <CalendlyInlineWidget />
      </DialogContent>
    </Dialog>
  );
}
