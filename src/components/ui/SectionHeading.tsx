import React from 'react';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  lead?: string;
  /** Use on dark (navy) section backgrounds. */
  inverted?: boolean;
  align?: 'left' | 'center';
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  inverted = false,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <Reveal as="header" className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className={inverted ? 'eyebrow text-gold-300' : 'eyebrow'}>{eyebrow}</p>
      <h2
        className={`mt-3 font-display text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.6rem] ${
          inverted ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      <span
        className={`mt-5 block h-[3px] w-14 rounded-full bg-gold-500 ${align === 'center' ? 'mx-auto' : ''}`}
        aria-hidden="true"
      />
      {lead ? (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${inverted ? 'text-navy-100' : 'text-navy-700'}`}>
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}
