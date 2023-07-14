import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import { TfiClose } from 'react-icons/tfi';

const ToastNote = () => {
  const [close, setClose] = React.useState(false);
  return (
    <>
      <div
        className={clsx(
          'fixed bottom-10 left-[10%] right-1/4 top-28 z-50 h-auto w-4/5 overflow-y-auto rounded-md border border-customGray bg-lightOrangeBG pb-9 pt-8 lg:left-1/4 lg:top-32 lg:w-1/2 2xl:bottom-auto',
          close && 'hidden'
        )}>
        <div className="mx-6 flex items-center justify-between text-customGray">
          <h3 className="text-3xl font-semibold">Note</h3>
          <div onClick={() => setClose(true)}>
            <TfiClose className="h-6 w-6 cursor-pointer" />
          </div>
        </div>
        <div className="mt-3 px-8 text-customGray">
          <h4 className="mt-5 text-base font-semibold text-accent md:text-lg">
            What is this website?
          </h4>
          <p className="mt-5 text-sm md:text-base">
            This is an experimental website created as a video-watching platform
            with the intention of improving my frontend skills.
          </p>
          <p className="mt-5 text-sm md:text-base">
            Certain sections of the website fetch YouTube videos dynamically
            through the YouTube API, while others utilize static videos stored
            in a JSON file within the project directory. This approach is chosen
            due to the limited free usage of the YouTube API, as I do not wish
            to incur additional costs for this experimental website.
          </p>
          <h4 className="mb-2 mt-5 text-base font-semibold text-accent md:text-lg">
            Current Features:
          </h4>
          <ul className="list-inside list-disc text-sm md:text-base">
            <li>Homepage: Displays static videos</li>
            <li>Video Page: Allows users to watch selected videos</li>
            <li>
              Search Functionality: Users can search for videos. The results are
              brought from the YouTube API, and each search fetches only the
              first 8 videos, thus limiting the usage of the API
            </li>
          </ul>
          <h4 className="mb-2 mt-5 text-base font-semibold text-accent md:text-lg">
            Features not implemented yet:
          </h4>
          <ul className="list-inside list-disc text-sm md:text-base">
            <li>My Profile Page</li>
            <li>Like Feature and Liked Videos Page</li>
            <li>Subscribe to Channel Feature and Subscriptions Page</li>
          </ul>
          <p className="mt-5 text-sm md:text-base">
            I have chosen not to develop these features as they would primarily
            require backend development, and the focus of this website's
            development, for now, is to enhance my frontend skills.
          </p>
          <p className="mt-5">
            You can access the files at{' '}
            <a
              href="https://github.com/thomasalbuquerque/pipe-tube"
              target="_blank"
              className="font-medium text-accent">
              https://github.com/thomasalbuquerque/pipe-tube
            </a>
          </p>
          <p className="mt-5 text-sm md:text-base">
            This information is also available on the{' '}
            <Link href={'/help'}>
              <span className="font-medium text-accent">Help Page</span>.
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default ToastNote;
