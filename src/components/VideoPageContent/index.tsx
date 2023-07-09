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

  if (!currentVideo) {
    return <Spinner />;
  }
  return (
    <>
      <div
        className={clsx(
          'absolute flex flex-wrap items-start gap-10 pr-4 duration-200 xsm:p-5',
          menuOpen && `left-32 xsm:left-40`,
          !menuOpen && `left-12 xsm:left-16`
        )}>
        <div>
          <div className="flex w-[80rem] flex-col items-start">
            <VideoPlayer videoId={videoId} />
            <h1 className="mt-4 text-xl">{currentVideo.videoTitle}</h1>
            <div className="mt-3 flex items-center gap-5">
              <div className="flex items-center gap-2">
                <img src="/channel-profile-pic.png" alt="" />
                <div className="font-medium">{currentVideo.channelName}</div>
              </div>
              <button className="h-8 w-24 rounded-md border border-customGray bg-accent font-medium text-background">
                Subscribe
              </button>
              <button className="flex h-8 w-24 items-center justify-center gap-1 rounded-md border border-customGray bg-accent font-medium text-background">
                <span>Like</span>
                <span>
                  <AiOutlineLike />{' '}
                </span>
              </button>
            </div>

            <div className="mt-3 h-fit w-[80rem] rounded-md bg-lightOrange">
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

            {/*  */}
          </div>
        </div>
        <div className="flex h-[50rem] w-96 flex-col items-center gap-5">
          {recommendedVideos.map((video: Video) => (
            <CardVideo key={video.videoId} video={video} />
          ))}
        </div>
      </div>
    </>
  );
};

export default VideoPageContent;
