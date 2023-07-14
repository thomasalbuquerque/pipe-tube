import React, { useEffect, useRef } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { HiOutlineHome } from 'react-icons/hi';
import { PiUsers } from 'react-icons/pi';
import { PiUserList } from 'react-icons/pi';
import { TbHelp } from 'react-icons/tb';
import { AiOutlineLike } from 'react-icons/ai';
import clsx from 'clsx';
import Link from 'next/link';

interface props {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const menuItems = [
  { title: 'Home', icon: <HiOutlineHome />, href: '/' },
  { title: 'Subscriptions', icon: <PiUserList />, href: '/subscriptions' },
  { title: 'Liked Videos', icon: <AiOutlineLike />, href: '/liked' },
  { title: 'Help', icon: <TbHelp />, href: '/help' },
];

const NavBar = ({ menuOpen, setMenuOpen }: props) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef, setMenuOpen]);

  return (
    <>
      <div
        className={clsx(
          'fixed z-10 h-screen pl-3 pt-3 duration-200 xsm:p-5',
          menuOpen && 'w-36 border-r border-lightGray bg-lightOrange xsm:w-44',
          !menuOpen && 'w-12 xsm:w-16'
        )}
        ref={menuRef}>
        <RxHamburgerMenu
          className="cursor-pointer text-lg text-accent xsm:text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul>
          {menuItems.map((item, index) => (
            <Link href={item.href} key={index}>
              <li className="mt-6 flex h-8 items-center text-customGray xsm:mt-8">
                <span className="mr-2 text-lg xsm:mr-4 xsm:text-2xl">
                  {item.icon}
                </span>
                <span
                  className={clsx(
                    'whitespace-nowrap font-sans text-xs xsm:text-sm ',
                    !menuOpen && 'invisible',
                    menuOpen && ''
                  )}>
                  {item.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
