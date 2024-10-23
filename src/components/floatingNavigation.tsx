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
    console.log(window.scrollY);
  };
  const handleCircleClick = () => {
    console.log(123);

    // setShowContacts(true);
    setIsShowing((p) => !p);
  };
  return (
    <div className='arrow fixed bottom-20 right-10 cursor-pointer flex flex-col gap-5'>
      {showNav && (
        <>
          <Image
            src='arrow.svg'
            alt='logo'
            width={30}
            height={30}
            onClick={handleArrowClick}
          />
          <div className='flex flex-col gap-5 imageContainer h-max'>
            <Image
              src='phone.svg'
              alt='phone'
              width={30}
              height={30}
              className={`myImage ${isShowing ? 'isShowing' : ''}`}
            />
            <Image
              src='email.svg'
              alt='email'
              width={30}
              height={30}
              className={`myImage ${isShowing ? 'isShowing' : ''}`}
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
