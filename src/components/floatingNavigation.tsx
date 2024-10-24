'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
export default function FloatingNavigation() {
  const [showNav, setShowNav] = useState(false);
  const [showContacts, setShowContacts] = useState(false);

  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowNav(true);
        console.log('yes');
      } else {
        setShowNav(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleArrowClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCircleClick = () => {
    setIsShowing((p) => !p);
    document.addEventListener('keypress', () => {
      setIsShowing(false);
    });
    document.addEventListener('scroll', () => {
      setIsShowing(false);
    });
    return () => {
      document.removeEventListener('keypress', () => {
        setIsShowing(false);
      });
    };
  };
  return (
    <div
      className={`fixed bottom-[60px] right-[15px] cursor-pointer flex flex-col justify-center items-center bg-slate-700 bg-opacity-20 backdrop-blur-[3px] rounded-lg 
        ${!showNav && 'hidden'} ${
        isShowing ? 'navigationGrow' : 'navigationShrink'
      }`}
    >
      {showNav && (
        <>
          <Image
            src='arrow.svg'
            alt='logo'
            width={30}
            height={30}
            onClick={handleArrowClick}
            className='mb-3'
          />
          <div className='flex flex-col imageContainer h-max'>
            <Image
              src='phone.svg'
              alt='phone'
              width={30}
              height={30}
              className={`navigationImage ${isShowing && 'isShowing'}`}
            />
            <Image
              src='email.svg'
              alt='email'
              width={30}
              height={30}
              className={`navigationImage ${isShowing && 'isShowing'}`}
            />
            <Image
              src='circle.svg'
              alt='logo'
              width={30}
              height={30}
              onClick={handleCircleClick}
            />
          </div>
        </>
      )}
    </div>
  );
}
