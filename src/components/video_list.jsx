import React, { memo } from 'react';
import VideoItem from './video_item';

const VideoList = memo(({ videos, onVideoClick, display }) => {
  const list = 'flex flex-col pt-[80px]';
  const grid =
    'pt-[56px] px-5 sm:grid gap-3 grid-cols-2 md:gap-4 md:grid-cols-3 lg:grid-cols-4 lg:pl-[264px] lg:pt-[80px] xl:grid-cols-5';
  return (
    <ul className={display === 'grid' ? grid : list}>
      {videos.map((video) => (
        <VideoItem //
          key={video.id}
          video={video}
          onVideoClick={onVideoClick}
          display={display}
        />
      ))}
    </ul>
  );
});

export default VideoList;
