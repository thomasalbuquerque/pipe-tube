import { formatDate, trimVideoTitle } from '@/helpers/functions';
import Link from 'next/link';
import React from 'react';
interface props {
  video: Video;
}
const CardVideoSearch = ({ video }: props) => {
  const handleClick = () => {
    sessionStorage.setItem(`VideoId: ${video.videoId}`, JSON.stringify(video));
  };
  return (
    <>
      <Link href={`/video/${video.videoId}`} onClick={handleClick}>
        <div className="flex h-auto w-full flex-col text-customGray lg:flex-row">
          {/* Video Thumbnail */}
          <div className="w-full lg:w-1/3">
            <div className="relative flex w-full overflow-hidden rounded-lg pb-[56.25%]">
              <img
                alt={`Video image thumbnail from video title: ${video.videoTitle}`}
                // width={384}
                // height={216}
                className="absolute left-0 top-0 h-full w-full object-cover "
                src={video.thumbnailUrl}
              />
            </div>
          </div>

          {/* Video Infos */}
          <div className="flex w-full flex-col lg:w-2/3">
            <h3 className="mt-2 pt-1 text-base lg:pl-4">{video.videoTitle}</h3>
            <span className="mt-2 text-xs lg:pl-4">{video.channelName}</span>
            <div className="mt-3">
              <div className="text-xs lg:pl-4">
                Views: {Number(video.viewCount).toLocaleString('pt-BR')}
              </div>
              <div className="mt-1 text-xs lg:pl-4">
                {formatDate(video.uploadDate)}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardVideoSearch;
