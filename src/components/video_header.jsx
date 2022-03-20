import React, { memo, useRef } from 'react';
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
    <header className='fixed flex items-center bg-primary text-white z-10 px-4 h-[56px] w-full'>
      <section className='flex flex-1 items-center justify-between'>
        <div className='cursor-pointer'>
          <div className='flex items-center' onClick={logoClick}>
            <img className='w-6' src='/logo.png' alt='로고' />
            <span className='ml-1 font-bold text-lg'>VintzTube</span>
          </div>
        </div>
        <div className='hidden sm:mx-12 md:flex items-center grow mx-36 lg:max-w-3xl'>
          <div className='flex grow'>
            <input
              className='grow bg-stone-800 px-3 outline outline-offset-[-2px] outline-1 outline-stone-700 focus:outline-blue-700'
              ref={inputRef}
              type='search'
              placeholder='검색'
              onKeyPress={onKeyPress}
            />
            <button className='py-1 px-3 text-xl text-stone-300 bg-stone-800'>
              <i className='fas fa-keyboard'></i>
            </button>
          </div>
          <button className='p-1 text-xl ml-2' type='submit' onClick={onClick}>
            <i className='fas fa-search'></i>
          </button>
          <button className='text-xl ml-2 p-1'>
            <i className='fas fa-microphone'></i>
          </button>
        </div>
        <div className='flex'>
          <button className='md:hidden text-xl ml-2 p-1'>
            <i className='fas fa-search'></i>
          </button>
          <button className='text-xl ml-2 p-1'>
            <i className='fas fa-th'></i>
          </button>
          <button className='text-xl ml-2 p-1'>
            <i className='fas fa-bell'></i>
          </button>
          <button className='ml-2'>
            <img
              className='w-8 h-8 rounded-full cursor-pointer'
              src={profile}
              alt='프로필'
            />
          </button>
        </div>
      </section>
    </header>
  );
});

export default VideoHeader;
