"use client";
import { cn } from "@/lib/utils";
import { motion, useScroll, useSpring } from "motion/react";
import React from "react";

export const ScrollProgress = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
      stiffness: 200,
      damping: 50,
      restDelta: 0.001,
    });

    return (
      <motion.div
        ref={ref}
        className={cn(
          "fixed inset-x-0 top-0 z-[1000] h-[1.5px] origin-left bg-gradient-to-r from-sky-800 via-sky-600 to-sky-200",
          className
        )}
        style={{
          scaleX,
        }}
        {...props}
      />
    );
  }
);

ScrollProgress.displayName = "ScrollProgress";
