"use client";

import { Children, cloneElement, useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

export function AnimatedBackground({
  children,
  defaultValue,
  onValueChange,
  className,
  transition,
  enableHover = false,
}) {
  const [activeId, setActiveId] = useState(defaultValue ?? null);
  const uniqueId = useId();

  const handleSetActiveId = (id) => {
    setActiveId(id);
    onValueChange?.(id);
  };

  return Children.map(children, (child, index) => {
    const id = child.props["data-id"];

    const interactionProps = enableHover
      ? {
          onMouseEnter: () => handleSetActiveId(id),
          onMouseLeave: () => handleSetActiveId(defaultValue ?? null),
        }
      : {
          onClick: () => handleSetActiveId(id),
        };

    return cloneElement(child, {
      key: index,
      className: cn("relative inline-flex", child.props.className),
      "data-checked": activeId === id ? "true" : "false",
      ...interactionProps,
      children: (
        <>
          <AnimatePresence initial={false}>
            {activeId === id && (
              <motion.div
                layoutId={`nav-pill-${uniqueId}`}
                className={cn("nav-pill-bg", className)}
                transition={transition}
                initial={{ opacity: defaultValue ? 1 : 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
          </AnimatePresence>
          <span className="relative z-10">{child.props.children}</span>
        </>
      ),
    });
  });
}
