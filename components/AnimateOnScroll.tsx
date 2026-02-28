"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef, useState, useEffect } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  className?: string;
}

const directionOffsets = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
};

export default function AnimateOnScroll({
  children,
  direction = "up",
  delay = 0,
  className,
}: AnimateOnScrollProps) {
  const offset = directionOffsets[direction];
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [fallback, setFallback] = useState(false);

  // Fail-safe: if IntersectionObserver never fires, show content after 1s
  useEffect(() => {
    const timer = setTimeout(() => setFallback(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const show = isInView || fallback;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset }}
      animate={show ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset }}
      transition={{ duration: 0.6, delay: show && !fallback ? delay : 0, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
