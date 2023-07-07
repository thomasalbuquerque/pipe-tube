import React, { use, useEffect, useState } from 'react';
import { MenuWidth } from '@/utils/MenuWidth';
import clsx from 'clsx';
import VideoCard from '../VideoCard';
import { getYoutubeData } from '@/helpers/youtubeData/getVideosIds';
import videos_data from '@/utils/videos_data.json';
interface props {
  menuOpen: boolean;
}

interface Video {
  videoId: string;
  thumbnailUrl: string;
  channelProfilePicUrl: string;
  videoTitle: string;
  channelName: string;
  viewCount: string;
  uploadDate: string;
  videoUrl: string;
}

function shuffleArray(videos: Video[]) {
  const randomElements = videos.sort(() => 0.5 - Math.random()).slice(0, 30);
  return randomElements;
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
          <VideoCard
            key={video.videoId}
            thumbnailUrl={video.thumbnailUrl}
            channelProfilePicUrl={video.channelProfilePicUrl}
            videoTitle={video.videoTitle}
            channelName={video.channelName}
            viewCount={video.viewCount}
            uploadDate={video.uploadDate}
            videoUrl={video.videoUrl}
          />
        ))}
      </div>
    </>
  );
};

export default HomeContent;
