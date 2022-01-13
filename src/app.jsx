import React, { useEffect, useState } from 'react';
import { useCallback } from 'react';
import NavBar from './components/nav_bar';
import VideoDetail from './components/video_detail';
import VideoHeader from './components/video_header';
import VideoList from './components/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
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
      youtube
        .search(query) //
        .then((videos) => {
          const promises = [];
          Promise.all(youtube.channel(videos, promises)).then(() =>
            setVideos(videos.items)
          );
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
        Promise.all(youtube.channel(videos, promises)).then(() =>
          setVideos(videos.items)
        );
      });
  }, [youtube]);

  return (
    <>
      <VideoHeader onSearch={search} logoClick={logoClick} />
      <div className='bg-zinc-900 relative'>
        {!selectedVideo && (
          <nav className='hidden lg:block'>
            <NavBar />
          </nav>
        )}
        <section className='mx-auto'>
          {selectedVideo && (
            <div className=''>
              <VideoDetail video={selectedVideo} />
            </div>
          )}
          <div className=''>
            <VideoList
              videos={videos}
              onVideoClick={selectVideo}
              display={selectedVideo ? 'list' : 'grid'}
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
