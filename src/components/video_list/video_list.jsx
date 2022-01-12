import React, { memo } from 'react';
import VideoItem from '../video_item/video_item';

const VideoList = memo(({ videos, onVideoClick, display }) => {
  return (
    <ul className='pt-[56px] sm:grid gap-3 grid-cols-2 md:gap-4 md:grid-cols-3 lg:grid-cols-4'>
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
