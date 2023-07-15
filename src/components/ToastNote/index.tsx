import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import { TfiClose } from 'react-icons/tfi';
import NoteMessage from '../NoteMessage';

const ToastNote = () => {
  const [close, setClose] = React.useState(false);
  return (
    <>
      <div
        className={clsx(
          'bg-veryLightOrange fixed bottom-10 left-[10%] right-1/4 top-28 z-50 h-auto w-4/5 overflow-y-auto rounded-md border border-customGray pb-9 pt-8 lg:left-1/4 lg:top-32 lg:w-1/2 2xl:bottom-auto',
          close && 'hidden'
        )}>
        <div className="mx-6 flex items-center justify-between text-customGray">
          <h3 className="text-3xl font-semibold">Note</h3>
          <div onClick={() => setClose(true)}>
            <TfiClose className="h-6 w-6 cursor-pointer" />
          </div>
        </div>
        <NoteMessage />
      </div>
    </>
  );
};

export default ToastNote;
