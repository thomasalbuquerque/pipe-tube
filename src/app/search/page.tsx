'use client';
import React from 'react';
import Header from '@/components/Header';
import NavBar from '@/components/NavBar';
import SearchContent from '@/components/SearchContent';

const Page = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
      <main className="bg-lightOrangeBG">
        <div className="h-20">
          <Header />
        </div>
        <div className="">
          <div className="fixed z-10">
            <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          </div>
          <div className="ml-14 pt-2 xsm:ml-20 xsm:pt-6">
            <SearchContent menuOpen={menuOpen} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
