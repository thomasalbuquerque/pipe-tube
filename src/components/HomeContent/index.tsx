import React, { use, useEffect, useState } from 'react';
import clsx from 'clsx';
import CardVideo from '../CardVideo';
import { getYoutubeVideos_Simulated } from '@/helpers/youtubeData/getYoutubeVideos_Simulated';
interface props {
  menuOpen: boolean;
}

const HomeContent = ({ menuOpen }: props) => {
  const [videos, setVideos] = useState<Video[]>([]);

  async function fetchVideos() {
    // const videosRes = await getYoutubeVideos('', 28);
    const videosRes = await getYoutubeVideos_Simulated('', 28);
    setVideos(videosRes);
  }

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <>
      <div
        className={clsx(
          'absolute flex flex-wrap items-center justify-center gap-5 pr-4 pt-3 duration-200 xsm:p-5'
          // `left-12 xsm:left-16`
        )}>
        {videos.map((video: Video) => (
          <CardVideo key={video.videoId} video={video} />
        ))}
      </div>
    </>
  );
};

export default HomeContent;
