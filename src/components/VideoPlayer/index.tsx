import React from 'react';
import styles from './styles.module.css';

interface Props {
  videoId: string;
}

const VideoPlayer = ({ videoId }: Props) => {
  return (
    <div className="relative w-full pb-[56.25%]">
      <iframe
        title="YouTube video player"
        className={styles.ytIframe}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1&showinfo=0`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>
    </div>
  );
};

export default VideoPlayer;
