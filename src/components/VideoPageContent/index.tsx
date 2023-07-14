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
}
const VideoPageContent = ({ menuOpen, videoId }: props) => {
  const [allVideos, setVideos] = useState<Video[]>([]);
  const [recommendedVideos, setRecommendedVideos] = useState<Video[]>([]);
  const [currentVideo, setcurrentVideo] = useState<Video>();

  useEffect(() => {
    setVideos(shuffleArray(JSON.parse(JSON.stringify(videos_data)), 50));
  }, []);

  useEffect(() => {
    if (!allVideos) return;
    setcurrentVideo(
      allVideos.find((video: Video) => video.videoId === videoId)
    );
  }, [allVideos]);

  useEffect(() => {
    if (!currentVideo) return;
    setRecommendedVideos(allVideos.slice(0, 12));
  }, [currentVideo]);

  return (
    <>
      <div
        className={clsx(
          'absolute left-12 z-0 flex flex-wrap items-start justify-between gap-4 pr-4 duration-200 xsm:left-16 xsm:p-5'
        )}>
        <div className="flex  w-full flex-col  items-start xl:w-2/3 2xl:w-3/4">
          <VideoPlayer videoId={videoId} />
          {currentVideo ? (
            <div>
              <h1 className="mt-4 text-xl">{currentVideo.videoTitle}</h1>
              <div className="mt-3 flex items-center gap-5">
                <div className="flex items-center gap-2">
                  <img src="/channel-profile-pic.png" alt="" />
                  <div className="font-medium">{currentVideo.channelName}</div>
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

              <div className="mt-5 h-fit rounded-md bg-lightOrange">
                <div className="m-3 mb-4 flex items-center justify-between">
                  <div className="text-sm font-medium">Description</div>
                  <div className="text-sm font-medium">
                    {formatDate(currentVideo.uploadDate)} |{' '}
                    {formatViewCount(currentVideo.viewCount)}
                    {'  '}
                    views
                  </div>
                </div>
                <div className="m-3 text-sm font-normal">
                  {currentVideo.description.split('\n').map((line, index) => (
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
