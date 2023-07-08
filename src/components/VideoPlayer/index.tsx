import React from 'react';
import YouTube from 'react-youtube';

interface props {
  videoId: string;
}
const VideoPlayer = ({ videoId }: props) => {
  return (
    <div className="">
      <YouTube
        videoId={videoId}
        opts={{
          height: '720',
          width: '1280',
          playerVars: { autoplay: 0, controls: 1, showinfo: 0 },
          className: 'w-full h-full',
        }}
        className="h-full w-full"
      />
    </div>
  );
};

export default VideoPlayer;
