import React from 'react';
import styles from './nav_bar.module.css';

const NavBar = (props) => (
  <ul className={styles.list}>
    <li className={`${styles.item} ${styles.selected}`}>
      <a className={styles.link} title='홈' href='/'>
        <i className='fas fa-home'></i>홈
      </a>
    </li>
    <li className={styles.item}>
      <a className={styles.link} title='탐색' href='/'>
        <i class='fas fa-compass'></i>
        탐색
      </a>
    </li>
    <li className={styles.item}>
      <a className={styles.link} title='구독' href='/'>
        <i class='fab fa-youtube-square'></i>
        구독
      </a>
    </li>
    <li className={styles.item}>
      <a className={styles.link} title='Originals' href='/'>
        <i class='fab fa-youtube'></i>
        Originals
      </a>
    </li>
    <li className={styles.item}>
      <a className={styles.link} title='YouTube Music' href='/'>
        <i class='fas fa-play-circle'></i>
        YouTube Music
      </a>
    </li>
  </ul>
);

export default NavBar;
