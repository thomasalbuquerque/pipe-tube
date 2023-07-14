'use client';
import React, { useState } from 'react';
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
  const [video, setVideo] = useState<Video>(
    sessionStorage.getItem(`VideoId: ${videoId}`)
      ? JSON.parse(sessionStorage.getItem(`VideoId: ${videoId}`)!)
      : null
  );

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
            <VideoPageContent
              menuOpen={menuOpen}
              videoId={videoId}
              videoObj={video}
            />
          </div>
        </div>
      </main>
    </>
  );
}
