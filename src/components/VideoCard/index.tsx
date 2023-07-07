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
function trimVideoTitle(videoTitle: string) {
  let counter = 0;
  for (let i = 0; i < videoTitle.length; i++) {
    if (videoTitle[i] === videoTitle[i].toUpperCase()) {
      counter++;
    }
  }
  if (counter > videoTitle.length / 2) {
    return videoTitle.slice(0, 37) + '...';
  } else if (videoTitle.length > 45) {
    return videoTitle.slice(0, 45) + '...';
  } else {
    return videoTitle;
  }
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

        <h3 className="pl-2 pt-1 text-base">{trimVideoTitle(videoTitle)}</h3>
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
