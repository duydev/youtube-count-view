import React from 'react';
import {
  InputBase,
  IconButton,
  Icon,
  Paper,
  Container
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import './search-bar.css';

import { getVideoIdFromSearchValue } from '../../helpers';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    let path = props.location.pathname;
    path = path.split('/');
    path = path[path.length - 1];

    const videoId = path || '';

    this.state = {
      videoId
    };
  }

  onInputChange = value => {
    this.setState({
      videoId: getVideoIdFromSearchValue(value)
    });
  };

  handleSubmit = () => {
    this.props.history.push('/video/' + this.state.videoId);
  };

  handleButtonClick = e => {
    this.handleSubmit(e);
  };

  handleKeyDown = e => {
    if (e.keyCode === 13) {
      this.handleSubmit(e);
    }
  };

  render() {
    return (
      <Container style={{ margin: '15px 0' }}>
        <Paper className="search-bar-wrapper">
          <InputBase
            className="search-bar-input"
            placeholder="Youtube Video ID or URL"
            inputProps={{
              'aria-label': 'Youtube Video ID or Youtube Video URL'
            }}
            value={this.state.videoId}
            onChange={e => this.onInputChange(e.target.value)}
          />
          <IconButton
            aria-label="Surf"
            onClick={this.handleButtonClick}
            onKeyDown={this.handleKeyDown}
          >
            <Icon>search</Icon>
          </IconButton>
        </Paper>
      </Container>
    );
  }
}

const SearchBarWithRouter = withRouter(SearchBar);

export { SearchBarWithRouter as SearchBar };
