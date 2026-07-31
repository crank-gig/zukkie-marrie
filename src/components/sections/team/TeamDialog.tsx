import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AwardIcon, BadgeCheckIcon, GraduationCapIcon, MapPinIcon, XIcon } from 'lucide-react';
import type { TeamMember } from '../../../types';

interface TeamDialogProps {
  member: TeamMember | null;
  onClose: () => void;
}

/** Full leadership biography in an accessible modal panel. */
export function TeamDialog({ member, onClose }: TeamDialogProps) {
  useEffect(() => {
    if (!member) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [member, onClose]);

  return (
    <AnimatePresence>
      {member ? (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-navy-950/80 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="team-dialog-title"
            className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl bg-white shadow-lift sm:rounded-3xl"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <header className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-navy-900/8 bg-white/95 p-6 backdrop-blur sm:p-8">
              <div className="flex items-center gap-4">
                <span
                  className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy-900 font-display text-lg font-semibold text-gold-400"
                  aria-hidden="true"
                >
                  {member.initials}
                </span>
                <div>
                  <h2 id="team-dialog-title" className="font-display text-xl font-semibold text-navy-900">
                    {member.name}
                  </h2>
                  <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-gold-600">
                    {member.role}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-navy-900/10 p-2 text-navy-700 transition-colors hover:bg-navy-100"
              >
                <XIcon size={18} aria-hidden="true" />
                <span className="sr-only">Close profile</span>
              </button>
            </header>

            <div className="p-6 sm:p-8">
              {member.origin ? (
                <p className="inline-flex items-center gap-1.5 rounded-full bg-navy-100/70 px-3 py-1 text-xs font-medium text-navy-700">
                  <MapPinIcon size={13} aria-hidden="true" />
                  {member.origin}
                </p>
              ) : null}

              <div className="mt-5 space-y-4 text-[0.95rem] leading-relaxed text-navy-700">
                {member.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <section>
                  <h3 className="flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-navy-900">
                    <GraduationCapIcon size={15} className="text-gold-600" aria-hidden="true" />
                    Credentials
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {member.credentials.map((credential) => (
                      <li key={credential} className="text-sm leading-relaxed text-navy-700">
                        {credential}
                      </li>
                    ))}
                  </ul>
                </section>

                {member.memberships?.length ? (
                  <section>
                    <h3 className="flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-navy-900">
                      <AwardIcon size={15} className="text-gold-600" aria-hidden="true" />
                      Memberships
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {member.memberships.map((membership) => (
                        <li key={membership} className="text-sm leading-relaxed text-navy-700">
                          {membership}
                        </li>
                      ))}
                    </ul>
                  </section>
                ) : null}
              </div>

              {member.certifications?.length ? (
                <section className="mt-8 rounded-2xl bg-navy-100/50 p-6">
                  <h3 className="flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-navy-900">
                    <BadgeCheckIcon size={15} className="text-gold-600" aria-hidden="true" />
                    Professional certifications
                  </h3>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {member.certifications.map((certification) => (
                      <li key={certification} className="text-sm leading-relaxed text-navy-700">
                        {certification}
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
