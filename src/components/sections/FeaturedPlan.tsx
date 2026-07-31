import { ArrowRightIcon, CheckIcon, MapPinIcon } from 'lucide-react';
import { FEATURED_PLAN, IMAGES } from '../data/company';
import { Reveal } from '../ui/Reveal.tsx';
import { Counter } from '../ui/Counter.tsx';
import { LinkButton } from '../ui/Button.tsx';
import { SmartImage } from '../ui/SmartImage.tsx';

/** Highlighted business plan callout for the Cross River State housing programme. */
export function FeaturedPlan() {
  return (
    <section
      id="featured-plan"
      aria-labelledby="featured-plan-title"
      className="relative scroll-mt-24 overflow-hidden bg-navy-950 py-20 sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 -z-10 opacity-25">
        <img src={IMAGES.villa} alt="" className="h-full w-full object-cover" loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-navy-950/85" />
      </div>

      <div className="container-content">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow text-gold-300">{FEATURED_PLAN.eyebrow}</p>
              <h2
                id="featured-plan-title"
                className="mt-3 font-display text-3xl font-semibold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.7rem]"
              >
                {FEATURED_PLAN.title}
              </h2>
              <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-navy-100 backdrop-blur">
                <MapPinIcon size={15} aria-hidden="true" />
                {FEATURED_PLAN.location} · {FEATURED_PLAN.date}
              </p>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-100">{FEATURED_PLAN.summary}</p>
            </Reveal>

            <ul className="mt-8 space-y-3">
              {FEATURED_PLAN.highlights.map((highlight, index) => (
                <Reveal as="li" key={highlight} delay={0.06 * index} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-500 text-navy-950"
                    aria-hidden="true"
                  >
                    <CheckIcon size={13} strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed text-navy-100">{highlight}</span>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.2}>
              <LinkButton href="#contact" className="mt-9">
                Request the business plan
                <ArrowRightIcon size={16} aria-hidden="true" />
              </LinkButton>
            </Reveal>
          </div>

          <div className="space-y-6">
            <Reveal delay={0.12}>
              <dl className="grid gap-px overflow-hidden rounded-3xl border border-white/12 bg-white/10 backdrop-blur-md sm:grid-cols-3">
                {FEATURED_PLAN.stats.map((stat) => (
                  <div key={stat.label} className="bg-navy-950/50 p-6 text-center">
                    <dt className="sr-only">{stat.label}</dt>
                    <dd>
                      <span className="block font-display text-2xl font-semibold text-gold-400 sm:text-[1.75rem]">
                        {stat.value > 1900 ? (
                          <>
                            {stat.prefix}
                            <Counter value={stat.value} plain />
                          </>
                        ) : (
                          <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                        )}
                      </span>
                      <span className="mt-2 block text-[0.72rem] leading-snug text-navy-100">{stat.label}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.18}>
              <figure className="overflow-hidden rounded-3xl border border-white/12 shadow-lift">
                <SmartImage
                  src={IMAGES.estate}
                  alt="Completed housing estate representative of the civil servants housing programme"
                  wrapperClassName="aspect-[16/10]"
                />
                <figcaption className="bg-navy-900 px-5 py-4 text-xs text-navy-200">
                  Representative estate typology — 5,000 units planned across the programme.
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
