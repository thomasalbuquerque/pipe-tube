import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { HiOutlineHome } from 'react-icons/hi';
import { PiUsers } from 'react-icons/pi';
import { PiUserList } from 'react-icons/pi';
import { TbHelp } from 'react-icons/tb';
import { AiOutlineLike } from 'react-icons/ai';
import { MenuWidth } from '@/helpers/MenuWidth';
import clsx from 'clsx';

interface props {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar = ({ menuOpen, setMenuOpen }: props) => {
  const menuItems = [
    { title: 'Home', icon: <HiOutlineHome size={23} /> },
    { title: 'Subscriptions', icon: <PiUserList size={23} /> },
    { title: 'Liked Videos', icon: <AiOutlineLike size={23} /> },
    { title: 'Creators', icon: <PiUsers size={23} /> },
    { title: 'Help', icon: <TbHelp size={23} /> },
  ];
  return (
    <>
      <div
        className={clsx(
          'fixed h-screen pl-3 pt-3 duration-200 xsm:p-5 ',
          menuOpen && 'w-' + MenuWidth.menuOpen,
          !menuOpen && 'w-' + MenuWidth.menuClosed
        )}>
        <RxHamburgerMenu
          className="cursor-pointer text-accent"
          size={23}
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="mt-6 flex h-8 items-center text-gray xsm:mt-8">
              <span className="mr-2 text-2xl xsm:mr-4">{item.icon}</span>
              <span
                className={clsx(
                  'whitespace-nowrap font-sans text-sm ',
                  !menuOpen && 'invisible',
                  menuOpen && ''
                )}>
                {item.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
