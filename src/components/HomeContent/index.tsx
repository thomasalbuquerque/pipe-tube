import React, { use } from 'react';
import { MenuWidth } from '@/utils/MenuWidth';
import clsx from 'clsx';
import VideoCard from '../VideoCard';
import { getYoutubeData } from '@/helpers/youtubeData/getVideosIds';
import videos_data from '@/utils/videos_data.json';
interface props {
  menuOpen: boolean;
}

const HomeContent = ({ menuOpen }: props) => {
  const videos = JSON.parse(JSON.stringify(videos_data));
  return (
    <>
      <div
        className={clsx(
          'absolute flex flex-wrap items-center justify-center gap-5 pr-4 pt-3 duration-200 xsm:p-5',
          menuOpen && `left-32 xsm:left-44`,
          !menuOpen && `left-12 xsm:left-16`
        )}>
        {videos.map((video: any) => (
          <VideoCard
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
