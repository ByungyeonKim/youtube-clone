import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({ video, video: { snippet } }) => {
  const parser = new DOMParser();
  const title = parser.parseFromString(snippet.title, 'text/html');

  return (
    <section className={styles.detail}>
      <iframe
        className={styles.video}
        type='text/html'
        title='youtube video player'
        width='100%'
        height='500px'
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder='0'
        allowFullScreen
      ></iframe>
      <div className={styles.primaryInfo}>
        <h1>{title.body.innerHTML}</h1>
      </div>
      <div className={styles.secondaryInfo}>
        <div className={styles.channelThumbnail}>
          <img //
            className={styles.thumbnail}
            src={video.channelThumbnails}
            alt='채널 썸네일'
          />
        </div>
        <h2>{snippet.channelTitle}</h2>
        <button className={styles.subscribeBtn}>구독</button>
      </div>
      <pre className={styles.description}>{snippet.description}</pre>
    </section>
  );
};

export default VideoDetail;
