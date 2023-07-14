'use client';
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HomeContent from '@/components/HomeContent';
import NavBar from '@/components/NavBar';
import ToastNote from '@/components/ToastNote';

export default function Home() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [toastShown, setToastShown] = React.useState(false);
  const toastShownString =
    typeof window !== 'undefined' &&
    window.sessionStorage.getItem('Toast Shown: ');

  useEffect(() => {
    if (toastShownString == 'true') {
      setToastShown(true);
    } else {
      typeof window !== 'undefined' &&
        window.sessionStorage.setItem('Toast Shown: ', 'true');
    }
  }, []);

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
        {!toastShown ? <ToastNote /> : ''}
      </main>
    </>
  );
}
