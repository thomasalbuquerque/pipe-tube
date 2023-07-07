import React from 'react';
interface props {
  video: Video;
}
function trimVideoTitle(title: string) {
  let counter = 0;
  for (let i = 0; i < title.length; i++) {
    if (title[i] === title[i].toUpperCase()) {
      counter++;
    }
  }
  if (counter > title.length / 2) {
    return title.slice(0, 37) + '...';
  } else if (title.length > 45) {
    return title.slice(0, 42) + '...';
  } else {
    return title;
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
const VideoCard = ({ video }: props) => {
  return (
    <>
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
    </>
  );
};

export default VideoCard;
