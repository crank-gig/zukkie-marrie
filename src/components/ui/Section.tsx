import React from 'react';

export type SectionTone = 'white' | 'sky' | 'sage' | 'navy' | 'navy-light';

const TONE_CLASSES: Record<SectionTone, string> = {
  white: 'bg-white',
  sky: 'bg-navy-100/60',
  sage: 'bg-sage-100/70',
  navy: 'bg-navy-900',
  'navy-light': 'bg-navy-500',
};

interface SectionProps {
  id: string;
  tone?: SectionTone;
  className?: string;
  labelledBy?: string;
  children: React.ReactNode;
}

/** Consistent vertical rhythm + tonal background for every page section. */
export function Section({ id, tone = 'white', className = '', labelledBy, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`relative scroll-mt-24 py-20 sm:py-24 lg:py-28 ${TONE_CLASSES[tone]} ${className}`}
    >
      <div className="container-content">{children}</div>
    </section>
  );
}
