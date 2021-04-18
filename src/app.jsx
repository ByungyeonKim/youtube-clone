import React, { useEffect, useState } from 'react';
import VideoHeader from './ components/video_header/video_header';
import VideoList from './ components/video_list/video_list';
import styles from './app.module.css';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  return (
    <>
      <VideoHeader onSearch={search} />
      <section className={styles.videoContainer}>
        <VideoList videos={videos} />
      </section>
    </>
  );
}

export default App;
