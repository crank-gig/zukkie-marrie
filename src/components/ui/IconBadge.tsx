import React from "react";
import { BoxIcon } from "lucide-react";
type BadgeVariant = 'navy' | 'gold' | 'outline' | 'ghost';
type BadgeSize = 'sm' | 'md' | 'lg';
const VARIANTS: Record<BadgeVariant, string> = {
  navy: 'bg-navy-900 text-gold-300',
  gold: 'bg-gold-500 text-navy-900',
  outline: 'border border-navy-900/12 bg-white text-navy-800',
  ghost: 'bg-white/10 text-gold-300 ring-1 ring-inset ring-white/15 backdrop-blur'
};
const SIZES: Record<BadgeSize, {
  box: string;
  icon: number;
}> = {
  sm: {
    box: 'h-9 w-9',
    icon: 16
  },
  md: {
    box: 'h-12 w-12',
    icon: 20
  },
  lg: {
    box: 'h-16 w-16',
    icon: 26
  }
};
interface IconBadgeProps {
  icon: typeof BoxIcon;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
}

/** Circular icon container matching the brand's slide iconography. */
export function IconBadge({
  icon: Icon,
  variant = 'navy',
  size = 'md',
  className = ''
}: IconBadgeProps) {
  const {
    box,
    icon
  } = SIZES[size];
  return <span className={`inline-flex shrink-0 items-center justify-center rounded-full transition-transform duration-300 ease-brand ${box} ${VARIANTS[variant]} ${className}`} aria-hidden="true">
      <Icon size={icon} strokeWidth={1.9} />
    </span>;
}