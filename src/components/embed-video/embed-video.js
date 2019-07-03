import React from 'react';
import PropTypes from 'prop-types';
import './embed-video.css';

const EmbedVideo = ({ url, title }) => {
  return (
    <div className="embed-wrapper">
      <iframe
        title={title}
        src={url}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  );
};

EmbedVideo.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export { EmbedVideo };
