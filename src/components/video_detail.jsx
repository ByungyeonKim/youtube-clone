import React from 'react';

const VideoDetail = ({ video }) => {
  const parser = new DOMParser();
  const title = parser.parseFromString(video.title, 'text/html');

  return (
    <section className=''>
      <iframe
        className=''
        type='text/html'
        title='youtube video player'
        width='100%'
        height='500px'
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder='0'
        allowFullScreen
      ></iframe>
      <div className=''>
        <h1>{title.body.innerHTML}</h1>
      </div>
      <div className=''>
        <div className=''>
          <img //
            className=''
            src={video.channelThumbnails}
            alt='채널 썸네일'
          />
        </div>
        <h2>{video.channelTitle}</h2>
        <button className=''>구독</button>
      </div>
      <pre className=''>{video.description}</pre>
    </section>
  );
};

export default VideoDetail;
