import React from 'react';
import { WHY_CHOOSE_US } from '../data/company';
import { Section } from '../ui/Section.tsx';
import { SectionHeading } from '../ui/SectionHeading.tsx';
import { Reveal } from '../ui/Reveal.tsx';
import { IconBadge } from '../ui/IconBadge.tsx';

export function WhyChooseUs() {
  return (
    <Section id="why-us" tone="navy-light">
      <SectionHeading
        eyebrow="Our difference"
        title="Why Choose Us"
        lead="Ten reasons clients, government agencies and partners keep returning to ZUKKIE-MARIE LIMITED."
        inverted
      />

      <ul className="mt-12 grid gap-4 md:grid-cols-2">
        {WHY_CHOOSE_US.map((reason, index) => (
          <Reveal as="li" key={reason.label} delay={index * 0.04}>
            <article className="group flex h-full items-center gap-4 rounded-2xl border border-white/25 bg-white p-4 shadow-card transition-all duration-500 ease-brand hover:-translate-y-1 hover:shadow-lift sm:p-5">
              <IconBadge icon={reason.icon} variant="gold" className="group-hover:scale-110" />
              <h3 className="text-sm font-semibold leading-snug text-navy-900">{reason.label}</h3>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
