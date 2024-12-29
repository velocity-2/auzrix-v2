import { useState, useEffect } from 'react';

export const useExitIntent = (delay: number = 1000): boolean => {
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasTriggered) {
        timeout = setTimeout(() => {
          setShowExitIntent(true);
          setHasTriggered(true);
        }, delay);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (timeout) clearTimeout(timeout);
    };
  }, [delay, hasTriggered]);

  return showExitIntent;
};