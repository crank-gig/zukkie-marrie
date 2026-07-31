import { MailIcon, MapPinIcon, StarIcon } from 'lucide-react';
import { COMPANY, OFFICES } from '../data/company';
import { Section } from '../ui/Section.tsx';
import { SectionHeading } from '../ui/SectionHeading.tsx';
import { Reveal } from '../ui/Reveal.tsx';
import { IconBadge } from '../ui/IconBadge.tsx';

export function Offices() {
  return (
    <Section id="offices" tone="white">
      <SectionHeading
        eyebrow="Locations"
        title="Our Offices"
        lead="Three operational bases give us nationwide reach, with expansion plans across West Africa."
      />

      <ul className="mt-12 grid gap-6 md:grid-cols-3">
        {OFFICES.map((office, index) => (
          <Reveal as="li" key={office.id} delay={index * 0.08}>
            <article className="group h-full rounded-2xl border border-navy-900/8 bg-white p-7 shadow-card transition-all duration-500 ease-brand hover:-translate-y-1.5 hover:border-gold-500/40 hover:shadow-lift">
              <div className="flex items-start justify-between gap-3">
                <IconBadge
                  icon={MapPinIcon}
                  variant={office.isHeadquarters ? 'gold' : 'navy'}
                  size="lg"
                  className="group-hover:scale-105"
                />
                {office.isHeadquarters ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-100 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-gold-700">
                    <StarIcon size={12} aria-hidden="true" />
                    Head office
                  </span>
                ) : null}
              </div>

              <h3 className="mt-6 font-display text-xl font-semibold uppercase tracking-wide text-navy-900">
                {office.name}
              </h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-gold-600">
                {office.city}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-navy-700">{office.address}</p>
            </article>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={0.16}>
        <div className="mt-8 flex flex-col items-start gap-5 rounded-2xl bg-navy-900 p-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <IconBadge icon={MailIcon} variant="gold" />
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold-300">Email</p>
              <a
                href={`mailto:${COMPANY.email}`}
                className="mt-1 block break-all text-sm font-medium text-white transition-colors hover:text-gold-300"
              >
                {COMPANY.email}
              </a>
            </div>
          </div>
          <a
            href="#contact"
            className="rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 ease-brand hover:border-gold-500 hover:bg-white/5"
          >
            Send an enquiry
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
