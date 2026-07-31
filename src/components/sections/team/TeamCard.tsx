import { ArrowRightIcon, GraduationCapIcon, MapPinIcon } from 'lucide-react';
import type { TeamMember } from '../../../types';

interface TeamCardProps {
  member: TeamMember;
  onOpen: () => void;
}

/** Bio card with monogram avatar placeholder, role, credentials and a read-more affordance. */
export function TeamCard({ member, onOpen }: TeamCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-navy-900/8 bg-white p-6 shadow-card transition-all duration-500 ease-brand hover:-translate-y-1.5 hover:border-gold-500/40 hover:shadow-lift">
      <div className="flex items-center gap-4">
        {/*
        <span
          className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-navy-900 font-display text-xl font-semibold text-gold-400 transition-transform duration-500 ease-brand group-hover:scale-105"
          aria-hidden="true"
        >
          {member.initials}
        </span>
        */}
        <img
          src={member.image || "https://res.cloudinary.com/derzcse6f/image/upload/v1784575821/obianuju_azukaego_pta4vk.jpg"}
          alt={member.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 border-2 border-navy-900/10 rounded-full"
        />
        <div>
          <h3 className="font-display text-lg font-semibold leading-tight text-navy-900">{member.name}</h3>
          <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-gold-600">
            {member.role}
          </p>
        </div>
      </div>

      {member.origin ? (
        <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-navy-500">
          <MapPinIcon size={13} aria-hidden="true" />
          {member.origin}
        </p>
      ) : null}

      <p className="mt-4 text-sm leading-relaxed text-navy-700">{member.summary}</p>

      <ul className="mt-5 space-y-2">
        {member.credentials.slice(0, 3).map((credential) => (
          <li key={credential} className="flex items-start gap-2 text-xs leading-relaxed text-navy-600">
            <GraduationCapIcon size={14} className="mt-0.5 shrink-0 text-navy-400" aria-hidden="true" />
            {credential}
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={onOpen}
        className="mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-navy-900 transition-colors hover:text-gold-600"
      >
        Read full profile
        <ArrowRightIcon
          size={15}
          className="transition-transform duration-300 ease-brand group-hover:translate-x-1"
          aria-hidden="true"
        />
        <span className="sr-only"> of {member.name}</span>
      </button>
    </article>
  );
}
