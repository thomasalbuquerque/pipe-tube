import Link from 'next/link';
import React from 'react';
const Header = () => {
  return (
    <>
      <div
        //"great learning in this section, when I don't define the height, when the screen is horizontally reduced, the bottom component with a fixed margin top becomes very spaced out"
        className={`fixed z-50 flex h-20 w-full items-center justify-between overflow-hidden bg-white py-1 shadow-md`}>
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
          <form action="/send-data-here" method="post" className="w-full">
            <input
              className="h-full w-full text-customGray focus:outline-none"
              type="text"
              placeholder="Search"
            />
          </form>
          <img
            className="h-3 w-3 xsm:h-4 xsm:w-4 md:mx-1"
            src="/magnifier-glass.png"
            alt=""
          />
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
