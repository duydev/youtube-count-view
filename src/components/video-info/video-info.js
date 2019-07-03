import React from 'react';
import PropTypes from 'prop-types';
import './video-info.css';
import { Icon } from '@material-ui/core';

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
      <div className="view-count-title">
        _ <Icon>remove_red_eye</Icon> view_
      </div>
      <div className="counter-wrapper">
        <div id="odometer" className="odometer">
          {viewCount}
        </div>
      </div>
      <div className="view-count-title">
        _<Icon>thumb_up</Icon> like_
      </div>
      <div className="counter-wrapper">
        <div id="odometer" className="odometer">
          {likeCount}
        </div>
      </div>
      <div className="view-count-title">
        _<Icon>thumb_down</Icon> dislike_
      </div>
      <div className="counter-wrapper">
        <div id="odometer" className="odometer">
          {dislikeCount}
        </div>
      </div>
      <div className="view-count-title">
        _<Icon>comment</Icon> comment_
      </div>
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
