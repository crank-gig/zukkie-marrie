import { useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from 'lucide-react';
import type { GalleryImage } from '../../types/index.ts';

interface LightboxProps {
  images: GalleryImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

/** Accessible image lightbox with keyboard navigation (Esc / ← / →). */
export function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const isOpen = index !== null;

  const goTo = useCallback(
    (next: number) => {
      const total = images.length;
      onNavigate((next + total) % total);
    },
    [images.length, onNavigate],
  );

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') goTo((index as number) + 1);
      if (event.key === 'ArrowLeft') goTo((index as number) - 1);
    };

    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, index, goTo, onClose]);

  const active = isOpen ? images[index as number] : null;

  return (
    <AnimatePresence>
      {active ? (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-navy-950/90 p-4 backdrop-blur-sm sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <div className="flex w-full max-w-5xl items-center justify-end">
            <button
              type="button"
              onClick={onClose}
              className="rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20"
            >
              <XIcon size={20} aria-hidden="true" />
              <span className="sr-only">Close image viewer</span>
            </button>
          </div>

          <motion.figure
            key={active.id}
            className="mt-3 flex w-full max-w-5xl flex-col items-center"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={active.src}
              alt={active.alt}
              className="max-h-[68vh] w-auto max-w-full rounded-xl object-contain shadow-lift"
            />
            <figcaption className="mt-4 max-w-2xl text-center text-sm text-navy-100">{active.caption}</figcaption>
          </motion.figure>

          <div
            className="mt-5 flex items-center gap-4"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => goTo((index as number) - 1)}
              className="rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20"
            >
              <ChevronLeftIcon size={20} aria-hidden="true" />
              <span className="sr-only">Previous image</span>
            </button>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-navy-200">
              {(index as number) + 1} / {images.length}
            </p>
            <button
              type="button"
              onClick={() => goTo((index as number) + 1)}
              className="rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20"
            >
              <ChevronRightIcon size={20} aria-hidden="true" />
              <span className="sr-only">Next image</span>
            </button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
