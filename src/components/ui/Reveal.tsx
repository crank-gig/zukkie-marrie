import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  /** Stagger offset in seconds. */
  delay?: number;
  /** Distance travelled on entry, in pixels. */
  y?: number;
  className?: string;
  as?: 'div' | 'li' | 'article' | 'section' | 'header';
}

/** Scroll-triggered entrance animation used across every section. */
export function Reveal({ children, delay = 0, y = 22, className, as = 'div' }: RevealProps) {
  const reduceMotion = useReducedMotion();
  // All motion primitives share the same prop surface here.
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
