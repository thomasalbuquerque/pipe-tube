import { formatDate, trimVideoTitle } from '@/helpers/functions';
import Link from 'next/link';
import React from 'react';
interface props {
  video: Video;
}
const CardVideo = ({ video }: props) => {
  return (
    <>
      <Link href={`/video/${video.videoId}`}>
        <div className="flex h-auto w-96 flex-col text-gray">
          <div className="relative flex h-[13.5rem] w-96 items-center justify-center overflow-hidden rounded-lg">
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
