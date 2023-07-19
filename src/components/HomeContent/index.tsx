import React, { use, useEffect, useState } from 'react';
import clsx from 'clsx';
import CardVideo from '../CardVideo';
import { getYoutubeVideos_Simulated } from '@/helpers/youtubeData/getYoutubeVideos_Simulated';
import Spinner from '../Spinner';
import { getYoutubeVideos } from '@/helpers/youtubeData/getYoutubeVideos';
interface props {
  menuOpen: boolean;
}

const HomeContent = ({ menuOpen }: props) => {
  const [videos, setVideos] = useState<Video[]>([]);

  async function fetchVideos() {
    const videosRes = await getYoutubeVideos('trending', 28, 'US');
    // const videosRes = await getYoutubeVideos_Simulated('', 28, 'US');
    setVideos(videosRes);
  }

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <>
      <div
        className={clsx(
          'flex flex-col flex-wrap items-center justify-center gap-5 pt-3 duration-200 xsm:p-5 xsm:pr-4 sm:flex-row'
        )}>
        <h1 className="pt-2 text-2xl font-semibold text-customGray sm:hidden">
          Home
        </h1>
        {videos ? (
          videos.map((video: Video) => (
            <CardVideo key={video.videoId} video={video} />
          ))
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
};

export default HomeContent;
