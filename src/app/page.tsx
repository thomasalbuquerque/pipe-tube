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
        <div className="flex justify-between">
          <div className="w-28">
            <NavBar />
          </div>
          <div className="">
            <HomeContent />
          </div>
        </div>
      </main>
    </>
  );
}
