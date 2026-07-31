import { CheckCircle2Icon, SunIcon } from 'lucide-react';
import { QAQC_CALLOUT, QAQC_INTRO, QAQC_POINTS } from '../data/company';
import { Section } from '../ui/Section.tsx';
import { SectionHeading } from '../ui/SectionHeading.tsx';
import { Reveal } from '../ui/Reveal.tsx';
import { IconBadge } from '../ui/IconBadge.tsx';

export function QualityAssurance() {
  return (
    <Section id="quality" tone="sky">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow="Standards" title="Quality Assurance & Quality Control" lead={QAQC_INTRO} />

          <ul className="mt-10 space-y-4">
            {QAQC_POINTS.map((point, index) => (
              <Reveal as="li" key={point} delay={index * 0.05} className="flex items-start gap-3.5">
                <CheckCircle2Icon className="mt-0.5 shrink-0 text-gold-600" size={20} aria-hidden="true" />
                <span className="text-[0.95rem] leading-relaxed text-navy-800">{point}</span>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={0.14} className="lg:pt-6">
          <article className="h-full rounded-3xl bg-navy-900 p-9 text-center shadow-card">
            <IconBadge icon={SunIcon} variant="gold" size="lg" className="mx-auto" />
            <p className="mt-7 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-gold-300">
              {QAQC_CALLOUT.eyebrow}
            </p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-white">{QAQC_CALLOUT.title}</h3>
            <span className="mx-auto mt-6 block h-px w-16 bg-white/20" aria-hidden="true" />
            <p className="mt-6 text-sm leading-relaxed text-navy-100">{QAQC_CALLOUT.body}</p>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
