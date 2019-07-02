import React from 'react';
import PropTypes from 'prop-types';

// const Sizes = {
//   default: [120, 90],
//   medium: [320, 180],
//   high: [480, 360],
//   standard: [640, 480],
//   maxres: [1280, 720]
// };

// const getImageSize = sizeName => {
//   let size = Sizes['standard'];
//   if (Sizes[sizeName]) {
//     size = Sizes[sizeName];
//   }

//   return {
//     w: size[0],
//     h: size[1]
//   };
// };

const getImageUrl = (videoId, sizeName) => {
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

const Thumbnail = ({ videoId, title, size }) => {
  if (!size) size = 'standard';
  if (!title) title = 'Video Thumbnail';
  // const { w, h } = getImageSize(size);
  const imgUrl = getImageUrl(videoId, size);

  return (
    <div className="video-thumbnail">
      <img
        src={imgUrl}
        alt={title}
        style={{ height: 'auto', maxWidth: '100%' }}
      />
    </div>
  );
};

Thumbnail.propTypes = {
  videoId: PropTypes.string.isRequired,
  title: PropTypes.string,
  size: PropTypes.string
};

export { Thumbnail };
