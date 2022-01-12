import React from 'react';

const VideoItem = ({ video, onVideoClick, display }) => {
  const parser = new DOMParser();
  const title = parser.parseFromString(video.title, 'text/html');

  return (
    <li className='cursor-pointer' onClick={() => onVideoClick(video)}>
      <img //
        className='w-full'
        src={video.thumbnailURL}
        alt='동영상 썸네일'
      />
      <div className='flex items-center px-2'>
        <img //
          className='rounded-full w-12 p-1'
          src={video.channelThumbnails}
          alt='채널 썸네일'
        />
        <div className='pl-2 py-3'>
          <p className='line-clamp-2 mb-1 text-zinc-200'>
            {title.body.innerHTML}
          </p>
          <p className='text-stone-400 text-sm'>{video.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
