import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({ video: { snippet } }) => (
  <li className={styles.listItem}>
    <img className={styles.thumbnail} src={snippet.thumbnails.medium.url} alt='썸네일' />
    <div className={styles.titleBox}>
      <p className={styles.title}>{snippet.title}</p>
      <p className={styles.channelTitle}>{snippet.channelTitle}</p>
    </div>
  </li>
);

export default VideoItem;
