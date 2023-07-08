import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import VideoPlayer from '../VideoPlayer';
import videos_data from '@/utils/videos_data.json';
import { shuffleArray } from '@/helpers/functions';
import CardVideo from '../CardVideo';
interface props {
  menuOpen: boolean;
  videoId: string;
}
const VideoPageContent = ({ menuOpen, videoId }: props) => {
  const [videos, setVideos] = useState<Video[]>(
    shuffleArray(JSON.parse(JSON.stringify(videos_data)), 12)
  );
  const [currentVideo, setcurrentVideo] = useState<Video>();
  useEffect(() => {
    setcurrentVideo(videos.find((video: Video) => video.videoId === videoId));
  }, [videos]);
  return (
    <>
      <div
        className={clsx(
          'absolute flex flex-wrap items-start justify-center gap-10 pr-4 duration-200 xsm:p-5',
          menuOpen && `left-32 xsm:left-40`,
          !menuOpen && `left-12 xsm:left-16`
        )}>
        <div className="flex flex-col ">
          <VideoPlayer videoId={videoId} />
          <div>{currentVideo ? currentVideo!.videoTitle : ''}</div>
        </div>

        <div className="flex h-[50rem] w-96 flex-col items-center gap-5">
          {videos.map((video: Video) => (
            <CardVideo key={video.videoId} video={video} />
          ))}
        </div>
      </div>
    </>
  );
};

export default VideoPageContent;
