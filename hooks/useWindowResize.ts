import React from 'react';

export const useWindowResize = (callback: (event: Event) => void) => {
  React.useEffect(() => {
    window.addEventListener('resize', callback);
    return () => {
      window.removeEventListener('resize', callback);
    };
  }, [callback]);
};
