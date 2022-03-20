import React, { memo } from 'react';

const NavBar = memo(() => {
  return (
    <ul className='pt-[68px] bg-primary h-full fixed w-[240px] flex flex-col'>
      <li className='flex-1 max-h-[40px] bg-zinc-700 text-white'>
        <a
          className='w-full h-full flex items-center px-4 text-sm'
          title='홈'
          href='/'
        >
          <i className='fas fa-home mr-4 text-lg min-w-[23px]'></i>홈
        </a>
      </li>
      <li className='flex-1 max-h-[40px] text-white'>
        <a
          className='w-full h-full flex items-center px-4 hover:bg-zinc-700 text-sm'
          title='탐색'
          href='/'
        >
          <i className='fas fa-compass mr-4 text-lg min-w-[23px]'></i>
          탐색
        </a>
      </li>
      <li className='flex-1 max-h-[40px] text-white'>
        <a
          className='w-full h-full flex items-center px-4 hover:bg-zinc-700 text-sm'
          title='구독'
          href='/'
        >
          <i className='fab fa-youtube-square mr-4 text-lg min-w-[23px]'></i>
          구독
        </a>
      </li>
      <li className='flex-1 max-h-[40px] text-white'>
        <a
          className='w-full h-full flex items-center px-4 hover:bg-zinc-700 text-sm'
          title='Originals'
          href='/'
        >
          <i className='fab fa-youtube mr-4 text-lg min-w-[23px]'></i>
          Originals
        </a>
      </li>
      <li className='flex-1 max-h-16 text-white border-b-[1px] border-solid border-gray-600 pb-4'>
        <a
          className='w-full h-full flex items-center px-4 hover:bg-zinc-700 text-sm'
          title='YouTube Music'
          href='/'
        >
          <i className='fas fa-play-circle mr-4 text-lg min-w-[23px]'></i>
          YouTube Music
        </a>
      </li>
      <li className='flex-1 max-h-16 text-white pt-4'>
        <a
          className='w-full h-full flex items-center px-4 hover:bg-zinc-700 text-sm'
          title='보관함'
          href='/'
        >
          <i className='fas fa-archive mr-4 text-lg min-w-[23px]'></i>
          보관함
        </a>
      </li>
      <li className='flex-1 max-h-[40px] text-white'>
        <a
          className='w-full h-full flex items-center px-4 hover:bg-zinc-700 text-sm'
          title='시청 기록'
          href='/'
        >
          <i className='fas fa-history mr-4 text-lg min-w-[23px]'></i>
          시청 기록
        </a>
      </li>
      <li className='flex-1 max-h-[40px] text-white'>
        <a
          className='w-full h-full flex items-center px-4 hover:bg-zinc-700 text-sm'
          title='내 동영상'
          href='/'
        >
          <i className='fas fa-user-plus mr-4 text-lg min-w-[23px]'></i>내
          동영상
        </a>
      </li>
      <li className='flex-1 max-h-[40px] text-white'>
        <a
          className='w-full h-full flex items-center px-[0.875rem] hover:bg-zinc-700 text-sm'
          title='나중에 볼 동영상'
          href='/'
        >
          <i className='fas fa-clock mr-4 text-lg min-w-[23px]'></i>
          나중에 볼 동영상
        </a>
      </li>
      <li className='flex-1 max-h-[40px] text-white'>
        <a
          className='w-full h-full flex items-center px-4 hover:bg-zinc-700 text-sm'
          title='좋아요 표시한 동영상'
          href='/'
        >
          <i className='fas fa-thumbs-up mr-4 text-lg min-w-[23px]'></i>
          좋아요 표시한 동영상
        </a>
      </li>
      <li className='flex-1 max-h-16 text-white border-b-[1px] border-solid border-gray-600 pb-4'>
        <a
          className='w-full h-full flex items-center px-4 hover:bg-zinc-700 text-sm'
          title='더보기'
          href='/'
        >
          <i className='fas fa-chevron-down mr-4 text-lg min-w-[23px]'></i>
          더보기
        </a>
      </li>
      <li className='flex-1 max-h-16 text-neutral-300 pt-4'>
        <a
          className='w-full h-full flex items-center px-4 hover:bg-zinc-700 text-sm'
          title='BYTube GitHub'
          href='https://github.com/ByungyeonKim'
          rel='noopener noreferrer'
          target='_blank'
        >
          <i className='fab fa-github mr-4 text-lg min-w-[23px]'></i>
          Vintz GitHub
        </a>
      </li>
      <li className='flex-1 max-h-[40px] text-yellow-300'>
        <a
          className='w-full h-full flex items-center px-4 hover:bg-zinc-700 text-sm'
          title='개발 전용차선 블로그'
          href='https://onlydev.tistory.com/'
          rel='noopener noreferrer'
          target='_blank'
        >
          <i className='fas fa-blog mr-4 text-lg min-w-[23px]'></i>
          개발 전용차선 블로그
        </a>
      </li>
    </ul>
  );
});

export default NavBar;
