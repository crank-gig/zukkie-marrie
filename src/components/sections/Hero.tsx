import { motion } from 'framer-motion';
import { ArrowDownIcon, ArrowRightIcon } from 'lucide-react';
import { COMPANY, HERO_STATS, IMAGES } from '../data/company';
import { Counter } from '../ui/Counter.tsx';
import { LinkButton } from '../ui/Button.tsx';

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-navy-950 pb-16 pt-32 sm:pb-20"
    >
      {/* Cover imagery */}
      <div className="absolute inset-0 -z-10">
        <img
          src={IMAGES.hero}
          alt=""
          className="h-full w-full object-cover opacity-45"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-navy-950/80" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_15%_10%,rgba(15,30,60,0.35),rgba(10,20,40,0.95))]" />
      </div>

      <div className="container-content">
        <div className="grid items-end gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4"
            >
              <img
                src={COMPANY.logo}
                alt={`${COMPANY.name} logo`}
                className="h-16 w-16 rounded-full border border-gold-500/40 bg-white object-cover shadow-lift sm:h-20 sm:w-20"
              />
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold-300">
                  {COMPANY.documentTitle}
                </p>
                <p className="mt-1 text-sm text-navy-200">{COMPANY.documentDate}</p>
              </div>
            </motion.div>

            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-9 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[4.1rem]"
            >
              ZUKKIE-MARIE
              <span className="block text-gold-400">LIMITED</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-xl font-display text-lg italic text-navy-100 sm:text-xl"
            >
              {COMPANY.tagline}
            </motion.p>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.32 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {COMPANY.sectors.map((sector) => (
                <li
                  key={sector}
                  className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-navy-100 backdrop-blur"
                >
                  {sector}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <LinkButton href="#projects">
                Explore our projects
                <ArrowRightIcon size={16} aria-hidden="true" />
              </LinkButton>
              <LinkButton href="#overview" variant="ghost">
                Company profile
                <ArrowDownIcon size={16} aria-hidden="true" />
              </LinkButton>
            </motion.div>
          </div>

          {/* Key figures */}
          <motion.dl
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/12 bg-white/10 backdrop-blur-md"
          >
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="bg-navy-950/40 p-5 sm:p-6">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-2xl font-semibold text-gold-400 sm:text-3xl">
                    <Counter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      plain={stat.value > 1900}
                    />
                  </span>
                  <span className="mt-2 block text-xs leading-snug text-navy-100">{stat.label}</span>
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
