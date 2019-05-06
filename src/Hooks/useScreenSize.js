import { useState } from 'react';

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  window.addEventListener('resize', () => {
    setScreenSize(window.innerWidth);
  });

  return screenSize;
};
