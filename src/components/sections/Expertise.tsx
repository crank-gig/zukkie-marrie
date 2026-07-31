import { DISCIPLINES } from '../data/company';
import { Section } from '../ui/Section.tsx';
import { SectionHeading } from '../ui/SectionHeading.tsx';
import { Reveal } from '../ui/Reveal.tsx';
import { IconBadge } from '../ui/IconBadge.tsx';

export function Expertise() {
  return (
    <Section id="expertise" tone="navy">
      <SectionHeading
        eyebrow="Multidisciplinary team"
        title="Engineering Expertise"
        lead="ZUKKIE-MARIE LIMITED maintains a multidisciplinary engineering team spanning:"
        inverted
      />

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {DISCIPLINES.map((discipline, index) => (
          <Reveal as="li" key={discipline.label} delay={index * 0.04}>
            <article className="group flex h-full items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur transition-all duration-500 ease-brand hover:-translate-y-1 hover:border-gold-500/40 hover:bg-white/[0.1]">
              <IconBadge icon={discipline.icon} variant="gold" className="group-hover:scale-110" />
              <h3 className="text-sm font-semibold text-white">{discipline.label}</h3>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
