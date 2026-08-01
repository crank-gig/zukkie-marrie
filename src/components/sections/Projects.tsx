import { useState } from 'react';
import { ExpandIcon, ShieldCheckIcon } from 'lucide-react';
import { GALLERY } from '../data/company';
import { Section } from '../ui/Section.tsx';
import { SectionHeading } from '../ui/SectionHeading.tsx';
import { Reveal } from '../ui/Reveal.tsx';
import { SmartImage } from '../ui/SmartImage.tsx';
import { Lightbox } from '../ui/Lightbox.tsx';

const CERTIFICATE = GALLERY[0];
const PROJECT_IMAGES = GALLERY.slice(1);

/** Certificate of incorporation + project imagery showcase with a lightbox gallery. */
export function Projects() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <Section id="projects" tone="white">
      <SectionHeading
        eyebrow="Credentials & portfolio"
        title="Certification & Project Showcase"
        lead="Duly incorporated since 1997, with a delivered portfolio spanning housing estates, civil works, renewable energy and plant."
      />

      <div className="mt-12 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <figure className="h-full overflow-hidden rounded-2xl border border-navy-900/8 bg-white shadow-card">
            <button
              type="button"
              onClick={() => setActiveIndex(0)}
              className="group relative block w-full"
              aria-label="Enlarge the Certificate of Incorporation"
            >
              <SmartImage
                src={CERTIFICATE.src}
                alt={CERTIFICATE.alt}
                wrapperClassName="aspect-[3/4]"
                className="transition-transform duration-700 ease-brand group-hover:scale-[1.03]"
              />
              <span className="absolute inset-0 bg-navy-950/0 transition-colors duration-500 group-hover:bg-navy-950/25" />
              <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-navy-900 opacity-0 shadow-card transition-opacity duration-300 group-hover:opacity-100">
                <ExpandIcon size={14} aria-hidden="true" />
                View full size
              </span>
            </button>
            <figcaption className="flex items-start gap-3 border-t border-navy-900/8 p-6">
              <ShieldCheckIcon className="mt-0.5 shrink-0 text-gold-600" size={20} aria-hidden="true" />
              <span>
                <span className="block text-sm font-semibold text-navy-900">Certificate of Incorporation</span>
                <span className="mt-1 block text-sm text-navy-600">
                  RC.319516 — Corporate Affairs Commission, Federal Republic of Nigeria (1997). Limited by
                  shares under the Companies and Allied Matters Act 1990.
                </span>
              </span>
            </figcaption>
          </figure>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {PROJECT_IMAGES.map((image, index) => (
            <Reveal as="div" key={image.id} delay={index * 0.05}>
              <button
                type="button"
                onClick={() => setActiveIndex(index + 1)}
                className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-navy-900/8 bg-white text-left shadow-card transition-all duration-500 ease-brand hover:-translate-y-1 hover:shadow-lift"
              >
                <SmartImage
                  src={image.src}
                  alt={image.alt}
                  wrapperClassName="aspect-[4/3]"
                  className="transition-transform duration-700 ease-brand group-hover:scale-105"
                />
                <div className="flex flex-1 flex-col justify-between bg-white/95 p-4">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-gold-700">
                    Project snapshot
                  </p>
                  <p className="mt-2 text-sm font-medium leading-snug text-navy-900">{image.caption}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox
        images={GALLERY}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </Section>
  );
}
