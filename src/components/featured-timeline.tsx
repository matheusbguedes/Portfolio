"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef, type ReactNode } from "react";

type FeaturedTimelineProps = {
  children: ReactNode;
};

export function FeaturedTimeline({ children }: FeaturedTimelineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 50%"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <div ref={ref} className="relative mb-4 md:ml-4">
      <div
        aria-hidden
        className="absolute top-0 bottom-0 left-[-1px] w-[2px] bg-border/20"
      />
      <motion.div
        aria-hidden
        className="absolute top-0 bottom-0 left-[-1px] w-[2px] origin-top bg-border"
        style={{ scaleY }}
      />
      <ul className="divide-y divide-dashed">{children}</ul>
    </div>
  );
}
