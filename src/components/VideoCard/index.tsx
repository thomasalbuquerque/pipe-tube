import React from 'react';
interface props {
  thumbnailUrl: string;
  channelProfilePicUrl: string;
  videoTitle: string;
  channelName: string;
  viewCount: string;
  uploadDate: string;
  videoUrl: string;
}
const VideoCard = ({
  thumbnailUrl,
  channelProfilePicUrl,
  videoTitle,
  channelName,
  viewCount,
  uploadDate,
  videoUrl,
}: props) => {
  return (
    <>
      <div className="flex h-auto w-96 flex-col text-gray">
        <div className="relative flex h-[13.5rem] w-96 items-center justify-center overflow-hidden">
          <img className="absolute" src={thumbnailUrl} />
        </div>

        <h3 className="pl-2 pt-1 text-base">{videoTitle}</h3>
        <span className="pl-2 text-xs">{channelName}</span>
        <div className="flex justify-between">
          <span className="pl-2 text-xs">
            Views: {Number(viewCount).toLocaleString('pt-BR')}
          </span>
          <span>{uploadDate}</span>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
