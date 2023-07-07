import clsx from 'clsx';
import React from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = () => {
  return (
    <div className="">
      <YouTube
        videoId="v3kIGlkWZrY"
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
