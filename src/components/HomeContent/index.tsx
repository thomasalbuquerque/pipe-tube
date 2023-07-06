import React, { use } from 'react';
import { MenuWidth } from '@/utils/MenuWidth';
import clsx from 'clsx';
import VideoCard from '../VideoCard';
import { getYoutubeData } from '@/helpers/youtubeData/getVideosIds';
interface props {
  menuOpen: boolean;
}
const HomeContent = ({ menuOpen }: props) => {
  return (
    <>
      <div
        className={clsx(
          'absolute flex flex-wrap items-center justify-center gap-5 pt-3 duration-200 xsm:p-5',
          menuOpen && `left-32 xsm:left-44`,
          !menuOpen && `left-12 xsm:left-16`
        )}>
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </>
  );
};

export default HomeContent;
