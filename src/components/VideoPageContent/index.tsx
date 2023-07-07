import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import VideoPlayer from '../VideoPlayer';
import videos_data from '@/utils/videos_data.json';
import { shuffleArray } from '@/helpers/functions';
import VideoCard from '../VideoCard';

interface props {
  menuOpen: boolean;
}
const VideoPageContent = ({ menuOpen }: props) => {
  const [videos, setVideos] = useState<Video[]>([]);
  useEffect(() => {
    setVideos(shuffleArray(JSON.parse(JSON.stringify(videos_data)), 12));
  }, []);
  return (
    <>
      <div
        className={clsx(
          'absolute flex flex-wrap items-start justify-center gap-10 pr-4 duration-200 xsm:p-5',
          menuOpen && `left-32 xsm:left-40`,
          !menuOpen && `left-12 xsm:left-16`
        )}>
        <VideoPlayer />
        <div className="flex h-[50rem] w-96 flex-col items-center gap-5">
          {videos.map((video: Video) => (
            <VideoCard key={video.videoId} video={video} />
          ))}
        </div>
      </div>
    </>
  );
};

export default VideoPageContent;
