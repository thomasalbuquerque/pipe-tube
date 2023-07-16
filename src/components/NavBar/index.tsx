import React, { useEffect, useRef } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { HiOutlineHome } from 'react-icons/hi';
import { PiUsers } from 'react-icons/pi';
import { PiUserList } from 'react-icons/pi';
import { TbHelp } from 'react-icons/tb';
import { AiOutlineLike } from 'react-icons/ai';
import clsx from 'clsx';
import Link from 'next/link';
import ListItem from './ListItem';

interface props {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const menuItems = [
  { title: 'Home', icon: <HiOutlineHome />, href: '/', enable: true },
  {
    title: 'Subscriptions',
    icon: <PiUserList />,
    href: '/subscriptions',
    enable: false,
  },
  {
    title: 'Liked Videos',
    icon: <AiOutlineLike />,
    href: '/liked',
    enable: false,
  },
  { title: 'Help', icon: <TbHelp />, href: '/help', enable: true },
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
          'h-screen pl-3 pt-3 duration-200 xsm:p-5',
          menuOpen && 'w-36 border-r border-lightGray bg-lightOrange xsm:w-44',
          !menuOpen && 'w-12 bg-veryLightOrange xsm:w-16'
        )}
        ref={menuRef}>
        <RxHamburgerMenu
          className="cursor-pointer text-lg text-accent xsm:text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul>
          {menuItems.map((item, index) =>
            item.enable ? (
              <Link href={item.href} key={index}>
                <ListItem item={item} menuOpen={menuOpen} />
              </Link>
            ) : (
              <div key={index}>
                <ListItem item={item} menuOpen={menuOpen} />
              </div>
            )
          )}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
