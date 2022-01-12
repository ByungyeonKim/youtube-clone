import React, { useEffect, useState } from 'react';
import { useCallback } from 'react';
import NavBar from './components/nav_bar/nav_bar';
import VideoDetail from './components/video_detail/video_detail';
import VideoHeader from './components/video_header/video_header';
import VideoList from './components/video_list/video_list';
import styles from './app.module.css';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const displayType = selectedVideo ? styles.list : styles.grid;
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
      <div className='bg-zinc-800'>
        {!selectedVideo && (
          <nav className='hidden'>
            <NavBar />
          </nav>
        )}
        <section className='max-w-7xl mx-auto'>
          {selectedVideo && (
            <div className={styles.detail}>
              <VideoDetail video={selectedVideo} />
            </div>
          )}
          <div className={displayType}>
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
