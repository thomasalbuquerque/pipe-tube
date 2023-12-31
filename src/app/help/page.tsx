'use client';
import React from 'react';
import Header from '@/components/Header';
import HomeContent from '@/components/HomeContent';
import NavBar from '@/components/NavBar';
import ToastNote from '@/components/ToastNote';
import NoteMessage from '@/components/NoteMessage';

const Page = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
      <main className="bg-veryLightOrange">
        <div className="h-20">
          <Header />
        </div>
        <div className="">
          <div className="fixed z-10">
            <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          </div>
          <div className="ml-14 w-4/5 pt-2 xsm:ml-20 xsm:pt-6">
            <div className="text-customGray">
              <h3 className="mx-6 text-3xl font-semibold">Note</h3>
              <NoteMessage />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
