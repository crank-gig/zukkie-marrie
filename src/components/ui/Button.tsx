import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ease-brand disabled:cursor-not-allowed disabled:opacity-60';

const VARIANTS: Record<ButtonVariant, string> = {
  primary: 'bg-gold-500 text-navy-950 hover:bg-gold-400 hover:shadow-glow active:scale-[0.98]',
  secondary:
    'border border-navy-900/15 bg-white text-navy-900 hover:border-navy-900/30 hover:shadow-card active:scale-[0.98]',
  ghost:
    'border border-white/25 bg-white/5 text-white backdrop-blur hover:border-white/50 hover:bg-white/10 active:scale-[0.98]',
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({ variant = 'primary', className = '', children, ...rest }: ButtonProps) {
  return (
    <button className={`${BASE} ${VARIANTS[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}

interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
}

export function LinkButton({ variant = 'primary', className = '', children, ...rest }: LinkButtonProps) {
  return (
    <a className={`${BASE} ${VARIANTS[variant]} ${className}`} {...rest}>
      {children}
    </a>
  );
}
