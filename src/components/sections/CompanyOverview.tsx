import { COMPANY, COMPANY_FACTS, OFFICES } from '../data/company';
import { Section } from '../ui/Section.tsx';
import { SectionHeading } from '../ui/SectionHeading.tsx';
import { Reveal } from '../ui/Reveal.tsx';
import { IconBadge } from '../ui/IconBadge.tsx';

const HQ = OFFICES.find((office) => office.isHeadquarters);

export function CompanyOverview() {
  return (
    <Section id="overview" tone="sky" labelledBy="overview-title">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="The company"
            title="Company Overview"
            lead="A Nigerian limited liability company delivering construction, engineering, property development, geological services and renewable energy projects nationwide."
          />

          <dl className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {COMPANY_FACTS.map((fact, index) => (
              <Reveal key={fact.label} delay={index * 0.05} className="flex gap-4">
                <IconBadge icon={fact.icon} variant="navy" />
                <div>
                  <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold-600">
                    {fact.label}
                  </dt>
                  <dd className="mt-1.5 text-[0.98rem] font-medium leading-relaxed text-navy-900">
                    {fact.value}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>

        <Reveal delay={0.12} className="lg:pt-4">
          <div className="overflow-hidden rounded-3xl border border-navy-900/8 bg-white shadow-card">
            <div className="flex items-center justify-center bg-navy-900 p-10">
              <img
                src={COMPANY.logo}
                alt={`${COMPANY.name} corporate emblem`}
                className="h-40 w-40 rounded-full border-[6px] border-navy-950 object-cover shadow-lift"
                loading="lazy"
              />
            </div>
            <div className="p-7">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold-600">
                Head office — {HQ?.city}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-navy-700">{HQ?.address}</p>

              <div className="hairline my-6" />

              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-navy-500">
                    Email
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="break-all font-medium text-navy-900 underline decoration-gold-500/60 decoration-2 underline-offset-4 transition-colors hover:text-gold-600"
                    >
                      {COMPANY.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-navy-500">
                    Telephone
                  </dt>
                  <dd className="mt-1 inline-flex items-center gap-2 rounded-full bg-navy-100/70 px-3 py-1 text-xs font-medium text-navy-600">
                    07071147444
                  </dd>
                </div>
                {/*
                <div>
                  <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-navy-500">
                    Website
                  </dt>
                  <dd className="mt-1 inline-flex items-center gap-2 rounded-full bg-navy-100/70 px-3 py-1 text-xs font-medium text-navy-600">
                    To be confirmed
                  </dd>
                </div>
                */}
              </dl>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
