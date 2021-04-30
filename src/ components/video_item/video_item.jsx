import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({ video, video: { snippet }, onVideoClick, display }) => {
  const displayType = display === 'list' ? styles.list : styles.grid;
  const parser = new DOMParser();
  const title = parser.parseFromString(snippet.title, 'text/html');
  return (
    <li className={`${styles.video} ${displayType}`} onClick={() => onVideoClick(video)}>
      <img //
        className={styles.thumbnail}
        src={snippet.thumbnails.medium.url}
        alt='동영상 썸네일'
      />
      <div className={styles.play}>
        <i className='fas fa-play'></i> 지금 재생
      </div>

      <div className={styles.meta}>
        {display !== 'list' && (
          <div className={styles.channelThumbnail}>
            <img //
              className={styles.thumbnail}
              src={video.channelThumbnails}
              alt='채널 썸네일'
            />
          </div>
        )}
        <div className={`${styles.titleWrap} ${displayType}`}>
          <p className={styles.title}>{title.body.innerHTML}</p>
          <p className={styles.channelTitle}>{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
