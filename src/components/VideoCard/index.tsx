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
    return videoTitle.slice(0, 42) + '...';
  } else {
    return videoTitle;
  }
}
function formatDate(date: string) {
  const dateInDateFormat = new Date(date);
  const options = {
    day: 'numeric' as const,
    month: 'long' as const,
    year: 'numeric' as const,
  };
  const finalDate = dateInDateFormat.toLocaleDateString('pt-BR', options);
  return finalDate;
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
        <div className="relative flex h-[13.5rem] w-96 items-center justify-center overflow-hidden rounded-lg">
          <img
            alt={`Video image thumbnail from video title: ${videoTitle}`}
            width={384}
            height={216}
            className="absolute"
            src={thumbnailUrl}
          />
        </div>

        <h3 className="pl-2 pt-1 text-base">{trimVideoTitle(videoTitle)}</h3>
        <span className="pl-2 text-xs">{channelName}</span>
        <div className="flex justify-between">
          <span className="pl-2 text-xs">
            Views: {Number(viewCount).toLocaleString('pt-BR')}
          </span>
          <span className="text-xs">{formatDate(uploadDate)}</span>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
