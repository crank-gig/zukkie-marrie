import { CORE_VALUES, MISSION, VISION, VISION_MISSION_ICONS } from '../data/company';
import { Section } from '../ui/Section.tsx';
import { SectionHeading } from '../ui/SectionHeading.tsx';
import { Reveal } from '../ui/Reveal.tsx';
import { IconBadge } from '../ui/IconBadge.tsx';

const PILLARS = [
  { key: 'vision', label: 'Our Vision', body: VISION, icon: VISION_MISSION_ICONS.vision },
  { key: 'mission', label: 'Our Mission', body: MISSION, icon: VISION_MISSION_ICONS.mission },
];

export function VisionValues() {
  return (
    <Section id="vision" tone="sky">
      <SectionHeading
        eyebrow="What drives us"
        title="Vision, Mission & Core Values"
        lead="A clear purpose, expressed through ten values that govern how we plan, build and hand over."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {PILLARS.map((pillar, index) => (
          <Reveal key={pillar.key} delay={index * 0.08}>
            <article className="h-full rounded-2xl bg-navy-900 p-8 shadow-card">
              <div className="flex items-center gap-4">
                <IconBadge icon={pillar.icon} variant="gold" size="lg" />
                <h3 className="text-[0.8rem] font-semibold uppercase tracking-[0.22em] text-gold-300">
                  {pillar.label}
                </h3>
              </div>
              <p className="mt-6 font-display text-lg leading-relaxed text-white sm:text-xl">{pillar.body}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <h3 className="mt-16 text-[0.8rem] font-semibold uppercase tracking-[0.24em] text-navy-700">
          Core Values
        </h3>
      </Reveal>

      <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {CORE_VALUES.map((value, index) => (
          <Reveal as="li" key={value.label} delay={index * 0.04}>
            <article className="group h-full rounded-2xl border border-navy-900/8 bg-white p-5 text-center shadow-card transition-all duration-500 ease-brand hover:-translate-y-1.5 hover:border-gold-500/40 hover:shadow-lift">
              <IconBadge icon={value.icon} variant="navy" className="group-hover:scale-110" />
              <h4 className="mt-4 font-display text-base font-semibold text-navy-900">{value.label}</h4>
              <p className="mt-2 text-xs leading-relaxed text-navy-600">{value.description}</p>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
