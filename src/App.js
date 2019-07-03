/* eslint-disable react/jsx-no-target-blank */
import React, { Fragment } from 'react';

import { VideoDetail } from './components/video-detail';
import { Footer } from './components/footer/footer';
import { SearchBar } from './components/search-bar';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videoId: 'knW7-x7Y7RE',
      refreshTime: 2000
    };
  }

  changeVideoId = videoId => {
    this.setState({
      videoId
    });
  };

  render() {
    return (
      <Fragment>
        <SearchBar
          value={this.state.videoId}
          onSubmit={e => this.changeVideoId(e)}
        />
        <VideoDetail
          videoId={this.state.videoId}
          refreshTime={this.state.refreshTime}
        />
        <Footer />
      </Fragment>
    );
  }
}

export { App };
