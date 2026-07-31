import React from 'react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, MailIcon, TwitterIcon } from 'lucide-react';
import { COMPANY, NAV_ITEMS } from '../data/company';
import { Reveal } from '../ui/Reveal';

const SOCIALS = [
  { label: 'LinkedIn', icon: LinkedinIcon },
  { label: 'Facebook', icon: FacebookIcon },
  { label: 'X (Twitter)', icon: TwitterIcon },
  { label: 'Instagram', icon: InstagramIcon },
];

/** Closing brand statement + skyline motif echoing the profile's final slide. */
export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 pt-20 text-navy-100">
      <div className="container-content relative z-10 text-center">
        <Reveal>
          <img
            src={COMPANY.logo}
            alt=""
            className="mx-auto h-20 w-20 rounded-2xl border border-white/15 bg-white object-cover shadow-lift"
          />
          <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {COMPANY.name}
          </h2>
          <p className="mt-3 font-display text-base italic text-gold-300 sm:text-lg">{COMPANY.tagline}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <nav aria-label="Footer navigation" className="mt-10">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-navy-200 transition-colors hover:text-gold-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Reveal>

        <Reveal delay={0.16}>
          <a
            href={`mailto:${COMPANY.email}`}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-white backdrop-blur transition-colors hover:border-gold-500/50 hover:bg-white/10"
          >
            <MailIcon size={16} aria-hidden="true" />
            {COMPANY.email}
          </a>

          <ul className="mt-8 flex items-center justify-center gap-3">
            {SOCIALS.map(({ label, icon: Icon }) => (
              <li key={label}>
                <a
                  href="#contact"
                  aria-label={`${label} — profile coming soon`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/5 text-navy-100 transition-all duration-300 ease-brand hover:-translate-y-0.5 hover:border-gold-500/50 hover:text-gold-300"
                >
                  <Icon size={17} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* Decorative skyline */}
      <div className="relative mt-16 h-40" aria-hidden="true">
        <div className="absolute bottom-24 left-1/2 h-24 w-24 -translate-x-1/2 rounded-t-full bg-gold-500/80 blur-[1px]" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-center gap-1 px-2">
          {[38, 62, 30, 78, 46, 96, 54, 70, 34, 88, 44, 66, 28, 74, 40, 58].map((height, index) => (
            <div
              key={index}
              className="w-[4.5%] max-w-[68px] rounded-t-[3px] bg-navy-900"
              style={{ height: `${height}px` }}
            >
              <div className="mx-auto mt-2 grid w-3/5 grid-cols-2 gap-1">
                {Array.from({ length: Math.max(2, Math.round(height / 18)) }).map((_, dot) => (
                  <span key={dot} className="h-[3px] w-[3px] rounded-[1px] bg-gold-300/70" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10">
        <div className="container-content flex flex-col items-center justify-between gap-2 py-6 text-center text-xs text-navy-300 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} ZUKKIE-MARIE LIMITED. All Rights Reserved.</p>
          <p>
            {COMPANY.documentTitle} · RC.319516 · {COMPANY.documentDate}
          </p>
        </div>
      </div>
    </footer>
  );
}
