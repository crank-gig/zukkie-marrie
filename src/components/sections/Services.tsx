import { ArrowUpRightIcon } from 'lucide-react';
import { SERVICES } from '../data/company';
import type { ServiceCategory } from '../../types/index.ts';
import { Section } from '../ui/Section.tsx';
import { SectionHeading } from '../ui/SectionHeading.tsx';
import { Reveal } from '../ui/Reveal.tsx';
import { IconBadge } from '../ui/IconBadge.tsx';

function ServiceCard({ service, index }: { service: ServiceCategory; index: number }) {
  return (
    <Reveal as="li" delay={index * 0.06} className="h-full">
      <article className="group flex h-full flex-col rounded-2xl border border-navy-900/8 bg-white p-7 shadow-card transition-all duration-500 ease-brand hover:-translate-y-1.5 hover:border-gold-500/40 hover:shadow-lift">
        <div className="flex items-start justify-between gap-4">
          <IconBadge icon={service.icon} variant="navy" size="lg" className="group-hover:scale-105" />
          <ArrowUpRightIcon
            size={18}
            className="text-navy-300 transition-all duration-500 ease-brand group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-600"
            aria-hidden="true"
          />
        </div>
        <h3 className="mt-6 text-[0.95rem] font-semibold uppercase tracking-[0.1em] text-navy-900">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-navy-700">{service.description}</p>
      </article>
    </Reveal>
  );
}

export function Services() {
  const partOne = SERVICES.filter((service) => service.part === 1);
  const partTwo = SERVICES.filter((service) => service.part === 2);

  return (
    <Section id="services" tone="sage">
      <SectionHeading
        eyebrow="What we do"
        title="Our Services"
        lead="Eight integrated service lines spanning buildings, infrastructure, energy and consultancy — delivered by one accountable team."
      />

      <div className="mt-12">
        <Reveal>
          <h3 className="text-[0.75rem] font-semibold uppercase tracking-[0.24em] text-gold-600">
            Part 1 — Build & Infrastructure
          </h3>
        </Reveal>
        <ul className="mt-6 grid gap-6 md:grid-cols-2">
          {partOne.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </ul>
      </div>

      <div className="mt-16">
        <Reveal>
          <h3 className="text-[0.75rem] font-semibold uppercase tracking-[0.24em] text-gold-600">
            Part 2 — Energy, Resources & Consultancy
          </h3>
        </Reveal>
        <ul className="mt-6 grid gap-6 md:grid-cols-2">
          {partTwo.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </ul>
      </div>
    </Section>
  );
}
