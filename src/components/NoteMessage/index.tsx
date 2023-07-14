import Link from 'next/link';
import React from 'react';

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
        <p className="mt-5 text-sm md:text-base">
          Certain sections of the website fetch YouTube videos dynamically
          through the YouTube API, while others utilize static videos stored in
          a JSON file within the project directory. This approach is chosen due
          to the limited free usage of the YouTube API, as I do not wish to
          incur additional costs for this experimental website.
        </p>
        <h4 className="mb-2 mt-5 text-base font-semibold text-accent md:text-lg">
          Current Features:
        </h4>
        <ul className="list-inside list-disc text-sm md:text-base">
          <li>Homepage: Displays static videos</li>
          <li>Video Page: Allows users to watch selected videos</li>
          <li>
            Search Functionality: Users can search for videos. The results are
            brought from the YouTube API, and each search fetches only the first
            8 videos, thus limiting the usage of the API
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
    </>
  );
};

export default NoteMessage;
