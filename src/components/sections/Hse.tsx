import { HSE_GROUPS, HSE_INTRO } from '../data/company';
import { Section } from '../ui/Section.tsx';
import { SectionHeading } from '../ui/SectionHeading.tsx';
import { Reveal } from '../ui/Reveal.tsx';
import { IconBadge } from '../ui/IconBadge.tsx';

export function Hse() {
  return (
    <Section id="hse" tone="white">
      <SectionHeading eyebrow="Zero harm" title="Health, Safety & Environment" lead={HSE_INTRO} />

      <ul className="mt-12 grid gap-6 lg:grid-cols-2">
        {HSE_GROUPS.map((group, index) => (
          <Reveal as="li" key={group.title} delay={index * 0.06} className="h-full">
            <article className="h-full rounded-2xl border border-navy-900/8 bg-white p-7 shadow-card transition-all duration-500 ease-brand hover:border-gold-500/40 hover:shadow-lift">
              <div className="flex items-center gap-3">
                <IconBadge icon={group.icon} variant="outline" size="sm" />
                <h3 className="text-[0.85rem] font-semibold uppercase tracking-[0.14em] text-navy-900">
                  {group.title}
                </h3>
              </div>

              <ul className="mt-6 space-y-4">
                {group.points.map((point) => (
                  <li key={point.label} className="flex items-start gap-3">
                    <IconBadge icon={point.icon} variant="gold" size="sm" />
                    <span className="mt-1.5 text-sm leading-relaxed text-navy-700">{point.label}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
