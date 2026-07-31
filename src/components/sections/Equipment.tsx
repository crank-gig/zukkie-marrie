import { EQUIPMENT, EQUIPMENT_FOOTNOTE, IMAGES } from '../data/company';
import { Section } from '../ui/Section.tsx';
import { SectionHeading } from '../ui/SectionHeading.tsx';
import { Reveal } from '../ui/Reveal.tsx';
import { IconBadge } from '../ui/IconBadge.tsx';
import { SmartImage } from '../ui/SmartImage.tsx';

export function Equipment() {
  return (
    <Section id="equipment" tone="white">
      <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Capacity"
            title="Equipment & Resources"
            lead="Owned plant, survey instrumentation and engineering software that let us mobilise quickly and control programme risk."
          />

          <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
            {EQUIPMENT.map((item, index) => (
              <Reveal as="li" key={item.label} delay={index * 0.04}>
                <article className="group flex h-full flex-col items-center rounded-2xl border border-navy-900/8 bg-white p-5 text-center shadow-card transition-all duration-500 ease-brand hover:-translate-y-1.5 hover:border-gold-500/40 hover:shadow-lift">
                  <IconBadge
                    icon={item.icon}
                    variant={index < 4 ? 'navy' : 'gold'}
                    className="group-hover:scale-110"
                  />
                  <h3 className="mt-4 text-xs font-semibold leading-snug text-navy-900">{item.label}</h3>
                </article>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.12}>
            <p className="mt-8 rounded-2xl bg-navy-100/60 p-5 text-sm italic leading-relaxed text-navy-700">
              {EQUIPMENT_FOOTNOTE}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:pt-8">
          <figure className="overflow-hidden rounded-3xl border border-navy-900/8 shadow-card">
            <SmartImage
              src={IMAGES.fleet}
              alt="Tipper truck and tractor from the company plant and transport fleet"
              wrapperClassName="aspect-[4/5]"
            />
            <figcaption className="bg-navy-900 px-5 py-4 text-xs text-navy-200">
              Plant, haulage and agricultural equipment deployed across Edo, Lagos and Akwa Ibom operations.
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </Section>
  );
}
