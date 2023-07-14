import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import VideoPlayer from '../VideoPlayer';
import videos_data from '@/utils/videos_data.json';
import { formatDate, formatViewCount, shuffleArray } from '@/helpers/functions';
import CardVideo from '../CardVideo';
import { AiOutlineLike } from 'react-icons/ai';
import Spinner from '../Spinner';

interface props {
  menuOpen: boolean;
  videoId: string;
  videoObj: Video;
}
const VideoPageContent = ({ menuOpen, videoId, videoObj }: props) => {
  const [recommendedVideos, setRecommendedVideos] = useState<Video[]>([]);

  useEffect(() => {
    setRecommendedVideos(
      shuffleArray(JSON.parse(JSON.stringify(videos_data)), 12)
    );
  }, []);

  return (
    <>
      <div
        className={clsx(
          'absolute left-12 z-0 flex w-[96%] flex-wrap items-start justify-between gap-4 duration-200 xsm:left-16 xsm:p-5'
        )}>
        <div className="flex w-full flex-col items-start xl:w-2/3 2xl:w-3/4">
          <VideoPlayer videoId={videoId} />
          {videoObj ? (
            <div className="w-full">
              <h1 className="mt-4 text-xl">{videoObj.videoTitle}</h1>
              <div className="mt-3 flex items-center gap-5">
                <div className="flex items-center gap-2">
                  <img src="/channel-profile-pic.png" alt="" />
                  <div className="font-medium">{videoObj.channelName}</div>
                </div>
                <button className="h-8 w-24 rounded-md border border-customGray bg-accent font-medium text-lightOrangeBG">
                  Subscribe
                </button>
                <button className="flex h-8 w-24 items-center justify-center gap-1 rounded-md border border-customGray bg-accent font-medium text-lightOrangeBG">
                  <span>Like</span>
                  <span>
                    <AiOutlineLike />{' '}
                  </span>
                </button>
              </div>

              <div className="mt-5 h-fit w-80 rounded-md bg-lightOrange xsm:w-full">
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
        <div className="mr-4 flex h-[50rem] w-96 flex-col gap-5">
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
