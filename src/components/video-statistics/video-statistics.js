import React from 'react';
import PropTypes from 'prop-types';
import './video-statistics.css';
import { Icon, Grid } from '@material-ui/core';
import Odometer from 'react-odometerjs';

const VideoStatistics = ({
  viewCount,
  likeCount,
  dislikeCount,
  commentCount
}) => {
  return (
    <div className="video-statistics-wrapper">
      <h3>Video Statistics</h3>
      <Grid container className="video-statistics">
        <Grid item md={6} sm={6} xs={12}>
          <div className="view-count-title">
            _ <Icon>remove_red_eye</Icon> view_
          </div>
          <div className="counter-wrapper">
            <Odometer value={viewCount} />
          </div>
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <div className="view-count-title">
            _<Icon>thumb_up</Icon> like_
          </div>
          <div className="counter-wrapper">
            <Odometer value={likeCount} />
          </div>
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <div className="view-count-title">
            _<Icon>thumb_down</Icon> dislike_
          </div>
          <div className="counter-wrapper">
            <Odometer value={dislikeCount} />
          </div>
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <div className="view-count-title">
            _<Icon>comment</Icon> comment_
          </div>
          <div className="counter-wrapper">
            <Odometer value={commentCount} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

VideoStatistics.propTypes = {
  viewCount: PropTypes.number.isRequired,
  likeCount: PropTypes.number.isRequired,
  dislikeCount: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired
};

export { VideoStatistics };
