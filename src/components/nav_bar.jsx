import React, { memo } from 'react';

const NavBar = memo(() => {
  return (
    <ul className='pt-[56px] bg-zinc-800 h-full fixed w-[240px] flex flex-col'>
      <li className='flex-1 max-h-[48px] bg-zinc-700 text-white'>
        <a
          className='text-base w-full h-full flex items-center px-4'
          title='홈'
          href='/'
        >
          <i className='fas fa-home mr-4 text-xl min-w-[23px]'></i>홈
        </a>
      </li>
      <li className='flex-1 max-h-[48px] text-white'>
        <a
          className='text-base w-full h-full flex items-center px-4 hover:bg-zinc-700'
          title='탐색'
          href='/'
        >
          <i className='fas fa-compass mr-4 text-xl min-w-[23px]'></i>
          탐색
        </a>
      </li>
      <li className='flex-1 max-h-[48px] text-white'>
        <a
          className='text-base w-full h-full flex items-center px-4 hover:bg-zinc-700'
          title='구독'
          href='/'
        >
          <i className='fab fa-youtube-square mr-4 text-xl min-w-[23px]'></i>
          구독
        </a>
      </li>
      <li className='flex-1 max-h-[48px] text-white'>
        <a
          className='text-base w-full h-full flex items-center px-4 hover:bg-zinc-700'
          title='Originals'
          href='/'
        >
          <i className='fab fa-youtube mr-4 text-xl min-w-[23px]'></i>
          Originals
        </a>
      </li>
      <li className='flex-1 max-h-16 text-white border-b-[1px] border-solid border-gray-600 pb-4'>
        <a
          className='text-base w-full h-full flex items-center px-4 hover:bg-zinc-700'
          title='YouTube Music'
          href='/'
        >
          <i className='fas fa-play-circle mr-4 text-xl min-w-[23px]'></i>
          YouTube Music
        </a>
      </li>
      <li className='flex-1 max-h-16 text-white pt-4'>
        <a
          className='text-base w-full h-full flex items-center px-4 hover:bg-zinc-700'
          title='보관함'
          href='/'
        >
          <i className='fas fa-archive mr-4 text-xl min-w-[23px]'></i>
          보관함
        </a>
      </li>
      <li className='flex-1 max-h-[48px] text-white'>
        <a
          className='text-base w-full h-full flex items-center px-4 hover:bg-zinc-700'
          title='시청 기록'
          href='/'
        >
          <i className='fas fa-history mr-4 text-xl min-w-[23px]'></i>
          시청 기록
        </a>
      </li>
      <li className='flex-1 max-h-[48px] text-white'>
        <a
          className='text-base w-full h-full flex items-center px-4 hover:bg-zinc-700'
          title='내 동영상'
          href='/'
        >
          <i className='fas fa-user-plus mr-4 text-xl min-w-[23px]'></i>내
          동영상
        </a>
      </li>
      <li className='flex-1 max-h-[48px] text-white'>
        <a
          className='text-base w-full h-full flex items-center px-4 hover:bg-zinc-700'
          title='나중에 볼 동영상'
          href='/'
        >
          <i className='fas fa-clock mr-4 text-xl min-w-[23px]'></i>
          나중에 볼 동영상
        </a>
      </li>
      <li className='flex-1 max-h-[48px] text-white'>
        <a
          className='text-base w-full h-full flex items-center px-4 hover:bg-zinc-700'
          title='좋아요 표시한 동영상'
          href='/'
        >
          <i className='fas fa-thumbs-up mr-4 text-xl min-w-[23px]'></i>
          좋아요 표시한 동영상
        </a>
      </li>
      <li className='flex-1 max-h-16 text-white border-b-[1px] border-solid border-gray-600 pb-4'>
        <a
          className='text-base w-full h-full flex items-center px-4 hover:bg-zinc-700'
          title='더보기'
          href='/'
        >
          <i className='fas fa-chevron-down mr-4 text-xl min-w-[23px]'></i>
          더보기
        </a>
      </li>
      <li className='flex-1 max-h-16 text-neutral-300 pt-4'>
        <a
          className='text-base w-full h-full flex items-center px-4 hover:bg-zinc-700'
          title='BYTube GitHub'
          href='https://github.com/ByungyeonKim'
          rel='noopener noreferrer'
          target='_blank'
        >
          <i className='fab fa-github mr-4 text-xl min-w-[23px]'></i>
          Vintz GitHub
        </a>
      </li>
      <li className='flex-1 max-h-[48px] text-yellow-300'>
        <a
          className='text-base w-full h-full flex items-center px-4 hover:bg-zinc-700'
          title='개발 전용차선 블로그'
          href='https://onlydev.tistory.com/'
          rel='noopener noreferrer'
          target='_blank'
        >
          <i className='fas fa-blog mr-4 text-xl min-w-[23px]'></i>
          개발 전용차선 블로그
        </a>
      </li>
    </ul>
  );
});

export default NavBar;
