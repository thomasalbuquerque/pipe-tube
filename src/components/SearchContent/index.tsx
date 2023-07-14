import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { getYoutubeVideos } from '@/helpers/youtubeData/getYoutubeVideos';
import { useSearchParams } from 'next/navigation';
import Spinner from '../Spinner';
import { getYoutubeVideos_Simulated } from '@/helpers/youtubeData/getYoutubeVideos_Simulated';
import CardVideoSearch from '../CardVideoSearch';

interface props {
  menuOpen: boolean;
}

const SearchContent = ({ menuOpen }: props) => {
  const [videos, setVideos] = useState<Video[]>();
  const searchParams = useSearchParams();

  async function fetchVideos() {
    const keyword = searchParams.get('keyword');
    const videosRes = await getYoutubeVideos(keyword, 8);
    // const videosRes = await getYoutubeVideos_Simulated(keyword, 8);
    setVideos(videosRes);
  }

  useEffect(() => {
    fetchVideos();
  }, [searchParams]);

  return (
    <>
      <div className="flex items-center justify-center">
        <div
          className={clsx(
            'ml-10 flex w-3/4 flex-col gap-5 pr-4 pt-3 duration-200 xsm:p-5 lg:ml-96'
          )}>
          <h1 className="text-2xl font-semibold text-customGray">
            Search Results
          </h1>
          {videos ? (
            videos.map((video: Video) => (
              <CardVideoSearch key={video.videoId} video={video} />
            ))
          ) : (
            <div>
              <Spinner />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchContent;
