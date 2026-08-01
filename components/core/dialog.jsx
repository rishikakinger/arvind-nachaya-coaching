"use client";

import { createContext, useContext, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

const DialogContext = createContext(null);

function useDialogContext() {
  const ctx = useContext(DialogContext);
  if (!ctx) throw new Error("Dialog components must be used within <Dialog>");
  return ctx;
}

const DEFAULT_VARIANTS = {
  initial: { opacity: 0, scale: 0.95, y: 16 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: 16 },
};

const DEFAULT_TRANSITION = { type: "spring", bounce: 0, duration: 0.4 };

export function Dialog({ children, variants, transition, open: controlledOpen, onOpenChange }) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;

  const setOpen = (value) => {
    if (!isControlled) setUncontrolledOpen(value);
    onOpenChange?.(value);
  };

  return (
    <DialogContext.Provider
      value={{
        open,
        setOpen,
        variants: variants ?? DEFAULT_VARIANTS,
        transition: transition ?? DEFAULT_TRANSITION,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
}

export function DialogTrigger({ children, className, ...props }) {
  const { setOpen } = useDialogContext();
  return (
    <button type="button" className={className} onClick={() => setOpen(true)} {...props}>
      {children}
    </button>
  );
}

export function DialogContent({ children, className }) {
  const { open, setOpen, variants, transition } = useDialogContext();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="dialog-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
          <div className="dialog-content" role="dialog" aria-modal="true">
            <motion.div
              className={cn("dialog-panel", className)}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={transition}
              onClick={(e) => e.stopPropagation()}
            >
              {children}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

export function DialogHeader({ children }) {
  return <div className="dialog-header">{children}</div>;
}

export function DialogTitle({ children, className }) {
  return <h3 className={cn("dialog-title", className)}>{children}</h3>;
}

export function DialogDescription({ children, className }) {
  return <p className={cn("dialog-description", className)}>{children}</p>;
}

export function DialogClose({ className }) {
  const { setOpen } = useDialogContext();
  return (
    <button
      type="button"
      className={cn("dialog-close", className)}
      onClick={() => setOpen(false)}
      aria-label="Close"
    >
      ×
    </button>
  );
}
