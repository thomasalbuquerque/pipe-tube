'use client';
import Header from '@/components/Header';
import HomeContent from '@/components/HomeContent';
import NavBar from '@/components/NavBar';

export default function Home() {
  return (
    <>
      <main className="">
        <div className="h-20">
          <Header />
        </div>
        <div className="">
          <div className="">
            <NavBar />
          </div>
          <div className="relative">
            <HomeContent />
          </div>
        </div>
      </main>
    </>
  );
}
