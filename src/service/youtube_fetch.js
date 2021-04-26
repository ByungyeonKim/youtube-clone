class YoutubeFetch {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  async mostPopular() {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=KR&maxResults=36&key=${this.key}`,
        this.getRequestOptions
      );
      const result_1 = await response.json();
      return result_1.items;
    } catch (error) {
      return console.log('error', error);
    }
  }

  async search(query) {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=36&q=${query}&type=video&key=${this.key}`,
        this.getRequestOptions
      );
      const result = await response.json();
      return result.items.map((item) => ({ ...item, id: item.id.videoId }));
    } catch (error) {
      return console.log('error', error);
    }
  }

  channel(videos, promises) {
    for (let i = 0; i < videos.length; i++) {
      promises.push(
        fetch(
          `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&maxResults=36&id=${videos[i].snippet.channelId}&key=${this.key}`,
          this.getRequestOptions
        )
          .then((response) => response.json())
          .then((result) => result.items[0].snippet.thumbnails.default.url)
          .then((url) => (videos[i].channelThumbnails = url))
          .catch((error) => console.log('error', error))
      );
    }
    return promises;
  }
}

export default YoutubeFetch;
