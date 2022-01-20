import React from 'react';

const VideoDetail = ({ video }) => {
  const parser = new DOMParser();
  const title = parser.parseFromString(video.title, 'text/html');

  return (
    <section className='flex flex-col px-6 pt-[80px]'>
      <div className='relative pb-[56.25%] pt-[25px] h-0 bg-black'>
        <iframe
          className='absolute top-0 left-0 w-full h-full'
          type='text/html'
          title='youtube video player'
          width='100%'
          height='100%'
          src={`https://www.youtube.com/embed/${video.id}`}
          frameBorder='0'
          allowFullScreen
        ></iframe>
      </div>
      <div className='text-slate-200'>
        <div className='text-2xl py-5 border-b border-solid border-zinc-600'>
          <h1>{title.body.innerHTML}</h1>
        </div>
        <div className='py-6 flex justify-between'>
          <div className='flex'>
            <img //
              className='rounded-full w-[48px] h-[48px]'
              src={video.channelThumbnails}
              alt='채널 썸네일'
            />
            <h2 className='ml-3'>{video.channelTitle}</h2>
          </div>
          <button className='mr-5 bg-red-600 px-5 text-white font-semibold rounded'>
            구독
          </button>
        </div>
        <pre className='whitespace-pre-wrap'>{video.description}</pre>
      </div>
    </section>
  );
};

export default VideoDetail;
