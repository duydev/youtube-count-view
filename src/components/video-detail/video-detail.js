import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { CircularProgress, Paper, Container } from '@material-ui/core';
import { VideoStatistics } from '../video-statistics';
import { VideoTitle } from '../video-title';
import { EmbedVideo } from '../embed-video';
import { Notify } from '../notify';
import { fetchData } from '../../services';
import { getVideoViewURL, getVideoEmbedURL } from '../../helpers';
import './video-detail.css';

class VideoDetail extends React.Component {
  constructor(props) {
    super(props);

    this.allowFetchData = true;

    this.state = {
      isError: false,
      error: null,
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
        this.setState({
          isError: true,
          error: err
        });
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
        this.setState({
          isError: true,
          error: err
        });
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

  handleCloseNotify = () => {
    this.setState({
      isError: false,
      error: null
    });
  };

  render() {
    return (
      <Fragment>
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
        <Notify
          message="Video not found!"
          display={this.state.isError}
          onClose={this.handleCloseNotify}
        />
      </Fragment>
    );
  }
}

VideoDetail.propTypes = {
  videoId: PropTypes.string.isRequired,
  refreshTime: PropTypes.number
};

export { VideoDetail };
