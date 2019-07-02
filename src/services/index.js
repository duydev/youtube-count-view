import axios from 'axios';

const API_KEY = 'AIzaSyB0KJRj_fhDty9FvfFpYIFIdbL00S7qFxM';

const API_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2C+statistics&key=${API_KEY}&id=`;

export const fetchData = (videoId = 'knW7-x7Y7RE') => {
  const url = API_URL + videoId;

  return axios({
    method: 'GET',
    url
  }).then(response => {
    const data = response.data.items[0];

    return {
      title: data.snippet.title,
      author: data.snippet.channelTitle,
      viewCount: Number(data.statistics.viewCount)
    };
  });
};
