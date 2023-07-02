import React from 'react';

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between py-1 shadow-md w-screen">
        <div className="flex items-center">
          <img
            className="w-5 h-4 m-4 md:m-6"
            src="/hamburger-icon-2.png"
            alt="hamburger menu icon"
            id="openNav"></img>
          <img
            className="w-24 md:w-48" // Adicione uma classe de responsividade para o tamanho do logo
            src="/pipetube-logo-v4.png"
            alt="website logo pipe tube"
            id="logo"></img>
        </div>
        <div
          id="searchBar"
          className="flex items-center md:justify-between border border-lightGray border-solid bg-white rounded-2xl py-1 px-4 min-w-0 h-10">
          <form action="/send-data-here" method="post" className=" min-w-0">
            <input
              className="focus:outline-none text-grayray max-w-full"
              type="text"
              placeholder="Search"
            />
          </form>
          <img
            className="w-4 h-4 md:mx-4"
            src="/magnifier-glass-3.png"
            alt=""
          />
        </div>
        <div
          id="rightButtons"
          className="flex items-center justify-between mr-6">
          <img className="w-5 h-5 ml-4" src="/upload-icon-2.png" alt="" />
          <img className="w-10 h-10 ml-4" src="/profile-pic.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
