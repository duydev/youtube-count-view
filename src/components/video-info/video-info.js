import React from 'react';
import PropTypes from 'prop-types';
import './video-info.css';

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

const VideoInfo = ({ videoId, title, author, viewCount }) => {
  const url = 'https://www.youtube.com/watch?v=' + videoId;

  return (
    <div className="video-info">
      <h1>
        <a href={url}>{title || 'Video Title'}</a>
      </h1>
      <h2>{author || 'Author'}</h2>
      <div className="view-count-title">View Count</div>
      <div className="view-count">{formatNumber(viewCount) || 0}</div>
    </div>
  );
};

VideoInfo.propTypes = {
  videoId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  viewCount: PropTypes.number.isRequired
};

export { VideoInfo };
