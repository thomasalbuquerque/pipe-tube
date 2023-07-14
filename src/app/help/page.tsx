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
      <main className="bg-lightOrangeBG">
        <div className="h-20">
          <Header />
        </div>
        <div className="">
          <div className="">
            <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          </div>
          <div className="relative w-4/5">
            <div className="absolute left-32 top-12 text-customGray">
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
