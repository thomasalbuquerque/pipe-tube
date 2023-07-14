import { formatDate, trimVideoTitle } from '@/helpers/functions';
import Link from 'next/link';
import React from 'react';
interface props {
  video: Video;
}
const CardVideo = ({ video }: props) => {
  const handleClick = () => {
    sessionStorage.setItem(`VideoId: ${video.videoId}`, JSON.stringify(video));
  };
  return (
    <>
      <Link href={`/video/${video.videoId}`} onClick={handleClick}>
        <div className="flex h-auto w-80 flex-col text-customGray xsm:w-96">
          <div className="relative flex h-[11.25rem] w-80 items-center justify-center overflow-hidden rounded-lg xsm:h-[13.5rem] xsm:w-96">
            <img
              alt={`Video image thumbnail from video title: ${video.videoTitle}`}
              width={384}
              height={216}
              className="absolute"
              src={video.thumbnailUrl}
            />
          </div>

          <h3 className="pl-2 pt-1 text-base">
            {trimVideoTitle(video.videoTitle)}
          </h3>
          <span className="pl-2 text-xs">{video.channelName}</span>
          <div className="flex justify-between">
            <span className="pl-2 text-xs">
              Views: {Number(video.viewCount).toLocaleString('pt-BR')}
            </span>
            <span className="text-xs">{formatDate(video.uploadDate)}</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardVideo;
