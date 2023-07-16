import clsx from 'clsx';
import React from 'react';
interface props {
  item: {
    title: string;
    icon: React.JSX.Element;
    href: string;
    enable: boolean;
  };
  menuOpen: boolean;
}
const ListItem = ({ item, menuOpen }: props) => {
  return (
    <>
      <li className="mt-6 flex h-8 items-center text-customGray xsm:mt-8">
        <span className="mr-2 text-lg xsm:mr-4 xsm:text-2xl">{item.icon}</span>
        <span
          className={clsx(
            'whitespace-nowrap font-sans text-xs xsm:text-sm ',
            !menuOpen && 'invisible',
            menuOpen && ''
          )}>
          {item.title}
        </span>
      </li>
    </>
  );
};

export default ListItem;
