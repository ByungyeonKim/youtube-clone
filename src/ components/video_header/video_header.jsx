import React, { memo } from 'react';
import styles from './header.module.css';
import profile from './img/thumbnail_profile_none.jpg';

const VideoHeader = memo(() => {
  return (
    <header>
      <div className={styles.start}>
        <button>
          <i className='fas fa-bars'></i>
        </button>
        <div className={styles.logo}>
          <i className='fab fa-youtube'></i>
          <span className={styles.logoName}>Premium</span>
          <span className={styles.country}>KR</span>
        </div>
      </div>
      <div className={styles.center}>
        <form>
          <div className={styles.search}>
            <input type='text' placeholder='검색' />
            <button>
              <i className='fas fa-keyboard'></i>
            </button>
          </div>
          <button className={styles.searchBtn}>
            <i className='fas fa-search'></i>
          </button>
        </form>
        <button>
          <i className='fas fa-microphone'></i>
        </button>
      </div>
      <div className={styles.end}>
        <button>
          <i className='fas fa-video'></i>
        </button>
        <button>
          <i className='fas fa-th'></i>
        </button>
        <button>
          <i className='fas fa-bell'></i>
        </button>
        <button className={styles.avatarBtn}>
          <img className={styles.avatar} src={profile} alt='프로필' />
        </button>
      </div>
    </header>
  );
});

export default VideoHeader;
