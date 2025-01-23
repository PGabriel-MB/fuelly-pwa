import React,  { useState, useEffect } from 'react';
import Image from 'next/image';

const SplashScreen: React.FC = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeOut(true);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  const style = `
    fixed top-0 left-0
    w-screen h-screen
    bg-primary text-white text-xl
    flex flex-col items-center justify-center z-50
    transition-opacity duration-700 ${ fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}
  `;

  return (
    <div className={style}>
      <Image
        src="/brand/fuelly-logo-home.svg"
        alt="Logomarca da Fuelly"
        width={251}
        height={259.34}
      />
    </div>
  );
};      

export default SplashScreen;
