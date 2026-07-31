import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  id: string;
  label: string;
}

export interface CompanyFact {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface OfficeLocation {
  id: string;
  name: string;
  city: string;
  address: string;
  isHeadquarters: boolean;
}

export interface CoreValue {
  label: string;
  icon: LucideIcon;
  description: string;
}

export interface TimelineMilestone {
  id: string;
  title: string;
  description: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  part: 1 | 2;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  initials: string;
  origin?: string;
  summary: string;
  bio: string[];
  credentials: string[];
  certifications?: string[];
  memberships?: string[];
  isPrincipal?: boolean;
  image_url?: string;
}

export interface Discipline {
  label: string;
  icon: LucideIcon;
}

export interface Capability {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface EquipmentItem {
  label: string;
  icon: LucideIcon;
}

export interface HseGroup {
  title: string;
  icon: LucideIcon;
  points: { label: string; icon: LucideIcon }[];
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  tall?: boolean;
}

export interface StatItem {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  decimals?: number;
}
