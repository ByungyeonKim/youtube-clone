import React, { useEffect, useState } from 'react';
import { useCallback } from 'react';
import NavBar from './ components/nav_bar/nav_bar';
import VideoDetail from './ components/video_detail/video_detail';
import VideoHeader from './ components/video_header/video_header';
import VideoList from './ components/video_list/video_list';
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
        Promise.all(youtube.channel(videos, promises)).then(() => setVideos(videos));
      });
  }, [youtube]);

  const search = useCallback(
    (query) => {
      setSelectedVideo(null);
      youtube
        .search(query) //
        .then((videos) => {
          const promises = [];
          Promise.all(youtube.channel(videos, promises)).then(() => setVideos(videos));
        });
    },
    [youtube]
  );

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => {
        const promises = [];
        Promise.all(youtube.channel(videos, promises)).then(() => setVideos(videos));
      });
  }, [youtube]);

  return (
    <>
      <VideoHeader onSearch={search} logoClick={logoClick} />
      <div className={styles.content}>
        <nav className={styles.navBar}>
          <NavBar />
        </nav>
        <section className={styles.container}>
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
