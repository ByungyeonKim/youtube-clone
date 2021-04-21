import React, { useEffect, useState } from 'react';
import { useCallback } from 'react';
import VideoDetail from './ components/video_detail/video_detail';
import VideoHeader from './ components/video_header/video_header';
import VideoList from './ components/video_list/video_list';
import VideoLoading from './ components/video_loading/video_loading';
import styles from './app.module.css';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoding] = useState(false);
  const displayType = selectedVideo ? styles.list : styles.grid;
  const selectVideo = useCallback((video) => {
    setSelectedVideo(video);
  }, []);

  const logoClick = useCallback(() => {
    setSelectedVideo(null);
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);

  const search = useCallback(
    (query) => {
      setSelectedVideo(null);
      setLoding(true);
      youtube
        .search(query) //
        .then((videos) => {
          setTimeout(setLoding(false), 0);
          setVideos(videos);
        });
    },
    [youtube]
  );

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <>
      <VideoHeader onSearch={search} logoClick={logoClick} />
      {loading && <VideoLoading />}
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
    </>
  );
}

export default App;
