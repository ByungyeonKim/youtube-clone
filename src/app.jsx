import React, { useEffect, useState } from 'react';
import VideoList from './ components/video_list/video_list';
import './app.css';

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=KR&maxResults=25&key=${apiKey}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log('error', error));
  }, []);

  return <VideoList videos={videos} />;
}

export default App;
