import React, { useState } from 'react';

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  /** Aspect-ratio / sizing classes applied to the wrapper. */
  wrapperClassName?: string;
  priority?: boolean;
}

/**
 * Lazy-loaded image with a skeleton shimmer while decoding,
 * preventing layout shift on long marketing pages.
 */
export function SmartImage({
  src,
  alt,
  className = '',
  wrapperClassName = '',
  priority = false,
}: SmartImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-navy-100 ${wrapperClassName}`}>
      {!loaded ? <div className="absolute inset-0 animate-pulse bg-navy-100" aria-hidden="true" /> : null}
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-opacity duration-700 ease-brand ${
          loaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
      />
    </div>
  );
}
