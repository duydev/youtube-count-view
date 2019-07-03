/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import PropTypes from 'prop-types';
import './video-title.css';

const VideoTitle = ({ title, author, url }) => {
  return (
    <div className="video-title">
      <h1>
        <a target="_blank" href={url}>
          {title}
        </a>
      </h1>
      <h2>{author}</h2>
    </div>
  );
};

VideoTitle.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export { VideoTitle };
