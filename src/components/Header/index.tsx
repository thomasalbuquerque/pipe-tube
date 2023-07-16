import Link from 'next/link';
import React, { useRef, useState } from 'react';
const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const link = inputRef.current?.nextSibling as HTMLAnchorElement;
      link.click();
    }
  };

  return (
    <>
      <div
        //"great learning in this section, when I don't define the height, when the screen is horizontally reduced, the bottom component with a fixed margin top becomes very spaced out"
        className="fixed z-20 flex h-20 w-full items-center justify-between overflow-hidden bg-white py-1 shadow-md">
        <div className="m-2 flex flex-col-reverse gap-2 xsm:flex-row xsm:items-center sm:m-4 sm:flex-nowrap sm:gap-4">
          <Link href={`/`}>
            <img
              className="w-16 px-1 xsm:px-2 sm:w-24"
              src="/pipetube-logo.png"
              alt="website logo pipe tube"
              id="logo"></img>
          </Link>
        </div>
        <div
          id="searchBar"
          className="flex h-7 w-2/4 items-center rounded-lg border border-solid border-lightGray bg-white px-4 py-1 xsm:h-9 md:justify-between md:rounded-xl xl:w-1/4">
          <div className="flex w-full items-center justify-center">
            <input
              className="h-full w-full text-customGray caret-accent focus:outline-none"
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              ref={inputRef}
              onKeyDown={handleKeyDown}
            />
            <Link href={`/search?keyword=${searchValue} `} shallow={true}>
              <img
                className="h-3 w-3 xsm:h-4 xsm:w-4 md:mx-1"
                src="/magnifier-glass.png"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div
          id="rightButtons"
          className="mr-6 flex items-center justify-between">
          <img
            className="ml-4 h-3 w-3 xsm:h-5 xsm:w-5"
            src="/upload-icon.png"
            alt=""
          />
          <img
            className="ml-4 h-7 w-7 xsm:h-10 xsm:w-10"
            src="/profile-pic.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Header;
