import React from 'react';
import PropTypes from 'prop-types';
import './video-info.css';

const VideoInfo = ({
  videoId,
  title,
  author,
  viewCount,
  likeCount,
  dislikeCount,
  commentCount
}) => {
  const url = 'https://www.youtube.com/watch?v=' + videoId;

  return (
    <div className="video-info">
      <h1>
        <a href={url}>{title || 'Video Title'}</a>
      </h1>
      <h2>{author || 'Author'}</h2>
      <div className="view-count-title">View Count</div>
      <div className="counter-wrapper">
        <div id="odometer" className="odometer">
          {viewCount}
        </div>
      </div>
      <div className="view-count-title">Like Count</div>
      <div className="counter-wrapper">
        <div id="odometer" className="odometer">
          {likeCount}
        </div>
      </div>
      <div className="view-count-title">Dislike Count</div>
      <div className="counter-wrapper">
        <div id="odometer" className="odometer">
          {dislikeCount}
        </div>
      </div>
      <div className="view-count-title">Comment Count</div>
      <div className="counter-wrapper">
        <div id="odometer" className="odometer">
          {commentCount}
        </div>
      </div>
    </div>
  );
};

VideoInfo.propTypes = {
  videoId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  viewCount: PropTypes.number.isRequired,
  likeCount: PropTypes.number.isRequired,
  dislikeCount: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired
};

export { VideoInfo };
