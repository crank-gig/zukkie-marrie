import React from 'react';
import { ORG_DEPARTMENTS } from '../data/company';
import { Section } from '../ui/Section.tsx';
import { SectionHeading } from '../ui/SectionHeading.tsx';
import { Reveal } from '../ui/Reveal.tsx';
import { IconBadge } from '../ui/IconBadge.tsx';

const TIERS = [
  { label: 'Chairman', tone: 'bg-navy-900 text-white' },
  { label: 'Managing Director / CEO', tone: 'bg-gold-500 text-navy-950' },
  { label: 'Executive Directors', tone: 'bg-navy-700 text-white' },
];

/** Governance hierarchy: Chairman → MD/CEO → Executive Directors → seven departments. */
export function OrgChart() {
  return (
    <Section id="governance" tone="sky">
      <SectionHeading
        eyebrow="Governance"
        title="Organisation Structure"
        lead="A clear reporting line from the board to seven functional departments, ensuring accountability on every project."
        align="center"
      />

      <div className="mt-14 flex flex-col items-center">
        {TIERS.map((tier, index) => (
          <React.Fragment key={tier.label}>
            <Reveal delay={index * 0.08}>
              <p
                className={`rounded-xl px-6 py-3 text-center text-[0.72rem] font-semibold uppercase tracking-[0.16em] shadow-card ${tier.tone}`}
              >
                {tier.label}
              </p>
            </Reveal>
            <span className="h-8 w-px bg-navy-900/25" aria-hidden="true" />
          </React.Fragment>
        ))}

        <span className="h-px w-full max-w-5xl bg-navy-900/25" aria-hidden="true" />

        <ul className="mt-0 grid w-full grid-cols-2 gap-4 pt-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
          {ORG_DEPARTMENTS.map((department, index) => (
            <Reveal as="li" key={department.label} delay={index * 0.05} className="h-full">
              <article className="group relative flex h-full flex-col items-center rounded-2xl border border-navy-900/8 bg-white p-5 text-center shadow-card transition-all duration-500 ease-brand hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-lift">
                <span
                  className="absolute -top-8 left-1/2 hidden h-8 w-px -translate-x-1/2 bg-navy-900/25 xl:block"
                  aria-hidden="true"
                />
                <IconBadge icon={department.icon} variant="navy" className="group-hover:scale-110" />
                <h3 className="mt-4 text-[0.72rem] font-semibold uppercase leading-snug tracking-[0.08em] text-navy-900">
                  {department.label}
                </h3>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
