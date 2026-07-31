import { useState } from 'react';
// import { ImageIcon } from 'lucide-react';
import { TEAM } from '../data/team';
import type { TeamMember } from '../../types/index.ts';
import { Section } from '../ui/Section.tsx';
import { SectionHeading } from '../ui/SectionHeading.tsx';
import { Reveal } from '../ui/Reveal.tsx';
import { TeamCard } from './team/TeamCard.tsx';
import { TeamDialog } from './team/TeamDialog.tsx';

export function Team() {
  const [active, setActive] = useState<TeamMember | null>(null);

  return (
    <Section id="team" tone="sky">
      <SectionHeading
        eyebrow="Governance & people"
        title="Management Team Profiles"
        lead="A leadership team spanning engineering, construction, finance, quality assurance and technology — with decades of combined delivery experience."
      />

      {/*
      <Reveal delay={0.06}>
        <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-navy-900/10 bg-white px-4 py-2 text-xs font-medium text-navy-600">
          <ImageIcon size={14} className="text-navy-400" aria-hidden="true" />
          Official photography pending — monogram placeholders shown
        </p>
      </Reveal>
      */}

      <ul className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {TEAM.map((member, index) => (
          <Reveal as="li" key={member.id} delay={index * 0.05} className="h-full">
            <TeamCard member={member} onOpen={() => setActive(member)} />
          </Reveal>
        ))}
      </ul>

      <TeamDialog member={active} onClose={() => setActive(null)} />
    </Section>
  );
}
