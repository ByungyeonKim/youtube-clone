class Youtube {
  constructor(key) {
    this.key = key;
    this.GetRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }
  mostPopular() {
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=KR&maxResults=24&key=${this.key}`,
      this.getRequestOptions
    )
      .then((response) => response.json())
      .then((result) => result.items)
      .catch((error) => console.log('error', error));
  }

  search(query) {
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=${query}&type=video&key=${this.key}`,
      this.getRequestOptions
    )
      .then((response) => response.json())
      .then((result) => result.items.map((item) => ({ ...item, id: item.id.videoId })))
      .then((items) => items)
      .catch((error) => console.log('error', error));
  }
}

export default Youtube;
