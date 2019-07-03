/* eslint-disable react/jsx-no-target-blank */
import React, { Fragment } from 'react';

import { VideoDetail } from './components/video-detail';
import { Footer } from './components/footer/footer';
import { SearchBar } from './components/search-bar';
import { Snackbar, SnackbarContent, Icon, IconButton } from '@material-ui/core';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isError: false,
      error: null,
      videoId: 'knW7-x7Y7RE',
      refreshTime: 2000
    };
  }

  changeVideoId = videoId => {
    this.setState({
      videoId
    });
  };

  handleFetchDataError = err => {
    this.setState({
      videoId: 'knW7-x7Y7RE',
      isError: true,
      error: err
    });
  };

  handleCloseNotify = () => {
    this.setState({ isError: false, error: null });
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
          onError={err => this.handleFetchDataError(err)}
        />
        <Footer />
        <Snackbar
          open={this.state.isError}
          autoHideDuration={3000}
          onClose={this.handleCloseNotify}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
        >
          <SnackbarContent
            style={{ backgroundColor: '#d32f2f' }}
            message={
              <div style={{ display: 'flex' }}>
                <Icon fontSize="small">error</Icon>
                <span style={{ paddingLeft: '10px' }}>Video not found!</span>
              </div>
            }
            action={[
              <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                onClick={this.handleCloseNotify}
              >
                <Icon>close</Icon>
              </IconButton>
            ]}
          />
        </Snackbar>
      </Fragment>
    );
  }
}

export { App };
