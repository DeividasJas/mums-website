import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '../types/types';

export default function Header() {
  return (
    <header className='bg-slate-600 flex justify-end items-center w-full '>
      <label className='hamburger-menu'>
        <input type='checkbox' />
      </label>
      <nav className='sidebar'>
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
