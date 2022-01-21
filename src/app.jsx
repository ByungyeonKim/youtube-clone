import React, { useEffect, useState, useCallback } from 'react';
import NavBar from './components/nav_bar';
import VideoDetail from './components/video_detail';
import VideoHeader from './components/video_header';
import VideoList from './components/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const selectVideo = useCallback((video) => {
    setSelectedVideo(video);
  }, []);

  const logoClick = useCallback(() => {
    setSelectedVideo(null);
    youtube
      .mostPopular() //
      .then((videos) => {
        const promises = [];
        Promise.all(youtube.channel(videos, promises)).then(() =>
          setVideos(videos.items)
        );
      });
  }, [youtube]);

  const search = useCallback(
    (query) => {
      setLoading(true);
      youtube
        .search(query) //
        .then((videos) => {
          const promises = [];
          Promise.all(youtube.channel(videos, promises)).then(() => {
            setVideos(videos.items);
            setLoading(false);
          });
          setSelectedVideo(null);
        });
    },
    [youtube]
  );

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => {
        const promises = [];
        Promise.all(youtube.channel(videos, promises)).then(() => {
          setVideos(videos.items);
          setTimeout(() => {
            setLoading(false);
          }, 500);
        });
      });
  }, [youtube]);

  return (
    <div className='h-screen bg-zinc-900'>
      <VideoHeader onSearch={search} logoClick={logoClick} />
      <div className='bg-zinc-900 relative'>
        {!selectedVideo && (
          <nav className='hidden lg:block'>
            <NavBar />
          </nav>
        )}
        <section
          className={
            selectedVideo
              ? 'flex flex-col lg:flex-row max-w-screen-xl m-auto'
              : 'flex flex-col lg:flex-row'
          }
        >
          {selectedVideo && (
            <div className='flex-[2]'>
              <VideoDetail video={selectedVideo} />
            </div>
          )}
          <div className='flex-1'>
            {isLoading && (
              <div className='pt-[56px] h-screen flex justify-center items-center text-white text-lg lg:pl-[240px]'>
                <span className='w-5 h-5 mr-2 border-[3px] border-solid rounded-full border-transparent border-t-white border-r-white animate-spin'></span>
                로딩 중...
              </div>
            )}
            {!isLoading && (
              <VideoList
                videos={videos}
                onVideoClick={selectVideo}
                display={selectedVideo ? 'list' : 'grid'}
              />
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
