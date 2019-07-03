import React from 'react';
import { InputBase, IconButton, Icon, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import './search-bar.css';

import { getVideoIdFromURL } from '../../helpers';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videoId: this.props.value,
      url: ''
    };
  }

  onInputChange = value => {
    this.setState({
      videoId: getVideoIdFromURL(value),
      url: value
    });
  };

  onButtonClick = () => {
    this.props.onSubmit(this.state.videoId);
  };

  render() {
    return (
      <Paper className="search-bar-wrapper">
        <InputBase
          className="search-bar-input"
          placeholder="Youtube Video URL"
          inputProps={{ 'aria-label': 'Youtube Video URL' }}
          value={this.state.url}
          onChange={e => this.onInputChange(e.target.value)}
        />
        <IconButton aria-label="Surf" onClick={e => this.onButtonClick(e)}>
          <Icon>search</Icon>
        </IconButton>
      </Paper>
    );
  }
}

SearchBar.propTypes = {
  value: PropTypes.string,
  onSubmit: PropTypes.func.isRequired
};

export { SearchBar };
