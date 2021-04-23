import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({ video, video: { snippet }, onVideoClick, display }) => {
  const displayType = display === 'list' ? styles.list : styles.grid;
  return (
    <li className={`${styles.video} ${displayType}`} onClick={() => onVideoClick(video)}>
      <img //
        className={styles.thumbnail}
        src={snippet.thumbnails.medium.url}
        alt='동영상 썸네일'
      />

      <div className={styles.meta}>
        <div className={styles.channelThumbnail}>
          <img //
            className={styles.thumbnail}
            src={video.channelThumbnails}
            alt='채널 썸네일'
          />
        </div>
        <div className={`${styles.titleWrap} ${displayType}`}>
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channelTitle}>{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
