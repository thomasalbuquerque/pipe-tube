'use client';
import React from 'react';
import Header from '@/components/Header';
import HomeContent from '@/components/HomeContent';
import NavBar from '@/components/NavBar';
import ToastNote from '@/components/ToastNote';

export default function Home() {
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
          <div className="relative">
            <HomeContent menuOpen={menuOpen} />
          </div>
        </div>
        <ToastNote />
      </main>
    </>
  );
}
