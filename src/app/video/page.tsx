'use client';
import React from 'react';
import Header from '@/components/Header';
import HomeContent from '@/components/HomeContent';
import NavBar from '@/components/NavBar';
import VideoPlayer from '@/components/VideoPlayer';
import VideoPageContent from '@/components/VideoPageContent';

export default function Page() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
      <main>
        <div className="h-20">
          <Header />
        </div>
        <div className="">
          <div className="">
            <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          </div>
          <div className="relative">
            <VideoPageContent menuOpen={menuOpen} />
          </div>
        </div>
      </main>
    </>
  );
}
