import Link from 'next/link';
import React from 'react';
import { TbHelp } from 'react-icons/tb';

const NoteMessage = () => {
  return (
    <>
      <div className="mt-3 px-8 text-customGray">
        <h4 className="mt-5 text-base font-semibold text-accent md:text-lg">
          What is this website?
        </h4>
        <p className="mt-5 text-sm md:text-base">
          This is an experimental website created as a video-watching platform
          with the intention of improving my frontend skills.
        </p>
        <p className="mt-5 flex flex-wrap whitespace-pre-wrap text-sm md:text-base">
          <span className="font-semibold">You can read this later at </span>
          <Link href={'/help'}>
            <span className="flex items-center font-semibold text-accent">
              <span>Help Page </span> <TbHelp />
            </span>
          </Link>
        </p>
        <h4 className="mb-2 mt-5 text-base font-semibold text-accent md:text-lg">
          Current Features:
        </h4>
        <ul className="list-inside list-disc text-sm md:text-base">
          <li>
            Homepage: Displays trending videos in USA. The videos are chosen
            from keyword search: 'trending' and regionCode: 'US'
          </li>
          <li>Video Page: Allows users to watch selected videos</li>
          <li>
            Recommended Videos: Section on the right side of the video page,
            brings recommended videos from the YouTube API. The fetch brings
            only 12 videos, thus limiting the usage of the API
          </li>
          <li>
            Search Functionality: Users can search for videos. The results are
            brought from the YouTube API, and each search fetches only the first
            8 videos
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
          require backend development, and the focus of this website&apos;s
          development, for now, is to enhance my frontend skills.
        </p>
        <p className="mt-5 text-sm md:text-base">
          You can access the files at{' '}
          <a
            href="https://github.com/thomasalbuquerque/pipe-tube"
            target="_blank"
            className="break-words font-medium text-accent">
            github.com/thomasalbuquerque/pipe-tube
          </a>
        </p>
      </div>
    </>
  );
};

export default NoteMessage;
