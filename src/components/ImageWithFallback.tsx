import { Sprout } from 'lucide-react';
import { useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
}

export function ImageWithFallback({
  src,
  alt,
  className = '',
  fallbackLabel,
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-[#EEF2EC] text-[#1F4E37] p-4 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <Sprout className="w-8 h-8 mb-1.5 opacity-80" aria-hidden="true" />
        {fallbackLabel ? (
          <span className="text-xs font-medium text-[#4A554E]">{fallbackLabel}</span>
        ) : null}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
