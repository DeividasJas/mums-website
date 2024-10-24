'use client';
import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '../types/types';
import { useEffect, useRef, useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const checkboxRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !checkboxRef.current.contains(event.target)
      ) {
        setIsOpen(false);
        if (checkboxRef.current) {
          checkboxRef.current.checked = false;
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  const handleCheckboxClick = (e) => {
    // Prevent the default checkbox behavior
    e.preventDefault();

    // Toggle the state
    setIsOpen(!isOpen);

    // Manually set checkbox state
    if (checkboxRef.current) {
      checkboxRef.current.checked = !isOpen;
    }
  };

  return (
    <header className='bg-slate-600 flex justify-end items-center w-full'>
      <label
        className={`hamburger-menu ${isOpen ? 'hamburger-menu-active' : ''}`}
        onClick={handleCheckboxClick}
      >
        <input type='checkbox' ref={checkboxRef} checked={isOpen} readOnly />
      </label>
      <nav
        className={`sidebar ${isOpen ? 'sidebar-visible' : ''}`}
        ref={sidebarRef}
      >
        <ul className='list'>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Image
        src='logo.svg'
        alt='logo'
        width={40}
        height={40}
        className='logo'
      />
    </header>
  );
}
