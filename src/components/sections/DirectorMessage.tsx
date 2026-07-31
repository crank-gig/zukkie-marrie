import { QuoteIcon } from 'lucide-react';
import { Section } from '../ui/Section.tsx';
import { SectionHeading } from '../ui/SectionHeading.tsx';
import { Reveal } from '../ui/Reveal.tsx';
import { TEAM } from '../data/team';

const CEO = TEAM[0];

/** Managing Director / CEO's message, presented as a portrait card + pull quote. */
export function DirectorMessage() {
  return (
    <Section id="message" tone="white">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <figure className="overflow-hidden rounded-3xl border border-navy-900/8 bg-navy-100/50 shadow-card">
            {/*
            <div className="flex aspect-[4/5] items-center justify-center bg-navy-900">
              <span
                className="font-display text-[5rem] font-semibold tracking-tight text-gold-400"
                aria-hidden="true"
              >
                {CEO.initials}
              </span>
              <span className="sr-only">Portrait of {CEO.name} — photograph to be supplied</span>
            </div>
            */}
            <img
              src="https://res.cloudinary.com/derzcse6f/image/upload/v1784575821/obianuju_azukaego_pta4vk.jpg"
              alt="CEO's portrait"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <figcaption className="bg-white p-6">
              <p className="font-display text-lg font-semibold text-navy-900">{CEO.name}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">
                Managing Director / {CEO.role}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-navy-700">{CEO.summary}</p>
            </figcaption>
          </figure>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="A word from our leadership"
            title="Managing Director's Message"
          />

          <Reveal delay={0.08}>
            <blockquote className="mt-10 rounded-3xl border-l-4 border-gold-500 bg-navy-100/50 p-7 sm:p-9">
              <QuoteIcon className="text-gold-500" size={28} aria-hidden="true" />
              <p className="mt-4 font-display text-xl leading-relaxed text-navy-900 sm:text-2xl">
                “We exist to solve a very human problem — the accommodation stress carried by Nigeria&apos;s
                civil servants. Every estate we build, every road and borehole we deliver, is a step toward
                dignified, affordable living.”
              </p>
              <footer className="mt-6 text-sm font-semibold text-navy-700">
                {CEO.name}
                <span className="mt-1 block font-normal text-navy-500">Chief Executive Officer</span>
              </footer>
            </blockquote>
          </Reveal>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-navy-700">
            {[
              'ZUKKIE-MARIE LIMITED was established to address Nigeria\u2019s critical housing deficit and to deliver world-class infrastructure that transforms communities. Since our incorporation in 1997, we have grown from a focused construction enterprise into a diversified engineering and development company.',
              'Our approach is deliberately multidisciplinary: engineers, architects, quantity surveyors and project managers working under one quality management system, with a zero-harm safety culture and transparent financial governance on every project.',
              'On behalf of the board and our management team, thank you for reviewing our corporate profile. We look forward to building excellence with you.',
            ].map((paragraph, index) => (
              <Reveal key={index} delay={0.1 + index * 0.06}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
