import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress, Paper, Container } from '@material-ui/core';

import { VideoStatistics } from '../video-statistics';
import { VideoTitle } from '../video-title';

import { fetchData } from '../../services';
import { getVideoViewURL, getVideoEmbedURL } from '../../helpers';

import './video-detail.css';
import { EmbedVideo } from '../embed-video';

class VideoDetail extends React.Component {
  constructor(props) {
    super(props);

    this.allowFetchData = true;

    this.state = {
      title: 'Video Title',
      author: 'Author',
      viewCount: 0,
      likeCount: 0,
      dislikeCount: 0,
      commentCount: 0
    };
  }

  fetchInfo = () => {
    fetchData(this.props.videoId)
      .then(data => {
        this.setState({
          title: data.title,
          author: data.author
        });
      })
      .catch(err => {
        this.props.onError(err);
      });
  };

  fetchMetric = () => {
    if (!this.allowFetchData) return;

    fetchData(this.props.videoId)
      .then(data => {
        this.setState({
          viewCount: data.viewCount,
          likeCount: data.likeCount,
          dislikeCount: data.dislikeCount,
          commentCount: data.commentCount
        });

        setTimeout(this.fetchMetric, this.props.refreshTime || 2000);
      })
      .catch(err => {
        this.props.onError(err);
      });
  };

  componentDidMount() {
    this.fetchInfo();
    this.fetchMetric();
  }

  componentWillUnmount() {
    this.allowFetchData = false;
  }

  componentDidUpdate(prevProps) {
    if (this.props.videoId !== prevProps.videoId) {
      this.fetchInfo();
      this.fetchMetric();
    }
  }

  render() {
    return (
      <Paper>
        <Container>
          <VideoTitle
            title={this.state.title}
            author={this.state.author}
            url={getVideoViewURL(this.props.videoId)}
          />
          <EmbedVideo
            title={this.state.title}
            url={getVideoEmbedURL(this.props.videoId)}
          />
          <VideoStatistics
            viewCount={this.state.viewCount}
            likeCount={this.state.likeCount}
            dislikeCount={this.state.dislikeCount}
            commentCount={this.state.commentCount}
          />
        </Container>

        <div className="refresh-clock-wrapper">
          <CircularProgress value={80} className="refresh-clock" size={25} />
        </div>
      </Paper>
    );
  }
}

VideoDetail.propTypes = {
  videoId: PropTypes.string.isRequired,
  refreshTime: PropTypes.number.isRequired,
  onError: PropTypes.func.isRequired
};

export { VideoDetail };
