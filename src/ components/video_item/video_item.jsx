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

      <div className={`${styles.meta} ${displayType}`}>
        <a href='#' className={styles.avatarLink}></a>
        <p className={styles.title}>{snippet.title}</p>
        <p className={styles.channelTitle}>{snippet.channelTitle}</p>
      </div>
    </li>
  );
};

export default VideoItem;
