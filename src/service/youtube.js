class Youtube {
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
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=KR&maxResults=24&key=${this.key}`,
        this.getRequestOptions
      );
      const result = await response.json();
      return result.items;
    } catch (error) {
      return console.log('error', error);
    }
  }

  async search(query) {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=${query}&type=video&key=${this.key}`,
        this.getRequestOptions
      );
      const result = await response.json();
      return result.items.map((item) => ({ ...item, id: item.id.videoId }));
    } catch (error) {
      return console.log('error', error);
    }
  }

  async channel(channelId) {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&maxResults=24&id=${channelId}&key=${this.key}`,
        this.getRequestOptions
      );
      const result = await response.json();
      return result.items;
    } catch (error) {
      return console.log('error', error);
    }
  }
}

export default Youtube;
