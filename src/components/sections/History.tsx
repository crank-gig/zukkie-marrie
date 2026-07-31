import { HISTORY_INTRO, MILESTONES } from '../data/company';
import { Section } from '../ui/Section.tsx';
import { SectionHeading } from '../ui/SectionHeading.tsx';
import { Reveal } from '../ui/Reveal.tsx';

export function History() {
  return (
    <Section id="history" tone="sage">
      <SectionHeading eyebrow="Our journey" title="Company History" lead={HISTORY_INTRO} />

      <ol className="relative mt-14 space-y-10 border-l border-navy-900/15 pl-8 sm:pl-12">
        {MILESTONES.map((milestone, index) => (
          <Reveal as="li" key={milestone.id} delay={index * 0.06} className="relative">
            <span
              className={`absolute -left-[2.30rem] top-1.5 h-3.5 w-3.5 rounded-full ring-4 ring-sage-100 sm:-left-[3.30rem] ${
                index % 2 === 0 ? 'bg-gold-500' : 'bg-navy-900'
              }`}
              aria-hidden="true"
            />
            <div className="grid gap-2 sm:grid-cols-[minmax(0,14rem)_1fr] sm:gap-8">
              <h3 className="text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-navy-900">
                {milestone.title}
              </h3>
              <p className="text-[0.95rem] leading-relaxed text-navy-700">{milestone.description}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
