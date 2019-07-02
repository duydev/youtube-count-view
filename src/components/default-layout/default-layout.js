import React from 'react';
import { Container, Card, Grid } from '@material-ui/core';
import { Thumbnail } from '../thumbnail';
import { VideoInfo } from '../video-info';
import './default-layout.css';

import { fetchData } from '../../services';

class DefaultLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videoId: 'knW7-x7Y7RE',
      title: 'SƠN TÙNG M-TP | HÃY TRAO CHO ANH ft. Snoop Dogg | Official MV',
      author: 'Sơn Tùng M-TP Official',
      viewCount: 0,
      likeCount: 0,
      dislikeCount: 0,
      commentCount: 0
    };
  }

  fetchInfo = () => {
    const videoId = this.state.videoId;

    fetchData(videoId).then(data => {
      this.setState({
        title: data.title,
        author: data.author
      });
    });
  };

  fetchMetric = () => {
    const videoId = this.state.videoId;

    fetchData(videoId).then(data => {
      this.setState({
        viewCount: data.viewCount,
        likeCount: data.likeCount,
        dislikeCount: data.dislikeCount,
        commentCount: data.commentCount
      });
    });
  };

  componentDidMount() {
    this.fetchInfo();
    this.fetchMetric();

    this.intervalId = setInterval(() => {
      this.fetchMetric();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <Container className="wrapper">
        <Card>
          <Grid container>
            <Grid item md={6}>
              <Thumbnail
                title={this.state.title}
                videoId={this.state.videoId}
              />
            </Grid>
            <Grid item md={6}>
              <VideoInfo
                videoId={this.state.videoId}
                title={this.state.title}
                author={this.state.author}
                viewCount={this.state.viewCount}
                likeCount={this.state.likeCount}
                dislikeCount={this.state.dislikeCount}
                commentCount={this.state.commentCount}
              />
            </Grid>
          </Grid>
        </Card>
      </Container>
    );
  }
}

export { DefaultLayout };
