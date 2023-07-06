'use client';
import React from 'react';
import Header from '@/components/Header';
import HomeContent from '@/components/HomeContent';
import NavBar from '@/components/NavBar';

export default function Home() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
      <main className="bg-background">
        <div className="h-20">
          <Header />
        </div>
        <div className="">
          <div className="">
            <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          </div>
          <div className="relative">
            <HomeContent />
          </div>
        </div>
      </main>
    </>
  );
}
