import { CAPABILITIES } from '../data/company';
import { Section } from '../ui/Section.tsx';
import { SectionHeading } from '../ui/SectionHeading.tsx';
import { Reveal } from '../ui/Reveal.tsx';
import { IconBadge } from '../ui/IconBadge.tsx';

export function Capabilities() {
  return (
    <Section id="capabilities" tone="sky">
      <SectionHeading
        eyebrow="Strategic advantages"
        title="Major Capabilities"
        lead="Eight strategic advantages that de-risk delivery for our clients and partners."
      />

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {CAPABILITIES.map((capability, index) => (
          <Reveal as="li" key={capability.title} delay={index * 0.05} className="h-full">
            <article className="group flex h-full flex-col rounded-2xl border border-navy-900/8 bg-white p-6 text-center shadow-card transition-all duration-500 ease-brand hover:-translate-y-1.5 hover:border-gold-500/40 hover:shadow-lift">
              <IconBadge
                icon={capability.icon}
                variant={index % 2 === 0 ? 'navy' : 'gold'}
                size="lg"
                className="mx-auto group-hover:scale-110"
              />
              <h3 className="mt-5 font-display text-base font-semibold leading-snug text-navy-900">
                {capability.title}
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-navy-600">{capability.description}</p>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
