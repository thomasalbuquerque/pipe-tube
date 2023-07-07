import React, { use, useEffect, useState } from 'react';
import { MenuWidth } from '@/utils/MenuWidth';
import clsx from 'clsx';
import VideoCard from '../VideoCard';
import { getYoutubeData } from '@/helpers/youtubeData/getVideosIds';
import videos_data from '@/utils/videos_data.json';
import { shuffleArray } from '@/helpers/functions';
interface props {
  menuOpen: boolean;
}

let counter = 0;
if (counter === 0) {
  // getYoutubeData();
  counter++;
}

const HomeContent = ({ menuOpen }: props) => {
  const [videos, setVideos] = useState<Video[]>([]);
  useEffect(() => {
    setVideos(shuffleArray(JSON.parse(JSON.stringify(videos_data))));
  }, []);
  return (
    <>
      <div
        className={clsx(
          'absolute flex flex-wrap items-center justify-center gap-5 pr-4 pt-3 duration-200 xsm:p-5',
          menuOpen && `left-32 xsm:left-44`,
          !menuOpen && `left-12 xsm:left-16`
        )}>
        {videos.map((video: Video) => (
          <VideoCard key={video.videoId} video={video} />
        ))}
      </div>
    </>
  );
};

export default HomeContent;
