import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import CardVideo from '../CardVideo';
import { getYoutubeVideos } from '@/helpers/youtubeData/getYoutubeVideos';
import { useSearchParams } from 'next/navigation';
import Spinner from '../Spinner';
import { getYoutubeVideos_Simulated } from '@/helpers/youtubeData/getYoutubeVideos_Simulated';

interface props {
  menuOpen: boolean;
}

const SearchContent = ({ menuOpen }: props) => {
  const [videos, setVideos] = useState<Video[]>();
  const searchParams = useSearchParams();

  async function fetchVideos() {
    const keyword = searchParams.get('keyword');
    // const videosRes = await getYoutubeVideos(keyword, 12);
    const videosRes = await getYoutubeVideos_Simulated(keyword, 12);
    setVideos(videosRes);
  }

  useEffect(() => {
    fetchVideos();
  }, [searchParams]);

  return (
    <>
      <div
        className={clsx(
          'absolute flex flex-wrap items-center justify-center gap-5 pr-4 pt-3 duration-200 xsm:p-5',
          menuOpen && `left-32 xsm:left-44`,
          !menuOpen && `left-12 xsm:left-16`
        )}>
        {videos ? (
          videos.map((video: Video) => (
            <CardVideo key={video.videoId} video={video} />
          ))
        ) : (
          <div>
            <Spinner />
          </div>
        )}
      </div>
    </>
  );
};

export default SearchContent;
