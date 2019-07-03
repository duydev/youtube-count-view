import React from 'react';
import PropTypes from 'prop-types';

const Thumbnail = ({ title, image, url }) => {
  return (
    <div className="video-thumbnail">
      <a target="_blanks" href={url}>
        <img
          src={image}
          alt={title}
          style={{ height: 'auto', maxWidth: '100%' }}
        />
      </a>
    </div>
  );
};

Thumbnail.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export { Thumbnail };
