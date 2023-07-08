'use client';
import React from 'react';
import Header from '@/components/Header';
import HomeContent from '@/components/HomeContent';
import NavBar from '@/components/NavBar';
import VideoPlayer from '@/components/VideoPlayer';
import VideoPageContent from '@/components/VideoPageContent';
import { usePathname } from 'next/navigation';

export default function Page() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const pathname = usePathname();

  const videoId = pathname.split('/').pop()!;
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
            <VideoPageContent menuOpen={menuOpen} videoId={videoId} />
          </div>
        </div>
      </main>
    </>
  );
}
