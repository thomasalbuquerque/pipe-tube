import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import VideoPlayer from '../VideoPlayer';
import videos_data from '@/utils/videos_data.json';
import { formatDate, formatViewCount, shuffleArray } from '@/helpers/functions';
import CardVideo from '../CardVideo';
import { AiFillLike } from 'react-icons/ai';
import Spinner from '../Spinner';
import { getYoutubeVideos_Simulated } from '@/helpers/youtubeData/getYoutubeVideos_Simulated';
import { getYoutubeVideos } from '@/helpers/youtubeData/getYoutubeVideos';

interface props {
  menuOpen: boolean;
  videoId: string;
  videoObj: Video;
}
const VideoPageContent = ({ menuOpen, videoId, videoObj }: props) => {
  const [recommendedVideos, setRecommendedVideos] = useState<Video[]>([]);

  async function fetchVideos() {
    const videos = await getYoutubeVideos('trending', 12, 'US');
    // const videos = await getYoutubeVideos_Simulated('', 12, '');
    setRecommendedVideos(videos);
  }

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <>
      <div
        className={clsx(
          'flex w-full flex-col items-center justify-center gap-7 duration-200 lg:flex-row lg:items-start '
        )}>
        <div className="flex w-full flex-col items-start xl:w-2/3 2xl:w-3/4">
          <VideoPlayer videoId={videoId} />
          {videoObj ? (
            <div className="w-full">
              <h1 className="mt-4 text-xl">{videoObj.videoTitle}</h1>
              <div className="mt-3 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <img src="/channel-profile-pic.png" alt="" />
                  <div className="font-medium">{videoObj.channelName}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="h-8 w-20 rounded-md border border-customGray bg-accent text-xs font-medium text-veryLightOrange xsm:w-24 xsm:px-2 xsm:text-sm">
                    Subscribe
                  </button>
                  <button className="flex h-8 w-20 items-center justify-center gap-1 rounded-md border border-customGray bg-accent text-xs font-medium text-veryLightOrange xsm:mr-2 xsm:w-24 xsm:px-2 xsm:text-sm">
                    <span>Like</span>
                    <span>
                      <AiFillLike />{' '}
                    </span>
                  </button>
                </div>
              </div>

              <div className="mt-5 h-fit w-full rounded-md bg-lightOrange xsm:w-full">
                <div className="mx-3 mb-4 mt-2 flex flex-col-reverse items-start justify-between xsm:flex-row xsm:items-center">
                  <div className="pt-2 text-sm font-medium xsm:mt-0">
                    Description
                  </div>
                  <div className="pt-2 text-sm font-medium xsm:mt-0">
                    {formatDate(videoObj.uploadDate)} |{' '}
                    {formatViewCount(videoObj.viewCount)}
                    {'  '}
                    views
                  </div>
                </div>
                <div className="m-3 break-words text-sm font-normal ">
                  {videoObj.description.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <Spinner />
          )}
          {/*  */}
        </div>
        <div className="w-[17rem ] mr-4 flex h-[50rem] flex-col gap-5">
          <h3 className="text-2xl font-semibold text-customGray">
            Recommended Videos
          </h3>
          {recommendedVideos.map((video: Video) => (
            <CardVideo key={video.videoId} video={video} />
          ))}
        </div>
      </div>
    </>
  );
};

export default VideoPageContent;
