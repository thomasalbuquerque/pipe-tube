import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { HiOutlineHome } from 'react-icons/hi';
import { PiUsers } from 'react-icons/pi';
import { BsPeople } from 'react-icons/bs';
import { PiUserList } from 'react-icons/pi';
import { SlLike } from 'react-icons/sl';
import { TbHelp } from 'react-icons/tb';
import { AiOutlineLike } from 'react-icons/ai';

const NavBar = () => {
  const [open, setOpen] = React.useState(false);

  const menuItems = [
    { title: 'Home', icon: <HiOutlineHome size={20} /> },
    { title: 'Subscriptions', icon: <PiUserList size={20} /> },
    { title: 'Liked Videos', icon: <AiOutlineLike size={20} /> },
    { title: 'Creators', icon: <PiUsers size={20} /> },
    { title: 'Help', icon: <TbHelp size={20} /> },
  ];
  return (
    <>
      <div
        className={`fixed h-screen p-5 duration-200 ${open ? 'w-72' : 'w-16'}`}>
        <RxHamburgerMenu
          className="cursor-pointer text-gray"
          size={24}
          onClick={() => setOpen(!open)}
        />
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className="mt-8 flex h-8 items-center text-gray">
              <span className="mr-4 text-2xl">{item.icon}</span>
              <span
                className={`whitespace-nowrap font-sans text-base ${
                  !open ? 'invisible' : ''
                }`}>
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
