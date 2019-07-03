export const getVideoViewURL = videoId => {
  return 'https://www.youtube.com/watch?v=' + videoId;
};

export const getImageUrl = (videoId, sizeName) => {
  if (!videoId) throw Error('No video id.');
  switch (sizeName) {
    case 'default':
      return 'https://i.ytimg.com/vi/' + videoId + '/default.jpg';
    case 'medium':
      return 'https://i.ytimg.com/vi/' + videoId + '/mqdefault.jpg';
    case 'high':
      return 'https://i.ytimg.com/vi/' + videoId + '/hqdefault.jpg';
    case 'maxres':
      return 'https://i.ytimg.com/vi/' + videoId + '/maxresdefault.jpg';

    case 'standard':
    default:
      return 'https://i.ytimg.com/vi/' + videoId + '/sddefault.jpg';
  }
};

export const getVideoIdFromURL = url => {
  var id = '';
  url = url
    .replace(/(>|<)/gi, '')
    .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  if (url[2] !== undefined) {
    id = url[2].split(/[^0-9a-z_-]/i);
    id = id[0];
  } else {
    id = url[0];
  }

  return id;
};
