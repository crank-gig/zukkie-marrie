import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import { COMPANY, NAV_ITEMS } from '../data/company';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useScrollProgress } from '../../hooks/useScrollProgress';

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);
  const { progress, scrolled } = useScrollProgress();

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-brand ${
        scrolled ? 'bg-navy-950/92 shadow-lift backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <a
        href="#overview"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-full focus:bg-gold-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-navy-950"
      >
        Skip to content
      </a>

      <div className="container-content flex h-[4.5rem] items-center justify-between gap-6">
        <a href="#top" className="group flex items-center gap-3" aria-label={`${COMPANY.name} — back to top`}>
          <img
            src={COMPANY.logo}
            alt=""
            className="h-11 w-11 rounded-full border border-white/25 bg-white object-cover transition-transform duration-500 ease-brand group-hover:scale-105"
          />
          <span className="hidden sm:block">
            <span className="block font-display text-[0.95rem] font-semibold leading-tight tracking-wide text-white">
              ZUKKIE-MARIE
            </span>
            <span className="block text-[0.62rem] font-medium uppercase tracking-[0.24em] text-gold-300">
              Limited
            </span>
          </span>
        </a>

        {/*
        <nav aria-label="Section navigation" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative block rounded-full px-3.5 py-2 text-[0.8rem] font-medium transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-navy-100 hover:text-white'
                    }`}
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-full bg-white/10 ring-1 ring-inset ring-gold-500/40"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    ) : null}
                    <span className="relative">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        */}

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-gold-500 px-5 py-2.5 text-[0.8rem] font-semibold text-navy-950 transition-all duration-300 ease-brand hover:bg-gold-400 hover:shadow-glow sm:inline-flex"
          >
            Make an enquiry
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            className="rounded-full border border-white/20 p-2.5 text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            {menuOpen ? <XIcon size={20} aria-hidden="true" /> : <MenuIcon size={20} aria-hidden="true" />}
            <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>

      {/* Reading progress */}
      <div className="h-[2px] w-full bg-white/10">
        <div
          className="h-full origin-left bg-gold-500 transition-[width] duration-150 ease-out"
          style={{ width: `${progress * 100}%` }}
          aria-hidden="true"
        />
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.nav
            id="mobile-nav"
            aria-label="Section navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 bg-navy-950/97 backdrop-blur-md lg:hidden"
          >
            <ul className="container-content grid gap-1 py-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setMenuOpen(false)}
                    className={`block rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                      activeId === item.id
                        ? 'bg-white/10 text-white'
                        : 'text-navy-100 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 block rounded-full bg-gold-500 px-4 py-3 text-center text-sm font-semibold text-navy-950"
                >
                  Make an enquiry
                </a>
              </li>
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
