import { useEffect } from 'react';

const useAutoScrollTop = () => {
  useEffect(() => {
    const handleScrollTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const cleanup = () => {
      // Clean up any event listeners or subscriptions here if needed
    };

    // Attach event listener
    window.addEventListener('scroll-to-top', handleScrollTop);

    return () => {
      // Clean up event listener on unmount
      window.removeEventListener('scroll-to-top', handleScrollTop);
    };
  }, []);

  // Return cleanup function if needed, or additional data/functions
  return {};
};

export default useAutoScrollTop;
