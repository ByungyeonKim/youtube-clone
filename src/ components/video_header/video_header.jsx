import React, { memo, useRef } from 'react';
import styles from './header.module.css';
import profile from './img/thumbnail_profile_none.jpg';

const VideoHeader = memo(({ onSearch, logoClick }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const onClick = () => {
    handleSearch();
  };

  return (
    <header>
      <div className={styles.start}>
        <button>
          <i className='fas fa-bars'></i>
        </button>
        <div className={styles.logo} onClick={logoClick}>
          <i className='fab fa-youtube'></i>
          <span className={styles.logoName}>Premium</span>
          <span className={styles.country}>KR</span>
        </div>
      </div>
      <div className={styles.center}>
        <div className={styles.search}>
          <input //
            ref={inputRef}
            type='search'
            placeholder='검색'
            onKeyPress={onKeyPress}
          />
          <button>
            <i className='fas fa-keyboard'></i>
          </button>
        </div>
        <button //
          className={styles.searchBtn}
          type='submit'
          onClick={onClick}
        >
          <i className='fas fa-search'></i>
        </button>
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
