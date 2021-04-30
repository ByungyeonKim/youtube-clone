import React, { memo } from 'react';
import styles from './nav_bar.module.css';

const NavBar = memo(() => {
  return (
    <ul className={styles.list}>
      <li className={`${styles.item} ${styles.selected}`}>
        <a className={styles.link} title='홈' href='/'>
          <i className='fas fa-home'></i>홈
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} title='탐색' href='/'>
          <i className='fas fa-compass'></i>
          탐색
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} title='구독' href='/'>
          <i className='fab fa-youtube-square'></i>
          구독
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} title='Originals' href='/'>
          <i className='fab fa-youtube'></i>
          Originals
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} title='YouTube Music' href='/'>
          <i className='fas fa-play-circle'></i>
          YouTube Music
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} title='보관함' href='/'>
          <i className='fas fa-archive'></i>
          보관함
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} title='시청 기록' href='/'>
          <i className='fas fa-history'></i>
          시청 기록
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} title='내 동영상' href='/'>
          <i className='fas fa-user-plus'></i>내 동영상
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} title='나중에 볼 동영상' href='/'>
          <i className='fas fa-clock'></i>
          나중에 볼 동영상
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} title='좋아요 표시한 동영상' href='/'>
          <i className='fas fa-thumbs-up'></i>
          좋아요 표시한 동영상
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} title='더보기' href='/'>
          <i className='fas fa-chevron-down'></i>
          더보기
        </a>
      </li>
      <li className={styles.item}>
        <a
          className={styles.link}
          title='BYTube GitHub'
          href='https://github.com/ByungyeonKim'
          rel='noopener noreferrer'
          target='_blank'
        >
          <i className='fab fa-github'></i>
          BYTube GitHub
        </a>
      </li>
      <li className={styles.item}>
        <a
          className={styles.link}
          title='개발 전용차선 블로그'
          href='https://onlydev.tistory.com/'
          rel='noopener noreferrer'
          target='_blank'
        >
          <i className='fas fa-blog'></i>
          개발 전용차선 블로그
        </a>
      </li>
    </ul>
  );
});

export default NavBar;
