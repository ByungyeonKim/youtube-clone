import React from 'react';

const VideoItem = ({ video, onVideoClick, display }) => {
  const parser = new DOMParser();
  const title = parser.parseFromString(video.title, 'text/html');
  const col = 'cursor-pointer hover:scale-105 group';
  const row =
    'cursor-pointer flex mb-3 hover:scale-105 group mr-4 lg:max-w-[396px] px-6';

  return (
    <li
      className={display === 'grid' ? col : row}
      onClick={() => onVideoClick(video)}
    >
      <img //
        className={display === 'grid' ? 'w-full' : 'w-[168px] h-[94px]'}
        src={video.thumbnailURL}
        alt='동영상 썸네일'
      />
      <div className='flex items-center px-2'>
        <img //
          className={display === 'grid' ? 'rounded-full w-12 p-1' : 'hidden'}
          src={video.channelThumbnails}
          alt='채널 썸네일'
        />
        <div className='pl-2 py-3'>
          <p className='line-clamp-2 mb-1 text-zinc-400 group-hover:text-zinc-200'>
            {title.body.innerHTML}
          </p>
          <p className='text-stone-500 text-sm group-hover:text-zinc-200'>
            {video.channelTitle}
          </p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
