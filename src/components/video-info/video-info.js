import React from 'react';
import PropTypes from 'prop-types';
import './video-info.css';

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

const VideoInfo = ({ title, author, viewCount }) => {
  return (
    <div className="video-info">
      <h1>{title || 'Video Title'}</h1>
      <h2>{author || 'Author'}</h2>
      <div className="view-count-title">View Count</div>
      <div className="view-count">{formatNumber(viewCount) || 0}</div>
    </div>
  );
};

VideoInfo.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  viewCount: PropTypes.number.isRequired
};

export { VideoInfo };
