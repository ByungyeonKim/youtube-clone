class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        regionCode: 'KR',
        maxResults: '36',
      },
    });
    return response.data.items;
  }

  async search(query) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: '36',
        q: query,
        type: 'video',
      },
    });
    return response.data.items.map((item) => ({ ...item, id: item.id.videoId }));
  }

  channel(videos, promises) {
    for (let i = 0; i < videos.length; i++) {
      const response = this.youtube
        .get('channels', {
          params: {
            part: 'snippet',
            maxResults: '36',
            id: videos[i].snippet.channelId,
          },
        })
        .then((result) => result.data.items[0].snippet.thumbnails.default.url)
        .then((url) => (videos[i].channelThumbnails = url));
      promises.push(response);
    }
    return promises;
  }
}

export default Youtube;
