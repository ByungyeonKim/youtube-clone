import React, { useEffect, useState } from 'react';
import VideoHeader from './ components/video_header/video_header';
import VideoList from './ components/video_list/video_list';
import styles from './app.module.css';

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [videos, setVideos] = useState([]);
  const search = (query) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=${query}&type=video&key=${apiKey}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => result.items.map((item) => ({ ...item, id: item.id.videoId })))
      .then((items) => setVideos(items))
      .catch((error) => console.log('error', error));
  };
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=KR&maxResults=24&key=${apiKey}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log('error', error));
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
